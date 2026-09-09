'use client';

import { useEffect, useState } from 'react';
import { useLocale, useTranslations } from 'next-intl';
import { Link, usePathname, useRouter } from '@/i18n/navigation';

export default function Header() {
  const t = useTranslations('nav');
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMobileOpen(false);
  }, [pathname]);

  const navLinks = [
    { href: '/corporate', label: t('corporate') },
    { href: '/#expertise', label: t('expertise') },
    { href: '/#process', label: t('process') },
    { href: '/about', label: t('about') },
    { href: '/candidate', label: t('candidate') },
  ];

  const switchLocale = (newLocale: string) => {
    router.replace(pathname, { locale: newLocale });
  };

  const isActive = (href: string) => {
    const route = href.split('#')[0];
    if (route === '/') return pathname === '/';
    return pathname.startsWith(route);
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-navy">
      <div className="container-max">
        <div className="flex h-16 items-center justify-between md:h-[72px]">
          <Link href="/" className="flex items-center gap-3" aria-label="Global Career Institute home">
            <div className="flex h-8 w-9 shrink-0 items-center justify-center rounded-[4px] bg-gold">
              <span className="text-[11px] font-extrabold leading-none text-navy">GCI</span>
            </div>
            <span className="hidden text-sm font-semibold tracking-[-0.01em] text-white sm:block">
              Global Career Institute
            </span>
          </Link>

          <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary navigation">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-[13px] font-medium transition-colors ${
                  isActive(link.href) ? 'text-gold-light' : 'text-white/70 hover:text-white'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <div className="flex items-center text-xs font-semibold" aria-label="Language selector">
              <button
                type="button"
                onClick={() => switchLocale('ko')}
                aria-pressed={locale === 'ko'}
                className={`px-2 py-1 transition-colors ${
                  locale === 'ko' ? 'text-gold-light' : 'text-white/50 hover:text-white'
                }`}
              >
                KO
              </button>
              <span className="text-white/25">|</span>
              <button
                type="button"
                onClick={() => switchLocale('en')}
                aria-pressed={locale === 'en'}
                className={`px-2 py-1 transition-colors ${
                  locale === 'en' ? 'text-gold-light' : 'text-white/50 hover:text-white'
                }`}
              >
                EN
              </button>
            </div>

            <Link href="/contact" className="hidden rounded-md bg-gold px-4 py-2.5 text-xs font-semibold text-navy transition-colors hover:bg-gold-light md:inline-flex">
              {t('consultation')}
            </Link>

            <button
              type="button"
              className="p-2 text-white lg:hidden"
              onClick={() => setMobileOpen((open) => !open)}
              aria-label={mobileOpen ? t('closeMenu') : t('openMenu')}
              aria-expanded={mobileOpen}
              aria-controls="mobile-navigation"
            >
              {mobileOpen ? (
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
                  <path d="M18 6L6 18M6 6l12 12" />
                </svg>
              ) : (
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
                  <path d="M3 12h18M3 6h18M3 18h18" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {mobileOpen && (
        <div className="border-t border-white/10 bg-navy lg:hidden">
          <nav id="mobile-navigation" className="container-max flex flex-col py-4" aria-label="Mobile navigation">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`border-b border-white/10 px-1 py-3.5 text-sm font-medium transition-colors ${
                  isActive(link.href) ? 'text-gold-light' : 'text-white/70 hover:text-white'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link href="/contact" className="mt-4 flex justify-center rounded-md bg-gold px-5 py-3.5 text-sm font-semibold text-navy">
              {t('consultation')}
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
