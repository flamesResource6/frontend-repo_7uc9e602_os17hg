import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import { PopularCategories, FeaturedSlider, NewArrivals, DealBanner, WhyDifferent, Testimonials, Footer } from './components/Sections';

function App() {
  return (
    <div className="min-h-screen bg-[#FFF7EC]">
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
        <a href="#menu" className="block mx-auto max-w-md text-center px-6 py-3 rounded-2xl text-white font-semibold shadow-[0_12px_40px_rgba(255,152,33,0.45)] bg-gradient-to-br from-[#FFC83A] to-[#FF9E33]">Order Now</a>
      </div>
    </div>
  );
}

export default App;
