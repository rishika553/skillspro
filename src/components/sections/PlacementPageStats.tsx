"use client";

import { CheckCircle2, TrendingUp, Users, Briefcase } from "lucide-react";
import { CountUp } from "@/components/ui/CountUp";

const stats = [
  {
    icon: TrendingUp,
    end: 85,
    prefix: "",
    decimals: 0,
    suffix: "%+",
    label: "Placement Rate",
    desc: "Across all programs within 3 months",
  },
  {
    icon: Users,
    end: 50,
    prefix: "",
    decimals: 0,
    suffix: "+",
    label: "Hiring Partners",
    desc: "Startups to enterprise companies",
  },
  {
    icon: Briefcase,
    end: 6.5,
    decimals: 1,
    prefix: "₹",
    suffix: "L",
    label: "Avg. Salary Hike",
    desc: "For career switchers",
  },
  {
    icon: CheckCircle2,
    end: 100,
    prefix: "",
    decimals: 0,
    suffix: "%",
    label: "Career Support",
    desc: "Included in every course",
  },
];

export function PlacementPageStats() {
  return (
    <section className="py-14 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="text-center p-6 bg-slate-50 rounded-2xl border border-slate-100"
            >
              <div className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-indigo-50 mb-3">
                <stat.icon className="w-5 h-5 text-indigo-600" />
              </div>
              <div className="text-3xl font-extrabold text-slate-900 mb-1 tabular-nums">
                <CountUp
                  end={stat.end}
                  suffix={stat.suffix}
                  prefix={stat.prefix}
                  decimals={stat.decimals}
                  duration={1.4}
                />
              </div>
              <div className="text-sm font-semibold text-slate-700 mb-0.5">{stat.label}</div>
              <div className="text-xs text-slate-400">{stat.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
