import React from 'react';
import { Youtube, Headphones, Mic, Radio } from 'lucide-react';

export default function PlatformsSection() {
  const platforms = [
    { name: "YouTube", sub: "WATCH FULL VIDEO", icon: Youtube, link: "https://www.youtube.com/@rajshamani" },
    { name: "Spotify", sub: "LISTEN ON THE GO", icon: Headphones, link: "https://open.spotify.com/show/736rhmW7vilNgkFFo8aDz4" },
    { name: "Apple Podcasts", sub: "LISTEN ON iOS", icon: Mic, link: "https://podcasts.apple.com/podcast/id1502476579" },
    { name: "Amazon Music", sub: "AD-FREE AUDIO", icon: Radio, link: "https://www.audible.in/podcast/Figuring-Out-with-Raj-Shamani/B08JJNXJ3J" }
  ];

  return (
    <section className="bg-black py-16 px-6 border-t border-white/5 w-full">
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
        {platforms.map((platform, i) => {
          const Icon = platform.icon;
          return (
            <a 
              key={i} 
              href={platform.link}
              target="_blank"
              rel="noopener noreferrer"
              className="liquid-glass rounded-2xl p-6 flex flex-col items-center justify-center gap-3 hover:bg-white/10 transition-all hover:-translate-y-1 group cursor-pointer text-center"
            >
              <Icon className="w-7 h-7 text-white/40 group-hover:text-white/80 transition-colors" />
              <div>
                <h4 className="font-body text-sm font-medium text-white/60 group-hover:text-white/90 transition-colors">
                  {platform.name}
                </h4>
                <p className="font-mono text-[9px] text-white/20 tracking-widest uppercase mt-1">
                  {platform.sub}
                </p>
              </div>
            </a>
          );
        })}
      </div>
    </section>
  );
}
