import { useState, useRef, useEffect, MouseEvent } from 'react';

export function useMouseTilt(maxTiltX: number = 15, maxTiltY: number = 10, smoothing: number = 0.08) {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const targetTilt = useRef({ x: 0, y: 0 });
  const currentTilt = useRef({ x: 0, y: 0 });

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    // Normalize -1 to 1
    const xNorm = (x / rect.width) * 2 - 1;
    const yNorm = (y / rect.height) * 2 - 1;

    targetTilt.current = {
      x: yNorm * -maxTiltX, // Invert Y axis for natural rotation
      y: xNorm * maxTiltY,
    };
  };

  const handleMouseLeave = () => {
    targetTilt.current = { x: 0, y: 0 };
  };

  useEffect(() => {
    let animationFrameId: number;

    const animate = () => {
      // Lerp
      currentTilt.current.x += (targetTilt.current.x - currentTilt.current.x) * smoothing;
      currentTilt.current.y += (targetTilt.current.y - currentTilt.current.y) * smoothing;

      setTilt({
        x: currentTilt.current.x,
        y: currentTilt.current.y,
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => cancelAnimationFrame(animationFrameId);
  }, [smoothing]);

  return { tilt, handleMouseMove, handleMouseLeave };
}
