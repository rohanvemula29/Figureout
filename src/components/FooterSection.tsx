import React from 'react';
import { Youtube, Instagram, Twitter, Linkedin, Music, Headphones } from 'lucide-react';

export default function FooterSection() {
  return (
    <footer className="bg-black pt-20 pb-10 px-6 border-t border-white/5">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 lg:gap-16">
          {/* Col 1 */}
          <div className="col-span-1">
            <span className="font-mono font-bold text-3xl text-white tracking-[0.2em] block mb-4">FO</span>
            <p className="font-body text-sm text-white/40 mb-1">Figuring Out with Raj Shamani</p>
            <p className="font-mono text-[9px] text-white/25 tracking-widest uppercase mb-8">
              India's #1 Business Podcast
            </p>
            <div className="flex gap-3">
              <a href="https://www.youtube.com/@rajshamani" target="_blank" rel="noopener noreferrer" className="liquid-glass rounded-full p-2.5 text-white/40 hover:text-white transition-colors">
                <Youtube className="w-4 h-4" />
              </a>
              <a href="https://www.instagram.com/rajshamani/" target="_blank" rel="noopener noreferrer" className="liquid-glass rounded-full p-2.5 text-white/40 hover:text-white transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="https://twitter.com/rajshamani" target="_blank" rel="noopener noreferrer" className="liquid-glass rounded-full p-2.5 text-white/40 hover:text-white transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="https://www.linkedin.com/in/rajshamani/" target="_blank" rel="noopener noreferrer" className="liquid-glass rounded-full p-2.5 text-white/40 hover:text-white transition-colors">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="https://open.spotify.com/show/0O1BEE3hHksV17EunV0m9b" target="_blank" rel="noopener noreferrer" className="liquid-glass rounded-full p-2.5 text-white/40 hover:text-white transition-colors">
                <Music className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2 */}
          <div className="flex flex-col gap-4">
            <p className="font-mono text-[10px] text-white/40 tracking-widest uppercase mb-2">Episodes</p>
            <a href="#top-videos" className="font-body text-sm text-white/30 hover:text-white transition-colors w-fit">Top Videos</a>
            <a href="#recent" className="font-body text-sm text-white/30 hover:text-white transition-colors w-fit">Recent Episodes</a>
            <a href="#guests" className="font-body text-sm text-white/30 hover:text-white transition-colors w-fit">Guest Archive</a>
            <a href="https://www.youtube.com/@rajshamani/shorts" target="_blank" rel="noopener noreferrer" className="font-body text-sm text-white/30 hover:text-white transition-colors w-fit">Shorts & Clips</a>
          </div>

          {/* Col 3 */}
          <div className="flex flex-col gap-4">
            <p className="font-mono text-[10px] text-white/40 tracking-widest uppercase mb-2">Raj Shamani</p>
            <a href="#about" className="font-body text-sm text-white/30 hover:text-white transition-colors w-fit">About Raj</a>
            <a href="#book" className="font-body text-sm text-white/30 hover:text-white transition-colors w-fit">Build Don't Talk</a>
            <a href="https://houseofx.in/" target="_blank" rel="noopener noreferrer" className="font-body text-sm text-white/30 hover:text-white transition-colors w-fit">House of X</a>
            <a href="https://shamaniindustries.com/" target="_blank" rel="noopener noreferrer" className="font-body text-sm text-white/30 hover:text-white transition-colors w-fit">Shamani Industries</a>
          </div>

          {/* Col 4 */}
          <div className="flex flex-col gap-4">
            <p className="font-mono text-[10px] text-white/40 tracking-widest uppercase mb-2">Listen On</p>
            <a href="https://www.youtube.com/@rajshamani" target="_blank" rel="noopener noreferrer" className="font-body text-sm text-white/30 hover:text-white transition-colors w-fit">YouTube</a>
            <a href="https://open.spotify.com/show/0O1BEE3hHksV17EunV0m9b" target="_blank" rel="noopener noreferrer" className="font-body text-sm text-white/30 hover:text-white transition-colors w-fit">Spotify</a>
            <a href="https://podcasts.apple.com/in/podcast/figuring-out-with-raj-shamani/id1507401340" target="_blank" rel="noopener noreferrer" className="font-body text-sm text-white/30 hover:text-white transition-colors w-fit">Apple Podcasts</a>
            <a href="https://music.amazon.in/podcasts/4cbfe4aa-c92c-4731-ac07-ba7e8e503b41/figuring-out-with-raj-shamani" target="_blank" rel="noopener noreferrer" className="font-body text-sm text-white/30 hover:text-white transition-colors w-fit">Amazon Music</a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/5 mt-16 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          <p className="font-mono text-[10px] text-white/15 uppercase tracking-wide">
            © 2026 Figuring Out Media · 17.5M subscribers · 2.4k videos. All rights reserved.
          </p>
          <p className="font-mono text-[10px] text-white/15 uppercase tracking-wide">
            Made with questions. 🎙️
          </p>
        </div>
      </div>
    </footer>
  );
}
