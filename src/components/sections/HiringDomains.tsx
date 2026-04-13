"use client";

import { motion } from "framer-motion";
import { Building2, CreditCard, Rocket, Globe, ShoppingCart, Heart, BookOpen, TrendingUp } from "lucide-react";

const domains = [
  { icon: Building2, label: "IT Services", examples: "Top MNCs & SIs" },
  { icon: CreditCard, label: "Fintech", examples: "Payments & Banking" },
  { icon: Rocket, label: "Startups", examples: "Series A to C" },
  { icon: Globe, label: "Global Remote", examples: "US, EU, APAC Firms" },
  { icon: ShoppingCart, label: "E-Commerce", examples: "Retail & Quick Commerce" },
  { icon: Heart, label: "Healthcare Tech", examples: "HealthTech & Medtech" },
  { icon: BookOpen, label: "EdTech", examples: "Online Learning Platforms" },
  { icon: TrendingUp, label: "Consulting", examples: "Strategy & Tech Firms" },
];

export function HiringDomains() {
  return (
    <section className="py-24 relative overflow-hidden text-white" style={{ background: "#06060f" }}>
      {/* Background decorations */}
      <div className="absolute inset-0 grid-pattern opacity-40 pointer-events-none" />
      <div className="absolute top-0 right-1/3 w-64 h-64 bg-indigo-900/20 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/3 w-64 h-64 bg-violet-900/20 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <span className="text-violet-400 font-semibold text-sm uppercase tracking-widest mb-3 block">
            Career Destinations
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
            Our graduates work at{" "}
            <span className="gradient-text-violet">
              companies everywhere
            </span>
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            From fast-growing startups to global enterprises — SkillsPro alumni are making their mark across every major industry.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {domains.map((domain, i) => (
            <motion.div
              key={domain.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.07 }}
              whileHover={{ y: -4, scale: 1.02 }}
              className="rounded-2xl p-6 text-center cursor-default group transition-all duration-300"
              style={{
                background: "rgba(13,13,31,0.8)",
                border: "1px solid rgba(99,102,241,0.15)",
                backdropFilter: "blur(12px)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLDivElement).style.boxShadow = "0 0 30px rgba(139,92,246,0.2)";
                (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(139,92,246,0.4)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.boxShadow = "";
                (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(99,102,241,0.15)";
              }}
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl mb-4 transition-all duration-300"
                style={{
                  background: "rgba(99,102,241,0.12)",
                  border: "1px solid rgba(139,92,246,0.25)",
                }}>
                <domain.icon className="w-6 h-6 text-violet-400 group-hover:text-violet-300 transition-colors" />
              </div>
              <h3 className="font-bold text-white mb-1">{domain.label}</h3>
              <p className="text-xs text-slate-500">{domain.examples}</p>
            </motion.div>
          ))}
        </div>

        {/* Trust badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-wrap justify-center gap-6 mt-14"
        >
          {[
            "🏆 Top Rated Platform 2024",
            "✅ Industry-Verified Curriculum",
            "🎓 2,000+ Learners Enrolled",
            "💼 Career Support Included",
          ].map((badge) => (
            <div
              key={badge}
              className="rounded-full px-5 py-2.5 text-sm font-medium text-slate-300 transition-all duration-300 hover:border-violet-500/40"
              style={{
                background: "rgba(13,13,31,0.8)",
                border: "1px solid rgba(99,102,241,0.2)",
                backdropFilter: "blur(8px)",
              }}
            >
              {badge}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

