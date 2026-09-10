import { getLocale, getTranslations } from 'next-intl/server';
import PageIntro from '@/components/ui/PageIntro';
import InquiryBand from '@/components/ui/InquiryBand';
import CandidateProcessSection from '@/components/sections/CandidateProcessSection';
import JobOpeningsSection from '@/components/sections/JobOpeningsSection';
import { getJobs } from '@/lib/data/jobs';

export default async function CandidatePage() {
  const t = await getTranslations('candidatePage');
  const jobs = await getJobs('active');
  const locale = await getLocale();

  return (
    <>
      <PageIntro
        sectionLabel={t('hero.badge')}
        title={`${t('hero.title')} ${t('hero.titleHighlight')}`}
        summary={t('hero.subtitle')}
      />
      <JobOpeningsSection jobs={jobs} locale={locale} />
      <CandidateProcessSection />
      <InquiryBand
        title={t('cta.title')}
        description={t('cta.subtitle')}
        primaryLabel={t('cta.ctaContact')}
      />
    </>
  );
}
