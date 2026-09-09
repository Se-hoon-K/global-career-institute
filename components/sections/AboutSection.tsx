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
            <p className="text-gold text-sm font-semibold mb-3">{t('badge')}</p>

            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-6 leading-tight">
              {t('title')}
              <br />
              {t('titleHighlight')}
            </h2>

            <p className="text-navy/60 leading-relaxed mb-4">{t('description1')}</p>
            <p className="text-navy/60 leading-relaxed mb-8">{t('description2')}</p>

            <Link
              href="/about"
              className="text-gold font-semibold text-sm hover:underline underline-offset-4"
            >
              {t('ctaLearnMore')}
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
