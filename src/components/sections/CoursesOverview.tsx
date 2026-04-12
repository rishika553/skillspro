"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { courses } from "@/data/courses";
import { CourseCard } from "@/components/cards/CourseCard";
import { Button } from "@/components/ui/button";

export function CoursesOverview() {
  return (
    <section className="py-24 bg-gradient-to-b from-slate-50 via-blue-50/50 to-slate-50" id="courses">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <span className="text-blue-600 font-semibold text-sm uppercase tracking-widest mb-3 block">
            Our Programs
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4">
            Choose your career path.{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-sky-600 to-cyan-600">
              Start transforming.
            </span>
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Each program is designed to take you from where you are today to job-ready — with the tools, mentorship, and outcomes companies actually hire for.
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
            <Button
              variant="outline"
              size="lg"
              className="group border-2 border-blue-600 text-blue-700 hover:bg-blue-600 hover:text-white hover:border-blue-600"
              id="courses-view-all-btn"
            >
              View All Courses
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
