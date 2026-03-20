export default function ActionSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">See It In Action</h2>
        </div>

        {/* Three Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* Card 1 - QR Code */}
          <div className="bg-white rounded-2xl p-8 border-2 border-blue-600 text-center">
            <div className="bg-gray-100 h-48 mx-auto rounded-2xl flex items-center justify-center mb-6">
              <svg className="w-16 h-16 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
            </div>
            <h3 className="font-bold text-lg mb-2">Your QR Card</h3>
            <p className="text-gray-600">Review QR<br />Scan to leave a review</p>
          </div>

          {/* Card 2 - Rating Page */}
          <div className="bg-white rounded-2xl p-8 border border-gray-200 text-center">
            <div className="bg-gray-50 h-48 mx-auto rounded-2xl flex flex-col items-center justify-center mb-6">
              <h4 className="font-semibold text-gray-700 mb-4">How was your<br />experience?</h4>
              <div className="flex gap-2">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-3xl text-yellow-400 cursor-pointer hover:scale-110 transition">
                    ★
                  </span>
                ))}
              </div>
              <p className="text-xs text-gray-500 mt-4">Tap to rate</p>
            </div>
            <h3 className="font-bold text-lg mb-2">Rating Page</h3>
            <p className="text-gray-600">Simple rating interface</p>
          </div>

          {/* Card 3 - Thank You */}
          <div className="bg-white rounded-2xl p-8 border-2 border-green-500 text-center">
            <div className="bg-green-500 h-48 mx-auto rounded-2xl flex flex-col items-center justify-center mb-6 text-white">
              <svg className="w-16 h-16 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <h4 className="font-bold text-lg">Thank You!</h4>
              <p className="text-sm">Your feedback helps us improve</p>
              <button className="bg-white text-green-500 px-4 py-1 rounded mt-3 font-semibold">
                Done
              </button>
            </div>
            <h3 className="font-bold text-lg mb-2">Thank You Screen</h3>
            <p className="text-gray-600">Feedback collected privately</p>
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center mt-12">
          <button className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-lg font-bold transition-all duration-300 transform hover:scale-105">
            Get This For My Business
          </button>
        </div>
      </div>
    </section>
  );
}