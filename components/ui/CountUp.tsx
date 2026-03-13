'use client';

import { useEffect, useRef } from 'react';
import { useInView } from 'framer-motion';

export function CountUp({ value }: { value: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView || !ref.current) return;

    const match = value.match(/^(\d+)(.*)$/);
    if (!match) {
      if (ref.current) ref.current.textContent = value;
      return;
    }

    const target = parseInt(match[1]);
    const suffix = match[2];
    const duration = 1800;
    const startTime = performance.now();

    const update = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.round(eased * target);
      if (ref.current) ref.current.textContent = current + suffix;
      if (progress < 1) requestAnimationFrame(update);
    };

    requestAnimationFrame(update);
  }, [isInView, value]);

  return <span ref={ref}>{value}</span>;
}
