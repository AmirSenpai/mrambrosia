import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, ArrowUpRight, BookOpen, Code2, Heart, Languages, Menu, Moon, Music2, Palette, ShieldCheck, Sparkles, Sun, WalletCards, X, Coffee } from 'lucide-react';

type Language = 'en' | 'fa';
type Theme = 'light' | 'dark';
type Accent = 'blue' | 'violet' | 'mint';

const copy = {
  en: {
    nav: ['Studio', 'Projects', 'About'], support: 'Support the work',
    heroKicker: 'INDEPENDENT SOFTWARE STUDIO · EST. BY AMIR',
    heroTitle: 'A little studio for ideas that deserve to exist.',
    heroText: 'I design and build thoughtful digital products — from a quieter place to read, to tools that make everyday life feel a little easier.',
    explore: 'Explore the projects', github: 'Find me on GitHub', featured: 'THE CURRENT LINEUP',
    projectsTitle: 'Three projects. Three different worlds.',
    projectsIntro: 'Each product has its own purpose, personality, and visual language. Built independently, connected by the same care for detail.',
    openProject: 'Explore project', source: 'Source code',
    pagenestType: 'READING · ANDROID', pagenestDesc: 'A calm home for your books. Read EPUB, PDF and text, keep your library close, and make space for the habit of reading.',
    moodifyType: 'CREATIVE TOOLS · WEB', moodifyDesc: 'A collection of playful tools for self-expression — avatars, collages, music, wallpapers and little creative experiments.',
    gholakType: 'PERSONAL FINANCE · ANDROID + WEB', gholakDesc: 'A Persian-first companion for tracking money, planning budgets, and understanding your everyday finances without the spreadsheet headache.',
    status: 'INDEPENDENT PROJECT', aboutKicker: 'A SMALL INDEPENDENT STUDIO',
    aboutTitle: 'Made with curiosity. Shipped with care.',
    aboutText: 'MrAmbrosia is the home for the things I make: useful software, small experiments, and ideas that grow into products. No giant team or corporate playbook — just thoughtful work, iteration, and a lot of tabs open.',
    values: ['Useful by default', 'Designed with intention', 'Always getting better'],
    supportKicker: 'HELP KEEP THE LIGHTS ON', supportTitle: 'Good software grows with its community.',
    supportText: 'If something I make has been useful to you, you can help me keep building. A kind word, a GitHub star, or a contribution all make a difference.',
    supportCta: 'Ways to support', contactTitle: 'Have an idea? Let’s talk.',
    contactText: 'Questions, feedback, bug reports, or a collaboration in mind? I’d love to hear from you.',
    contact: 'Get in touch', footer: 'Independent software, made with care.',
    language: 'Language', theme: 'Appearance', light: 'Light', dark: 'Dark', palette: 'Accent',
    supportPageKicker: 'A NOTE OF THANKS', supportPageTitle: 'Support independent software.',
    supportPageText: 'Every bit of support helps me spend more time improving the apps, fixing rough edges, and making the next idea real. Thank you for being here.',
    chooseRegion: 'Choose your region', iran: 'Inside Iran', global: 'Outside Iran',
    iranTitle: 'Support from Iran',
    iranText: 'The local Rial payment gateway is not connected yet. I’m working on making this option available. Until then, you can support the projects by sharing them or visiting GitHub.',
    gatewayPending: 'Local payment gateway coming soon',
    globalTitle: 'Support internationally',
    globalText: 'International payment options such as Ko-fi or PayPal are not configured yet. The best available way to help today is to explore the projects and support them on GitHub.',
    githubSupport: 'Visit GitHub profile', pagenestPro: 'PageNest Pro',
    proText: 'PageNest Pro is available through Myket for users in Iran. International checkout is not active yet.',
    buyMyket: 'View on Myket', internationalSoon: 'International upgrade · coming soon',
    redeemNote: 'Received a PageNest supporter code? Redeem it inside PageNest. Supporter codes are not entered on this website.',
    backHome: 'Back to studio', thanks: 'Thank you for helping independent software stay independent.',
    projectCount: '03 / SELECTED PROJECTS', scroll: 'SCROLL TO EXPLORE', made: 'DESIGNED & BUILT BY AMIR',
  },
  fa: {
    nav: ['استودیو', 'پروژه‌ها', 'درباره'], support: 'حمایت از پروژه‌ها',
    heroKicker: 'استودیوی مستقل نرم‌افزار · ساخته امیر',
    heroTitle: 'یک استودیوی کوچک برای ایده‌هایی که ارزش ساخته‌شدن دارند.',
    heroText: 'محصولات دیجیتال کاربردی و خوش‌ساخت می‌سازم؛ از فضایی آرام برای کتاب‌خواندن تا ابزارهایی که زندگی روزمره را کمی ساده‌تر می‌کنند.',
    explore: 'دیدن پروژه‌ها', github: 'گیت‌هاب من', featured: 'مجموعه فعلی',
    projectsTitle: 'سه پروژه، سه دنیای متفاوت.',
    projectsIntro: 'هر محصول هدف، شخصیت و زبان بصری خودش را دارد؛ با یک توجه مشترک به جزئیات ساخته شده‌اند.',
    openProject: 'مشاهده پروژه', source: 'کد منبع',
    pagenestType: 'کتاب‌خوانی · اندروید', pagenestDesc: 'خانه‌ای آرام برای کتاب‌هایت. فایل‌های EPUB، PDF و متنی را بخوان، کتابخانه‌ات را مرتب نگه دار و برای عادت مطالعه وقت بساز.',
    moodifyType: 'ابزارهای خلاقانه · وب', moodifyDesc: 'مجموعه‌ای از ابزارهای سرگرم‌کننده برای بیان خلاقیت؛ آواتار، کلاژ، موسیقی، والپیپر و تجربه‌های کوچک.',
    gholakType: 'مدیریت مالی · اندروید و وب', gholakDesc: 'همراهی فارسی برای ثبت دخل‌وخرج، برنامه‌ریزی بودجه و شناخت بهتر وضعیت مالی روزمره، بدون دردسر جدول‌های پیچیده.',
    status: 'پروژه مستقل', aboutKicker: 'یک استودیوی مستقل و کوچک',
    aboutTitle: 'با کنجکاوی ساخته شده؛ با دقت منتشر می‌شود.',
    aboutText: 'MrAmbrosia خانه چیزهایی است که می‌سازم: نرم‌افزارهای کاربردی، آزمایش‌های کوچک و ایده‌هایی که به محصول تبدیل می‌شوند. نه تیم بزرگ و نه دستورالعمل شرکتی؛ فقط ساختن، بهترکردن و کلی تب باز در مرورگر.',
    values: ['کاربردی از همان ابتدا', 'طراحی با هدف', 'همیشه در حال بهترشدن'],
    supportKicker: 'کمک کن چراغ‌ها روشن بمانند', supportTitle: 'نرم‌افزار خوب با جامعه‌اش رشد می‌کند.',
    supportText: 'اگر یکی از چیزهایی که ساخته‌ام برایت مفید بوده، می‌توانی کمک کنی ساخت و بهترکردنش ادامه پیدا کند. یک پیام خوب، ستاره گیت‌هاب یا حمایت مالی همگی ارزشمندند.',
    supportCta: 'راه‌های حمایت', contactTitle: 'ایده‌ای داری؟ صحبت کنیم.',
    contactText: 'سؤال، بازخورد، گزارش باگ یا پیشنهاد همکاری داری؟ خوشحال می‌شوم بشنوم.',
    contact: 'ارتباط با من', footer: 'نرم‌افزار مستقل، با دقت ساخته‌شده.',
    language: 'زبان', theme: 'ظاهر', light: 'روشن', dark: 'تیره', palette: 'رنگ تأکیدی',
    supportPageKicker: 'یک تشکر کوچک', supportPageTitle: 'از نرم‌افزار مستقل حمایت کن.',
    supportPageText: 'هر میزان حمایت کمک می‌کند زمان بیشتری برای بهترکردن برنامه‌ها، رفع ایرادها و واقعی‌کردن ایده بعدی بگذارم. ممنون که اینجایی.',
    chooseRegion: 'منطقه خودت را انتخاب کن', iran: 'داخل ایران', global: 'خارج از ایران',
    iranTitle: 'حمایت از داخل ایران',
    iranText: 'درگاه پرداخت ریالی هنوز متصل نشده است و در حال آماده‌سازی این امکان هستم. تا آن زمان می‌توانی پروژه‌ها را به دیگران معرفی کنی یا از طریق گیت‌هاب حمایت کنی.',
    gatewayPending: 'درگاه پرداخت ریالی به‌زودی',
    globalTitle: 'حمایت بین‌المللی',
    globalText: 'روش‌های پرداخت بین‌المللی مثل Ko-fi یا PayPal هنوز تنظیم نشده‌اند. در حال حاضر بهترین راه کمک، معرفی پروژه‌ها و حمایت از آن‌ها در گیت‌هاب است.',
    githubSupport: 'رفتن به پروفایل گیت‌هاب', pagenestPro: 'نسخه حرفه‌ای PageNest',
    proText: 'نسخه حرفه‌ای PageNest برای کاربران داخل ایران از طریق مایکت در دسترس است. پرداخت بین‌المللی هنوز فعال نشده.',
    buyMyket: 'مشاهده در مایکت', internationalSoon: 'ارتقای بین‌المللی · به‌زودی',
    redeemNote: 'اگر کد حمایت PageNest را دریافت کرده‌ای، آن را داخل خود برنامه وارد کن. این وب‌سایت محل واردکردن کد نیست.',
    backHome: 'بازگشت به استودیو', thanks: 'ممنون که به مستقل‌ماندن نرم‌افزار مستقل کمک می‌کنی.',
    projectCount: '۰۳ / پروژه منتخب', scroll: 'برای دیدن بیشتر اسکرول کن', made: 'طراحی و توسعه توسط امیر',
  },
} as const;

const projects = [
  { id: '01', key: 'pagenest', title: 'PageNest', url: 'https://github.com/AmirSenpai/PageNest', accent: 'book', icon: BookOpen },
  { id: '02', key: 'moodify', title: 'Moodify', url: 'https://www.moodifyweb.ir', accent: 'mood', icon: Music2 },
  { id: '03', key: 'gholak', title: 'Mr Gholak', url: 'https://mrgholak.ir', accent: 'gholak', icon: WalletCards },
] as const;

function ProjectArtwork({ kind }: { kind: string }) {
  if (kind === 'book') return <div className="artwork artwork-book" aria-hidden="true"><div className="book-orbit orbit-one" /><div className="book-orbit orbit-two" /><div className="book-cover"><span className="book-mark">P.</span><span className="book-title">The quiet<br />between<br />chapters</span><span className="book-author">A READING SPACE</span></div><div className="book-page" /><div className="book-caption">READ · KEEP · RETURN</div></div>;
  if (kind === 'mood') return <div className="artwork artwork-mood" aria-hidden="true"><div className="mood-glow" /><div className="mood-disc"><div className="disc-core" /></div><div className="mood-wave wave-a" /><div className="mood-wave wave-b" /><div className="mood-wave wave-c" /><div className="mood-label">MOOD / PLAY / CREATE</div><div className="mood-chip">✳ make something</div></div>;
  return <div className="artwork artwork-gholak" aria-hidden="true"><div className="finance-top"><span>MR GHOLAK</span><span className="finance-dot" /></div><div className="finance-card"><span>موجودی کل</span><strong>۱۲,۵۰۰,۰۰۰</strong><small>ریال · این ماه</small><div className="finance-bars"><i /><i /><i /><i /><i /><i /><i /></div></div><div className="finance-row"><span className="finance-income">↗ درآمد</span><b>+۸,۰۰۰,۰۰۰</b></div><div className="finance-row"><span className="finance-expense">↘ هزینه</span><b>−۳,۵۰۰,۰۰۰</b></div><div className="finance-caption">MONEY, MADE CLEAR.</div></div>;
}

function Header({ lang, setLang, theme, setTheme, supportPage }: { lang: Language; setLang: (v: Language) => void; theme: Theme; setTheme: (v: Theme) => void; supportPage: boolean }) {
  const t = copy[lang]; const [menuOpen, setMenuOpen] = useState(false);
  const links = [{ href: supportPage ? '/#home' : '#home', label: t.nav[0] }, { href: supportPage ? '/#projects' : '#projects', label: t.nav[1] }, { href: supportPage ? '/#about' : '#about', label: t.nav[2] }];
  return <header className="site-header"><div className="header-inner">
    <a className="brand" href="/" aria-label="MrAmbrosia home"><span className="brand-symbol">m<span>.</span></span><span className="brand-name">mrambrosia<span> / independent software</span></span></a>
    <nav className={menuOpen ? 'main-nav nav-open' : 'main-nav'}>{links.map(link => <a key={link.href} href={link.href} onClick={() => setMenuOpen(false)}>{link.label}</a>)}<a className="nav-support" href={lang === 'fa' ? '/support-fa' : '/support'}>{t.support}<ArrowUpRight size={14} /></a></nav>
    <div className="header-actions"><button className="icon-button" onClick={() => setLang(lang === 'en' ? 'fa' : 'en')} aria-label="Switch language"><Languages size={17} /><span>{lang === 'en' ? 'FA' : 'EN'}</span></button><button className="icon-button theme-button" onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')} aria-label="Toggle theme">{theme === 'light' ? <Moon size={17} /> : <Sun size={17} />}</button><button className="icon-button menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">{menuOpen ? <X size={19} /> : <Menu size={19} />}</button></div>
  </div></header>;
}

function ProjectCard({ project, index, lang }: { project: typeof projects[number]; index: number; lang: Language }) {
  const t = copy[lang];
  const meta = { pagenest: { type: t.pagenestType, desc: t.pagenestDesc }, moodify: { type: t.moodifyType, desc: t.moodifyDesc }, gholak: { type: t.gholakType, desc: t.gholakDesc } }[project.key];
  const Icon = project.icon;
  const source = project.key === 'moodify' ? 'https://github.com/AmirSenpai/MoodifyWeb.ir' : project.key === 'gholak' ? 'https://github.com/AmirSenpai/mr-galak' : project.url;
  return <motion.article className={'project-card project-' + project.accent} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.15 }} transition={{ duration: 0.55, delay: index * 0.08 }}>
    <div className="project-art"><ProjectArtwork kind={project.accent} /><span className="project-number">{project.id}</span></div>
    <div className="project-copy"><div className="project-meta"><span>{meta.type}</span><span className="status"><i />{t.status}</span></div><h3>{project.title}<span className="project-period">.</span></h3><p>{meta.desc}</p>
      <div className="project-actions"><a className="text-link" href={project.url} target="_blank" rel="noreferrer">{t.openProject}<ArrowUpRight size={16} /></a><a className="source-link" href={source} target="_blank" rel="noreferrer"><Code2 size={15} />{t.source}</a></div>
    </div><div className="project-index"><Icon size={16} /><span>{project.id} / 03</span></div>
  </motion.article>;
}

function SupportPage({ lang }: { lang: Language }) {
  const t = copy[lang]; const [region, setRegion] = useState<'iran' | 'global'>(window.location.pathname.endsWith('support-fa') ? 'iran' : 'global');
  return <main className="support-page page-shell">
    <section className="support-hero"><span className="eyebrow"><Heart size={14} /> {t.supportPageKicker}</span><h1>{t.supportPageTitle}</h1><p>{t.supportPageText}</p></section>
    <section className="support-panel"><div className="region-heading"><span className="section-index">01 / REGION</span><h2>{t.chooseRegion}</h2></div>
      <div className="region-switch" role="tablist" aria-label={t.chooseRegion}><button role="tab" aria-selected={region === 'iran'} className={region === 'iran' ? 'active' : ''} onClick={() => setRegion('iran')}>🇮🇷 {t.iran}</button><button role="tab" aria-selected={region === 'global'} className={region === 'global' ? 'active' : ''} onClick={() => setRegion('global')}>🌐 {t.global}</button></div>
      {region === 'iran' ? <div className="support-options">
        <article className="support-option"><div className="option-icon pending"><Coffee size={21} /></div><span className="option-label">01 / TIP JAR</span><h3>{t.iranTitle}</h3><p>{t.iranText}</p><div className="pending-note"><span className="pending-dot" />{t.gatewayPending}</div></article>
        <article className="support-option"><div className="option-icon"><BookOpen size={21} /></div><span className="option-label">02 / PAGENEST PRO</span><h3>{t.pagenestPro}</h3><p>{t.proText}</p><a className="button button-dark" href="https://myket.ir/app/ir.pagenest.mrambrosia" target="_blank" rel="noreferrer">{t.buyMyket}<ArrowUpRight size={16} /></a></article>
      </div> : <div className="support-options">
        <article className="support-option"><div className="option-icon"><Code2 size={21} /></div><span className="option-label">01 / COMMUNITY</span><h3>{t.globalTitle}</h3><p>{t.globalText}</p><a className="button button-dark" href="https://github.com/AmirSenpai" target="_blank" rel="noreferrer">{t.githubSupport}<ArrowUpRight size={16} /></a></article>
        <article className="support-option"><div className="option-icon"><BookOpen size={21} /></div><span className="option-label">02 / PAGENEST PRO</span><h3>{t.pagenestPro}</h3><p>{t.proText}</p><div className="pending-note"><span className="pending-dot" />{t.internationalSoon}</div></article>
      </div>}
      <p className="redeem-note"><ShieldCheck size={16} />{t.redeemNote}</p>
    </section>
    <div className="support-thanks"><Sparkles size={18} /><span>{t.thanks}</span></div><a className="back-link" href="/"><ArrowUpRight size={16} />{t.backHome}</a>
  </main>;
}

function App() {
  const isSupportPage = /^\/support(-fa)?\/?$/.test(window.location.pathname);
  const [lang, setLang] = useState<Language>(() => window.location.pathname.endsWith('support-fa') ? 'fa' : (localStorage.getItem('ambrosia-lang') as Language) || 'fa');
  const [theme, setTheme] = useState<Theme>(() => (localStorage.getItem('ambrosia-theme') as Theme) || 'light');
  const [accent, setAccent] = useState<Accent>(() => (localStorage.getItem('ambrosia-accent') as Accent) || 'blue');
  const [settingsOpen, setSettingsOpen] = useState(false); const t = copy[lang];
  useEffect(() => { document.documentElement.lang = lang; document.documentElement.dir = lang === 'fa' ? 'rtl' : 'ltr'; document.documentElement.dataset.theme = theme; document.documentElement.dataset.accent = accent; localStorage.setItem('ambrosia-lang', lang); localStorage.setItem('ambrosia-theme', theme); localStorage.setItem('ambrosia-accent', accent); }, [lang, theme, accent]);
  return <div className="app-frame">
    <Header lang={lang} setLang={setLang} theme={theme} setTheme={setTheme} supportPage={isSupportPage} />
    {isSupportPage ? <SupportPage lang={lang} /> : <main>
      <section className="hero page-shell" id="home"><div className="hero-content"><motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55 }}>
        <span className="eyebrow"><span className="eyebrow-mark" />{t.heroKicker}</span><h1>{t.heroTitle}</h1><p className="hero-description">{t.heroText}</p>
        <div className="hero-actions"><a className="button button-dark" href="#projects">{t.explore}<ArrowDown size={16} /></a><a className="button button-quiet" href="https://github.com/AmirSenpai" target="_blank" rel="noreferrer"><Code2 size={17} />{t.github}</a></div>
      </motion.div></div>
      <motion.div className="hero-art" initial={{ opacity: 0, scale: 0.94 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 0.15 }}><div className="hero-grid" /><div className="hero-orbit hero-orbit-a" /><div className="hero-orbit hero-orbit-b" /><div className="hero-stamp"><span>MR</span><strong>AMBROSIA</strong><small>SOFTWARE / STUDIO</small></div><div className="hero-side-note">IDEAS INTO INTERFACES — SINCE ALWAYS</div><div className="hero-coordinate">35° 42' N / BUILD MODE</div></motion.div>
      <div className="hero-bottom"><span>{t.projectCount}</span><span>{t.scroll} ↓</span></div></section>
      <section className="projects-section page-shell" id="projects"><div className="section-heading"><div><span className="section-index">01 — {t.featured}</span><h2>{t.projectsTitle}</h2></div><p>{t.projectsIntro}</p></div><div className="projects-grid">{projects.map((project, index) => <ProjectCard key={project.key} project={project} index={index} lang={lang} />)}</div></section>
      <section className="about-section page-shell" id="about"><div className="about-mark"><Code2 size={34} /><span>BUILD / REFINE / REPEAT</span></div><div className="about-copy"><span className="section-index">02 — {t.aboutKicker}</span><h2>{t.aboutTitle}</h2><p>{t.aboutText}</p><div className="value-list">{t.values.map((value, i) => <span key={value}><b>0{i + 1}</b>{value}</span>)}</div></div></section>
      <section className="support-banner page-shell"><div className="support-banner-inner"><div><span className="section-index">{t.supportKicker}</span><h2>{t.supportTitle}</h2><p>{t.supportText}</p></div><a className="button button-light" href={lang === 'fa' ? '/support-fa' : '/support'}>{t.supportCta}<ArrowUpRight size={17} /></a><div className="support-spark">✳</div></div></section>
      <section className="contact-section page-shell" id="contact"><div><span className="section-index">03 — SAY HELLO</span><h2>{t.contactTitle}</h2><p>{t.contactText}</p></div><a className="contact-link" href="mailto:itsdekusenpai@gmail.com">{t.contact}<ArrowUpRight size={18} /></a></section>
    </main>}
    <footer className="site-footer"><div className="footer-inner"><a className="brand" href="/"><span className="brand-symbol">m<span>.</span></span><span className="brand-name">mrambrosia<span> / independent software</span></span></a><span>{t.footer} © {new Date().getFullYear()}</span><span className="footer-credit">{t.made}</span></div></footer>
    {!isSupportPage && <div className="appearance-wrap">{settingsOpen && <div className="appearance-popover"><div className="appearance-title">{t.theme}</div><div className="appearance-row"><button className={theme === 'light' ? 'selected' : ''} onClick={() => setTheme('light')}><Sun size={15} />{t.light}</button><button className={theme === 'dark' ? 'selected' : ''} onClick={() => setTheme('dark')}><Moon size={15} />{t.dark}</button></div><div className="appearance-title">{t.palette}</div><div className="accent-row">{(['blue', 'violet', 'mint'] as Accent[]).map(color => <button key={color} aria-label={color} className={'accent-swatch swatch-' + color + (accent === color ? ' chosen' : '')} onClick={() => setAccent(color)} />)}</div></div>}<button className="appearance-trigger" onClick={() => setSettingsOpen(!settingsOpen)} aria-label="Appearance settings"><Palette size={18} /></button></div>}
  </div>;
}
export default App;
