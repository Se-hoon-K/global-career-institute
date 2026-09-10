import assert from 'node:assert/strict';
import test from 'node:test';
import { readFile } from 'node:fs/promises';

async function source(path) {
  return readFile(new URL(`../${path}`, import.meta.url), 'utf8');
}

test('candidate page leads with open roles and removes the generic service grid', async () => {
  const page = await source('app/[locale]/candidate/page.tsx');

  assert.match(page, /PageIntro/);
  assert.ok(page.indexOf('<JobOpeningsSection') < page.indexOf('<CandidateProcessSection'));
  assert.doesNotMatch(page, /ServicesSection|PageHero|CTASection/);
});

test('corporate page centers project experience and the detailed search process', async () => {
  const page = await source('app/[locale]/corporate/page.tsx');

  assert.match(page, /PageIntro/);
  assert.match(page, /ClientExperienceSection/);
  assert.match(page, /CorporateProcessSection/);
  assert.doesNotMatch(page, /CandidateShowcaseSection|ServicesSection|PageHero|CTASection/);
});

test('about and contact pages use the shared editorial page introduction', async () => {
  const [about, contact] = await Promise.all([
    source('app/[locale]/about/page.tsx'),
    source('app/[locale]/contact/page.tsx'),
  ]);

  assert.match(about, /PageIntro/);
  assert.doesNotMatch(about, /Photo placeholder|>Photo</);
  assert.match(contact, /PageIntro/);
});
