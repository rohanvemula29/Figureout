import React from 'react';
import { motion, useInView } from 'framer-motion';

export default function BioSection() {
  const containerRef = React.useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-80px" });

  const chapters = [
    {
      num: "01",
      title: "THE BOY CALLED USELESS",
      tagline: "The kid they called lazy. The one teachers dismissed. The one relatives didn't believe in. His name was Raj Shamani — and he was figuring it all out from day one.",
      detail: "Born on 29 July 1997 in Indore, Madhya Pradesh, Raj grew up in a Sindhi family steeped in trade. His father Suresh Shamani ran a textile and chemical trading business. But childhood was not easy. Raj was frequently labeled 'lazy' and 'useless' by older relatives and teachers, performing poorly in school. Today, he wears that label as a badge of honour."
    },
    {
      num: "02",
      title: "THE ₹10,000 BET",
      tagline: "His father's health collapsed. The family finances crumbled. So at 16, Raj launched a dishwashing liquid brand — and sold it door-to-door on the streets of Indore.",
      detail: "The product was called 'Jadugar Drop' — a dishwashing liquid he made by hand and sold building to building. In just 18 months, Raj helped scale the business 20×. What started with one product became Shamani Industries, a manufacturer and distributor of household cleaning products across central India. His first masterclass in business wasn't at a university — it was on a street corner."
    },
    {
      num: "03",
      title: "THE PODCAST THAT CHANGED INDIA",
      tagline: "In 2021, Raj sat down with a mic and started asking the world's smartest people the questions everyone wanted answered. Figuring Out was born.",
      detail: "What began as a business podcast quickly became India's most-watched long-form interview show. The guest list reads like a dream: Bill Gates on innovation and India's future. Vijay Mallya's first interview in nine years — 30 million views. Emmanuel Macron on France-India ties, declaring the podcast would be '#1 in the world in 18 months.' MrBeast on the creator economy. Michael Phelps on the champion mindset. MS Dhoni's first-ever podcast appearance. By 2025, Figuring Out surpassed Joe Rogan and Diary of a CEO on Spotify India — ranked #25 globally. The mission: bring the world's top 1% to India's 1.4 billion."
    },
    {
      num: "04",
      title: "STAGES & SUMMITS",
      tagline: "The kid who once feared public speaking went on to address the United Nations. Four TEDx talks. A speech before the Prime Minister. The world became his stage.",
      detail: "Raj has spoken in 26+ countries and delivered 200+ speeches. In 2024, he was the anchor and speaker at the inaugural National Creators Award, where he introduced Prime Minister Narendra Modi to the stage — and received a shout-out from the PM himself: 'Keep creating and inspiring.' He was recognized as the youngest Indian to speak at the UN Youth Assembly. Forbes named him to their 30 Under 30 list. Somewhere along the way, the boy who stumbled over words became one of India's most sought-after voices."
    },
    {
      num: "05",
      title: "THE BUILDER",
      tagline: "He co-founded House of X to turn creators into entrepreneurs. He wrote 'Build, Don't Talk' — a bestselling book that became a movement. He invested in startups. He kept building.",
      detail: "In September 2022, Raj co-founded House of X with Neeraj Kumawat — a tech platform that helps digital creators launch direct-to-consumer brands. The venture raised seed funding from Lightspeed, Razorpay, and Mamaearth's founders, and has already launched brands like Blanko (with popstar King, hitting ₹1 crore/month in revenue) and YFL Home (with chef Sanjyot Keer). His book 'Build, Don't Talk: Things You Wish You Were Taught in School' (Penguin Random House, 2022) became a cult read among India's young entrepreneurs. As an angel investor, Raj has backed startups including Classplus, GrowthSchool, Wint Wealth, and Neko Health. His dog is named Crypto. That tells you everything."
    }
  ];

  const sidebarData = [
    { label: "FULL NAME", value: "Raj Shamani" },
    { label: "BORN", value: "29 July 1997" },
    { label: "ORIGIN", value: "Indore, Madhya Pradesh" },
    { label: "EDUCATION", value: "Emerald Heights Intl. School · BBA, Prestige Institute of Management" },
    { label: "PROFESSION", value: "Entrepreneur · Podcaster · Author · Angel Investor" },
    { label: "PODCAST", value: "Figuring Out with Raj Shamani (2021–)" },
    { label: "BOOK", value: "\"Build, Don't Talk\" (Penguin, 2022)" },
    { label: "COMPANY", value: "Shamani Industries · House of X" },
    { label: "EPISODES", value: "2.4k and counting" },
    { label: "SUBSCRIBERS", value: "17.5M+ on YouTube" },
    { label: "TOTAL VIEWS", value: "2B+ all-time · 400M+ annually" },
    { label: "INSTAGRAM", value: "@rajshamani · 8.2M followers" },
    { label: "NET WORTH", value: "₹91 Cr (~$11M) (est. 2024–2025)" },
    { label: "SPEAKS AT", value: "TEDx (4×) · UN Youth Assembly · National Creators Award" },
    { label: "NOTABLE", value: "Forbes 30 Under 30 · Youngest Indian at UN Youth Assembly · Ranked #25 globally" },
    { label: "DOG", value: "Crypto 🐾" },
  ];

  return (
    <section id="bio" className="bg-black py-24 md:py-40 px-6 overflow-hidden relative" ref={containerRef}>
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-6xl mx-auto"
      >
        <p className="font-mono text-xs text-white/25 tracking-[0.4em] uppercase mb-16">
          ABOUT THE HOST
        </p>
        <div className="w-full h-px bg-white/5 mb-24" />

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2px_2fr] gap-12 lg:gap-0">
          
          {/* Left Column Sidebar */}
          <div className="lg:pr-12">
            <div className="liquid-glass rounded-3xl p-6 md:p-8 h-fit lg:sticky lg:top-24">
              <div className="mb-6 hidden lg:block">
                <p className="font-mono text-[10px] text-white/10 uppercase tracking-widest">Dossier</p>
                <div className="w-12 h-px bg-white/10 mt-2" />
              </div>
              {sidebarData.map((item, i) => (
                <div key={i} className="border-b border-white/5 py-3 md:py-4 last:border-0 hover:bg-white/5 transition-colors -mx-6 px-6 md:-mx-8 md:px-8">
                  <p className="font-mono text-[9px] md:text-[10px] text-white/20 tracking-[0.25em] uppercase">{item.label}</p>
                  <p className="font-body text-sm text-white/70 mt-1 leading-relaxed">{item.value}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Center Column Divider */}
          <div className="hidden lg:block w-px bg-white/8 mx-auto" />

          {/* Right Column Chapters */}
          <div className="lg:pl-16 flex flex-col gap-24">
            {chapters.map((chapter, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.8, delay: 0.1 * i }}
              >
                <div className="font-mono text-[10px] text-white/15 tracking-widest mb-4">
                  {chapter.num} / {chapter.title}
                </div>
                <h3 className="font-display italic text-3xl md:text-4xl text-white/80 leading-[1.45]">
                  {chapter.tagline}
                </h3>
                <p className="font-body text-sm text-white/35 leading-relaxed mt-6">
                  {chapter.detail}
                </p>
              </motion.div>
            ))}
          </div>

        </div>
      </motion.div>
    </section>
  );
}
