import { useState } from 'react';
import { Menu, X, Moon, Sun, Globe, Download, ExternalLink } from 'lucide-react';
import { useApp } from '../App';
import { siteConfig } from '../config/site';


export const Header = () => {
  const { lang, setLang, theme, toggleTheme, t } = useApp();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { key: 'home', href: '#home' },
    { key: 'about', href: '#about' },
    { key: 'projects', href: '#projects' },
    { key: 'app', href: '#app' },
    { key: 'resume', href: '#resume' },
    { key: 'contact', href: '#contact' },
    // external link — rendered separately below
  ];

  return (
    <header className="sticky top-0 z-50 bg-paper/90 backdrop-blur-md border-b-2 border-ink">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-deep-green rounded-lg flex items-center justify-center border-2 border-ink shadow-soft-sm">
              <span className="text-white font-bold text-xl">D</span>
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-lg leading-tight">ItsDeku Senpai</span>
              <span className="text-xs text-ink/70 leading-tight">Software Builder</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <a
                key={item.key}
                href={item.href}
                className="text-sm font-medium hover:text-deep-green transition-colors"
              >
                {t.nav[item.key as keyof typeof t.nav]}
              </a>
            ))}
            <a
            href="https://www.moodifyweb.ir"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium hover:text-deep-green transition-colors inline-flex items-center gap-1"
          >
            Moodify
            <ExternalLink size={12} />
          </a>
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setLang(lang === 'fa' ? 'en' : 'fa')}
              className="p-2 hover:bg-ink/5 rounded-full transition-colors"
              aria-label="Switch Language"
            >
              <Globe size={20} />
            </button>
            <button
              onClick={toggleTheme}
              className="p-2 hover:bg-ink/5 rounded-full transition-colors"
              aria-label="Toggle Theme"
            >
              {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
            </button>
            <a
              href={siteConfig.app.downloadUrl}
              className="hidden sm:flex brutal-btn brutal-btn-primary items-center gap-2 text-sm"
            >
              <Download size={16} />
              {t.nav.downloadApp}
            </a>
            
            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 hover:bg-ink/5 rounded-full"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle Menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t-2 border-ink bg-paper px-4 py-4 space-y-2">
          {navItems.map((item) => (
            <a
              key={item.key}
              href={item.href}
              onClick={() => setIsMenuOpen(false)}
              className="block py-2 text-base font-medium hover:text-deep-green"
            >
              {t.nav[item.key as keyof typeof t.nav]}
            </a>
          ))}
          <a
            href={siteConfig.app.downloadUrl}
            className="brutal-btn brutal-btn-primary flex items-center justify-center gap-2 w-full mt-4"
          >
            <Download size={18} />
            {t.nav.downloadApp}
          </a>
        </div>
      )}
    </header>
  );
};