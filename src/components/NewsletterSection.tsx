import React from 'react';
import { motion, useInView } from 'framer-motion';
import { Mail, ArrowRight } from 'lucide-react';

export default function NewsletterSection() {
  const containerRef = React.useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <section className="bg-black py-24 md:py-36 px-6" ref={containerRef}>
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-xl mx-auto text-center"
      >
        <p className="font-mono text-[10px] text-white/20 tracking-[0.4em] uppercase mb-6">
          STAY IN THE LOOP
        </p>
        <h2 className="font-display italic text-5xl md:text-7xl text-white/90 leading-[0.9] tracking-tight">
          Never miss<br />a lesson.
        </h2>
        <p className="font-body text-sm text-white/40 mt-6 leading-relaxed">
          500,000+ subscribers get weekly episode drops, playbooks, and insider insights straight from Raj's desk.
        </p>

        <div className="liquid-glass rounded-3xl md:rounded-full pl-4 md:pl-6 pr-2 py-2 flex flex-col md:flex-row items-stretch md:items-center gap-3 mt-10 max-w-md mx-auto focus-within:ring-1 focus-within:ring-white/20 transition-all">
          <div className="flex items-center gap-3 py-2 md:py-0">
            <Mail className="w-5 h-5 text-white/30 shrink-0" />
            <input 
              type="email" 
              placeholder="Email address..." 
              className="bg-transparent border-none outline-none flex-1 font-body text-sm text-white placeholder:text-white/30"
            />
          </div>
          <button className="bg-white text-black rounded-2xl md:rounded-full px-6 py-3 md:py-2.5 font-semibold text-sm hover:bg-white/90 transition-colors shrink-0 flex items-center justify-center gap-2">
            Subscribe <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <p className="font-mono text-[9px] text-white/20 mt-6 tracking-wide uppercase">
          FREE · NO SPAM · CANCEL ANYTIME
        </p>
      </motion.div>
    </section>
  );
}
