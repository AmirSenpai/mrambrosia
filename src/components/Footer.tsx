import { useApp } from '../App';
import { siteConfig } from '../config/site';
import { Download, FileText, Mail,ExternalLink  } from 'lucide-react';

export const Footer = () => {
  const { t } = useApp();

  return (
    <footer className="bg-ink text-paper py-12 px-4 sm:px-6 lg:px-8 mt-auto">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-8">
        <div className="md:col-span-2 space-y-4">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-paper rounded-lg flex items-center justify-center border-2 border-paper">
              <span className="text-ink font-bold text-xl">D</span>
            </div>
            <div>
              <h3 className="font-bold text-lg">{siteConfig.name}</h3>
              <p className="text-xs text-paper/60">{siteConfig.role}</p>
            </div>
          </div>
          <p className="text-sm text-paper/60 max-w-sm">
            {siteConfig.location} — {t.hero.eyebrow}
          </p>
        </div>

        <div className="space-y-3">
          <h4 className="font-bold text-sm uppercase tracking-wider text-paper/40">Quick Links</h4>
          <a href={siteConfig.app.downloadUrl} className="flex items-center gap-2 text-sm hover:text-light-green transition-colors">
            <Download size={16} />
            {t.nav.downloadApp}
          </a>
          <a href="https://mrambrosia.ir/resume/ItsDeku-Senpai-Resume.pdf" className="flex items-center gap-2 text-sm hover:text-light-green transition-colors">
            <FileText size={16} />
            {t.resume.downloadBtn}
          </a>
          <a href={`mailto:${siteConfig.email}`} className="flex items-center gap-2 text-sm hover:text-light-green transition-colors">
            <Mail size={16} />
            {siteConfig.email}
          </a>
          <a
          href="https://www.moodifyweb.ir"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm font-medium hover:text-deep-green transition-colors flex items-center gap-1"
        >
          Moodify
          <ExternalLink size={12} />
        </a>
        </div>

        <div className="space-y-3">
          <h4 className="font-bold text-sm uppercase tracking-wider text-paper/40">Socials</h4>
          {Object.entries(siteConfig.socials).map(([key, url]) => (
            <a key={key} href={url} target="_blank" rel="noopener noreferrer" className="block text-sm hover:text-light-green transition-colors capitalize">
              {key}
            </a>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-paper/20 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-xs text-paper/40">
          &copy; {new Date().getFullYear()} {siteConfig.name}. {t.footer.rights}
        </p>
        <div className="flex items-center gap-4 text-xs text-paper/40">
          <span>mrambrosia.ir</span>
        </div>
      </div>
    </footer>
  );
};