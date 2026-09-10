import { MOCK_CANDIDATES } from '@/lib/data/candidates';
import { MOCK_JOBS } from '@/lib/data/jobs';
import { buildPipeline, getDashboardMetrics } from '@/lib/data/dashboard';
import DashboardMetrics from '@/components/dashboard/DashboardMetrics';
import PipelineBoard from '@/components/dashboard/PipelineBoard';
import RecentActivity from '@/components/dashboard/RecentActivity';
import SearchPortfolio from '@/components/dashboard/SearchPortfolio';

export default function DashboardPage() {
  const metrics = getDashboardMetrics(MOCK_JOBS, MOCK_CANDIDATES);
  const pipeline = buildPipeline(MOCK_CANDIDATES);

  return (
    <div className="space-y-10">
      <header id="overview" className="scroll-mt-8 border-b border-navy/15 pb-8">
        <div className="flex flex-col gap-6 xl:flex-row xl:items-end xl:justify-between">
          <div>
            <div className="flex flex-wrap items-center gap-2 text-xs font-semibold">
              <span className="border border-gold-dark/30 bg-gold/10 px-2.5 py-1 text-gold-dark">Portfolio demo</span>
              <span className="border border-navy/15 bg-white px-2.5 py-1 text-ink/60">Sample data</span>
            </div>
            <p className="mt-7 text-sm font-semibold text-gold-dark">Recruiting operations</p>
            <h1 className="mt-2 text-balance text-3xl font-bold tracking-[-0.04em] text-navy md:text-5xl">Candidate CRM</h1>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-ink/65 md:text-base">
              A read-only product demonstration of direct-search pipeline management, from first research through placement.
            </p>
          </div>
          <div className="text-sm text-ink/60 xl:text-right">
            <p className="font-semibold text-navy">APAC Search Team</p>
            <p className="mt-1">Updated September 10, 2026</p>
          </div>
        </div>
      </header>

      <DashboardMetrics {...metrics} />

      <section id="pipeline" className="scroll-mt-8" aria-labelledby="pipeline-title">
        <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-semibold text-gold-dark">Candidate pipeline</p>
            <h2 id="pipeline-title" className="mt-1 text-2xl font-bold tracking-[-0.025em] text-navy">Search progress by stage</h2>
          </div>
          <p className="text-xs text-ink/50">Scroll horizontally to review all six stages</p>
        </div>
        <PipelineBoard pipeline={pipeline} jobs={MOCK_JOBS} />
      </section>

      <div className="grid gap-5 xl:grid-cols-[1.45fr_0.75fr]">
        <SearchPortfolio jobs={MOCK_JOBS} candidates={MOCK_CANDIDATES} />
        <RecentActivity candidates={MOCK_CANDIDATES} />
      </div>

      <footer className="border-t border-navy/15 py-6 text-xs leading-6 text-ink/50">
        This dashboard is a portfolio demonstration. Names and operational records are fictional sample data.
      </footer>
    </div>
  );
}
