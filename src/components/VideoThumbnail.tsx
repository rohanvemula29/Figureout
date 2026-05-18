import React, { useState } from 'react';

interface VideoThumbnailProps {
  src: string;
  alt: string;
  className?: string;
  draggable?: boolean;
}

export function VideoThumbnail({ src, alt, className, draggable }: VideoThumbnailProps) {
  // src is expected to be maxresdefault.jpg
  // fallback chain: maxresdefault.jpg -> hqdefault.jpg -> fallback placeholder gradient

  const [currentSrc, setCurrentSrc] = useState(src);
  const [errorLevel, setErrorLevel] = useState(0);

  const handleError = () => {
    if (errorLevel === 0) {
      // Try hqdefault
      const hqUrl = src.replace('maxresdefault.jpg', 'hqdefault.jpg');
      setCurrentSrc(hqUrl);
      setErrorLevel(1);
    } else if (errorLevel === 1) {
      // Try monochrome placeholder
      setCurrentSrc('');
      setErrorLevel(2);
    }
  };

  if (errorLevel === 2) {
    return (
      <div 
        className={`w-full h-full bg-gradient-to-br from-white/10 to-transparent flex items-center justify-center ${className}`}
      >
        <span className="font-mono text-[10px] text-white/30 uppercase tracking-widest px-4 text-center">
          {alt || "Video Thumbnail"}
        </span>
      </div>
    );
  }

  return (
    <img 
      src={currentSrc} 
      alt={alt} 
      className={className} 
      draggable={draggable}
      onError={handleError}
      referrerPolicy="no-referrer"
    />
  );
}
