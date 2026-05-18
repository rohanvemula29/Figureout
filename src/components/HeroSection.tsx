import React from 'react';
import { motion } from 'framer-motion';
import { Play } from 'lucide-react';
import { Canvas } from '@react-three/fiber';
import { ParticleBackground } from './Three';
import { useMouseTilt } from '../hooks/useMouseTilt';
import MarqueeStrip from './MarqueeStrip';

export default function HeroSection() {
  const { tilt, handleMouseMove, handleMouseLeave } = useMouseTilt(15, 10, 0.08);

  return (
    <section className="min-h-screen bg-black relative overflow-hidden flex flex-col">
      {/* 3D Background */}
      <div className="absolute inset-0 z-0 opacity-60 pointer-events-none">
        <Canvas camera={{ position: [0, 0, 600], fov: 60, near: 0.1, far: 2000 }}>
          <ParticleBackground />
        </Canvas>
      </div>

      {/* Navbar */}
      <nav className="px-8 py-6 relative z-20 w-full">
        <div className="liquid-glass max-w-6xl mx-auto rounded-full px-7 py-3.5 flex items-center justify-between">
          <div className="flex items-center">
            <span className="font-mono font-bold text-xl text-white tracking-[0.15em]">FO</span>
            <div className="w-px h-4 bg-white/20 mx-4" />
            <div className="flex items-center gap-3">
              <span className="font-body text-sm text-white/40 font-medium">Figuring Out</span>
              <div className="hidden sm:flex items-center gap-1.5 liquid-glass rounded-full px-2 py-1 border border-white/5">
                <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
                <span className="font-mono text-[9px] text-white/60 tracking-wider">17.5M+ SUBSCRIBERS</span>
              </div>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-8">
            {['Home', 'Episodes', 'Bio', 'Stats', 'Comments'].map(link => (
              <a key={link} href={`#${link.toLowerCase()}`} className="font-body text-sm text-white/50 hover:text-white transition-colors tracking-wide">
                {link}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <a href="#book" className="hidden md:block liquid-glass rounded-full px-5 py-2 text-white text-xs font-mono">
              Build, Don't Talk ↗
            </a>
            <a href="https://www.youtube.com/@rajshamani?sub_confirmation=1" target="_blank" rel="noopener noreferrer" className="bg-white text-black rounded-full px-5 py-2 text-xs font-semibold font-body hover:bg-white/90 transition flex items-center justify-center">
              Subscribe
            </a>
          </div>
        </div>
      </nav>

      {/* Main Hero Content */}
      <div className="flex-1 max-w-6xl mx-auto w-full px-6 flex flex-col md:flex-row items-center justify-center gap-12 relative z-10 py-12">
        
        {/* Left Column Text */}
        <div className="flex flex-col justify-center gap-6 max-w-xl w-full">
          <motion.div 
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0, duration: 1, ease: [0.16,1,0.3,1] }}
            className="liquid-glass rounded-full inline-flex items-center gap-3 px-5 py-2.5 w-fit"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-white glow-pulse"/>
            <span className="font-mono text-xs text-white/50 tracking-widest">
              LIVE · FO 510 · INDIA'S #1 PODCAST · 17.5M SUBSCRIBERS
            </span>
          </motion.div>

          <motion.h1 
            initial={{ y: 60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1, duration: 1, ease: [0.16,1,0.3,1] }}
            className="font-display text-[clamp(64px,10vw,120px)] text-white leading-[0.88] tracking-[-0.03em]"
          >
            Figure
            <em className="italic text-white/25 block"> Out</em>
          </motion.h1>
          
          <motion.div 
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="w-16 h-px bg-white/20 my-4 origin-left"
          />

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 1 }}
            className="font-body text-base md:text-lg text-white/40 leading-relaxed font-light max-w-sm"
          >
            "2.4k videos. 17.5 million subscribers. The world's sharpest minds at India's table."
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 1 }}
            className="flex gap-3 flex-wrap"
          >
            {["17.5M Subscribers", "2 Billion+ Views", "2.4k Videos"].map(stat => (
              <span key={stat} className="liquid-glass rounded-full px-4 py-2 font-mono text-xs text-white/60">
                {stat}
              </span>
            ))}
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 1 }}
            className="flex items-center gap-4 mt-2 flex-wrap"
          >
            <a href="https://www.youtube.com/@rajshamani" target="_blank" rel="noopener noreferrer" className="bg-white text-black rounded-full px-8 py-4 font-semibold text-sm hover:bg-white/90 transition flex items-center gap-2">
              Start Listening <Play className="w-4 h-4 fill-black" />
            </a>
            <a href="#episodes" className="liquid-glass rounded-full px-8 py-4 text-white text-sm flex items-center justify-center hover:bg-white/5 transition">
              Explore Episodes
            </a>
          </motion.div>
        </div>

        {/* Right Column 3D Portrait */}
        <div 
          className="w-full max-w-md aspect-[3/4] relative hidden md:block"
          style={{ perspective: '1200px' }}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          <div 
            style={{ 
              transform: `rotateY(${tilt.x}deg) rotateX(${-tilt.y}deg) translateZ(20px)`,
              transition: 'transform 0.15s linear',
              transformStyle: 'preserve-3d'
            }}
            className="w-full h-full rounded-3xl overflow-hidden relative liquid-glass shadow-2xl"
          >
            <img 
              src="https://yt3.googleusercontent.com/qSVJkhoSs6lw5cNMsZAJ8ZAk1pxiewDb_gLtnzOsyM5TWQ6YggQj0eBetOLSxFuJqgxsyQ73NA=s900-c-k-c0x00ffffff-no-rj" 
              alt="Raj Shamani"
              className="w-full h-full object-cover object-center"
              style={{ transform: 'translateZ(0px)' }}
            />
            
            <div 
              className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"
              style={{ transform: 'translateZ(10px)' }}
            />
            
            <div 
              className="absolute bottom-0 left-0 right-0 p-6 flex flex-col"
              style={{ transform: 'translateZ(30px)' }}
            >
              <h3 className="font-mono text-sm tracking-[0.25em] text-white/90 uppercase">Raj Shamani</h3>
              <p className="font-body text-xs text-white/40 mt-1">Entrepreneur · Podcaster · Author</p>
              <p className="font-body text-xs text-white/30 mt-0.5">Born 29 Jul 1997 · Indore, MP</p>
            </div>

            {/* Floating Top Right Badge */}
            <div 
              className="absolute top-4 right-4 liquid-glass rounded-full px-3 py-1.5 bg-black/40"
              style={{ transform: 'translateZ(40px)' }}
            >
              <span className="font-mono text-[10px] text-white/60 tracking-widest">#1 PODCAST IN INDIA</span>
            </div>
            
            {/* Orbit Badges */}
            <div className="absolute top-1/4 -left-4 animate-bounce" style={{ animationDuration: '4s' }}>
              <div className="liquid-glass rounded-2xl p-3 text-xs font-mono text-white/40 backdrop-blur-md">
                2.4k Videos
              </div>
            </div>

            <div className="absolute bottom-1/3 -right-4 animate-bounce" style={{ animationDuration: '5s', animationDelay: '1s' }}>
              <div className="liquid-glass rounded-2xl p-3 text-xs font-mono text-white/40 backdrop-blur-md">
                17.5M Subs
              </div>
            </div>
          </div>
        </div>
      </div>

      <MarqueeStrip />
    </section>
  );
}
