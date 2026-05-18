import React from 'react';
import { motion, useInView } from 'framer-motion';
import { Heart } from 'lucide-react';
import { VideoThumbnail } from './VideoThumbnail';

export default function MostLikedSection() {
  const containerRef = React.useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-80px" });

  return (
    <section className="bg-black py-24 px-6 relative" ref={containerRef}>
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-6xl mx-auto"
      >
        <div className="w-full liquid-glass rounded-3xl p-8 md:p-14 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          {/* Left Text */}
          <div>
            <div className="font-mono text-[10px] text-white/60 tracking-widest mb-4 uppercase">
              ❤️ MOST LIKED
            </div>
            
            <h3 className="font-display italic text-3xl md:text-5xl text-white/90 leading-tight">
              "Ashneer Grover Shares EASY Hacks To Make A Profitable Business"
            </h3>
            <p className="font-body text-sm text-white/60 mt-4 leading-relaxed">
              Guest: Ashneer Grover · Season 2
            </p>
            
            <div className="grid grid-cols-3 gap-4 mt-8 pt-8 border-t border-white/8">
              <div>
                <div className="font-display text-3xl text-white">5.9M+</div>
                <div className="font-mono text-[9px] text-white/60 uppercase mt-1">Views</div>
              </div>
              <div>
                <div className="font-display text-3xl text-white">152.8K</div>
                <div className="font-mono text-[9px] text-white/60 uppercase mt-1">Likes</div>
              </div>
              <div>
                <div className="font-display text-3xl text-white">#02</div>
                <div className="font-mono text-[9px] text-white/60 uppercase mt-1">Rank All-Time</div>
              </div>
            </div>

            <blockquote className="font-display italic text-lg text-white/70 leading-relaxed mt-10 border-l-2 border-white/10 pl-5">
              "After Shark Tank India made Ashneer Grover a household name, this episode became the definitive deep-dive into his entrepreneurial playbook."
            </blockquote>
          </div>

          {/* Right Video Mock */}
          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="liquid-glass rounded-2xl overflow-hidden aspect-video relative group cursor-pointer"
          >
            <VideoThumbnail 
              src="https://i.ytimg.com/vi/NuBo8fvnYw0/maxresdefault.jpg" 
              alt="Most Liked Episode"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
            
            {/* Heart Badge */}
            <div className="absolute top-4 right-4 liquid-glass bg-black/40 backdrop-blur-md rounded-full px-3 py-1.5 flex items-center gap-2">
              <Heart className="w-3 h-3 text-white fill-white" />
              <span className="font-mono text-xs text-white tracking-wide">152.8K</span>
            </div>
          </motion.div>

        </div>
      </motion.div>
    </section>
  );
}
