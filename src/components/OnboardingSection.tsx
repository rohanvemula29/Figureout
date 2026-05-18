import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, X } from 'lucide-react';
import { VideoThumbnail } from './VideoThumbnail';

const onboardingEpisodes = [
  {
    id: "FO343",
    num: "343",
    guest: "Khan Sir",
    vid: "aA5tLih8oDk",
    quote: "India's teacher, uncensored.",
    reason: "The most-watched episode for a reason. Real, raw, and ground-level.",
    thumbnail: "https://i.ytimg.com/vi/aA5tLih8oDk/maxresdefault.jpg"
  },
  {
    id: "FO335",
    num: "335",
    guest: "Bill Gates",
    vid: "xAt1xcC6qfM",
    quote: "He changed how I think about business.",
    reason: "Global innovation meets Indian ground reality.",
    thumbnail: "https://i.ytimg.com/vi/xAt1xcC6qfM/maxresdefault.jpg"
  },
  {
    id: "FO23",
    num: "23",
    guest: "Ashneer Grover",
    vid: "NuBo8fvnYw0",
    quote: "The Shark Tank classic.",
    reason: "The episode that started the entrepreneurship wave in India.",
    thumbnail: "https://i.ytimg.com/vi/NuBo8fvnYw0/maxresdefault.jpg"
  }
];

export default function OnboardingSection() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  return (
    <section className="bg-black py-24 px-6 border-t border-white/5">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <p className="font-mono text-[10px] text-white/20 tracking-[0.4em] uppercase mb-4">
              NEW HERE?
            </p>
            <h2 className="font-display text-4xl md:text-6xl text-white">
              Start in 3 Episodes
            </h2>
          </div>
          <p className="font-body text-sm text-white/40 max-w-xs">
            Want to understand Figuring Out? These three conversations define our mission.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {onboardingEpisodes.map((ep, i) => (
            <motion.div 
              key={ep.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="liquid-glass rounded-3xl p-6 group cursor-pointer"
              onClick={() => setActiveVideo(ep.vid)}
            >
              <div className="aspect-video rounded-2xl overflow-hidden mb-6 relative">
                <VideoThumbnail src={ep.thumbnail} alt={ep.guest} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <Play className="w-8 h-8 text-white fill-white" />
                </div>
              </div>
              <p className="font-mono text-[10px] text-white/30 tracking-widest uppercase mb-2">
                FO {ep.num} · {ep.guest}
              </p>
              <h3 className="font-display italic text-2xl text-white/90 mb-3 leading-tight">
                "{ep.quote}"
              </h3>
              <p className="font-body text-sm text-white/40 mt-auto">
                {ep.reason}
              </p>
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
