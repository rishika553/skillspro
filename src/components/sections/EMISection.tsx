"use client";

import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";
import {
  Zap,
  CalendarDays,
  ShieldCheck,
  BadgeCheck,
  Users,
  Lock,
} from "lucide-react";

// ─── Data ────────────────────────────────────────────────────────────────────

const features = [
  {
    icon: Zap,
    title: "Instant Approval",
    description: "Approval in under 2 minutes — no paperwork, no branch visits.",
    gradient: "from-cyan-600 to-blue-700",
    glow: "rgba(6,182,212,0.35)",
    border: "rgba(6,182,212,0.2)",
  },
  {
    icon: CalendarDays,
    title: "Flexible Tenures",
    description: "Choose 3, 6, 9, or 12-month plans that fit your budget perfectly.",
    gradient: "from-emerald-600 to-teal-700",
    glow: "rgba(16,185,129,0.35)",
    border: "rgba(16,185,129,0.2)",
  },
  {
    icon: ShieldCheck,
    title: "Secure Payments",
    description: "256-bit SSL encryption and RBI-compliant payment gateway.",
    gradient: "from-amber-500 to-orange-600",
    glow: "rgba(245,158,11,0.35)",
    border: "rgba(245,158,11,0.2)",
  },
];


const trustBadges = [
  { icon: Users, text: "10,000+ Students Enrolled" },
  { icon: BadgeCheck, text: "RBI Compliant" },
  { icon: Lock, text: "Secure & Verified Payments" },
];

// ─── 3-D card wrapper ─────────────────────────────────────────────────────────

function Card3D({
  children,
  glow,
  border,
  className = "",
}: {
  children: React.ReactNode;
  glow: string;
  border: string;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [7, -7]), { stiffness: 400, damping: 40 });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-7, 7]), { stiffness: 400, damping: 40 });

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
      className={`h-full ${className}`}
    >
      <motion.div
        style={{
          boxShadow: `0 0 0 1px ${border}, 0 20px 60px rgba(0,0,0,0.4)`,
          transformStyle: "preserve-3d",
          background: "rgba(13,13,31,0.85)",
          backdropFilter: "blur(20px)",
        }}
        whileHover={{ boxShadow: `0 0 40px ${glow}, 0 0 1px ${border}, 0 20px 60px rgba(0,0,0,0.6)` }}
        className="h-full rounded-2xl transition-shadow duration-300"
      >
        {children}
      </motion.div>
    </motion.div>
  );
}

// ─── Main Section ─────────────────────────────────────────────────────────────

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09 } },
};
const itemVariants = {
  hidden: { opacity: 0, y: 36, scale: 0.96 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const } },
};

export function EMISection() {
  return (
    <section
      id="emi"
      className="py-24 relative overflow-hidden"
      style={{ background: "#06060f" }}
    >
      <div className="absolute inset-0 grid-pattern opacity-50" />
      <div className="absolute top-0 right-1/4 w-72 h-72 bg-indigo-900/20 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 left-1/4 w-72 h-72 bg-cyan-900/15 rounded-full blur-[120px]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="text-center mb-16"
        >
          <span className="text-cyan-400 font-semibold text-sm uppercase tracking-widest mb-3 block">
            Hassle-Free Financing
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4 leading-tight">
            Flexible Fee Payment{" "}
            <span className="gradient-text-violet">with EMI</span>
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Pay your fees in easy monthly installments. No financial stress — focus on your learning.
          </p>
        </motion.div>

        {/* Feature cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-16 perspective-1000"
        >
          {features.map((f) => (
            <motion.div key={f.title} variants={itemVariants} className="h-full">
              <Card3D glow={f.glow} border={f.border}>
                <div className="p-6">
                  <div
                    className={`inline-flex items-center justify-center w-11 h-11 rounded-xl bg-gradient-to-br ${f.gradient} mb-4 shadow-lg`}
                    style={{ boxShadow: `0 8px 24px ${f.glow}` }}
                  >
                    <f.icon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-white font-bold text-base mb-2">{f.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{f.description}</p>
                </div>
              </Card3D>
            </motion.div>
          ))}
        </motion.div>

        {/* Trust indicators */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          {trustBadges.map((badge) => (
            <div
              key={badge.text}
              className="flex items-center gap-2.5 px-5 py-2.5 rounded-full text-sm font-semibold text-slate-300"
              style={{
                background: "rgba(99,102,241,0.07)",
                border: "1px solid rgba(99,102,241,0.18)",
              }}
            >
              <badge.icon className="w-4 h-4 text-cyan-400 shrink-0" />
              {badge.text}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
