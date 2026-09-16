import { useState, useEffect, createContext, useContext } from 'react';
import { siteConfig } from './config/site';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { AppLanding } from './components/AppLanding';
import { Resume } from './components/Resume';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

type Lang = 'fa' | 'en';
type Theme = 'light' | 'dark';

interface AppContextType {
  lang: Lang;
  setLang: (lang: Lang) => void;
  theme: Theme;
  toggleTheme: () => void;
  t: typeof siteConfig.translations.fa;
}

export const AppContext = createContext<AppContextType | null>(null);

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) throw new Error('useApp must be used within AppProvider');
  return context;
};

function App() {
  const [lang, setLang] = useState<Lang>('fa');
  const [theme, setTheme] = useState<Theme>('light');

  const t = siteConfig.translations[lang];
  const dir = t.dir;

  useEffect(() => {
    document.documentElement.dir = dir;
    document.documentElement.lang = lang;
    document.documentElement.setAttribute('data-theme', theme);
  }, [lang, theme, dir]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  return (
    <AppContext.Provider value={{ lang, setLang, theme, toggleTheme, t }}>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          <Hero />
          <About />
          <Projects />
          <AppLanding />
          <Resume />
          <Contact />
        </main>
        <Footer />
      </div>
    </AppContext.Provider>
  );
}

export default App;