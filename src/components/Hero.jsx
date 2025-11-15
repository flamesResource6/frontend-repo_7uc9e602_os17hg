import React from 'react';
import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-[#FFF7EC]">
      {/* background soft curves */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-20 -right-20 h-[420px] w-[420px] rounded-full bg-gradient-to-br from-[#FFC83A]/50 to-[#FF9E33]/50 blur-3xl opacity-70" />
        <div className="absolute -bottom-24 -left-24 h-[380px] w-[380px] rounded-full bg-gradient-to-tr from-[#F5E4D2]/70 to-[#FFF7EC] blur-2xl" />
      </div>

      <div className="mx-auto max-w-7xl px-6 pt-20 pb-10 md:pt-28 grid md:grid-cols-2 gap-10 items-center">
        <div className="relative z-10">
          <motion.span
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/70 text-[#5A3E2B] shadow-sm"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <span className="h-2 w-2 rounded-full bg-gradient-to-br from-[#FFC83A] to-[#FF9E33]" />
            Fresh • Natural • Crafted with Love
          </motion.span>

          <motion.h1
            className="mt-6 text-4xl md:text-6xl font-extrabold tracking-tight text-[#5A3E2B]"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 }}
          >
            YellowBee Café
          </motion.h1>

          <motion.p
            className="mt-4 text-[#7b5b45] text-lg md:text-xl leading-relaxed max-w-xl"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45 }}
          >
            A premium destination for honey-kissed beverages, artisanal coffees, and glow-up desserts. Minimal design, maximum flavor.
          </motion.p>

          <motion.div
            className="mt-8 flex items-center gap-4"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55 }}
          >
            <a
              href="#menu"
              className="inline-flex items-center justify-center px-6 py-3 rounded-2xl text-white font-semibold shadow-[0_12px_40px_rgba(255,152,33,0.45)] bg-gradient-to-br from-[#FFC83A] to-[#FF9E33] hover:scale-[1.02] active:scale-[0.99] transition-transform"
            >
              Order Now
            </a>
            <a
              href="#popular"
              className="inline-flex items-center justify-center px-6 py-3 rounded-2xl font-semibold text-[#5A3E2B] border border-[#E8D9C7] bg-white/70 hover:bg-white transition-colors"
            >
              View Menu
            </a>
          </motion.div>
        </div>

        {/* Spline 3D asset */}
        <div className="h-[420px] md:h-[520px] w-full relative">
          <div className="absolute inset-0 rounded-[32px] shadow-[0_40px_120px_rgba(90,62,43,0.18)] bg-gradient-to-br from-[#FFF7EC] to-[#F5E4D2]" />
          <div className="relative h-full w-full rounded-[32px] overflow-hidden">
            <Spline scene="https://prod.spline.design/Tddl75W6Ij9Qp77j/scene.splinecode" style={{ width: '100%', height: '100%' }} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
