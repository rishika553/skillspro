import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Clock, Tag } from "lucide-react";
import { CTABanner } from "@/components/sections/CTABanner";

export const metadata: Metadata = {
  title: "Blog — Insights on Tech, AI, and Career Growth",
  description:
    "Read SkillsPro's blog for actionable insights on upskilling, AI trends, career transitions, and the tech job market.",
};

// Placeholder blog posts — replace with real CMS/MDX content
const posts = [
  {
    slug: "top-ai-automation-tools-2025",
    category: "AI & Automation",
    title: "Top 7 AI Automation Tools Every Professional Should Know in 2025",
    excerpt:
      "From n8n to LangChain, the AI automation landscape has exploded. We break down the tools that are reshaping workflows across industries — and how to get started with each.",
    readTime: "7 min read",
    date: "Apr 8, 2025",
    color: "from-violet-600 to-purple-700",
  },
  {
    slug: "qa-automation-career-guide",
    category: "Testing & QA",
    title: "The Complete Career Guide to QA Automation in 2025",
    excerpt:
      "Manual testing is becoming table stakes. QA automation engineers are in high demand. Here&apos;s everything you need to know — tools, salaries, and how to break in.",
    readTime: "9 min read",
    date: "Apr 4, 2025",
    color: "from-emerald-500 to-teal-600",
  },
  {
    slug: "data-analyst-salary-india",
    category: "Data & Analytics",
    title: "Data Analyst Salaries in India in 2025: Complete Breakdown",
    excerpt:
      "What are data analysts actually earning in India? We analyzed 500+ job listings and salary reports to give you the most accurate picture by city, experience, and industry.",
    readTime: "6 min read",
    date: "Mar 29, 2025",
    color: "from-blue-500 to-indigo-600",
  },
  {
    slug: "ai-tools-for-digital-marketing",
    category: "Marketing & Growth",
    title: "How to Use AI to 10x Your Digital Marketing Results",
    excerpt:
      "ChatGPT, Semrush, Canva AI — the modern marketer's toolkit has changed. Here&apos;s how to integrate AI into your campaigns, content, and ad strategy for measurable results.",
    readTime: "8 min read",
    date: "Mar 22, 2025",
    color: "from-orange-500 to-rose-500",
  },
  {
    slug: "career-switch-to-tech",
    category: "Career Advice",
    title: "How to Successfully Switch Careers into Tech at 30+",
    excerpt:
      "Thinking it&apos;s too late? It&apos;s not. We&apos;ve helped dozens of professionals in their 30s and 40s successfully transition into data, QA, and marketing careers. Here&apos;s how.",
    readTime: "10 min read",
    date: "Mar 15, 2025",
    color: "from-slate-600 to-slate-800",
  },
  {
    slug: "playwright-vs-cypress",
    category: "Testing & QA",
    title: "Playwright vs Cypress in 2025: Which Should You Learn First?",
    excerpt:
      "Both are excellent E2E testing frameworks — but they serve different use cases. We compare them head-to-head on syntax, speed, CI support, and job demand.",
    readTime: "8 min read",
    date: "Mar 10, 2025",
    color: "from-emerald-600 to-green-700",
  },
];

export default function BlogPage() {
  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-900 to-indigo-950 py-20 text-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <span className="text-indigo-400 font-semibold text-sm uppercase tracking-widest mb-3 block">
            SkillsPro Blog
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            Insights to{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-violet-400">
              accelerate your career
            </span>
          </h1>
          <p className="text-lg text-slate-400">
            Practical guides on upskilling, AI tools, job hunting, and the evolving tech landscape — written by practitioners.
          </p>
        </div>
      </section>

      {/* Blog grid */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <article
                key={post.slug}
                className="group bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden flex flex-col"
              >
                {/* Color bar */}
                <div className={`h-1.5 bg-gradient-to-r ${post.color}`} />

                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs font-semibold text-indigo-600 bg-indigo-50 px-2.5 py-1 rounded-full">
                      {post.category}
                    </span>
                  </div>

                  <h2 className="text-lg font-bold text-slate-900 mb-3 group-hover:text-indigo-700 transition-colors leading-snug flex-1">
                    {post.title}
                  </h2>

                  <p className="text-sm text-slate-600 leading-relaxed mb-5">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                    <div className="flex items-center gap-3 text-xs text-slate-400">
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5" />
                        {post.readTime}
                      </span>
                      <span>{post.date}</span>
                    </div>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="flex items-center gap-1 text-xs font-semibold text-indigo-600 hover:text-indigo-800 transition-colors"
                      id={`blog-read-${post.slug}`}
                    >
                      Read more
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <p className="text-center text-sm text-slate-400 mt-12">
            More articles coming soon. Subscribe to our newsletter for weekly insights.
          </p>
        </div>
      </section>

      <CTABanner
        headline="Ready to put this knowledge into practice?"
        subheadline="Pair what you learn on the blog with structured training and mentorship. Explore our courses."
        primaryLabel="Explore Courses"
        primaryHref="/courses"
        secondaryLabel="Talk to Advisor"
        secondaryHref="/contact"
      />
    </div>
  );
}
