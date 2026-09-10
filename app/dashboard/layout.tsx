import type { Metadata } from 'next';
import Link from 'next/link';
import '../globals.css';

export const metadata: Metadata = {
  title: 'Candidate CRM Demo | Global Career Institute',
  description: 'A read-only recruitment CRM portfolio demonstration using fictional sample data.',
};

const navigation = [
  { href: '#overview', label: 'Overview' },
  { href: '#pipeline', label: 'Candidate pipeline' },
  { href: '#searches', label: 'Search portfolio' },
  { href: '#activity', label: 'Recent activity' },
];

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-[#edf0ef] text-navy antialiased">
        <div className="min-h-screen lg:grid lg:grid-cols-[15rem_minmax(0,1fr)]">
          <aside className="hidden bg-navy px-6 py-7 text-white lg:sticky lg:top-0 lg:flex lg:h-screen lg:flex-col">
            <Link href="/" className="flex items-center gap-3" aria-label="Return to Global Career Institute">
              <span className="flex h-9 w-10 items-center justify-center rounded-[4px] bg-gold text-[0.7rem] font-extrabold text-navy">GCI</span>
              <span className="text-sm font-semibold">Recruiting CRM</span>
            </Link>

            <div className="mt-12 border-t border-white/15 pt-5">
              <p className="text-xs font-semibold text-gold-light">Portfolio demo</p>
              <p className="mt-2 text-xs leading-5 text-white/50">Read-only interface with fictional sample records.</p>
            </div>

            <nav className="mt-10" aria-label="Dashboard sections">
              <ul className="space-y-1">
                {navigation.map((item) => (
                  <li key={item.href}>
                    <a href={item.href} className="block border-l border-white/15 px-4 py-2.5 text-sm text-white/65 transition-colors hover:border-gold hover:text-white">
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            <Link href="/" className="mt-auto border-t border-white/15 pt-5 text-xs font-semibold text-white/60 transition-colors hover:text-white">
              ← Back to public site
            </Link>
          </aside>

          <div className="min-w-0">
            <header className="sticky top-0 z-20 flex h-16 items-center justify-between border-b border-white/10 bg-navy px-5 text-white lg:hidden">
              <Link href="/" className="flex items-center gap-2" aria-label="Return to Global Career Institute">
                <span className="flex h-8 w-9 items-center justify-center rounded-[4px] bg-gold text-[0.65rem] font-extrabold text-navy">GCI</span>
                <span className="text-sm font-semibold">CRM Demo</span>
              </Link>
              <a href="#pipeline" className="text-xs font-semibold text-gold-light">View pipeline</a>
            </header>
            <main className="mx-auto w-full max-w-[112rem] px-4 py-8 sm:px-6 lg:px-8 lg:py-10 xl:px-10">
              {children}
            </main>
          </div>
        </div>
      </body>
    </html>
  );
}
