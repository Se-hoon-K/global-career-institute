import { Link } from '@/i18n/navigation';
import { Job } from '@/lib/data/jobs';

const employmentTypeLabels: Record<Job['employmentType'], { en: string; ko: string }> = {
  'full-time': { en: 'Full-time', ko: '정규직' },
  'contract': { en: 'Contract', ko: '계약직' },
  'part-time': { en: 'Part-time', ko: '파트타임' },
};

export default function JobCard({ job, locale }: { job: Job; locale: string }) {
  const isKo = locale === 'ko';
  const title = isKo ? job.titleKo : job.title;
  const location = isKo ? job.locationKo : job.location;
  const industry = isKo ? job.industryKo : job.industry;
  const typeLabel = employmentTypeLabels[job.employmentType][isKo ? 'ko' : 'en'];

  return (
    <div className="flex flex-col h-full p-6 rounded-2xl bg-cream border border-navy/10 hover:border-gold/50 transition-colors duration-300">
      {/* Icon + Title */}
      <div className="flex items-start gap-3 mb-4">
        <div className="shrink-0 w-10 h-10 rounded-xl bg-navy flex items-center justify-center text-gold">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
            <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
          </svg>
        </div>
        <h3 className="font-bold text-navy text-base leading-snug">{title}</h3>
      </div>

      {/* Company */}
      <p className="text-navy/70 font-medium text-sm mb-1">{job.company}</p>

      {/* Location */}
      <div className="flex items-center gap-1.5 text-navy/50 text-sm mb-3">
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
          <circle cx="12" cy="10" r="3" />
        </svg>
        <span>{location}</span>
      </div>

      {/* Industry */}
      <p className="text-navy/40 text-xs mb-4">{industry}</p>

      {/* Employment type badge */}
      <div className="mb-5">
        <span className="inline-flex items-center px-3 py-1 rounded-full bg-gold text-navy text-xs font-semibold">
          {typeLabel}
        </span>
      </div>

      {/* Spacer pushes button to bottom */}
      <div className="mt-auto">
        <Link
          href={`/contact?type=candidate&job=${job.id}`}
          className="flex items-center justify-center w-full bg-navy text-white text-sm font-semibold px-5 py-3 rounded-lg hover:bg-gold hover:text-navy transition-colors duration-300"
        >
          {isKo ? '지원하기' : 'Apply Now'}
        </Link>
      </div>
    </div>
  );
}
