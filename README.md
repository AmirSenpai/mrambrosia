# MrAmbrosia

MrAmbrosia is an independent software studio creating focused digital products for reading, creativity, and personal finance.

**Production website:** https://mrambrosia.ir  
**Repository:** https://github.com/AmirSenpai/mrambrosia

## Products

- **PageNest** — An offline-first Android reading app. [Google Play alternative / Myket listing](https://myket.ir/app/ir.pagenest.mrambrosia)
- **Moodify** — A bilingual browser-based creative and file toolkit. [Open Moodify](https://moodifyweb.ir)
- **Mr Gholak** — A Persian-first personal finance app for web and Android. [Open web app](https://webapp.mrgholak.ir)

Product descriptions on the website are intentionally concise. Private source repositories and internal development notes are not linked publicly.

## Tech stack

- React 19
- TypeScript
- Vite 8
- Tailwind CSS 4
- Framer Motion
- Lucide React

## Local development

Requirements: Node.js 22 or newer and npm.

```bash
npm ci
npm run dev
```

## Quality checks

Run these before publishing:

```bash
npm run lint
npm run build
npm run preview
```

The production build is generated in `dist/`.

## Deploy to Cloudflare Pages

This repository is configured for **Cloudflare Pages Git integration**. No Wrangler token, GitHub Pages deployment, or build-time secret is required.

1. Open the [Cloudflare dashboard](https://dash.cloudflare.com/) and select **Workers & Pages**.
2. Choose **Create application → Pages → Connect to Git**.
3. Authorize GitHub and select `AmirSenpai/mrambrosia`.
4. Set the build configuration:

   | Setting | Value |
   | --- | --- |
   | Production branch | `main` |
   | Framework preset | `Vite` |
   | Root directory | `/` (repository root) |
   | Build command | `npm run build` |
   | Build output directory | `dist` |
   | Node.js version | `22` |

5. Select **Save and Deploy**.

Cloudflare will build and publish the site. New commits pushed to `main` will trigger production deployments; other branches can be used for preview deployments.

### Custom domain

After the first successful deployment:

1. Open the Pages project → **Custom domains**.
2. Select **Set up a custom domain**.
3. Add `mrambrosia.ir` and follow Cloudflare's DNS instructions.
4. Add `www.mrambrosia.ir` only if you intend to use it; configure a redirect to the canonical apex domain.
5. Confirm HTTPS is active before submitting the site to search engines.

### Cloudflare configuration

- `public/_headers` is copied into the deployment and defines security and cache headers.
- `public/_redirects` redirects retired support URLs to the homepage.
- `public/robots.txt` allows indexing and points crawlers to the sitemap.
- `public/sitemap.xml` lists the canonical homepage.
- `public/og-image.svg` provides a branded social preview image.

## Continuous integration

GitHub Actions runs dependency installation, ESLint, and the production build on pushes and pull requests. It does **not** deploy to GitHub Pages; Cloudflare Pages owns production deployment.

## SEO

The site includes a canonical URL, localized search description, Open Graph and Twitter metadata, an organization JSON-LD record, a crawlable sitemap, and a robots policy. Search engines may take time to recrawl updated pages after deployment.
