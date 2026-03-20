'use client';

const features = [
  {
    number: '01',
    accent: '#2563eb',
    bg: '#eff6ff',
    border: '#bfdbfe',
    gradientFrom: '#2563eb',
    gradientTo: '#1d4ed8',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <rect x="3" y="3" width="7" height="7" rx="1" strokeWidth="2" />
        <rect x="14" y="3" width="7" height="7" rx="1" strokeWidth="2" />
        <rect x="3" y="14" width="7" height="7" rx="1" strokeWidth="2" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
          d="M14 14h2v2h-2zM18 14h3v3h-3zM14 18h3v3h-3z" />
      </svg>
    ),
    title: 'Scan QR Code',
    description: 'Customer scans your unique Review QR — no app or login needed.',
  },
  {
    number: '02',
    accent: '#7c3aed',
    bg: '#f5f3ff',
    border: '#ddd6fe',
    gradientFrom: '#7c3aed',
    gradientTo: '#6d28d9',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
          d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
      </svg>
    ),
    title: 'Select Rating',
    description: 'A clean 1–5 star interface loads instantly. Simple and intuitive.',
  },
  {
    number: '03',
    accent: '#16a34a',
    bg: '#f0fdf4',
    border: '#bbf7d0',
    gradientFrom: '#22c55e',
    gradientTo: '#16a34a',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
      </svg>
    ),
    title: 'Redirect to Google',
    description: '4–5 star reviews are sent directly to your Google My Business page.',
    highlight: true,
  },
  {
    number: '04',
    accent: '#0891b2',
    bg: '#ecfeff',
    border: '#a5f3fc',
    gradientFrom: '#0891b2',
    gradientTo: '#0e7490',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
          d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
      </svg>
    ),
    title: 'Private Feedback',
    description: '1–3 star feedback is collected privately — never posted publicly.',
  },
];

export default function Features() {
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
                d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
            </svg>
            Features
          </span>
          <h2
            className="font-extrabold text-gray-900 mb-4 leading-tight"
            style={{ fontSize: 'clamp(1.6rem, 4vw, 2.6rem)' }}
          >
            How It Works
          </h2>
          <p
            className="text-gray-500 mx-auto"
            style={{ fontSize: 'clamp(0.9rem, 2vw, 1.05rem)', maxWidth: '40ch' }}
          >
            Four simple steps that protect your reputation on autopilot.
          </p>
        </div>

        {/* ── Feature Cards ── */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {features.map((f, i) => (
            <div
              key={i}
              className="relative rounded-2xl p-6 flex flex-col gap-4 group transition-transform hover:-translate-y-1"
              style={{
                background: '#ffffff',
                border: `1.5px solid ${f.border}`,
                boxShadow: f.highlight
                  ? '0 8px 28px rgba(34,197,94,0.14)'
                  : '0 4px 20px rgba(0,0,0,0.05)',
              }}
            >
              {/* Highlight ribbon */}
              {f.highlight && (
                <div
                  className="absolute top-4 right-4 text-xs font-bold px-2.5 py-1 rounded-full"
                  style={{ background: '#dcfce7', color: '#15803d' }}
                >
                  Key Step
                </div>
              )}

              {/* Icon */}
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 transition-transform group-hover:scale-105"
                style={{
                  background: `linear-gradient(135deg, ${f.gradientFrom}, ${f.gradientTo})`,
                  color: '#ffffff',
                  boxShadow: `0 4px 14px ${f.accent}40`,
                }}
              >
                {f.icon}
              </div>

              {/* Step number */}
              <span
                className="text-xs font-extrabold tracking-widest uppercase"
                style={{ color: f.accent }}
              >
                Step {f.number}
              </span>

              {/* Text */}
              <div>
                <h3
                  className="font-bold text-gray-900 mb-1.5 leading-snug"
                  style={{ fontSize: 'clamp(0.95rem, 2vw, 1.05rem)' }}
                >
                  {f.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">{f.description}</p>
              </div>

              {/* Bottom accent bar */}
              <div
                className="h-1 w-10 rounded-full mt-auto transition-all duration-300 group-hover:w-16"
                style={{ background: f.accent, opacity: 0.35 }}
              />
            </div>
          ))}
        </div>

        {/* ── Connector row (desktop only) ── */}
        <div className="hidden lg:flex items-center justify-center gap-2 mt-8 px-8">
          {features.map((f, i) => (
            <div key={i} className="flex items-center gap-2 flex-1">
              <div
                className="w-3 h-3 rounded-full flex-shrink-0"
                style={{ background: f.accent }}
              />
              {i < features.length - 1 && (
                <div className="flex-1 h-px" style={{ background: '#e2e8f0' }} />
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}