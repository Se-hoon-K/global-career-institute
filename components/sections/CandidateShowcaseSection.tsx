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
          <div className="inline-flex items-center gap-2 border border-gold/30 rounded-full px-4 py-2 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-gold" />
            <span className="text-gold text-sm font-medium">{t('badge')}</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
            {t('title')}{' '}
            <span className="text-gold">{t('titleHighlight')}</span>
          </h2>
          <p className="text-navy/50 max-w-xl mx-auto text-sm leading-relaxed">{t('subtitle')}</p>
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
