import React from 'react';
import { motion } from 'framer-motion';
import { Coffee, IceCream2, Sandwich, CupSoda, Leaf, Truck, ShieldCheck, Recycle, Sparkles, Star, Heart } from 'lucide-react';

const SectionTitle = ({ title, subtitle, dark }) => (
  <div className="text-center mb-10">
    <h2 className={`text-3xl md:text-4xl font-extrabold ${dark ? 'text-white' : 'text-slate-900'}`}>{title}</h2>
    {subtitle && <p className={`mt-2 ${dark ? 'text-white/70' : 'text-slate-600'}`}>{subtitle}</p>}
  </div>
);

export const PopularCategories = () => {
  const items = [
    { icon: <CupSoda />, label: 'Iced & Sparkling' },
    { icon: <IceCream2 />, label: 'Milkshakes' },
    { icon: <Coffee />, label: 'Coffees' },
    { icon: <Sparkles />, label: 'Desserts' },
    { icon: <Sandwich />, label: 'Brunch Bites' },
    { icon: <Leaf />, label: 'Wellness Teas' },
  ];
  return (
    <section id="popular" className="bg-slate-900 py-16">
      <div className="mx-auto max-w-7xl px-6">
        <SectionTitle dark title="Popular Categories" subtitle="Designed pairings for every mood" />
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {items.map((it, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -4 }}
              className="rounded-2xl p-4 bg-white/5 border border-white/10 backdrop-blur text-white/90 text-center"
            >
              <div className="mx-auto mb-2 h-10 w-10 grid place-items-center rounded-xl bg-white/10 text-white">{it.icon}</div>
              <p className="text-sm font-medium">{it.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const FeaturedSlider = () => {
  const products = [
    { name: 'Nitro Cold Brew', price: '$5.90', tag: 'Save 10%', img: 'https://images.unsplash.com/photo-1461988091159-192b6df7054f?q=80&w=1200&auto=format&fit=crop' },
    { name: 'Matcha Cream Boba', price: '$6.90', tag: 'New', img: 'https://images.unsplash.com/photo-1635830625698-cbdb0a3bddb5?q=80&w=1200&auto=format&fit=crop' },
    { name: 'Citrus Sparkler', price: '$5.50', tag: 'Hot', img: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?q=80&w=1200&auto=format&fit=crop' },
    { name: 'Caramel Latte', price: '$6.50', tag: 'Deal', img: 'https://images.unsplash.com/photo-1517705008128-361805f42e86?q=80&w=1200&auto=format&fit=crop' },
  ];
  return (
    <section className="py-16 bg-gradient-to-b from-slate-900 to-slate-800">
      <div className="mx-auto max-w-7xl px-6">
        <SectionTitle dark title="Featured Sips" subtitle="Most-loved picks, curated by our baristas" />
        <div className="flex gap-6 overflow-x-auto pb-4 snap-x">
          {products.map((p, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -6, scale: 1.01 }}
              className="min-w-[280px] snap-start bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.35)] overflow-hidden"
            >
              <div className="h-48 w-full overflow-hidden">
                <img src={p.img} alt={p.name} className="h-full w-full object-cover" />
              </div>
              <div className="p-4 text-white/90">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold text-white">{p.name}</h3>
                  <span className="text-xs px-2 py-1 rounded-full bg-gradient-to-br from-emerald-400 to-teal-500 text-slate-900 font-semibold">{p.tag}</span>
                </div>
                <div className="mt-3 flex items-center justify-between">
                  <p className="font-bold text-white">{p.price}</p>
                  <button className="px-3 py-2 rounded-xl bg-white/10 border border-white/10 text-white text-sm hover:bg-white/15">Add to cart</button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const NewArrivals = () => {
  const items = [
    { name: 'Black Sesame Latte', tag: 'New • Limited', img: 'https://images.unsplash.com/photo-1561883088-039e53143d73?q=80&w=1200&auto=format&fit=crop' },
    { name: 'Grapefruit Oolong Fizz', tag: 'New • Seasonal', img: 'https://images.unsplash.com/photo-1551024709-8f23befc6cf7?q=80&w=1200&auto=format&fit=crop' },
  ];
  return (
    <section id="new" className="py-16 bg-slate-800">
      <div className="mx-auto max-w-7xl px-6">
        <SectionTitle dark title="New Arrivals" subtitle="Small batches. Big flavor splashes." />
        <div className="grid md:grid-cols-2 gap-6">
          {items.map((it, idx) => (
            <motion.div key={idx} whileHover={{ y: -6 }} className="rounded-3xl overflow-hidden bg-white/5 border border-white/10 backdrop-blur-xl shadow-[0_20px_60px_rgba(0,0,0,0.35)]">
              <div className="h-64">
                <img src={it.img} alt={it.name} className="h-full w-full object-cover" />
              </div>
              <div className="p-5 text-white/90 flex items-center justify-between">
                <div>
                  <h3 className="font-bold text-lg text-white">{it.name}</h3>
                  <p className="text-sm text-white/70">{it.tag}</p>
                </div>
                <span className="px-3 py-1 rounded-full bg-gradient-to-r from-emerald-400 to-teal-500 text-slate-950 text-sm font-semibold">Trending</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const DealBanner = () => (
  <section className="py-10 bg-slate-900">
    <div className="mx-auto max-w-7xl px-6">
      <div className="relative overflow-hidden rounded-3xl p-8 md:p-12 bg-white/5 border border-white/10 backdrop-blur-xl text-white/90 shadow-[0_20px_60px_rgba(0,0,0,0.35)]">
        <div className="absolute -bottom-10 left-0 right-0 h-24 opacity-20 bg-[url('https://images.unsplash.com/photo-1512568400610-62da28bc8a13?q=80&w=1600&auto=format&fit=crop')] bg-cover" />
        <div className="relative z-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <h3 className="text-2xl md:text-3xl font-extrabold text-white">Today Only: 50% OFF In-Store</h3>
            <p className="mt-2 text-white/70">Limited hours. Premium beans, hand-pulled shots, mesmerizing swirls.</p>
          </div>
          <a href="#menu" className="inline-flex items-center justify-center px-6 py-3 rounded-2xl text-slate-950 font-semibold shadow-[0_12px_40px_rgba(16,185,129,0.4)] bg-gradient-to-r from-emerald-400 to-teal-500">Grab Deal</a>
        </div>
      </div>
    </div>
  </section>
);

export const WhyDifferent = () => {
  const usps = [
    { icon: <Leaf />, title: 'Fresh Ingredients' },
    { icon: <ShieldCheck />, title: 'No Preservatives' },
    { icon: <Coffee />, title: 'Premium Beans & Tea' },
    { icon: <Truck />, title: 'Fast Delivery' },
    { icon: <Recycle />, title: 'Eco Packaging' },
  ];
  return (
    <section id="about" className="py-16 bg-slate-900">
      <div className="mx-auto max-w-7xl px-6">
        <SectionTitle dark title="Why We’re Different" subtitle="Crafted clean. Sourced kindly. Served flawlessly." />
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {usps.map((u, i) => (
            <div key={i} className="rounded-2xl p-5 bg-white/5 border border-white/10 backdrop-blur text-white/90 text-center">
              <div className="mx-auto mb-2 h-10 w-10 grid place-items-center rounded-xl bg-white/10 text-white">{u.icon}</div>
              <p className="font-semibold text-white">{u.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const Testimonials = () => {
  const reviews = [
    { name: 'Ava C.', text: 'The nitro is silky and the design aesthetic is chef’s kiss.', rating: 5 },
    { name: 'Leo J.', text: 'Premium vibes without the pretense. Matcha boba is unreal.', rating: 5 },
  ];
  return (
    <section id="reviews" className="py-16 bg-slate-800">
      <div className="mx-auto max-w-7xl px-6 grid md:grid-cols-2 gap-8 items-center">
        <div className="space-y-4">
          {reviews.map((r, i) => (
            <div key={i} className="rounded-3xl p-6 bg-white/5 border border-white/10 backdrop-blur text-white/90">
              <div className="flex items-center gap-2 mb-2">
                {Array.from({ length: r.rating }).map((_, idx) => <Star key={idx} className="text-emerald-400" fill="#34d399" size={18} />)}
              </div>
              <p className="text-white">“{r.text}”</p>
              <p className="mt-2 text-sm text-white/70">— {r.name}</p>
            </div>
          ))}
        </div>
        <div className="relative h-80 md:h-full rounded-3xl overflow-hidden">
          <img src="https://images.unsplash.com/photo-1520880867055-1e30d1cb001c?q=80&w=1200&auto=format&fit=crop" alt="Happy customer" className="h-full w-full object-cover" />
          <div className="absolute top-4 right-4 rounded-full bg-white/10 border border-white/10 px-3 py-1 text-white/90 backdrop-blur flex items-center gap-1 shadow">
            <Heart size={16} className="text-emerald-400" /> Loved by 10k+
          </div>
        </div>
      </div>
    </section>
  );
};

export const Footer = () => (
  <footer className="bg-slate-950 text-white pt-12">
    <div className="mx-auto max-w-7xl px-6 grid md:grid-cols-4 gap-8">
      <div>
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-emerald-400 to-teal-500" />
          <p className="text-lg font-semibold">Cafe Nimbus</p>
        </div>
        <p className="mt-3 text-sm text-white/70">Design-first coffee and beverage house. Join our newsletter for seasonal drops.</p>
      </div>
      <div>
        <h4 className="font-semibold mb-3">Quick Links</h4>
        <ul className="space-y-2 text-sm text-white/70">
          <li><a href="#menu" className="hover:text-white">Menu</a></li>
          <li><a href="#popular" className="hover:text-white">Popular</a></li>
          <li><a href="#new" className="hover:text-white">New</a></li>
          <li><a href="#reviews" className="hover:text-white">Reviews</a></li>
        </ul>
      </div>
      <div>
        <h4 className="font-semibold mb-3">Contact</h4>
        <p className="text-sm text-white/70">hello@cafenimbus.com</p>
        <p className="text-sm text-white/70">+1 (555) 123‑4567</p>
      </div>
      <div>
        <h4 className="font-semibold mb-3">Newsletter</h4>
        <div className="flex gap-2">
          <input className="flex-1 rounded-xl bg-white/5 border border-white/10 px-3 py-2 text-sm placeholder:text-white/50" placeholder="Email address" />
          <button className="px-4 py-2 rounded-xl bg-gradient-to-r from-emerald-400 to-teal-500 text-slate-950 font-semibold">Join</button>
        </div>
      </div>
    </div>
    <div className="mt-8 border-t border-white/10">
      <div className="mx-auto max-w-7xl px-6 py-6 text-xs text-white/60">© 2025 Cafe Nimbus. All rights reserved.</div>
    </div>
  </footer>
);
