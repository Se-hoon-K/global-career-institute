'use client';

import { useState, useEffect, FormEvent } from 'react';
import { MOCK_JOBS } from '@/lib/data/jobs';
import { MOCK_CANDIDATES } from '@/lib/data/candidates';
import StatsPanel from '@/components/dashboard/StatsPanel';
import JobsTable from '@/components/dashboard/JobsTable';
import CandidatesTable from '@/components/dashboard/CandidatesTable';

const STORAGE_KEY = 'gci_admin_token';

export default function DashboardPage() {
  const [authState, setAuthState] = useState<'loading' | 'authed' | 'unauthed'>('loading');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    const expected = process.env.NEXT_PUBLIC_DASHBOARD_PASSWORD || 'admin123';
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setAuthState(stored === expected ? 'authed' : 'unauthed');
  }, []);

  function handleLogin(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const expected = process.env.NEXT_PUBLIC_DASHBOARD_PASSWORD || 'admin123';
    if (password === expected) {
      localStorage.setItem(STORAGE_KEY, password);
      setAuthState('authed');
      setError('');
    } else {
      setError('Incorrect password. Please try again.');
    }
  }

  if (authState === 'loading') return null;

  if (authState === 'unauthed') {
    return (
      <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center">
        <div className="bg-white rounded-2xl border border-gray-100 shadow-md p-8 w-full max-w-sm">
          {/* Logo */}
          <div className="flex flex-col items-center mb-8">
            <div className="w-12 h-12 bg-navy rounded-xl flex items-center justify-center mb-3">
              <div className="w-7 h-7 bg-gold rounded flex items-center justify-center">
                <span className="text-navy font-bold text-xs">GCI</span>
              </div>
            </div>
            <h1 className="text-xl font-bold text-navy">Dashboard Access</h1>
            <p className="text-sm text-navy/50 mt-1">Enter your admin password to continue</p>
          </div>

          <form onSubmit={handleLogin} className="flex flex-col gap-4">
            <div>
              <label htmlFor="password" className="block text-xs font-semibold text-navy/60 mb-1.5">
                Password
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter password"
                required
                className="w-full px-4 py-2.5 rounded-lg border border-gray-200 text-sm text-navy placeholder:text-navy/30 focus:outline-none focus:ring-2 focus:ring-gold/40 focus:border-gold transition-colors"
              />
            </div>

            {error && (
              <p className="text-xs text-red-600 bg-red-50 border border-red-100 rounded-lg px-3 py-2">
                {error}
              </p>
            )}

            <button
              type="submit"
              className="w-full bg-gold hover:bg-gold-dark text-navy font-semibold text-sm py-2.5 rounded-lg transition-colors"
            >
              Access Dashboard
            </button>
          </form>
        </div>
      </div>
    );
  }

  // Compute stats
  const activeJobs = MOCK_JOBS.filter((j) => j.status === 'active').length;
  const totalCandidates = MOCK_CANDIDATES.length;
  const currentMonth = new Date().getMonth();
  const placedThisMonth = MOCK_CANDIDATES.filter((c) => {
    return c.status === 'placed' && new Date(c.appliedDate).getMonth() === currentMonth;
  }).length;

  return (
    <div>
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-navy">GCI Dashboard</h1>
          <p className="text-sm text-navy/50 mt-0.5">Internal recruitment management</p>
        </div>
        <button
          onClick={() => {
            localStorage.removeItem(STORAGE_KEY);
            setAuthState('unauthed');
          }}
          className="text-xs text-navy/40 hover:text-navy/70 transition-colors"
        >
          Sign out
        </button>
      </div>

      <StatsPanel
        activeJobs={activeJobs}
        totalCandidates={totalCandidates}
        placedThisMonth={placedThisMonth}
        clientSatisfaction="98%"
      />

      <div className="mt-8 flex flex-col gap-8">
        <JobsTable jobs={MOCK_JOBS} />
        <CandidatesTable candidates={MOCK_CANDIDATES} />
      </div>
    </div>
  );
}
