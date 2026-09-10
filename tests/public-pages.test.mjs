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

test('active inquiry forms expose explicit label bindings and avoid watch-based reads', async () => {
  const [company, candidate] = await Promise.all([
    source('components/contact/CompanyForm.tsx'),
    source('components/contact/CandidateForm.tsx'),
  ]);

  for (const field of ['name', 'email', 'phone', 'message']) {
    assert.match(company, new RegExp(`htmlFor="company-${field}"`));
    assert.match(company, new RegExp(`id="company-${field}"`));
    assert.match(candidate, new RegExp(`htmlFor="candidate-${field}"`));
    assert.match(candidate, new RegExp(`id="candidate-${field}"`));
  }
  assert.doesNotMatch(candidate, /\bwatch\b/);
});

test('candidate opportunity links open the candidate inquiry form', async () => {
  const section = await source('components/contact/ContactFormSection.tsx');

  assert.match(section, /useSearchParams/);
  assert.match(section, /get\('type'\) === 'candidate'/);
});
