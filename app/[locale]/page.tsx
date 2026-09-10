import HeroSection from '@/components/sections/HeroSection';
import ClientExperienceSection from '@/components/home/ClientExperienceSection';
import ExpertiseSection from '@/components/sections/ExpertiseSection';
import ProcessSection from '@/components/sections/ProcessSection';
import ConsultantSection from '@/components/sections/ConsultantSection';
import FeaturedMandatesSection from '@/components/sections/FeaturedMandatesSection';
import InquiryBand from '@/components/ui/InquiryBand';
import { getJobs } from '@/lib/data/jobs';
import { getLocale, getTranslations } from 'next-intl/server';

export default async function HomePage() {
  const jobs = await getJobs('active');
  const locale = await getLocale();
  const t = await getTranslations('homeRedesign.inquiry');

  return (
    <>
      <HeroSection />
      <ClientExperienceSection />
      <ExpertiseSection />
      <ProcessSection />
      <ConsultantSection />
      <FeaturedMandatesSection jobs={jobs} locale={locale} />
      <InquiryBand
        title={t('title')}
        description={t('description')}
        primaryLabel={t('primaryCta')}
        secondaryLabel={t('secondaryCta')}
      />
    </>
  );
}
