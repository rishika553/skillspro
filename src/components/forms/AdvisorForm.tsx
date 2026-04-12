"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const courseOptions = [
  "Workflow Automation with AI Agents",
  "QA Automation with Playwright & Cypress",
  "Data Analyst",
  "Digital Marketing with AI",
  "Not sure yet — need guidance",
];

interface AdvisorFormProps {
  preselectedCourse?: string;
}

export function AdvisorForm({ preselectedCourse }: AdvisorFormProps) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    course: preselectedCourse || "",
    role: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!form.name.trim()) newErrors.name = "Name is required";
    if (!form.email.trim()) newErrors.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      newErrors.email = "Enter a valid email";
    if (!form.phone.trim()) newErrors.phone = "Phone number is required";
    else if (!/^[6-9]\d{9}$/.test(form.phone.replace(/\s/g, "")))
      newErrors.phone = "Enter a valid Indian mobile number";
    if (!form.course) newErrors.course = "Please select a course";
    return newErrors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1200);
  };

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center py-12 px-6"
      >
        <div className="inline-flex items-center justify-center w-16 h-16 bg-emerald-100 rounded-full mb-4">
          <CheckCircle2 className="w-8 h-8 text-emerald-600" />
        </div>
        <h3 className="text-2xl font-bold text-slate-900 mb-2">
          You&apos;re all set! 🎉
        </h3>
        <p className="text-slate-600 max-w-sm mx-auto">
          One of our advisors will reach out to you within 24 hours. Check your email for a confirmation.
        </p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      {/* Name */}
      <div>
        <Label htmlFor="advisor-name">Full Name *</Label>
        <Input
          id="advisor-name"
          placeholder="Rahul Sharma"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          className="mt-1.5"
        />
        {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
      </div>

      {/* Email */}
      <div>
        <Label htmlFor="advisor-email">Email Address *</Label>
        <Input
          id="advisor-email"
          type="email"
          placeholder="rahul@example.com"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          className="mt-1.5"
        />
        {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
      </div>

      {/* Phone */}
      <div>
        <Label htmlFor="advisor-phone">Phone Number *</Label>
        <Input
          id="advisor-phone"
          type="tel"
          placeholder="98765 43210"
          value={form.phone}
          onChange={(e) => setForm({ ...form, phone: e.target.value })}
          className="mt-1.5"
        />
        {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
      </div>

      {/* Course */}
      <div>
        <Label htmlFor="advisor-course">Interested Course *</Label>
        <select
          id="advisor-course"
          value={form.course}
          onChange={(e) => setForm({ ...form, course: e.target.value })}
          className="mt-1.5 flex h-11 w-full rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 transition-all"
        >
          <option value="">Select a course...</option>
          {courseOptions.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>
        {errors.course && <p className="text-red-500 text-xs mt-1">{errors.course}</p>}
      </div>

      {/* Current Role */}
      <div>
        <Label htmlFor="advisor-role">Current Role / Background</Label>
        <Input
          id="advisor-role"
          placeholder="e.g. Manual Tester, Marketing Manager, Student"
          value={form.role}
          onChange={(e) => setForm({ ...form, role: e.target.value })}
          className="mt-1.5"
        />
      </div>

      <Button
        type="submit"
        className="w-full"
        size="lg"
        disabled={loading}
        id="advisor-form-submit"
      >
        {loading ? (
          <span className="flex items-center gap-2">
            <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
            Submitting...
          </span>
        ) : (
          <span className="flex items-center gap-2">
            <Send className="w-4 h-4" />
            Talk to an Advisor
          </span>
        )}
      </Button>

      <p className="text-xs text-center text-slate-400">
        No spam. We value your privacy. Our advisor will call you within 24 hours.
      </p>
    </form>
  );
}
