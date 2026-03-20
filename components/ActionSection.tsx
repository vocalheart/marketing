'use client';

export default function ActionSection() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Heading ── */}
        <div className="text-center mb-12 md:mb-16">
          <span
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4"
            style={{ background: '#eff6ff', color: '#2563eb' }}
          >
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                d="M15 10l4.553-2.069A1 1 0 0121 8.82V15a1 1 0 01-1.447.894L15 14M3 8a2 2 0 012-2h8a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2V8z" />
            </svg>
            Live Demo
          </span>
          <h2
            className="font-extrabold text-gray-900 mb-4 leading-tight"
            style={{ fontSize: 'clamp(1.6rem, 4vw, 2.6rem)' }}
          >
            See It In Action
          </h2>
          <p
            className="text-gray-500 mx-auto"
            style={{ fontSize: 'clamp(0.9rem, 2vw, 1.05rem)', maxWidth: '40ch' }}
          >
            Three screens. Zero friction. Fully automatic review routing.
          </p>
        </div>

        {/* ── Three Cards ── */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">

          {/* ── Card 1: QR Code ── */}
          <div
            className="rounded-2xl p-6 sm:p-8 flex flex-col items-center text-center transition-transform hover:-translate-y-1"
            style={{
              border: '2px solid #bfdbfe',
              boxShadow: '0 8px 28px rgba(37,99,235,0.10)',
            }}
          >
            {/* Mock card preview */}
            <div
              className="w-full rounded-xl flex flex-col items-center justify-center mb-6 py-8 gap-4"
              style={{ background: 'linear-gradient(135deg, #eff6ff 0%, #dbeafe 100%)' }}
            >
              {/* QR icon */}
              <div
                className="w-24 h-24 rounded-xl flex items-center justify-center"
                style={{ background: '#ffffff', boxShadow: '0 4px 16px rgba(37,99,235,0.15)' }}
              >
                <svg width="52" height="52" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="3" width="7" height="7" rx="1" />
                  <rect x="14" y="3" width="7" height="7" rx="1" />
                  <rect x="3" y="14" width="7" height="7" rx="1" />
                  <path d="M14 14h2v2h-2zM18 14h3v3h-3zM14 18h3v3h-3z" />
                </svg>
              </div>
              <div>
                <p className="font-bold text-gray-800 text-sm">Review QR</p>
                <p className="text-gray-500 text-xs mt-0.5">Scan to leave a review</p>
              </div>
              {/* Scan indicator */}
              <div
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold"
                style={{ background: '#dbeafe', color: '#1d4ed8' }}
              >
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                    d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
                Point camera here
              </div>
            </div>
            <div
              className="w-8 h-1 rounded-full mb-4"
              style={{ background: '#2563eb', opacity: 0.3 }}
            />
            <h3 className="font-bold text-gray-900 mb-1" style={{ fontSize: 'clamp(0.95rem, 2vw, 1.1rem)' }}>
              Your QR Card
            </h3>
            <p className="text-gray-500 text-sm">Place at counter, tables, or on receipts</p>
          </div>

          {/* ── Card 2: Rating Page ── */}
          <div
            className="rounded-2xl p-6 sm:p-8 flex flex-col items-center text-center transition-transform hover:-translate-y-1"
            style={{
              border: '1.5px solid #e2e8f0',
              boxShadow: '0 8px 28px rgba(0,0,0,0.06)',
            }}
          >
            {/* Mock phone screen */}
            <div
              className="w-full rounded-xl flex flex-col items-center justify-center mb-6 py-8 gap-4"
              style={{ background: '#f8faff' }}
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center"
                style={{ background: '#eff6ff' }}
              >
                <svg className="w-5 h-5" fill="none" stroke="#2563eb" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                    d="M19 21H5a2 2 0 01-2-2V7a2 2 0 012-2h11l5 5v11a2 2 0 01-2 2z" />
                </svg>
              </div>
              <div>
                <p className="font-bold text-gray-800 text-sm">How was your</p>
                <p className="font-bold text-gray-800 text-sm">experience?</p>
              </div>
              {/* Stars */}
              <div className="flex gap-1.5">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} viewBox="0 0 20 20" fill="#facc15" className="w-8 h-8">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p
                className="text-xs font-medium px-3 py-1 rounded-full"
                style={{ background: '#f1f5f9', color: '#64748b' }}
              >
                Tap a star to rate
              </p>
            </div>
            <div
              className="w-8 h-1 rounded-full mb-4"
              style={{ background: '#7c3aed', opacity: 0.3 }}
            />
            <h3 className="font-bold text-gray-900 mb-1" style={{ fontSize: 'clamp(0.95rem, 2vw, 1.1rem)' }}>
              Rating Page
            </h3>
            <p className="text-gray-500 text-sm">Simple, fast, frictionless rating interface</p>
          </div>

          {/* ── Card 3: Thank You ── */}
          <div
            className="rounded-2xl p-6 sm:p-8 flex flex-col items-center text-center transition-transform hover:-translate-y-1 sm:col-span-2 lg:col-span-1"
            style={{
              border: '2px solid #bbf7d0',
              boxShadow: '0 8px 28px rgba(34,197,94,0.12)',
            }}
          >
            {/* Mock thank you screen */}
            <div
              className="w-full rounded-xl flex flex-col items-center justify-center mb-6 py-8 gap-3"
              style={{ background: 'linear-gradient(135deg, #22c55e 0%, #16a34a 100%)' }}
            >
              {/* Check circle */}
              <div
                className="w-14 h-14 rounded-full flex items-center justify-center"
                style={{ background: 'rgba(255,255,255,0.2)' }}
              >
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <p className="font-extrabold text-white text-lg">Thank You!</p>
                <p className="text-green-100 text-xs mt-1">Your feedback helps us improve</p>
              </div>
              <button
                className="font-bold text-sm px-5 py-2 rounded-lg mt-1 transition-transform hover:scale-105"
                style={{ background: '#ffffff', color: '#16a34a' }}
              >
                Done
              </button>
            </div>
            <div
              className="w-8 h-1 rounded-full mb-4"
              style={{ background: '#16a34a', opacity: 0.3 }}
            />
            <h3 className="font-bold text-gray-900 mb-1" style={{ fontSize: 'clamp(0.95rem, 2vw, 1.1rem)' }}>
              Thank You Screen
            </h3>
            <p className="text-gray-500 text-sm">Negative feedback collected privately, never public</p>
          </div>
        </div>

        {/* ── Flow indicators ── */}
        <div className="hidden lg:flex items-center justify-center gap-3 mt-8">
          {['Scan QR', 'Rate Experience', 'Smart Routing'].map((label, i) => (
            <div key={i} className="flex items-center gap-3">
              <span
                className="text-xs font-semibold px-3 py-1.5 rounded-full"
                style={{ background: '#f1f5f9', color: '#475569' }}
              >
                {label}
              </span>
              {i < 2 && (
                <svg className="w-4 h-4 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              )}
            </div>
          ))}
        </div>

        {/* ── CTA ── */}
        <div className="text-center mt-12">
          <button
            className="inline-flex items-center gap-2 font-bold py-3.5 px-8 rounded-xl text-white transition-transform hover:-translate-y-0.5 text-sm sm:text-base"
            style={{
              background: 'linear-gradient(135deg, #22c55e 0%, #16a34a 100%)',
              boxShadow: '0 4px 16px rgba(34,197,94,0.35)',
            }}
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                d="M19 21H5a2 2 0 01-2-2V7a2 2 0 012-2h11l5 5v11a2 2 0 01-2 2z" />
            </svg>
            Get This For My Business
          </button>
          <p className="text-gray-400 text-xs mt-3">No technical skills needed · Setup in 5 minutes</p>
        </div>

      </div>
    </section>
  );
}