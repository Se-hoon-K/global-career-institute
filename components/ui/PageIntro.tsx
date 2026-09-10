import type { ReactNode } from 'react';

interface PageIntroProps {
  sectionLabel?: string;
  title: string;
  summary: string;
  theme?: 'dark' | 'light';
  aside?: ReactNode;
}

export default function PageIntro({
  sectionLabel,
  title,
  summary,
  theme = 'dark',
  aside,
}: PageIntroProps) {
  const dark = theme === 'dark';

  return (
    <section className={dark ? 'bg-navy text-white' : 'bg-cream text-navy'}>
      <div className="container-max grid gap-12 pb-20 pt-36 lg:grid-cols-12 lg:items-end lg:pb-24">
        <div className={aside ? 'lg:col-span-7' : 'lg:col-span-8'}>
          {sectionLabel && (
            <p className={`mb-5 text-sm font-semibold ${dark ? 'text-gold-light' : 'text-gold-dark'}`}>
              {sectionLabel}
            </p>
          )}
          <h1 className="max-w-4xl text-balance text-4xl font-bold leading-[1.16] tracking-[-0.035em] md:text-6xl">
            {title}
          </h1>
        </div>
        <div className={aside ? 'lg:col-span-5' : 'lg:col-span-4'}>
          <p className={`max-w-xl text-base leading-8 ${dark ? 'text-white/70' : 'text-ink/75'}`}>
            {summary}
          </p>
          {aside}
        </div>
      </div>
    </section>
  );
}
