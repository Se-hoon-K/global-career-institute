import { useTranslations } from 'next-intl';
import { FadeInUp, StaggerContainer, StaggerItem } from '@/components/ui/animations';

export default function CandidateProcessSection() {
  const t = useTranslations('candidatePage.process');
  const steps = t.raw('steps') as Array<{ number: string; title: string; description: string }>;

  return (
    <section className="section-padding bg-navy">
      <div className="container-max">
        {/* Header */}
        <FadeInUp className="text-center mb-16">
          <p className="text-gold text-sm font-semibold mb-3">{t('badge')}</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {t('title')} {t('titleHighlight')}
          </h2>
          <p className="text-white/60 max-w-xl mx-auto text-sm leading-relaxed">{t('subtitle')}</p>
        </FadeInUp>

        {/* Steps grid */}
        <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((step, i) => (
            <StaggerItem key={i}>
              <div className="relative p-8 rounded-2xl border border-white/10 bg-white/5 hover:border-gold/30 hover:bg-white/8 transition-all duration-300">
                <div className="text-4xl font-bold text-gold/20 mb-4 leading-none">{step.number}</div>
                <h3 className="font-semibold text-white text-base mb-2">{step.title}</h3>
                <p className="text-white/40 text-sm leading-relaxed">{step.description}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
