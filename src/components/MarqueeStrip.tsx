import { Play } from 'lucide-react';
import React from 'react';

export default function MarqueeStrip() {
  const items = [
    "BILL GATES",
    "EMMANUEL MACRON",
    "VIJAY MALLYA",
    "MICHAEL PHELPS",
    "MRBEAST",
    "AAMIR KHAN",
    "KARAN JOHAR",
    "MS DHONI",
    "SOURAV GANGULY",
    "S. JAISHANKAR",
    "LALIT MODI",
    "ASHNEER GROVER",
    "NIKHIL KAMATH",
    "ANUPAM MITTAL",
    "DEEPINDER GOYAL",
    "ARSHAD WARSI",
    "KHAN SIR"
  ];

  return (
    <div className="w-full bg-white/5 border-y border-white/5 py-3 overflow-hidden z-20 relative">
      <div className="marquee-inner flex gap-16 whitespace-nowrap min-w-max">
        {/* Double repeat for seamless loop */}
        {[...items, ...items, ...items].map((item, idx) => (
          <span 
            key={idx} 
            className="font-mono text-xs text-white/30 tracking-[0.2em] uppercase"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
