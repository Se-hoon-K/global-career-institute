import type { Candidate, CandidateStatus } from '@/lib/data/candidates';

const activityLabel: Record<CandidateStatus, string> = {
  sourced: 'Added to talent pool',
  contacted: 'Outreach recorded',
  screening: 'Moved to screening',
  interviewing: 'Interview scheduled',
  offer: 'Offer discussion updated',
  placed: 'Placement completed',
};

function formatDate(date: string) {
  return new Intl.DateTimeFormat('en', { month: 'short', day: 'numeric' }).format(new Date(date));
}

export default function RecentActivity({ candidates }: { candidates: readonly Candidate[] }) {
  const recent = candidates.toSorted((a, b) => b.lastActivity.localeCompare(a.lastActivity)).slice(0, 6);

  return (
    <section id="activity" className="border border-navy/10 bg-white" aria-labelledby="recent-activity-title">
      <div className="border-b border-navy/10 px-5 py-5 md:px-6">
        <p className="text-xs font-semibold text-gold-dark">Activity</p>
        <h2 id="recent-activity-title" className="mt-1 text-lg font-bold text-navy">Recent movement</h2>
      </div>
      <ol className="px-5 md:px-6">
        {recent.map((candidate) => (
          <li key={candidate.id} className="grid grid-cols-[0.5rem_1fr_auto] gap-3 border-b border-navy/10 py-4 last:border-b-0">
            <span className="mt-1.5 h-2 w-2 rounded-full bg-gold" aria-hidden="true" />
            <div>
              <p className="text-sm font-semibold text-navy">{candidate.name}</p>
              <p className="mt-1 text-xs text-ink/55">{activityLabel[candidate.status]}</p>
            </div>
            <time dateTime={candidate.lastActivity} className="text-xs text-ink/45">{formatDate(candidate.lastActivity)}</time>
          </li>
        ))}
      </ol>
    </section>
  );
}
