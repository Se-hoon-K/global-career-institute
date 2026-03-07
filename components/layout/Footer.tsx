import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';

export default function Footer() {
  const t = useTranslations('footer');

  const navLinks = [
    { href: '/', label: t('nav.home') },
    { href: '/about', label: t('nav.about') },
    { href: '/process', label: t('nav.process') },
    { href: '/contact', label: t('nav.contact') },
  ];

  return (
    <footer className="bg-navy-dark text-white">
      <div className="container-max py-16">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-5">
              <div className="w-8 h-8 bg-gold rounded flex items-center justify-center shrink-0">
                <span className="text-navy font-bold text-xs leading-none">GCI</span>
              </div>
              <span className="font-semibold text-sm tracking-wide">Global Career Institute</span>
            </div>
            <p className="text-white/40 text-sm leading-relaxed max-w-xs">{t('description')}</p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-sm mb-5 text-white/80 uppercase tracking-wider">
              {t('quickLinks')}
            </h3>
            <ul className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/40 hover:text-gold text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-sm mb-5 text-white/80 uppercase tracking-wider">
              {t('contactInfo')}
            </h3>
            <ul className="flex flex-col gap-3 text-sm text-white/40">
              <li className="flex items-start gap-3">
                <svg className="shrink-0 mt-0.5" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
                <span>{t('email')}</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="shrink-0 mt-0.5" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                <span>{t('phone')}</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="shrink-0 mt-0.5" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <span>{t('address')}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-max py-6">
          <p className="text-white/25 text-xs text-center">{t('copyright')}</p>
        </div>
      </div>
    </footer>
  );
}
