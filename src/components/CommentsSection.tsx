import { useRef, useState } from "react";
import { motion, useAnimationFrame, useInView } from "framer-motion";
import { Youtube, ThumbsUp } from "lucide-react";
import { comments, categoryStyles } from "../data/comments";

export default function CommentsSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const targetRot = useRef({ x: 0, y: 0 });
  const isInView = useInView(containerRef, { once: true, margin: "-200px" });

  // Smooth mouse-reactive 3D rotation
  const handleMouseMove = (e: React.MouseEvent) => {
    const x = (e.clientX / window.innerWidth  - 0.5) * 12;
    const y = (e.clientY / window.innerHeight - 0.5) * 7;
    targetRot.current = { x: -y, y: x };
  };

  useAnimationFrame(() => {
    setRotation(prev => ({
      x: prev.x + (targetRot.current.x - prev.x) * 0.05,
      y: prev.y + (targetRot.current.y - prev.y) * 0.05,
    }));
  });

  return (
    <section id="comments" className="bg-black py-24 md:py-40 overflow-hidden relative" ref={containerRef}>

      {/* Section header */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.9 }}
        className="px-6 max-w-6xl mx-auto mb-16 relative z-10"
      >
        <p className="font-mono text-[10px] text-white/40 tracking-[0.6em] uppercase mb-6">
          WHAT THE WORLD SAYS
        </p>
        <h2 className="font-serif italic text-5xl md:text-7xl text-white/90 leading-[0.85] tracking-tight">
          12.6M voices.<br />
          <span className="not-italic font-sans font-thin text-3xl md:text-5xl text-white/30 block mt-2">
            one verdict.
          </span>
        </h2>

        {/* Category legend pills */}
        <div className="flex gap-3 flex-wrap mt-8">
          {[
            { key: "hosting",   label: "Hosting Style" },
            { key: "education", label: "Educational Value" },
            { key: "guest",     label: "Viral Guests" },
            { key: "impact",    label: "Impact" },
          ].map(cat => (
            <span key={cat.key}
              className="px-4 py-1.5 rounded-full border border-white/10 bg-white/5 font-mono text-[9px] tracking-widest text-white/60 uppercase">
              {cat.label}
            </span>
          ))}
        </div>
      </motion.div>

      {/* 3D comment field */}
      <div
        onMouseMove={handleMouseMove}
        onMouseLeave={() => { targetRot.current = { x: 0, y: 0 }; }}
        style={{
          perspective: "1200px",
          perspectiveOrigin: "50% 50%",
        }}
        className="relative w-full h-[700px] md:h-[960px] cursor-crosshair mt-12"
      >
        {/* Rotating inner container */}
        <div
          style={{
            transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
            transformStyle: "preserve-3d",
            transition: "transform 0.05s linear",
            width: "100%",
            height: "100%",
            position: "relative",
          }}
        >
          {comments.map((comment, i) => {
            // Depth-based visual adjustments
            const normalizedZ  = (comment.z + 200) / 400;   // 0 = far, 1 = near
            const cardOpacity  = 0.25 + normalizedZ * 0.75;  // 0.25–1.0
            const cardBlur     = Math.max(0, (1 - normalizedZ) * 2); // 0–2px
            const cardScale    = 0.75 + normalizedZ * 0.35;  // 0.75–1.1

            const isNear = normalizedZ > 0.65;
            const isMid = normalizedZ > 0.35 && normalizedZ <= 0.65;
            const isFar = normalizedZ <= 0.35;

            const cardClasses = isNear 
              ? "bg-white/15 backdrop-blur-xl border border-white/20 shadow-2xl shadow-white/5 p-5 rounded-2xl" 
              : isMid 
                ? "bg-white/10 backdrop-blur-lg border border-white/10 p-5 rounded-2xl" 
                : "bg-white/5 border border-white/5 p-4 rounded-xl";

            const badgeBg = isNear ? "bg-white/10 text-white/80" : isMid ? "bg-white/5 text-white/60" : "bg-white/5 text-white/40";
            const textStyle = isNear ? "text-sm text-white" : isMid ? "text-sm text-white/80" : "text-[11px] text-white/50";
            const dividerColor = isNear ? "bg-white/10" : "bg-white/5";
            const avatarRing = isNear ? "bg-white/20" : "bg-white/10";
            const avatarDot = isNear ? "bg-white" : "bg-white/40";

            return (
              <motion.div
                key={comment.id}
                className="absolute"
                style={{
                  left: comment.x,
                  top: comment.y,
                  transform: `
                    translateZ(${comment.z}px)
                    rotateX(${comment.rotX}deg)
                    rotateY(${comment.rotY}deg)
                    scale(${cardScale})
                  `,
                  opacity: cardOpacity,
                  filter: `blur(${cardBlur}px)`,
                  zIndex: Math.round(comment.z + 200),
                }}
                animate={{
                  y: [0, comment.floatAmt, 0],
                  z: [comment.z, comment.z + comment.drift, comment.z]
                }}
                transition={{
                  duration: comment.duration,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: comment.delay,
                }}
                whileHover={{
                  opacity: 1,
                  filter: "blur(0px)",
                  scale: cardScale * 1.04,
                  zIndex: 999,
                  transition: { duration: 0.2 },
                }}
              >
                {/* ── COMMENT CARD ── */}
                <div className={`${cardClasses} ${comment.width}`}>

                  {/* Category badge */}
                  <span className={`inline-block px-2 md:px-3 py-0.5 md:py-1 rounded-full font-mono text-[8px] md:text-[9px]
                    tracking-widest uppercase mb-3 md:mb-4 ${badgeBg}`}>
                    {comment.categoryLabel}
                  </span>

                  {/* Comment text */}
                  <p className={`font-sans leading-relaxed mb-4 ${textStyle}`}>
                    "{comment.text}"
                  </p>

                  {/* Footer rule */}
                  {!isFar && <div className={`w-full h-px mb-3 ${dividerColor}`} />}

                  {/* Bottom row */}
                  {!isFar && (
                    <div className="flex items-center justify-between">
                      {/* Dot avatar + anonymous */}
                      <div className="flex items-center gap-2">
                        <div className={`w-5 h-5 rounded-full flex items-center justify-center ${avatarRing}`}>
                          <div className={`w-1.5 h-1.5 rounded-full ${avatarDot}`} />
                        </div>
                        <span className="font-mono text-[8px] text-white/30 tracking-[0.2em] uppercase">
                          VIEWER
                        </span>
                      </div>

                      {/* YouTube source mark */}
                      <span className="font-mono text-[8px] tracking-[0.2em] text-white/20 flex items-center gap-1 uppercase">
                        YouTube ↗
                      </span>
                    </div>
                  )}

                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Bottom fade mask so cards don't hard-clip */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-black to-transparent pointer-events-none z-10" />

      {/* Visual Accent */}
      <div className="absolute bottom-12 left-12 z-50 flex items-center gap-4 pointer-events-none hidden md:flex">
        <div className="h-px w-24 bg-white/20"></div>
        <span className="font-mono text-[9px] text-white/30 tracking-[0.4em] uppercase">Curated Excellence</span>
      </div>

    </section>
  );
}
