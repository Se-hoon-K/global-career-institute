'use client';

import { useTranslations } from 'next-intl';

interface ContactToggleProps {
  value: 'company' | 'candidate';
  onChange: (v: 'company' | 'candidate') => void;
  className?: string;
}

function BuildingIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="7" width="20" height="15" rx="1" />
      <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
      <line x1="12" y1="12" x2="12" y2="12" />
      <path d="M8 11h.01M12 11h.01M16 11h.01M8 15h.01M12 15h.01M16 15h.01" />
      <rect x="9" y="18" width="6" height="4" />
    </svg>
  );
}

function PersonIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  );
}

export default function ContactToggle({ value, onChange, className }: ContactToggleProps) {
  const t = useTranslations('contactPage.toggle');

  return (
    <div className={`flex rounded-full border border-navy/15 bg-white p-1 gap-1${className ? ` ${className}` : ''}`}>
      <button
        type="button"
        onClick={() => onChange('company')}
        className={`flex-1 py-2.5 px-6 rounded-full text-sm font-medium transition-all flex items-center justify-center gap-2 ${
          value === 'company'
            ? 'bg-navy text-white shadow-sm'
            : 'text-navy/50 hover:text-navy'
        }`}
        aria-pressed={value === 'company'}
      >
        <BuildingIcon />
        {t('company')}
      </button>
      <button
        type="button"
        onClick={() => onChange('candidate')}
        className={`flex-1 py-2.5 px-6 rounded-full text-sm font-medium transition-all flex items-center justify-center gap-2 ${
          value === 'candidate'
            ? 'bg-navy text-white shadow-sm'
            : 'text-navy/50 hover:text-navy'
        }`}
        aria-pressed={value === 'candidate'}
      >
        <PersonIcon />
        {t('candidate')}
      </button>
    </div>
  );
}
