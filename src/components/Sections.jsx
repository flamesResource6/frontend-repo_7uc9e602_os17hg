import React from 'react';
import { motion } from 'framer-motion';
import { Coffee, IceCream2, Sandwich, CupSoda, Leaf, Truck, ShieldCheck, Recycle, Sparkles, Star, Heart } from 'lucide-react';

const SectionTitle = ({ title, subtitle }) => (
  <div className="text-center mb-10">
    <h2 className="text-3xl md:text-4xl font-extrabold text-[#5A3E2B]">{title}</h2>
    {subtitle && <p className="mt-2 text-[#7b5b45]">{subtitle}</p>}
  </div>
);

export const PopularCategories = () => {
  const items = [
    { icon: <CupSoda />, label: 'Drinks & Beverages' },
    { icon: <IceCream2 />, label: 'Milkshakes' },
    { icon: <Coffee />, label: 'Coffees' },
    { icon: <Sparkles />, label: 'Desserts' },
    { icon: <Sandwich />, label: 'Sandwiches' },
    { icon: <Leaf />, label: 'Seasonal Items' },
  ];
  return (
    <section id="popular" className="bg-[#F5E4D2] py-16">
      <div className="mx-auto max-w-7xl px-6">
        <SectionTitle title="Popular Categories" subtitle="Curated sips and bites everyone loves" />
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {items.map((it, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -4 }}
              className="rounded-2xl p-4 bg-white/70 backdrop-blur shadow-[0_10px_30px_rgba(90,62,43,0.08)] text-center text-[#5A3E2B]"
            >
              <div className="mx-auto mb-2 h-10 w-10 grid place-items-center rounded-xl bg-gradient-to-br from-[#FFF7EC] to-[#F5E4D2] text-[#5A3E2B]">{it.icon}</div>
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
    { name: 'Honey Citrus Tea', price: '$5.90', tag: 'Save 10%', img: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?q=80&w=800&auto=format&fit=crop' },
    { name: 'Caramel Latte', price: '$6.50', tag: 'Hot', img: 'https://images.unsplash.com/photo-1517705008128-361805f42e86?q=80&w=800&auto=format&fit=crop' },
    { name: 'Matcha Cream Boba', price: '$6.90', tag: 'New', img: 'https://images.unsplash.com/photo-1635830625698-cbdb0a3bddb5?q=80&w=800&auto=format&fit=crop' },
    { name: 'Chocolate Milkshake', price: '$6.20', tag: 'Deal', img: 'https://images.unsplash.com/photo-1526318472351-c75fcf070305?q=80&w=800&auto=format&fit=crop' },
  ];
  return (
    <section className="py-16 bg-gradient-to-br from-[#FCE7E9] via-[#FFE6DE] to-[#FFF7EC]">
      <div className="mx-auto max-w-7xl px-6">
        <SectionTitle title="Featured Sips" subtitle="Slide through our most-loved picks" />
        <div className="flex gap-6 overflow-x-auto pb-4 snap-x">
          {products.map((p, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -6, scale: 1.01 }}
              className="min-w-[260px] snap-start bg-white/60 backdrop-blur rounded-3xl shadow-[0_20px_60px_rgba(90,62,43,0.14)] overflow-hidden"
            >
              <div className="h-40 w-full overflow-hidden">
                <img src={p.img} alt={p.name} className="h-full w-full object-cover" />
              </div>
              <div className="p-4 text-[#5A3E2B]">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold">{p.name}</h3>
                  <span className="text-sm px-2 py-1 rounded-full bg-gradient-to-br from-[#FFC83A] to-[#FF9E33] text-white">{p.tag}</span>
                </div>
                <div className="mt-3 flex items-center justify-between">
                  <p className="font-bold">{p.price}</p>
                  <button className="px-3 py-2 rounded-xl bg-[#5A3E2B] text-white text-sm hover:bg-[#6c4b36]">Add to cart</button>
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
    { name: 'Cocoa Honey Shake', tag: 'New • Trending', img: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?q=80&w=900&auto=format&fit=crop' },
    { name: 'Sunrise Fruit Tea', tag: 'New • Trending', img: 'https://images.unsplash.com/photo-1560508170-59fc0e8546b3?q=80&w=900&auto=format&fit=crop' },
  ];
  return (
    <section id="new" className="py-16 bg-[#FFF7EC]">
      <div className="mx-auto max-w-7xl px-6">
        <SectionTitle title="Limited Editions" subtitle="Small batches. Big flavor splashes." />
        <div className="grid md:grid-cols-2 gap-6">
          {items.map((it, idx) => (
            <motion.div key={idx} whileHover={{ y: -6 }} className="rounded-3xl overflow-hidden bg-white shadow-[0_20px_60px_rgba(90,62,43,0.12)]">
              <div className="h-64">
                <img src={it.img} alt={it.name} className="h-full w-full object-cover" />
              </div>
              <div className="p-5 text-[#5A3E2B] flex items-center justify-between">
                <div>
                  <h3 className="font-bold text-lg">{it.name}</h3>
                  <p className="text-sm text-[#7b5b45]">{it.tag}</p>
                </div>
                <span className="px-3 py-1 rounded-full bg-gradient-to-br from-[#FFC83A] to-[#FF9E33] text-white text-sm">Trending</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const DealBanner = () => (
  <section className="py-10 bg-[#F5E4D2]">
    <div className="mx-auto max-w-7xl px-6">
      <div className="relative overflow-hidden rounded-3xl p-8 md:p-12 bg-gradient-to-br from-[#EBD6C0] to-[#DCC7B2] text-[#5A3E2B] shadow-[0_20px_60px_rgba(90,62,43,0.12)]">
        <div className="absolute -bottom-10 left-0 right-0 h-24 opacity-30 bg-[url('https://images.unsplash.com/photo-1512568400610-62da28bc8a13?q=80&w=1600&auto=format&fit=crop')] bg-cover" />
        <div className="relative z-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <h3 className="text-2xl md:text-3xl font-extrabold">Shop In-Store 50% OFF / Today Only!</h3>
            <p className="mt-2 text-[#7b5b45]">Limited hours. Premium beans, hand-pulled shots, mesmerizing swirls.</p>
          </div>
          <a href="#menu" className="inline-flex items-center justify-center px-6 py-3 rounded-2xl text-white font-semibold shadow-[0_12px_40px_rgba(255,152,33,0.35)] bg-gradient-to-br from-[#FFC83A] to-[#FF9E33]">Grab Deal</a>
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
    <section id="about" className="py-16 bg-[#FFF7EC]">
      <div className="mx-auto max-w-7xl px-6">
        <SectionTitle title="Why We’re Different" subtitle="Crafted clean. Sourced kindly. Served warmly." />
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {usps.map((u, i) => (
            <div key={i} className="rounded-2xl p-5 bg-white/70 backdrop-blur shadow-[0_10px_30px_rgba(90,62,43,0.08)] text-[#5A3E2B] text-center">
              <div className="mx-auto mb-2 h-10 w-10 grid place-items-center rounded-xl bg-gradient-to-br from-[#FFF7EC] to-[#F5E4D2]">{u.icon}</div>
              <p className="font-semibold">{u.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const Testimonials = () => {
  const reviews = [
    { name: 'Ava C.', text: 'The honey shades, the smooth textures—everything tastes as good as it looks.', rating: 5 },
    { name: 'Leo J.', text: 'Finally, a café that feels premium without being pretentious. The matcha boba is insane.', rating: 5 },
  ];
  return (
    <section id="reviews" className="py-16 bg-gradient-to-br from-white to-[#FCE7E9]">
      <div className="mx-auto max-w-7xl px-6 grid md:grid-cols-2 gap-8 items-center">
        <div className="space-y-4">
          {reviews.map((r, i) => (
            <div key={i} className="rounded-3xl p-6 bg-white/70 backdrop-blur shadow-[0_20px_60px_rgba(90,62,43,0.12)] text-[#5A3E2B]">
              <div className="flex items-center gap-2 mb-2">
                {Array.from({ length: r.rating }).map((_, idx) => <Star key={idx} className="text-[#FFC83A]" fill="#FFC83A" size={18} />)}
              </div>
              <p className="text-[#5A3E2B]">“{r.text}”</p>
              <p className="mt-2 text-sm text-[#7b5b45]">— {r.name}</p>
            </div>
          ))}
        </div>
        <div className="relative h-80 md:h-full rounded-3xl overflow-hidden">
          <img src="https://images.unsplash.com/photo-1520880867055-1e30d1cb001c?q=80&w=1200&auto=format&fit=crop" alt="Smiling customer" className="h-full w-full object-cover" />
          <div className="absolute top-4 right-4 rounded-full bg-white/80 px-3 py-1 text-[#5A3E2B] flex items-center gap-1 shadow">
            <Heart size={16} className="text-[#FF9E33]" /> Loved by 10k+
          </div>
        </div>
      </div>
    </section>
  );
};

export const Footer = () => (
  <footer className="bg-[#2E221A] text-[#FFF7EC] pt-12">
    <div className="mx-auto max-w-7xl px-6 grid md:grid-cols-4 gap-8">
      <div>
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-[#FFC83A] to-[#FF9E33]" />
          <p className="text-lg font-semibold">YellowBee</p>
        </div>
        <p className="mt-3 text-sm text-[#E7D8C7]">Warm, fresh, and crafted with love. Join our newsletter for seasonal drops.</p>
      </div>
      <div>
        <h4 className="font-semibold mb-3">Quick Links</h4>
        <ul className="space-y-2 text-sm text-[#E7D8C7]">
          <li><a href="#menu" className="hover:text-white">Menu</a></li>
          <li><a href="#popular" className="hover:text-white">Popular</a></li>
          <li><a href="#new" className="hover:text-white">New</a></li>
          <li><a href="#reviews" className="hover:text-white">Reviews</a></li>
        </ul>
      </div>
      <div>
        <h4 className="font-semibold mb-3">Contact</h4>
        <p className="text-sm text-[#E7D8C7]">hello@yellowbee.cafe</p>
        <p className="text-sm text-[#E7D8C7]">+1 (555) 123‑4567</p>
      </div>
      <div>
        <h4 className="font-semibold mb-3">Newsletter</h4>
        <div className="flex gap-2">
          <input className="flex-1 rounded-xl bg-white/10 border border-white/20 px-3 py-2 text-sm placeholder:text-[#E7D8C7]" placeholder="Email address" />
          <button className="px-4 py-2 rounded-xl bg-gradient-to-br from-[#FFC83A] to-[#FF9E33] text-[#2E221A] font-semibold">Join</button>
        </div>
      </div>
    </div>
    <div className="mt-8 border-t border-white/10">
      <div className="mx-auto max-w-7xl px-6 py-6 text-xs text-[#E7D8C7]">© 2025 YellowBee Café. All rights reserved.</div>
    </div>
  </footer>
);
