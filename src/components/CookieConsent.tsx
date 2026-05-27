import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ShieldCheck, X } from 'lucide-react';

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if the user has already made a selection
    const consent = localStorage.getItem('fo_cookie_consent_status');
    if (!consent) {
      // Delay presentation slightly to give a high-end feel
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAcceptAll = () => {
    localStorage.setItem('fo_cookie_consent_status', 'accepted');
    setIsVisible(false);
    // Let AdSense know it has consent (Google Consent Mode initialization helper)
    try {
      // @ts-ignore
      window.gtag?.('consent', 'update', {
        'ad_storage': 'granted',
        'analytics_storage': 'granted',
        'ad_user_data': 'granted',
        'ad_personalization': 'granted'
      });
    } catch (e) {
      // safe fallback
    }
  };

  const handleDeclineAll = () => {
    localStorage.setItem('fo_cookie_consent_status', 'declined');
    setIsVisible(false);
    try {
      // @ts-ignore
      window.gtag?.('consent', 'update', {
        'ad_storage': 'denied',
        'analytics_storage': 'denied',
        'ad_user_data': 'denied',
        'ad_personalization': 'denied'
      });
    } catch (e) {
      // safe fallback
    }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: 'spring', damping: 24, stiffness: 120 }}
          className="fixed bottom-6 left-6 right-6 md:left-auto md:right-6 md:max-w-md z-[9999] pointer-events-auto"
        >
          <div className="liquid-glass rounded-3xl p-6 md:p-8 border border-white/10 bg-black/90 backdrop-blur-2xl shadow-2xl shadow-black">
            <div className="flex items-start gap-4">
              <div className="bg-white/5 rounded-full p-2.5 shrink-0 border border-white/5">
                <ShieldCheck className="w-5 h-5 text-white/80" />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <h3 className="font-mono text-[10px] tracking-[0.25em] uppercase text-white/80">Cookie Settings</h3>
                  <button 
                    onClick={() => setIsVisible(false)}
                    className="text-white/30 hover:text-white transition-colors"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
                
                <p className="font-body text-xs text-white/50 leading-relaxed mt-3">
                  We use cookies to analyze our traffic, evaluate personalization performance, and deliver relevant, customized advertising through Google AdSense. See how Google manages personalized data in our{' '}
                  <Link to="/privacy" className="text-white/80 underline underline-offset-2 hover:text-white transition-colors">
                    Privacy Policy
                  </Link>.
                </p>

                <div className="flex items-center gap-2.5 mt-6 w-full">
                  <button
                    onClick={handleAcceptAll}
                    className="flex-1 bg-white hover:bg-white/90 text-black text-xs font-semibold py-3 px-4 rounded-xl transition duration-200"
                  >
                    Accept All
                  </button>
                  <button
                    onClick={handleDeclineAll}
                    className="flex-1 hover:bg-white/5 text-white/50 hover:text-white border border-white/10 text-xs font-semibold py-3 px-4 rounded-xl transition duration-200"
                  >
                    Decline
                  </button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
