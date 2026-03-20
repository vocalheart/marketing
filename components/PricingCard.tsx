import Link from 'next/link';
import Countdown from './Countdown';

export default function PricingCard() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-2">Simple, Transparent Pricing</h2>
          <p className="text-gray-600 text-lg">Everything you need to transform your online reputation</p>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="bg-blue-600 text-white rounded-2xl p-8 border-4 border-blue-700">
            <div className="absolute -top-4 -right-4 bg-red-500 text-white px-4 py-1 rounded-full font-bold text-sm">
              LIMITED OFFER
            </div>

            <h3 className="text-3xl font-bold mb-4">Review QR Pro</h3>
            <p className="text-blue-100 mb-6">Complete Review Management Solution</p>

            <div className="flex items-baseline gap-3 mb-4">
              <span className="text-5xl font-bold">₹2499</span>
              <span className="text-lg line-through text-blue-200">₹6999</span>
              <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">64% OFF</span>
            </div>

            <p className="text-blue-100 mb-8">/ Year</p>

            {/* Features */}
            <div className="space-y-4 mb-8">
              {[
                'Custom QR Code with your branding',
                'Unlimited QR scans per month',
                'Smart Google redirect system',
                'Private feedback collection',
                'Real-time analytics dashboard',
                'Email notifications',
                '1 year full access',
                'Priority customer support',
                'Setup in just 5 minutes',
              ].map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-green-300" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="font-medium">{feature}</span>
                </div>
              ))}
            </div>

               <Link href="https://www.reviewbadhao.com" className="w-full bg-green-500 hover:bg-green-600 text-white py-4 rounded-lg font-bold text-lg transition-all duration-300 transform hover:scale-105 mb-6">
              Subscribe Now
            </Link>

            {/* Countdown Timer */}
            <div className="bg-red-600 text-white rounded-lg p-6 text-center">
              <p className="text-sm font-semibold mb-3">⏱ This offer expires in:</p>
              <Countdown />
            </div>

            <p className="text-center text-blue-200 text-sm mt-6">
              ✓ 30-day money-back guarantee
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}