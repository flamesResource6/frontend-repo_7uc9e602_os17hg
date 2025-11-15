import React from 'react';
import { Menu, Search, ShoppingBag } from 'lucide-react';

const Navbar = () => {
  return (
    <header className="sticky top-0 z-40 backdrop-blur-md/50">
      <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between rounded-b-3xl bg-[#FFF7EC]/70 shadow-[0_8px_30px_rgba(90,62,43,0.08)]">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-[#FFC83A] to-[#FF9E33] shadow-[0_10px_30px_rgba(255,152,33,0.35)]" />
          <div className="leading-tight">
            <p className="text-lg font-semibold text-[#5A3E2B]">YellowBee</p>
            <p className="text-xs text-[#8b6a54]">Fresh • Natural • Crafted</p>
          </div>
        </div>
        <nav className="hidden md:flex items-center gap-8 text-[#5A3E2B]">
          <a className="hover:text-[#FF9E33] transition-colors" href="#menu">Menu</a>
          <a className="hover:text-[#FF9E33] transition-colors" href="#popular">Popular</a>
          <a className="hover:text-[#FF9E33] transition-colors" href="#new">New</a>
          <a className="hover:text-[#FF9E33] transition-colors" href="#about">Why Us</a>
          <a className="hover:text-[#FF9E33] transition-colors" href="#reviews">Reviews</a>
        </nav>
        <div className="flex items-center gap-3">
          <button className="hidden md:flex items-center gap-2 px-3 py-2 rounded-xl bg-white/60 text-[#5A3E2B] shadow-sm hover:shadow transition-all">
            <Search size={18} />
            <span className="text-sm">Search</span>
          </button>
          <button className="relative p-2 rounded-xl bg-white/60 text-[#5A3E2B] shadow-sm hover:shadow transition-all">
            <ShoppingBag size={20} />
            <span className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-gradient-to-br from-[#FFC83A] to-[#FF9E33] text-[10px] text-white grid place-items-center shadow" aria-label="items in cart">2</span>
          </button>
          <button className="md:hidden p-2 rounded-xl bg-white/60 text-[#5A3E2B] shadow-sm">
            <Menu />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
