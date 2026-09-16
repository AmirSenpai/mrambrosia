import { useState } from 'react';
import { useApp } from '../App';
import { siteConfig } from '../config/site';
import { Mail, Globe, Code2, Send, AlertCircle, CheckCircle } from 'lucide-react';

export const Contact = () => {
  const { t } = useApp();
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'error' | 'success'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('idle');
    
    if (!formData.name || !formData.email || !formData.message) {
      setStatus('error');
      setErrorMessage(t.contact.form.errorMsg);
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      setStatus('error');
      setErrorMessage(t.contact.form.errorMsg);
      return;
    }

    // Simulate success without backend
    setStatus('success');
    setFormData({ name: '', email: '', message: '' });
  };

  const contactLinks = [
    { icon: Mail, label: siteConfig.email, href: `mailto:${siteConfig.email}` },
    { icon: Globe, label: siteConfig.domain, href: `https://${siteConfig.domain}` },
    { icon: Code2, label: 'GitHub', href: siteConfig.socials.github },
    { icon: Send, label: 'Telegram', href: siteConfig.socials.telegram },
  ];

  return (
    <section id="contact" className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="grid md:grid-cols-2 gap-12">
        {/* Contact Info */}
        <div className="space-y-8">
          <div>
            <h2 className="text-3xl md:text-4xl font-black mb-4">{t.contact.title}</h2>
            <p className="text-lg text-ink/80 leading-relaxed">{t.contact.text}</p>
          </div>

          <div className="space-y-4">
            {contactLinks.map((link, idx) => (
              <a
                key={idx}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="brutal-card flex items-center gap-4 hover:bg-deep-green hover:text-white group transition-colors"
              >
                <div className="p-2 bg-paper rounded-lg border-2 border-ink group-hover:border-white">
                  <link.icon size={20} className="text-ink group-hover:text-deep-green" />
                </div>
                <span className="font-bold text-sm">{link.label}</span>
              </a>
            ))}
          </div>
        </div>

        {/* Contact Form */}
        <div className="brutal-card bg-card">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-bold mb-2">{t.contact.form.name}</label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full bg-paper border-2 border-ink rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-deep-green focus:border-transparent transition-all"
                placeholder={t.contact.form.name}
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-bold mb-2">{t.contact.form.email}</label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full bg-paper border-2 border-ink rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-deep-green focus:border-transparent transition-all"
                placeholder="email@example.com"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-bold mb-2">{t.contact.form.message}</label>
              <textarea
                id="message"
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full bg-paper border-2 border-ink rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-deep-green focus:border-transparent transition-all resize-none"
                placeholder={t.contact.form.message}
              ></textarea>
            </div>

            {status === 'error' && (
              <div className="flex items-center gap-2 text-coral text-sm font-bold bg-coral/10 p-3 rounded-lg border border-coral">
                <AlertCircle size={18} />
                {errorMessage}
              </div>
            )}

            {status === 'success' && (
              <div className="flex items-center gap-2 text-deep-green text-sm font-bold bg-light-green/20 p-3 rounded-lg border border-deep-green">
                <CheckCircle size={18} />
                {t.contact.form.successMsg}
              </div>
            )}

            <button type="submit" className="brutal-btn brutal-btn-primary w-full flex justify-center items-center gap-2">
              <Send size={18} className="rtl:rotate-180" />
              {t.contact.form.submit}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};