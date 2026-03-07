import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';

export default function ProcessSection() {
  const t = useTranslations('process');
  const steps = t.raw('steps') as Array<{ number: string; title: string; description: string }>;

  return (
    <section className="section-padding bg-navy">
      <div className="container-max">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 border border-gold/30 rounded-full px-4 py-2 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-gold" />
            <span className="text-gold text-sm font-medium">{t('badge')}</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {t('title')}{' '}
            <span className="text-gold">{t('titleHighlight')}</span>
          </h2>
          <p className="text-white/50 max-w-xl mx-auto text-sm leading-relaxed">{t('subtitle')}</p>
        </div>

        {/* Steps grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {steps.map((step, i) => (
            <div
              key={i}
              className="relative p-8 rounded-2xl border border-white/10 bg-white/5 hover:border-gold/30 hover:bg-white/8 transition-all duration-300"
            >
              <div className="text-4xl font-bold text-gold/20 mb-4 leading-none">{step.number}</div>
              <h3 className="font-semibold text-white text-base mb-2">{step.title}</h3>
              <p className="text-white/40 text-sm leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/process"
            className="inline-flex items-center gap-2 text-gold font-semibold text-sm hover:gap-3 transition-all"
          >
            {t('ctaLearnMore')}
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
