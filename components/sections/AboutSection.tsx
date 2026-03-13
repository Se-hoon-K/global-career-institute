import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { FadeInUp, StaggerContainer, StaggerItem } from '@/components/ui/animations';
import { CountUp } from '@/components/ui/CountUp';

export default function AboutSection() {
  const t = useTranslations('about');

  const stats = [
    { value: t('stat1Value'), label: t('stat1Label') },
    { value: t('stat2Value'), label: t('stat2Label') },
    { value: t('stat3Value'), label: t('stat3Label') },
  ];

  return (
    <section className="section-padding bg-cream">
      <div className="container-max">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Content */}
          <FadeInUp>
            <div className="inline-flex items-center gap-2 border border-gold/30 rounded-full px-4 py-2 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-gold" />
              <span className="text-gold text-sm font-medium">{t('badge')}</span>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-6 leading-tight">
              {t('title')}
              <br />
              <span className="text-gold">{t('titleHighlight')}</span>
            </h2>

            <p className="text-navy/60 leading-relaxed mb-4">{t('description1')}</p>
            <p className="text-navy/60 leading-relaxed mb-8">{t('description2')}</p>

            <Link
              href="/about"
              className="inline-flex items-center gap-2 text-gold font-semibold text-sm hover:gap-3 transition-all"
            >
              {t('ctaLearnMore')}
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          </FadeInUp>

          {/* Right: Stats */}
          <StaggerContainer className="grid grid-cols-3 gap-4">
            {stats.map((stat) => (
              <StaggerItem key={stat.label}>
                <div className="text-center p-6 bg-white rounded-2xl shadow-sm border border-navy/5">
                  <div className="text-3xl md:text-4xl font-bold text-gold mb-2">
                    <CountUp value={stat.value} />
                  </div>
                  <div className="text-xs text-navy/50 leading-snug">{stat.label}</div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
}
