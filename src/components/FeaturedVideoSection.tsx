import React, { useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Play, ExternalLink, X } from 'lucide-react';
import { VideoThumbnail } from './VideoThumbnail';

export default function FeaturedVideoSection() {
  const containerRef = React.useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-80px" });
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className="bg-black py-12 md:py-0 pb-24 md:pb-36 px-6" ref={containerRef}>
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16 items-center"
      >
        {/* Left Video Card */}
        <motion.div 
          whileHover={{ scale: isPlaying ? 1 : 1.02 }}
          transition={{ duration: 0.4 }}
          className="liquid-glass rounded-3xl overflow-hidden relative aspect-video group cursor-pointer"
          onClick={() => !isPlaying && setIsPlaying(true)}
        >
          {!isPlaying ? (
            <>
              <VideoThumbnail 
                src="https://i.ytimg.com/vi/E3oG313_kps/maxresdefault.jpg" 
                alt="Simon Sinek"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-center justify-center">
                <div className="liquid-glass rounded-full w-16 h-16 flex items-center justify-center group-hover:bg-white/20 transition-colors">
                  <Play className="w-7 h-7 text-white ml-1" fill="currentColor" />
                </div>
              </div>
              
              <div className="absolute top-4 left-4 liquid-glass rounded-full px-3 py-1.5 font-mono text-[10px] text-white/80 tracking-widest">
                GLOBAL EXCLUSIVE
              </div>
              
              <div className="absolute bottom-6 left-6 flex items-end gap-3 z-10">
                <span className="font-display text-4xl text-white leading-none">12.6M</span>
                <span className="font-body text-xs text-white/60 mb-1">total views</span>
              </div>
            </>
          ) : (
            <div className="w-full h-full bg-black relative">
              <iframe
                src="https://www.youtube-nocookie.com/embed/E3oG313_kps?autoplay=1"
                title="Simon Sinek Podcast"
                className="w-full h-full border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
              <button 
                onClick={(e) => { e.stopPropagation(); setIsPlaying(false); }}
                className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/60 backdrop-blur-md flex items-center justify-center text-white hover:bg-white/20 transition-colors z-20"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          )}
        </motion.div>

        {/* Right Info */}
        <div className="flex flex-col justify-center">
          <p className="font-mono text-[10px] text-white/60 tracking-[0.3em] uppercase mb-4">
            FO 476 · MAY 2026
          </p>
          <h3 className="font-display text-3xl md:text-5xl text-white leading-[1.1] mb-6">
            Simon Sinek: The Truth About Loneliness, Work & Friendship
          </h3>
          <p className="font-body text-sm text-white/70 leading-relaxed mb-8 max-w-md">
            "Global leadership icon Simon Sinek joins Raj Shamani to discuss the crisis of loneliness in the modern world, the evolving nature of work, and why deep friendships are the ultimate competitive advantage."
          </p>

          <div className="flex gap-3 flex-wrap">
            {['12.6M Views', 'Leadership', 'Global Guest'].map(stat => (
              <span key={stat} className="liquid-glass rounded-full px-4 py-2 font-mono text-xs text-white/80">
                {stat}
              </span>
            ))}
          </div>

          <button 
            onClick={() => window.open('https://www.youtube.com/watch?v=E3oG313_kps', '_blank')}
            className="mt-10 bg-white text-black rounded-full px-7 py-3 font-semibold text-sm flex items-center gap-2 w-fit hover:bg-white/90 transition"
          >
            Watch on YouTube
            <ExternalLink className="w-4 h-4" />
          </button>
        </div>
      </motion.div>
    </section>
  );
}
