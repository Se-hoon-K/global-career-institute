import type { Candidate } from '@/lib/data/candidates';
import type { Job, JobStatus } from '@/lib/data/jobs';

interface SearchPortfolioProps {
  jobs: readonly Job[];
  candidates: readonly Candidate[];
}

const statusLabel: Record<JobStatus, string> = {
  active: 'Active',
  filled: 'Filled',
  on_hold: 'On hold',
};

const statusStyle: Record<JobStatus, string> = {
  active: 'text-emerald-800 bg-emerald-50',
  filled: 'text-ink/60 bg-navy/5',
  on_hold: 'text-amber-800 bg-amber-50',
};

export default function SearchPortfolio({ jobs, candidates }: SearchPortfolioProps) {
  const activeJobs = jobs.filter((job) => job.status === 'active');
  const counts = candidates.reduce((accumulator, candidate) => {
    if (candidate.jobId) accumulator.set(candidate.jobId, (accumulator.get(candidate.jobId) ?? 0) + 1);
    return accumulator;
  }, new Map<string, number>());

  return (
    <section id="searches" className="border border-navy/10 bg-white" aria-labelledby="search-portfolio-title">
      <div className="flex items-end justify-between gap-4 border-b border-navy/10 px-5 py-5 md:px-6">
        <div>
          <p className="text-xs font-semibold text-gold-dark">Search portfolio</p>
          <h2 id="search-portfolio-title" className="mt-1 text-lg font-bold text-navy">Active mandates</h2>
        </div>
        <span className="text-xs text-ink/50">Sample records</span>
      </div>

      <ul>
        {activeJobs.map((job) => (
          <li key={job.id} className="grid gap-3 border-b border-navy/10 px-5 py-4 last:border-b-0 sm:grid-cols-[1fr_auto] sm:items-center md:px-6">
            <div className="min-w-0">
              <p className="truncate text-sm font-semibold text-navy">{job.title}</p>
              <p className="mt-1 truncate text-xs text-ink/55">{job.company} · {job.location}</p>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-xs text-ink/55">
                {counts.get(job.id) ?? 0} {(counts.get(job.id) ?? 0) === 1 ? 'candidate' : 'candidates'}
              </span>
              <span className={`px-2 py-1 text-[0.68rem] font-semibold ${statusStyle[job.status]}`}>{statusLabel[job.status]}</span>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
