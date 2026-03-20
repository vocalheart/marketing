export default function Comparison() {
  const withoutReviewQR = [
    'All customers go directly to Google reviews',
    'Negative reviews become public immediately',
    'No control over your reputation',
    'Angry customers damage your rating',
    'Difficult to gather feedback for improvement',
    'Lower ratings = lost customers and revenue',
  ];

  const withReviewQR = [
    'Smart rating flow filters reviews intelligently',
    'Positive users automatically go to Google',
    'Negative feedback collected privately',
    'Better reputation control and management',
    'Actionable insights to improve service',
    'Higher ratings = more customers and revenue',
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Before vs After Review QR</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Without Review QR */}
          <div className="bg-red-50 border-2 border-red-200 rounded-lg p-8">
            <div className="flex items-center gap-2 mb-6">
              <svg className="w-6 h-6 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                  clipRule="evenodd"
                />
              </svg>
              <h3 className="text-xl font-bold text-red-600">Without Review QR</h3>
            </div>

            <ul className="space-y-3">
              {withoutReviewQR.map((item, index) => (
                <li key={index} className="flex items-start gap-3 text-gray-700">
                  <svg className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* With Review QR */}
          <div className="bg-green-50 border-2 border-green-200 rounded-lg p-8">
            <div className="flex items-center gap-2 mb-6">
              <svg className="w-6 h-6 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <h3 className="text-xl font-bold text-green-600">With Review QR</h3>
            </div>

            <ul className="space-y-3">
              {withReviewQR.map((item, index) => (
                <li key={index} className="flex items-start gap-3 text-gray-700">
                  <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="text-center">
          <button className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-lg font-bold transition-all duration-300 transform hover:scale-105">
            Make The Switch Today
          </button>
        </div>
      </div>
    </section>
  );
}