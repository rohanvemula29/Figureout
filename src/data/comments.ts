// src/data/comments.ts
// Real FigureOut community comments – sourced from FO476 (Simon Sinek), FO473 (Emmanuel Macron),
// FO174 (Dr. Velumani), FO457 (Rajiv Talreja), and audience demand threads. May 2026.

export interface Comment {
  id: number;
  category: "hosting" | "education" | "guest" | "impact";
  categoryLabel: string; // short label for the pill badge
  text: string;
  // 3D space positioning
  x: string;       // % from left
  y: string;       // % from top
  z: number;       // depth: -200 (far) to +200 (near)
  rotX: number;    // tilt X in degrees
  rotY: number;    // tilt Y in degrees
  // Animation
  floatAmt: number;  // px to float up/down
  drift: number;     // z-axis drift range
  duration: number;  // animation loop seconds
  delay: number;     // start delay seconds
  width: string;   // tailwind width class
}

export const comments: Comment[] = [
  // ── 1. HOSTING & INTERVIEW STYLE ────────────────────
  {
    id: 1,
    category: "hosting",
    categoryLabel: "On Hosting",
    text: "Bro literally asked the President 'TELL ME ABOUT YOURSELF in 30 SECONDS' 😂",
    x: "4%", y: "6%", z: 140, rotX: -3, rotY: 7,
    floatAmt: -18, drift: 30, duration: 7.2, delay: 0, width: "w-[280px]",
  },
  {
    id: 2,
    category: "hosting",
    categoryLabel: "On Hosting",
    text: "OMG! I haven't even digested the fact that he got Dr Joe Dispenza and now Simon Sinek. Dude is on a roll and it's awesome!",
    x: "62%", y: "4%", z: 90, rotX: 2, rotY: -6,
    floatAmt: -14, drift: 22, duration: 6.8, delay: 0.6, width: "w-[270px]",
  },
  {
    id: 3,
    category: "hosting",
    categoryLabel: "On Hosting",
    text: "RAJ SHAMANI is the Steven Bartlett of India. His channel is the Indian version of the Diary of a CEO! Great job man, I don't believe the kind of people you manage to get like the President of France !!!",
    x: "28%", y: "14%", z: 170, rotX: -2, rotY: 5,
    floatAmt: -22, drift: 34, duration: 7.8, delay: 1.2, width: "w-[300px]",
  },
  {
    id: 4,
    category: "hosting",
    categoryLabel: "On Hosting",
    text: "Bro has some serious connections ☠️",
    x: "74%", y: "18%", z: -50, rotX: 4, rotY: -9,
    floatAmt: -10, drift: 16, duration: 9.4, delay: 1.8, width: "w-[240px]",
  },

  // ── 2. EDUCATIONAL VALUE ────────────────────────────
  {
    id: 5,
    category: "education",
    categoryLabel: "On Value",
    text: "Working hard for something we don't care about is called stress. Working hard for something we love is called passion — Simon Oliver Sinek",
    x: "6%", y: "36%", z: 50, rotX: -4, rotY: 11,
    floatAmt: -16, drift: 20, duration: 8.1, delay: 0.3, width: "w-[280px]",
  },
  {
    id: 6,
    category: "education",
    categoryLabel: "On Value",
    text: "Best line for me and many young Indians was 'Poverty gives you the power to take fast decisions' 💪",
    x: "48%", y: "28%", z: 110, rotX: 3, rotY: -7,
    floatAmt: -20, drift: 28, duration: 7.5, delay: 2.1, width: "w-[290px]",
  },
  {
    id: 7,
    category: "education",
    categoryLabel: "On Value",
    text: "'Success is delta' — what a line 🔥",
    x: "80%", y: "42%", z: -90, rotX: -3, rotY: 6,
    floatAmt: -8, drift: 12, duration: 10.2, delay: 0.9, width: "w-[240px]",
  },
  {
    id: 8,
    category: "education",
    categoryLabel: "On Value",
    text: "boredom is actually a source of creativity. When we step away from our smartphones, take a quiet walk, sit with silence… our mind finally gets space to breathe.",
    x: "22%", y: "48%", z: -20, rotX: 2, rotY: 8,
    floatAmt: -15, drift: 18, duration: 8.6, delay: 1.5, width: "w-[285px]",
  },

  // ── 3. GUEST DEMAND & VIRALITY ──────────────────────
  {
    id: 9,
    category: "guest",
    categoryLabel: "Guest Demand",
    text: "vote for - David Goggins 🔥",
    x: "5%", y: "60%", z: 155, rotX: -5, rotY: -4,
    floatAmt: -24, drift: 36, duration: 6.5, delay: 0.4, width: "w-[240px]",
  },
  {
    id: 10,
    category: "guest",
    categoryLabel: "Guest Demand",
    text: "NOW THE AUDIENCE DEMAND PUTIN ☠️☠️☠️",
    x: "58%", y: "54%", z: 80, rotX: 2, rotY: -8,
    floatAmt: -18, drift: 25, duration: 8.5, delay: 0.8, width: "w-[270px]",
  },
  {
    id: 11,
    category: "guest",
    categoryLabel: "Viral Comment",
    text: "yeah now audience demand 'Kim Jong Un'.... (55k likes)",
    x: "3%", y: "78%", z: -30, rotX: 3, rotY: 9,
    floatAmt: -12, drift: 22, duration: 9.0, delay: 2.4, width: "w-[285px]",
  },
  {
    id: 12,
    category: "guest",
    categoryLabel: "Global Reach",
    text: "I'm French, awesome video! Love from France! 🇫🇷",
    x: "40%", y: "66%", z: 70, rotX: -2, rotY: -5,
    floatAmt: -17, drift: 28, duration: 7.9, delay: 1.1, width: "w-[260px]",
  },

  // ── 4. PERSONAL IMPACT & INSPIRATION ────────────────
  {
    id: 13,
    category: "impact",
    categoryLabel: "On Impact",
    text: "This wasn't just a podcast, it felt like a reality check. The trust crisis and Gen Z burnout conversation is something India seriously needs to address.",
    x: "14%", y: "82%", z: 100, rotX: -3, rotY: 10,
    floatAmt: -21, drift: 32, duration: 7.3, delay: 1.9, width: "w-[300px]",
  },
  {
    id: 14,
    category: "impact",
    categoryLabel: "On Impact",
    text: "I have worked for 3 years in Thyrocare. They hired me as a fresher, I am very proud of you Sir 🙏",
    x: "55%", y: "80%", z: 35, rotX: 2, rotY: -6,
    floatAmt: -13, drift: 19, duration: 8.4, delay: 0.5, width: "w-[275px]",
  },
  {
    id: 15,
    category: "impact",
    categoryLabel: "On Impact",
    text: "Best podcast ever, when he told 'there are Tamil audience across the world unko happiness aana chahiye' — proud as a Tamilian ❤️",
    x: "85%", y: "84%", z: -110, rotX: -4, rotY: 7,
    floatAmt: -7, drift: 11, duration: 11.2, delay: 1.3, width: "w-[280px]",
  },
  {
    id: 16,
    category: "impact",
    categoryLabel: "Cultural Moment",
    text: "YouTube on normal days 🐧 YouTube on board exam 💀 (15k likes)",
    x: "32%", y: "88%", z: -55, rotX: 3, rotY: -5,
    floatAmt: -11, drift: 17, duration: 9.7, delay: 2.7, width: "w-[270px]",
  },

  // ── 5. COMMUNITY LOVE (extra to reach 18) ──────────
  {
    id: 17,
    category: "impact",
    categoryLabel: "On Impact",
    text: "Simon Sinek has this rare gift: he doesn't just tell you what's wrong with your career; he tells you what's wrong with your perspective. Massive respect to Raj for bringing a global legend to the Indian podcast scene.",
    x: "78%", y: "70%", z: -70, rotX: 4, rotY: 5,
    floatAmt: -9, drift: 14, duration: 10.5, delay: 0.7, width: "w-[285px]",
  },
  {
    id: 18,
    category: "impact",
    categoryLabel: "On Impact",
    text: "Next podcast with David goggins (1.1k likes)",
    x: "20%", y: "92%", z: 60, rotX: -2, rotY: 6,
    floatAmt: -15, drift: 20, duration: 8.0, delay: 1.6, width: "w-[255px]",
  },
];

// ─── Category badge styles (monochrome system) ────────
export const categoryStyles: Record<Comment["category"], string> = {
  hosting:   "bg-white/10 text-white/50",
  education: "bg-white/6  text-white/40",
  guest:     "bg-white/8  text-white/45",
  impact:    "bg-white/5  text-white/35",
};
