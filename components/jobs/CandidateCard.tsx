import { Link } from '@/i18n/navigation';
import { Candidate } from '@/lib/data/candidates';

export default function CandidateCard({ candidate, locale }: { candidate: Candidate; locale: string }) {
  const isKo = locale === 'ko';
  const currentRole = isKo ? candidate.currentRoleKo : candidate.currentRole;
  const industry = isKo ? candidate.industryKo : candidate.industry;
  const experience = isKo ? candidate.experienceKo : candidate.experience;

  // First letter of name as avatar initial
  const initial = candidate.name.charAt(0).toUpperCase();

  // Show up to 3 skill tags
  const visibleSkills = candidate.skills.slice(0, 3);

  return (
    <div className="group flex flex-col h-full p-6 rounded-2xl bg-navy border border-white/8 hover:border-gold/40 hover:shadow-lg transition-all duration-300">
      {/* Avatar */}
      <div className="flex flex-col items-center text-center mb-5">
        <div className="w-14 h-14 rounded-full bg-gold flex items-center justify-center mb-3 shrink-0">
          <span className="text-navy text-xl font-bold leading-none">{initial}</span>
        </div>

        {/* Role */}
        <h3 className="text-white font-semibold text-base leading-snug mb-1">{currentRole}</h3>

        {/* Industry + Experience */}
        <p className="text-white/50 text-xs">
          {industry}
          <span className="mx-2 text-white/20">|</span>
          {experience}{isKo ? '' : ' exp.'}
        </p>
      </div>

      {/* Skills */}
      <div className="flex flex-wrap justify-center gap-1.5 mb-5">
        {visibleSkills.map((skill) => (
          <span
            key={skill}
            className="inline-flex items-center px-2.5 py-1 rounded-full bg-white/10 text-white/80 text-xs font-medium"
          >
            {skill}
          </span>
        ))}
      </div>

      {/* Spacer */}
      <div className="mt-auto">
        <Link
          href="/contact?type=corporate"
          className="flex items-center justify-center gap-2 w-full border border-gold/40 text-gold text-sm font-semibold px-5 py-3 rounded-lg hover:bg-gold hover:text-navy hover:border-gold transition-colors duration-300"
        >
          {isKo ? '소개 요청하기' : 'Request Introduction'}
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </div>
  );
}
