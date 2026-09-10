import { useTranslations } from 'next-intl';
import PageIntro from '@/components/ui/PageIntro';
import InquiryBand from '@/components/ui/InquiryBand';

export default function AboutPage() {
  const t = useTranslations('aboutPage');
  const specItems = t.raw('specializations.items') as string[];
  const philosophyItems = t.raw('philosophy.items') as Array<{ title: string; description: string }>;

  return (
    <>
      <PageIntro
        sectionLabel={t('hero.badge')}
        title={`${t('hero.title')} ${t('hero.titleHighlight')}`}
        summary={t('hero.subtitle')}
      />

      <section className="bg-cream" aria-labelledby="profile-title">
        <div className="container-max grid gap-12 py-20 md:py-28 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <p className="text-sm font-semibold tracking-[0.12em] text-gold-dark uppercase">Lead consultant</p>
            <h2 id="profile-title" className="mt-5 text-3xl font-bold tracking-[-0.03em] text-navy md:text-4xl">
              {t('profile.name')}
            </h2>
            <p className="mt-3 max-w-sm text-sm leading-6 font-medium text-gold-dark">{t('profile.title')}</p>
          </div>

          <div className="lg:col-span-7 lg:col-start-6">
            <div className="space-y-5 border-t border-navy/20 pt-8 text-sm leading-8 text-ink/75 md:text-base">
              <p>{t('profile.bio1')}</p>
              <p>{t('profile.bio2')}</p>
              <p>{t('profile.bio3')}</p>
            </div>

            <div className="mt-12">
              <h3 className="text-sm font-bold text-navy">{t('specializations.title')}</h3>
              <ul className="mt-5 grid border-t border-navy/15 sm:grid-cols-2">
                {specItems.map((item, index) => (
                  <li key={item} className="flex items-center gap-3 border-b border-navy/15 py-4 text-sm font-semibold text-navy sm:pr-5 even:sm:pl-5">
                    <span className="font-mono text-[0.65rem] text-gold-dark">{String(index + 1).padStart(2, '0')}</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white" aria-labelledby="philosophy-title">
        <div className="container-max grid gap-12 py-20 md:py-28 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <p className="text-sm font-semibold tracking-[0.12em] text-gold-dark uppercase">{t('philosophy.badge')}</p>
            <h2 id="philosophy-title" className="text-balance mt-5 text-3xl font-bold tracking-[-0.03em] text-navy md:text-4xl">
              {t('philosophy.title')} {t('philosophy.titleHighlight')}
            </h2>
          </div>
          <ol className="border-t border-navy/20 lg:col-span-7 lg:col-start-6">
            {philosophyItems.map((item, index) => (
              <li key={item.title} className="grid gap-3 border-b border-navy/20 py-7 sm:grid-cols-[3rem_1fr]">
                <span className="font-mono text-xs font-semibold text-gold-dark">{String(index + 1).padStart(2, '0')}</span>
                <div>
                  <h3 className="text-lg font-bold text-navy">{item.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-ink/70">{item.description}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <InquiryBand title={t('cta.title')} description={t('cta.subtitle')} primaryLabel={t('cta.ctaContact')} />
    </>
  );
}
