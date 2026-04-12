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
    <section className="py-24 bg-slate-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <span className="text-indigo-400 font-semibold text-sm uppercase tracking-widest mb-3 block">
            Career Destinations
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
            Our graduates work at{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-violet-400">
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
              className="bg-slate-900 border border-slate-800 rounded-2xl p-6 text-center hover:border-indigo-500/50 hover:bg-slate-800 transition-all duration-300 group cursor-default"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-indigo-600/10 border border-indigo-500/20 mb-4 group-hover:bg-indigo-600/20 transition-colors">
                <domain.icon className="w-6 h-6 text-indigo-400" />
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
              className="bg-slate-900/80 border border-slate-700 rounded-full px-5 py-2.5 text-sm font-medium text-slate-300"
            >
              {badge}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
