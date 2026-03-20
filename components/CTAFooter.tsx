import Link from 'next/link';
import Countdown from './Countdown';

export default function CTAFooter() {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-20">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-5xl font-bold mb-4">Start Improving Your Google Rating Today</h2>
        <p className="text-xl text-blue-100 mb-8">
          Join thousands of businesses using Review QR to build better reputations
        </p>

        <div className="bg-white text-gray-900 rounded-lg p-8 max-w-2xl mx-auto mb-8">
          <div className="text-center mb-6">
            <p className="text-gray-600 text-sm mb-2">Regular Price:</p>
            <span className="text-2xl line-through text-gray-500">₹6999</span>
          </div>

          <div className="text-center mb-6">
            <p className="text-gray-600 text-sm mb-2">Today's Price:</p>
            <div className="flex items-baseline justify-center gap-2 mb-2">
              <span className="text-5xl font-bold text-green-500">₹2499</span>
              <span className="text-2xl text-gray-600">/Year</span>
            </div>
            <div className="inline-block bg-red-500 text-white px-4 py-1 rounded-full text-sm font-bold">
              64% OFF
            </div>
          </div>

          <div className="bg-red-500 text-white rounded-lg p-6 mb-6">
            <p className="text-sm font-semibold mb-3">⏱ Offer expires in:</p>
            <Countdown />
          </div>

          <div className="grid md:grid-cols-2 gap-4">
               <Link href="https://www.reviewbadhao.com" className="bg-green-500 hover:bg-green-600 text-white py-4 px-6 rounded-lg font-bold text-lg transition-all duration-300 transform hover:scale-105">
              Subscribe Now
            </Link>
               <Link href="https://www.reviewbadhao.com" className="bg-gray-800 hover:bg-gray-900 text-white py-4 px-6 rounded-lg font-bold text-lg transition-all duration-300">
              Contact Sales
            </Link>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-center items-center gap-8 text-blue-100">
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
            <span>Setup in 5 minutes</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
            <span>No technical skills needed</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
            <span>30-day money-back guarantee</span>
          </div>
        </div>
      </div>
    </section>
  );
}