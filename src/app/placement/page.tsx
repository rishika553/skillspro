import type { Metadata } from "next";
import { PlacementSection } from "@/components/sections/PlacementSection";
import { PlacementPageStats } from "@/components/sections/PlacementPageStats";
import { HiringDomains } from "@/components/sections/HiringDomains";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { CTABanner } from "@/components/sections/CTABanner";

export const metadata: Metadata = {
  title: "Placement Assistance",
  description:
    "SkillsPro's structured 4-step placement support: resume & LinkedIn, mock interviews, referral network, and offer guidance. We help you land the role you deserve.",
};

export default function PlacementPage() {
  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-900 to-indigo-950 py-20 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-indigo-400 font-semibold text-sm uppercase tracking-widest mb-3 block">
            Placement Assistance
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-5">
            Your career partner.{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-violet-400">
              From day one to offer letter.
            </span>
          </h1>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Placement support at SkillsPro isn&apos;t a checkbox — it&apos;s a structured program that runs parallel to your learning from the first week until you land your role.
          </p>
        </div>
      </section>

      <PlacementPageStats />

      <PlacementSection />
      <HiringDomains />
      <TestimonialsSection />

      <CTABanner
        headline="Take the first step toward your new career."
        subheadline="Our placement team is ready to help. Start a course today and get your career strategy on day one."
        primaryLabel="Explore Courses"
        primaryHref="/courses"
        secondaryLabel="Talk to Advisor"
        secondaryHref="/contact"
      />
    </div>
  );
}
