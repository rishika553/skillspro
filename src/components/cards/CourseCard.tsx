"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Clock, CheckCircle2, Zap, BarChart2 } from "lucide-react";
import { Course } from "@/data/courses";

// Map slug → local image
const courseImages: Record<string, string> = {
  "ai-agents": "/course-ai-agents.png",
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

  const img = courseImages[course.slug] || "/hero-3d.png";

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
          whileHover={{ boxShadow: `0 0 60px rgba(59,130,246,0.28), 0 30px 80px rgba(0,0,0,0.6)` }}
          className="flex flex-col h-full rounded-3xl overflow-hidden transition-shadow duration-500"
          style={{
            background: "rgba(13,13,31,0.85)",
            backdropFilter: "blur(20px)",
            border: "1px solid rgba(59,130,246,0.22)",
            boxShadow: "0 8px 40px rgba(0,0,0,0.4)",
          }}
        >
        {/* Course image */}
        <div className="relative h-52 overflow-hidden">
          <Image
            src={img}
            alt={course.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d1f] via-transparent to-transparent" />
          <div className={`absolute inset-0 bg-gradient-to-br ${course.color} opacity-30`} />

          {/* Badges on image */}
          <div className="absolute top-3 left-3 flex gap-2">
            <span className="px-2.5 py-1 text-xs font-semibold rounded-full" style={{ background: "rgba(13,13,31,0.8)", color: "#93c5fd", border: "1px solid rgba(59,130,246,0.35)", backdropFilter: "blur(8px)" }}>
              {course.category}
            </span>
          </div>
          <div className="absolute top-3 right-3">
            <span className="px-2.5 py-1 text-xs font-bold rounded-full" style={{ background: levelColors[course.level], color: levelText[course.level], border: `1px solid ${levelText[course.level]}33` }}>
              {course.level}
            </span>
          </div>

          {/* Live badge */}
          <div className="absolute bottom-3 right-3 flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold text-emerald-400" style={{ background: "rgba(16,185,129,0.15)", border: "1px solid rgba(16,185,129,0.3)" }}>
            <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse" />
            Live Cohort
          </div>
        </div>

        {/* Content */}
        <div className="p-6 flex flex-col flex-1">
          {/* Title */}
          <h3 className="text-xl font-bold text-white mb-1 group-hover:text-sky-300 transition-colors duration-300">
            {course.title}
          </h3>
          <p className="text-sm font-medium mb-4 text-sky-400">{course.transformationPromise}</p>

          {/* Stats */}
          <div className="flex flex-wrap items-center gap-4 text-xs text-slate-500 mb-4 py-3 border-y border-blue-500/15">
            <span className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-sky-400 shrink-0" /> {course.duration}
            </span>
            <span className="flex items-center gap-1.5 text-slate-400 sm:ml-auto">
              <BarChart2 className="w-3.5 h-3.5 text-sky-400 shrink-0" /> {course.weeklyHours}
            </span>
          </div>

          {/* Outcomes */}
          <ul className="space-y-2 mb-5 flex-1">
            {course.outcomes.slice(0, 4).map((o) => (
              <li key={o} className="flex items-start gap-2 text-xs text-slate-400">
                <CheckCircle2 className="w-3.5 h-3.5 text-sky-500 shrink-0 mt-0.5" />
                {o}
              </li>
            ))}
          </ul>

          {/* Tool tags */}
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

          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full flex items-center justify-center gap-2 py-3 text-sm font-bold text-white rounded-xl transition-all duration-300"
            style={{
              background: `linear-gradient(135deg, rgba(37,99,235,0.95), rgba(14,165,233,0.9))`,
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
