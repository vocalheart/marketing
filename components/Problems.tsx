'use client';

const problems = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
          d="M10 14H5.236a2 2 0 01-1.789-2.894l3.5-7A2 2 0 018.736 3h4.018a2 2 0 01.485.06l3.76.94m-7 10v5a2 2 0 002 2h.096c.5 0 .905-.405.905-.904 0-.715.211-1.413.608-2.008L17 13V4m-7 10h2m5-10h2a2 2 0 012 2v6a2 2 0 01-2 2h-2.5" />
      </svg>
    ),
    accent: '#ef4444',
    bg: '#fef2f2',
    border: '#fecaca',
    title: 'Happy customers don\'t leave reviews',
    description: 'Satisfied customers rarely take the time to share positive experiences online.',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
          d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    accent: '#f97316',
    bg: '#fff7ed',
    border: '#fed7aa',
    title: 'Angry customers post 1-star reviews instantly',
    description: 'Unhappy customers are highly motivated — they head straight to Google.',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
          d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6" />
      </svg>
    ),
    accent: '#8b5cf6',
    bg: '#f5f3ff',
    border: '#ddd6fe',
    title: 'Negative ratings damage your reputation',
    description: 'A few bad reviews can overshadow years of great service.',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
          d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    accent: '#2563eb',
    bg: '#eff6ff',
    border: '#bfdbfe',
    title: 'Low rating reduces customers & sales',
    description: 'Poor Google ratings directly translate to lost revenue every single day.',
  },
];

const stats = [
  { value: '92%', label: 'customers read online reviews before visiting' },
  { value: '88%', label: 'customers trust Google ratings like personal recommendations' },
  { value: '<4.0', label: 'rating causes most customers to choose a competitor' },
];

export default function Problems() {
  return (
    <section id="benefits" className="py-16 md:py-24" style={{ background: '#f8faff' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Heading ── */}
        <div className="text-center mb-12 md:mb-16">
          <span
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4"
            style={{ background: '#fee2e2', color: '#b91c1c' }}
          >
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                d="M12 9v2m0 4h.01M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" />
            </svg>
            The Problem
          </span>
          <h2
            className="font-extrabold text-gray-900 mb-4 leading-tight"
            style={{ fontSize: 'clamp(1.6rem, 4vw, 2.6rem)' }}
          >
            हर business owner इस problem से परेशान है
          </h2>
          <p
            className="text-gray-500 mx-auto"
            style={{ fontSize: 'clamp(0.95rem, 2vw, 1.1rem)', maxWidth: '48ch' }}
          >
            These challenges are silently costing you customers and revenue every day.
          </p>
        </div>

        {/* ── Problem Cards ── */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
          {problems.map((p, i) => (
            <div
              key={i}
              className="rounded-2xl p-6 flex flex-col gap-4 transition-transform hover:-translate-y-1"
              style={{
                background: '#ffffff',
                border: `1.5px solid ${p.border}`,
                boxShadow: '0 4px 20px rgba(0,0,0,0.06)',
              }}
            >
              {/* Icon circle */}
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ background: p.bg, color: p.accent }}
              >
                {p.icon}
              </div>
              <div>
                <h3
                  className="font-bold text-gray-900 mb-1.5 leading-snug"
                  style={{ fontSize: 'clamp(0.9rem, 1.8vw, 1rem)' }}
                >
                  {p.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">{p.description}</p>
              </div>
              {/* Accent line */}
              <div
                className="h-1 w-10 rounded-full mt-auto"
                style={{ background: p.accent, opacity: 0.4 }}
              />
            </div>
          ))}
        </div>

        {/* ── CTA ── */}
        <div className="text-center mb-12">
          <button
            className="inline-flex items-center gap-2 font-bold py-3.5 px-8 rounded-xl text-white transition-transform hover:-translate-y-0.5 text-sm sm:text-base"
            style={{
              background: 'linear-gradient(135deg, #22c55e 0%, #16a34a 100%)',
              boxShadow: '0 4px 16px rgba(34,197,94,0.35)',
            }}
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Fix My Google Rating
          </button>
        </div>

        {/* ── Stats Banner ── */}
        <div
          className="rounded-3xl p-8 sm:p-12"
          style={{
            background: 'linear-gradient(135deg, #1d4ed8 0%, #2563eb 60%, #3b82f6 100%)',
            boxShadow: '0 20px 60px rgba(37,99,235,0.25)',
          }}
        >
          <div className="grid sm:grid-cols-3 gap-8 text-center text-white mb-10">
            {stats.map((s, i) => (
              <div key={i} className="flex flex-col items-center gap-2">
                {/* Divider between items on desktop */}
                <span
                  className="font-extrabold leading-none"
                  style={{ fontSize: 'clamp(2.2rem, 6vw, 3.5rem)' }}
                >
                  {s.value}
                </span>
                <p
                  className="text-blue-100 leading-snug mx-auto"
                  style={{ fontSize: 'clamp(0.8rem, 1.8vw, 0.95rem)', maxWidth: '24ch' }}
                >
                  {s.label}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <button
              className="inline-flex items-center gap-2 font-bold py-3.5 px-8 rounded-xl transition-transform hover:-translate-y-0.5 text-sm sm:text-base"
              style={{
                background: '#ffffff',
                color: '#2563eb',
                boxShadow: '0 4px 14px rgba(0,0,0,0.15)',
              }}
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                  d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
              Start Improving My Rating
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}