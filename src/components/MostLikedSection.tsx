import React, { useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { Heart, X } from 'lucide-react';
import { VideoThumbnail } from './VideoThumbnail';

export default function MostLikedSection() {
  const containerRef = React.useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-80px" });
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  const mostLikedVideo = {
    ytId: "NuBo8fvnYw0",
    title: "Ashneer Grover Shares EASY Hacks To Make A Profitable Business",
    guest: "Ashneer Grover · Season 2",
    views: "5.9M+",
    likes: "152.8K",
    rank: "#02",
    quote: "After Shark Tank India made Ashneer Grover a household name, this episode became the definitive deep-dive into his entrepreneurial playbook."
  };

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
            onClick={() => setActiveVideo(mostLikedVideo.ytId)}
            whileHover={{ scale: 1.02 }}
            className="liquid-glass rounded-2xl overflow-hidden aspect-video relative group cursor-pointer block"
          >
            <VideoThumbnail 
              src={`https://i.ytimg.com/vi/${mostLikedVideo.ytId}/maxresdefault.jpg`} 
              alt="Most Liked Episode"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors flex items-center justify-center">
              <div className="liquid-glass rounded-full w-14 h-14 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all transform scale-90 group-hover:scale-100">
                <Heart className="w-6 h-6 text-white fill-white" />
              </div>
            </div>
            
            {/* Heart Badge */}
            <div className="absolute top-4 right-4 liquid-glass bg-black/40 backdrop-blur-md rounded-full px-3 py-1.5 flex items-center gap-2">
              <Heart className="w-3 h-3 text-white fill-white" />
              <span className="font-mono text-xs text-white tracking-wide">{mostLikedVideo.likes}</span>
            </div>
          </motion.div>

        </div>
      </motion.div>

      {/* Video Modal */}
      <AnimatePresence>
        {activeVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-12 bg-black/95 backdrop-blur-xl"
            onClick={() => setActiveVideo(null)}
          >
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative w-full max-w-5xl aspect-video liquid-glass rounded-3xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <iframe
                src={`https://www.youtube-nocookie.com/embed/${activeVideo}?autoplay=1`}
                title="Podcast Player"
                className="w-full h-full border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
              <button 
                onClick={() => setActiveVideo(null)}
                className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 transition-colors flex items-center justify-center text-white backdrop-blur-md"
              >
                <X className="w-6 h-6" />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
