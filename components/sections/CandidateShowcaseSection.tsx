import { useTranslations } from 'next-intl';
import { Candidate } from '@/lib/data/candidates';
import CandidateCard from '@/components/jobs/CandidateCard';
import { FadeInUp, StaggerContainer, StaggerItem } from '@/components/ui/animations';

export default function CandidateShowcaseSection({
  candidates,
  locale,
}: {
  candidates: Candidate[];
  locale: string;
}) {
  const t = useTranslations('corporatePage.candidates');

  return (
    <section className="section-padding bg-cream">
      <div className="container-max">
        {/* Header */}
        <FadeInUp className="text-center mb-16">
          <p className="text-gold text-sm font-semibold mb-3">{t('badge')}</p>
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
            {t('title')} {t('titleHighlight')}
          </h2>
          <p className="text-navy/60 max-w-xl mx-auto text-sm leading-relaxed">{t('subtitle')}</p>
        </FadeInUp>

        {/* Grid */}
        <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {candidates.map((candidate) => (
            <StaggerItem key={candidate.id}>
              <CandidateCard candidate={candidate} locale={locale} />
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
