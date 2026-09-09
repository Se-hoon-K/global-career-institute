import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';

export default function Footer() {
  const t = useTranslations('footer');
  const navLinks = [
    { href: '/', label: t('nav.home') },
    { href: '/corporate', label: t('nav.corporate') },
    { href: '/candidate', label: t('nav.candidate') },
    { href: '/about', label: t('nav.about') },
    { href: '/contact', label: t('nav.contact') },
  ];

  return (
    <footer className="bg-navy-dark text-white">
      <div className="container-max py-16 md:py-20">
        <div className="grid gap-12 md:grid-cols-[1.3fr_0.7fr_1fr]">
          <div>
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-8 w-9 shrink-0 items-center justify-center rounded-[4px] bg-gold">
                <span className="text-[11px] font-extrabold leading-none text-navy">GCI</span>
              </div>
              <span className="text-sm font-semibold">Global Career Institute</span>
            </div>
            <p className="max-w-sm text-sm leading-7 text-white/65">{t('description')}</p>
          </div>

          <div>
            <h3 className="mb-5 text-sm font-semibold text-white">{t('quickLinks')}</h3>
            <ul className="flex flex-col gap-3.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-white/65 transition-colors hover:text-gold-light">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-5 text-sm font-semibold text-white">{t('contactInfo')}</h3>
            <ul className="flex flex-col gap-3.5 text-sm leading-6 text-white/65">
              <li>{t('email')}</li>
              <li>{t('phone')}</li>
              <li>{t('address')}</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-max py-6">
          <p className="text-center text-xs text-white/50">{t('copyright')}</p>
        </div>
      </div>
    </footer>
  );
}
