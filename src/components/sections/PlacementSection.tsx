"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, FileText, Mic, Share2, Trophy } from "lucide-react";
import { CountUp } from "@/components/ui/CountUp";

const steps = [
  {
    icon: FileText, title: "Resume & LinkedIn Makeover",
    description: "Our career coaches overhaul your resume and LinkedIn profile to speak directly to hiring managers in your target domain.",
    gradient: "from-violet-600 to-purple-700",
    glow: "rgba(139,92,246,0.4)",
  },
  {
    icon: Mic, title: "Mock Interview Practice",
    description: "Get grilled by industry mentors with domain-specific mock interviews, followed by detailed feedback sessions.",
    gradient: "from-cyan-600 to-blue-700",
    glow: "rgba(6,182,212,0.4)",
  },
  {
    icon: Share2, title: "Warm Referral Network",
    description: "Tap into our hiring partner network for warm referrals, alumni connections, and curated job leads exclusive to SkillsPro graduates.",
    gradient: "from-emerald-600 to-teal-700",
    glow: "rgba(16,185,129,0.4)",
  },
  {
    icon: Trophy, title: "Offer Negotiation Support",
    description: "From salary negotiation to offer comparison, our advisors stand with you until you've signed the offer letter you deserve.",
    gradient: "from-amber-500 to-orange-600",
    glow: "rgba(245,158,11,0.4)",
  },
];

export function PlacementSection() {
  return (
    <section className="py-24 relative overflow-hidden" style={{ background: "#06060f" }} id="placement">
      <div className="absolute inset-0 dot-grid opacity-30" />
      <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-violet-900/20 rounded-full blur-[100px]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden" style={{ boxShadow: "0 0 60px rgba(139,92,246,0.2)" }}>
              <Image
                src="/placement-hero.png"
                alt="Career placement support illustration"
                width={600}
                height={500}
                className="w-full h-auto object-cover rounded-3xl"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-[#06060f]/60 via-transparent to-transparent" />
              <div className="absolute inset-0 rounded-3xl border border-violet-500/20" />
            </div>

            {/* Floating stat cards */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-4 -right-4 glass-dark rounded-2xl px-5 py-4"
              style={{ border: "1px solid rgba(52,211,153,0.3)" }}
            >
              <p className="text-xs text-slate-400">Avg. salary growth</p>
              <p className="text-2xl font-extrabold text-emerald-400 tabular-nums">
                <CountUp prefix="+" end={65} suffix="%" duration={1.35} />
              </p>
            </motion.div>

            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -bottom-4 -left-4 glass-dark rounded-2xl px-5 py-4"
              style={{ border: "1px solid rgba(139,92,246,0.3)" }}
            >
              <p className="text-xs text-slate-400">Placement rate</p>
              <p className="text-2xl font-extrabold text-violet-400 tabular-nums">
                <CountUp end={85} suffix="%+" duration={1.35} />
              </p>
            </motion.div>
          </motion.div>

          {/* Right: content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <span className="text-violet-400 font-semibold text-sm uppercase tracking-widest mb-3 block">
                Placement Assistance
              </span>
              <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
                We don&apos;t just teach.{" "}
                <span className="gradient-text-violet">We place.</span>
              </h2>
              <p className="text-slate-400 mb-10 leading-relaxed">
                Our placement process is a structured 4-step career sprint that starts on week one and ends when you have an offer in hand.
              </p>
            </motion.div>

            {/* Steps */}
            <div className="space-y-4">
              {steps.map((step, i) => (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  whileHover={{ x: 6 }}
                  className="flex items-start gap-4 p-4 rounded-2xl transition-all duration-300 cursor-default"
                  style={{ background: "rgba(13,13,31,0.8)", border: "1px solid rgba(99,102,241,0.12)" }}
                >
                  <div className={`flex-shrink-0 w-11 h-11 rounded-xl bg-gradient-to-br ${step.gradient} flex items-center justify-center shadow-lg`}
                    style={{ boxShadow: `0 8px 24px ${step.glow}` }}>
                    <step.icon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-violet-400/90 mr-2 tabular-nums">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="text-sm font-bold text-white">{step.title}</span>
                    <p className="text-xs text-slate-400 mt-1 leading-relaxed">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="mt-8"
            >
              <Link href="/placement">
                <motion.button
                  whileHover={{ scale: 1.04, y: -2 }}
                  whileTap={{ scale: 0.97 }}
                  className="flex items-center gap-2 px-6 py-3 text-sm font-bold text-white rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 transition-all"
                  style={{ boxShadow: "0 8px 30px rgba(139,92,246,0.3)" }}
                  id="placement-learn-more-btn"
                >
                  Learn About Placement Support
                  <ArrowRight className="w-4 h-4" />
                </motion.button>
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
