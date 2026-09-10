import assert from 'node:assert/strict';
import test from 'node:test';
import { readFile } from 'node:fs/promises';

import { MOCK_CANDIDATES } from '../lib/data/candidates.ts';
import { MOCK_JOBS } from '../lib/data/jobs.ts';
import {
  PIPELINE_STAGES,
  buildPipeline,
  getDashboardMetrics,
} from '../lib/data/dashboard.ts';

test('defines the approved recruitment CRM pipeline in order', () => {
  assert.deepEqual(
    PIPELINE_STAGES.map((stage) => stage.id),
    ['sourced', 'contacted', 'screening', 'interviewing', 'offer', 'placed'],
  );
});

test('places every demo candidate in exactly one pipeline stage', () => {
  const pipeline = buildPipeline(MOCK_CANDIDATES);
  const pipelineCandidates = pipeline.flatMap((stage) => stage.candidates);

  assert.equal(pipelineCandidates.length, MOCK_CANDIDATES.length);
  assert.equal(new Set(pipelineCandidates.map((candidate) => candidate.id)).size, MOCK_CANDIDATES.length);
});

test('derives dashboard metrics from the demo records', () => {
  const metrics = getDashboardMetrics(MOCK_JOBS, MOCK_CANDIDATES);

  assert.equal(metrics.activeSearches, MOCK_JOBS.filter((job) => job.status === 'active').length);
  assert.equal(metrics.pipelineCandidates, MOCK_CANDIDATES.length);
  assert.equal(
    metrics.lateStageCandidates,
    MOCK_CANDIDATES.filter((candidate) => ['interviewing', 'offer'].includes(candidate.status)).length,
  );
  assert.equal(metrics.placements, MOCK_CANDIDATES.filter((candidate) => candidate.status === 'placed').length);
});

test('renders the dashboard as a public, clearly labelled demo', async () => {
  const page = await readFile(new URL('../app/dashboard/page.tsx', import.meta.url), 'utf8');
  const header = await readFile(new URL('../components/layout/Header.tsx', import.meta.url), 'utf8');

  assert.doesNotMatch(page, /localStorage|DASHBOARD_PASSWORD|type="password"/);
  assert.match(page, /Portfolio demo/);
  assert.match(page, /Sample data/);
  assert.match(page, /PipelineBoard/);
  assert.match(header, /href="\/dashboard"/);
});
