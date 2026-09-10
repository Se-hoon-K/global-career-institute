import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { Job } from '@/lib/data/jobs';

export default function JobOpeningsSection({ jobs, locale }: { jobs: Job[]; locale: string }) {
  const t = useTranslations('jobOpenings');
  const isKo = locale === 'ko';
  const typeLabels: Record<Job['employmentType'], string> = {
    'full-time': t('fullTime'),
    contract: t('contract'),
    'part-time': t('partTime'),
  };

  return (
    <section className="bg-cream" aria-labelledby="job-openings-title">
      <div className="container-max py-20 md:py-28">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <p className="text-sm font-semibold tracking-[0.12em] text-gold-dark uppercase">{t('badge')}</p>
            <h2 id="job-openings-title" className="text-balance mt-5 text-3xl font-bold tracking-[-0.03em] text-navy md:text-5xl">
              {t('title')} {t('titleHighlight')}
            </h2>
          </div>
          <p className="max-w-lg text-sm leading-7 text-ink/70 lg:col-span-4 lg:col-start-9">{t('subtitle')}</p>
        </div>

        {jobs.length === 0 ? (
          <p className="mt-14 border-y border-navy/20 py-12 text-sm text-ink/60">{t('noJobs')}</p>
        ) : (
          <ul className="mt-14 border-t border-navy/20">
            {jobs.map((job) => (
              <li key={job.id} className="border-b border-navy/20">
                <Link href={`/contact?type=candidate&job=${job.id}`} className="group grid gap-4 py-7 transition-colors hover:bg-white/55 sm:grid-cols-[1fr_auto] sm:items-center sm:px-4 md:py-8">
                  <div>
                    <p className="text-xs font-semibold tracking-[0.08em] text-gold-dark uppercase">{job.company}</p>
                    <h3 className="mt-2 text-xl font-bold tracking-[-0.02em] text-navy md:text-2xl">{isKo ? job.titleKo : job.title}</h3>
                    <p className="mt-3 text-sm text-ink/65">
                      {isKo ? job.locationKo : job.location} · {isKo ? job.industryKo : job.industry} · {typeLabels[job.employmentType]}
                    </p>
                  </div>
                  <span className="flex items-center gap-3 text-sm font-semibold text-navy">
                    {t('applyButton')}<span className="text-gold-dark transition-transform group-hover:translate-x-1" aria-hidden="true">→</span>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}
