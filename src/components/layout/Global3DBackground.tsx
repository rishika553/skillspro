"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

/** Mixkit preview (same source as hero) — single decode, layered with CSS for depth */
const BG_VIDEO =
  "https://assets.mixkit.co/videos/preview/mixkit-digital-animation-of-futuristic-devices-99786-large.mp4";

const FLOAT_IMAGES = [
  {
    src: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=640&q=80",
    className: "top-[6%] -right-[4%] w-[min(42vw,380px)] aspect-[4/3]",
    delay: 0,
  },
  {
    src: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=640&q=80",
    className: "top-[38%] -left-[6%] w-[min(36vw,320px)] aspect-square",
    delay: 0.4,
  },
  {
    src: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=640&q=80",
    className: "bottom-[12%] right-[8%] w-[min(40vw,360px)] aspect-video",
    delay: 0.8,
  },
  {
    src: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=640&q=80",
    className: "bottom-[22%] left-[10%] w-[min(34vw,300px)] aspect-[5/4]",
    delay: 1.2,
  },
] as const;

function FloatingPanel({
  children,
  className,
  delay,
  reduceMotion,
}: {
  children: React.ReactNode;
  className?: string;
  delay: number;
  reduceMotion: boolean | null;
}) {
  return (
    <motion.div
      className={`absolute pointer-events-none perspective-1000 ${className ?? ""}`}
      initial={false}
      animate={
        reduceMotion
          ? { opacity: 0.35, rotateX: 0, rotateY: 0, z: 0 }
          : {
              opacity: [0.28, 0.42, 0.3],
              rotateX: [4, -6, 5],
              rotateY: [-10, 12, -8],
              z: [0, 20, 0],
            }
      }
      transition={
        reduceMotion
          ? { duration: 0 }
          : { duration: 14 + delay * 2, repeat: Infinity, ease: "easeInOut", delay }
      }
      style={{ transformStyle: "preserve-3d" }}
    >
      {children}
    </motion.div>
  );
}

export function Global3DBackground() {
  const reduceMotion = useReducedMotion();

  return (
    <div
      className="fixed inset-0 z-0 overflow-hidden pointer-events-none"
      aria-hidden
    >
      {/* Primary video layer */}
      {!reduceMotion && (
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-[0.12]"
          style={{ filter: "saturate(1.4) hue-rotate(210deg)" }}
        >
          <source src={BG_VIDEO} type="video/mp4" />
        </video>
      )}

      {/* Mirrored video plane (same asset, visual depth — no extra network decode in most browsers) */}
      {!reduceMotion && (
        <motion.div
          className="absolute -bottom-[18%] -left-[12%] w-[min(90vw,52rem)] aspect-[21/9] overflow-hidden opacity-[0.06] rounded-[50%] border border-cyan-500/10 max-md:hidden"
          style={{
            transformStyle: "preserve-3d",
            transform: "perspective(1200px) rotateX(58deg) rotateY(-12deg)",
            maskImage: "radial-gradient(ellipse 70% 60% at 50% 50%, black 20%, transparent 75%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 70% 60% at 50% 50%, black 20%, transparent 75%)",
          }}
          animate={{ rotateZ: [0, 3, 0], scale: [1, 1.04, 1] }}
          transition={{ duration: 24, repeat: Infinity, ease: "easeInOut" }}
        >
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover scale-110"
            style={{ filter: "hue-rotate(160deg) saturate(1.2)" }}
          >
            <source src={BG_VIDEO} type="video/mp4" />
          </video>
        </motion.div>
      )}

      {/* Base tint + readability */}
      <div className="absolute inset-0 bg-[#06060f]/85" />
      <div className="absolute inset-0 bg-gradient-to-br from-violet-950/40 via-transparent to-cyan-950/30" />
      <div className="absolute inset-0 dot-grid opacity-25" />
      <div className="absolute inset-0 grid-pattern opacity-40" />

      {/* 3D floating image panels */}
      <div className="absolute inset-0 preserve-3d max-md:hidden">
        {FLOAT_IMAGES.map((img, i) => (
          <FloatingPanel
            key={img.src}
            className={img.className}
            delay={img.delay}
            reduceMotion={reduceMotion}
          >
            <div
              className="relative w-full h-full rounded-2xl overflow-hidden border border-violet-500/20 shadow-[0_25px_80px_-20px_rgba(99,102,241,0.45)]"
              style={{
                transform: "translateZ(40px)",
                boxShadow: "inset 0 0 60px rgba(6,182,212,0.08)",
              }}
            >
              <Image
                src={img.src}
                alt=""
                fill
                className="object-cover opacity-90"
                sizes="(max-width: 768px) 45vw, 380px"
                priority={i < 2}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#06060f]/70 via-violet-950/20 to-transparent" />
            </div>
          </FloatingPanel>
        ))}
      </div>

      {/* Neon orbs */}
      <div className="absolute top-[15%] left-[20%] w-[min(90vw,28rem)] h-[min(90vw,28rem)] rounded-full bg-violet-600/15 blur-[100px] animate-pulse-glow" />
      <div
        className="absolute bottom-[20%] right-[15%] w-80 h-80 rounded-full bg-cyan-600/10 blur-[90px] animate-pulse-glow"
        style={{ animationDelay: "1.2s" }}
      />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[min(100vw,36rem)] h-[min(100vw,36rem)] rounded-full bg-indigo-600/10 blur-[120px]" />

      {/* Extra 3D primitives */}
      {!reduceMotion && (
        <>
          <motion.div
            className="absolute top-[18%] left-[12%] w-16 h-16 rounded-2xl border border-cyan-500/25 bg-cyan-500/5"
            style={{ transformStyle: "preserve-3d" }}
            animate={{ rotateX: [0, 25, 0], rotateY: [0, -18, 0], y: [0, -18, 0] }}
            transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute bottom-[30%] right-[18%] w-12 h-12 rounded-full border border-fuchsia-500/30"
            animate={{ rotateZ: [0, 360], scale: [1, 1.15, 1] }}
            transition={{ duration: 16, repeat: Infinity, ease: "linear" }}
          />
          <motion.div
            className="absolute top-[52%] right-[28%] w-20 h-20 border border-violet-500/20 rotate-45 rounded-xl bg-violet-500/5"
            animate={{ rotateX: [10, -15, 10], rotateZ: [45, 55, 45] }}
            transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
          />
        </>
      )}
    </div>
  );
}
