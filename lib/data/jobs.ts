export type JobStatus = 'active' | 'filled' | 'on_hold';
export type EmploymentType = 'full-time' | 'contract' | 'part-time';

export interface Job {
  id: string;
  title: string;
  titleKo: string;
  company: string;
  location: string;
  locationKo: string;
  employmentType: EmploymentType;
  industry: string;
  industryKo: string;
  description: string;
  descriptionKo: string;
  postedDate: string;
  status: JobStatus;
  featured: boolean;
}

export const MOCK_JOBS: Job[] = [
  {
    id: 'job-001',
    title: 'Senior Software Engineer',
    titleKo: '시니어 소프트웨어 엔지니어',
    company: 'Kakao',
    location: 'Seoul, South Korea',
    locationKo: '대한민국 서울',
    employmentType: 'full-time',
    industry: 'Information Technology',
    industryKo: '정보기술',
    description:
      'Lead the design and development of large-scale distributed systems powering Kakao\'s core messaging and commerce platforms. Collaborate with cross-functional teams to deliver high-quality, scalable solutions.',
    descriptionKo:
      '카카오의 핵심 메시징 및 커머스 플랫폼을 지원하는 대규모 분산 시스템의 설계 및 개발을 주도합니다. 부서 간 팀과 협력하여 고품질의 확장 가능한 솔루션을 제공합니다.',
    postedDate: '2026-05-01',
    status: 'active',
    featured: true,
  },
  {
    id: 'job-002',
    title: 'Financial Analyst',
    titleKo: '재무 분석가',
    company: 'Samsung Electronics',
    location: 'Suwon, South Korea',
    locationKo: '대한민국 수원',
    employmentType: 'full-time',
    industry: 'Finance',
    industryKo: '금융',
    description:
      'Prepare and analyze financial reports, forecasts, and budgets for Samsung\'s global semiconductor division. Provide strategic recommendations to senior leadership based on market and performance data.',
    descriptionKo:
      '삼성 반도체 글로벌 부문의 재무 보고서, 예측 및 예산을 작성하고 분석합니다. 시장 및 성과 데이터를 기반으로 경영진에게 전략적 권고안을 제공합니다.',
    postedDate: '2026-04-20',
    status: 'active',
    featured: true,
  },
  {
    id: 'job-003',
    title: 'Semiconductor Process Engineer',
    titleKo: '반도체 공정 엔지니어',
    company: 'SK Hynix',
    location: 'Icheon, South Korea',
    locationKo: '대한민국 이천',
    employmentType: 'full-time',
    industry: 'Manufacturing',
    industryKo: '제조업',
    description:
      'Develop and optimize DRAM and NAND flash manufacturing processes to improve yield and reliability. Work closely with R&D teams to bring next-generation memory technologies to mass production.',
    descriptionKo:
      'DRAM 및 NAND 플래시 제조 공정을 개발하고 최적화하여 수율과 신뢰성을 향상시킵니다. R&D 팀과 긴밀히 협력하여 차세대 메모리 기술의 양산화를 추진합니다.',
    postedDate: '2026-05-05',
    status: 'active',
    featured: false,
  },
  {
    id: 'job-004',
    title: 'Clinical Research Associate',
    titleKo: '임상 연구원',
    company: 'Samsung Biologics',
    location: 'Incheon, South Korea',
    locationKo: '대한민국 인천',
    employmentType: 'full-time',
    industry: 'Bio / Healthcare',
    industryKo: '바이오 / 헬스케어',
    description:
      'Monitor and coordinate clinical trials for biopharmaceutical products in compliance with ICH-GCP guidelines. Serve as the primary liaison between the sponsor and investigational sites.',
    descriptionKo:
      'ICH-GCP 가이드라인에 따라 바이오의약품 임상시험을 모니터링하고 조율합니다. 스폰서와 임상 시험 기관 간의 주요 연락 창구 역할을 합니다.',
    postedDate: '2026-04-15',
    status: 'active',
    featured: false,
  },
  {
    id: 'job-005',
    title: 'AI/ML Research Engineer',
    titleKo: 'AI/ML 연구 엔지니어',
    company: 'Naver',
    location: 'Seongnam, South Korea',
    locationKo: '대한민국 성남',
    employmentType: 'full-time',
    industry: 'Information Technology',
    industryKo: '정보기술',
    description:
      'Research and implement state-of-the-art machine learning models for Naver\'s search, recommendation, and natural language processing pipelines. Publish findings and collaborate with global AI research communities.',
    descriptionKo:
      '네이버의 검색, 추천 및 자연어 처리 파이프라인을 위한 최신 머신러닝 모델을 연구하고 구현합니다. 연구 결과를 발표하고 글로벌 AI 연구 커뮤니티와 협력합니다.',
    postedDate: '2026-05-10',
    status: 'active',
    featured: true,
  },
  {
    id: 'job-006',
    title: 'Supply Chain Manager',
    titleKo: '공급망 관리자',
    company: 'Hyundai Motor',
    location: 'Seoul, South Korea',
    locationKo: '대한민국 서울',
    employmentType: 'full-time',
    industry: 'Manufacturing',
    industryKo: '제조업',
    description:
      'Oversee end-to-end supply chain operations for EV battery components, including supplier sourcing, logistics planning, and inventory optimization. Drive continuous improvement initiatives across global supply partners.',
    descriptionKo:
      '공급업체 소싱, 물류 계획 및 재고 최적화를 포함한 전기차 배터리 부품의 엔드투엔드 공급망 운영을 총괄합니다. 글로벌 공급 파트너 전반에 걸쳐 지속적인 개선 활동을 주도합니다.',
    postedDate: '2026-03-28',
    status: 'filled',
    featured: false,
  },
  {
    id: 'job-007',
    title: 'Frontend Developer (React)',
    titleKo: '프론트엔드 개발자 (React)',
    company: 'LG Electronics',
    location: 'Seoul, South Korea',
    locationKo: '대한민국 서울',
    employmentType: 'contract',
    industry: 'Information Technology',
    industryKo: '정보기술',
    description:
      'Build and maintain responsive web applications for LG\'s smart home platform using React and TypeScript. Collaborate with UX designers and backend engineers to deliver seamless user experiences.',
    descriptionKo:
      'React와 TypeScript를 사용하여 LG 스마트홈 플랫폼의 반응형 웹 애플리케이션을 구축하고 유지합니다. UX 디자이너 및 백엔드 엔지니어와 협력하여 원활한 사용자 경험을 제공합니다.',
    postedDate: '2026-04-30',
    status: 'on_hold',
    featured: false,
  },
  {
    id: 'job-008',
    title: 'Biomedical Research Scientist',
    titleKo: '생의학 연구 과학자',
    company: 'Celltrion',
    location: 'Incheon, South Korea',
    locationKo: '대한민국 인천',
    employmentType: 'full-time',
    industry: 'Bio / Healthcare',
    industryKo: '바이오 / 헬스케어',
    description:
      'Lead preclinical research for next-generation antibody therapies, including target identification, assay development, and in-vivo study design. Collaborate with regulatory affairs teams to support IND filings.',
    descriptionKo:
      '표적 발굴, 분석법 개발 및 생체 내 연구 설계를 포함한 차세대 항체 치료제의 비임상 연구를 주도합니다. 규제 업무 팀과 협력하여 IND 신청을 지원합니다.',
    postedDate: '2026-05-08',
    status: 'active',
    featured: false,
  },
];

export async function getJobs(status?: JobStatus): Promise<Job[]> {
  if (status !== undefined) {
    return MOCK_JOBS.filter((job) => job.status === status);
  }
  return MOCK_JOBS;
}
