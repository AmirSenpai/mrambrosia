import { ArrowRight, Smartphone, Code, PenTool, Rocket, RefreshCw } from 'lucide-react';
import { useApp } from '../App';
import { siteConfig } from '../config/site';
import { motion } from 'framer-motion';

export const Hero = () => {
  const { t } = useApp();

  return (
    <section id="home" className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-6"
        >
          <div className="inline-block bg-light-green border-2 border-ink px-4 py-1 rounded-full text-sm font-bold shadow-soft-sm">
            {t.hero.eyebrow}
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight">
            {t.hero.headline}
          </h1>
          <p className="text-lg text-ink/80 leading-relaxed max-w-lg">
            {t.hero.subtext}
          </p>
          <div className="flex flex-wrap gap-4 pt-4">
            <a href="#projects" className="brutal-btn brutal-btn-primary flex items-center gap-2">
              {t.hero.ctaPrimary}
              <ArrowRight size={18} className="rtl:rotate-180" />
            </a>
            <a href={siteConfig.app.downloadUrl} className="brutal-btn brutal-btn-outline flex items-center gap-2">
              {t.hero.ctaSecondary}
            </a>
          </div>
          <div className="flex items-center gap-2 text-sm text-ink/60 pt-4">
            <span className="w-2 h-2 rounded-full bg-coral animate-pulse"></span>
            {t.hero.status}
          </div>
        </motion.div>

        {/* Visual Panel */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative"
        >
          <div className="brutal-card aspect-square flex flex-col items-center justify-center p-8 relative overflow-hidden bg-soft-blue/30">
            {/* Abstract Workspace */}
            <div className="grid grid-cols-2 gap-4 w-full max-w-sm">
              <div className="brutal-card flex flex-col items-center gap-2 bg-white/80">
                <Code className="text-deep-green" size={32} />
                <span className="text-xs font-bold">Build</span>
              </div>
              <div className="brutal-card flex flex-col items-center gap-2 bg-white/80">
                <PenTool className="text-coral" size={32} />
                <span className="text-xs font-bold">Design</span>
              </div>
              <div className="brutal-card flex flex-col items-center gap-2 bg-white/80">
                <Rocket className="text-deep-green" size={32} />
                <span className="text-xs font-bold">Ship</span>
              </div>
              <div className="brutal-card flex flex-col items-center gap-2 bg-white/80">
                <RefreshCw className="text-coral" size={32} />
                <span className="text-xs font-bold">Repeat</span>
              </div>
            </div>
            {/* Phone Mockup */}
            <div className="absolute bottom-4 right-4 w-32 h-48 bg-ink rounded-xl border-4 border-ink shadow-soft flex flex-col items-center justify-center text-white overflow-hidden">
              <div className="w-full h-full bg-gradient-to-br from-deep-green to-ink flex flex-col items-center justify-center gap-2 p-2">
                <Smartphone size={24} className="text-light-green" />
                <span className="text-[10px] text-center font-bold">Mr قلک</span>
                <div className="w-full h-1 bg-white/20 rounded-full mt-2"></div>
                <div className="w-3/4 h-1 bg-white/20 rounded-full"></div>
                <div className="w-1/2 h-1 bg-white/20 rounded-full"></div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};