import React from 'react';
import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

// New visual direction: professional, high-contrast, cinematic hero
// Palette: charcoal -> slate gradient, neon-emerald accent, subtle glass

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-900">
      {/* Ambient gradient orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-24 -right-24 h-[520px] w-[520px] rounded-full bg-emerald-500/20 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 h-[420px] w-[420px] rounded-full bg-teal-400/20 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-6 pt-24 pb-14 grid md:grid-cols-2 gap-10 items-center">
        {/* Copy */}
        <div className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/70"
          >
            <span className="h-2 w-2 rounded-full bg-gradient-to-br from-emerald-400 to-teal-500" />
            Now Brewing: limited-edition single-origin lots
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25 }}
            className="mt-6 text-4xl md:text-6xl font-extrabold tracking-tight text-white"
          >
            Cafe Nimbus
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 }}
            className="mt-4 text-white/70 text-lg md:text-xl leading-relaxed max-w-xl"
          >
            Elevated coffee and crafted beverages with a design-first experience. Signature pours, seasonal boba, and chef-made bites—served fresh, fast, and flawlessly.
          </motion.p>

          {/* Primary actions */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45 }}
            className="mt-8 flex flex-wrap items-center gap-4"
          >
            <a
              href="#menu"
              className="inline-flex items-center justify-center px-6 py-3 rounded-2xl text-slate-950 font-semibold shadow-[0_12px_40px_rgba(16,185,129,0.4)] bg-gradient-to-r from-emerald-400 to-teal-500 hover:scale-[1.02] active:scale-[0.99] transition-transform"
            >
              Order Now
            </a>
            <a
              href="#popular"
              className="inline-flex items-center justify-center px-6 py-3 rounded-2xl font-semibold text-white/90 border border-white/15 bg-white/5 hover:bg-white/10 transition-colors"
            >
              View Menu
            </a>
            <a
              href="#locations"
              className="inline-flex items-center justify-center px-6 py-3 rounded-2xl font-semibold text-white/90 border border-white/15 bg-white/5 hover:bg-white/10 transition-colors"
            >
              Find a Store
            </a>
          </motion.div>

          {/* Trust bar */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55 }}
            className="mt-8 grid grid-cols-3 gap-3 text-center"
          >
            {[
              ['4.9★', '10k+ Reviews'],
              ['30min', 'Delivery Avg'],
              ['100%', 'Arabica & Real Fruit'],
            ].map(([k, v], i) => (
              <div key={i} className="rounded-2xl border border-white/10 bg-white/5 px-3 py-3 text-white/80">
                <p className="text-xl font-bold text-white">{k}</p>
                <p className="text-xs">{v}</p>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Spline 3D asset inside glass card */}
        <div className="h-[460px] md:h-[560px] w-full relative">
          <div className="absolute inset-0 rounded-[28px] bg-white/5 border border-white/10 backdrop-blur-xl shadow-[0_40px_120px_rgba(0,0,0,0.35)]" />
          <div className="relative h-full w-full rounded-[28px] overflow-hidden">
            <Spline scene="https://prod.spline.design/Tddl75W6Ij9Qp77j/scene.splinecode" style={{ width: '100%', height: '100%' }} />
          </div>
          {/* Floating badges */}
          <div className="absolute -left-3 top-6 md:-left-6 md:top-8">
            <div className="rounded-2xl bg-gradient-to-r from-emerald-400 to-teal-500 text-slate-950 px-3 py-2 text-sm font-semibold shadow-[0_10px_30px_rgba(16,185,129,0.4)]">
              New Arrivals
            </div>
          </div>
          <div className="absolute -right-3 bottom-6 md:-right-6 md:bottom-8">
            <div className="rounded-2xl bg-white/10 border border-white/10 text-white/90 px-3 py-2 text-sm backdrop-blur">
              Free Delivery > $20
            </div>
          </div>
        </div>
      </div>

      {/* Wave divider to next section */}
      <svg className="block w-full" viewBox="0 0 1440 120" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
        <path fill="currentColor" className="text-slate-900" d="M0,80 C240,160 480,0 720,60 C960,120 1200,40 1440,80 L1440,120 L0,120 Z" />
      </svg>
    </section>
  );
};

export default Hero;
