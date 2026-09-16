import { useApp } from '../App';
import { MapPin, Target, Briefcase } from 'lucide-react';

export const About = () => {
  const { t } = useApp();

  return (
    <section id="about" className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-black mb-12 text-center">
        {t.about.title}
      </h2>
      
      <div className="grid md:grid-cols-2 gap-12 items-start">
        <div className="space-y-6">
          <p className="text-lg leading-relaxed text-ink/80">
            {t.about.content}
          </p>
          
          {/* Timeline */}
          <div className="flex flex-wrap gap-4 pt-4">
            {t.about.timeline.map((step, index) => (
              <div key={index} className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-deep-green text-white flex items-center justify-center text-sm font-bold border-2 border-ink shadow-soft-sm">
                  {index + 1}
                </div>
                <span className="font-bold text-sm">{step}</span>
                {index < t.about.timeline.length - 1 && (
                  <div className="w-8 h-0.5 bg-ink/30 mx-2 hidden sm:block"></div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Profile Card */}
        <div className="brutal-card bg-muted-yellow/20 space-y-4">
          <div className="flex items-center gap-4 border-b-2 border-ink/10 pb-4">
            <div className="w-16 h-16 rounded-full bg-deep-green border-2 border-ink flex items-center justify-center text-white text-2xl font-bold">
              D
            </div>
            <div>
              <h3 className="text-xl font-bold">{t.about.profile.name}</h3>
              <p className="text-sm text-ink/70">{t.about.profile.role}</p>
            </div>
          </div>
          
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <MapPin size={18} className="text-coral" />
              <span className="text-sm font-medium">{t.about.profile.location}</span>
            </div>
            <div className="flex items-center gap-3">
              <Target size={18} className="text-coral" />
              <span className="text-sm font-medium">{t.about.profile.focus}</span>
            </div>
            <div className="flex items-center gap-3">
              <Briefcase size={18} className="text-coral" />
              <span className="text-sm font-medium">{t.about.profile.current}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};