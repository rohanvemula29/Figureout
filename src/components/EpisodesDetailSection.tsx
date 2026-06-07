import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import { topVideos } from '../data/topVideos';

export default function EpisodesDetailSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // First open by default

  return (
    <section className="bg-black py-24 md:py-36 px-6 border-t border-white/5">
      <div className="max-w-6xl mx-auto">
        <p className="font-mono text-[10px] text-white/20 tracking-[0.4em] uppercase mb-12">
          DEEP DIVE: TOP EPISODES
        </p>

        <div className="flex flex-col">
          {topVideos.map((video, index) => {
            const isOpen = openIndex === index;

            return (
              <div key={video.id} className="border-b border-white/5 group">
                <button 
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full flex justify-between items-center py-6 text-left"
                >
                  <div className="flex items-center gap-6">
                    <span className="font-mono text-[10px] text-white/15 w-8">
                      {video.rank}
                    </span>
                    <span className="font-display text-xl text-white/75 group-hover:text-white transition-colors">
                      {video.title}
                    </span>
                  </div>
                  <ChevronDown 
                    className={`w-5 h-5 text-white/30 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} 
                  />
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <div className="liquid-glass rounded-2xl p-6 mb-8 grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Col 1 */}
                        <div>
                          <p className="font-mono text-[10px] text-white/25 uppercase tracking-widest mb-2">Guest Profile</p>
                          <p className="font-body text-sm text-white/70">{video.guest}</p>
                          <p className="font-body text-xs text-white/40 mt-3">{video.episode}</p>
                        </div>
                        
                        {/* Col 2 */}
                        <div>
                          <p className="font-mono text-[10px] text-white/25 uppercase tracking-widest mb-3">Key Topics</p>
                          <ul className="font-body text-sm text-white/50 space-y-2 list-disc list-inside">
                            {video.topics.map((topic, i) => (
                              <li key={i}>{topic}</li>
                            ))}
                          </ul>
                        </div>

                        {/* Col 3 */}
                        <div>
                          <p className="font-mono text-[10px] text-white/25 uppercase tracking-widest mb-3">The Pull-Quote</p>
                          <blockquote className="font-display italic text-lg text-white/60 leading-relaxed border-l-2 border-white/10 pl-4">
                            "{video.quote}"
                          </blockquote>
                        </div>

                        {/* Col 4 - Dynamic Editorial Study Link */}
                        <div className="md:col-span-3 flex flex-wrap items-center justify-between border-t border-white/5 pt-6 mt-2 gap-4">
                          <p className="text-white/40 text-[10px] font-mono tracking-widest">
                            ORIGINAL COMPREHENSIVE CASE STUDY GUIDE READY
                          </p>
                          <Link
                            to={`/guide/${video.id === "1" ? "simon-sinek" : video.id === "2" ? "bill-gates" : video.id === "3" ? "nikhil-kamath" : video.id === "4" ? "dr-cuterus" : "vishwa-mohan"}`}
                            className="inline-flex items-center gap-1.5 bg-red-500/10 hover:bg-neutral-100 text-red-500 hover:text-black text-xs px-5 py-2.5 rounded-full font-mono transition-all duration-300 uppercase tracking-widest border border-red-500/20"
                          >
                            Read Full Editorial Study Guide ↗
                          </Link>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
