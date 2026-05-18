import React from 'react';
import { motion, useInView } from 'framer-motion';
import { guestCategories } from '../data/guests';

export default function GuestsSection() {
  const containerRef = React.useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <section id="guests" className="bg-black py-24 md:py-36 px-6" ref={containerRef}>
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-6xl mx-auto"
      >
        <p className="font-mono text-xs text-white/20 tracking-[0.4em] mb-4 uppercase">
          THE GUEST LIST
        </p>
        <h2 className="font-display italic text-5xl md:text-7xl text-white/90 tracking-tight leading-[0.9]">
          Everyone comes to
          <br />
          Raj's table.
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mt-16">
          {guestCategories.map((category, i) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 0.2 + (i * 0.05), duration: 0.6 }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="liquid-glass rounded-3xl p-6 md:p-8 flex flex-col group cursor-pointer"
              >
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center mb-6 group-hover:bg-white/10 transition-colors">
                  <Icon className="w-5 h-5 text-white/40 group-hover:text-white/80 transition-colors" />
                </div>
                <h3 className="font-display text-2xl text-white/80 mb-3 group-hover:text-white transition-colors">
                  {category.title}
                </h3>
                <p className="font-body text-xs text-white/30 leading-relaxed">
                  {category.guests}
                </p>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}
