"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

// NOTE: Sample testimonials — replace with real ones before going live.
const testimonials = [
  {
    name: "Aditya Sharma", role: "QA Automation Engineer", company: "Fintech Startup",
    avatar: "AS", color: "#7c3aed",
    quote: "I was manually testing for 3 years and felt stuck. SkillsPro's QA Automation course completely changed my trajectory. Within 2 months of finishing, I landed a role with a 65% salary hike.",
    highlight: "65% salary increase", rating: 5,
  },
  {
    name: "Priya Menon", role: "Data Analyst", company: "E-Commerce Scale-up",
    avatar: "PM", color: "#0891b2",
    quote: "The Data Analyst program was thorough, practical, and genuinely fun. I built 3 real dashboards that I showed in interviews. Got my first data role before I even finished the last module!",
    highlight: "Placed before course ended", rating: 5,
  },
  {
    name: "Rahul Krishnan", role: "AI Automation Specialist", company: "IT Consulting Firm",
    avatar: "RK", color: "#059669",
    quote: "The AI Agents course is exactly what the market needs right now. I learned n8n, LangChain, and how to actually deploy automations. My project repo alone got me 3 interview calls.",
    highlight: "3 interview calls from portfolio", rating: 5,
  },
];

export function TestimonialsSection() {
  return (
    <section className="py-24 relative overflow-hidden" style={{ background: "#06060f" }}>
      <div className="absolute inset-0 dot-grid opacity-30" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-violet-900/15 rounded-full blur-[120px]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <span className="text-violet-400 font-semibold text-sm uppercase tracking-widest mb-3 block">
            Success Stories
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            Real learners.{" "}
            <span className="gradient-text-violet">Real outcomes.</span>
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto">
            Every story here represents someone who made a decision to bet on themselves.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="rounded-2xl p-7 flex flex-col transition-all duration-300 cursor-default"
              style={{
                background: "rgba(13,13,31,0.85)",
                backdropFilter: "blur(20px)",
                border: "1px solid rgba(99,102,241,0.15)",
                boxShadow: "0 8px 40px rgba(0,0,0,0.4)",
              }}
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>

              <Quote className="w-8 h-8 mb-3" style={{ color: "rgba(139,92,246,0.4)" }} />

              <p className="text-slate-300 leading-relaxed text-sm flex-1 mb-5">
                &ldquo;{t.quote}&rdquo;
              </p>

              {/* Highlight */}
              <div className="rounded-full px-3 py-1.5 text-xs font-semibold mb-5 inline-block self-start"
                style={{ background: "rgba(139,92,246,0.15)", color: "#a78bfa", border: "1px solid rgba(139,92,246,0.25)" }}>
                🚀 {t.highlight}
              </div>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4" style={{ borderTop: "1px solid rgba(99,102,241,0.12)" }}>
                <div className="w-10 h-10 rounded-full flex items-center justify-center text-white text-sm font-bold shrink-0"
                  style={{ background: t.color, boxShadow: `0 4px 15px ${t.color}60` }}>
                  {t.avatar}
                </div>
                <div>
                  <p className="font-semibold text-white text-sm">{t.name}</p>
                  <p className="text-xs text-slate-500">{t.role} · {t.company}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
