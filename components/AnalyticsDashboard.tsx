'use client';

const stats = [
  {
    label: 'Total Scans',
    value: '1,247',
    change: '+12% this week',
    accent: '#2563eb',
    bg: '#eff6ff',
    border: '#bfdbfe',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <rect x="3" y="3" width="7" height="7" rx="1" strokeWidth="2" />
        <rect x="14" y="3" width="7" height="7" rx="1" strokeWidth="2" />
        <rect x="3" y="14" width="7" height="7" rx="1" strokeWidth="2" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
          d="M14 14h2v2h-2zM18 14h3v3h-3zM14 18h3v3h-3z" />
      </svg>
    ),
  },
  {
    label: 'Google Reviews',
    value: '892',
    change: '+8% this week',
    accent: '#16a34a',
    bg: '#f0fdf4',
    border: '#bbf7d0',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    label: 'Private Feedback',
    value: '355',
    change: 'Kept off Google',
    accent: '#7c3aed',
    bg: '#f5f3ff',
    border: '#ddd6fe',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
          d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    ),
  },
  {
    label: 'Avg. Rating',
    value: '4.6',
    change: '↑ from 3.9',
    accent: '#d97706',
    bg: '#fffbeb',
    border: '#fde68a',
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ),
  },
];

const comments = [
  {
    type: 'google',
    stars: 5,
    text: 'Excellent service! Highly recommended to everyone.',
    time: '2 min ago',
  },
  {
    type: 'private',
    stars: 3,
    text: 'Service was good but the waiting time was a bit long.',
    time: '14 min ago',
  },
  {
    type: 'google',
    stars: 5,
    text: 'Amazing experience! Will definitely visit again.',
    time: '31 min ago',
  },
];

function StarRow({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {[...Array(5)].map((_, i) => (
        <svg key={i} viewBox="0 0 20 20" className="w-4 h-4"
          fill={i < count ? '#facc15' : '#e2e8f0'}>
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function AnalyticsDashboard() {
  return (
    <section className="py-16 md:py-24" style={{ background: '#f8faff' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Heading ── */}
        <div className="text-center mb-12 md:mb-16">
          <span
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4"
            style={{ background: '#eff6ff', color: '#2563eb' }}
          >
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
            Analytics
          </span>
          <h2
            className="font-extrabold text-gray-900 mb-4 leading-tight"
            style={{ fontSize: 'clamp(1.6rem, 4vw, 2.6rem)' }}
          >
            Powerful Analytics Dashboard
          </h2>
          <p
            className="text-gray-500 mx-auto"
            style={{ fontSize: 'clamp(0.9rem, 2vw, 1.05rem)', maxWidth: '44ch' }}
          >
            Track every review and feedback in real-time from one clean dashboard.
          </p>
        </div>

        {/* ── Dashboard Panel ── */}
        <div
          className="rounded-3xl p-6 sm:p-8"
          style={{
            background: '#ffffff',
            border: '1.5px solid #e2e8f0',
            boxShadow: '0 16px 48px rgba(0,0,0,0.07)',
          }}
        >
          {/* Panel header */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
            <div>
              <h3
                className="font-extrabold text-gray-900"
                style={{ fontSize: 'clamp(1.1rem, 2.5vw, 1.4rem)' }}
              >
                Analytics Overview
              </h3>
              <p className="text-gray-400 text-sm mt-0.5">Last 30 days</p>
            </div>
            <div className="flex items-center gap-2">
              <span
                className="w-2 h-2 rounded-full animate-pulse"
                style={{ background: '#22c55e' }}
              />
              <span
                className="text-xs font-semibold px-3 py-1.5 rounded-full"
                style={{ background: '#f0fdf4', color: '#15803d' }}
              >
                Live Data
              </span>
            </div>
          </div>

          {/* ── Stats Grid ── */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {stats.map((s, i) => (
              <div
                key={i}
                className="rounded-2xl p-4 sm:p-5 flex flex-col gap-3"
                style={{
                  background: s.bg,
                  border: `1.5px solid ${s.border}`,
                }}
              >
                <div className="flex items-center justify-between">
                  <span className="text-gray-500 text-xs font-medium">{s.label}</span>
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center"
                    style={{ background: '#ffffff', color: s.accent }}
                  >
                    {s.icon}
                  </div>
                </div>
                <div
                  className="font-extrabold leading-none"
                  style={{ fontSize: 'clamp(1.6rem, 4vw, 2rem)', color: s.accent }}
                >
                  {s.value}
                </div>
                <span
                  className="text-xs font-semibold px-2 py-1 rounded-full self-start"
                  style={{ background: 'rgba(255,255,255,0.7)', color: s.accent }}
                >
                  {s.change}
                </span>
              </div>
            ))}
          </div>

          {/* ── Visual bar: positive vs private ── */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-semibold text-gray-700">Review Routing</span>
              <span className="text-xs text-gray-400">892 Google · 355 Private</span>
            </div>
            <div className="flex rounded-full overflow-hidden h-3">
              <div
                className="transition-all duration-500"
                style={{ width: '71.5%', background: 'linear-gradient(90deg, #22c55e, #16a34a)' }}
              />
              <div
                className="transition-all duration-500"
                style={{ width: '28.5%', background: 'linear-gradient(90deg, #818cf8, #7c3aed)' }}
              />
            </div>
            <div className="flex items-center gap-4 mt-2">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full" style={{ background: '#22c55e' }} />
                <span className="text-xs text-gray-500">Sent to Google (71.5%)</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full" style={{ background: '#7c3aed' }} />
                <span className="text-xs text-gray-500">Kept private (28.5%)</span>
              </div>
            </div>
          </div>

          {/* ── Recent Comments ── */}
          <div>
            <h4 className="font-bold text-gray-900 mb-4 flex items-center gap-2"
              style={{ fontSize: 'clamp(0.95rem, 2vw, 1.05rem)' }}>
              <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                  d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
              </svg>
              Recent Customer Comments
            </h4>
            <div className="flex flex-col gap-3">
              {comments.map((c, i) => (
                <div
                  key={i}
                  className="rounded-xl p-4 flex gap-3 items-start"
                  style={{
                    background: c.type === 'google' ? '#f0fdf4' : '#f5f3ff',
                    borderLeft: `3px solid ${c.type === 'google' ? '#22c55e' : '#7c3aed'}`,
                  }}
                >
                  {/* Badge */}
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5"
                    style={{
                      background: c.type === 'google' ? '#dcfce7' : '#ede9fe',
                      color: c.type === 'google' ? '#16a34a' : '#7c3aed',
                    }}
                  >
                    {c.type === 'google' ? (
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    ) : (
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                          d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                      </svg>
                    )}
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-1.5">
                      <div className="flex items-center gap-2">
                        <StarRow count={c.stars} />
                        <span
                          className="text-xs font-semibold px-2 py-0.5 rounded-full"
                          style={{
                            background: c.type === 'google' ? '#dcfce7' : '#ede9fe',
                            color: c.type === 'google' ? '#15803d' : '#6d28d9',
                          }}
                        >
                          {c.type === 'google' ? 'Google' : 'Private'}
                        </span>
                      </div>
                      <span className="text-xs text-gray-400">{c.time}</span>
                    </div>
                    <p className="text-gray-700 text-sm leading-relaxed">{c.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── CTA ── */}
        <div className="text-center mt-10">
          <button
            className="inline-flex items-center gap-2 font-bold py-3.5 px-8 rounded-xl text-white transition-transform hover:-translate-y-0.5 text-sm sm:text-base"
            style={{
              background: 'linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%)',
              boxShadow: '0 4px 16px rgba(37,99,235,0.35)',
            }}
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
            Access Dashboard
          </button>
          <p className="text-gray-400 text-xs mt-3">Included free with every subscription</p>
        </div>

      </div>
    </section>
  );
}