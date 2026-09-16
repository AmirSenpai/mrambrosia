import { useApp } from '../App';
import { PROJECTS } from '../config/site';
import { ArrowRight, ExternalLink, Download, Globe } from 'lucide-react';

// ─── Phone mockup (mobile projects) ──────────────────────────
const PhoneMockup = () => (
  <div className="w-64 h-[400px] bg-ink rounded-[2.5rem] border-8 border-ink shadow-soft relative overflow-hidden mx-auto">
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-ink rounded-b-xl z-10"></div>
    <div className="w-full h-full bg-paper p-4 pt-10 flex flex-col gap-3">
      <div className="flex justify-between items-center">
        <span className="text-xs font-bold">Mr قلک</span>
        <div className="w-6 h-6 rounded-full bg-deep-green"></div>
      </div>
      <div className="bg-deep-green text-white p-4 rounded-xl border-2 border-ink shadow-soft-sm">
        <p className="text-xs opacity-80">موجودی کل</p>
        <p className="text-xl font-bold">۱۲,۵۰۰,۰۰۰ ریال</p>
      </div>
      <div className="grid grid-cols-2 gap-2">
        <div className="bg-light-green p-3 rounded-lg border-2 border-ink">
          <p className="text-[10px]">درآمد</p>
          <p className="text-sm font-bold">۸,۰۰۰,۰۰۰</p>
        </div>
        <div className="bg-coral text-white p-3 rounded-lg border-2 border-ink">
          <p className="text-[10px]">هزینه‌ها</p>
          <p className="text-sm font-bold">۳,۵۰۰,۰۰۰</p>
        </div>
      </div>
      <div className="bg-white/80 p-3 rounded-lg border-2 border-ink flex-grow">
        <p className="text-[10px] font-bold mb-2">بودجه ماهانه</p>
        <div className="w-full h-2 bg-ink/10 rounded-full overflow-hidden">
          <div className="w-3/4 h-full bg-deep-green rounded-full"></div>
        </div>
        <p className="text-[10px] mt-1 text-ink/60">۷۵٪ مصرف شده</p>
      </div>
      <div className="space-y-1">
        <div className="flex justify-between text-[10px] border-b border-ink/10 pb-1">
          <span>خرید سوپرمارکت</span>
          <span className="text-coral">-۴۵۰,۰۰۰</span>
        </div>
        <div className="flex justify-between text-[10px] border-b border-ink/10 pb-1">
          <span>حقوق ماهانه</span>
          <span className="text-deep-green">+۸,۰۰۰,۰۰۰</span>
        </div>
      </div>
    </div>
  </div>
);

// ─── Browser mockup (web projects) ────────────────────────────
const BrowserMockup = ({ url }: { url: string }) => {
  const host = url.replace(/^https?:\/\//, '').replace(/\/$/, '');
  return (
    <div className="w-full max-w-md mx-auto rounded-2xl border-2 border-ink bg-paper shadow-soft overflow-hidden">
      {/* Browser chrome */}
      <div className="flex items-center gap-2 px-3 py-2 border-b-2 border-ink bg-ink/5">
        <span className="w-2.5 h-2.5 rounded-full bg-coral border border-ink"></span>
        <span className="w-2.5 h-2.5 rounded-full bg-muted-yellow border border-ink"></span>
        <span className="w-2.5 h-2.5 rounded-full bg-light-green border border-ink"></span>
        <div className="flex-1 mx-2 bg-paper border-2 border-ink rounded-md px-2 py-0.5 flex items-center gap-1">
          <Globe size={10} className="text-ink/60 shrink-0" />
          <span className="text-[9px] font-medium truncate" dir="ltr">{host}</span>
        </div>
      </div>

      {/* Fake page content */}
      <div className="p-4 space-y-3 bg-gradient-to-br from-soft-blue/30 to-muted-yellow/20">
        {/* Hero bar */}
        <div className="flex items-center justify-between">
          <div className="w-16 h-3 rounded-full bg-deep-green/80"></div>
          <div className="flex gap-1">
            <div className="w-6 h-2 rounded-full bg-ink/20"></div>
            <div className="w-6 h-2 rounded-full bg-ink/20"></div>
            <div className="w-6 h-2 rounded-full bg-coral"></div>
          </div>
        </div>

        {/* Hero block */}
        <div className="rounded-xl border-2 border-ink bg-card p-3 space-y-2">
          <div className="w-2/3 h-3 rounded-full bg-ink/70"></div>
          <div className="w-1/2 h-2 rounded-full bg-ink/30"></div>
          <div className="w-1/3 h-2 rounded-full bg-ink/30"></div>
          <div className="flex gap-2 pt-1">
            <div className="w-14 h-5 rounded-md bg-coral border border-ink"></div>
            <div className="w-14 h-5 rounded-md bg-paper border border-ink"></div>
          </div>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-3 gap-2">
          <div className="rounded-lg border-2 border-ink bg-light-green h-12"></div>
          <div className="rounded-lg border-2 border-ink bg-soft-blue h-12"></div>
          <div className="rounded-lg border-2 border-ink bg-muted-yellow h-12"></div>
        </div>

        {/* Text lines */}
        <div className="space-y-1.5">
          <div className="w-full h-2 rounded-full bg-ink/15"></div>
          <div className="w-5/6 h-2 rounded-full bg-ink/15"></div>
          <div className="w-3/4 h-2 rounded-full bg-ink/15"></div>
        </div>
      </div>
    </div>
  );
};

// ─── Single project card ─────────────────────────────────────
const ProjectCard = ({ id, index }: { id: string; index: number }) => {
  const { t } = useApp();
  const meta = PROJECTS.find(p => p.id === id);
  if (!meta) return null;

  const item = t.projects.items[id as keyof typeof t.projects.items];
  if (!item) return null;

  const isMobile = meta.kind === 'mobile';
  // Alternate layout direction on desktop for visual rhythm
  const reverse = index % 2 === 1;

  return (
    <article
      className={`brutal-card bg-card grid md:grid-cols-2 gap-8 p-6 md:p-8 ${
        reverse ? 'md:[&>*:first-child]:order-2' : ''
      }`}
    >
      {/* Project Info */}
      <div className="space-y-6">
        <div className="flex items-center justify-between flex-wrap gap-2">
          <span className="bg-light-green border-2 border-ink px-3 py-1 rounded-full text-xs font-bold">
            {item.category}
          </span>
          <span className="bg-coral text-white border-2 border-ink px-3 py-1 rounded-full text-xs font-bold">
            {item.status}
          </span>
        </div>

        <h3 className="text-3xl font-black">{item.title}</h3>
        <p className="text-ink/80 leading-relaxed">{item.description}</p>

        <div className="flex flex-wrap gap-2">
          {item.tags.map(tag => (
            <span
              key={tag}
              className="bg-ink/5 border border-ink/20 px-3 py-1 rounded-md text-xs font-medium"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex flex-wrap gap-4 pt-4">
          {isMobile ? (
            <>
              <a
                href="#app"
                className="brutal-btn brutal-btn-primary flex items-center gap-2"
              >
                {item.cta1}
                <ArrowRight size={18} className="rtl:rotate-180" />
              </a>
              <a
                href={meta.downloadUrl}
                download
                className="brutal-btn brutal-btn-outline flex items-center gap-2"
              >
                <Download size={16} />
                {item.cta2}
              </a>
            </>
          ) : (
            <>
              <a
                href={meta.url}
                target="_blank"
                rel="noopener noreferrer"
                className="brutal-btn brutal-btn-primary flex items-center gap-2"
              >
                <ExternalLink size={16} />
                {item.cta1}
              </a>
              <a
                href={meta.url}
                target="_blank"
                rel="noopener noreferrer"
                className="brutal-btn brutal-btn-outline flex items-center gap-2"
              >
                {item.cta2}
                <ArrowRight size={18} className="rtl:rotate-180" />
              </a>
            </>
          )}
        </div>
      </div>

      {/* Visual */}
      <div className="flex items-center justify-center">
        {isMobile ? <PhoneMockup /> : <BrowserMockup url={meta.url} />}
      </div>
    </article>
  );
};

// ─── Section ─────────────────────────────────────────────────
export const Projects = () => {
  const { t } = useApp();

  return (
    <section
      id="projects"
      className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
    >
      <div className="bg-soft-blue/20 rounded-3xl border-2 border-ink shadow-soft p-6 md:p-10">
        <h2 className="text-3xl md:text-4xl font-black mb-10 text-center">
          {t.projects.title}
        </h2>

        <div className="space-y-8">
          {PROJECTS.map((p, i) => (
            <ProjectCard key={p.id} id={p.id} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};