export default function WhatYouGet() {
  const features = [
    { title: 'Review Management System', price: '₹1999' },
    { title: 'Custom QR Setup', price: '₹999' },
    { title: 'Customer Feedback System', price: '₹1999' },
    { title: 'Analytics Dashboard', price: '₹999' },
    { title: 'Unlimited Scans', price: '₹999' },
    { title: '1 Year Support', price: '₹999' },
  ];

  return (
    <section id="pricing" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-2">What You Get</h2>
          <p className="text-gray-600 text-lg">Complete review management system with everything you need</p>
        </div>

        <div className="max-w-2xl mx-auto bg-white rounded-2xl border-2 border-blue-600 p-8">
          <div className="space-y-4 mb-8">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center justify-between pb-4 border-b border-gray-200 last:border-b-0">
                <div className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="font-semibold text-gray-900">{feature.title}</span>
                </div>
                <span className="text-gray-600">{feature.price}</span>
              </div>
            ))}
          </div>

          <div className="bg-gray-50 rounded-lg p-6 mb-8">
            <div className="flex justify-between items-baseline mb-2">
              <span className="text-gray-700">Total Value:</span>
              <span className="text-3xl font-bold text-gray-900">₹6999</span>
            </div>
          </div>

          <div className="bg-green-500 text-white rounded-lg p-8 mb-6 text-center">
            <p className="text-sm font-semibold mb-3">Today's Price:</p>
            <div className="flex items-baseline justify-center gap-3 mb-4">
              <span className="text-5xl font-bold">₹2499</span>
              <span className="text-sm font-semibold">/Year</span>
            </div>
            <p className="text-sm font-semibold">Save ₹4500</p>
            <div className="bg-green-600 px-3 py-1 rounded-full text-xs font-bold inline-block mt-2">
              64% OFF
            </div>
          </div>

          <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-lg font-bold text-lg transition-all duration-300 transform hover:scale-105 mb-4">
            Subscribe Now - Save ₹4500
          </button>

          <p className="text-center text-sm text-gray-600">
            ✓ 30-day money-back guarantee
          </p>
        </div>
      </div>
    </section>
  );
}