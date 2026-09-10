import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';

export default function ConsultantSection() {
  const t = useTranslations('homeRedesign.consultant');

  return (
    <section className="bg-white" aria-labelledby="consultant-title">
      <div className="container-max grid gap-12 py-20 md:py-28 lg:grid-cols-12 lg:items-start">
        <div className="lg:col-span-6">
          <p className="text-sm font-semibold tracking-[0.14em] text-gold-dark uppercase">{t('label')}</p>
          <h2 id="consultant-title" className="text-balance mt-5 max-w-2xl text-3xl leading-tight font-bold tracking-[-0.035em] text-navy md:text-5xl">
            {t('title')}
          </h2>
        </div>

        <div className="border-t border-navy/20 pt-8 lg:col-span-5 lg:col-start-8">
          <p className="text-xl font-bold text-navy">{t('name')}</p>
          <p className="mt-1 text-sm font-medium text-gold-dark">{t('role')}</p>
          <p className="mt-7 text-sm leading-7 text-ink/75 md:text-base md:leading-8">{t('description')}</p>
          <blockquote className="mt-8 border-l-2 border-gold pl-5 text-base leading-8 font-semibold text-navy">
            “{t('principle')}”
          </blockquote>
          <Link href="/about" className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-navy underline decoration-gold underline-offset-4 transition-colors hover:text-gold-dark">
            {t('link')}<span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
