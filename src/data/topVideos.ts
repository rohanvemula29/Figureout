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
    guest: "Vijay Mallya · Businessman",
    episode: "FO 364 · June 2025",
    title: "Vijay Mallya Podcast: Rise & Downfall Of Kingfisher Airlines, Loans & RCB",
    views: "30M",
    likes: "250K+",
    youtubeId: "ZsPygh37hpw",
    note: "His first interview in 9 years. Addressed the loan default allegations, Kingfisher’s collapse, and his love for RCB. Clocked 30M views on YouTube alone.",
    thumbnail: "https://i.ytimg.com/vi/ZsPygh37hpw/maxresdefault.jpg",
    topics: [
      "Kingfisher Airlines collapse",
      "Loan default allegations",
      "Love for RCB",
      "Conditions for India return",
      "First interview in 9 years"
    ],
    quote: "It was always my intention to settle. Never did I say I didn't want to pay."
  },
  {
    id: "3",
    rank: "03",
    guest: "Lucky Bisht · Former RAW Agent",
    episode: "FO 198 · 2024",
    title: "Indian Spy: Dark Reality China, Weapons, Commando Training & Jail – Lucky Bisht",
    views: "27M",
    likes: "320K+",
    youtubeId: "LB6s2EOGClw",
    note: "A former RAW agent’s account of espionage, jail, and China’s secret operations. One of the most gripping episodes of the channel.",
    thumbnail: "https://i.ytimg.com/vi/LB6s2EOGClw/maxresdefault.jpg",
    topics: [
      "RAW operations",
      "Chinese border intrusions",
      "Commando training",
      "Prison stories"
    ],
    quote: "A true soldier never dies for his country, he makes the enemy die for theirs."
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
    guest: "Col. Shivender Kanwar · Indian Army (PARA SF)",
    episode: "FO 239 · 2024",
    title: "PARA SFs, Indian Army, Weapons & Dangerous Missions ft. Col. Shivender Kanwar",
    views: "13M",
    likes: "210K+",
    youtubeId: "EF-tWak4mLg",
    note: "A deep dive into special forces operations, border tensions, and the mindset of India’s toughest soldiers.",
    thumbnail: "https://i.ytimg.com/vi/EF-tWak4mLg/maxresdefault.jpg",
    topics: [
      "PARA SF operations",
      "Indian Army selection",
      "Weapons and technology",
      "Dangerous missions",
      "Special forces mindset"
    ],
    quote: "When you wear the uniform, there is no fear. Only duty."
  }
];
