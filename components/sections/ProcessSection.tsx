import { useTranslations } from 'next-intl';

interface SearchStep {
  number: string;
  title: string;
  description: string;
}

export default function ProcessSection() {
  const t = useTranslations('homeRedesign.process');
  const steps = t.raw('steps') as SearchStep[];

  return (
    <section id="process" className="scroll-mt-20 bg-navy text-white" aria-labelledby="process-title">
      <div className="container-max py-20 md:py-28">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <p className="text-sm font-semibold tracking-[0.14em] text-gold-light uppercase">{t('label')}</p>
            <h2 id="process-title" className="text-balance mt-5 max-w-3xl text-3xl leading-tight font-bold tracking-[-0.035em] md:text-5xl">
              {t('title')}
            </h2>
          </div>
          <p className="max-w-lg text-sm leading-7 text-white/65 lg:col-span-4 lg:col-start-9">{t('description')}</p>
        </div>

        <ol className="mt-16 grid border-t border-white/20 md:grid-cols-2 xl:grid-cols-4">
          {steps.map((step, index) => (
            <li key={step.number} className="relative border-b border-white/20 py-8 md:min-h-72 md:border-r md:px-7 xl:border-b-0 first:md:pl-0 last:md:border-r-0 last:xl:pr-0">
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs font-semibold text-gold-light">{step.number}</span>
                {index < steps.length - 1 && <span className="h-px flex-1 bg-white/15" aria-hidden="true" />}
              </div>
              <h3 className="mt-14 text-xl font-bold tracking-[-0.02em]">{step.title}</h3>
              <p className="mt-4 text-sm leading-7 text-white/60">{step.description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
