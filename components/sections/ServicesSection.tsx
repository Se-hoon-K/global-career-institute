import { useTranslations } from 'next-intl';

const serviceIcons = [
  // Executive Search
  <svg key="exec" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>,
  // Mid-Management
  <svg key="mid" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
    <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
    <line x1="12" y1="12" x2="12" y2="16" />
    <line x1="10" y1="14" x2="14" y2="14" />
  </svg>,
  // Career Consulting
  <svg key="consult" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
  </svg>,
  // Reference Check
  <svg key="ref" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 11l3 3L22 4" />
    <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
  </svg>,
];

export default function ServicesSection() {
  const t = useTranslations('services');
  const items = t.raw('items') as Array<{ title: string; description: string }>;

  return (
    <section className="section-padding bg-white">
      <div className="container-max">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 border border-gold/30 rounded-full px-4 py-2 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-gold" />
            <span className="text-gold text-sm font-medium">{t('badge')}</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
            {t('title')}{' '}
            <span className="text-gold">{t('titleHighlight')}</span>
          </h2>
          <p className="text-navy/50 max-w-xl mx-auto text-sm leading-relaxed">{t('subtitle')}</p>
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item, i) => (
            <div
              key={i}
              className="group p-8 rounded-2xl border border-navy/8 bg-cream hover:border-gold/30 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-navy flex items-center justify-center text-gold mb-6 group-hover:bg-gold group-hover:text-navy transition-colors duration-300">
                {serviceIcons[i]}
              </div>
              <h3 className="font-semibold text-navy text-base mb-3">{item.title}</h3>
              <p className="text-navy/50 text-sm leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
