import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import {
  ArrowDown, ArrowUpRight, BookOpen, Code2, Languages, Menu,
  Palette, WalletCards, X, Github, GitCommitHorizontal, GitPullRequest, FolderGit2, RefreshCw,
} from 'lucide-react';

type Language = 'en' | 'fa';
type ProjectKey = 'pagenest' | 'moodify' | 'gholak';

const copy = {
  en: {
    nav: ['Studio', 'Activity', 'Products', 'About'],
    heroKicker: 'INDEPENDENT SOFTWARE STUDIO · AMIR SENPAI',
    heroTitle: 'Independent software, built with purpose.',
    heroText: 'MrAmbrosia is an independent software studio creating focused digital products for reading, creativity, and personal finance.',
    explore: 'Explore the products', github: 'About the studio',
    productsEyebrow: 'THE PRODUCT LINEUP', productsTitle: 'Three products. Three clear purposes.',
    productsIntro: 'A focused collection of products, each designed around a distinct everyday need.',
    openProduct: 'Open product', activityTitle: 'A year in code.', activityIntro: 'A snapshot of recent work across GitHub.', contributions: 'Contributions', commits: 'Commits', pullRequests: 'Pull requests', repositories: 'Public repositories', languagesTitle: 'Languages', languagesNote: 'Across public repositories', viewGithub: 'View GitHub profile', privateNote: 'Private activity is included as aggregate counts only when enabled in GitHub settings.', loadingActivity: 'Loading GitHub activity…', activityError: 'GitHub activity is temporarily unavailable.', retry: 'Try again', less: 'Less', more: 'More',
    pagenestType: 'ANDROID READING APP',
    pagenestSummary: 'A local-first reading library and reader for people who want their books organised, comfortable to read, and available offline.',
    moodifyType: 'BROWSER-BASED CREATIVE TOOLKIT',
    moodifySummary: 'A bilingual collection of small creative and file tools: make visual pieces, prepare images and documents, and create assets in the browser.',
    gholakType: 'PERSIAN PERSONAL FINANCE · WEB + ANDROID',
    gholakSummary: 'A Persian-first money manager for tracking everyday finances, planning ahead, and keeping a clearer picture of what comes in and goes out.',
    current: 'Current status', pagenestStatus: 'Android · available', moodifyStatus: 'Web app · available', gholakStatus: 'Web app · available',
    aboutKicker: 'ABOUT THE STUDIO', aboutTitle: 'Independent software, thoughtfully made.',
    aboutText: 'MrAmbrosia is an independent software studio founded by Amir. We build practical digital products with a focus on clarity, usability, and thoughtful engineering.',
    principles: ['Build for a real use case', 'Respect people’s data', 'Be clear about product status', 'Improve the details'],
    supportKicker: 'KEEP GOOD INDEPENDENT SOFTWARE MOVING',
    supportTitle: 'If a product helped, help it keep growing.',
    supportText: 'Support keeps time available for maintenance, accessibility, bug fixes and the next useful feature. The support page only shows options that are actually configured.',
    supportCta: 'Ways to support', contactTitle: 'Questions, feedback or collaboration?',
    contactText: 'For product feedback, bug reports or a possible collaboration, get in touch.',
    contact: 'Email Amir', footer: 'Independent software, built with care.',
    language: 'Language', made: 'DESIGNED & BUILT BY AMIR',
    projectCount: '03 / PRODUCTS', scroll: 'SCROLL TO EXPLORE',
    moodifyLinkLabel: 'Open Moodify', gholakLinkLabel: 'Open Mr Gholak', pagenestLinkLabel: 'View on Myket',
  },
  fa: {
    nav: ['استودیو', 'فعالیت', 'محصولات', 'درباره'],
    heroKicker: 'استودیوی مستقل نرم‌افزار · امیر سنپای',
    heroTitle: 'نرم‌افزار مستقل، با هدف و دقت ساخته‌شده.',
    heroText: 'MrAmbrosia یک استودیوی مستقل نرم‌افزار است که محصولاتی کاربردی در حوزه مطالعه، خلاقیت و مدیریت مالی توسعه می‌دهد.',
    explore: 'دیدن محصولات', github: 'درباره استودیو',
    productsEyebrow: 'محصولات استودیو', productsTitle: 'سه محصول، با سه کاربرد روشن.',
    productsIntro: 'مجموعه‌ای از محصولات مستقل که هرکدام برای پاسخ به یک نیاز مشخص طراحی شده‌اند.',
    openProduct: 'ورود به محصول', activityTitle: 'یک سال فعالیت برنامه‌نویسی.', activityIntro: 'نمایی از فعالیت‌های اخیر در گیت‌هاب.', contributions: 'مشارکت‌ها', commits: 'کامیت‌ها', pullRequests: 'پول‌ریکوئست‌ها', repositories: 'مخازن عمومی', languagesTitle: 'زبان‌ها', languagesNote: 'بر اساس مخازن عمومی', viewGithub: 'مشاهده پروفایل گیت‌هاب', privateNote: 'فعالیت مخازن خصوصی، در صورت فعال‌بودن تنظیمات گیت‌هاب، فقط به‌شکل آمار تجمیعی نمایش داده می‌شود.', loadingActivity: 'در حال دریافت آمار گیت‌هاب…', activityError: 'دریافت آمار گیت‌هاب موقتاً ممکن نیست.', retry: 'تلاش دوباره', less: 'کمتر', more: 'بیشتر', productDetails: 'جزئیات محصول',
    pagenestType: 'کتاب‌خوان اندروید',
    pagenestSummary: 'کتابخانه و کتاب‌خوانی آفلاین و محلی برای کسانی که می‌خواهند کتاب‌هایشان مرتب، خواندنشان راحت و همیشه در دسترس باشد.',
    moodifyType: 'مجموعه ابزارهای خلاقانه تحت وب',
    moodifySummary: 'مجموعه‌ای دوزبانه از ابزارهای کوچک خلاقانه و فایل؛ برای ساخت محتوای بصری، آماده‌سازی عکس و سند و انجام کارها در مرورگر.',
    gholakType: 'مدیریت مالی فارسی · وب و اندروید',
    gholakSummary: 'مدیریت مالی فارسی‌محور برای ثبت دخل‌وخرج، برنامه‌ریزی و داشتن تصویری روشن‌تر از پولی که وارد و خارج می‌شود.',
    current: 'وضعیت فعلی', pagenestStatus: 'اندروید · در دسترس', moodifyStatus: 'وب‌اپ · در دسترس', gholakStatus: 'وب‌اپ · در دسترس',
    aboutKicker: 'درباره استودیو', aboutTitle: 'نرم‌افزار مستقل، با تمرکز بر کیفیت.',
    aboutText: 'MrAmbrosia استودیوی مستقل نرم‌افزار به بنیان‌گذاری امیر است. تمرکز ما توسعه محصولات دیجیتال کاربردی با رابطی روشن، تجربه‌ای قابل‌اعتماد و مهندسی دقیق است.',
    principles: ['ساخت برای یک نیاز واقعی', 'احترام به داده کاربران', 'شفافیت درباره وضعیت محصول', 'بهبود جزئیات'],
    supportKicker: 'کمک به ادامه مسیر نرم‌افزار مستقل',
    supportTitle: 'اگر محصولی به کارت آمده، کمک کن رشد کند.',
    supportText: 'حمایت کمک می‌کند زمان بیشتری برای نگهداری، دسترس‌پذیری، رفع باگ و قابلیت‌های مفید بعدی داشته باشم. صفحه حمایت فقط گزینه‌هایی را نشان می‌دهد که واقعاً تنظیم شده‌اند.',
    supportCta: 'راه‌های حمایت', contactTitle: 'سؤال، بازخورد یا پیشنهاد همکاری داری؟',
    contactText: 'برای بازخورد محصول، گزارش باگ یا پیشنهاد همکاری می‌توانی پیام بدهی.',
    contact: 'ایمیل به امیر', footer: 'نرم‌افزار مستقل، با دقت ساخته‌شده.',
    language: 'زبان', made: 'طراحی و توسعه توسط امیر',
    projectCount: '۰۳ / محصول', scroll: 'برای دیدن بیشتر اسکرول کن',
    moodifyLinkLabel: 'ورود به Moodify', gholakLinkLabel: 'ورود به Mr Gholak', pagenestLinkLabel: 'مشاهده در مایکت',
  },
} as const;

const products: { key: ProjectKey; number: string; name: string; href: string; kind: string }[] = [
  { key: 'pagenest', number: '01', name: 'PageNest', href: 'https://myket.ir/app/ir.pagenest.mrambrosia', kind: 'book' },
  { key: 'moodify', number: '02', name: 'Moodify', href: 'https://www.moodifyweb.ir/fa/home', kind: 'mood' },
  { key: 'gholak', number: '03', name: 'Mr Gholak', href: 'https://webapp.mrgholak.ir', kind: 'gholak' },
];

function Header({ lang, setLang }: { lang: Language; setLang: (v: Language) => void }) {
  const t = copy[lang];
  const [menuOpen, setMenuOpen] = useState(false);
  const links = [
    { href: '#home', label: t.nav[0] },
    { href: '#activity', label: t.nav[1] },
    { href: '#products', label: t.nav[2] },
    { href: '#about', label: t.nav[3] },
  ];
  return <header className="site-header"><div className="header-inner">
    <a className="brand" href="/" aria-label="MrAmbrosia home"><span className="brand-symbol">m<span>.</span></span><span className="brand-name">mrambrosia<span>/ independent software</span></span></a>
    <nav className={menuOpen ? 'main-nav nav-open' : 'main-nav'}>{links.map(link => <a key={link.href} href={link.href} onClick={() => setMenuOpen(false)}>{link.label}</a>)}</nav>
    <div className="header-actions"><button className="icon-button language-button" onClick={() => setLang(lang === 'en' ? 'fa' : 'en')} aria-label="Switch language"><Languages size={16} /><span>{lang === 'en' ? 'FA' : 'EN'}</span></button><button className="icon-button menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">{menuOpen ? <X size={19} /> : <Menu size={19} />}</button></div>
  </div></header>;
}

function ProductArtwork({ kind }: { kind: string }) {
  if (kind === 'book') return <div className="artwork artwork-book" aria-hidden="true">
    <div className="book-backdrop-grid" /><div className="book-ring ring-one" /><div className="book-ring ring-two" />
    <div className="book-spread"><div className="book-page-left"><span>CHAPTER 04</span><i /><i /><i /><i /><i /><b>—</b></div><div className="book-page-right"><span>THE NEXT PAGE</span><strong>Read<br />at your<br />own pace.</strong><small>PAGENEST / 3.1</small></div></div>
    <div className="reading-progress"><span>READING PROGRESS</span><b>68%</b><i><em /></i></div>
    <span className="art-label">A LIBRARY THAT STAYS YOURS</span>
  </div>;
  if (kind === 'mood') return <div className="artwork artwork-mood" aria-hidden="true">
    <div className="mood-grid" /><div className="mood-window"><div className="mood-window-top"><i /><i /><i /><span>MOODIFY / TOOLKIT</span></div><div className="mood-tiles"><div className="mood-tile tile-polaroid"><span>PHOTO</span><b>01</b></div><div className="mood-tile tile-avatar"><span>AVATAR</span><b>✳</b></div><div className="mood-tile tile-qr"><span>QR CODE</span><b>▦</b></div><div className="mood-tile tile-music"><span>MUSIC</span><b>♫</b></div></div><div className="mood-window-foot"><span>CREATE</span><span>CONVERT</span><span>EXPORT</span></div></div>
    <span className="art-label">MAKE SOMETHING YOURS</span>
  </div>;
  return <div className="artwork artwork-gholak" aria-hidden="true">
    <div className="finance-dashboard"><div className="finance-heading"><span>MR GHOLAK / OVERVIEW</span><i /></div><div className="finance-balance"><small>موجودی کل</small><strong>••••••••</strong><span>MONTHLY OVERVIEW</span></div><div className="finance-stats"><div><small>درآمد</small><b>↗</b><i /></div><div><small>هزینه</small><b>↘</b><i /></div></div><div className="finance-chart"><span>MONTHLY ACTIVITY</span><div>{[30,55,40,82,58,95,66,74,46,88].map((h,i)=><i key={i} style={{height:h+'%'}} />)}</div></div><div className="finance-footer"><span>بودجه</span><span>پس‌انداز</span><span>دارایی</span></div></div>
    <span className="art-label">MONEY, MADE CLEAR</span>
  </div>;
}

function ProductCard({ product, index, lang }: { product: typeof products[number]; index: number; lang: Language }) {
  const t = copy[lang];
  const summary = { pagenest: t.pagenestSummary, moodify: t.moodifySummary, gholak: t.gholakSummary }[product.key];
  const type = { pagenest: t.pagenestType, moodify: t.moodifyType, gholak: t.gholakType }[product.key];
  const status = { pagenest: t.pagenestStatus, moodify: t.moodifyStatus, gholak: t.gholakStatus }[product.key];
  const Icon = { pagenest: BookOpen, moodify: Palette, gholak: WalletCards }[product.key];
  return <motion.article className={'product-card product-' + product.kind} initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.12 }} transition={{ duration: 0.45, delay: index * 0.07 }}>
    <div className="product-art"><ProductArtwork kind={product.kind} /><span className="product-number">{product.number}</span></div>
    <div className="product-body"><div className="product-meta"><span>{type}</span><span className="product-status"><i />{status}</span></div><h3>{product.name}<span>.</span></h3><p>{summary}</p><div className="product-actions"><a className="text-link" href={product.href} target="_blank" rel="noreferrer">{product.key === 'pagenest' ? t.pagenestLinkLabel : product.key === 'moodify' ? t.moodifyLinkLabel : t.gholakLinkLabel}<ArrowUpRight size={15} /></a></div></div>
    <div className="product-index"><Icon size={15} /><span>{product.number} / 03</span></div>
  </motion.article>;
}


type ActivityDay = { date: string; weekday: number; contributionCount: number; contributionLevel: string };
type ActivityData = {
  profile: { username: string; url: string; followers: number; publicRepositories: number };
  stats: { total: number; commits: number; pullRequests: number; issues: number };
  calendar: Array<{ contributionDays: ActivityDay[] }>;
  languages: Array<{ name: string; color: string; percentage: number }>;
};

function GitHubActivity({ lang }: { lang: Language }) {
  const t = copy[lang];
  const [data, setData] = useState<ActivityData | null>(null);
  const [loading, setLoading] = useState(true);
  const [failed, setFailed] = useState(false);
  const [attempt, setAttempt] = useState(0);
  const number = (value: number) => new Intl.NumberFormat(lang === 'fa' ? 'fa-IR' : 'en-US').format(value);

  useEffect(() => {
    const controller = new AbortController();
    setLoading(true);
    setFailed(false);
    fetch('/api/github', { signal: controller.signal })
      .then(response => {
        if (!response.ok) throw new Error('GitHub activity request failed');
        return response.json() as Promise<ActivityData>;
      })
      .then(result => setData(result))
      .catch(error => {
        if (error.name !== 'AbortError') setFailed(true);
      })
      .finally(() => {
        if (!controller.signal.aborted) setLoading(false);
      });
    return () => controller.abort();
  }, [attempt]);

  const stats = data ? [
    { label: t.contributions, value: data.stats.total, icon: Github },
    { label: t.commits, value: data.stats.commits, icon: GitCommitHorizontal },
    { label: t.pullRequests, value: data.stats.pullRequests, icon: GitPullRequest },
    { label: t.repositories, value: data.profile.publicRepositories, icon: FolderGit2 },
  ] : [];

  return <section className="activity-section page-shell" id="activity">
    <div className="activity-heading">
      <div><span className="section-index">01 — GITHUB ACTIVITY</span><h2>{t.activityTitle}</h2><p>{t.activityIntro}</p></div>
      <a className="activity-profile-link" href="https://github.com/AmirSenpai" target="_blank" rel="noreferrer"><Github size={16} />{t.viewGithub}<ArrowUpRight size={14} /></a>
    </div>
    {loading && <div className="activity-loading" aria-live="polite"><span className="activity-spinner" />{t.loadingActivity}</div>}
    {failed && !loading && <div className="activity-error" role="status"><span>{t.activityError}</span><button onClick={() => setAttempt(value => value + 1)}><RefreshCw size={14} />{t.retry}</button></div>}
    {data && <>
      <div className="activity-stats">{stats.map(item => {
        const Icon = item.icon;
        return <article className="activity-stat" key={item.label}><Icon size={16} /><span>{item.label}</span><strong>{number(item.value)}</strong></article>;
      })}</div>
      <div className="activity-panels">
        <div className="activity-panel contribution-panel">
          <div className="activity-panel-heading"><div><h3>{t.contributions}</h3><span>{number(data.stats.total)} · {lang === 'fa' ? '۳۶۵ روز گذشته' : 'last 365 days'}</span></div><span className="activity-year">365D</span></div>
          <div className="heatmap-scroll"><div className="contribution-heatmap" role="group" aria-label="GitHub contribution activity for the last year">
            {data.calendar.map((week, weekIndex) => week.contributionDays.map(day =>
              <span
                key={day.date}
                className={'contribution-day level-' + day.contributionLevel.toLowerCase().replace('_quartile', '')}
                style={{ gridColumn: weekIndex + 1, gridRow: day.weekday + 1 }}
                title={`${number(day.contributionCount)} · ${day.date}`}
                aria-label={`${day.date}: ${day.contributionCount} contributions`}
              />
            ))}
          </div></div>
          <div className="heatmap-legend"><span>{t.less}</span><i className="level-none" /><i className="level-first" /><i className="level-second" /><i className="level-third" /><i className="level-fourth" /><span>{t.more}</span></div>
          <p className="activity-private-note">{t.privateNote}</p>
        </div>
        <div className="activity-panel languages-panel">
          <div className="activity-panel-heading"><div><h3>{t.languagesTitle}</h3><span>{t.languagesNote}</span></div><Code2 size={17} /></div>
          {data.languages.length ? <div className="language-list">{data.languages.map(language =>
            <div className="language-row" key={language.name}>
              <div className="language-label"><span><i style={{ background: language.color }} />{language.name}</span><b>{number(language.percentage)}%</b></div>
              <div className="language-track"><i style={{ width: language.percentage + '%', background: language.color }} /></div>
            </div>
          )}</div> : <p className="activity-private-note">{t.languagesNote}</p>}
        </div>
      </div>
    </>}
  </section>;
}

function App() {
  const [lang, setLang] = useState<Language>(() => (localStorage.getItem('ambrosia-lang') as Language) || 'fa');
  const t = copy[lang];
  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'fa' ? 'rtl' : 'ltr';
    document.documentElement.dataset.theme = 'dark';
    document.documentElement.style.colorScheme = 'dark';
    localStorage.setItem('ambrosia-lang', lang);
  }, [lang]);
  return <div className="app-frame">
    <Header lang={lang} setLang={setLang} />
    <main>
      <section className="hero page-shell" id="home"><div className="hero-content"><motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45 }}>
        <span className="eyebrow"><span className="eyebrow-mark" />{t.heroKicker}</span><h1>{t.heroTitle}</h1><p className="hero-description">{t.heroText}</p>
        <div className="hero-actions"><a className="button button-primary" href="#products">{t.explore}<ArrowDown size={16} /></a><a className="button button-quiet" href="#about"><Code2 size={16} />{t.github}</a></div>
      </motion.div></div>
      <motion.div className="hero-art" initial={{ opacity: 0, scale: 0.97 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.55, delay: 0.08 }}><div className="hero-art-grid" /><div className="hero-orbit hero-orbit-a" /><div className="hero-orbit hero-orbit-b" /><div className="hero-mark"><span>MR</span><strong>AMBROSIA</strong><small>SOFTWARE / STUDIO</small></div><div className="hero-side-note">IDEAS INTO SOFTWARE</div><div className="hero-coordinate">INDEPENDENT / PRODUCT STUDIO</div></motion.div>
      <div className="hero-bottom"><span>{t.projectCount}</span><span>{t.scroll} ↓</span></div></section>
      <GitHubActivity lang={lang} />
      <section className="products-section page-shell" id="products"><div className="section-heading"><div><span className="section-index">02 — {t.productsEyebrow}</span><h2>{t.productsTitle}</h2></div><p>{t.productsIntro}</p></div><div className="products-grid">{products.map((product,index)=><ProductCard key={product.key} product={product} index={index} lang={lang} />)}</div></section>
      <section className="about-section page-shell" id="about"><div className="about-mark"><Code2 size={34} /><span>BUILD / VERIFY / IMPROVE</span></div><div className="about-copy"><span className="section-index">03 — {t.aboutKicker}</span><h2>{t.aboutTitle}</h2><p>{t.aboutText}</p><div className="principle-list">{t.principles.map((value,i)=><span key={value}><b>0{i+1}</b>{value}</span>)}</div></div></section>
      <section className="contact-section page-shell" id="contact"><div><span className="section-index">04 — CONTACT</span><h2>{t.contactTitle}</h2><p>{t.contactText}</p></div><a className="contact-link" href="mailto:itsdekusenpai@gmail.com">{t.contact}<ArrowUpRight size={18} /></a></section>
    </main>
    <footer className="site-footer"><div className="footer-inner"><a className="brand" href="/"><span className="brand-symbol">m<span>.</span></span><span className="brand-name">mrambrosia<span>/ independent software</span></span></a><span>{t.footer} © {new Date().getFullYear()}</span><span className="footer-credit">{t.made}</span></div></footer>
  </div>;
}

export default App;
