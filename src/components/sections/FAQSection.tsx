"use client";

import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Do you provide placement support, and what does it include?",
    answer:
      "Yes — placement support is included with every course. It covers resume and LinkedIn reviews, mock interviews with industry practitioners, access to our hiring partner network for warm referrals, and offer negotiation guidance. Our team stays with you until you've secured a role.",
  },
  {
    question: "Do I need prior experience or a technical background?",
    answer:
      "It depends on the course. Our Data Analyst and Digital Marketing tracks are beginner-friendly and require no prior experience. The QA Automation and AI Agents courses are intermediate-level and benefit from basic programming familiarity, though we include foundational modules to get you up to speed.",
  },
  {
    question: "Are the classes online or offline?",
    answer:
      "All our programs are conducted 100% online via live video sessions. You'll attend interactive cohort classes, not pre-recorded content — with real-time Q&A, breakout exercises, and peer collaboration. Recordings are available if you miss a session.",
  },
  {
    question: "How do I learn about enrollment and payment options?",
    answer:
      "Program details and enrollment steps are shared when you speak with our team — so we can match you to the right cohort and explain everything clearly. Reach out through Talk to Advisor or the course inquiry form; there are no surprises, and our advisors walk you through options without pressure.",
  },
  {
    question: "How many hours per week do I need to commit?",
    answer:
      "Most programs require 6–12 hours per week, split between live sessions (typically 2 sessions/week) and self-paced practice. We offer weekend and weeknight batches specifically designed for working professionals so you can upskill without quitting your job.",
  },
  {
    question: "Will I get a certificate at the end of the course?",
    answer:
      "Yes — you'll receive a SkillsPro certificate of completion that you can add to your LinkedIn and resume. More importantly, you'll have a portfolio of real projects that demonstrate your skills to employers — which carries far more weight than a certificate alone.",
  },
  {
    question: "What if I fall behind or miss sessions?",
    answer:
      "All live sessions are recorded and accessible within 24 hours. If you're falling behind, your mentor will check in with a recovery plan. We also have peer learning groups and open office hours to help you stay on track without stress.",
  },
];

export function FAQSection() {
  return (
    <section className="py-24 relative overflow-hidden" style={{ background: "#06060f" }} id="faq">
      {/* Background decorations */}
      <div className="absolute inset-0 dot-grid opacity-30 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-violet-900/15 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <span className="text-violet-400 font-semibold text-sm uppercase tracking-widest mb-3 block">
            FAQ
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            Got questions?{" "}
            <span className="gradient-text-violet">
              We&apos;ve got answers.
            </span>
          </h2>
          <p className="text-lg text-slate-400">
            Everything you need to know before you make your decision.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Accordion type="single" collapsible className="w-full space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="rounded-2xl overflow-hidden border-0"
                style={{
                  background: "rgba(13,13,31,0.8)",
                  border: "1px solid rgba(99,102,241,0.15)",
                  backdropFilter: "blur(12px)",
                }}
              >
                <AccordionTrigger
                  id={`faq-trigger-${i}`}
                  className="text-white hover:text-violet-300 px-6 py-5 text-left font-semibold hover:no-underline transition-colors"
                >
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-5 text-slate-400 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}

