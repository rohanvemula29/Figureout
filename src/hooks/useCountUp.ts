import { useEffect, useState } from 'react';

export function useCountUp(end: number, duration: number = 2.5, start: number = 0) {
  const [count, setCount] = useState(start);

  useEffect(() => {
    let startTime: number | null = null;
    const animateCount = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const percentage = Math.min(progress / (duration * 1000), 1);
      
      // Easing function (easeOutQuad)
      const easeOut = percentage * (2 - percentage);
      
      setCount(Math.floor(start + (end - start) * easeOut));

      if (progress < duration * 1000) {
        requestAnimationFrame(animateCount);
      }
    };

    const animationId = requestAnimationFrame(animateCount);
    return () => cancelAnimationFrame(animationId);
  }, [end, duration, start]);

  return count;
}
