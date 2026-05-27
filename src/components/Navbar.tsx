import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight, ChevronRight, Sparkles } from 'lucide-react';

interface NavLinkItem {
  name: string;
  href: string;
  isExternal?: boolean;
}

const NAV_LINKS: NavLinkItem[] = [
  { name: 'Home', href: 'home' },
  { name: 'Episodes', href: 'recent' },
  { name: 'Bio', href: 'bio' },
  { name: 'Wisdom', href: 'wisdom-vault' },
  { name: 'Book', href: 'book' },
  { name: 'Privacy', href: '/privacy' },
  { name: 'Terms', href: '/terms' }
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  // Track page scroll to add backing glass background opacity on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile drawer on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const handleNavClick = (link: NavLinkItem, e: React.MouseEvent) => {
    // If it's a page route (e.g. starting with '/')
    if (link.href.startsWith('/')) {
      return; // let standard Link click handle it
    }

    e.preventDefault();
    setIsOpen(false);

    if (location.pathname !== '/') {
      // Direct back to home first, and append the anchor hash
      navigate(`/#${link.href}`);
      // The scroll-to-hash effect on load will capture it
    } else {
      // Find element and scroll
      const element = document.getElementById(link.href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      } else if (link.href === 'home') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
  };

  // Helper inside standard Link in search of smooth scrolls on load
  useEffect(() => {
    if (location.hash && location.pathname === '/') {
      const id = location.hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        // Delay slightly for render completion
        const timer = setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
        return () => clearTimeout(timer);
      }
    }
  }, [location]);

  return (
    <>
      <nav 
        id="navbar-root"
        className={`fixed top-0 left-0 right-0 z-[9990] transition-all duration-300 px-4 md:px-8 py-4 ${
          scrolled ? 'bg-black/80 backdrop-blur-xl border-b border-white/5 py-3' : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          
          {/* Logo Brand */}
          <Link to="/" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="flex items-center group">
            <span className="font-mono font-bold text-lg md:text-xl text-white tracking-[0.15em] transition-transform duration-200 group-hover:scale-105">
              FO
            </span>
            <div className="w-px h-4 bg-white/20 mx-3 md:mx-4" />
            <div className="flex items-center gap-2">
              <span className="font-body text-xs md:text-sm text-white/55 font-medium group-hover:text-white transition-colors">
                Figuring Out
              </span>
              <div className="hidden xs:flex items-center gap-1.5 bg-white/5 rounded-full px-2 py-0.5 border border-white/5">
                <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
                <span className="font-mono text-[8px] md:text-[9px] text-white/50 tracking-wider">17.5M+</span>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-7 lg:gap-8 bg-white/[0.03] backdrop-blur-md rounded-full px-7 py-2.5 border border-white/5">
            {NAV_LINKS.map(link => {
              const isRoute = link.href.startsWith('/');
              return isRoute ? (
                <Link
                  key={link.name}
                  to={link.href}
                  className={`font-body text-xs lg:text-sm tracking-wide transition-colors ${
                    location.pathname === link.href ? 'text-white font-medium' : 'text-white/50 hover:text-white'
                  }`}
                >
                  {link.name}
                </Link>
              ) : (
                <a
                  key={link.name}
                  href={`#${link.href}`}
                  onClick={(e) => handleNavClick(link, e)}
                  className="font-body text-xs lg:text-sm tracking-wide text-white/50 hover:text-white transition-colors"
                >
                  {link.name}
                </a>
              );
            })}
          </div>

          {/* Call to Actions */}
          <div className="flex items-center gap-3">
            <a 
              href="https://www.youtube.com/@rajshamani?sub_confirmation=1" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="bg-white text-black hover:bg-white/90 rounded-full px-4 md:px-5 py-2 text-xs font-semibold font-body transition shadow-lg shadow-white/5"
            >
              Subscribe
            </a>

            {/* Mobile Burger Toggle Button */}
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden flex items-center justify-center p-2 rounded-full border border-white/10 hover:bg-white/5 text-white/70 hover:text-white transition-all cursor-pointer"
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>

        </div>
      </nav>

      {/* Full Face Mobile Drawer Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="fixed inset-0 top-[64px] z-[9980] bg-black/95 backdrop-blur-2xl md:hidden overflow-y-auto px-6 py-8 flex flex-col justify-between"
          >
            <div className="flex flex-col gap-5 mt-4">
              <span className="font-mono text-[9px] text-white/30 tracking-[0.3em] uppercase block border-b border-white/5 pb-2">
                Navigation & Chapters
              </span>
              
              <div className="flex flex-col gap-2">
                {NAV_LINKS.map((link, idx) => {
                  const isRoute = link.href.startsWith('/');
                  const isActive = isRoute && location.pathname === link.href;
                  
                  return (
                    <motion.div
                      key={link.name}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.05 }}
                    >
                      {isRoute ? (
                        <Link
                          to={link.href}
                          className={`flex items-center justify-between p-4 rounded-2xl border ${
                            isActive 
                              ? 'bg-white/10 border-white/15 text-white' 
                              : 'bg-white/[0.02] border-white/5 text-white/60 hover:text-white'
                          } transition-all`}
                        >
                          <span className="font-body text-sm font-medium">{link.name} Suite</span>
                          <ChevronRight className="w-4 h-4 opacity-40" />
                        </Link>
                      ) : (
                        <a
                          href={`#${link.href}`}
                          onClick={(e) => handleNavClick(link, e)}
                          className="flex items-center justify-between p-4 rounded-2xl bg-white/[0.02] border border-white/5 text-white/60 hover:text-white hover:bg-white/5 transition-all"
                        >
                          <span className="font-body text-sm font-medium">{link.name}</span>
                          <div className="flex items-center gap-2">
                            <span className="font-mono text-[9px] text-white/20">#{link.href}</span>
                            <ChevronRight className="w-4 h-4 opacity-40" />
                          </div>
                        </a>
                      )}
                    </motion.div>
                  );
                })}
              </div>
            </div>

            {/* Bottom Section inside Mobile Drawer */}
            <div className="flex flex-col gap-6 mt-12 bg-white/[0.02] border border-white/5 p-6 rounded-2xl">
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-white/50" />
                <span className="font-mono text-[9px] text-white/40 tracking-wider uppercase">Build, Don't Talk</span>
              </div>
              <p className="font-body text-xs text-white/40 leading-relaxed">
                Unlock 2,400+ hours of wisdom with Raj Shamani and India's finest leaders.
              </p>
              <div className="flex gap-3">
                <a 
                  href="#book"
                  onClick={(e) => {
                    e.preventDefault();
                    setIsOpen(false);
                    const element = document.getElementById('book');
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    } else if (location.pathname !== '/') {
                      navigate('/#book');
                    }
                  }}
                  className="flex-1 text-center bg-white/5 hover:bg-white/10 border border-white/10 text-white font-medium py-3 rounded-xl text-xs selection:bg-transparent"
                >
                  Buy Bestseller
                </a>
                <a 
                  href="mailto:rohanvemula7@gmail.com"
                  className="flex-1 text-center bg-white text-black font-semibold py-3 rounded-xl text-xs"
                >
                  Contact Us
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
