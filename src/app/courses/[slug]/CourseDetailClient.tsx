"use client";

import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  Clock,
  BarChart2,
  Users,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  Tag,
  Briefcase,
  Calendar,
  Flame,
  Phone,
} from "lucide-react";
import { Course } from "@/data/courses";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CTABanner } from "@/components/sections/CTABanner";
import { AdvisorForm } from "@/components/forms/AdvisorForm";

interface Props {
  course: Course;
}

const sectionTitleClass =
  "text-xs font-bold uppercase tracking-[0.2em] text-blue-600 mb-2";
const headingClass = "text-2xl font-bold text-slate-900 tracking-tight";

export function CourseDetailClient({ course }: Props) {
  const [openWeek, setOpenWeek] = useState<number | null>(0);
  const [showMobileCTA, setShowMobileCTA] = useState(true);

  const levelColor =
    course.level === "Beginner" ? "success" : course.level === "Intermediate" ? "info" : "warning";

  const statItems = [
    { icon: Clock, label: "Duration", value: course.duration },
    { icon: BarChart2, label: "Weekly effort", value: course.weeklyHours },
    { icon: Users, label: "Batch size", value: course.batchSize },
  ] as const;

  return (
    <div className="pt-16 bg-slate-50 min-h-screen">
      {/* Hero — unified dark blue (no per-course gradient) */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 text-white">
        <div
          className="absolute inset-0 opacity-[0.12]"
          style={{
            backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.9) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <Link
            href="/courses"
            className="inline-flex items-center gap-2 text-sky-300/90 hover:text-white text-sm font-medium mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 shrink-0" />
            Back to all programs
          </Link>

          <div className="flex flex-wrap gap-2 sm:gap-3 mb-6">
            <Badge className="bg-white/15 text-white border border-white/20 hover:bg-white/20">
              {course.category}
            </Badge>
            <Badge variant={levelColor} className="border-0">
              {course.level}
            </Badge>
            <Badge className="bg-amber-400/90 text-amber-950 border-0 font-semibold">
              <Flame className="w-3 h-3 mr-1" />
              Next batch · {course.nextBatch}
            </Badge>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
            <div className="lg:col-span-7">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-4 leading-[1.1] tracking-tight">
                {course.title}
              </h1>
              <p className="text-lg sm:text-xl text-sky-100/90 font-medium mb-5 max-w-2xl">
                {course.subtitle}
              </p>
              <p className="text-slate-300/95 leading-relaxed max-w-2xl text-base sm:text-[17px]">
                {course.shortDescription}
              </p>
            </div>

            {/* Equal stat tiles — same width/height rhythm on all courses */}
            <div className="lg:col-span-5 w-full">
              <p className="text-[11px] font-bold uppercase tracking-widest text-sky-400/80 mb-3">
                At a glance
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-3">
                {statItems.map(({ icon: Icon, label, value }) => (
                  <div
                    key={label}
                    className="flex items-center gap-4 rounded-2xl border border-white/15 bg-white/[0.06] backdrop-blur-sm px-4 py-4 min-h-[4.5rem]"
                  >
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-sky-500/20 text-sky-300">
                      <Icon className="w-5 h-5" aria-hidden />
                    </div>
                    <div className="min-w-0">
                      <p className="text-[11px] font-semibold uppercase tracking-wide text-slate-400">
                        {label}
                      </p>
                      <p className="font-semibold text-white text-sm sm:text-base leading-snug">{value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main — single visual system */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-12">
          <div className="lg:col-span-2 space-y-12 sm:space-y-14">
            {/* Outcomes */}
            <motion.section
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45 }}
              className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm"
            >
              <p className={sectionTitleClass}>Outcomes</p>
              <h2 className={headingClass}>What you&apos;ll achieve</h2>
              <ul className="mt-6 space-y-3">
                {course.outcomes.map((o, i) => (
                  <li key={o} className="flex gap-4 rounded-xl border border-slate-100 bg-slate-50/80 p-4">
                    <span
                      className="shrink-0 w-9 h-9 rounded-lg bg-blue-600 text-white text-xs font-extrabold flex items-center justify-center tabular-nums"
                      aria-hidden
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="text-slate-700 text-[15px] leading-relaxed pt-1">{o}</span>
                  </li>
                ))}
              </ul>
            </motion.section>

            {/* Curriculum */}
            <motion.section
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.05 }}
              className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm"
            >
              <p className={sectionTitleClass}>Syllabus</p>
              <h2 className={headingClass}>Curriculum</h2>
              <div className="mt-6 space-y-2">
                {course.curriculum.map((week, i) => (
                  <div
                    key={week.range}
                    className="rounded-xl border border-slate-200 overflow-hidden bg-white"
                  >
                    <button
                      type="button"
                      className="w-full flex items-center justify-between gap-4 p-4 sm:p-5 text-left hover:bg-slate-50 transition-colors min-h-[4.25rem]"
                      onClick={() => setOpenWeek(openWeek === i ? null : i)}
                      id={`curriculum-week-${i}`}
                    >
                      <div className="min-w-0">
                        <span className="text-xs font-bold text-blue-600 uppercase tracking-wide block mb-1">
                          {week.range}
                        </span>
                        <span className="font-semibold text-slate-900">{week.title}</span>
                      </div>
                      {openWeek === i ? (
                        <ChevronUp className="w-5 h-5 text-slate-400 shrink-0" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-slate-400 shrink-0" />
                      )}
                    </button>
                    {openWeek === i && (
                      <div className="px-4 sm:px-5 pb-5 pt-0 border-t border-slate-100 bg-slate-50/50">
                        <ul className="space-y-2 pt-4">
                          {week.topics.map((topic) => (
                            <li key={topic} className="flex items-start gap-3 text-sm text-slate-600">
                              <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 shrink-0" />
                              {topic}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </motion.section>

            {/* Tools */}
            <motion.section
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.1 }}
              className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm"
            >
              <p className={sectionTitleClass}>Stack</p>
              <h2 className={headingClass}>Tools you&apos;ll master</h2>
              <div className="mt-6 flex flex-wrap gap-2">
                {course.tools.map((tool) => (
                  <span
                    key={tool}
                    className="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm font-medium text-slate-700"
                  >
                    <Tag className="w-3.5 h-3.5 text-blue-500 shrink-0" />
                    {tool}
                  </span>
                ))}
              </div>
            </motion.section>

            {/* Projects — equal-height cards */}
            <motion.section
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.15 }}
              className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm"
            >
              <p className={sectionTitleClass}>Portfolio</p>
              <h2 className={headingClass}>Projects you&apos;ll build</h2>
              <div className="mt-6 grid grid-cols-1 gap-4">
                {course.projects.map((project, i) => (
                  <div
                    key={project.title}
                    className="flex flex-col rounded-xl border border-slate-200 bg-slate-50/50 p-5 sm:p-6 min-h-[200px]"
                  >
                    <div className="flex items-start gap-3 mb-3">
                      <div className="w-9 h-9 rounded-lg bg-blue-600 text-white flex items-center justify-center text-sm font-bold shrink-0">
                        {i + 1}
                      </div>
                      <h3 className="font-bold text-slate-900 text-base leading-snug pt-1">{project.title}</h3>
                    </div>
                    <p className="text-sm text-slate-600 leading-relaxed flex-1 mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mt-auto">
                      {project.stack.map((s) => (
                        <span
                          key={s}
                          className="text-xs font-medium bg-white border border-slate-200 text-slate-600 px-2.5 py-1 rounded-md"
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </motion.section>

            {/* Career outcomes — equal cards */}
            <motion.section
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.2 }}
              className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm"
            >
              <p className={sectionTitleClass}>Roles</p>
              <h2 className={headingClass}>Career outcomes</h2>
              <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
                {course.careerRoles.map((role) => (
                  <div
                    key={role.role}
                    className="flex flex-col items-center text-center rounded-xl border border-slate-200 bg-slate-50/50 p-5 min-h-[148px] justify-center"
                  >
                    <Briefcase className="w-8 h-8 text-blue-500 mb-3 shrink-0" />
                    <h3 className="font-bold text-slate-900 text-sm mb-3 leading-snug px-1">{role.role}</h3>
                    <span
                      className={`text-xs font-semibold px-2.5 py-1 rounded-full ${role.demand === "Very High"
                        ? "bg-emerald-100 text-emerald-800"
                        : "bg-amber-100 text-amber-800"
                        }`}
                    >
                      {role.demand} demand
                    </span>
                  </div>
                ))}
              </div>
            </motion.section>
          </div>

          {/* Sidebar — identical chrome for every course */}
          <div className="lg:col-span-1">
            <div className="lg:sticky lg:top-24 space-y-6">
              <div className="bg-white rounded-2xl border border-slate-200 shadow-md p-6">
                <p className="text-xs font-bold uppercase tracking-widest text-blue-600 mb-1">Enroll</p>
                <h3 className="text-lg font-bold text-slate-900 mb-5">Join this cohort</h3>
                <div className="space-y-3 text-sm text-slate-600 mb-6">
                  <div className="flex items-center gap-3 rounded-lg bg-slate-50 border border-slate-100 px-3 py-3">
                    <Calendar className="w-4 h-4 text-blue-600 shrink-0" />
                    <span>
                      Next batch: <strong className="text-slate-900">{course.nextBatch}</strong>
                    </span>
                  </div>
                  <div className="flex items-center gap-3 rounded-lg bg-slate-50 border border-slate-100 px-3 py-3">
                    <Users className="w-4 h-4 text-blue-600 shrink-0" />
                    <span>{course.batchSize}</span>
                  </div>
                </div>

                <h4 className="font-semibold text-slate-900 mb-3 text-sm">What&apos;s included</h4>
                <ul className="space-y-2 mb-6">
                  {course.included.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-xs text-slate-600 leading-relaxed">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="space-y-3">
                  <Button className="w-full bg-blue-600 hover:bg-blue-700" size="lg" asChild>
                    <Link href={`/contact?course=${course.slug}`} id={`enroll-now-${course.slug}`}>
                      Enroll Now
                    </Link>
                  </Button>
                  <Button variant="outline" className="w-full border-slate-300" size="lg" asChild>
                    <Link href="/contact" id={`advisor-cta-${course.slug}`}>
                      <Phone className="w-4 h-4 mr-2" />
                      Talk to Advisor
                    </Link>
                  </Button>
                </div>
              </div>

              <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6">
                <h3 className="text-lg font-bold text-slate-900 mb-1">Have questions?</h3>
                <p className="text-sm text-slate-500 mb-5">Request a walkthrough for this program.</p>
                <AdvisorForm preselectedCourse={course.title} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {showMobileCTA && (
        <div className="fixed bottom-0 left-0 right-0 z-40 lg:hidden bg-white border-t border-slate-200 shadow-[0_-8px_30px_rgba(0,0,0,0.08)] px-4 py-3 flex items-center gap-3">
          <div className="flex-1 min-w-0">
            <p className="text-[11px] font-semibold uppercase tracking-wide text-slate-500">Next batch</p>
            <p className="font-bold text-slate-900 truncate text-sm">{course.nextBatch}</p>
          </div>
          <Link href={`/contact?course=${course.slug}`} className="shrink-0">
            <Button size="sm" className="bg-blue-600 hover:bg-blue-700" id={`mobile-enroll-${course.slug}`}>
              Enroll
            </Button>
          </Link>
          <button
            type="button"
            onClick={() => setShowMobileCTA(false)}
            className="text-slate-400 hover:text-slate-600 text-sm px-2 py-1 shrink-0"
            aria-label="Dismiss"
          >
            ✕
          </button>
        </div>
      )}

      <CTABanner
        headline={`Start your journey in ${course.title}`}
        subheadline={`${course.nextBatch} cohort is open. Talk to us to reserve your seat.`}
        primaryLabel="Talk to Advisor"
        primaryHref="/contact"
        secondaryLabel="All programs"
        secondaryHref="/courses"
      />
    </div>
  );
}
