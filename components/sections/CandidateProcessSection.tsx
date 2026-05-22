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
          <div className="inline-flex items-center gap-2 border border-gold/30 rounded-full px-4 py-2 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-gold" />
            <span className="text-gold text-sm font-medium">{t('badge')}</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {t('title')}{' '}
            <span className="text-gold">{t('titleHighlight')}</span>
          </h2>
          <p className="text-white/50 max-w-xl mx-auto text-sm leading-relaxed">{t('subtitle')}</p>
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
