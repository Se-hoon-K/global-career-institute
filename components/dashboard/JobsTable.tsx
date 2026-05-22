'use client';

import { Job, JobStatus } from '@/lib/data/jobs';

interface JobsTableProps {
  jobs: Job[];
}

const statusStyles: Record<JobStatus, string> = {
  active: 'bg-green-100 text-green-700',
  filled: 'bg-gray-100 text-gray-600',
  on_hold: 'bg-yellow-100 text-yellow-700',
};

const statusLabels: Record<JobStatus, string> = {
  active: 'Active',
  filled: 'Filled',
  on_hold: 'On Hold',
};

function formatEmploymentType(type: string): string {
  return type
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join('-');
}

function formatDate(dateString: string): string {
  return new Date(dateString).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });
}

export default function JobsTable({ jobs }: JobsTableProps) {
  return (
    <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
      <h2 className="text-lg font-bold text-navy px-6 py-5 border-b border-gray-100">
        Job Openings
      </h2>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="bg-gray-50">
              <th className="text-left px-6 py-3 text-xs font-semibold text-navy/50 uppercase tracking-wider">
                Position
              </th>
              <th className="text-left px-6 py-3 text-xs font-semibold text-navy/50 uppercase tracking-wider">
                Company
              </th>
              <th className="text-left px-6 py-3 text-xs font-semibold text-navy/50 uppercase tracking-wider">
                Location
              </th>
              <th className="text-left px-6 py-3 text-xs font-semibold text-navy/50 uppercase tracking-wider">
                Type
              </th>
              <th className="text-left px-6 py-3 text-xs font-semibold text-navy/50 uppercase tracking-wider">
                Status
              </th>
              <th className="text-left px-6 py-3 text-xs font-semibold text-navy/50 uppercase tracking-wider">
                Posted
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-50">
            {jobs.map((job) => (
              <tr key={job.id} className="hover:bg-gray-50/50 transition-colors">
                <td className="px-6 py-4">
                  <span className="text-sm font-medium text-navy truncate max-w-[200px] block">
                    {job.title}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <span className="text-sm text-navy/70">{job.company}</span>
                </td>
                <td className="px-6 py-4">
                  <span className="text-sm text-navy/70">{job.location}</span>
                </td>
                <td className="px-6 py-4">
                  <span className="text-sm text-navy/70">
                    {formatEmploymentType(job.employmentType)}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <span
                    className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${statusStyles[job.status]}`}
                  >
                    {statusLabels[job.status]}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <span className="text-sm text-navy/70">{formatDate(job.postedDate)}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
