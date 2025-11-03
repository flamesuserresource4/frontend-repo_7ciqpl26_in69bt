import React from 'react';
import { motion } from 'framer-motion';
import { Settings, CalendarDays, Headphones, Check } from 'lucide-react';

const steps = [
  {
    title: '1. Discovery call',
    desc: 'We learn your service areas, pricing approach, and booking rules.'
  },
  {
    title: '2. Script & voice',
    desc: 'You pick the voice. We tailor the script to your brand and compliance.'
  },
  {
    title: '3. Connect your tools',
    desc: 'We plug into your CRM and calendar. No system overhaul needed.'
  },
  {
    title: '4. Go live',
    desc: 'Your voice agent starts answering and booking within days.'
  }
];

const icons = [Headphones, Settings, CalendarDays, Check];

const Process = () => {
  return (
    <section className="relative w-full bg-black py-20 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10">
          <h2 className="text-3xl font-semibold sm:text-4xl">How we launch you fast</h2>
          <p className="mt-2 text-white/60">From first call to fully booking in a few days.</p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {steps.map((s, i) => {
            const Icon = icons[i];
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5 }}
                className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/0 p-6"
              >
                <div className="mb-4 inline-flex rounded-xl border border-white/10 bg-black/40 p-3 text-sky-200">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm text-white/70">{s.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Process;
