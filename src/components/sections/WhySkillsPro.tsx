"use client";

import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";
import {
  BrainCircuit, FolderCode, UserCheck, Briefcase, GraduationCap, CalendarCheck,
} from "lucide-react";

const features = [
  {
    icon: BrainCircuit, title: "AI-First Curriculum",
    description: "Every course is designed with an AI-first approach — tools, prompts, and automation woven throughout the entire learning journey.",
    gradient: "from-violet-600 to-purple-700",
    glow: "rgba(139,92,246,0.3)",
    border: "rgba(139,92,246,0.2)",
  },
  {
    icon: FolderCode, title: "Real-World Projects",
    description: "Build a portfolio employers actually care about. Each project simulates real business problems you'll solve from day one at your job.",
    gradient: "from-cyan-600 to-blue-700",
    glow: "rgba(6,182,212,0.3)",
    border: "rgba(6,182,212,0.2)",
  },
  {
    icon: UserCheck, title: "1:1 Live Mentorship",
    description: "Get personalized guidance from mentors who are actively working in your target field — not career coaches, but real practitioners.",
    gradient: "from-emerald-600 to-teal-700",
    glow: "rgba(16,185,129,0.3)",
    border: "rgba(16,185,129,0.2)",
  },
  {
    icon: Briefcase, title: "Career Support",
    description: "Resume reviews, LinkedIn optimization, mock interviews, and warm referrals — career help beyond just certificates.",
    gradient: "from-amber-500 to-orange-600",
    glow: "rgba(245,158,11,0.3)",
    border: "rgba(245,158,11,0.2)",
  },
  {
    icon: GraduationCap, title: "Industry-Led Curriculum",
    description: "Curriculum is continuously updated with inputs from hiring managers and senior engineers to reflect what's actually needed right now.",
    gradient: "from-blue-600 to-indigo-700",
    glow: "rgba(99,102,241,0.3)",
    border: "rgba(99,102,241,0.2)",
  },
  {
    icon: CalendarCheck, title: "Flexible Batches",
    description: "Choose weekend or weeknight cohorts designed for working professionals. Learn without disrupting your current schedule.",
    gradient: "from-fuchsia-600 to-pink-700",
    glow: "rgba(217,70,239,0.3)",
    border: "rgba(217,70,239,0.2)",
  },
];

function Card3D({ children, glow, border }: { children: React.ReactNode; glow: string; border: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [8, -8]), { stiffness: 400, damping: 40 });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-8, 8]), { stiffness: 400, damping: 40 });
  const brightness = useSpring(1, { stiffness: 300, damping: 30 });

  const handleMouse = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
    brightness.set(1.05);
  };
  const reset = () => { x.set(0); y.set(0); brightness.set(1); };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      className="h-full"
    >
      <motion.div
        style={{
          boxShadow: `0 0 0 1px ${border}, 0 20px 60px rgba(0,0,0,0.4)`,
          transformStyle: "preserve-3d",
          background: "rgba(13,13,31,0.8)",
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

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};
const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export function WhySkillsPro() {
  return (
    <section className="py-24 relative overflow-hidden" style={{ background: "#06060f" }} id="why-skillspro">
      {/* Background */}
      <div className="absolute inset-0 grid-pattern opacity-60" />
      <div className="absolute top-0 left-1/3 w-64 h-64 bg-violet-900/20 rounded-full blur-[100px]" />
      <div className="absolute bottom-0 right-1/3 w-64 h-64 bg-cyan-900/20 rounded-full blur-[100px]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-violet-400 font-semibold text-sm uppercase tracking-widest mb-3 block">
            Why Choose Us
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            Built for career outcomes.{" "}
            <span className="gradient-text-violet">Not just certificates.</span>
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            We obsess over what makes learners actually employable — and design every touchpoint around that mission.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 perspective-1000"
        >
          {features.map((f, i) => (
            <motion.div key={f.title} variants={cardVariants} className="h-full">
              <Card3D glow={f.glow} border={f.border}>
                <div className="p-7 relative overflow-hidden">
                  <motion.span
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.45, delay: 0.05 * i }}
                    className="absolute right-4 top-3 text-6xl sm:text-7xl font-black tabular-nums leading-none text-white/[0.08] pointer-events-none select-none"
                    aria-hidden
                  >
                    {String(i + 1).padStart(2, "0")}
                  </motion.span>
                  <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br ${f.gradient} mb-5 shadow-lg relative z-[1]`}
                    style={{ boxShadow: `0 8px 30px ${f.glow}` }}>
                    <f.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2 relative z-[1]">{f.title}</h3>
                  <p className="text-slate-400 leading-relaxed text-sm relative z-[1]">{f.description}</p>
                </div>
              </Card3D>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
