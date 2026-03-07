import { useTranslations } from 'next-intl';
import ContactForm from '@/components/contact/ContactForm';

export default function ContactPage() {
  const t = useTranslations('contactPage');

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
            {t('hero.title')}{' '}
            <span className="text-gold">{t('hero.titleHighlight')}</span>
          </h1>
          <p className="text-white/50 max-w-xl mx-auto text-lg leading-relaxed">{t('hero.subtitle')}</p>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="grid lg:grid-cols-[1fr_2fr] gap-12">
            {/* Contact Info */}
            <div>
              <h2 className="text-xl font-bold text-navy mb-8">{t('info.title')}</h2>
              <ul className="flex flex-col gap-6">
                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-navy flex items-center justify-center shrink-0">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="text-gold">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                      <polyline points="22,6 12,13 2,6" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-navy/40 uppercase tracking-wider mb-1">{t('info.email')}</p>
                    <p className="text-navy text-sm font-medium">{t('info.emailValue')}</p>
                  </div>
                </li>

                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-navy flex items-center justify-center shrink-0">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="text-gold">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-navy/40 uppercase tracking-wider mb-1">{t('info.phone')}</p>
                    <p className="text-navy text-sm font-medium">{t('info.phoneValue')}</p>
                  </div>
                </li>

                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-navy flex items-center justify-center shrink-0">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="text-gold">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-navy/40 uppercase tracking-wider mb-1">{t('info.address')}</p>
                    <p className="text-navy text-sm font-medium">{t('info.addressValue')}</p>
                  </div>
                </li>

                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-navy flex items-center justify-center shrink-0">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="text-gold">
                      <circle cx="12" cy="12" r="10" />
                      <polyline points="12 6 12 12 16 14" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-navy/40 uppercase tracking-wider mb-1">{t('info.hours')}</p>
                    <p className="text-navy text-sm font-medium">{t('info.hoursValue')}</p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Form */}
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
