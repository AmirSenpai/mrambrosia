interface Env {
  GITHUB_TOKEN?: string;
}

interface PagesContext {
  request: Request;
  env: Env;
}

const USERNAME = "AmirSenpai";
const CACHE_SECONDS = 60 * 60 * 6;

const query = `
  query ProfileActivity($login: String!, $from: DateTime!, $to: DateTime!) {
    user(login: $login) {
      login
      url
      followers { totalCount }
      repositories(first: 100, ownerAffiliations: OWNER, privacy: PUBLIC, isFork: false) {
        totalCount
        nodes {
          languages(first: 10, orderBy: { field: SIZE, direction: DESC }) {
            edges {
              size
              node { name color }
            }
          }
        }
      }
      contributionsCollection(from: $from, to: $to) {
        totalCommitContributions
        totalIssueContributions
        totalPullRequestContributions
        restrictedContributionsCount
        contributionCalendar {
          totalContributions
          weeks {
            contributionDays {
              date
              weekday
              contributionCount
              contributionLevel
            }
          }
        }
      }
    }
  }
`;

function json(body: unknown, status = 200, headers: HeadersInit = {}) {
  return new Response(JSON.stringify(body), {
    status,
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "Cache-Control": status === 200
        ? `public, max-age=0, s-maxage=${CACHE_SECONDS}, stale-while-revalidate=86400`
        : "no-store",
      "X-Content-Type-Options": "nosniff",
      ...headers,
    },
  });
}

export async function onRequestGet({ request, env }: PagesContext) {
  const token = env.GITHUB_TOKEN;
  if (!token) {
    return json({ error: "GitHub activity is not configured yet." }, 503);
  }

  const cache = (globalThis as unknown as { caches?: { default?: Cache } }).caches?.default;
  const cacheKey = new Request(new URL("/api/github", request.url).toString(), { method: "GET" });

  if (cache) {
    const cached = await cache.match(cacheKey);
    if (cached) return cached;
  }

  const to = new Date();
  const from = new Date(to.getTime() - 364 * 24 * 60 * 60 * 1000);

  try {
    const upstream = await fetch("https://api.github.com/graphql", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
        "User-Agent": "MrAmbrosia-Portfolio",
      },
      body: JSON.stringify({
        query,
        variables: {
          login: USERNAME,
          from: from.toISOString(),
          to: to.toISOString(),
        },
      }),
    });

    if (!upstream.ok) {
      return json({ error: "GitHub could not provide activity data." }, 502);
    }

    const payload = await upstream.json() as {
      data?: {
        user?: {
          login: string;
          url: string;
          followers: { totalCount: number };
          repositories: {
            totalCount: number;
            nodes: Array<{
              languages: {
                edges: Array<{ size: number; node: { name: string; color: string | null } }>;
              };
            }>;
          };
          contributionsCollection: {
            totalCommitContributions: number;
            totalIssueContributions: number;
            totalPullRequestContributions: number;
            restrictedContributionsCount: number;
            contributionCalendar: {
              totalContributions: number;
              weeks: Array<{
                contributionDays: Array<{
                  date: string;
                  weekday: number;
                  contributionCount: number;
                  contributionLevel: string;
                }>;
              }>;
            };
          };
        };
      };
      errors?: Array<{ message: string }>;
    };

    const user = payload.data?.user;
    if (!user || payload.errors?.length) {
      return json({ error: "GitHub activity is temporarily unavailable." }, 502);
    }

    const languageTotals = new Map<string, { name: string; color: string | null; bytes: number }>();
    for (const repository of user.repositories.nodes) {
      for (const edge of repository.languages.edges) {
        const current = languageTotals.get(edge.node.name);
        if (current) current.bytes += edge.size;
        else languageTotals.set(edge.node.name, {
          name: edge.node.name,
          color: edge.node.color,
          bytes: edge.size,
        });
      }
    }

    const allLanguages = [...languageTotals.values()].sort((a, b) => b.bytes - a.bytes);
    const languageBytes = allLanguages.reduce((sum, language) => sum + language.bytes, 0);
    const languages = allLanguages.slice(0, 5);

    const contributions = user.contributionsCollection;
    const result = {
      profile: {
        username: user.login,
        url: user.url,
        followers: user.followers.totalCount,
        publicRepositories: user.repositories.totalCount,
      },
      stats: {
        total: contributions.contributionCalendar.totalContributions,
        commits: contributions.totalCommitContributions,
        pullRequests: contributions.totalPullRequestContributions,
        issues: contributions.totalIssueContributions,
      },
      calendar: contributions.contributionCalendar.weeks,
      languages: languages.map(language => ({
        name: language.name,
        color: /^#[0-9a-fA-F]{6}$/.test(language.color || "") ? language.color : "#8290a4",
        percentage: languageBytes ? Math.round(language.bytes / languageBytes * 1000) / 10 : 0,
      })),
      year: to.getUTCFullYear(),
      privateCountsIncluded: contributions.restrictedContributionsCount > 0,
      updatedAt: to.toISOString(),
    };

    const response = json(result);
    if (cache) {
      await cache.put(cacheKey, response.clone());
    }
    return response;
  } catch {
    return json({ error: "GitHub activity is temporarily unavailable." }, 502);
  }
}
