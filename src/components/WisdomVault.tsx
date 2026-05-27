import React from 'react';
import { motion } from 'framer-motion';

const lessons = [
  {
    guest: "Bill Gates",
    episode: "FO 335",
    lesson: "Success is a lousy teacher. It seduces smart people into thinking they can't lose.",
    context: "On long-term innovation and the danger of complacency in business.",
    thumbnail: "https://i.ytimg.com/vi/xAt1xcC6qfM/maxresdefault.jpg"
  },
  {
    guest: "Ashneer Grover",
    episode: "FO 23",
    lesson: "Degrees don't build businesses. Dhinda (Grit) builds businesses.",
    context: "Discussing why execution matters more than credentials in India.",
    thumbnail: "https://i.ytimg.com/vi/NuBo8fvnYw0/maxresdefault.jpg"
  },
  {
    guest: "Khan Sir",
    episode: "FO 343",
    lesson: "If education can't change your mindset, it's just literacy.",
    context: "A hard hitting take on the difference between learning and schooling.",
    thumbnail: "https://i.ytimg.com/vi/aA5tLih8oDk/maxresdefault.jpg"
  },
  {
    guest: "Nikhil Kamath",
    episode: "FO 5",
    lesson: "Risk is not about being blind. It's about calculated exposure.",
    context: "On building Zerodha and the philosophy of wealth creation.",
    thumbnail: "https://i.ytimg.com/vi/cpg78ouK54I/maxresdefault.jpg"
  }
];

export default function WisdomVault() {
  return (
    <section id="wisdom-vault" className="bg-black py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <p className="font-mono text-[10px] text-white/20 tracking-[0.4em] uppercase mb-12">
          WISDOM VAULT
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {lessons.map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="liquid-glass rounded-3xl p-8 flex flex-col h-full group hover:bg-white/5 transition-colors"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 rounded-full overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-500">
                   <img 
                   src={item.thumbnail} 
                   alt={item.guest} 
                   className="w-full h-full object-cover" 
                   referrerPolicy="no-referrer"
                 />
                </div>
                <div>
                  <p className="font-mono text-[9px] text-white/40 tracking-widest uppercase">{item.guest}</p>
                  <p className="font-mono text-[8px] text-white/20 uppercase">{item.episode}</p>
                </div>
              </div>
              
              <h3 className="font-display italic text-xl text-white/90 mb-4 leading-relaxed">
                "{item.lesson}"
              </h3>
              
              <p className="font-body text-xs text-white/30 mt-auto">
                {item.context}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
