import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useCountUp } from '../hooks/useCountUp';

export default function StatsSection() {
  const containerRef = React.useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-80px" });

  const stats = [
    { value: 17.5, format: "M+", label: "YouTube Subscribers", sub: "17.5M+ Subscribers" },
    { value: 2, format: "B+", label: "All-Time Views", sub: "2B+ Views" },
    { value: 400, format: "M+", label: "Views Per Year", sub: "400M+ Annual" },
    { value: 2.4, format: "k", label: "Videos", sub: "2.4k+ Episodes" },
    { value: 26, format: "+", label: "Countries Spoken In", sub: "26+ Countries" },
    { value: 200, format: "+", label: "Public Speeches Delivered", sub: "200+ Speeches" },
    { value: 25, format: "", label: "Podcast Rank Worldwide", sub: "#25 Globally", prefix: "#" },
    { value: 1, format: "", label: "Spotify India (2025)", sub: "#1 Podcast", prefix: "#" },
  ];

  return (
    <section id="stats" className="bg-black py-20 md:py-32 px-6" ref={containerRef}>
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-6xl mx-auto"
      >
        <p className="font-mono text-xs text-white/20 tracking-[0.4em] mb-6">THE NUMBERS</p>
        <h2 className="font-display italic text-5xl md:text-8xl text-white/90 tracking-tight leading-[0.9]">
          2 Billion
          <span className="not-italic text-white/20 text-3xl md:text-5xl block mt-2 font-body font-thin">
            reasons to tune in.
          </span>
        </h2>

        <motion.div 
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.12 }
            }
          }}
          className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4 mt-16"
        >
          {stats.map((stat, i) => (
            <StatCard key={i} stat={stat} startAnimation={isInView} />
          ))}
        </motion.div>

        <div className="w-full liquid-glass rounded-2xl p-6 flex flex-col md:flex-row items-start md:items-center justify-between mt-6 gap-6 md:gap-4 overflow-hidden">
          <div className="font-display italic text-2xl text-white/60 shrink-0">
            World-class guests include:
          </div>
          <div className="flex-1 w-full overflow-hidden mask-edges relative h-6">
            <div className="absolute inset-0 marquee-inner flex gap-8 whitespace-nowrap min-w-max items-center">
              {['BILL GATES', 'EMMANUEL MACRON', 'VIJAY MALLYA', 'MICHAEL PHELPS', 'MRBEAST', 'AAMIR KHAN', 'KARAN JOHAR', 'MS DHONI', 'SOURAV GANGULY', 'S. JAISHANKAR', 'LALIT MODI'].map((name, i) => (
                <span key={i} className="font-mono text-xs text-white/30 tracking-widest">{name}</span>
              ))}
              {/* Duplicate for seamless loop */}
              {['BILL GATES', 'EMMANUEL MACRON', 'VIJAY MALLYA', 'MICHAEL PHELPS', 'MRBEAST', 'AAMIR KHAN', 'KARAN JOHAR', 'MS DHONI', 'SOURAV GANGULY', 'S. JAISHANKAR', 'LALIT MODI'].map((name, i) => (
                <span key={`dup-${i}`} className="font-mono text-xs text-white/30 tracking-widest">{name}</span>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

function StatCard({ stat, startAnimation }: { stat: any, startAnimation: boolean }) {
  // Using useCountUp for whole numbers, hardcoding decimals for UI simplicity (or split logic)
  const isDecimal = stat.value % 1 !== 0;
  const count = useCountUp(isDecimal ? stat.value * 10 : stat.value, 2.5);
  const displayValue = isDecimal ? (count / 10).toFixed(1) : count;

  return (
    <motion.div 
      variants={{
        hidden: { opacity: 0, scale: 0.95 },
        visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } }
      }}
      whileHover={{ y: -3, transition: { duration: 0.2 } }}
      className="liquid-glass rounded-2xl p-5 flex flex-col gap-1"
    >
      <div className="font-display text-3xl md:text-4xl text-white">
        {stat.prefix || ''}{startAnimation ? displayValue : 0}{stat.format}
      </div>
      <div className="font-body text-[10px] text-white/25 tracking-wide uppercase mt-1">
        {stat.label}
      </div>
    </motion.div>
  );
}
