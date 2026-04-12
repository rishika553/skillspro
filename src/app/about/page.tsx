import type { Metadata } from "next";
import { AboutPageClient } from "@/components/sections/AboutPageClient";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about SkillsPro — our mission, vision, journey, and values. We are India's career-first upskilling platform with live mentorship, real projects, and placement support.",
  openGraph: {
    title: "About Us | SkillsPro",
    description:
      "Mission-driven tech education: our story, values, and how you can join the movement.",
  },
};

export default function AboutPage() {
  return <AboutPageClient />;
}
