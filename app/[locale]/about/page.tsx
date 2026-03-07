import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';

export default function AboutPage() {
  const t = useTranslations('aboutPage');
  const specItems = t.raw('specializations.items') as string[];
  const philosophyItems = t.raw('philosophy.items') as Array<{ title: string; description: string }>;

  return (
    <>
      {/* Hero */}
      <section className="relative bg-navy pt-36 pb-24 overflow-hidden">
        <div className="absolute inset-0 opacity-5 pointer-events-none"
          style={{
            backgroundImage:
              'linear-gradient(rgba(201,168,76,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(201,168,76,0.3) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
        <div className="container-max relative z-10 text-center">
          <div className="inline-flex items-center gap-2 border border-gold/30 rounded-full px-4 py-2 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-gold" />
            <span className="text-gold text-sm font-medium">{t('hero.badge')}</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            {t('hero.title')}
            <br />
            <span className="text-gold">{t('hero.titleHighlight')}</span>
          </h1>
          <p className="text-white/50 max-w-xl mx-auto text-lg leading-relaxed">{t('hero.subtitle')}</p>
        </div>
      </section>

      {/* Profile */}
      <section className="section-padding bg-cream">
        <div className="container-max">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Photo placeholder */}
            <div className="rounded-2xl overflow-hidden bg-navy/10 aspect-[4/5] flex items-center justify-center">
              <div className="text-center">
                <div className="w-24 h-24 rounded-full bg-navy/20 flex items-center justify-center mx-auto mb-4">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" className="text-navy/40">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                    <circle cx="12" cy="7" r="4" />
                  </svg>
                </div>
                <p className="text-navy/30 text-sm">Photo</p>
              </div>
            </div>

            {/* Bio */}
            <div className="py-4">
              <h2 className="text-2xl font-bold text-navy mb-1">{t('profile.name')}</h2>
              <p className="text-gold font-medium text-sm mb-6">{t('profile.title')}</p>
              <div className="flex flex-col gap-4 mb-8">
                <p className="text-navy/60 leading-relaxed text-sm">{t('profile.bio1')}</p>
                <p className="text-navy/60 leading-relaxed text-sm">{t('profile.bio2')}</p>
                <p className="text-navy/60 leading-relaxed text-sm">{t('profile.bio3')}</p>
              </div>

              {/* Specializations */}
              <div>
                <h3 className="font-semibold text-navy text-sm mb-4">{t('specializations.title')}</h3>
                <div className="flex flex-wrap gap-2">
                  {specItems.map((item) => (
                    <span
                      key={item}
                      className="px-3 py-1.5 bg-navy text-white text-xs rounded-full font-medium"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 border border-gold/30 rounded-full px-4 py-2 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-gold" />
              <span className="text-gold text-sm font-medium">{t('philosophy.badge')}</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-navy">
              {t('philosophy.title')}{' '}
              <span className="text-gold">{t('philosophy.titleHighlight')}</span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {philosophyItems.map((item, i) => (
              <div key={i} className="p-8 rounded-2xl border border-navy/8 bg-cream">
                <div className="w-10 h-10 rounded-lg bg-navy flex items-center justify-center text-gold text-sm font-bold mb-5">
                  {String(i + 1).padStart(2, '0')}
                </div>
                <h3 className="font-semibold text-navy text-lg mb-3">{item.title}</h3>
                <p className="text-navy/50 text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-cream">
        <div className="container-max">
          <div className="relative bg-navy rounded-3xl px-8 py-16 md:px-16 text-center overflow-hidden">
            <div className="absolute top-[-60px] right-[-60px] w-48 h-48 rounded-full bg-gold opacity-10 blur-2xl pointer-events-none" />
            <div className="relative z-10">
              <h2 className="text-3xl font-bold text-white mb-4">{t('cta.title')}</h2>
              <p className="text-white/50 max-w-md mx-auto mb-8 text-sm leading-relaxed">{t('cta.subtitle')}</p>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center bg-gold text-navy font-semibold px-8 py-4 rounded-lg hover:bg-gold-light transition-colors text-sm"
              >
                {t('cta.ctaContact')}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
