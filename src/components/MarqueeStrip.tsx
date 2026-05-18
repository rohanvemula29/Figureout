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
    <div className="w-full bg-white/5 border-y border-white/5 py-4 overflow-hidden z-20 relative">
      <div className="marquee-inner flex gap-12 md:gap-24 whitespace-nowrap min-w-max">
        {/* Triple repeat for seamless loop */}
        {[...items, ...items, ...items].map((item, idx) => (
          <div key={idx} className="flex items-center gap-12 md:gap-24">
            <span className="font-mono text-xs text-white/40 tracking-[0.3em] uppercase flex items-center gap-4">
              <span className="w-1 h-1 rounded-full bg-white/20" />
              {item}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
