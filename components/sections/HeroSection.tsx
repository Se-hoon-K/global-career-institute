import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';

export default function HeroSection() {
  const t = useTranslations('hero');

  return (
    <section className="relative min-h-screen flex items-center bg-navy overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute top-1/4 right-[-10%] w-[500px] h-[500px] rounded-full bg-gold opacity-5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-[-10%] w-[400px] h-[400px] rounded-full bg-gold opacity-5 blur-3xl pointer-events-none" />
      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(rgba(201,168,76,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(201,168,76,0.3) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      <div className="container-max relative z-10 pt-32 pb-24">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 border border-gold/30 rounded-full px-4 py-2 mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-gold" />
          <span className="text-gold text-sm font-medium tracking-wide">{t('badge')}</span>
        </div>

        {/* Headline */}
        <h1 className="text-5xl md:text-7xl font-bold text-white leading-[1.1] mb-6">
          {t('title')}
          <br />
          <span className="text-gold">{t('titleHighlight')}</span>
        </h1>

        {/* Subtitle */}
        <p className="text-white/60 text-lg md:text-xl max-w-2xl mb-12 leading-relaxed">
          {t('subtitle')}
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center bg-gold text-navy font-semibold px-8 py-4 rounded-lg hover:bg-gold-light transition-colors text-sm"
          >
            {t('ctaHire')}
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center border border-white/20 text-white font-medium px-8 py-4 rounded-lg hover:bg-white/5 hover:border-white/40 transition-colors text-sm"
          >
            {t('ctaApply')}
          </Link>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/30">
        <div className="w-px h-8 bg-gradient-to-b from-transparent to-white/30" />
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
          <path d="M12 5v14M5 12l7 7 7-7" />
        </svg>
      </div>
    </section>
  );
}
