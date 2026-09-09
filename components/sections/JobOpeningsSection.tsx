import { useTranslations } from 'next-intl';
import { Job } from '@/lib/data/jobs';
import JobCard from '@/components/jobs/JobCard';
import { FadeInUp, StaggerContainer, StaggerItem } from '@/components/ui/animations';

export default function JobOpeningsSection({ jobs, locale }: { jobs: Job[]; locale: string }) {
  const t = useTranslations('jobOpenings');

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

        {/* Grid or empty state */}
        {jobs.length === 0 ? (
          <FadeInUp className="text-center py-16">
            <p className="text-navy/40 text-sm">{t('noJobs')}</p>
          </FadeInUp>
        ) : (
          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {jobs.map((job) => (
              <StaggerItem key={job.id}>
                <JobCard job={job} locale={locale} />
              </StaggerItem>
            ))}
          </StaggerContainer>
        )}
      </div>
    </section>
  );
}
