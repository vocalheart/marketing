'use client';

import Link from 'next/link';
import { useState } from 'react';
import Image from 'next/image';

// ✅ Correct way to use image from public folder
import logo from '@/public/ReviewBadhaoLogo.png';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">

        {/* Logo */}
        <div className="flex items-center gap-2">
          <Image src={logo} width={70} height={50} alt="Review Badhao Logo" />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <a href="#home" className="text-gray-700 hover:text-blue-600 transition">Home</a>
          <a href="#how-it-works" className="text-gray-700 hover:text-blue-600 transition">How It Works</a>
          <a href="#benefits" className="text-gray-700 hover:text-blue-600 transition">Benefits</a>
          <a href="#pricing" className="text-gray-700 hover:text-blue-600 transition">Pricing</a>
          <a href="#faq" className="text-gray-700 hover:text-blue-600 transition">FAQ</a>
          <a href="#contact" className="text-gray-700 hover:text-blue-600 transition">Contact</a>
        </nav>

        {/* Subscribe Button */}
        <Link
          href="https://www.reviewbadhao.com"
          target="_blank"
          className="hidden md:block bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-lg font-medium transition-all duration-300 transform hover:scale-105"
        >
          Subscribe Now
        </Link>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 py-4 px-4">
          <nav className="flex flex-col gap-4">
            <a href="#home" className="text-gray-700 hover:text-blue-600">Home</a>
            <a href="#how-it-works" className="text-gray-700 hover:text-blue-600">How It Works</a>
            <a href="#benefits" className="text-gray-700 hover:text-blue-600">Benefits</a>
            <a href="#pricing" className="text-gray-700 hover:text-blue-600">Pricing</a>
            <a href="#faq" className="text-gray-700 hover:text-blue-600">FAQ</a>
            <a href="#contact" className="text-gray-700 hover:text-blue-600">Contact</a>

            <Link
              href="https://www.reviewbadhao.com"
              target="_blank"
              className="bg-green-500 text-white px-4 py-2 rounded-lg w-full text-center"
            >
              Subscribe Now
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}