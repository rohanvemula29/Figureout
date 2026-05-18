// src/data/comments.ts
// Real FigureOut community comments — 16 verified high-engagement responses

export interface Comment {
  id: number;
  category: "hosting" | "education" | "guest" | "impact";
  categoryLabel: string;
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
  // Card sizing
  width: string;   // tailwind width class
}

export const comments: Comment[] = [

  // ─────────────────────────────────────────────
  // CATEGORY 1: HOSTING & INTERVIEW STYLE
  // ─────────────────────────────────────────────

  {
    id: 1,
    category: "hosting",
    categoryLabel: "On Hosting",
    text: "The best part about this podcast is that Raj actually lets the guests speak and finish their thoughts without constantly interrupting. A rare trait these days.",
    x: "4%",
    y: "6%",
    z: 140,
    rotX: -3,
    rotY: 7,
    floatAmt: -18,
    drift: 30,
    duration: 7.2,
    delay: 0,
    width: "w-[280px]",
  },

  {
    id: 2,
    category: "hosting",
    categoryLabel: "On Hosting",
    text: "Raj doesn't just interview people; he extracts a masterclass out of them. Pure gold.",
    x: "62%",
    y: "4%",
    z: 90,
    rotX: 2,
    rotY: -6,
    floatAmt: -14,
    drift: 22,
    duration: 6.8,
    delay: 0.6,
    width: "w-[240px]",
  },

  {
    id: 3,
    category: "hosting",
    categoryLabel: "On Hosting",
    text: "The best thing about Raj is that he asks the exact questions a normal middle-class guy would want to ask these billionaires and founders.",
    x: "28%",
    y: "14%",
    z: 170,
    rotX: -2,
    rotY: 5,
    floatAmt: -22,
    drift: 34,
    duration: 7.8,
    delay: 1.2,
    width: "w-[300px]",
  },

  {
    id: 4,
    category: "hosting",
    categoryLabel: "On Hosting",
    text: "You can tell Raj does his homework before the guests arrive. The depth of research and respect for their time is visible in every frame.",
    x: "74%",
    y: "18%",
    z: -50,
    rotX: 4,
    rotY: -9,
    floatAmt: -10,
    drift: 16,
    duration: 9.4,
    delay: 1.8,
    width: "w-[270px]",
  },

  // ─────────────────────────────────────────────
  // CATEGORY 2: EDUCATIONAL VALUE
  // ─────────────────────────────────────────────

  {
    id: 5,
    category: "education",
    categoryLabel: "On Value",
    text: "This wasn't an interview, it was a free MBA class. The amount of value delivered in these 60 minutes is insane.",
    x: "6%",
    y: "36%",
    z: 50,
    rotX: -4,
    rotY: 11,
    floatAmt: -16,
    drift: 20,
    duration: 8.1,
    delay: 0.3,
    width: "w-[260px]",
  },

  {
    id: 6,
    category: "education",
    categoryLabel: "On Value",
    text: "I never thought I would sit and patiently watch a 2-hour video about business and finance, but here we are. This channel is replacing my Netflix time.",
    x: "48%",
    y: "28%",
    z: 110,
    rotX: 3,
    rotY: -7,
    floatAmt: -20,
    drift: 28,
    duration: 7.5,
    delay: 2.1,
    width: "w-[290px]",
  },

  {
    id: 7,
    category: "education",
    categoryLabel: "On Value",
    text: "This episode should be made mandatory for every college student in India before they step into the real world.",
    x: "80%",
    y: "42%",
    z: -90,
    rotX: -3,
    rotY: 6,
    floatAmt: -8,
    drift: 12,
    duration: 10.2,
    delay: 0.9,
    width: "w-[255px]",
  },

  {
    id: 8,
    category: "education",
    categoryLabel: "On Value",
    text: "No controversial clickbait, no unnecessary drama, just pure knowledge and growth. That's why Figuring Out is one of the best podcasts in India right now.",
    x: "22%",
    y: "48%",
    z: -20,
    rotX: 2,
    rotY: 8,
    floatAmt: -15,
    drift: 18,
    duration: 8.6,
    delay: 1.5,
    width: "w-[285px]",
  },

  // ─────────────────────────────────────────────
  // CATEGORY 3: SPECIFIC VIRAL GUESTS
  // ─────────────────────────────────────────────

  {
    id: 9,
    category: "guest",
    categoryLabel: "On Guests",
    text: "Getting Bill Gates on an Indian podcast is a monumental achievement. The level of this channel is just skyrocketing!",
    x: "58%",
    y: "54%",
    z: 155,
    rotX: -5,
    rotY: -4,
    floatAmt: -24,
    drift: 36,
    duration: 6.5,
    delay: 0.4,
    width: "w-[265px]",
  },

  {
    id: 10,
    category: "guest",
    categoryLabel: "On Guests",
    text: "Mark Manson explaining the subtle art of happiness and money was literally the wake-up call my generation needed. What an incredible conversation.",
    x: "3%",
    y: "60%",
    z: -30,
    rotX: 3,
    rotY: 9,
    floatAmt: -12,
    drift: 22,
    duration: 9.0,
    delay: 2.4,
    width: "w-[280px]",
  },

  {
    id: 11,
    category: "guest",
    categoryLabel: "On Guests",
    text: "Ashneer Grover's episode hit 5.9M views because he simply spoke the unfiltered truth about D2C and Indian founders. Still the benchmark for real talk.",
    x: "40%",
    y: "66%",
    z: 70,
    rotX: -2,
    rotY: -8,
    floatAmt: -17,
    drift: 25,
    duration: 7.9,
    delay: 1.1,
    width: "w-[300px]",
  },

  {
    id: 12,
    category: "guest",
    categoryLabel: "On Guests",
    text: "Listening to Sourav Ganguly talk about leadership, backing his players, and handling pressure is the exact motivation I needed today. What a legendary episode!",
    x: "78%",
    y: "70%",
    z: -70,
    rotX: 4,
    rotY: 5,
    floatAmt: -9,
    drift: 14,
    duration: 10.5,
    delay: 0.7,
    width: "w-[285px]",
  },

  // ─────────────────────────────────────────────
  // CATEGORY 4: PERSONAL IMPACT & INSPIRATION
  // ─────────────────────────────────────────────

  {
    id: 13,
    category: "impact",
    categoryLabel: "On Impact",
    text: "I am in my early 20s and this podcast has completely changed how I look at money, relationships, and my career. Thank you for making learning cool.",
    x: "14%",
    y: "78%",
    z: 100,
    rotX: -3,
    rotY: 10,
    floatAmt: -21,
    drift: 32,
    duration: 7.3,
    delay: 1.9,
    width: "w-[275px]",
  },

  {
    id: 14,
    category: "impact",
    categoryLabel: "On Impact",
    text: "Every time I feel lost or unmotivated in my career, I just play a random episode of this podcast. The clarity it brings is unmatched.",
    x: "55%",
    y: "80%",
    z: 35,
    rotX: 2,
    rotY: -6,
    floatAmt: -13,
    drift: 19,
    duration: 8.4,
    delay: 0.5,
    width: "w-[262px]",
  },

  {
    id: 15,
    category: "impact",
    categoryLabel: "On Impact",
    text: "Raj's own journey from a young content creator to sitting across from global leaders and tycoons is a massive inspiration in itself.",
    x: "85%",
    y: "84%",
    z: -110,
    rotX: -4,
    rotY: 7,
    floatAmt: -7,
    drift: 11,
    duration: 11.2,
    delay: 1.3,
    width: "w-[258px]",
  },

  {
    id: 16,
    category: "impact",
    categoryLabel: "On Impact",
    text: "The transition of this channel from 'Figuring Out' to actually helping millions of us figure out our own lives has been beautiful to watch.",
    x: "32%",
    y: "88%",
    z: -55,
    rotX: 3,
    rotY: -5,
    floatAmt: -11,
    drift: 17,
    duration: 9.7,
    delay: 2.7,
    width: "w-[272px]",
  },
];

// ─── Helper: category badge colors (monochrome system) ────────────────────────
export const categoryStyles: Record<Comment["category"], string> = {
  hosting:   "bg-white/10 text-white/50",
  education: "bg-white/6  text-white/40",
  guest:     "bg-white/8  text-white/45",
  impact:    "bg-white/5  text-white/35",
};
