import { useLocale, useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import SearchBrief from '@/components/home/SearchBrief';
import { SEARCH_BRIEF } from '@/lib/data/site-content';

export default function HeroSection() {
  const locale = useLocale();
  const t = useTranslations('homeRedesign');

  return (
    <section className="overflow-hidden bg-navy text-white" aria-labelledby="home-hero-title">
      <div className="container-max grid min-h-[720px] items-center gap-14 pb-20 pt-32 lg:grid-cols-12 lg:pb-24 lg:pt-36">
        <div className="lg:col-span-6">
          <p className="text-sm font-semibold tracking-[0.16em] text-gold-light uppercase">
            {t('hero.sectionLabel')}
          </p>
          <h1
            id="home-hero-title"
            className="text-balance mt-6 max-w-3xl text-[clamp(2.6rem,6vw,5.6rem)] leading-[0.98] font-bold tracking-[-0.055em]"
          >
            {t('hero.title')}
          </h1>
          <p className="mt-8 max-w-xl text-base leading-8 text-white/72 md:text-lg">
            {t('hero.description')}
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex min-h-12 items-center justify-center rounded-md bg-gold px-6 text-sm font-semibold text-navy transition-colors hover:bg-gold-light"
            >
              {t('hero.primaryCta')}
            </Link>
            <Link
              href="/#process"
              className="inline-flex min-h-12 items-center justify-center rounded-md border border-white/30 px-6 text-sm font-semibold text-white transition-colors hover:border-white/60 hover:bg-white/8"
            >
              {t('hero.secondaryCta')}
            </Link>
          </div>
        </div>

        <div className="lg:col-span-5 lg:col-start-8">
          <SearchBrief
            data={SEARCH_BRIEF}
            locale={locale}
            labels={{
              title: t('brief.title'),
              sample: t('brief.sample'),
              reference: t('brief.reference'),
              role: t('brief.role'),
              sector: t('brief.sector'),
              scope: t('brief.scope'),
              status: t('brief.status'),
            }}
          />
        </div>
      </div>
    </section>
  );
}
