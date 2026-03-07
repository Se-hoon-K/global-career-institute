import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';

export default function ProcessPage() {
  const t = useTranslations('processPage');
  const steps = t.raw('steps') as Array<{
    number: string;
    title: string;
    description: string;
    details: string[];
  }>;

  return (
    <>
      {/* Hero */}
      <section className="relative bg-navy pt-36 pb-24 overflow-hidden">
        <div className="absolute inset-0 opacity-5 pointer-events-none"
          style={{
            backgroundImage:
              'linear-gradient(rgba(201,168,76,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(201,168,76,0.3) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
        <div className="container-max relative z-10 text-center">
          <div className="inline-flex items-center gap-2 border border-gold/30 rounded-full px-4 py-2 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-gold" />
            <span className="text-gold text-sm font-medium">{t('hero.badge')}</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            {t('hero.title')}
            <br />
            <span className="text-gold">{t('hero.titleHighlight')}</span>
          </h1>
          <p className="text-white/50 max-w-xl mx-auto text-lg leading-relaxed">{t('hero.subtitle')}</p>
        </div>
      </section>

      {/* Steps */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="flex flex-col gap-8">
            {steps.map((step, i) => (
              <div key={i} className="grid md:grid-cols-[120px_1fr] gap-6 items-start">
                {/* Number */}
                <div className="hidden md:flex items-center justify-center">
                  <div className="w-20 h-20 rounded-2xl bg-navy flex items-center justify-center">
                    <span className="text-2xl font-bold text-gold">{step.number}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 rounded-2xl border border-navy/8 bg-cream">
                  {/* Mobile number */}
                  <div className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-xl bg-navy mb-4">
                    <span className="text-sm font-bold text-gold">{step.number}</span>
                  </div>
                  <h3 className="text-xl font-bold text-navy mb-3">{step.title}</h3>
                  <p className="text-navy/60 text-sm leading-relaxed mb-5">{step.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {step.details.map((detail) => (
                      <span
                        key={detail}
                        className="inline-flex items-center gap-1.5 text-xs text-navy/70 font-medium"
                      >
                        <span className="w-1 h-1 rounded-full bg-gold" />
                        {detail}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-cream">
        <div className="container-max">
          <div className="relative bg-navy rounded-3xl px-8 py-16 md:px-16 text-center overflow-hidden">
            <div className="absolute top-[-60px] right-[-60px] w-48 h-48 rounded-full bg-gold opacity-10 blur-2xl pointer-events-none" />
            <div className="relative z-10">
              <h2 className="text-3xl font-bold text-white mb-4">{t('cta.title')}</h2>
              <p className="text-white/50 max-w-md mx-auto mb-8 text-sm leading-relaxed">{t('cta.subtitle')}</p>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center bg-gold text-navy font-semibold px-8 py-4 rounded-lg hover:bg-gold-light transition-colors text-sm"
              >
                {t('cta.ctaContact')}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
