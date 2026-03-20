'use client';
import Link from "next/link";
const steps = [
  {
    number: 1,
    accent: '#2563eb',
    bg: '#eff6ff',
    border: '#bfdbfe',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
          d="M12 4v1m0 14v1M4.22 4.22l.707.707M18.364 18.364l.707.707M1 12h1m20 0h1M4.22 19.778l.707-.707M18.364 5.636l.707-.707" />
        <circle cx="12" cy="12" r="4" strokeWidth="2" />
      </svg>
    ),
    title: 'Customer scans your QR code',
    description: 'Display your Review QR at your counter, on receipts, or at tables. One scan is all it takes.',
  },
  {
    number: 2,
    accent: '#7c3aed',
    bg: '#f5f3ff',
    border: '#ddd6fe',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
          d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
      </svg>
    ),
    title: 'Customer selects a star rating',
    description: 'A clean, simple 1–5 star interface loads instantly. No app, no login, no friction.',
  },
  {
    number: 3,
    accent: '#16a34a',
    bg: '#f0fdf4',
    border: '#bbf7d0',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
      </svg>
    ),
    title: '4–5 stars → sent to Google',
    description: 'Happy customers are instantly redirected to your Google review page to post publicly.',
    highlight: true,
  },
  {
    number: 4,
    accent: '#2563eb',
    bg: '#eff6ff',
    border: '#bfdbfe',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
          d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    ),
    title: '1–3 stars → private feedback',
    description: 'Unhappy customers share feedback privately with you — never posted publicly on Google.',
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Heading ── */}
        <div className="text-center mb-14 md:mb-20">
          <span
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4"
            style={{ background: '#eff6ff', color: '#2563eb' }}
          >
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
            How It Works
          </span>
          <h2
            className="font-extrabold text-gray-900 mb-4 leading-tight"
            style={{ fontSize: 'clamp(1.6rem, 4vw, 2.6rem)' }}
          >
            Introducing Review QR
          </h2>
          <p
            className="text-gray-500 mx-auto"
            style={{ fontSize: 'clamp(0.95rem, 2vw, 1.1rem)', maxWidth: '44ch' }}
          >
            The smart solution to protect and grow your online reputation — automatically.
          </p>
        </div>

        {/* ── Timeline ── */}
        <div className="max-w-2xl mx-auto mb-14">
          {steps.map((step, index) => (
            <div key={index} className="flex gap-6 sm:gap-8">
              {/* Left: number + connector line */}
              <div className="flex flex-col items-center">
                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0 font-extrabold text-lg shadow-sm"
                  style={{
                    background: step.highlight
                      ? 'linear-gradient(135deg, #22c55e, #16a34a)'
                      : step.bg,
                    color: step.highlight ? '#ffffff' : step.accent,
                    border: `2px solid ${step.border}`,
                    boxShadow: step.highlight ? '0 4px 14px rgba(34,197,94,0.3)' : undefined,
                  }}
                >
                  {step.number}
                </div>
                {index !== steps.length - 1 && (
                  <div
                    className="w-0.5 flex-1 my-2 rounded-full"
                    style={{ background: '#e2e8f0', minHeight: '2.5rem' }}
                  />
                )}
              </div>

              {/* Right: content card */}
              <div
                className={`flex-1 rounded-2xl p-5 mb-5 transition-transform hover:-translate-y-0.5 ${
                  step.highlight ? '' : ''
                }`}
                style={{
                  background: step.highlight ? '#f0fdf4' : '#fafafa',
                  border: `1.5px solid ${step.border}`,
                  boxShadow: step.highlight
                    ? '0 4px 20px rgba(34,197,94,0.12)'
                    : '0 2px 12px rgba(0,0,0,0.04)',
                }}
              >
                <div className="flex items-start gap-3">
                  <div
                    className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5"
                    style={{ background: step.bg, color: step.accent }}
                  >
                    {step.icon}
                  </div>
                  <div>
                    <h3
                      className="font-bold text-gray-900 mb-1 leading-snug"
                      style={{ fontSize: 'clamp(0.95rem, 2vw, 1.05rem)' }}
                    >
                      {step.title}
                      {step.highlight && (
                        <span
                          className="ml-2 text-xs font-semibold px-2 py-0.5 rounded-full align-middle"
                          style={{ background: '#dcfce7', color: '#15803d' }}
                        >
                          Key step
                        </span>
                      )}
                    </h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{step.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ── CTA ── */}
        <div className="text-center">
        <Link href="https://www.reviewbadhao.com"
            className="inline-flex items-center gap-2 font-bold py-3.5 px-8 rounded-xl text-white transition-transform hover:-translate-y-0.5 text-sm sm:text-base"
            style={{
              background: 'linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%)',
              boxShadow: '0 4px 16px rgba(37,99,235,0.35)',
            }}
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            Get Started Now
          </Link>
          <p className="text-gray-400 text-xs mt-3">Setup takes less than 5 minutes</p>
        </div>

      </div>
    </section>
  );
}