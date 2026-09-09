import { useTranslations } from 'next-intl';
import { CLIENT_EXPERIENCES } from '@/lib/data/site-content';

export default function ClientExperienceSection() {
  const t = useTranslations('homeRedesign.clients');

  return (
    <section className="border-b border-navy/10 bg-white" aria-labelledby="client-experience-title">
      <div className="container-max grid gap-10 py-14 lg:grid-cols-12 lg:items-start lg:py-16">
        <div className="lg:col-span-4">
          <h2 id="client-experience-title" className="text-xl font-bold tracking-[-0.02em] text-navy">
            {t('title')}
          </h2>
          <p className="mt-3 max-w-sm text-sm leading-7 text-ink/70">{t('description')}</p>
        </div>
        <ul className="grid grid-cols-2 border-l border-t border-navy/10 sm:grid-cols-3 lg:col-span-8">
          {CLIENT_EXPERIENCES.map((client) => (
            <li key={client.displayName} className="flex min-h-16 items-center border-b border-r border-navy/10 px-4 py-3 text-sm font-semibold text-navy">
              {client.displayName}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
