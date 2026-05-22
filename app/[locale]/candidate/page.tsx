import { getTranslations, getLocale } from 'next-intl/server';
import PageHero from '@/components/ui/PageHero';
import CandidateProcessSection from '@/components/sections/CandidateProcessSection';
import ServicesSection from '@/components/sections/ServicesSection';
import JobOpeningsSection from '@/components/sections/JobOpeningsSection';
import CTASection from '@/components/sections/CTASection';
import { getJobs } from '@/lib/data/jobs';

export default async function CandidatePage() {
  const t = await getTranslations('candidatePage');
  const jobs = await getJobs('active');
  const locale = await getLocale();

  return (
    <>
      <PageHero
        badge={t('hero.badge')}
        title={t('hero.title')}
        titleHighlight={t('hero.titleHighlight')}
        subtitle={t('hero.subtitle')}
      />
      <CandidateProcessSection />
      <ServicesSection />
      <JobOpeningsSection jobs={jobs} locale={locale} />
      <CTASection />
    </>
  );
}
