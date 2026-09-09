import assert from 'node:assert/strict';
import test from 'node:test';
import { readFile } from 'node:fs/promises';

import {
  CLIENT_EXPERIENCES,
  SEARCH_BRIEF,
  localize,
  selectFeaturedJobs,
} from '../lib/data/site-content.ts';

test('publishes the approved client experience names without logo data', () => {
  assert.deepEqual(
    CLIENT_EXPERIENCES.map((client) => client.displayName),
    [
      'Samsung Global Research',
      'Louis Vuitton Korea',
      'LVMH',
      'Gucci',
      'Chanel',
      'Jimmy Choo',
      '두원중공업',
      '링세오코리아',
      'Ecolab Korea',
    ],
  );
  assert.equal(CLIENT_EXPERIENCES.some((client) => 'logo' in client), false);
});

test('marks the search brief as sample content and localizes its fields', () => {
  assert.equal(SEARCH_BRIEF.isSample, true);
  assert.equal(localize(SEARCH_BRIEF.role, 'ko'), 'APAC Commercial Director');
  assert.equal(localize(SEARCH_BRIEF.scope, 'en'), 'Seoul, Tokyo, Singapore');
});

test('selects at most three active jobs with featured roles first', () => {
  const jobs = [
    { id: 'old-featured', status: 'active', featured: true, postedDate: '2026-01-01' },
    { id: 'new-standard', status: 'active', featured: false, postedDate: '2026-05-03' },
    { id: 'new-featured', status: 'active', featured: true, postedDate: '2026-05-02' },
    { id: 'filled', status: 'filled', featured: true, postedDate: '2026-06-01' },
    { id: 'older-standard', status: 'active', featured: false, postedDate: '2026-04-01' },
  ];

  assert.deepEqual(
    selectFeaturedJobs(jobs, 3).map((job) => job.id),
    ['new-featured', 'old-featured', 'new-standard'],
  );
});

test('defines employer-first hero copy in both supported locales', async () => {
  for (const locale of ['ko', 'en']) {
    const messages = JSON.parse(
      await readFile(new URL(`../messages/${locale}.json`, import.meta.url), 'utf8'),
    );

    assert.equal(typeof messages.homeRedesign.hero.title, 'string');
    assert.equal(typeof messages.homeRedesign.hero.primaryCta, 'string');
    assert.equal(typeof messages.homeRedesign.brief.sample, 'string');
    assert.equal(typeof messages.homeRedesign.clients.title, 'string');
  }
});
