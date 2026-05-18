import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, X } from 'lucide-react';
import { topVideos } from '../data/topVideos';
import { VideoThumbnail } from './VideoThumbnail';

export default function TopVideosSection() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  return (
    <section id="episodes" className="bg-black py-24 md:py-40 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
        >
          <h2 className="font-display text-5xl md:text-8xl text-white/90 tracking-tight leading-[0.9] mb-4">
            Top 5
            <em className="italic text-white/20 not-italic font-thin"> All Time</em>
          </h2>
          <p className="font-body text-sm text-white/50 mb-16">Ranked by views · Updated 2025</p>
        </motion.div>

        <div className="flex flex-col">
          {topVideos.map((video, i) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              whileHover={{ x: 6 }}
              className="full-width flex flex-col sm:flex-row items-center sm:items-center gap-4 md:gap-10 py-7 border-b border-white/5 cursor-pointer group"
              onClick={() => setActiveVideo(video.youtubeId)}
            >
              {/* Rank */}
              <div className="font-display text-[40px] md:text-[100px] text-white/20 group-hover:text-white/40 transition-colors leading-none w-full sm:w-16 md:w-28 shrink-0 select-none text-center sm:text-left">
                {video.rank}
              </div>

              {/* Thumbnail */}
              <div className="rounded-xl overflow-hidden w-full sm:w-28 md:w-44 aspect-video shrink-0 relative flex-none">
                <VideoThumbnail 
                  src={video.thumbnail} 
                  alt={video.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <Play className="w-8 h-8 text-white fill-white" />
                </div>
              </div>

              {/* Info */}
              <div className="flex-1 min-w-0 pr-0 sm:pr-4 text-center sm:text-left">
                <p className="font-mono text-[9px] md:text-[10px] text-white/60 tracking-[0.2em] uppercase mb-1.5 md:mb-2 truncate">
                  {video.guest}
                </p>
                <h3 className="font-display text-base md:text-2xl text-white group-hover:text-white transition-colors leading-snug line-clamp-2">
                  {video.title}
                </h3>
                <p className="font-body text-xs text-white/50 leading-relaxed mt-1 md:mt-2 line-clamp-2 hidden md:block">
                  {video.note}
                </p>
              </div>

              {/* Stats */}
              <div className="w-full sm:w-auto shrink-0 text-center sm:text-right flex flex-row sm:flex-col items-center sm:items-end justify-center sm:justify-end gap-3 sm:gap-1 mt-2 sm:mt-0">
                <div className="font-display text-xl md:text-3xl text-white">{video.views}</div>
                <div className="font-mono text-[8px] md:text-[9px] text-white/60 tracking-widest uppercase">VIEWS</div>
                <div className="liquid-glass rounded-full px-2 py-1 md:px-3 md:py-1 font-mono text-[9px] md:text-[10px] text-white/80 ml-auto sm:ml-0">
                  {video.likes} LIKES
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

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
