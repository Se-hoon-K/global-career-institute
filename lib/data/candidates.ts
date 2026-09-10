export type CandidateStatus =
  | 'sourced'
  | 'contacted'
  | 'screening'
  | 'interviewing'
  | 'offer'
  | 'placed';

export type CandidateSource = 'Direct search' | 'Referral' | 'Database' | 'Inbound';

export interface Candidate {
  id: string;
  name: string;
  currentRole: string;
  currentRoleKo: string;
  industry: string;
  industryKo: string;
  experience: string;
  experienceKo: string;
  skills: string[];
  status: CandidateStatus;
  appliedDate: string;
  lastActivity: string;
  source: CandidateSource;
  owner: string;
  jobId?: string;
}

export const MOCK_CANDIDATES: Candidate[] = [
  {
    id: 'cand-001',
    name: 'Candidate A',
    currentRole: 'Senior Software Engineer',
    currentRoleKo: '시니어 소프트웨어 엔지니어',
    industry: 'Information Technology',
    industryKo: '정보기술',
    experience: '8 years',
    experienceKo: '8년',
    skills: ['Java', 'Kubernetes', 'Microservices', 'AWS', 'PostgreSQL'],
    status: 'interviewing',
    appliedDate: '2026-05-02',
    lastActivity: '2026-09-09',
    source: 'Direct search',
    owner: 'Melanie Lee',
    jobId: 'job-001',
  },
  {
    id: 'cand-002',
    name: 'Candidate B',
    currentRole: 'Financial Analyst',
    currentRoleKo: '재무 분석가',
    industry: 'Finance',
    industryKo: '금융',
    experience: '5 years',
    experienceKo: '5년',
    skills: ['Financial Modeling', 'Excel', 'SAP', 'Bloomberg Terminal', 'SQL'],
    status: 'screening',
    appliedDate: '2026-05-10',
    lastActivity: '2026-09-10',
    source: 'Referral',
    owner: 'Melanie Lee',
    jobId: 'job-002',
  },
  {
    id: 'cand-003',
    name: 'Candidate C',
    currentRole: 'Process Engineer',
    currentRoleKo: '공정 엔지니어',
    industry: 'Manufacturing',
    industryKo: '제조업',
    experience: '6 years',
    experienceKo: '6년',
    skills: ['Semiconductor Fabrication', 'Six Sigma', 'FMEA', 'SPC', 'MATLAB'],
    status: 'placed',
    appliedDate: '2026-04-18',
    lastActivity: '2026-09-05',
    source: 'Database',
    owner: 'Melanie Lee',
    jobId: 'job-003',
  },
  {
    id: 'cand-004',
    name: 'Candidate D',
    currentRole: 'Clinical Research Associate',
    currentRoleKo: '임상 연구원',
    industry: 'Bio / Healthcare',
    industryKo: '바이오 / 헬스케어',
    experience: '4 years',
    experienceKo: '4년',
    skills: ['ICH-GCP', 'Clinical Monitoring', 'EDC Systems', 'Regulatory Affairs', 'Protocol Development'],
    status: 'interviewing',
    appliedDate: '2026-04-25',
    lastActivity: '2026-09-08',
    source: 'Direct search',
    owner: 'Melanie Lee',
    jobId: 'job-004',
  },
  {
    id: 'cand-005',
    name: 'Candidate E',
    currentRole: 'Machine Learning Engineer',
    currentRoleKo: '머신러닝 엔지니어',
    industry: 'Information Technology',
    industryKo: '정보기술',
    experience: '7 years',
    experienceKo: '7년',
    skills: ['Python', 'PyTorch', 'NLP', 'MLOps', 'Docker', 'Transformers'],
    status: 'contacted',
    appliedDate: '2026-05-12',
    lastActivity: '2026-09-10',
    source: 'Inbound',
    owner: 'Melanie Lee',
    jobId: 'job-005',
  },
  {
    id: 'cand-006',
    name: 'Candidate F',
    currentRole: 'Supply Chain Analyst',
    currentRoleKo: '공급망 분석가',
    industry: 'Manufacturing',
    industryKo: '제조업',
    experience: '9 years',
    experienceKo: '9년',
    skills: ['SAP SCM', 'Demand Planning', 'Logistics', 'ERP', 'Lean Manufacturing'],
    status: 'placed',
    appliedDate: '2026-03-30',
    lastActivity: '2026-09-02',
    source: 'Referral',
    owner: 'Melanie Lee',
    jobId: 'job-006',
  },
  {
    id: 'cand-007',
    name: 'Candidate G',
    currentRole: 'Frontend Developer',
    currentRoleKo: '프론트엔드 개발자',
    industry: 'Information Technology',
    industryKo: '정보기술',
    experience: '3 years',
    experienceKo: '3년',
    skills: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'GraphQL'],
    status: 'offer',
    appliedDate: '2026-05-03',
    lastActivity: '2026-09-09',
    source: 'Direct search',
    owner: 'Melanie Lee',
    jobId: 'job-007',
  },
  {
    id: 'cand-008',
    name: 'Candidate H',
    currentRole: 'Biomedical Scientist',
    currentRoleKo: '생의학 과학자',
    industry: 'Bio / Healthcare',
    industryKo: '바이오 / 헬스케어',
    experience: '11 years',
    experienceKo: '11년',
    skills: ['Antibody Engineering', 'Cell Culture', 'Flow Cytometry', 'ELISA', 'PCR'],
    status: 'sourced',
    appliedDate: '2026-05-09',
    lastActivity: '2026-09-07',
    source: 'Database',
    owner: 'Melanie Lee',
    jobId: 'job-008',
  },
  {
    id: 'cand-009',
    name: 'Candidate I',
    currentRole: 'Investment Banker',
    currentRoleKo: '투자 은행가',
    industry: 'Finance',
    industryKo: '금융',
    experience: '6 years',
    experienceKo: '6년',
    skills: ['M&A', 'DCF Valuation', 'Capital Markets', 'Pitch Decks', 'Due Diligence'],
    status: 'contacted',
    appliedDate: '2026-04-10',
    lastActivity: '2026-09-06',
    source: 'Referral',
    owner: 'Melanie Lee',
  },
  {
    id: 'cand-010',
    name: 'Candidate J',
    currentRole: 'DevOps Engineer',
    currentRoleKo: 'DevOps 엔지니어',
    industry: 'Information Technology',
    industryKo: '정보기술',
    experience: '5 years',
    experienceKo: '5년',
    skills: ['CI/CD', 'Terraform', 'Kubernetes', 'Prometheus', 'Azure DevOps'],
    status: 'sourced',
    appliedDate: '2026-05-14',
    lastActivity: '2026-09-08',
    source: 'Direct search',
    owner: 'Melanie Lee',
  },
];

export async function getCandidates(status?: CandidateStatus): Promise<Candidate[]> {
  if (status !== undefined) {
    return MOCK_CANDIDATES.filter((candidate) => candidate.status === status);
  }
  return MOCK_CANDIDATES;
}
