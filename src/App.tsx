import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import HeroSection from './components/HeroSection';
import OnboardingSection from './components/OnboardingSection';
import BioSection from './components/BioSection';
import StorySection from './components/StorySection';
import StatsSection from './components/StatsSection';
import FeaturedVideoSection from './components/FeaturedVideoSection';
import TopVideosSection from './components/TopVideosSection';
import CommentsSection from './components/CommentsSection';
import MostLikedSection from './components/MostLikedSection';
import EpisodesDetailSection from './components/EpisodesDetailSection';
import WisdomVault from './components/WisdomVault';
import GuestsSection from './components/GuestsSection';
import BookSection from './components/BookSection';
import RecentSection from './components/RecentSection';
import PlatformsSection from './components/PlatformsSection';
import NewsletterSection from './components/NewsletterSection';
import FooterSection from './components/FooterSection';

export default function App() {
  return (
    <>
      <div className="grain-overlay" />
      <AnimatePresence>
        <motion.main 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="bg-black text-white selection:bg-white/20 selection:text-white"
        >
          <HeroSection />
          <OnboardingSection />
          <BioSection />
          <StorySection />
          <StatsSection />
          <FeaturedVideoSection />
          <TopVideosSection />
          <CommentsSection />
          <MostLikedSection />
          <EpisodesDetailSection />
          <WisdomVault />
          <GuestsSection />
          <BookSection />
          <RecentSection />
          <PlatformsSection />
          <NewsletterSection />
          <FooterSection />
        </motion.main>
      </AnimatePresence>
    </>
  );
}

