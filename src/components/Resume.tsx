import { useApp } from '../App';
import { RESUME_DOWNLOAD_URL } from '../config/site';
import { FileText, Download, AlertCircle } from 'lucide-react';

export const Resume = () => {
  const { t } = useApp();

  return (
    <section id="resume" className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-6">
        <h2 className="text-3xl md:text-4xl font-black">{t.resume.title}</h2>
        <a href={RESUME_DOWNLOAD_URL} className="brutal-btn brutal-btn-secondary flex items-center gap-2">
          <Download size={18} />
          {t.resume.downloadBtn}
        </a>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Left Column */}
        <div className="space-y-8">
          {/* Summary */}
          <div className="brutal-card">
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2 border-b-2 border-ink/10 pb-2">
              <FileText size={20} className="text-coral" />
              {t.resume.summary}
            </h3>
            <p className="text-ink/80 leading-relaxed text-sm">
              {t.about.content}
            </p>
          </div>

          {/* Skills */}
          <div className="brutal-card">
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2 border-b-2 border-ink/10 pb-2">
              <FileText size={20} className="text-coral" />
              {t.resume.skills}
            </h3>
            <div className="flex flex-wrap gap-2">
              {t.resume.skillsList.map((skill) => (
                <span key={skill} className="bg-deep-green text-white px-3 py-1 rounded-md text-xs font-bold border border-ink">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Languages */}
          <div className="brutal-card">
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2 border-b-2 border-ink/10 pb-2">
              <FileText size={20} className="text-coral" />
              {t.resume.languages}
            </h3>
            <ul className="space-y-2">
              {t.resume.languagesList.map((lang) => (
                <li key={lang} className="text-sm font-medium flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-light-green border border-ink"></div>
                  {lang}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-8">
          {/* Experience - Empty State */}
          <div className="brutal-card bg-muted-yellow/10">
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2 border-b-2 border-ink/10 pb-2">
              <FileText size={20} className="text-coral" />
              {t.resume.experience}
            </h3>
            <div className="flex flex-col items-center justify-center py-8 text-center space-y-3">
              <AlertCircle size={32} className="text-ink/30" />
              <p className="text-sm font-medium text-ink/60">
                {t.resume.emptyExperience}
              </p>
            </div>
          </div>

          {/* Tools */}
          <div className="brutal-card">
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2 border-b-2 border-ink/10 pb-2">
              <FileText size={20} className="text-coral" />
              {t.resume.tools}
            </h3>
            <div className="flex flex-wrap gap-2">
              {["VS Code", "Figma", "GitHub", "Expo Go", "Android Studio"].map((tool) => (
                <span key={tool} className="bg-ink/5 border border-ink/20 px-3 py-1 rounded-md text-xs font-medium">
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};