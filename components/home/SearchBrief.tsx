import { SearchBriefData, localize } from '@/lib/data/site-content';

interface SearchBriefLabels {
  title: string;
  sample: string;
  reference: string;
  role: string;
  sector: string;
  scope: string;
  status: string;
}

export default function SearchBrief({
  data,
  locale,
  labels,
}: {
  data: SearchBriefData;
  locale: string;
  labels: SearchBriefLabels;
}) {
  const fields = [
    { label: labels.role, value: localize(data.role, locale) },
    { label: labels.sector, value: localize(data.sector, locale) },
    { label: labels.scope, value: localize(data.scope, locale) },
  ];

  return (
    <aside className="search-brief-enter relative border border-navy/15 bg-cream p-7 text-navy shadow-[12px_16px_0_rgba(7,19,29,0.22)] md:p-9" aria-label={labels.title}>
      <div className="flex items-start justify-between gap-6 border-b border-navy/15 pb-6">
        <div>
          <p className="text-sm font-semibold">{labels.title}</p>
          <p className="mt-1 text-xs text-ink/65">Global Career Institute</p>
        </div>
        {data.isSample && (
          <span className="rounded-sm border border-gold-dark/30 bg-gold/10 px-2.5 py-1 text-xs font-semibold text-gold-dark">
            {labels.sample}
          </span>
        )}
      </div>

      <dl>
        <div className="grid grid-cols-[7rem_1fr] border-b border-navy/15 py-5 text-sm">
          <dt className="text-ink/60">{labels.reference}</dt>
          <dd className="font-semibold">{data.id}</dd>
        </div>
        {fields.map((field) => (
          <div key={field.label} className="grid gap-1 border-b border-navy/10 py-5 sm:grid-cols-[7rem_1fr] sm:gap-0">
            <dt className="text-xs font-medium text-ink/60">{field.label}</dt>
            <dd className="text-sm font-semibold">{field.value}</dd>
          </div>
        ))}
      </dl>

      <div className="flex items-center justify-between gap-4 pt-6">
        <span className="text-xs font-medium text-ink/60">{labels.status}</span>
        <span className="flex items-center gap-2 text-sm font-semibold">
          <span className="h-2 w-2 rounded-full bg-gold" aria-hidden="true" />
          {localize(data.status, locale)}
        </span>
      </div>
    </aside>
  );
}
