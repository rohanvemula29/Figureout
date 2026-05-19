import React, { useEffect } from 'react';

interface AdSlotProps {
  id: string;
  slotId?: string;
}

export default function AdSlot({ id, slotId }: AdSlotProps) {
  useEffect(() => {
    try {
      // @ts-ignore
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (err) {
      console.log('AdSense push failed', err);
    }
  }, []);

  return (
    <div className="w-full max-w-6xl mx-auto px-6 py-12 md:py-16 overflow-hidden">
      <div 
        id={id}
        className="w-full min-h-[100px] md:min-h-[250px] liquid-glass rounded-2xl flex items-center justify-center border border-white/5 relative overflow-hidden group"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent opacity-50" />
        
        {/* AdSense Unit */}
        <ins className="adsbygoogle w-full"
             style={{ display: 'block', minHeight: '100px' }}
             data-ad-client="ca-pub-6542378313114628"
             data-ad-slot={slotId || "8245100914"} // Placeholder slot ID
             data-ad-format="auto"
             data-full-width-responsive="true"></ins>

        {/* Development Helper Badge */}
        <div className="absolute top-4 right-4 z-20 flex flex-col items-end gap-1 opacity-10 group-hover:opacity-40 transition-opacity">
          <span className="font-mono text-[8px] tracking-[0.3em] uppercase text-white/50">AdSense Unit</span>
          <div className="w-8 h-px bg-white/20" />
        </div>
      </div>
    </div>
  );
}
