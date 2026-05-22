interface StatsPanelProps {
  activeJobs: number;
  totalCandidates: number;
  placedThisMonth: number;
  clientSatisfaction: string;
}

export default function StatsPanel({
  activeJobs,
  totalCandidates,
  placedThisMonth,
  clientSatisfaction,
}: StatsPanelProps) {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
      {/* Active Jobs */}
      <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm relative">
        <div className="absolute top-4 right-4 text-navy/20">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.073a2.25 2.25 0 01-2.25 2.25h-12a2.25 2.25 0 01-2.25-2.25v-4.073M15.75 9.75V6a3.75 3.75 0 00-7.5 0v3.75M3.75 14.25h16.5" />
          </svg>
        </div>
        <p className="text-3xl font-bold text-gold">{activeJobs}</p>
        <p className="text-sm text-navy/60 mt-1">Active Jobs</p>
      </div>

      {/* Total Candidates */}
      <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm relative">
        <div className="absolute top-4 right-4 text-navy/20">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
          </svg>
        </div>
        <p className="text-3xl font-bold text-gold">{totalCandidates}</p>
        <p className="text-sm text-navy/60 mt-1">Total Candidates</p>
      </div>

      {/* Placed This Month */}
      <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm relative">
        <div className="absolute top-4 right-4 text-navy/20">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <p className="text-3xl font-bold text-gold">{placedThisMonth}</p>
        <p className="text-sm text-navy/60 mt-1">Placed This Month</p>
      </div>

      {/* Client Satisfaction */}
      <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm relative">
        <div className="absolute top-4 right-4 text-navy/20">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
          </svg>
        </div>
        <p className="text-3xl font-bold text-gold">{clientSatisfaction}</p>
        <p className="text-sm text-navy/60 mt-1">Client Satisfaction</p>
      </div>
    </div>
  );
}
