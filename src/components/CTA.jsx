import React, { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { CalendarDays, ArrowRight, Clock } from 'lucide-react';

function generateCalendar(year, month) {
  const firstDay = new Date(year, month, 1);
  const startDay = firstDay.getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const grid = [];
  let day = 1 - startDay; // start with blanks
  for (let i = 0; i < 6; i++) {
    const row = [];
    for (let j = 0; j < 7; j++) {
      const d = new Date(year, month, day);
      row.push({
        date: d,
        inMonth: d.getMonth() === month,
      });
      day++;
    }
    grid.push(row);
  }
  return grid;
}

const CTA = () => {
  const today = new Date();
  const [activeDate, setActiveDate] = useState(today);
  const grid = useMemo(() => generateCalendar(today.getFullYear(), today.getMonth()), [today]);

  const slots = ['9:00 AM', '11:30 AM', '2:00 PM', '4:30 PM'];

  return (
    <section id="booking" className="relative w-full overflow-hidden bg-gradient-to-b from-[#0b0b10] to-black py-20 text-white">
      {/* subtle background accents */}
      <div className="pointer-events-none absolute inset-0 opacity-60">
        <div className="absolute -left-20 -top-20 h-96 w-96 rounded-full bg-purple-500/20 blur-3xl" />
        <div className="absolute -right-20 bottom-0 h-96 w-96 rounded-full bg-sky-500/20 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-semibold sm:text-4xl"
          >
            See it book jobs in real-time
          </motion.h2>
          <p className="mt-3 text-white/70">Pick a time for a quick live demo. We’ll show inbound, outbound, and calendar booking in action.</p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
          {/* Calendar mock (replace with real embed later) */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur"
          >
            <div className="mb-4 flex items-center justify-between">
              <div className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-black/40 px-3 py-2 text-white/80">
                <CalendarDays className="h-5 w-5 text-violet-200" />
                <span className="text-sm">Your demo calendar</span>
              </div>
              <div className="text-sm text-amber-200">
                <span className="mr-2 inline-block h-2 w-2 rounded-full bg-amber-300" />
                High demand — limited spots
              </div>
            </div>

            <div className="grid grid-cols-7 gap-1 text-center text-xs text-white/60">
              {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((d) => (
                <div key={d} className="py-1">{d}</div>
              ))}
            </div>
            <div className="mt-1 grid grid-cols-7 gap-1">
              {grid.flat().map((cell, idx) => {
                const isActive = cell.inMonth && cell.date.toDateString() === activeDate.toDateString();
                return (
                  <button
                    key={idx}
                    disabled={!cell.inMonth}
                    onClick={() => cell.inMonth && setActiveDate(cell.date)}
                    className={`aspect-square rounded-md border text-sm transition ${
                      isActive
                        ? 'border-violet-400 bg-violet-500/20 text-white'
                        : cell.inMonth
                        ? 'border-white/10 bg-white/5 text-white/80 hover:bg-white/10'
                        : 'border-transparent bg-transparent text-white/20'
                    }`}
                  >
                    {cell.inMonth ? cell.date.getDate() : ''}
                  </button>
                );
              })}
            </div>
          </motion.div>

          {/* Time + CTA */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-col justify-between rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-white/[0.02] p-6"
          >
            <div>
              <div className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-black/40 px-3 py-2 text-white/80">
                <Clock className="h-5 w-5 text-sky-200" />
                <span className="text-sm">Choose a time</span>
              </div>
              <div className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-3">
                {slots.map((t) => (
                  <button key={t} className="rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-white/80 transition hover:bg-white/10">
                    {t}
                  </button>
                ))}
              </div>
              <p className="mt-4 text-sm text-white/60">
                Selected date: <span className="text-white">{activeDate.toLocaleDateString()}</span>
              </p>
            </div>

            <div className="mt-6">
              <button className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-white px-5 py-3 font-medium text-black shadow-lg shadow-violet-500/20 transition hover:scale-[1.01]">
                Book This Demo
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-0.5" />
              </button>
              <p className="mt-3 text-center text-xs text-white/50">
                We’ll send a calendar invite instantly. No spam — ever.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
