import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import FooterSection from '../components/FooterSection';

export default function TermsPage() {
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
        
        <h1 className="font-display text-4xl md:text-6xl text-white mb-12">Terms of Service</h1>
        
        <div className="space-y-8 font-body leading-relaxed">
          <section>
            <h2 className="text-white text-xl font-medium mb-4">1. Agreement to Terms</h2>
            <p>By accessing our website, you agree to be bound by these terms of service, all applicable laws and regulations, and agree that you are responsible for compliance with any applicable local laws.</p>
          </section>

          <section>
            <h2 className="text-white text-xl font-medium mb-4">2. Use License</h2>
            <p>Permission is granted to temporarily download one copy of the materials (information or software) on Figuring Out's website for personal, non-commercial transitory viewing only.</p>
          </section>

          <section>
            <h2 className="text-white text-xl font-medium mb-4">3. Disclaimer</h2>
            <p>The materials on Figuring Out's website are provided on an 'as is' basis. Figuring Out makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.</p>
          </section>

          <section>
            <h2 className="text-white text-xl font-medium mb-4">4. Governing Law</h2>
            <p>These terms and conditions are governed by and construed in accordance with the laws of India and you irrevocably submit to the exclusive jurisdiction of the courts in that State or location.</p>
          </section>
        </div>
      </div>
      <FooterSection />
    </motion.div>
  );
}
