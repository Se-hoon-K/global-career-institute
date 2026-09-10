import { useTranslations } from 'next-intl';

export default function CandidateProcessSection() {
  const t = useTranslations('candidatePage.process');
  const steps = t.raw('steps') as Array<{ number: string; title: string; description: string }>;

  return (
    <section className="bg-navy text-white" aria-labelledby="candidate-process-title">
      <div className="container-max grid gap-12 py-20 md:py-28 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <p className="text-sm font-semibold tracking-[0.12em] text-gold-light uppercase">{t('badge')}</p>
          <h2 id="candidate-process-title" className="text-balance mt-5 text-3xl font-bold tracking-[-0.03em] md:text-4xl">
            {t('title')} {t('titleHighlight')}
          </h2>
          <p className="mt-5 max-w-sm text-sm leading-7 text-white/65">{t('subtitle')}</p>
        </div>

        <ol className="border-t border-white/20 lg:col-span-7 lg:col-start-6">
          {steps.map((step) => (
            <li key={step.number} className="grid gap-3 border-b border-white/20 py-7 sm:grid-cols-[3rem_1fr]">
              <span className="font-mono text-xs font-semibold text-gold-light">{step.number}</span>
              <div>
                <h3 className="text-lg font-bold">{step.title}</h3>
                <p className="mt-2 text-sm leading-7 text-white/60">{step.description}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
