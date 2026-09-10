import type { Candidate, CandidateStatus } from './candidates.ts';
import type { Job } from './jobs.ts';

export interface PipelineStageDefinition {
  id: CandidateStatus;
  label: string;
  description: string;
}

export const PIPELINE_STAGES: readonly PipelineStageDefinition[] = [
  { id: 'sourced', label: 'Sourced', description: 'Identified for outreach' },
  { id: 'contacted', label: 'Contacted', description: 'Initial conversation' },
  { id: 'screening', label: 'Screening', description: 'Fit and motivation review' },
  { id: 'interviewing', label: 'Interview', description: 'Client interview process' },
  { id: 'offer', label: 'Offer', description: 'Terms and close' },
  { id: 'placed', label: 'Placed', description: 'Joined successfully' },
] as const;

export function buildPipeline(candidates: readonly Candidate[]) {
  return PIPELINE_STAGES.map((stage) => ({
    ...stage,
    candidates: candidates
      .filter((candidate) => candidate.status === stage.id)
      .toSorted((a, b) => b.lastActivity.localeCompare(a.lastActivity)),
  }));
}

export function getDashboardMetrics(jobs: readonly Job[], candidates: readonly Candidate[]) {
  return {
    activeSearches: jobs.filter((job) => job.status === 'active').length,
    pipelineCandidates: candidates.length,
    lateStageCandidates: candidates.filter((candidate) =>
      candidate.status === 'interviewing' || candidate.status === 'offer'
    ).length,
    placements: candidates.filter((candidate) => candidate.status === 'placed').length,
  };
}
