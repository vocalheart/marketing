'use client';

import Link from 'next/link';
import Countdown from './Countdown';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden py-16 md:py-24 lg:py-32"
      style={{
        background: 'linear-gradient(135deg, #f0f7ff 0%, #e8f4fd 40%, #f8faff 100%)',
      }}
    >
      {/* Background decorative blobs */}
      <div
        className="absolute top-0 right-0 w-72 h-72 md:w-96 md:h-96 rounded-full opacity-20 pointer-events-none"
        style={{
          background: 'radial-gradient(circle, #3b82f6 0%, transparent 70%)',
          transform: 'translate(30%, -30%)',
        }}
      />
      <div
        className="absolute bottom-0 left-0 w-64 h-64 rounded-full opacity-10 pointer-events-none"
        style={{
          background: 'radial-gradient(circle, #6366f1 0%, transparent 70%)',
          transform: 'translate(-30%, 30%)',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* ── Left Content ── */}
          <div className="fade-in-up">
            {/* Badge */}
            <span
              className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full mb-6"
              style={{ background: '#dbeafe', color: '#1d4ed8', letterSpacing: '0.1em' }}
            >
              <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
              Smart Review Management
            </span>

            {/* Headline */}
            <h1
              className="font-extrabold text-gray-900 mb-5 leading-[1.15]"
              style={{ fontSize: 'clamp(1.75rem, 4.5vw, 3rem)' }}
            >
              अब Google पर
              <br />
              <span className="text-gray-700">Negative Reviews</span>
              <br />
              <span style={{ color: '#2563eb' }}>आपकी Reputation</span>
              <br />
              खराब नहीं करेंगे
            </h1>

            <p
              className="text-gray-500 mb-8 leading-relaxed"
              style={{ fontSize: 'clamp(0.95rem, 2vw, 1.1rem)', maxWidth: '42ch' }}
            >
              Smart Review QR System जो positive reviews को Google पर भेजता है और negative
              feedback को private रखता है।
            </p>

            {/* ── Pricing Card ── */}
            <div
              className="rounded-2xl p-6 sm:p-8 mb-2"
              style={{
                background: '#ffffff',
                border: '2px solid #bfdbfe',
                boxShadow: '0 8px 32px rgba(59,130,246,0.10)',
              }}
            >
              {/* Price row */}
              <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 mb-1">
                <span
                  className="font-extrabold"
                  style={{ fontSize: 'clamp(1.8rem, 5vw, 2.5rem)', color: '#2563eb' }}
                >
                  ₹2499
                </span>
                <span
                  className="line-through text-gray-400"
                  style={{ fontSize: 'clamp(1rem, 2.5vw, 1.3rem)' }}
                >
                  ₹6999
                </span>
                <span
                  className="text-white font-bold rounded-full px-3 py-1 text-xs sm:text-sm"
                  style={{ background: '#ef4444' }}
                >
                  64% OFF
                </span>
              </div>
              <p className="text-gray-400 text-sm font-medium mb-5">per year — one-time setup</p>

              {/* Countdown */}
              <div
                className="rounded-xl p-4 sm:p-5 mb-6"
                style={{ background: 'linear-gradient(135deg, #ef4444 0%, #dc2626 100%)' }}
              >
                <div className="flex items-center gap-2 mb-3">
                  <svg className="w-4 h-4 text-red-100" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="10" strokeWidth="2" />
                    <path strokeLinecap="round" strokeWidth="2" d="M12 6v6l4 2" />
                  </svg>
                  <p className="text-red-100 text-xs font-semibold uppercase tracking-widest">
                    Offer expires in:
                  </p>
                </div>
                <Countdown />
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 mb-6">

                {/* Subscribe Button */}
        
                  <Link  href="https://www.reviewbadhao.com"
                    className="flex-1 font-bold py-3.5 rounded-xl text-white text-sm sm:text-base flex items-center justify-center gap-2 transition-transform hover:-translate-y-0.5 active:translate-y-0"
                    style={{
                      background: 'linear-gradient(135deg, #22c55e 0%, #16a34a 100%)',
                      boxShadow: '0 4px 14px rgba(34,197,94,0.35)',
                    }}
                  >
                    Subscribe Now
                  </Link>
        
                {/* Get My QR Button */}
                <Link href="https://your-qr-page.com"
            
                    className="flex-1 font-bold py-3.5 rounded-xl text-white text-sm sm:text-base flex items-center justify-center gap-2 transition-transform hover:-translate-y-0.5 active:translate-y-0"
                    style={{
                      background: 'linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)',
                      boxShadow: '0 4px 14px rgba(59,130,246,0.35)',
                    }}
                  >
                    Get My QR
                </Link>

              </div>

              {/* Feature chips */}
              <div className="flex flex-wrap gap-2">
                {[
                  {
                    label: 'Setup in 5 minutes',
                    icon: (
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                          d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    ),
                  },
                  {
                    label: 'Unlimited scans',
                    icon: (
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                          d="M4 4v5h5M20 20v-5h-5M4 20l5-5M20 4l-5 5" />
                      </svg>
                    ),
                  },
                  {
                    label: 'Any business',
                    icon: (
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                          d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
                      </svg>
                    ),
                  },
                ].map(({ label, icon }) => (
                  <span
                    key={label}
                    className="flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full"
                    style={{ background: '#f0fdf4', color: '#15803d', border: '1px solid #bbf7d0' }}
                  >
                    {icon}
                    {label}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* ── Right: QR Demo Card ── */}
          <div className="fade-in-up flex justify-center" style={{ animationDelay: '0.2s' }}>
            <div
              className="w-full max-w-xs sm:max-w-sm rounded-3xl p-6 sm:p-8"
              style={{
                background: '#ffffff',
                border: '3px solid #2563eb',
                boxShadow: '0 20px 60px rgba(37,99,235,0.15)',
              }}
            >
              {/* Business label */}
              <div className="text-center mb-5">
                <span
                  className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-3"
                  style={{ background: '#eff6ff', color: '#2563eb' }}
                >
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                      d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
                  </svg>
                  Your Business
                </span>
                <p
                  className="font-bold text-gray-800"
                  style={{ fontSize: 'clamp(1rem, 2.5vw, 1.15rem)' }}
                >
                  Rate Your Experience
                </p>
              </div>

              {/* QR placeholder */}
              <div
                className="mx-auto mb-5 rounded-2xl flex items-center justify-center"
                style={{
                  width: 'min(200px, 80%)',
                  height: 'min(200px, 80vw)',
                  background: '#f1f5f9',
                  border: '2px dashed #cbd5e1',
                }}
              >
                <div className="text-center px-4">
                  <svg
                    className="mx-auto mb-2"
                    width="56"
                    height="56"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#2563eb"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect x="3" y="3" width="7" height="7" rx="1" />
                    <rect x="14" y="3" width="7" height="7" rx="1" />
                    <rect x="3" y="14" width="7" height="7" rx="1" />
                    <path d="M14 14h2v2h-2zM18 14h3v3h-3zM14 18h3v3h-3z" />
                  </svg>
                  <p className="text-gray-400 text-xs font-medium">Scan to Review</p>
                </div>
              </div>

              {/* Stars */}
              <div className="flex justify-center gap-1 mb-5">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    viewBox="0 0 20 20"
                    fill="#facc15"
                    style={{ width: 'clamp(1.4rem, 5vw, 1.8rem)', height: 'clamp(1.4rem, 5vw, 1.8rem)' }}
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Route buttons */}
              <div className="grid grid-cols-2 gap-3">
                <button
                  className="py-3 rounded-xl font-bold text-white text-xs sm:text-sm flex items-center justify-center gap-1.5 transition-transform hover:-translate-y-0.5"
                  style={{ background: 'linear-gradient(135deg, #22c55e, #16a34a)' }}
                >
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  4–5 Star → Google
                </button>
                <button
                  className="py-3 rounded-xl font-bold text-white text-xs sm:text-sm flex items-center justify-center gap-1.5 transition-transform hover:-translate-y-0.5"
                  style={{ background: 'linear-gradient(135deg, #3b82f6, #2563eb)' }}
                >
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                      d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                  1–3 Star → Private
                </button>
              </div>

              {/* Trust note */}
              <div className="flex items-center justify-center gap-1.5 mt-4">
                <svg className="w-3.5 h-3.5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                <p className="text-gray-400 text-xs">Secure · No login required</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}