import { useTranslations } from 'next-intl';
import { FadeInUp } from '@/components/ui/animations';

export default function CorporateProcessSection() {
  const t = useTranslations('corporatePage.process');
  const steps = t.raw('steps') as Array<{
    number: string;
    title: string;
    description: string;
    details: string[];
  }>;

  return (
    <section className="section-padding bg-white">
      <div className="container-max">
        {/* Header */}
        <FadeInUp className="text-center mb-16">
          <p className="text-gold text-sm font-semibold mb-3">{t('badge')}</p>
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
            {t('title')} {t('titleHighlight')}
          </h2>
          <p className="text-navy/60 max-w-xl mx-auto text-sm leading-relaxed">{t('subtitle')}</p>
        </FadeInUp>

        {/* Steps */}
        <div className="flex flex-col gap-8">
          {steps.map((step, i) => (
            <div key={i} className="grid md:grid-cols-[120px_1fr] gap-6 items-start">
              {/* Number — desktop */}
              <div className="hidden md:flex items-center justify-center">
                <div className="w-20 h-20 rounded-2xl bg-navy flex items-center justify-center">
                  <span className="text-2xl font-bold text-gold">{step.number}</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-8 rounded-2xl border border-navy/8 bg-cream">
                {/* Number — mobile */}
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
  );
}
