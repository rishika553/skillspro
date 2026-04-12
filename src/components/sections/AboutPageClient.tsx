"use client";

import Link from "next/link";
import { useRef } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useInView,
} from "framer-motion";
import {
  Target,
  Telescope,
  Route,
  Heart,
  Shield,
  Zap,
  Users,
  Scale,
  Sparkles,
  ArrowRight,
  CircleDot,
} from "lucide-react";

function TiltCard({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [7, -7]), { stiffness: 260, damping: 35 });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-7, 7]), { stiffness: 260, damping: 35 });

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    x.set((e.clientX - r.left) / r.width - 0.5);
    y.set((e.clientY - r.top) / r.height - 0.5);
  };
  const onLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

const journey = [
  {
    year: "2019",
    title: "The spark",
    body: "SkillsPro began as a small live cohort helping professionals break into QA and automation — with mentors who still worked in the industry.",
    icon: CircleDot,
  },
  {
    year: "2021",
    title: "Scaling impact",
    body: "We crossed 500 learners, formalised placement support, and partnered with our first hiring teams who wanted job-ready talent, not theory.",
    icon: Route,
  },
  {
    year: "2023",
    title: "AI-first shift",
    body: "Curriculum across programs was rebuilt around AI tools, agents, and automation — so every graduate could ship value from week one.",
    icon: Zap,
  },
  {
    year: "2026",
    title: "Nationwide cohorts",
    body: "2,000+ learners a year, 50+ hiring partners, and weekend batches designed for working professionals across India.",
    icon: Users,
  },
];

const values = [
  {
    title: "Learner-first",
    desc: "Every decision — from pacing to projects — is judged by whether it helps you get hired and grow.",
    icon: Heart,
    gradient: "from-rose-500 to-orange-500",
    glow: "rgba(244,63,94,0.25)",
  },
  {
    title: "Radical honesty",
    desc: "We are clear about outcomes, effort required, and where our programs fit — no inflated promises.",
    icon: Shield,
    gradient: "from-violet-600 to-indigo-600",
    glow: "rgba(139,92,246,0.3)",
  },
  {
    title: "Practice over slides",
    desc: "Real briefs, real tools, and portfolio work that mirrors what teams expect in interviews.",
    icon: Sparkles,
    gradient: "from-cyan-500 to-blue-600",
    glow: "rgba(6,182,212,0.28)",
  },
  {
    title: "Access & inclusion",
    desc: "Flexible batches, schedules that respect working professionals, and support for career switchers at every age.",
    icon: Users,
    gradient: "from-emerald-500 to-teal-600",
    glow: "rgba(16,185,129,0.28)",
  },
  {
    title: "Fair dealing",
    desc: "Clear expectations, honest guidance from advisors, and policies explained upfront — never pressure tactics.",
    icon: Scale,
    gradient: "from-amber-500 to-amber-700",
    glow: "rgba(245,158,11,0.25)",
  },
  {
    title: "Always evolving",
    desc: "Curriculum updates roll in continuously from hiring managers and alumni feedback.",
    icon: Zap,
    gradient: "from-fuchsia-600 to-pink-600",
    glow: "rgba(217,70,239,0.28)",
  },
];

export function AboutPageClient() {
  const journeyRef = useRef<HTMLDivElement>(null);
  const journeyInView = useInView(journeyRef, { once: true, margin: "-80px" });

  return (
    <div className="pt-16 text-slate-200" style={{ background: "#06060f" }}>
      {/* Hero */}
      <section className="relative min-h-[72vh] flex flex-col justify-center overflow-hidden perspective-1000">
        <div className="absolute inset-0 dot-grid opacity-35" />
        <div className="absolute top-1/4 left-1/4 w-[28rem] h-[28rem] bg-violet-600/15 rounded-full blur-[120px] animate-pulse-glow" />
        <div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-cyan-600/10 rounded-full blur-[100px] animate-pulse-glow"
          style={{ animationDelay: "1s" }}
        />

        <motion.div
          animate={{ rotateX: [0, 6, 0], rotateY: [0, -8, 0] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
          style={{ transformStyle: "preserve-3d" }}
          className="absolute right-[8%] top-[20%] hidden xl:block w-24 h-24 rounded-2xl border border-violet-500/25 bg-violet-500/5 pointer-events-none"
        />
        <motion.div
          animate={{ y: [0, -20, 0], rotateZ: [0, 8, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute left-[10%] bottom-[28%] hidden lg:block w-16 h-16 rounded-full border-2 border-cyan-500/20 pointer-events-none"
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65 }}
            className="max-w-3xl"
          >
            <span className="inline-flex items-center gap-2 text-violet-400 font-semibold text-sm uppercase tracking-widest mb-5">
              <Sparkles className="w-4 h-4" />
              About SkillsPro
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
              We exist to turn{" "}
              <span className="gradient-text-violet">ambition</span> into{" "}
              <span className="text-cyan-400">offers</span>.
            </h1>
            <p className="text-lg text-slate-400 leading-relaxed max-w-2xl">
              SkillsPro is a career-first learning company built in India, for India — blending live mentorship,
              hands-on projects, and structured placement support so you are never guessing what to do next.
            </p>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#06060f] to-transparent z-[1]" />
      </section>

      {/* Mission & Vision */}
      <section className="relative py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-40" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 perspective-1000">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55 }}
            >
              <TiltCard className="h-full">
                <div
                  className="h-full rounded-3xl p-8 sm:p-10 border border-violet-500/20 glass-card"
                  style={{ transform: "translateZ(24px)" }}
                >
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-violet-600 to-purple-700 shadow-lg mb-6"
                    style={{ boxShadow: "0 12px 40px rgba(139,92,246,0.35)" }}>
                    <Target className="w-7 h-7 text-white" aria-hidden />
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-4">Our mission</h2>
                  <p className="text-slate-400 leading-relaxed text-base sm:text-lg">
                    To make high-quality, industry-aligned tech education accessible — and to stay beside every learner
                    with mentorship and career support until they can stand confidently in hiring conversations.
                  </p>
                </div>
              </TiltCard>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: 0.08 }}
            >
              <TiltCard className="h-full">
                <div
                  className="h-full rounded-3xl p-8 sm:p-10 border border-cyan-500/20 glass-card"
                  style={{ transform: "translateZ(24px)" }}
                >
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-600 to-blue-700 shadow-lg mb-6"
                    style={{ boxShadow: "0 12px 40px rgba(6,182,212,0.3)" }}>
                    <Telescope className="w-7 h-7 text-white" aria-hidden />
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-4">Our vision</h2>
                  <p className="text-slate-400 leading-relaxed text-base sm:text-lg">
                    A future where anyone in India can reskill without leaving their job — and where employers trust
                    SkillsPro graduates to deliver from day one because they have already shipped real work.
                  </p>
                </div>
              </TiltCard>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Journey */}
      <section ref={journeyRef} className="relative py-20 lg:py-28" style={{ background: "#0a0a14" }}>
        <div className="absolute inset-0 opacity-30 dot-grid" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16 lg:mb-24"
          >
            <span className="text-cyan-400 font-semibold text-base sm:text-lg uppercase tracking-widest mb-4 block">
              Our journey
            </span>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-5 sm:mb-6 leading-tight">
              From one cohort to a <span className="gradient-text-violet">movement</span>
            </h2>
            <p className="text-slate-400 max-w-3xl mx-auto text-xl sm:text-2xl leading-relaxed">
              Milestones that shaped how we teach, place, and care for learners.
            </p>
          </motion.div>

          <div className="relative max-w-4xl mx-auto">
            <div
              className="absolute left-[1.25rem] sm:left-10 top-0 bottom-0 w-px bg-gradient-to-b from-violet-500/50 via-cyan-500/40 to-transparent"
              aria-hidden
            />
            <ul className="space-y-14 sm:space-y-16">
              {journey.map((item, i) => (
                <motion.li
                  key={item.year}
                  initial={{ opacity: 0, x: -20 }}
                  animate={journeyInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.12 * i }}
                  className="relative pl-16 sm:pl-24"
                >
                  <motion.div
                    whileHover={{ x: 6, scale: 1.01 }}
                    style={{ transformStyle: "preserve-3d" }}
                    className="absolute left-0 sm:left-1 top-1 w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-violet-600 to-indigo-600 border border-white/10 flex items-center justify-center shadow-lg z-10"
                  >
                    <item.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" aria-hidden />
                  </motion.div>
                  <div className="rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-sm p-8 sm:p-10 hover:border-violet-500/25 transition-colors">
                    <span className="text-violet-400 font-extrabold text-base sm:text-lg tabular-nums tracking-wider">
                      {item.year}
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-bold text-white mt-3 mb-4 leading-snug">{item.title}</h3>
                    <p className="text-slate-400 leading-relaxed text-lg sm:text-xl">{item.body}</p>
                  </div>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="relative py-20 lg:py-28 overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[120px]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16 lg:mb-20"
          >
            <span className="text-fuchsia-400 font-semibold text-base sm:text-lg uppercase tracking-widest mb-4 block">
              Our values
            </span>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-5 sm:mb-6 leading-tight">
              What we refuse to compromise on
            </h2>
            <p className="text-slate-400 max-w-3xl mx-auto text-xl sm:text-2xl leading-relaxed">
              Culture is not a poster on the wall — it is how we hire mentors, design programs, and support you when it gets hard.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7 sm:gap-8">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: 0.06 * i }}
                whileHover={{ y: -8, rotateX: 4, rotateY: -2 }}
                style={{ transformStyle: "preserve-3d" }}
                className="group rounded-2xl border border-white/10 bg-[rgba(13,13,31,0.85)] backdrop-blur-md p-8 sm:p-9 hover:border-white/20 transition-colors"
              >
                <div
                  className={`inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-xl bg-gradient-to-br ${v.gradient} mb-6 shadow-lg group-hover:scale-110 transition-transform`}
                  style={{ boxShadow: `0 10px 32px ${v.glow}` }}
                >
                  <v.icon className="w-7 h-7 sm:w-8 sm:h-8 text-white" aria-hidden />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 leading-snug">{v.title}</h3>
                <p className="text-base sm:text-lg text-slate-400 leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Join our mission */}
      <section className="relative py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-violet-700/30 via-indigo-900/40 to-cyan-900/25" />
        <div className="absolute inset-0 dot-grid opacity-20" />
        <motion.div
          animate={{ rotateZ: [0, 360] }}
          transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
          className="absolute -right-20 top-1/2 -translate-y-1/2 w-72 h-72 rounded-full border border-violet-500/10 pointer-events-none hidden lg:block"
        />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="rounded-3xl border border-white/15 bg-[#0d0d1f]/80 backdrop-blur-xl p-10 sm:p-14 shadow-[0_0_80px_-20px_rgba(139,92,246,0.45)]"
            style={{ transformStyle: "preserve-3d" }}
          >
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-violet-600 to-fuchsia-600 mb-8 mx-auto shadow-xl"
            >
              <Users className="w-8 h-8 text-white" aria-hidden />
            </motion.div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-5 leading-tight">
              Join our mission
            </h2>
            <p className="text-lg text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed">
              Whether you are switching careers, levelling up at work, or hiring our graduates — there is a place for you
              in the SkillsPro community.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }} className="w-full sm:w-auto">
                <Link
                  href="/contact#apply"
                  id="about-join-apply"
                  className="flex w-full sm:w-auto items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-violet-600 via-fuchsia-600 to-cyan-600 px-10 py-4 text-base font-extrabold text-white shadow-lg shadow-violet-900/50 border border-white/10"
                >
                  Apply now
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="w-full sm:w-auto">
                <Link
                  href="/courses"
                  id="about-join-courses"
                  className="flex w-full sm:w-auto items-center justify-center rounded-2xl border border-violet-400/40 bg-violet-950/30 px-10 py-4 text-base font-semibold text-violet-200 hover:bg-violet-950/50 transition-colors"
                >
                  Explore programs
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
