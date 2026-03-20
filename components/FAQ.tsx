'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'How does Review QR work?',
      answer:
        'Display your Review QR code at your business location. When customers scan it, they rate their experience 1-5 stars. Happy customers (4-5 stars) are redirected to Google to leave reviews. Unhappy customers (1-3 stars) provide feedback privately, preventing negative public reviews.',
    },
    {
      question: 'Is this safe to use?',
      answer:
        'Yes, Review QR is completely safe. It uses secure encryption for all data, follows Google guidelines, and does not manipulate reviews. It simply directs satisfied customers to Google and collects negative feedback privately.',
    },
    {
      question: 'Can any business use it?',
      answer:
        'Yes, Review QR works for any business - restaurants, hotels, salons, clinics, gyms, retail shops, offices, institutes, and more. Any business that wants to manage their online reputation can use it.',
    },
    {
      question: 'How fast is setup?',
      answer:
        'Setup takes just 5 minutes! You get your custom QR code, can print it or display it digitally, and start collecting reviews immediately.',
    },
    {
      question: 'What is the price?',
      answer:
        'Review QR Pro is ₹2499 per year (64% off regular price of ₹6999). This includes unlimited scans, analytics dashboard, customer support, and all features.',
    },
    {
      question: 'Is there a limit on scans?',
      answer:
        'No! With Review QR, you get unlimited QR scans per month. Scan as many times as you want without any additional charges.',
    },
  ];

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-2">Frequently Asked Questions</h2>
          <p className="text-gray-600 text-lg">Everything you need to know about Review QR</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
            <Link href="https://www.reviewbadhao.com"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full bg-gray-50 hover:bg-gray-100 px-6 py-4 text-left font-semibold text-gray-900 flex items-center justify-between transition"
              >
                {faq.question}
                <svg
                  className={`w-5 h-5 text-gray-600 transition-transform ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 14l-7 7m0 0l-7-7m7 7V3"
                  />
                </svg>
              </Link>

              {openIndex === index && (
                <div className="px-6 py-4 bg-white border-t border-gray-200">
                  <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Warning Box */}
        <div className="mt-12 bg-red-50 border-2 border-red-200 rounded-lg p-8">
          <div className="flex gap-4">
            <span className="text-4xl">⚠️</span>
            <div>
              <h3 className="font-bold text-red-600 text-lg mb-2">Don't Miss This Limited Time Offer!</h3>
              <p className="text-gray-700 mb-2">
                हर दिन ऐसे हजारों businesses हैं जो अपने negative reviews से परेशान हैं।
              </p>
              <p className="text-gray-700 mb-4">Your negative reviews are costing you customers RIGHT NOW!</p>

              <div className="bg-red-600 text-white rounded-lg p-6 text-center mb-4">
                <p className="text-sm font-semibold mb-3">Time is running out...</p>
                <div className="text-4xl font-bold mb-2">
                  <span>05</span>:<span>09</span>:<span>36</span>
                </div>
                <p className="text-sm">Hours : Minutes : Seconds</p>
              </div>

              <p className="text-center font-bold text-red-600">Only ₹2499 instead of ₹6999</p>
              <p className="text-center text-gray-600 text-sm">Save ₹4500 Today! 11% 64% discount ends soon..</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}