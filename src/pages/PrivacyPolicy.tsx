import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import FooterSection from '../components/FooterSection';

export default function PrivacyPolicy() {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="bg-black min-h-screen text-white/80"
    >
      <div className="max-w-4xl mx-auto px-6 py-20">
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 text-white/40 hover:text-white transition-colors mb-12 font-mono text-xs uppercase tracking-widest"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Home
        </Link>
        
        <h1 className="font-display text-4xl md:text-6xl text-white mb-12">Privacy Policy</h1>
        
        <div className="space-y-8 font-body leading-relaxed">
          <section>
            <h2 className="text-white text-xl font-medium mb-4">Introduction</h2>
            <p>Welcome to Figuring Out. We respect your privacy and are committed to protecting your personal data. This privacy policy will inform you about how we look after your personal data when you visit our website.</p>
          </section>

          <section>
            <h2 className="text-white text-xl font-medium mb-4">Data We Collect</h2>
            <p>We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows:</p>
            <ul className="list-disc pl-6 mt-4 space-y-2">
              <li><strong>Technical Data:</strong> includes internet protocol (IP) address, your login data, browser type and version, time zone setting and location, browser plug-in types and versions, operating system and platform, and other technology on the devices you use to access this website.</li>
              <li><strong>Usage Data:</strong> includes information about how you use our website, products and services.</li>
              <li><strong>Marketing and Communications Data:</strong> includes your preferences in receiving marketing from us and our third parties and your communication preferences.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-white text-xl font-medium mb-4">Cookies &amp; Advertising</h2>
            <p>Our website uses Google AdSense to serve and display advertisements to visitors. Our advertising partners (specifically Google) use tracking cookies, web beacons, and IP addresses to serve personalized or non-personalized advertisements based on your visits to our site and other pages on the internet.</p>
            <ul className="list-disc pl-6 mt-4 space-y-2">
              <li>Third-party vendors, including Google, use cookies to serve ads based on prior visits to our website or other websites on the internet.</li>
              <li>Google's use of advertising cookies enables it and its partners to serve ads to our users based on their visits to our site and/or other sites across the internet.</li>
              <li>We do not pass any personally identifiable information (PII) to Google, and we respect user privacy choices.</li>
              <li>You may opt out of personalized advertising at any time by visiting Google's <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer" className="text-white underline">Ads Settings page</a>.</li>
              <li>If you have not opted out of third-party ad serving, cookies of other third-party vendors or ad networks may also be used to serve ads.</li>
            </ul>
            <p className="mt-4">To learn more about how Google collects and processes tracking data when you explore our platform, you should review: <a href="https://policies.google.com/technologies/partner-sites" target="_blank" rel="noopener noreferrer" className="text-red-500 underline font-medium hover:text-red-400">How Google uses data when you use our partners' sites or apps</a>.</p>
          </section>

          <section>
            <h2 className="text-white text-xl font-medium mb-4">Contact Us</h2>
            <p>If you have any questions about this privacy policy or our privacy practices, please contact ROHAN VEMULA at rohanvemula7@gmail.com.</p>
          </section>
        </div>
      </div>
      <FooterSection />
    </motion.div>
  );
}
