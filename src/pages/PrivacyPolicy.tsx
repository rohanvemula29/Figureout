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
            <h2 className="text-white text-xl font-medium mb-4">Cookies & Advertising</h2>
            <p>Our website uses Google AdSense to display advertisements. Google uses cookies to serve ads based on a user's prior visits to your website or other websites. Google's use of advertising cookies enables it and its partners to serve ads to our users based on their visit to our sites and/or other sites on the Internet.</p>
            <ul className="list-disc pl-6 mt-4 space-y-2">
              <li>Third party vendors, including Google, use cookies to serve ads based on a user's prior visits to your website or other websites.</li>
              <li>Google's use of advertising cookies enables it and its partners to serve ads to your users based on their visit to your sites and/or other sites on the Internet.</li>
              <li>Users may opt out of personalized advertising by visiting <a href="https://www.google.com/settings/ads" className="text-white underline">Ads Settings</a>.</li>
            </ul>
            <p className="mt-4">You can learn more about how Google uses data when you use our partners' sites or apps by visiting <a href="https://www.google.com/policies/privacy/partners/" className="text-white underline">Google's Privacy & Terms site</a>.</p>
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
