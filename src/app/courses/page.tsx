"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Search, SlidersHorizontal } from "lucide-react";
import { courses } from "@/data/courses";
import { CourseCard } from "@/components/cards/CourseCard";
import { Input } from "@/components/ui/input";
import { CTABanner } from "@/components/sections/CTABanner";

const levels = ["All", "Beginner", "Intermediate", "Advanced"] as const;
const categories = ["All", "AI & Automation", "Testing & QA", "Data & Analytics", "Marketing & Growth"] as const;

export default function CoursesPage() {
  const [search, setSearch] = useState("");
  const [level, setLevel] = useState<string>("All");
  const [category, setCategory] = useState<string>("All");

  const filtered = useMemo(() => {
    return courses.filter((c) => {
      const matchesSearch =
        c.title.toLowerCase().includes(search.toLowerCase()) ||
        c.tools.some((t) => t.toLowerCase().includes(search.toLowerCase())) ||
        c.category.toLowerCase().includes(search.toLowerCase());
      const matchesLevel = level === "All" || c.level === level;
      const matchesCategory = category === "All" || c.category === category;
      return matchesSearch && matchesLevel && matchesCategory;
    });
  }, [search, level, category]);

  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 py-20 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-sky-400 font-semibold text-sm uppercase tracking-widest mb-3 block">
              All Programs
            </span>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
              Find your perfect{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-blue-400 to-cyan-300">
                career track
              </span>
            </h1>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto mb-10">
              Explore all our industry-aligned programs. Filter by skill level, category, or search for the tools you want to master.
            </p>

            {/* Search */}
            <div className="max-w-md mx-auto relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
              <Input
                id="course-search"
                placeholder="Search courses or tools..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="pl-12 bg-white/10 border-white/20 text-white placeholder:text-slate-400 focus-visible:ring-sky-400"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Filters + Grid */}
      <section className="py-16 bg-gradient-to-b from-slate-50 via-blue-50/40 to-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filters */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="flex flex-wrap items-center gap-4 mb-10"
          >
            <div className="flex items-center gap-2 text-slate-500 text-sm font-medium">
              <SlidersHorizontal className="w-4 h-4" />
              Filter:
            </div>

            {/* Level filter */}
            <div className="flex flex-wrap gap-2">
              {levels.map((l) => (
                <button
                  key={l}
                  onClick={() => setLevel(l)}
                  className={`px-4 py-1.5 rounded-full text-sm font-medium border transition-all ${
                    level === l
                      ? "bg-blue-600 text-white border-blue-600"
                      : "bg-white text-slate-600 border-slate-200 hover:border-blue-300"
                  }`}
                >
                  {l}
                </button>
              ))}
            </div>

            <div className="w-px h-6 bg-slate-200 hidden sm:block" />

            {/* Category filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setCategory(cat)}
                  className={`px-4 py-1.5 rounded-full text-sm font-medium border transition-all ${
                    category === cat
                      ? "bg-blue-600 text-white border-blue-600"
                      : "bg-white text-slate-600 border-slate-200 hover:border-blue-300"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Result count */}
            <span className="ml-auto text-sm text-slate-500">
              {filtered.length} {filtered.length === 1 ? "course" : "courses"} found
            </span>
          </motion.div>

          {/* Course grid */}
          {filtered.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {filtered.map((course, i) => (
                <CourseCard key={course.id} course={course} index={i} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20 text-slate-500">
              <p className="text-4xl mb-3">🔍</p>
              <p className="text-lg font-semibold text-slate-700 mb-1">No courses match your search</p>
              <p className="text-sm">Try clearing the filters or adjusting your search term.</p>
              <button
                onClick={() => { setSearch(""); setLevel("All"); setCategory("All"); }}
                className="mt-4 text-blue-600 font-medium text-sm hover:underline"
              >
                Clear all filters
              </button>
            </div>
          )}
        </div>
      </section>

      <CTABanner
        headline="Not sure which course is right for you?"
        subheadline="Talk to one of our career advisors. We'll assess your goals and recommend the best path forward."
        primaryLabel="Talk to Advisor"
        primaryHref="/contact"
        secondaryLabel="View Courses"
        secondaryHref="/courses"
      />
    </div>
  );
}
