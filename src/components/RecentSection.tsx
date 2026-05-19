import React, { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { Clock, Calendar, ArrowRight, Play, X } from 'lucide-react';
import { VideoThumbnail } from './VideoThumbnail';

export default function RecentSection() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });
  const scrollRef = useRef(null);
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  const episodes = [
    {
      id: "510",
      tag: "FO 510 · JAYANT MUNDHRA",
      title: "How India Makes Money, Ambani vs Adani & Economics",
      guest: "Jayant Mundhra",
      date: "1 day ago",
      views: "1.1M",
      duration: "1h 10m",
      img: "https://i.ytimg.com/vi/XCjBc4WBHYc/maxresdefault.jpg",
      ytId: "XCjBc4WBHYc"
    },
    {
      id: "509",
      tag: "FO 509 · SOURAV GANGULY",
      title: "Sourav Ganguly's Rules for Leadership & Winning",
      guest: "Sourav Ganguly",
      date: "3 days ago",
      views: "866K",
      duration: "1h 12m",
      img: "https://i.ytimg.com/vi/-vS6pEvWEAQ/maxresdefault.jpg",
      ytId: "-vS6pEvWEAQ"
    },
    {
      id: "508",
      tag: "FO 508 · VISHWA MOHAN",
      title: "The IIT Race, Coaching Mafia & Reality of EdTech",
      guest: "Vishwa Mohan",
      date: "5 days ago",
      views: "469K",
      duration: "1h 5m",
      img: "https://i.ytimg.com/vi/EF-tWak4mLg/maxresdefault.jpg",
      ytId: "EF-tWak4mLg"
    },
    {
      id: "507",
      tag: "FO 507 · KIARA ADVANI",
      title: "Kiara Advani On Marriage, Stardom & Dealing With Trolls",
      guest: "Kiara Advani",
      date: "8 days ago",
      views: "1.8M",
      duration: "1h 20m",
      img: "https://i.ytimg.com/vi/uG_9-c6mC8o/maxresdefault.jpg",
      ytId: "uG_9-c6mC8o"
    },
    {
      id: "506",
      tag: "FO 506 · DR. SAMIR",
      title: "Geopolitics, Wars, and the Future of the World",
      guest: "Dr. Samir Parikh",
      date: "8 days ago",
      views: "386K",
      duration: "2h 05m",
      img: "https://i.ytimg.com/vi/pS0O4P8y4M8/maxresdefault.jpg",
      ytId: "pS0O4P8y4M8"
    },
    {
      id: "505",
      tag: "FO 505 · SHEKHAR",
      title: "Globalization and India's Position in the World",
      guest: "Shekhar",
      date: "Oct 2024",
      views: "256K",
      duration: "1h 15m",
      img: "https://i.ytimg.com/vi/ZsPygh37hpw/maxresdefault.jpg",
      ytId: "ZsPygh37hpw"
    },
    {
      id: "504",
      tag: "FO 504 · LAKSHYA SEN",
      title: "Mindset of an Olympian, Diet & Training",
      guest: "Lakshya Sen",
      date: "Oct 2024",
      views: "183K",
      duration: "1h 0m",
      img: "https://i.ytimg.com/vi/LB6s2EOGClw/maxresdefault.jpg",
      ytId: "LB6s2EOGClw"
    },
    {
      id: "503",
      tag: "FO 503 · MARK MANSON",
      title: "The Subtle Art of Not Giving a F*ck, Happiness & Money",
      guest: "Mark Manson",
      date: "Sep 2024",
      views: "712K",
      duration: "1h 25m",
      img: "https://i.ytimg.com/vi/ig1VtIEFkcI/maxresdefault.jpg",
      ytId: "ig1VtIEFkcI"
    },
    {
      id: "500",
      tag: "FO 500 · PAUL ROSOLIE",
      title: "Anaconda, Amazon Jungle & Danger of Wild Life",
      guest: "Paul Rosolie",
      date: "Sep 2024",
      views: "4.1M",
      duration: "1h 45m",
      img: "https://i.ytimg.com/vi/w9TAdQxshhg/maxresdefault.jpg",
      ytId: "w9TAdQxshhg"
    }
  ];

  return (
    <section id="recent" className="bg-black py-24 px-6 overflow-hidden" ref={containerRef}>
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.9 }}
        className="max-w-6xl mx-auto"
      >
        <div className="flex items-end justify-between mb-12">
          <div>
            <h2 className="font-display italic text-4xl md:text-5xl text-white/90">
              Latest Episodes
            </h2>
          </div>
          <a href="https://www.youtube.com/@rajshamani/videos" target="_blank" rel="noopener noreferrer" className="hidden md:flex liquid-glass items-center gap-2 rounded-full px-5 py-2 font-mono text-[10px] text-white/50 hover:text-white uppercase tracking-widest transition-colors cursor-pointer">
            View All <ArrowRight className="w-3 h-3" />
          </a>
        </div>

        <motion.div 
          ref={scrollRef}
          className="flex gap-6 cursor-grab active:cursor-grabbing overflow-x-visible"
          drag="x"
          dragConstraints={{ right: 0, left: -1000 }} // Approximated inner boundary
        >
          {episodes.map((ep, i) => (
            <motion.div 
              key={ep.id}
              whileHover={{ y: -8, scale: 1.02 }}
              onClick={() => setActiveVideo(ep.ytId)}
              className="liquid-glass rounded-3xl overflow-hidden flex-shrink-0 w-72 md:w-[400px] select-none cursor-pointer group"
            >
              <div className="aspect-video w-full relative overflow-hidden">
                <VideoThumbnail 
                  src={ep.img} 
                  alt={ep.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                  draggable={false} 
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 transform scale-90 group-hover:scale-100 transition-transform">
                    <Play className="w-6 h-6 text-white fill-white" />
                  </div>
                </div>
              </div>
              <div className="p-6">
                <p className="font-mono text-[10px] text-white/60 tracking-widest uppercase mb-3">
                  {ep.tag}
                </p>
                <h3 className="font-display text-xl text-white/90 line-clamp-2 leading-snug">
                  {ep.title}
                </h3>
                <p className="font-body text-xs text-white/70 mt-2 mb-5">
                  Guest: {ep.guest}
                </p>
                
                <div className="flex items-center gap-4 border-t border-white/5 pt-4 mt-auto">
                  <div className="flex items-center gap-1.5 font-mono text-[9px] text-white/50 uppercase">
                    <Calendar className="w-3 h-3" /> {ep.date}
                  </div>
                  <div className="flex items-center gap-1.5 font-mono text-[9px] text-white/50 uppercase">
                    <Play className="w-3 h-3" /> {ep.views}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
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
