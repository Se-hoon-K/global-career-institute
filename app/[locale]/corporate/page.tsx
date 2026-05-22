import { getTranslations, getLocale } from 'next-intl/server';
import PageHero from '@/components/ui/PageHero';
import CorporateProcessSection from '@/components/sections/CorporateProcessSection';
import ServicesSection from '@/components/sections/ServicesSection';
import CandidateShowcaseSection from '@/components/sections/CandidateShowcaseSection';
import CTASection from '@/components/sections/CTASection';
import { getCandidates } from '@/lib/data/candidates';

export default async function CorporatePage() {
  const t = await getTranslations('corporatePage');
  const candidates = await getCandidates();
  const locale = await getLocale();

  return (
    <>
      <PageHero
        badge={t('hero.badge')}
        title={t('hero.title')}
        titleHighlight={t('hero.titleHighlight')}
        subtitle={t('hero.subtitle')}
      />
      <CorporateProcessSection />
      <ServicesSection />
      <CandidateShowcaseSection candidates={candidates} locale={locale} />
      <CTASection />
    </>
  );
}
