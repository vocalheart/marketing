export default function AnalyticsDashboard() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-2">Powerful Analytics Dashboard</h2>
          <p className="text-gray-600 text-lg">Track every review and feedback in real-time</p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-2xl font-bold">Analytics Overview</h3>
            <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-semibold">
              Live Data
            </span>
          </div>

          {/* Stats Grid */}
          <div className="grid md:grid-cols-4 gap-6 mb-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-center justify-between mb-2">
                <span className="text-gray-600 text-sm">Total Scans</span>
                <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4z" />
                </svg>
              </div>
              <div className="text-3xl font-bold">1,247</div>
            </div>

            <div className="bg-green-50 p-6 rounded-lg">
              <div className="flex items-center justify-between mb-2">
                <span className="text-gray-600 text-sm">Positive Reviews</span>
                <svg className="w-6 h-6 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5z" />
                </svg>
              </div>
              <div className="text-3xl font-bold text-green-600">892</div>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg">
              <div className="flex items-center justify-between mb-2">
                <span className="text-gray-600 text-sm">Private Feedback</span>
                <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 5a2 2 0 012-2h12a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V5z" />
                </svg>
              </div>
              <div className="text-3xl font-bold text-blue-600">355</div>
            </div>

            <div className="bg-yellow-50 p-6 rounded-lg">
              <div className="flex items-center justify-between mb-2">
                <span className="text-gray-600 text-sm">Avg Rating</span>
                <span className="text-2xl">⭐</span>
              </div>
              <div className="text-3xl font-bold text-yellow-600">4.6</div>
            </div>
          </div>

          {/* Recent Comments */}
          <div>
            <h4 className="font-bold text-gray-900 mb-4">Recent Customer Comments</h4>

            <div className="space-y-4">
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-green-500">✓</span>
                  <span className="text-yellow-400">★★★★★</span>
                </div>
                <p className="text-gray-700">"Excellent service! Highly recommended."</p>
              </div>

              <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-blue-500">💬</span>
                  <span className="text-yellow-400">★★★</span>
                </div>
                <p className="text-gray-700">"Service was good but waiting time was long."</p>
              </div>

              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-green-500">✓</span>
                  <span className="text-yellow-400">★★★★★</span>
                </div>
                <p className="text-gray-700">"Amazing experience! Will visit again."</p>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-8">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-bold transition-all duration-300 transform hover:scale-105">
            Access Dashboard
          </button>
        </div>
      </div>
    </section>
  );
}