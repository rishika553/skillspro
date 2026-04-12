import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Global3DBackground } from "@/components/layout/Global3DBackground";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: {
    default: "SkillsPro — Career-First Tech & AI Upskilling Platform",
    template: "%s | SkillsPro",
  },
  description:
    "Master AI, automation, QA, data analytics, and digital marketing through live mentorship, real projects, and career placement support. Join 2,000+ learners at SkillsPro.",
  keywords: [
    "online courses india", "tech upskilling", "AI courses", "QA automation course",
    "data analyst course", "digital marketing course", "placement support", "career transition",
  ],
  authors: [{ name: "SkillsPro" }],
  openGraph: {
    type: "website", locale: "en_IN", siteName: "SkillsPro",
    title: "SkillsPro — Career-First Tech & AI Upskilling",
    description: "Industry-aligned courses with live mentorship, real projects, and guaranteed placement support.",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="scroll-smooth dark">
      <body className={`${inter.variable} font-sans antialiased`} style={{ background: "#06060f", color: "#e2e8f0" }}>
        <Global3DBackground />
        <Navbar />
        <main className="relative z-10">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
