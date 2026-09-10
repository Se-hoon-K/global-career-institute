import { Link } from '@/i18n/navigation';

interface InquiryBandProps {
  title: string;
  description: string;
  primaryLabel: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
}

export default function InquiryBand({
  title,
  description,
  primaryLabel,
  primaryHref = '/contact',
  secondaryLabel,
  secondaryHref = '/candidate',
}: InquiryBandProps) {
  return (
    <section className="border-y border-white/10 bg-navy text-white">
      <div className="container-max grid gap-10 py-16 md:grid-cols-[1fr_auto] md:items-end md:py-20">
        <div>
          <h2 className="max-w-2xl text-balance text-3xl font-bold tracking-[-0.025em] md:text-4xl">
            {title}
          </h2>
          <p className="mt-4 max-w-2xl text-sm leading-7 text-white/70">{description}</p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row">
          <Link href={primaryHref} className="inline-flex min-h-12 items-center justify-center rounded-md bg-gold px-7 text-sm font-semibold text-navy transition-colors hover:bg-gold-light">
            {primaryLabel}
          </Link>
          {secondaryLabel && (
            <Link href={secondaryHref} className="inline-flex min-h-12 items-center justify-center rounded-md border border-white/25 px-7 text-sm font-semibold text-white transition-colors hover:border-white/60">
              {secondaryLabel}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
