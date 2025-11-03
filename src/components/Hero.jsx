import React from 'react';
import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';
import { ArrowRight, Phone, Shield, Zap } from 'lucide-react';

const Hero = () => {
  const scrollToBooking = () => {
    const el = document.getElementById('booking');
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-black text-white">
      {/* Spline background */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Gradient vignette overlays */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black/80" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(88,28,135,0.25),transparent_50%)]" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-6xl flex-col items-center justify-center px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1 text-sm text-white/80 backdrop-blur"
        >
          <Zap className="h-4 w-4 text-yellow-400" />
          AI Voice Agents for Contractors
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1 }}
          className="mt-6 font-['Mona_Sans',Inter,ui-sans-serif] text-5xl leading-tight sm:text-6xl md:text-7xl"
        >
          Book More Jobs on Autopilot
          <span className="block bg-gradient-to-r from-violet-300 via-sky-300 to-amber-300 bg-clip-text text-transparent">with a Human-Sounding AI</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="mx-auto mt-5 max-w-2xl text-balance text-white/70"
        >
          We answer every inbound call, follow up with every lead, and book jobs 24/7 — for a fraction of the cost of a full-time dispatcher.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3 }}
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <button
            onClick={scrollToBooking}
            className="group inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 font-medium text-black shadow-xl shadow-violet-500/20 transition hover:scale-[1.02] hover:shadow-violet-400/30"
          >
            Book a Demo
            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-0.5" />
          </button>

          <a href="#proof" className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm text-white/80 backdrop-blur transition hover:bg-white/10">
            <Phone className="h-4 w-4" />
            Hear the Agent
          </a>
        </motion.div>

        {/* FOMO ticker */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-8 inline-flex items-center gap-2 rounded-full border border-amber-400/30 bg-amber-400/10 px-4 py-1 text-amber-200"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-amber-300 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-amber-300" />
          </span>
          Only a few demo slots left this week
        </motion.div>

        {/* Quick value badges */}
        <div className="mt-12 grid w-full grid-cols-1 gap-4 sm:grid-cols-3">
          {[{ icon: <Shield className="h-5 w-5" />, text: 'Natural, compliant and secure' }, { icon: <Phone className="h-5 w-5" />, text: 'Answers and books 24/7' }, { icon: <Zap className="h-5 w-5" />, text: 'Instant lead follow-up' }].map((b, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + i * 0.1 }}
              className="flex items-center justify-center gap-3 rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-white/80 backdrop-blur"
            >
              <span className="text-violet-200">{b.icon}</span>
              <span>{b.text}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
