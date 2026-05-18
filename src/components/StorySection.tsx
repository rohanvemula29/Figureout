import React from 'react';
import { motion } from 'framer-motion';

const milestones = [
  {
    year: "1997",
    text: "The boy they called lazy was born in Indore, MP.",
    sub: "Labelled 'useless' early on, performance in school didn't reflect his future."
  },
  {
    year: "2013",
    text: "He borrowed ₹10,000 and sold dishwashing liquid door-to-door.",
    sub: "Jadugar Drop was his education. He scaled a business before finishing school."
  },
  {
    year: "2021",
    text: "Launched a podcast that would change Indian media.",
    sub: "Figuring Out started with a simple question: How do we actually build India?"
  },
  {
    year: "2024",
    text: "PM Modi calls him to the stage. Ranked #25 globally.",
    sub: "From the street corner to the National Creators Award. The journey continues."
  }
];

export default function StorySection() {
  return (
    <section className="bg-black py-40 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <p className="font-mono text-[10px] text-white/20 tracking-[0.4em] uppercase mb-24">
          BEHIND THE MIC
        </p>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-white/5 md:-translate-x-1/2" />

          <div className="space-y-32">
            {milestones.map((ms, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className={`relative flex flex-col md:flex-row items-center gap-12 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
              >
                {/* Year Watermark */}
                <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-display text-[120px] md:text-[200px] text-white/5 leading-none select-none -z-10 tracking-tighter">
                  {ms.year}
                </span>

                {/* Dot */}
                <div className="absolute left-[-4px] md:left-1/2 top-1/2 w-2 h-2 rounded-full bg-white md:-translate-x-1/2 -translate-y-1/2 glow-pulse shadow-[0_0_15px_rgba(255,255,255,0.5)]" />

                <div className="md:w-1/2 pl-8 md:pl-0 md:px-12 text-center md:text-left">
                  <h3 className="font-display italic text-3xl md:text-5xl text-white/90 leading-tight mb-4">
                    {ms.text}
                  </h3>
                  <p className="font-body text-sm text-white/30 leading-relaxed max-w-sm mx-auto md:mx-0">
                    {ms.sub}
                  </p>
                </div>
                <div className="md:w-1/2 hidden md:block" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
