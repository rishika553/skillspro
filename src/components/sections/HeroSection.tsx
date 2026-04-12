"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { ArrowRight, Sparkles, Users, BookOpen, MessageSquare, Clock } from "lucide-react";
import { useRef } from "react";
import { CountUp } from "@/components/ui/CountUp";

const stats = [
  {
    icon: Users,
    label: "Placement Support",
    color: "from-violet-600 to-purple-700",
    kind: "count" as const,
    end: 100,
    suffix: "%",
  },
  {
    icon: BookOpen,
    label: "Job-Ready Courses",
    color: "from-cyan-600 to-blue-700",
    kind: "count" as const,
    end: 4,
    suffix: "+",
  },
  {
    icon: MessageSquare,
    label: "1:1 Mentorship",
    color: "from-indigo-600 to-violet-700",
    kind: "text" as const,
    value: "Live",
  },
  {
    icon: Clock,
    label: "Avg. Duration",
    color: "from-fuchsia-600 to-pink-700",
    kind: "count" as const,
    end: 10,
    suffix: " Wks",
  },
];

function ThreeDCard({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [10, -10]), { stiffness: 300, damping: 30 });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-10, 10]), { stiffness: 300, damping: 30 });

  const handleMouse = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };
  const reset = () => { x.set(0); y.set(0); };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      className="cursor-pointer"
    >
      {children}
    </motion.div>
  );
}

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden" style={{ background: "#06060f" }}>
      {/* Hero-only layers (site-wide video + 3D panels live in Global3DBackground) */}
      <div className="absolute inset-0 z-0">
        {/* Dark overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#06060f] via-[#06060f]/85 to-[#06060f]" />

        {/* Grid pattern */}
        <div className="absolute inset-0 dot-grid opacity-40" />

        {/* Neon glow orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-violet-700/20 rounded-full blur-[120px] animate-pulse-glow" />
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-indigo-700/20 rounded-full blur-[100px] animate-pulse-glow" style={{ animationDelay: "1.5s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-900/10 rounded-full blur-[150px]" />

        {/* Floating 3D shapes */}
        <div className="absolute top-20 left-16 w-12 h-12 border border-violet-500/30 rounded-xl rotate-12 animate-float-slow" style={{ background: "rgba(139,92,246,0.05)" }} />
        <div className="absolute top-40 right-20 w-8 h-8 border border-cyan-500/30 rounded-full animate-float-fast" style={{ animationDelay: "1s" }} />
        <div className="absolute bottom-40 left-20 w-16 h-16 border border-indigo-500/20 rotate-45 animate-float-slow" style={{ animationDelay: "2s", background: "rgba(99,102,241,0.05)" }} />
        <div className="absolute bottom-32 right-32 w-10 h-10 border border-fuchsia-500/30 rounded-xl -rotate-12 animate-float-fast" style={{ animationDelay: "0.5s" }} />
        <div className="absolute top-60 left-1/3 w-6 h-6 bg-cyan-500/20 rounded-full animate-float-fast" style={{ animationDelay: "3s" }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: text content */}
          <div>
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold mb-7 animated-border"
              style={{
                background: "rgba(99,102,241,0.08)",
                border: "1px solid rgba(99,102,241,0.35)",
                color: "#a78bfa",
              }}
            >
              <Sparkles className="w-4 h-4 text-violet-400" />
              India&apos;s #1 Career-First Upskilling Platform
              <span className="ml-1 px-1.5 py-0.5 text-xs bg-violet-600/30 rounded-full text-violet-300">NEW</span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-[1.05] tracking-tight mb-6"
            >
              <span className="text-white">Upskill in AI.</span>
              <br />
              <span className="gradient-text-violet text-glow-violet">Get Hired</span>
              <br />
              <span className="text-white">Faster.</span>
            </motion.h1>

            {/* Sub */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-slate-400 leading-relaxed max-w-lg mb-10"
            >
              Master in-demand tech skills through industry-led live sessions, real-world projects, and 1:1 mentorship — with dedicated career support until you land your dream role.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-start gap-4 mb-12"
            >
              <Link href="/courses">
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.97 }}
                  id="hero-explore-btn"
                  className="flex items-center gap-2 px-8 py-4 text-base font-bold text-white rounded-2xl bg-gradient-to-r from-violet-600 via-indigo-600 to-cyan-600 glow-violet hover:brightness-110 transition-all duration-300"
                >
                  Explore Courses
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
              </Link>
              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.97 }}
                  id="hero-advisor-btn"
                  className="flex items-center gap-2 px-8 py-4 text-base font-semibold text-violet-300 rounded-2xl border border-violet-700/50 hover:border-violet-400 hover:bg-violet-950/40 transition-all duration-300"
                >
                  Talk to Advisor
                </motion.button>
              </Link>
            </motion.div>

            {/* Social proof */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="flex items-center gap-3 text-sm text-slate-500"
            >
              <div className="flex -space-x-2">
                {["#7c3aed","#0891b2","#059669","#d97706","#db2777"].map((c, i) => (
                  <div key={i} className="w-8 h-8 rounded-full border-2 border-slate-900 flex items-center justify-center text-white text-xs font-bold"
                    style={{ background: c }}>
                    {String.fromCharCode(65 + i)}
                  </div>
                ))}
              </div>
              <span><strong className="text-slate-300">2,000+</strong> learners enrolled this year</span>
            </motion.div>
          </div>

          {/* Right: 3D hero image */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.3 }}
            className="hidden lg:block"
          >
            <ThreeDCard>
              <div className="relative rounded-3xl overflow-hidden glow-violet" style={{ transformStyle: "preserve-3d" }}>
                {/* Scan line effect */}
                <div className="absolute inset-0 z-10 overflow-hidden pointer-events-none">
                  <div className="absolute left-0 right-0 h-32 animate-scan"
                    style={{ background: "linear-gradient(to bottom, transparent, rgba(139,92,246,0.08), transparent)" }} />
                </div>

                <Image
                  src="/hero-3d.png"
                  alt="AI-powered learning platform visual"
                  width={600}
                  height={500}
                  className="w-full h-auto object-cover rounded-3xl"
                  priority
                />

                {/* Overlay overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#06060f]/60 via-transparent to-transparent rounded-3xl" />
                <div className="absolute inset-0 rounded-3xl border border-violet-500/20" />

                {/* Floating badge on image */}
                <div className="absolute bottom-6 left-6 glass-dark rounded-2xl px-4 py-3 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-violet-600 to-indigo-600 flex items-center justify-center">
                    <Sparkles className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400">Latest cohort</p>
                    <p className="text-sm font-bold text-white">May 2025 batch open!</p>
                  </div>
                </div>

                <div className="absolute top-6 right-6 glass-dark rounded-xl px-3 py-2 text-xs text-green-400 font-semibold flex items-center gap-1.5">
                  <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                  Live sessions running
                </div>
              </div>
            </ThreeDCard>
          </motion.div>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
              whileHover={{ y: -6, scale: 1.03 }}
              className="glass-card rounded-2xl p-5 text-center group cursor-default"
              style={{ border: "1px solid rgba(99,102,241,0.15)" }}
            >
              <div className={`inline-flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br ${stat.color} mb-3 shadow-lg group-hover:scale-110 transition-transform`}>
                <stat.icon className="w-5 h-5 text-white" />
              </div>
              <div className="text-2xl font-extrabold text-white mb-1 tabular-nums">
                {stat.kind === "count" ? (
                  <CountUp end={stat.end} suffix={stat.suffix} duration={1.3} />
                ) : (
                  stat.value
                )}
              </div>
              <div className="text-xs text-slate-400 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#06060f] to-transparent z-10" />
    </section>
  );
}
