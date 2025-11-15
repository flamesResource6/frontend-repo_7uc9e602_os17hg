import React from 'react';
import { Menu, Search, ShoppingBag } from 'lucide-react';

const Navbar = () => {
  return (
    <header className="sticky top-0 z-40">
      <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between rounded-b-3xl backdrop-blur-lg bg-black/20 border-b border-white/10">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-emerald-400 to-teal-500 shadow-[0_10px_30px_rgba(16,185,129,0.35)]" />
          <div className="leading-tight">
            <p className="text-lg font-semibold text-white">Cafe Nimbus</p>
            <p className="text-xs text-white/60">Brews • Boba • Brunch</p>
          </div>
        </div>
        <nav className="hidden md:flex items-center gap-8 text-white/80">
          <a className="hover:text-white transition-colors" href="#menu">Menu</a>
          <a className="hover:text-white transition-colors" href="#popular">Popular</a>
          <a className="hover:text-white transition-colors" href="#new">New</a>
          <a className="hover:text-white transition-colors" href="#about">Why Us</a>
          <a className="hover:text-white transition-colors" href="#reviews">Reviews</a>
        </nav>
        <div className="flex items-center gap-3">
          <button className="hidden md:flex items-center gap-2 px-3 py-2 rounded-xl bg-white/10 text-white/80 border border-white/10 hover:bg-white/15 transition-all">
            <Search size={18} />
            <span className="text-sm">Search</span>
          </button>
          <button className="relative p-2 rounded-xl bg-white/10 text-white/90 border border-white/10 hover:bg-white/15 transition-all">
            <ShoppingBag size={20} />
            <span className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-gradient-to-br from-emerald-400 to-teal-500 text-[10px] text-white grid place-items-center shadow" aria-label="items in cart">2</span>
          </button>
          <a href="#menu" className="hidden md:inline-flex items-center px-4 py-2 rounded-xl bg-gradient-to-r from-emerald-400 to-teal-500 text-slate-950 font-semibold shadow-[0_12px_40px_rgba(16,185,129,0.35)]">Order</a>
          <button className="md:hidden p-2 rounded-xl bg-white/10 text-white/80 border border-white/10">
            <Menu />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
