interface DashboardMetricsProps {
  activeSearches: number;
  pipelineCandidates: number;
  lateStageCandidates: number;
  placements: number;
}

export default function DashboardMetrics({
  activeSearches,
  pipelineCandidates,
  lateStageCandidates,
  placements,
}: DashboardMetricsProps) {
  const metrics = [
    { value: activeSearches, label: 'Active searches', detail: 'Open client mandates' },
    { value: pipelineCandidates, label: 'In the CRM', detail: 'Across all six stages' },
    { value: lateStageCandidates, label: 'Late stage', detail: 'Interview and offer' },
    { value: placements, label: 'Placed', detail: 'Completed sample records' },
  ];

  return (
    <dl className="grid border-y border-navy/15 bg-white sm:grid-cols-2 xl:grid-cols-4">
      {metrics.map((metric) => (
        <div key={metric.label} className="flex flex-col border-b border-navy/10 p-5 last:border-b-0 sm:odd:border-r xl:border-r xl:border-b-0 xl:last:border-r-0 md:p-6">
          <dt className="order-2 mt-3 text-sm font-semibold text-navy">{metric.label}</dt>
          <dd className="order-1 text-3xl font-bold tracking-[-0.04em] text-navy">{metric.value}</dd>
          <dd className="order-3 mt-1 text-xs text-ink/55">{metric.detail}</dd>
        </div>
      ))}
    </dl>
  );
}
