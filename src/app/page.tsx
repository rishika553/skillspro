import { HeroSection } from "@/components/sections/HeroSection";
import { WhySkillsPro } from "@/components/sections/WhySkillsPro";
import { CoursesOverview } from "@/components/sections/CoursesOverview";
import { PlacementSection } from "@/components/sections/PlacementSection";
import { HiringDomains } from "@/components/sections/HiringDomains";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { CTABanner } from "@/components/sections/CTABanner";
import { EMISection } from "@/components/sections/EMISection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <WhySkillsPro />
      <CoursesOverview />
      <PlacementSection />
      <HiringDomains />
      <EMISection />
      <TestimonialsSection />
      <FAQSection />
      <CTABanner
        headline="Start your upskilling journey today."
        subheadline="Don't wait for the perfect moment. The next cohort is filling up — take the first step now."
        primaryLabel="Explore Courses"
        primaryHref="/courses"
        secondaryLabel="Talk to Advisor"
        secondaryHref="/contact"
      />
    </>
  );
}
