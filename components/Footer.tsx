export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center text-white font-bold">
                RQ
              </div>
              <span className="font-bold text-lg text-white">ReviewBadhao QR</span>
            </div>
            <p className="text-gray-400 text-sm">
              Smart review management system for modern businesses. Improve your Google ratings and capture customer feedback.
            </p>
            <div className="flex gap-3 mt-4">
              <a href="#" className="bg-green-500 text-white p-2 rounded-full hover:bg-green-600 transition">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.5 4a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm0 4a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm0 4a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                </svg>
              </a>
              <a href="#" className="bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700 transition">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.5 4a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                </svg>
              </a>
              <a href="#" className="bg-red-600 text-white p-2 rounded-full hover:bg-red-700 transition">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.5 4a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#home" className="hover:text-green-400 transition">
                  Home
                </a>
              </li>
              <li>
                <a href="#how-it-works" className="hover:text-green-400 transition">
                  How It Works
                </a>
              </li>
              <li>
                <a href="#benefits" className="hover:text-green-400 transition">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-green-400 transition">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-green-400 transition">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold text-white mb-4">Contact Us</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="tel:+919876543210" className="flex items-center gap-2 hover:text-green-400 transition">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773c.55 1.694 2.333 3.476 4.028 4.025l.773-1.548a1 1 0 011.06-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  +91 98765 43210
                </a>
              </li>
              <li>
                <a href="mailto:reviewbadhao@gmail.com" className="flex items-center gap-2 hover:text-green-400 transition">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                  rivewbadhao@gmail.com
                </a>
              </li>
              <li>
                <a href="tel:+917554937509" className="flex items-center gap-2 hover:text-green-400 transition">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                 +917554937509
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-bold text-white mb-4">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-green-400 transition">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-400 transition">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-400 transition">
                  Refund Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-400 transition">
                  Cookie Policy
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
            <p>© 2026 Review QR. All rights reserved. Made with ❤️ for Indian businesses.</p>
            <p>ReviewBadhao QR - Smart reviewbadhao management system for modern businesses</p>
          </div>
        </div>
      </div>
    </footer>
  );
}