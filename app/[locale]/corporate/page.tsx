import { getTranslations } from 'next-intl/server';
import PageIntro from '@/components/ui/PageIntro';
import InquiryBand from '@/components/ui/InquiryBand';
import ClientExperienceSection from '@/components/home/ClientExperienceSection';
import CorporateProcessSection from '@/components/sections/CorporateProcessSection';

export default async function CorporatePage() {
  const t = await getTranslations('corporatePage');

  return (
    <>
      <PageIntro
        sectionLabel={t('hero.badge')}
        title={`${t('hero.title')} ${t('hero.titleHighlight')}`}
        summary={t('hero.subtitle')}
      />
      <ClientExperienceSection />
      <CorporateProcessSection />
      <InquiryBand
        title={t('cta.title')}
        description={t('cta.subtitle')}
        primaryLabel={t('cta.ctaContact')}
      />
    </>
  );
}
