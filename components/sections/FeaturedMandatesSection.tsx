import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { Job } from '@/lib/data/jobs';
import { selectFeaturedJobs } from '@/lib/data/site-content';

export default function FeaturedMandatesSection({ jobs, locale }: { jobs: Job[]; locale: string }) {
  const t = useTranslations('homeRedesign.mandates');
  const selectedJobs = selectFeaturedJobs(jobs);
  const isKo = locale === 'ko';

  return (
    <section className="bg-cream" aria-labelledby="mandates-title">
      <div className="container-max py-20 md:py-28">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <p className="text-sm font-semibold tracking-[0.14em] text-gold-dark uppercase">{t('label')}</p>
            <h2 id="mandates-title" className="text-balance mt-5 text-3xl font-bold tracking-[-0.035em] text-navy md:text-5xl">{t('title')}</h2>
          </div>
          <p className="max-w-lg text-sm leading-7 text-ink/70 lg:col-span-4 lg:col-start-9">{t('description')}</p>
        </div>

        <ul className="mt-14 border-t border-navy/20">
          {selectedJobs.map((job) => (
            <li key={job.id} className="border-b border-navy/20">
              <Link href={`/contact?type=candidate&job=${job.id}`} className="group grid gap-4 py-7 transition-colors hover:bg-white/55 sm:grid-cols-[1fr_auto] sm:items-center sm:px-4 md:py-8" aria-label={`${isKo ? job.titleKo : job.title} — ${t('apply')}`}>
                <div>
                  <p className="text-xs font-semibold tracking-[0.08em] text-gold-dark uppercase">{t('confidential')}</p>
                  <h3 className="mt-2 text-xl font-bold tracking-[-0.02em] text-navy md:text-2xl">{isKo ? job.titleKo : job.title}</h3>
                  <p className="mt-3 text-sm text-ink/65">
                    {isKo ? job.locationKo : job.location} · {isKo ? job.industryKo : job.industry} · {t(`employment.${job.employmentType}`)}
                  </p>
                </div>
                <span className="flex items-center gap-3 text-sm font-semibold text-navy">
                  {t('apply')}<span className="text-gold-dark transition-transform group-hover:translate-x-1" aria-hidden="true">→</span>
                </span>
              </Link>
            </li>
          ))}
        </ul>

        <Link href="/candidate" className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-navy underline decoration-gold underline-offset-4 transition-colors hover:text-gold-dark">
          {t('viewAll')}<span aria-hidden="true">→</span>
        </Link>
      </div>
    </section>
  );
}
