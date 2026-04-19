"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Clock, CheckCircle2, Zap, BarChart2, Download } from "lucide-react";
import { Course } from "@/data/courses";

// Map slug → local image (ai-agents uses inline SVG illustration)
const courseImages: Record<string, string> = {
  "qa-automation": "/course-qa.png",
  "data-analyst": "/course-data.png",
  "digital-marketing-ai": "/course-marketing.png",
};

const levelColors: Record<string, string> = {
  Beginner: "rgba(16,185,129,0.15)",
  Intermediate: "rgba(37,99,235,0.18)",
  Advanced: "rgba(245,158,11,0.15)",
};
const levelText: Record<string, string> = {
  Beginner: "#34d399",
  Intermediate: "#60a5fa",
  Advanced: "#fbbf24",
};

// ── AI Agents inline SVG illustration ────────────────────────────────────────
function AIAgentsIllustration() {
  return (
    <div
      className="relative w-full h-full flex items-center justify-center overflow-hidden"
      style={{ background: "linear-gradient(135deg, #0d0d1f 0%, #130d2e 50%, #0a1628 100%)" }}
    >
      {/* Ambient glows */}
      <div className="absolute w-40 h-40 rounded-full blur-[60px] opacity-40"
        style={{ background: "rgba(139,92,246,0.5)", top: "10%", left: "15%" }} />
      <div className="absolute w-32 h-32 rounded-full blur-[50px] opacity-30"
        style={{ background: "rgba(6,182,212,0.5)", bottom: "10%", right: "15%" }} />

      <svg viewBox="0 0 320 200" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="dots" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
            <circle cx="1" cy="1" r="0.8" fill="rgba(99,102,241,0.2)" />
          </pattern>
          <filter id="glow-f">
            <feGaussianBlur stdDeviation="2" result="blur" />
            <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
          </filter>
        </defs>
        <rect width="320" height="200" fill="url(#dots)" />

        {/* Connection lines */}
        <line x1="80" y1="100" x2="140" y2="70" stroke="rgba(139,92,246,0.4)" strokeWidth="1.5" strokeDasharray="4 3" />
        <line x1="80" y1="100" x2="140" y2="130" stroke="rgba(6,182,212,0.4)" strokeWidth="1.5" strokeDasharray="4 3" />
        <line x1="140" y1="70" x2="180" y2="70" stroke="rgba(99,102,241,0.5)" strokeWidth="1.5" />
        <line x1="140" y1="130" x2="180" y2="130" stroke="rgba(99,102,241,0.5)" strokeWidth="1.5" />
        <line x1="180" y1="70" x2="240" y2="55" stroke="rgba(139,92,246,0.35)" strokeWidth="1.5" strokeDasharray="4 3" />
        <line x1="180" y1="130" x2="240" y2="145" stroke="rgba(6,182,212,0.35)" strokeWidth="1.5" strokeDasharray="4 3" />
        <line x1="216" y1="70" x2="240" y2="100" stroke="rgba(139,92,246,0.3)" strokeWidth="1" strokeDasharray="3 3" />

        {/* Central node */}
        <circle cx="80" cy="100" r="22" fill="rgba(13,13,31,0.9)" stroke="rgba(139,92,246,0.7)" strokeWidth="1.5" filter="url(#glow-f)" />
        <circle cx="80" cy="100" r="16" fill="rgba(139,92,246,0.15)" />
        {/* Bot icon using paths */}
        <rect x="72" y="92" width="16" height="12" rx="3" fill="none" stroke="#a78bfa" strokeWidth="1.2" />
        <circle cx="76" cy="97" r="1.5" fill="#a78bfa" />
        <circle cx="84" cy="97" r="1.5" fill="#a78bfa" />
        <line x1="80" y1="92" x2="80" y2="89" stroke="#a78bfa" strokeWidth="1.2" />
        <circle cx="80" cy="88" r="1.2" fill="#a78bfa" />
        <line x1="72" y1="101" x2="69" y2="101" stroke="#a78bfa" strokeWidth="1.2" />
        <line x1="88" y1="101" x2="91" y2="101" stroke="#a78bfa" strokeWidth="1.2" />
        <text x="80" y="122" textAnchor="middle" fontSize="7" fill="rgba(167,139,250,0.8)" fontFamily="monospace">AI Agent</text>

        {/* Pulse ring */}
        <circle cx="80" cy="100" r="26" fill="none" stroke="rgba(139,92,246,0.2)" strokeWidth="1">
          <animate attributeName="r" values="22;30;22" dur="3s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.4;0;0.4" dur="3s" repeatCount="indefinite" />
        </circle>

        {/* Trigger node */}
        <rect x="122" y="54" width="36" height="32" rx="8" fill="rgba(13,13,31,0.9)" stroke="rgba(99,102,241,0.6)" strokeWidth="1.2" filter="url(#glow-f)" />
        <polygon points="136,63 136,77 148,70" fill="#818cf8" />
        <text x="140" y="82" textAnchor="middle" fontSize="6" fill="rgba(129,140,248,0.8)" fontFamily="monospace">Trigger</text>

        {/* API Call node */}
        <rect x="122" y="114" width="36" height="32" rx="8" fill="rgba(13,13,31,0.9)" stroke="rgba(6,182,212,0.6)" strokeWidth="1.2" filter="url(#glow-f)" />
        <rect x="131" y="121" width="18" height="3" rx="1" fill="#22d3ee" opacity="0.8" />
        <rect x="131" y="126" width="12" height="3" rx="1" fill="#22d3ee" opacity="0.5" />
        <rect x="131" y="131" width="15" height="3" rx="1" fill="#22d3ee" opacity="0.6" />
        <text x="140" y="142" textAnchor="middle" fontSize="6" fill="rgba(34,211,238,0.8)" fontFamily="monospace">API Call</text>

        {/* LLM node */}
        <rect x="162" y="54" width="36" height="32" rx="8" fill="rgba(13,13,31,0.9)" stroke="rgba(139,92,246,0.5)" strokeWidth="1.2" />
        <circle cx="180" cy="67" r="7" fill="none" stroke="#c084fc" strokeWidth="1.2" />
        <line x1="176" y1="64" x2="184" y2="70" stroke="#c084fc" strokeWidth="1" />
        <line x1="184" y1="64" x2="176" y2="70" stroke="#c084fc" strokeWidth="1" />
        <text x="180" y="82" textAnchor="middle" fontSize="6" fill="rgba(192,132,252,0.8)" fontFamily="monospace">LLM</text>

        {/* Action node */}
        <rect x="162" y="114" width="36" height="32" rx="8" fill="rgba(13,13,31,0.9)" stroke="rgba(6,182,212,0.5)" strokeWidth="1.2" />
        <polyline points="172,130 177,135 188,124" fill="none" stroke="#34d399" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <text x="180" y="142" textAnchor="middle" fontSize="6" fill="rgba(52,211,153,0.8)" fontFamily="monospace">Action</text>

        {/* Output nodes */}
        <circle cx="252" cy="55" r="12" fill="rgba(13,13,31,0.9)" stroke="rgba(251,191,36,0.6)" strokeWidth="1.2" />
        <rect x="246" y="49" width="12" height="9" rx="1" fill="none" stroke="#fbbf24" strokeWidth="1" />
        <line x1="252" y1="49" x2="252" y2="46" stroke="#fbbf24" strokeWidth="1" />
        <line x1="249" y1="53" x2="255" y2="53" stroke="#fbbf24" strokeWidth="0.8" opacity="0.6" />

        <circle cx="252" cy="100" r="12" fill="rgba(13,13,31,0.9)" stroke="rgba(139,92,246,0.6)" strokeWidth="1.2" />
        <rect x="245" y="94" width="14" height="10" rx="2" fill="none" stroke="#a78bfa" strokeWidth="1" />
        <line x1="248" y1="97" x2="256" y2="97" stroke="#a78bfa" strokeWidth="0.8" opacity="0.7" />
        <line x1="248" y1="100" x2="254" y2="100" stroke="#a78bfa" strokeWidth="0.8" opacity="0.5" />

        <circle cx="252" cy="145" r="12" fill="rgba(13,13,31,0.9)" stroke="rgba(6,182,212,0.6)" strokeWidth="1.2" />
        <rect x="245" y="139" width="14" height="10" rx="2" fill="none" stroke="#22d3ee" strokeWidth="1" />
        <circle cx="248" cy="142" r="1" fill="#22d3ee" />
        <line x1="251" y1="142" x2="256" y2="142" stroke="#22d3ee" strokeWidth="0.8" opacity="0.7" />
        <line x1="248" y1="145" x2="256" y2="145" stroke="#22d3ee" strokeWidth="0.8" opacity="0.5" />

        {/* n8n label */}
        <rect x="90" y="88" width="40" height="14" rx="4" fill="rgba(99,102,241,0.15)" stroke="rgba(99,102,241,0.3)" strokeWidth="0.8" />
        <text x="110" y="98" textAnchor="middle" fontSize="6" fill="rgba(165,180,252,0.9)" fontFamily="monospace">n8n / Make</text>

        {/* Top label */}
        <rect x="8" y="8" width="92" height="16" rx="4" fill="rgba(139,92,246,0.12)" stroke="rgba(139,92,246,0.25)" strokeWidth="0.8" />
        <text x="54" y="19" textAnchor="middle" fontSize="7" fill="rgba(167,139,250,0.9)" fontFamily="monospace">Workflow Automation</text>
      </svg>
    </div>
  );
}

interface CourseCardProps {
  course: Course;
  index?: number;
}

export function CourseCard({ course, index = 0 }: CourseCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [6, -6]), { stiffness: 300, damping: 35 });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-6, 6]), { stiffness: 300, damping: 35 });

  const handleMouse = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };
  const reset = () => { x.set(0); y.set(0); };

  const img = courseImages[course.slug];
  const isAIAgents = course.slug === "ai-agents";

  return (
    <Link href={`/courses/${course.slug}`} className="block">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
        ref={ref}
        onMouseMove={handleMouse}
        onMouseLeave={reset}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d", perspective: 1000 }}
        className="group flex flex-col rounded-3xl overflow-hidden cursor-pointer"
      >
        <motion.div
          whileHover={{ boxShadow: "0 0 60px rgba(59,130,246,0.28), 0 30px 80px rgba(0,0,0,0.6)" }}
          className="flex flex-col h-full rounded-3xl overflow-hidden transition-shadow duration-500"
          style={{
            background: "rgba(13,13,31,0.85)",
            backdropFilter: "blur(20px)",
            border: "1px solid rgba(59,130,246,0.22)",
            boxShadow: "0 8px 40px rgba(0,0,0,0.4)",
          }}
        >
          {/* Course image / illustration */}
          <div className="relative h-52 overflow-hidden">
            {isAIAgents ? (
              <AIAgentsIllustration />
            ) : (
              <Image
                src={img!}
                alt={course.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d1f] via-transparent to-transparent" />
            <div className={`absolute inset-0 bg-gradient-to-br ${course.color} opacity-30`} />

            {/* Badges */}
            <div className="absolute top-3 left-3 flex gap-2">
              <span className="px-2.5 py-1 text-xs font-semibold rounded-full"
                style={{ background: "rgba(13,13,31,0.8)", color: "#93c5fd", border: "1px solid rgba(59,130,246,0.35)", backdropFilter: "blur(8px)" }}>
                {course.category}
              </span>
            </div>
            <div className="absolute top-3 right-3">
              <span className="px-2.5 py-1 text-xs font-bold rounded-full"
                style={{ background: levelColors[course.level], color: levelText[course.level], border: `1px solid ${levelText[course.level]}33` }}>
                {course.level}
              </span>
            </div>
            <div className="absolute bottom-3 right-3 flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold text-emerald-400"
              style={{ background: "rgba(16,185,129,0.15)", border: "1px solid rgba(16,185,129,0.3)" }}>
              <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse" />
              Live Cohort
            </div>
          </div>

          {/* Content */}
          <div className="p-6 flex flex-col flex-1">
            <h3 className="text-xl font-bold text-white mb-1 group-hover:text-sky-300 transition-colors duration-300">
              {course.title}
            </h3>
            <p className="text-sm font-medium mb-4 text-sky-400">{course.transformationPromise}</p>

            <div className="flex flex-wrap items-center gap-4 text-xs text-slate-500 mb-4 py-3 border-y border-blue-500/15">
              <span className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-sky-400 shrink-0" /> {course.duration}
              </span>
              <span className="flex items-center gap-1.5 text-slate-400 sm:ml-auto">
                <BarChart2 className="w-3.5 h-3.5 text-sky-400 shrink-0" /> {course.weeklyHours}
              </span>
            </div>

            <ul className="space-y-2 mb-5 flex-1">
              {course.outcomes.slice(0, 4).map((o) => (
                <li key={o} className="flex items-start gap-2 text-xs text-slate-400">
                  <CheckCircle2 className="w-3.5 h-3.5 text-sky-500 shrink-0 mt-0.5" />
                  {o}
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-1.5 mb-5">
              {course.tools.slice(0, 4).map((tool) => (
                <span key={tool} className="text-[11px] px-2 py-0.5 rounded-full font-medium bg-blue-500/10 text-sky-300 border border-sky-500/25">
                  {tool}
                </span>
              ))}
              {course.tools.length > 4 && (
                <span className="text-[11px] text-slate-500">+{course.tools.length - 4}</span>
              )}
            </div>

            {course.curriculumPdf && (
              <a
                href={course.curriculumPdf}
                download
                onClick={(e) => e.stopPropagation()}
                className="w-full flex items-center justify-center gap-2 py-2.5 mb-3 text-sm font-semibold rounded-xl transition-all duration-200 text-sky-300 hover:text-white hover:bg-sky-500/20"
                style={{ border: "1px solid rgba(56,189,248,0.3)" }}
              >
                <Download className="w-4 h-4" />
                Download Curriculum PDF
              </a>
            )}

            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full flex items-center justify-center gap-2 py-3 text-sm font-bold text-white rounded-xl transition-all duration-300"
              style={{
                background: "linear-gradient(135deg, rgba(37,99,235,0.95), rgba(14,165,233,0.9))",
                border: "1px solid rgba(56,189,248,0.45)",
              }}
            >
              <Zap className="w-4 h-4" />
              View Course Details
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </Link>
  );
}
