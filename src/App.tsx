import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import {
  ArrowDown, ArrowUpRight, BookOpen, Code2, Coffee, Heart, Languages, Menu,
  Palette, ShieldCheck, Sparkles, WalletCards, X,
} from 'lucide-react';

type Language = 'en' | 'fa';
type ProjectKey = 'pagenest' | 'moodify' | 'gholak';

const copy = {
  en: {
    nav: ['Studio', 'Products', 'About'], support: 'Support',
    heroKicker: 'INDEPENDENT SOFTWARE STUDIO · AMIR SENPAI',
    heroTitle: 'Small studio. Real software. Thoughtful details.',
    heroText: 'MrAmbrosia is the home of three independent products built around different everyday needs: reading, making things, and managing money.',
    explore: 'Explore the products', github: 'About the studio',
    productsEyebrow: 'THE PRODUCT LINEUP', productsTitle: 'Three products, each with its own point of view.',
    productsIntro: 'Not one app stretched across three use cases. Each product has its own audience, interface, and job to do.',
    openProduct: 'Open product', productDetails: 'Product details',
    pagenestType: 'ANDROID READING · VERSION 3.1.0',
    pagenestSummary: 'A local-first reading library and reader for people who want their books organised, comfortable to read, and available offline.',
    moodifyType: 'BROWSER-BASED CREATIVE TOOLKIT',
    moodifySummary: 'A bilingual collection of small creative and file tools: make visual pieces, prepare images and documents, and create assets in the browser.',
    gholakType: 'PERSIAN PERSONAL FINANCE · WEB + ANDROID',
    gholakSummary: 'A Persian-first money manager for tracking everyday finances, planning ahead, and keeping a clearer picture of what comes in and goes out.',
    current: 'Current status', pagenestStatus: 'Android · v3.1.0', moodifyStatus: 'Web app · available', gholakStatus: 'Web app · Android 2.0 candidate',
    pagenestDetailTitle: 'A reading space that stays yours.',
    pagenestDetail: 'PageNest keeps the library on the device and focuses on the reading experience: import books, organise shelves, tune the page, and return exactly where you left off.',
    pagenestFeatures: [
      ['Library & formats', 'EPUB, PDF, TXT, Markdown, FB2 and CBZ support, with covers, search, sorting, shelves and reading-status filters.'],
      ['Reader tools', 'Paged or vertical reading, table of contents, bookmarks, highlights, marginal notes, in-book search and shareable quote cards.'],
      ['Comfort & accessibility', 'Custom TTF/OTF fonts, reading themes, paper texture, text-to-speech Listen Mode, and on-device translation.'],
      ['Reading insights', 'Daily reading goals, time and page statistics, per-book progress, streak tracking, reminders and home-screen widgets.'],
      ['PageNest Studio · beta', 'An offline manuscript editor with chapters, autosave, word counts, RTL/LTR writing, Markdown basics and EPUB publishing to the library.'],
    ],
    pagenestTech: 'Kotlin · Jetpack Compose · Room · WorkManager · Android Glance',
    moodifyDetailTitle: 'Useful little tools for making and transforming.',
    moodifyDetail: 'Moodify is a browser-based toolkit with Persian and English routes. Its tools are designed around quick creative tasks and practical file workflows, rather than a single heavy editor.',
    moodifyGroups: [
      ['Create', 'Polaroid-style photo frames, profile/avatar artwork with extracted colour palettes, 8-bit avatars, wallpapers, static music-player visuals and Spotify-style cards.'],
      ['Make & convert', 'GIF creation from images or short video, image compression, image-to-PDF, PDF-to-images, and image-format conversion.'],
      ['Utilities', 'QR-code generation, image metadata removal, text styling, and a collection of news, blog and information pages.'],
    ],
    moodifyPrivacy: 'The project describes its image tools as browser-side workflows: selected files are processed locally instead of being uploaded to a processing server.',
    moodifyTech: 'React · Vite · React Router · i18next · PDF.js · JSZip',
    gholakDetailTitle: 'Personal finance, designed around Persian everyday life.',
    gholakDetail: 'Mr Gholak brings everyday money records and planning into a Persian-first interface, including Jalali-calendar workflows and financial categories that make sense for local use.',
    gholakFeatures: [
      ['Money in & out', 'Record income and expenses, organise transactions, and review monthly activity.'],
      ['Plan ahead', 'Budgets, savings goals, instalments, and a Jalali calendar for keeping financial plans visible.'],
      ['People & assets', 'Track debts and receivables, assets and net worth, and keep supporting receipt records.'],
      ['Everyday utilities', 'SMS transaction import, backup and restore, account features, notifications and Android home-screen widgets.'],
      ['Gholakyar', 'An assistant for money-related questions, with a rules-based on-device fallback when the remote AI service is unavailable.'],
    ],
    gholakStatusNote: 'The repository currently documents 2.0.0 as a release candidate. The web app is available; the Android 2.0.0 release is not presented here as publicly shipped.',
    gholakTech: 'Expo · React Native · React Native Web · Supabase',
    aboutKicker: 'ABOUT THE STUDIO', aboutTitle: 'Independent by choice. Product-minded by default.',
    aboutText: 'MrAmbrosia is an independent software studio led by Amir. It brings together products that solve different problems, but share the same approach: understand the real use case, keep the interface intentional, and ship improvements without pretending unfinished work is finished.',
    principles: ['Build for a real use case', 'Respect people’s data', 'Be clear about product status', 'Improve the details'],
    supportKicker: 'KEEP GOOD INDEPENDENT SOFTWARE MOVING',
    supportTitle: 'If a product helped, help it keep growing.',
    supportText: 'Support keeps time available for maintenance, accessibility, bug fixes and the next useful feature. The support page only shows options that are actually configured.',
    supportCta: 'Ways to support', contactTitle: 'Questions, feedback or collaboration?',
    contactText: 'For product feedback, bug reports or a possible collaboration, get in touch.',
    contact: 'Email Amir', footer: 'Independent software, built with care.',
    language: 'Language', made: 'DESIGNED & BUILT BY AMIR',
    supportPageKicker: 'THANK YOU FOR SUPPORTING THE WORK',
    supportPageTitle: 'Support independent software.',
    supportPageText: 'Your support helps fund the unglamorous but important work: maintenance, testing, accessibility, documentation and thoughtful improvements.',
    chooseRegion: 'Choose your region', iran: 'Inside Iran', global: 'Outside Iran',
    iranTitle: 'Support from Iran',
    iranText: 'The local Rial payment gateway is not connected yet. This option is shown as pending rather than pretending a payment flow is available.',
    gatewayPending: 'Local payment gateway · not connected',
    globalTitle: 'Support internationally',
    globalText: 'A dedicated international payment provider is not configured yet. The available community option is the public GitHub profile.',
    githubSupport: 'Visit GitHub profile', pagenestPro: 'PageNest Pro',
    proText: 'PageNest Pro is available through Myket for users in Iran. International checkout is not active.',
    buyMyket: 'View on Myket', internationalSoon: 'International upgrade · not active',
    redeemNote: 'PageNest supporter codes are redeemed inside the PageNest app. This website does not collect or display activation codes.',
    backHome: 'Back to studio', thanks: 'Thank you for helping independent software stay independent.',
    productIndex: 'PRODUCT', featureIndex: 'WHAT IT DOES', techIndex: 'IMPLEMENTATION',
    versionLabel: 'LATEST REPOSITORY VERSION', releaseNote: 'Release status is stated from the project documentation, not inferred from a roadmap.',
    projectCount: '03 / PRODUCTS', scroll: 'SCROLL TO EXPLORE',
    moodifyLinkLabel: 'Open Moodify', gholakLinkLabel: 'Open Mr Gholak', pagenestLinkLabel: 'View on Myket',
  },
  fa: {
    nav: ['استودیو', 'محصولات', 'درباره'], support: 'حمایت',
    heroKicker: 'استودیوی مستقل نرم‌افزار · امیر سنپای',
    heroTitle: 'استودیویی کوچک؛ نرم‌افزارهایی واقعی با جزئیات حساب‌شده.',
    heroText: 'MrAmbrosia خانه سه محصول مستقل است که هرکدام برای بخشی از زندگی روزمره ساخته شده‌اند: کتاب‌خواندن، خلق‌کردن و مدیریت پول.',
    explore: 'دیدن محصولات', github: 'درباره استودیو',
    productsEyebrow: 'محصولات استودیو', productsTitle: 'سه محصول با سه هدف مشخص.',
    productsIntro: 'قرار نیست یک اپلیکیشن را به سه کاربرد متفاوت تحمیل کنیم. هر محصول مخاطب، رابط و مسئله خودش را دارد.',
    openProduct: 'ورود به محصول', productDetails: 'جزئیات محصول',
    pagenestType: 'کتاب‌خوان اندروید · نسخه ۳.۱.۰',
    pagenestSummary: 'کتابخانه و کتاب‌خوانی آفلاین و محلی برای کسانی که می‌خواهند کتاب‌هایشان مرتب، خواندنشان راحت و همیشه در دسترس باشد.',
    moodifyType: 'مجموعه ابزارهای خلاقانه تحت وب',
    moodifySummary: 'مجموعه‌ای دوزبانه از ابزارهای کوچک خلاقانه و فایل؛ برای ساخت محتوای بصری، آماده‌سازی عکس و سند و انجام کارها در مرورگر.',
    gholakType: 'مدیریت مالی فارسی · وب و اندروید',
    gholakSummary: 'مدیریت مالی فارسی‌محور برای ثبت دخل‌وخرج، برنامه‌ریزی و داشتن تصویری روشن‌تر از پولی که وارد و خارج می‌شود.',
    current: 'وضعیت فعلی', pagenestStatus: 'اندروید · نسخه ۳.۱.۰', moodifyStatus: 'وب‌اپ · در دسترس', gholakStatus: 'وب‌اپ · نامزد اندروید ۲.۰',
    pagenestDetailTitle: 'فضایی برای خواندن که مال خودت می‌ماند.',
    pagenestDetail: 'PageNest کتابخانه را روی خود دستگاه نگه می‌دارد و روی تجربه مطالعه تمرکز می‌کند: کتاب وارد کن، قفسه‌ها را مرتب کن، صفحه را مطابق سلیقه‌ات تنظیم کن و دقیقاً از همان‌جایی که مانده بودی ادامه بده.',
    pagenestFeatures: [
      ['کتابخانه و فرمت‌ها', 'پشتیبانی از EPUB، PDF، TXT، Markdown، FB2 و CBZ همراه با جلد، جست‌وجو، مرتب‌سازی، قفسه و فیلتر وضعیت مطالعه.'],
      ['ابزارهای مطالعه', 'مطالعه صفحه‌ای یا اسکرولی، فهرست مطالب، نشانک، هایلایت، یادداشت حاشیه‌ای، جست‌وجوی داخل کتاب و کارت نقل‌قول.'],
      ['راحتی و دسترس‌پذیری', 'فونت TTF/OTF، تم‌های مطالعه، بافت کاغذ، تبدیل متن به گفتار و ترجمه روی دستگاه.'],
      ['آمار مطالعه', 'هدف روزانه، آمار زمان و صفحه، روند هر کتاب، زنجیره مطالعه، یادآور و ویجت صفحه اصلی.'],
      ['PageNest Studio · بتا', 'ویرایشگر آفلاین دست‌نوشته با فصل‌بندی، ذخیره خودکار، شمارش کلمات، نوشتار راست‌به‌چپ و چپ‌به‌راست، Markdown و انتشار EPUB در کتابخانه.'],
    ],
    pagenestTech: 'Kotlin · Jetpack Compose · Room · WorkManager · Android Glance',
    moodifyDetailTitle: 'ابزارهای کوچک و کاربردی برای ساختن و تبدیل‌کردن.',
    moodifyDetail: 'Moodify مجموعه‌ای از ابزارهای تحت مرورگر با مسیرهای فارسی و انگلیسی است. ابزارها برای کارهای خلاقانه سریع و پردازش فایل طراحی شده‌اند، نه یک ویرایشگر سنگین و یکپارچه.',
    moodifyGroups: [
      ['خلق محتوا', 'قاب عکس پولاروید، آواتار و تصویر پروفایل با استخراج پالت رنگ، آواتار ۸ بیتی، والپیپر، تصویر موزیک‌پلیر و کارت شبیه Spotify.'],
      ['ساخت و تبدیل', 'ساخت GIF از عکس یا ویدیوی کوتاه، فشرده‌سازی عکس، تبدیل عکس به PDF، تبدیل PDF به عکس و تبدیل فرمت تصویر.'],
      ['ابزارهای جانبی', 'ساخت QR Code، حذف متادیتای تصویر، استایل‌دهی متن و صفحه‌های اخبار، وبلاگ و معرفی.'],
    ],
    moodifyPrivacy: 'طبق توضیحات خود پروژه، ابزارهای تصویری در مرورگر پردازش می‌شوند؛ یعنی فایل انتخاب‌شده برای پردازش به سرور آپلود نمی‌شود.',
    moodifyTech: 'React · Vite · React Router · i18next · PDF.js · JSZip',
    gholakDetailTitle: 'مدیریت مالی شخصی، متناسب با زندگی روزمره فارسی.',
    gholakDetail: 'Mr Gholak ثبت و برنامه‌ریزی مالی روزمره را در یک رابط فارسی‌محور جمع می‌کند؛ از جمله گردش‌کارهای مبتنی بر تقویم شمسی و دسته‌بندی‌هایی که برای استفاده محلی معنا دارند.',
    gholakFeatures: [
      ['دخل‌وخرج', 'ثبت درآمد و هزینه، دسته‌بندی تراکنش‌ها و مرور فعالیت‌های ماهانه.'],
      ['برنامه‌ریزی', 'بودجه، هدف پس‌انداز، اقساط و تقویم شمسی برای قابل‌مشاهده‌کردن برنامه‌های مالی.'],
      ['افراد و دارایی‌ها', 'مدیریت بدهی و طلب، دارایی و خالص دارایی، همراه با نگهداری رسیدها.'],
      ['ابزارهای روزمره', 'ورود تراکنش از پیامک، پشتیبان‌گیری و بازیابی، امکانات حساب، اعلان و ویجت اندروید.'],
      ['قلک‌یار', 'دستیار پرسش‌های مالی با مسیر جایگزین مبتنی بر قوانین روی دستگاه، در صورت در دسترس نبودن سرویس هوش مصنوعی.'],
    ],
    gholakStatusNote: 'مستندات فعلی مخزن، نسخه ۲.۰.۰ را نامزد انتشار معرفی می‌کنند. وب‌اپ در دسترس است؛ نسخه اندروید ۲.۰.۰ را به‌عنوان نسخه عمومی منتشرشده معرفی نمی‌کنیم.',
    gholakTech: 'Expo · React Native · React Native Web · Supabase',
    aboutKicker: 'درباره استودیو', aboutTitle: 'استقلال در ساخت؛ تمرکز بر محصول در تصمیم‌ها.',
    aboutText: 'MrAmbrosia استودیوی مستقل نرم‌افزار به مدیریت امیر است. اینجا محصولاتی کنار هم قرار می‌گیرند که مسائل متفاوتی را حل می‌کنند، اما رویکرد مشترکی دارند: مسئله واقعی را بفهم، رابط را هدفمند نگه دار و پیشرفت‌ها را منتشر کن؛ بدون اینکه کار نیمه‌تمام را کامل جا بزنی.',
    principles: ['ساخت برای یک نیاز واقعی', 'احترام به داده کاربران', 'شفافیت درباره وضعیت محصول', 'بهبود جزئیات'],
    supportKicker: 'کمک به ادامه مسیر نرم‌افزار مستقل',
    supportTitle: 'اگر محصولی به کارت آمده، کمک کن رشد کند.',
    supportText: 'حمایت کمک می‌کند زمان بیشتری برای نگهداری، دسترس‌پذیری، رفع باگ و قابلیت‌های مفید بعدی داشته باشم. صفحه حمایت فقط گزینه‌هایی را نشان می‌دهد که واقعاً تنظیم شده‌اند.',
    supportCta: 'راه‌های حمایت', contactTitle: 'سؤال، بازخورد یا پیشنهاد همکاری داری؟',
    contactText: 'برای بازخورد محصول، گزارش باگ یا پیشنهاد همکاری می‌توانی پیام بدهی.',
    contact: 'ایمیل به امیر', footer: 'نرم‌افزار مستقل، با دقت ساخته‌شده.',
    language: 'زبان', made: 'طراحی و توسعه توسط امیر',
    supportPageKicker: 'ممنون که از این کار حمایت می‌کنی',
    supportPageTitle: 'از نرم‌افزار مستقل حمایت کن.',
    supportPageText: 'حمایت تو به کارهای کم‌زرق‌وبرق اما مهم کمک می‌کند: نگهداری، تست، دسترس‌پذیری، مستندسازی و بهبودهای حساب‌شده.',
    chooseRegion: 'منطقه خودت را انتخاب کن', iran: 'داخل ایران', global: 'خارج از ایران',
    iranTitle: 'حمایت از داخل ایران',
    iranText: 'درگاه پرداخت ریالی هنوز متصل نشده است. این گزینه به‌جای نمایش یک پرداخت غیرواقعی، در وضعیت در انتظار نشان داده می‌شود.',
    gatewayPending: 'درگاه ریالی · هنوز متصل نشده',
    globalTitle: 'حمایت بین‌المللی',
    globalText: 'ارائه‌دهنده پرداخت بین‌المللی اختصاصی هنوز تنظیم نشده است. گزینه قابل استفاده فعلی، پروفایل عمومی گیت‌هاب است.',
    githubSupport: 'رفتن به پروفایل گیت‌هاب', pagenestPro: 'نسخه حرفه‌ای PageNest',
    proText: 'نسخه حرفه‌ای PageNest برای کاربران داخل ایران از طریق مایکت در دسترس است. پرداخت بین‌المللی فعال نیست.',
    buyMyket: 'مشاهده در مایکت', internationalSoon: 'ارتقای بین‌المللی · فعال نیست',
    redeemNote: 'کدهای حمایت PageNest داخل خود برنامه وارد می‌شوند. این وب‌سایت کد فعال‌سازی دریافت یا نمایش نمی‌دهد.',
    backHome: 'بازگشت به استودیو', thanks: 'ممنون که به مستقل‌ماندن نرم‌افزار مستقل کمک می‌کنی.',
    productIndex: 'محصول', featureIndex: 'قابلیت‌ها', techIndex: 'فناوری',
    versionLabel: 'آخرین نسخه ثبت‌شده در مخزن', releaseNote: 'وضعیت انتشار بر اساس مستندات پروژه نوشته شده، نه حدس از روی نقشه راه.',
    projectCount: '۰۳ / محصول', scroll: 'برای دیدن بیشتر اسکرول کن',
    moodifyLinkLabel: 'ورود به Moodify', gholakLinkLabel: 'ورود به Mr Gholak', pagenestLinkLabel: 'مشاهده در مایکت',
  },
} as const;

const products: { key: ProjectKey; number: string; name: string; href: string; kind: string }[] = [
  { key: 'pagenest', number: '01', name: 'PageNest', href: 'https://myket.ir/app/ir.pagenest.mrambrosia', kind: 'book' },
  { key: 'moodify', number: '02', name: 'Moodify', href: 'https://www.moodifyweb.ir/fa/home', kind: 'mood' },
  { key: 'gholak', number: '03', name: 'Mr Gholak', href: 'https://webapp.mrgholak.ir', kind: 'gholak' },
];

function getSiteRoot() {
  const path = window.location.pathname;
  const clean = path.replace(/\/+$/, '');
  if (clean.endsWith('/support-fa')) return clean.slice(0, -'support-fa'.length);
  if (clean.endsWith('/support')) return clean.slice(0, -'support'.length);
  if (path.endsWith('/')) return path;
  return path.slice(0, path.lastIndexOf('/') + 1);
}

function Header({ lang, setLang, supportPage, siteRoot }: { lang: Language; setLang: (v: Language) => void; supportPage: boolean; siteRoot: string }) {
  const t = copy[lang];
  const [menuOpen, setMenuOpen] = useState(false);
  const links = [
    { href: supportPage ? siteRoot + '#home' : '#home', label: t.nav[0] },
    { href: supportPage ? siteRoot + '#products' : '#products', label: t.nav[1] },
    { href: supportPage ? siteRoot + '#about' : '#about', label: t.nav[2] },
  ];
  return <header className="site-header"><div className="header-inner">
    <a className="brand" href={siteRoot} aria-label="MrAmbrosia home"><span className="brand-symbol">m<span>.</span></span><span className="brand-name">mrambrosia<span>/ independent software</span></span></a>
    <nav className={menuOpen ? 'main-nav nav-open' : 'main-nav'}>{links.map(link => <a key={link.href} href={link.href} onClick={() => setMenuOpen(false)}>{link.label}</a>)}<a className="nav-support" href={siteRoot + (lang === 'fa' ? 'support-fa' : 'support')}>{t.support}<ArrowUpRight size={14} /></a></nav>
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
    <div className="product-body"><div className="product-meta"><span>{type}</span><span className="product-status"><i />{status}</span></div><h3>{product.name}<span>.</span></h3><p>{summary}</p><div className="product-actions"><a className="text-link" href={product.href} target="_blank" rel="noreferrer">{product.key === 'pagenest' ? t.pagenestLinkLabel : product.key === 'moodify' ? t.moodifyLinkLabel : t.gholakLinkLabel}<ArrowUpRight size={15} /></a><a className="text-link text-link-muted" href={'#detail-' + product.key}>{t.productDetails}<ArrowDown size={14} /></a></div></div>
    <div className="product-index"><Icon size={15} /><span>{product.number} / 03</span></div>
  </motion.article>;
}

function FeatureList({ items }: { items: readonly (readonly [string, string])[] }) {
  return <div className="feature-list">{items.map(([title, description], index) => <article className="feature-item" key={title}><span className="feature-number">{String(index + 1).padStart(2,'0')}</span><div><h4>{title}</h4><p>{description}</p></div></article>)}</div>;
}

function ProductDetails({ lang }: { lang: Language }) {
  const t = copy[lang];
  return <section className="details-section page-shell" id="details">
    <div className="details-heading"><span className="section-index">02 / PRODUCT NOTES</span><h2>{lang === 'fa' ? 'محصولات، با جزئیات واقعی.' : 'The products, in more detail.'}</h2><p>{t.releaseNote}</p></div>
    <article className="detail-block detail-pagenest" id="detail-pagenest"><div className="detail-heading"><span className="section-index">01 / ANDROID · 3.1.0</span><h3>{t.pagenestDetailTitle}</h3><p>{t.pagenestDetail}</p><div className="tech-line"><Code2 size={14} />{t.pagenestTech}</div></div><div><span className="detail-label">{t.featureIndex}</span><FeatureList items={t.pagenestFeatures} /></div></article>
    <article className="detail-block detail-moodify" id="detail-moodify"><div className="detail-heading"><span className="section-index">02 / WEB · BILINGUAL</span><h3>{t.moodifyDetailTitle}</h3><p>{t.moodifyDetail}</p><div className="tech-line"><Code2 size={14} />{t.moodifyTech}</div></div><div><span className="detail-label">{t.featureIndex}</span><FeatureList items={t.moodifyGroups} /><p className="privacy-note"><ShieldCheck size={15} />{t.moodifyPrivacy}</p></div></article>
    <article className="detail-block detail-gholak" id="detail-gholak"><div className="detail-heading"><span className="section-index">03 / WEB + ANDROID</span><h3>{t.gholakDetailTitle}</h3><p>{t.gholakDetail}</p><div className="tech-line"><Code2 size={14} />{t.gholakTech}</div></div><div><span className="detail-label">{t.featureIndex}</span><FeatureList items={t.gholakFeatures} /><p className="release-note"><span />{t.gholakStatusNote}</p></div></article>
  </section>;
}

function SupportPage({ lang, siteRoot }: { lang: Language; siteRoot: string }) {
  const t = copy[lang];
  const [region, setRegion] = useState<'iran' | 'global'>(window.location.pathname.endsWith('support-fa') ? 'iran' : 'global');
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
    <div className="support-thanks"><Sparkles size={18} /><span>{t.thanks}</span></div><a className="back-link" href={siteRoot}><ArrowUpRight size={16} />{t.backHome}</a>
  </main>;
}

function App() {
  const isSupportPage = /\/support(-fa)?\/?$/.test(window.location.pathname);
  const siteRoot = getSiteRoot();
  const [lang, setLang] = useState<Language>(() => window.location.pathname.endsWith('support-fa') ? 'fa' : (localStorage.getItem('ambrosia-lang') as Language) || 'fa');
  const t = copy[lang];
  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'fa' ? 'rtl' : 'ltr';
    document.documentElement.dataset.theme = 'dark';
    document.documentElement.style.colorScheme = 'dark';
    localStorage.setItem('ambrosia-lang', lang);
  }, [lang]);
  return <div className="app-frame">
    <Header lang={lang} setLang={setLang} supportPage={isSupportPage} siteRoot={siteRoot} />
    {isSupportPage ? <SupportPage lang={lang} siteRoot={siteRoot} /> : <main>
      <section className="hero page-shell" id="home"><div className="hero-content"><motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45 }}>
        <span className="eyebrow"><span className="eyebrow-mark" />{t.heroKicker}</span><h1>{t.heroTitle}</h1><p className="hero-description">{t.heroText}</p>
        <div className="hero-actions"><a className="button button-primary" href="#products">{t.explore}<ArrowDown size={16} /></a><a className="button button-quiet" href="#about"><Code2 size={16} />{t.github}</a></div>
      </motion.div></div>
      <motion.div className="hero-art" initial={{ opacity: 0, scale: 0.97 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.55, delay: 0.08 }}><div className="hero-art-grid" /><div className="hero-orbit hero-orbit-a" /><div className="hero-orbit hero-orbit-b" /><div className="hero-mark"><span>MR</span><strong>AMBROSIA</strong><small>SOFTWARE / STUDIO</small></div><div className="hero-side-note">IDEAS INTO SOFTWARE</div><div className="hero-coordinate">INDEPENDENT / PRODUCT STUDIO</div></motion.div>
      <div className="hero-bottom"><span>{t.projectCount}</span><span>{t.scroll} ↓</span></div></section>
      <section className="products-section page-shell" id="products"><div className="section-heading"><div><span className="section-index">01 — {t.productsEyebrow}</span><h2>{t.productsTitle}</h2></div><p>{t.productsIntro}</p></div><div className="products-grid">{products.map((product,index)=><ProductCard key={product.key} product={product} index={index} lang={lang} />)}</div></section>
      <ProductDetails lang={lang} />
      <section className="about-section page-shell" id="about"><div className="about-mark"><Code2 size={34} /><span>BUILD / VERIFY / IMPROVE</span></div><div className="about-copy"><span className="section-index">03 — {t.aboutKicker}</span><h2>{t.aboutTitle}</h2><p>{t.aboutText}</p><div className="principle-list">{t.principles.map((value,i)=><span key={value}><b>0{i+1}</b>{value}</span>)}</div></div></section>
      <section className="support-banner page-shell"><div className="support-banner-inner"><div><span className="section-index">{t.supportKicker}</span><h2>{t.supportTitle}</h2><p>{t.supportText}</p></div><a className="button button-light" href={siteRoot + (lang === 'fa' ? 'support-fa' : 'support')}>{t.supportCta}<ArrowUpRight size={17} /></a><div className="support-spark">✳</div></div></section>
      <section className="contact-section page-shell" id="contact"><div><span className="section-index">04 — CONTACT</span><h2>{t.contactTitle}</h2><p>{t.contactText}</p></div><a className="contact-link" href="mailto:itsdekusenpai@gmail.com">{t.contact}<ArrowUpRight size={18} /></a></section>
    </main>}
    <footer className="site-footer"><div className="footer-inner"><a className="brand" href={siteRoot}><span className="brand-symbol">m<span>.</span></span><span className="brand-name">mrambrosia<span>/ independent software</span></span></a><span>{t.footer} © {new Date().getFullYear()}</span><span className="footer-credit">{t.made}</span></div></footer>
  </div>;
}

export default App;
