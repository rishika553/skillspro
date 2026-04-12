"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Flame } from "lucide-react";
import { Button } from "@/components/ui/button";

interface CTABannerProps {
  headline?: string;
  subheadline?: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
  showUrgency?: boolean;
  /** Stack CTAs vertically with a full-width primary button (e.g. Apply Now) */
  primaryFullWidth?: boolean;
}

export function CTABanner({
  headline = "Ready to accelerate your career?",
  subheadline = "Join the next cohort and start building the skills that actually get you hired. Seats fill up fast.",
  primaryLabel = "Enroll Now",
  primaryHref = "/courses",
  secondaryLabel = "Browse Courses",
  secondaryHref = "/courses",
  showUrgency = true,
  primaryFullWidth = false,
}: CTABannerProps) {
  return (
    <section className="py-20 bg-gradient-to-br from-indigo-600 via-indigo-700 to-violet-700 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-violet-500/20 rounded-full blur-3xl" />
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `radial-gradient(circle, #fff 1px, transparent 1px)`,
            backgroundSize: "30px 30px",
          }}
        />
      </div>

      <div
        className={`mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 ${primaryFullWidth ? "max-w-5xl" : "max-w-4xl"}`}
      >
        {showUrgency && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-2 text-sm font-semibold text-white mb-6"
          >
            <Flame className="w-4 h-4 text-amber-400" />
            Next batch starts soon — limited seats available
          </motion.div>
        )}

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl md:text-5xl font-extrabold text-white mb-4 leading-tight"
        >
          {headline}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xl text-indigo-200 mb-10 max-w-2xl mx-auto"
        >
          {subheadline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className={
            primaryFullWidth
              ? "flex flex-col items-stretch justify-center gap-3 w-full max-w-3xl mx-auto"
              : "flex flex-col sm:flex-row items-center justify-center gap-4"
          }
        >
          <Link href={primaryHref} className={primaryFullWidth ? "w-full" : undefined}>
            <Button
              variant="white"
              size="xl"
              className={
                primaryFullWidth
                  ? "group w-full justify-center gap-3 py-6 sm:py-7 min-h-[3.5rem] sm:min-h-16 text-lg sm:text-xl font-extrabold shadow-xl shadow-black/20"
                  : "group"
              }
              id="cta-enroll-btn"
            >
              {primaryLabel}
              <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
          <Link href={secondaryHref} className={primaryFullWidth ? "w-full" : undefined}>
            <Button
              variant="ghost"
              size="xl"
              className={
                primaryFullWidth
                  ? "w-full justify-center text-white hover:text-white hover:bg-white/10 border border-white/25 sm:min-h-14 text-base font-semibold"
                  : "text-white hover:text-white hover:bg-white/10"
              }
              id="cta-browse-btn"
            >
              {secondaryLabel}
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
