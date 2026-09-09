import HeroSection from '@/components/sections/HeroSection';
import ClientExperienceSection from '@/components/home/ClientExperienceSection';
import AboutSection from '@/components/sections/AboutSection';
import ServicesSection from '@/components/sections/ServicesSection';
import ProcessSection from '@/components/sections/ProcessSection';
import JobOpeningsSection from '@/components/sections/JobOpeningsSection';
import CTASection from '@/components/sections/CTASection';
import { getJobs } from '@/lib/data/jobs';
import { getLocale } from 'next-intl/server';

export default async function HomePage() {
  const jobs = await getJobs('active');
  const locale = await getLocale();

  return (
    <>
      <HeroSection />
      <ClientExperienceSection />
      <AboutSection />
      <ServicesSection />
      <ProcessSection />
      <JobOpeningsSection jobs={jobs} locale={locale} />
      <CTASection />
    </>
  );
}
