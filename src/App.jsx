import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import { PopularCategories, FeaturedSlider, NewArrivals, DealBanner, WhyDifferent, Testimonials, Footer } from './components/Sections';

function App() {
  return (
    <div className="min-h-screen bg-slate-900">
      <Navbar />
      <Hero />
      <PopularCategories />
      <FeaturedSlider />
      <NewArrivals />
      <DealBanner />
      <WhyDifferent />
      <Testimonials />
      <Footer />

      {/* Sticky Order Now bar on mobile */}
      <div className="fixed bottom-4 left-0 right-0 px-4 md:hidden">
        <a href="#menu" className="block mx-auto max-w-md text-center px-6 py-3 rounded-2xl text-slate-950 font-semibold shadow-[0_12px_40px_rgba(16,185,129,0.4)] bg-gradient-to-r from-emerald-400 to-teal-500">Order Now</a>
      </div>
    </div>
  );
}

export default App;
