import { useApp } from '../App';
import { siteConfig } from '../config/site';
import { Download, CheckCircle, RefreshCw, Smartphone } from 'lucide-react';

export const AppLanding = () => {
  const { t } = useApp();
  const app = t.appSection;

  return (
    <section id="app" className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="brutal-card bg-deep-green text-white p-8 md:p-12 rounded-3xl relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-light-green/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-coral/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

        <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-black">{app.title}</h2>
            <p className="text-xl text-light-green font-bold">{app.subtitle}</p>
            <p className="text-white/80 leading-relaxed">{app.description}</p>
            
            <div className="flex flex-wrap gap-4 pt-4">
              <a href={siteConfig.app.downloadUrl} className="brutal-btn bg-coral text-white border-white shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] flex items-center gap-2">
                <Download size={18} />
                {app.cta1}
              </a>
              <a href="#features" className="brutal-btn bg-transparent text-white border-white hover:bg-white/10 flex items-center gap-2">
                {app.cta2}
              </a>
            </div>
          </div>

          {/* Download Card */}
          <div className="brutal-card bg-paper text-ink p-6 md:p-8">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-deep-green rounded-xl flex items-center justify-center border-2 border-ink">
                <Smartphone size={24} className="text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold">{app.downloadCard.appName}</h3>
                <p className="text-sm text-ink/60">v{app.downloadCard.version}</p>
              </div>
            </div>

            <div className="space-y-3 mb-6 text-sm">
              <div className="flex justify-between border-b border-ink/10 pb-2">
                <span className="text-ink/60">Platform</span>
                <span className="font-bold">{app.downloadCard.platform}</span>
              </div>
              <div className="flex justify-between border-b border-ink/10 pb-2">
                <span className="text-ink/60">Package</span>
                <span className="font-bold" dir="ltr">{app.downloadCard.package}</span>
              </div>
            </div>

            <div className="space-y-3">
              <a href={siteConfig.app.downloadUrl} className="brutal-btn brutal-btn-primary w-full flex justify-center items-center gap-2">
                <Download size={18} />
                {app.downloadCard.downloadBtn}
              </a>
            </div>
            <p className="text-[10px] text-ink/50 mt-4 leading-relaxed">
              {app.downloadCard.note}
            </p>
          </div>
        </div>

        {/* Features & Updates */}
        <div className="relative z-10 mt-12 grid md:grid-cols-2 gap-8" id="features">
          <div className="bg-white/10 backdrop-blur-sm border-2 border-white/20 rounded-xl p-6">
            <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
              <CheckCircle size={20} className="text-light-green" />
              قابلیت‌ها
            </h3>
            <ul className="space-y-2 text-sm text-white/80">
              {siteConfig.app.features.map((feature, idx) => (
                <li key={idx} className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-coral"></div>
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white/10 backdrop-blur-sm border-2 border-white/20 rounded-xl p-6">
            <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
              <RefreshCw size={20} className="text-muted-yellow" />
              {app.updateInfo.lastVersion}
            </h3>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between">
                <span className="text-white/60">{app.updateInfo.releaseDate}</span>
                <span className="font-bold">{siteConfig.app.releaseDate}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-white/60">{app.updateInfo.changelog}</span>
                <span className="font-bold text-xs">{siteConfig.app.changelog}</span>
              </div>
              <button className="brutal-btn bg-transparent text-white border-white hover:bg-white/10 w-full mt-4 text-sm">
                {app.updateInfo.checkUpdate}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};