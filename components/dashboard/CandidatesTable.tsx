'use client';

import { Candidate, CandidateStatus } from '@/lib/data/candidates';

interface CandidatesTableProps {
  candidates: Candidate[];
}

const statusStyles: Record<CandidateStatus, string> = {
  sourced: 'bg-gray-100 text-gray-700',
  contacted: 'bg-sky-100 text-sky-700',
  screening: 'bg-blue-100 text-blue-700',
  interviewing: 'bg-amber-100 text-amber-700',
  offer: 'bg-violet-100 text-violet-700',
  placed: 'bg-green-100 text-green-700',
};

const statusLabels: Record<CandidateStatus, string> = {
  sourced: 'Sourced',
  contacted: 'Contacted',
  screening: 'Screening',
  interviewing: 'Interviewing',
  offer: 'Offer',
  placed: 'Placed',
};

function formatDate(dateString: string): string {
  return new Date(dateString).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });
}

export default function CandidatesTable({ candidates }: CandidatesTableProps) {
  return (
    <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
      <h2 className="text-lg font-bold text-navy px-6 py-5 border-b border-gray-100">
        Candidate Pipeline
      </h2>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="bg-gray-50">
              <th className="text-left px-6 py-3 text-xs font-semibold text-navy/50 uppercase tracking-wider">
                Candidate
              </th>
              <th className="text-left px-6 py-3 text-xs font-semibold text-navy/50 uppercase tracking-wider">
                Current Role
              </th>
              <th className="text-left px-6 py-3 text-xs font-semibold text-navy/50 uppercase tracking-wider">
                Industry
              </th>
              <th className="text-left px-6 py-3 text-xs font-semibold text-navy/50 uppercase tracking-wider">
                Status
              </th>
              <th className="text-left px-6 py-3 text-xs font-semibold text-navy/50 uppercase tracking-wider">
                Applied
              </th>
              <th className="text-left px-6 py-3 text-xs font-semibold text-navy/50 uppercase tracking-wider">
                Linked Job
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-50">
            {candidates.map((candidate) => (
              <tr key={candidate.id} className="hover:bg-gray-50/50 transition-colors">
                <td className="px-6 py-4">
                  <span className="text-sm font-medium text-navy truncate max-w-[200px] block">
                    {candidate.name}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <span className="text-sm text-navy/70 truncate max-w-[200px] block">
                    {candidate.currentRole}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <span className="text-sm text-navy/70">{candidate.industry}</span>
                </td>
                <td className="px-6 py-4">
                  <span
                    className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${statusStyles[candidate.status]}`}
                  >
                    {statusLabels[candidate.status]}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <span className="text-sm text-navy/70">{formatDate(candidate.appliedDate)}</span>
                </td>
                <td className="px-6 py-4">
                  <span className="text-sm text-navy/70 font-mono">
                    {candidate.jobId || '—'}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
