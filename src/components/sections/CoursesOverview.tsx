"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, LayoutGrid } from "lucide-react";
import { courses } from "@/data/courses";
import { CourseCard } from "@/components/cards/CourseCard";

export function CoursesOverview() {
  return (
    <section
      className="py-24 relative overflow-hidden"
      style={{ background: "#06060f" }}
      id="courses"
    >
      {/* Background decorations — same language as Hero & WhySkillsPro */}
      <div className="absolute inset-0 dot-grid opacity-30" />
      <div className="absolute top-0 left-1/4 w-72 h-72 bg-violet-900/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-indigo-900/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-cyan-900/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <span className="text-violet-400 font-semibold text-sm uppercase tracking-widest mb-3 block">
            Our Programs
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            Choose your career path.{" "}
            <span className="gradient-text-violet">Start transforming.</span>
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Each program is designed to take you from where you are today to
            job-ready — with the tools, mentorship, and outcomes companies
            actually hire for.
          </p>
        </motion.div>

        {/* Courses grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {courses.map((course, i) => (
            <CourseCard key={course.id} course={course} index={i} />
          ))}
        </div>

        {/* View all CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mt-12"
        >
          <Link href="/courses">
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.97 }}
              id="courses-view-all-btn"
              className="inline-flex items-center gap-2 px-8 py-4 text-base font-semibold text-violet-300 rounded-2xl border border-violet-700/50 hover:border-violet-400 hover:bg-violet-950/40 transition-all duration-300"
            >
              <LayoutGrid className="w-5 h-5" />
              View All Courses
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
