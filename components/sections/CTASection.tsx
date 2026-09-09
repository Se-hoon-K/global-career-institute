import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';

export default function CTASection() {
  const t = useTranslations('cta');

  return (
    <section className="section-padding bg-cream">
      <div className="container-max">
        <div className="bg-navy rounded-3xl px-8 py-16 md:px-16 text-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{t('title')}</h2>
            <p className="text-white/50 max-w-xl mx-auto mb-10 text-sm leading-relaxed">
              {t('subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center bg-gold text-navy font-semibold px-8 py-4 rounded-lg hover:bg-gold-light transition-colors text-sm"
              >
                {t('ctaContact')}
              </Link>
              <Link
                href="/candidate"
                className="inline-flex items-center justify-center border border-white/20 text-white font-medium px-8 py-4 rounded-lg hover:bg-white/5 hover:border-white/40 transition-colors text-sm"
              >
                {t('ctaCandidate')}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
