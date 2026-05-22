import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Link from 'next/link';
import '../globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'GCI Dashboard',
};

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-50 text-navy`}>
        <div className="min-h-screen flex flex-col">
          {/* Top bar */}
          <header className="bg-navy shadow-sm">
            <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 bg-gold rounded flex items-center justify-center">
                  <span className="text-navy font-bold text-xs">GCI</span>
                </div>
                <span className="text-white font-semibold text-sm">GCI Dashboard</span>
              </div>
              <Link href="/" className="text-white/50 hover:text-white text-xs transition-colors">
                ← Back to Site
              </Link>
            </div>
          </header>
          {/* Main */}
          <main className="flex-1 max-w-7xl mx-auto w-full px-6 py-8">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
