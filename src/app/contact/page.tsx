import type { Metadata } from "next";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { AdvisorForm } from "@/components/forms/AdvisorForm";

export const metadata: Metadata = {
  title: "Talk to an Advisor",
  description:
    "Connect with a SkillsPro career advisor to find the right program for your goals. Get a free 30-minute consultation today.",
};

const contactInfo = [
  {
    icon: Phone,
    label: "Phone",
    value: "+91 98765 43210",
    desc: "Mon–Sat, 9 AM to 7 PM IST",
  },
  {
    icon: Mail,
    label: "Email",
    value: "hello@skillspro.in",
    desc: "We respond within 24 hours",
  },
  {
    icon: MapPin,
    label: "Address",
    value: "Bengaluru, Karnataka",
    desc: "India (remote-first team)",
  },
  {
    icon: Clock,
    label: "Office Hours",
    value: "Mon–Sat",
    desc: "9:00 AM – 7:00 PM IST",
  },
];

export default function ContactPage() {
  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-900 to-indigo-950 py-20 text-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <span className="text-indigo-400 font-semibold text-sm uppercase tracking-widest mb-3 block">
            Get in Touch
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            Talk to a{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-violet-400">
              career advisor
            </span>
          </h1>
          <p className="text-lg text-slate-400">
            Not sure which course is right for you? Our advisors will understand your background, goals, and recommend the best path to land your target role.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Left: contact info */}
            <div className="lg:col-span-2 space-y-6">
              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-2">We&apos;re here to help</h2>
                <p className="text-slate-600 leading-relaxed">
                  Fill out the form and one of our career advisors will reach out within 24 hours for a free, no-pressure conversation about your goals.
                </p>
              </div>

              <div className="space-y-4">
                {contactInfo.map((item) => (
                  <div key={item.label} className="flex items-start gap-4 p-4 bg-white rounded-xl border border-slate-200">
                    <div className="w-10 h-10 bg-indigo-50 rounded-xl flex items-center justify-center shrink-0">
                      <item.icon className="w-5 h-5 text-indigo-600" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide">{item.label}</p>
                      <p className="font-semibold text-slate-900">{item.value}</p>
                      <p className="text-xs text-slate-400">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Trust note */}
              <div className="bg-indigo-50 border border-indigo-100 rounded-xl p-5">
                <p className="text-sm font-semibold text-indigo-800 mb-1">✅ Zero pressure. Pure guidance.</p>
                <p className="text-sm text-indigo-700">
                  Our advisors are trained to help you find the right fit — not push you into a sale. We only recommend what genuinely matches your goals.
                </p>
              </div>
            </div>

            {/* Right: form */}
            <div id="apply" className="lg:col-span-3 bg-white rounded-2xl border border-slate-200 shadow-sm p-8 scroll-mt-24">
              <h3 className="text-xl font-bold text-slate-900 mb-1">Request a free consultation</h3>
              <p className="text-sm text-slate-500 mb-6">
                Tell us a little about yourself and we&apos;ll get back to you with a personalized recommendation.
              </p>
              <AdvisorForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
