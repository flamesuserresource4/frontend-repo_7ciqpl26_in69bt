import React from 'react';
import Hero from './components/Hero';
import Benefits from './components/Benefits';
import Process from './components/Process';
import CTA from './components/CTA';

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Hero />
      <Benefits />
      <Process />
      <CTA />

      <footer className="border-t border-white/10 bg-black/80 py-10 text-center text-sm text-white/60">
        <div className="mx-auto max-w-6xl px-6">
          <p>© {new Date().getFullYear()} — AI Voice Agents for Contractors. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
