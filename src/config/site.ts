export const APP_DOWNLOAD_URL = "http://localhost:5173/downloads/mrgholak.apk";
export const RESUME_DOWNLOAD_URL = "http://localhost:5173/resume/ItsDeku-Senpai-Resume.pdf";
export const MOODIFY_URL = "https://www.moodifyweb.ir";
export const MRGHOLAK_URL = "https://mrambrosia.ir";
export type ProjectId = (typeof PROJECTS)[number]["id"];


export const PROJECTS = [
  {
    id: "mrgholak",
    kind: "mobile" as const,   // renders phone mockup
    url: MRGHOLAK_URL,
    downloadUrl: APP_DOWNLOAD_URL,
  },
  {
    id: "moodify",
    kind: "web" as const,      // renders browser mockup
    url: MOODIFY_URL,
  },
];

export const siteConfig = {
  name: "ItsDeku Senpai",
  role: "Software Builder",
  location: "Baku, Azerbaijan",
  email: "itsdekusenpai@gmail.com",
  domain: "mrambrosia.ir",
  socials: {
    github: "https://github.com/AmirSenpai", // Placeholder
    telegram: "https://t.me/itsdekusenpai", // Placeholder
  },
  app: {
    name: "Mr قلک",
    version: "1.2.0",
    platform: "Android",
    package: "com.mrgalak.app",
    downloadUrl: APP_DOWNLOAD_URL,
    releaseDate: "1403/07/1", // Persian date placeholder
    changelog: "بهبود عملکرد و رفع باگ‌های جزئی",
    features: [
      "ثبت درآمد و هزینه",
      "بودجه‌بندی دسته‌ها",
      "رابط کاملاً فارسی",
      "پشتیبانی از حالت تاریک",
      "محافظت با PIN",
      "طراحی ساده و سریع"
    ]
  },
  translations: {
    fa: {
      dir: "rtl",
      nav: {
        home: "خانه",
        about: "درباره من",
        projects: "پروژه‌ها",
        app: "Mr قلک",
        resume: "رزومه",
        contact: "تماس",
        downloadApp: "دانلود Mr قلک",
      },
      hero: {
        eyebrow: "برنامه‌نویس و سازنده محصولات نرم‌افزاری",
        headline: "ایده‌ها را به تجربه‌های دیجیتال واقعی تبدیل می‌کنم.",
        subtext: "من ItsDeku Senpai هستم؛ یک Software Builder که روی ساخت اپلیکیشن‌های کاربردی، رابط‌های کاربری تمیز و محصولات دیجیتال ساده و قابل‌اعتماد کار می‌کنم.",
        ctaPrimary: "مشاهده پروژه‌ها",
        ctaSecondary: "دانلود Mr قلک",
        status: "در حال ساخت محصولات جدید",
      },
      about: {
        title: "درباره من",
        content: "من یک Software Builder هستم و از ترکیب کدنویسی، طراحی محصول و حل مسئله برای ساخت تجربه‌های دیجیتال استفاده می‌کنم. تمرکزم روی ساخت محصولاتی است که ساده، سریع، زیبا و واقعاً قابل استفاده باشند.",
        profile: {
          name: "ItsDeku Senpai",
          role: "Software Builder",
          location: "Baku, Azerbaijan",
          focus: "Mobile Apps, Product Design, React Native, Expo",
          current: "Mr قلک",
        },
        timeline: ["ایده", "طراحی", "توسعه", "انتشار", "بهبود مستمر"]
      },
      projects: {
        title: "پروژه‌های منتخب",
        viewSite: "مشاهده وب‌سایت",
        viewDetails: "جزئیات پروژه",
        download: "دانلود اپلیکیشن",
        items: {
          mrgholak: {
            title: "Mr قلک",
            category: "اپلیکیشن مدیریت مالی شخصی",
            description:
              "Mr قلک یک اپلیکیشن فارسی برای مدیریت دخل‌وخرج، بودجه‌بندی و پیگیری وضعیت مالی روزمره است؛ با رابطی ساده، امن و مناسب کاربران فارسی‌زبان.",
            tags: ["React Native", "Expo", "Android", "Personal Finance", "Persian RTL"],
            status: "نسخه فعال",
            cta1: "درباره Mr قلک",
            cta2: "دانلود اپلیکیشن",
          },
          moodify: {
            title: "Moodify",
            category: "وب‌اپلیکیشن",
            // ✏️ EDIT ME — write your own Persian description
            description:
              "Moodify یک وب‌اپلیکیشن مدرن و واکنش‌گرا است که با رابطی تمیز و تجربه کاربری روان طراحی شده. برای مشاهده جزئیات بیشتر به وب‌سایت رسمی مراجعه کنید.",
            tags: ["Web App", "React", "TypeScript", "Responsive", "Modern UI"],
            status: "نسخه فعال",
            cta1: "مشاهده وب‌سایت",
            cta2: "جزئیات پروژه",
          },
        },
      },
      appSection: {
        title: "کنترل بهتر پول، با Mr قلک",
        subtitle: "مدیریت مالی لازم نیست پیچیده باشد.",
        description: "Mr قلک برای کسانی ساخته شده که می‌خواهند بدون جدول‌های پیچیده و مراحل اضافی، وضعیت مالی خود را بهتر ببینند و تصمیم‌های بهتری بگیرند.",
        cta1: "دانلود نسخه اندروید",
        cta2: "مشاهده قابلیت‌ها",
        downloadCard: {
          appName: "Mr قلک",
          version: "1.2.0",
          platform: "Android",
          package: "com.mrgalak.app",
          downloadBtn: "دانلود APK",
          note: "برای نصب APK ممکن است نیاز باشد اجازه نصب از منبع ناشناس را فعال کنید.",
        },
        updateInfo: {
          lastVersion: "آخرین نسخه",
          releaseDate: "تاریخ انتشار",
          changelog: "تغییرات نسخه",
          checkUpdate: "بررسی به‌روزرسانی",
        }
      },
      resume: {
        title: "رزومه",
        summary: "خلاصه حرفه‌ای",
        skills: "مهارت‌ها",
        experience: "تجربه‌ها",
        projects: "پروژه‌ها",
        tools: "ابزارها",
        languages: "زبان‌ها",
        downloadBtn: "دانلود رزومه PDF",
        emptyExperience: "اطلاعات تجربه کاری به‌زودی اضافه می‌شود.",
        skillsList: ["React Native", "Expo", "TypeScript", "JavaScript", "React", "Mobile UI", "Product Development", "Git", "Firebase", "REST APIs"],
        languagesList: ["فارسی (زبان مادری)", "انگلیسی (متوسط)"]
      },
      contact: {
        title: "بیایید چیزی بسازیم.",
        text: "اگر ایده‌ای برای یک اپلیکیشن، محصول دیجیتال یا همکاری فنی دارید، با من در تماس باشید.",
        form: {
          name: "نام",
          email: "ایمیل",
          message: "پیام",
          submit: "ارسال پیام",
          successMsg: "فرم آماده اتصال به سرویس ایمیل یا بک‌اند است. در حال حاضر پیام شما ارسال نمی‌شود.",
          errorMsg: "لطفاً همه فیلدها را به درستی پر کنید.",
        }
      },
      footer: {
        rights: "تمامی حقوق محفوظ است.",
      }
    },
    en: {
      dir: "ltr",
      nav: {
        home: "Home",
        about: "About",
        projects: "Projects",
        app: "Mr Gholak",
        resume: "Resume",
        contact: "Contact",
        downloadApp: "Download Mr Gholak",
      },
      hero: {
        eyebrow: "Developer & Software Builder",
        headline: "I turn ideas into real digital experiences.",
        subtext: "I'm ItsDeku Senpai; a Software Builder working on practical apps, clean user interfaces, and simple, reliable digital products.",
        ctaPrimary: "View Projects",
        ctaSecondary: "Download Mr Gholak",
        status: "Building new products",
      },
      about: {
        title: "About Me",
        content: "I'm a Software Builder combining coding, product design, and problem-solving to create digital experiences. My focus is on building products that are simple, fast, beautiful, and truly usable.",
        profile: {
          name: "ItsDeku Senpai",
          role: "Software Builder",
          location: "Baku, Azerbaijan",
          focus: "Mobile Apps, Product Design, React Native, Expo",
          current: "Mr Gholak",
        },
        timeline: ["Idea", "Design", "Develop", "Launch", "Iterate"]
      },
      projects: {
        title: "Featured Projects",
        viewSite: "Visit Website",
        viewDetails: "View Details",
        download: "Download App",
        items: {
          mrgholak: {
            title: "Mr Gholak",
            category: "Personal Finance App",
            description:
              "Mr Gholak is a Persian app for managing income, expenses, budgeting, and tracking daily finances; with a simple, secure interface suitable for Persian speakers.",
            tags: ["React Native", "Expo", "Android", "Personal Finance", "Persian RTL"],
            status: "Active Version",
            cta1: "About Mr Gholak",
            cta2: "Download App",
          },
          moodify: {
            title: "Moodify",
            category: "Web Application",
            description:
              "Moodify is a modern, responsive web application built with a clean interface and smooth user experience. Visit the official website for more details.",
            tags: ["Web App", "React", "TypeScript", "Responsive", "Modern UI"],
            status: "Active Version",
            cta1: "Visit Website",
            cta2: "View Details",
          },
        },
      },
      appSection: {
        title: "Better money control, with Mr Gholak",
        subtitle: "Finance management doesn't have to be complicated.",
        description: "Mr Gholak is built for those who want to see their financial status better and make better decisions without complex tables and extra steps.",
        cta1: "Download Android Version",
        cta2: "View Features",
        downloadCard: {
          appName: "Mr Gholak",
          version: "1.2.0",
          platform: "Android",
          package: "com.mrgalak.app",
          downloadBtn: "Download APK",
          note: "To install the APK, you may need to enable installing from unknown sources.",
        },
        updateInfo: {
          lastVersion: "Latest Version",
          releaseDate: "Release Date",
          changelog: "Changelog",
          checkUpdate: "Check for Updates",
        }
      },
      resume: {
        title: "Resume",
        summary: "Professional Summary",
        skills: "Skills",
        experience: "Experience",
        projects: "Projects",
        tools: "Tools",
        languages: "Languages",
        downloadBtn: "Download Resume PDF",
        emptyExperience: "Work experience information will be added soon.",
        skillsList: ["React Native", "Expo", "TypeScript", "JavaScript", "React", "Mobile UI", "Product Development", "Git", "Firebase", "REST APIs"],
        languagesList: ["Persian (Native)", "English (Intermediate)"]
      },
      contact: {
        title: "Let's build something.",
        text: "If you have an idea for an app, digital product, or technical collaboration, get in touch.",
        form: {
          name: "Name",
          email: "Email",
          message: "Message",
          submit: "Send Message",
          successMsg: "The form is ready to connect to an email service or backend. Currently, your message is not sent.",
          errorMsg: "Please fill in all fields correctly.",
        }
      },
      footer: {
        rights: "All rights reserved.",
      }
    }
  }
};