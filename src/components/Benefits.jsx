import React from 'react';
import { motion } from 'framer-motion';
import { PhoneCall, MessageSquare, Clock, Trophy, Shield, Workflow } from 'lucide-react';

const items = [
  {
    icon: PhoneCall,
    title: 'Never Miss a Call',
    desc: 'Inbound answered in under a second. No voicemails. No lost jobs.',
    color: 'from-violet-500/20 to-indigo-500/10',
  },
  {
    icon: MessageSquare,
    title: 'Instant Lead Follow-Up',
    desc: 'Texts and calls back new leads within seconds to convert before competitors.',
    color: 'from-sky-500/20 to-cyan-500/10',
  },
  {
    icon: Clock,
    title: '24/7 Booking',
    desc: 'Schedules estimates and service windows while you sleep.',
    color: 'from-amber-500/20 to-orange-500/10',
  },
  {
    icon: Shield,
    title: 'Natural + Compliant',
    desc: 'Human-sounding, consent-aware, and fully configurable scripts.',
    color: 'from-emerald-500/20 to-teal-500/10',
  },
  {
    icon: Workflow,
    title: 'Works With Your Tools',
    desc: 'Connects to your CRM and calendar. No overhaul needed.',
    color: 'from-fuchsia-500/20 to-pink-500/10',
  },
  {
    icon: Trophy,
    title: 'More Booked Jobs',
    desc: 'Turn more calls into revenue with consistent, perfect follow-up.',
    color: 'from-purple-500/20 to-violet-500/10',
  },
];

const Benefits = () => {
  return (
    <section id="proof" className="relative w-full bg-gradient-to-b from-black to-[#0b0b10] py-20 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <h2 className="text-3xl font-semibold sm:text-4xl">What contractors get</h2>
            <p className="mt-2 text-white/60">Simple, tangible outcomes — not tech jargon.</p>
          </div>
          <div className="hidden text-right sm:block">
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-emerald-200">
              <span className="h-2 w-2 rounded-full bg-emerald-300" />
              Live in production
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className={`group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-5`}
              >
                <div className={`pointer-events-none absolute -inset-1 bg-gradient-to-br ${item.color} opacity-0 transition-opacity group-hover:opacity-100`} />
                <div className="relative z-10">
                  <div className="mb-4 inline-flex rounded-xl border border-white/10 bg-black/40 p-3 text-violet-200">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                  <p className="mt-2 text-sm text-white/70">{item.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
