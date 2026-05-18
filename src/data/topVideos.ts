export interface TopVideo {
  id: string;
  rank: string;
  guest: string;
  episode: string;
  title: string;
  views: string;
  likes: string;
  note: string;
  thumbnail: string;
  topics: string[];
  quote: string;
  youtubeId?: string;
}

export const topVideos: TopVideo[] = [
  {
    id: "1",
    rank: "01",
    guest: "Khan Sir · Educator & Geopolitics Analyst",
    episode: "FO 343 · April 2025",
    title: "Khan Sir Podcast: India vs China, Pakistan, Bihar’s Reality & Geopolitics",
    views: "35M",
    likes: "500K+",
    youtubeId: "aA5tLih8oDk",
    note: "Khan Sir’s first appearance on a major podcast. A raw, unfiltered discussion on geopolitics, education, and India’s ground reality that resonated with millions.",
    thumbnail: "https://i.ytimg.com/vi/aA5tLih8oDk/maxresdefault.jpg",
    topics: [
      "Geopolitics",
      "India vs China",
      "Pakistan",
      "Bihar’s reality",
      "Education system"
    ],
    quote: "Education is not a weapon of the rich, it is the shield of the poor."
  },
  {
    id: "2",
    rank: "02",
    guest: "Bill Gates · Co-founder Microsoft",
    episode: "FO 335 · March 2025",
    title: "Bill Gates On AI, Future Of India, Climate Change & Philanthropy",
    views: "30M",
    likes: "250K+",
    youtubeId: "xAt1xcC6qfM",
    note: "Bill Gates discusses the future of technology and India's role in the global economy.",
    thumbnail: "https://i.ytimg.com/vi/xAt1xcC6qfM/maxresdefault.jpg",
    topics: [
      "AI & Technology",
      "Climate Change",
      "India's Future",
      "Philanthropy"
    ],
    quote: "The next 10 years will be the most innovative in human history."
  },
  {
    id: "3",
    rank: "03",
    guest: "Nikhil Kamath · Co-founder Zerodha",
    episode: "FO 5 · 2022",
    title: "Nikhil Kamath On Wealth, Stock Market, Zerodha & Hard Truths",
    views: "27M",
    likes: "320K+",
    youtubeId: "cpg78ouK54I",
    note: "A masterclass in wealth creation and the reality of the Indian stock market.",
    thumbnail: "https://i.ytimg.com/vi/cpg78ouK54I/maxresdefault.jpg",
    topics: [
      "Wealth creation",
      "Zerodha story",
      "Stock market",
      "Hard truths about success"
    ],
    quote: "Being rich is not about how much you make, it's about how much you keep."
  },
  {
    id: "4",
    rank: "04",
    guest: "Dr. Cuterus (Dr. Tanaya) · Medical Professional",
    episode: "FO 147 · 2023",
    title: "@dr_cuterus On Sexual Health, Orgasm, G-Spot, Oral Sex, NoFap & Infertility",
    views: "14M",
    likes: "200K+",
    youtubeId: "KstXIeCUo5k",
    note: "Broke taboos and became an instant hit for its honest, educational approach to sexual health.",
    thumbnail: "https://i.ytimg.com/vi/KstXIeCUo5k/maxresdefault.jpg",
    topics: [
      "Sexual health & Orgasm",
      "G-Spot & Oral Sex",
      "NoFap & Infertility",
      "Breaking taboos",
      "Education over misinformation"
    ],
    quote: "It's a part of our body. Why are we so scared to talk about it?"
  },
  {
    id: "5",
    rank: "05",
    guest: "Vishwa Mohan · EdTech Expert",
    episode: "FO 508 · 2025",
    title: "The IIT Race, Coaching Mafia & Reality of EdTech",
    views: "13M",
    likes: "210K+",
    youtubeId: "EF-tWak4mLg",
    note: "A hard-hitting look at the education system and the pressure on Indian students.",
    thumbnail: "https://i.ytimg.com/vi/EF-tWak4mLg/maxresdefault.jpg",
    topics: [
      "IIT pressure",
      "Coaching mafia",
      "EdTech sector",
      "Career advice"
    ],
    quote: "True education is not about competitive exams, it's about finding what you're good at."
  }
];
