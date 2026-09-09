'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';

const ease = [0.25, 0.4, 0.25, 1] as const;

function fadeUp(delay: number) {
  return {
    initial: { opacity: 0, y: 24 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, delay, ease },
  };
}

export default function HeroSection() {
  const t = useTranslations('hero');

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-navy">
      <div className="container-max relative z-10 pt-32 pb-24">
        <motion.p
          {...fadeUp(0.1)}
          className="text-gold text-sm font-semibold mb-6"
        >
          {t('badge')}
        </motion.p>

        <motion.h1
          {...fadeUp(0.25)}
          className="text-5xl md:text-7xl font-bold text-white leading-[1.1] mb-6"
        >
          {t('title')}
          <br />
          {t('titleHighlight')}
        </motion.h1>

        <motion.p
          {...fadeUp(0.4)}
          className="text-white/60 text-lg md:text-xl max-w-2xl mb-12 leading-relaxed"
        >
          {t('subtitle')}
        </motion.p>

        <motion.div {...fadeUp(0.52)} className="flex flex-col sm:flex-row gap-4">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center bg-gold text-navy font-semibold px-8 py-4 rounded-lg hover:bg-gold-light transition-colors text-sm"
          >
            {t('ctaHire')}
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center border border-white/20 text-white font-medium px-8 py-4 rounded-lg hover:bg-white/5 hover:border-white/40 transition-colors text-sm"
          >
            {t('ctaApply')}
          </Link>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/30"
      >
        <div className="w-px h-8 bg-gradient-to-b from-transparent to-white/30" />
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
          <path d="M12 5v14M5 12l7 7 7-7" />
        </svg>
      </motion.div>
    </section>
  );
}
