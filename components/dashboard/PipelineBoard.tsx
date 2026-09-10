import type { CandidateStatus } from '@/lib/data/candidates';
import type { Job } from '@/lib/data/jobs';
import type { buildPipeline } from '@/lib/data/dashboard';

interface PipelineBoardProps {
  pipeline: ReturnType<typeof buildPipeline>;
  jobs: readonly Job[];
}

const stageAccent: Record<CandidateStatus, string> = {
  sourced: 'bg-slate-400',
  contacted: 'bg-sky-600',
  screening: 'bg-indigo-600',
  interviewing: 'bg-gold',
  offer: 'bg-orange-600',
  placed: 'bg-emerald-700',
};

function formatDate(date: string) {
  return new Intl.DateTimeFormat('en', { month: 'short', day: 'numeric' }).format(new Date(date));
}

export default function PipelineBoard({ pipeline, jobs }: PipelineBoardProps) {
  const jobsById = new Map(jobs.map((job) => [job.id, job]));

  return (
    <div className="overflow-x-auto pb-4" tabIndex={0} role="region" aria-label="Candidate pipeline board">
      <div className="grid min-w-max auto-cols-[16.5rem] grid-flow-col gap-3">
        {pipeline.map((stage) => (
          <section key={stage.id} className="w-[16.5rem] bg-[#e6eae8]" aria-labelledby={`pipeline-${stage.id}`}>
            <div className="border-t-2 border-navy bg-white px-4 py-4">
              <div className="flex items-center justify-between gap-3">
                <h3 id={`pipeline-${stage.id}`} className="flex items-center gap-2 text-sm font-bold text-navy">
                  <span className={`h-2 w-2 rounded-full ${stageAccent[stage.id]}`} aria-hidden="true" />
                  {stage.label}
                </h3>
                <span className="font-mono text-xs text-ink/55">{stage.candidates.length}</span>
              </div>
              <p className="mt-1 text-xs text-ink/55">{stage.description}</p>
            </div>

            <ul className="space-y-2 p-2.5">
              {stage.candidates.map((candidate) => {
                const job = candidate.jobId ? jobsById.get(candidate.jobId) : undefined;

                return (
                  <li key={candidate.id} className="border border-navy/10 bg-white p-4 shadow-[0_1px_0_rgba(11,30,45,0.05)]">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <p className="text-sm font-bold text-navy">{candidate.name}</p>
                        <p className="mt-1 text-xs leading-5 text-ink/65">{candidate.currentRole}</p>
                      </div>
                      <span className="flex h-7 w-7 shrink-0 items-center justify-center bg-navy text-[0.65rem] font-bold text-gold-light">
                        {candidate.name.replace('Candidate ', 'C')}
                      </span>
                    </div>

                    <div className="mt-4 border-t border-navy/10 pt-3">
                      <p className="truncate text-xs font-semibold text-navy">{job?.title ?? 'General pipeline'}</p>
                      <p className="mt-1 text-[0.7rem] text-ink/50">
                        {candidate.experience} · {candidate.source}
                      </p>
                    </div>

                    <div className="mt-4 flex items-center justify-between text-[0.7rem] text-ink/50">
                      <span>{candidate.owner}</span>
                      <time dateTime={candidate.lastActivity}>{formatDate(candidate.lastActivity)}</time>
                    </div>
                  </li>
                );
              })}
            </ul>
          </section>
        ))}
      </div>
    </div>
  );
}
