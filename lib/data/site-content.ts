export type SupportedLocale = 'ko' | 'en';

export interface LocalizedText {
  ko: string;
  en: string;
}

export interface SearchBriefData {
  id: string;
  role: LocalizedText;
  sector: LocalizedText;
  scope: LocalizedText;
  status: LocalizedText;
  isSample: boolean;
}

export interface ClientExperience {
  displayName: string;
  category: 'research' | 'luxury' | 'industrial';
}

export const SEARCH_BRIEF: SearchBriefData = {
  id: 'GCI-024',
  role: {
    ko: 'APAC Commercial Director',
    en: 'APAC Commercial Director',
  },
  sector: {
    ko: '럭셔리 · 리테일',
    en: 'Luxury & Retail',
  },
  scope: {
    ko: '서울 · 도쿄 · 싱가포르',
    en: 'Seoul, Tokyo, Singapore',
  },
  status: {
    ko: '시장 맵핑 중',
    en: 'Market mapping',
  },
  isSample: true,
};

export const CLIENT_EXPERIENCES: ClientExperience[] = [
  { displayName: 'Samsung Global Research', category: 'research' },
  { displayName: 'Louis Vuitton Korea', category: 'luxury' },
  { displayName: 'LVMH', category: 'luxury' },
  { displayName: 'Gucci', category: 'luxury' },
  { displayName: 'Chanel', category: 'luxury' },
  { displayName: 'Jimmy Choo', category: 'luxury' },
  { displayName: '두원중공업', category: 'industrial' },
  { displayName: '링세오코리아', category: 'industrial' },
  { displayName: 'Ecolab Korea', category: 'industrial' },
];

export function localize(value: LocalizedText, locale: string): string {
  return locale === 'ko' ? value.ko : value.en;
}

export function selectFeaturedJobs<
  T extends { status: string; featured: boolean; postedDate: string },
>(jobs: readonly T[], limit = 3): T[] {
  return jobs
    .filter((job) => job.status === 'active')
    .toSorted((a, b) => {
      if (a.featured !== b.featured) return a.featured ? -1 : 1;
      return b.postedDate.localeCompare(a.postedDate);
    })
    .slice(0, limit);
}
