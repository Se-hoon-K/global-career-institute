import { useTranslations } from 'next-intl';

interface ExpertiseItem {
  number: string;
  title: string;
  description: string;
}

export default function ExpertiseSection() {
  const t = useTranslations('homeRedesign.expertise');
  const items = t.raw('items') as ExpertiseItem[];

  return (
    <section id="expertise" className="scroll-mt-20 bg-cream" aria-labelledby="expertise-title">
      <div className="container-max grid gap-12 py-20 md:py-28 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <p className="text-sm font-semibold tracking-[0.14em] text-gold-dark uppercase">{t('label')}</p>
          <h2 id="expertise-title" className="text-balance mt-5 max-w-lg text-3xl leading-tight font-bold tracking-[-0.035em] text-navy md:text-5xl">
            {t('title')}
          </h2>
          <p className="mt-6 max-w-md text-sm leading-7 text-ink/70 md:text-base">{t('description')}</p>
        </div>

        <ol className="border-t border-navy/20 lg:col-span-6 lg:col-start-7">
          {items.map((item) => (
            <li key={item.number} className="grid gap-4 border-b border-navy/20 py-7 sm:grid-cols-[3rem_1fr] md:py-8">
              <span className="font-mono text-xs font-semibold text-gold-dark">{item.number}</span>
              <div>
                <h3 className="text-xl font-bold tracking-[-0.02em] text-navy">{item.title}</h3>
                <p className="mt-3 max-w-xl text-sm leading-7 text-ink/70">{item.description}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
