import React from 'react';
import { motion } from 'framer-motion';

import HeroSection from '../components/HeroSection';
import OnboardingSection from '../components/OnboardingSection';
import BioSection from '../components/BioSection';
import StorySection from '../components/StorySection';
import StatsSection from '../components/StatsSection';
import FeaturedVideoSection from '../components/FeaturedVideoSection';
import TopVideosSection from '../components/TopVideosSection';
import CommentsSection from '../components/CommentsSection';
import MostLikedSection from '../components/MostLikedSection';
import EpisodesDetailSection from '../components/EpisodesDetailSection';
import WisdomVault from '../components/WisdomVault';
import GuestsSection from '../components/GuestsSection';
import BookSection from '../components/BookSection';
import RecentSection from '../components/RecentSection';
import PlatformsSection from '../components/PlatformsSection';
import NewsletterSection from '../components/NewsletterSection';
import FooterSection from '../components/FooterSection';
import AdSlot from '../components/AdSlot';

export default function HomePage() {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <HeroSection />
      
      {/* Ad Slot After Hero */}
      <AdSlot id="hero-under-ad" />

      <OnboardingSection />
      <BioSection />
      <StorySection />
      <StatsSection />
      
      {/* Ad Slot Mid Content */}
      <AdSlot id="mid-content-ad" />

      <FeaturedVideoSection />
      <TopVideosSection />
      <CommentsSection />
      
      {/* Ad Slot Near Engagement */}
      <AdSlot id="engagement-ad" />

      <MostLikedSection />
      <EpisodesDetailSection />
      <WisdomVault />
      <GuestsSection />
      <BookSection />
      <RecentSection />
      <PlatformsSection />
      <NewsletterSection />
      
      {/* Privacy-friendly Ad Slot before footer */}
      <AdSlot id="footer-top-ad" />

      <FooterSection />
    </motion.div>
  );
}
