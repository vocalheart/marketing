import Countdown from './Countdown';

export default function Hero() {
  return (
    <section id="home" className="bg-gradient-to-br from-blue-50 to-gray-50 py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="fade-in-up">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
              अब Google पर
              <br />
              <span className="text-gray-800">Negative Reviews</span>
              <br />
              <span className="text-blue-600">आपकी Reputation</span>
              <br />
              खराब नहीं करेंगे
            </h1>

            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              Smart Review QR System जो positive reviews को Google पर भेजता है और negative
              feedback को private रखता है।
            </p>

            {/* Pricing Section */}
            <div className="bg-white border-2 border-blue-200 rounded-2xl p-8 mb-6">
              <div className="flex items-baseline gap-2 mb-4">
                <span className="text-3xl font-bold text-blue-600">₹2499</span>
                <span className="text-xl line-through text-gray-500">₹6999</span>
                <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                  64% OFF
                </span>
              </div>
              <p className="text-gray-700 font-semibold mb-4">/year</p>

              {/* Countdown */}
              <div className="bg-red-500 text-white rounded-xl p-6 mb-6">
                <p className="text-sm font-semibold mb-3">Offer expires in:</p>
                <Countdown />
              </div>

              {/* Buttons */}
              <div className="flex gap-4">
                <button className="flex-1 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-bold transition-all duration-300 transform hover:scale-105">
                  Subscribe Now
                </button>
                <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-bold transition-all duration-300 transform hover:scale-105">
                  Get My QR
                </button>
              </div>

              {/* Features */}
              <div className="flex flex-col gap-3 mt-6 text-sm text-gray-700">
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>Setup in 5 minutes</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>Unlimited scans</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>Works for any business</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right QR Code */}
          <div className="fade-in-up" style={{ animationDelay: '0.2s' }}>
            <div className="bg-white rounded-3xl p-8 shadow-xl border-4 border-blue-600">
              <div className="text-center mb-6">
                <div className="bg-gray-100 h-64 w-64 mx-auto rounded-2xl flex items-center justify-center mb-6">
                  <div className="text-center">
                    <svg className="w-20 h-20 mx-auto text-blue-600 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </svg>
                    <p className="text-gray-500">Scan QR Code</p>
                  </div>
                </div>
              </div>

              <p className="text-center font-semibold mb-6">Rate Your Experience</p>

              {/* Star Rating */}
              <div className="flex justify-center gap-2 mb-6">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-3xl text-yellow-400">★</span>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="grid grid-cols-2 gap-4">
                <button className="bg-green-500 hover:bg-green-600 text-white py-3 rounded-lg font-bold transition">
                  4-5 Star → Google
                </button>
                <button className="bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-bold transition">
                  1-3 Star → Private
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}