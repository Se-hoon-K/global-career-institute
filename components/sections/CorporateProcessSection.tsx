import { useTranslations } from 'next-intl';

export default function CorporateProcessSection() {
  const t = useTranslations('corporatePage.process');
  const steps = t.raw('steps') as Array<{ number: string; title: string; description: string; details: string[] }>;

  return (
    <section className="bg-cream" aria-labelledby="corporate-process-title">
      <div className="container-max py-20 md:py-28">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <p className="text-sm font-semibold tracking-[0.12em] text-gold-dark uppercase">{t('badge')}</p>
            <h2 id="corporate-process-title" className="text-balance mt-5 text-3xl font-bold tracking-[-0.03em] text-navy md:text-5xl">
              {t('title')} {t('titleHighlight')}
            </h2>
          </div>
          <p className="max-w-lg text-sm leading-7 text-ink/70 lg:col-span-4 lg:col-start-9">{t('subtitle')}</p>
        </div>

        <ol className="mt-14 border-t border-navy/20">
          {steps.map((step) => (
            <li key={step.number} className="grid gap-5 border-b border-navy/20 py-8 md:grid-cols-[4rem_1fr_1fr] md:gap-8 md:py-10">
              <span className="font-mono text-xs font-semibold text-gold-dark">{step.number}</span>
              <div>
                <h3 className="text-xl font-bold tracking-[-0.02em] text-navy">{step.title}</h3>
                <p className="mt-3 text-sm leading-7 text-ink/70">{step.description}</p>
              </div>
              <ul className="grid content-start gap-2 text-sm text-ink/70 md:pl-8">
                {step.details.map((detail) => (
                  <li key={detail} className="flex items-start gap-3">
                    <span className="mt-2 h-1 w-1 shrink-0 bg-gold-dark" aria-hidden="true" />
                    {detail}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
