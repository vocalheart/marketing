import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Problems from '@/components/Problems';
import HowItWorks from '@/components/HowItWorks';
import Features from '@/components/Features';
import ActionSection from '@/components/ActionSection';
import Industries from '@/components/Industries';
import AnalyticsDashboard from '@/components/AnalyticsDashboard';
import Comparison from '@/components/Comparison';
import WhatYouGet from '@/components/WhatYouGet';
import PricingCard from '@/components/PricingCard';
import SuccessStories from '@/components/SuccessStories';
import FAQ from '@/components/FAQ';
import CTAFooter from '@/components/CTAFooter';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Problems />
      <HowItWorks />
      <Features />
      <ActionSection />
      <Industries />
      <AnalyticsDashboard />
      <Comparison />
      <WhatYouGet />
      <PricingCard />
      <SuccessStories />
      <FAQ />
      <CTAFooter />
      <Footer />
    </main>
  );
}