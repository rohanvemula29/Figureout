import React from 'react';
import { motion, useInView } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

export default function BookSection() {
  const containerRef = React.useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <section id="book" className="bg-white py-24 md:py-36 px-6 relative" ref={containerRef}>
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center"
      >
        {/* Left: Text Content */}
        <div>
          <p className="font-mono text-[10px] text-black/40 tracking-[0.4em] uppercase mb-6 font-bold">
            BESTSELLING BOOK
          </p>
          <h2 className="font-display text-5xl md:text-[80px] text-black leading-[0.85] tracking-tight">
            Build,
            <br />
            Don't
            <br />
            <em className="italic text-black/40">Talk.</em>
          </h2>
          <p className="font-body text-sm text-black/60 font-semibold mt-6 tracking-wide">
            BY RAJ SHAMANI
          </p>
          <p className="font-body text-base text-black/70 leading-relaxed mt-6 max-w-sm">
            Raj Shamani's debut book distills the mindset of India's most successful entrepreneurs into a no-nonsense guide for anyone who wants to stop planning and start building. A bestseller that became a movement.
          </p>
          
          <button className="bg-black text-white rounded-full px-8 py-4 font-semibold text-sm mt-10 inline-flex items-center gap-2 hover:bg-black/80 transition-colors">
            Get your copy <ExternalLink className="w-4 h-4 text-white/70" />
          </button>
        </div>

        {/* Right: Book Mockup */}
        <motion.div 
          whileHover={{ scale: 1.02, rotate: -2 }}
          transition={{ duration: 0.4 }}
          className="bg-black rounded-3xl aspect-[3/4] flex items-center justify-center shadow-2xl shadow-black/20 overflow-hidden relative cursor-pointer group"
        >
          {/* subtle shine effect */}
          <div className="absolute inset-0 z-10 bg-gradient-to-tr from-white/0 via-white/20 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
          
          <img 
            src="https://covers.openlibrary.org/b/isbn/9780143459682-L.jpg" 
            alt="Build, Don't Talk Book Cover"
            className="w-full h-full object-cover"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
