import Link from "next/link";
import { Zap, Mail, Phone, MapPin, Link2, MessageCircle, PlayCircle } from "lucide-react";

const footerLinks = {
  Courses: [
    { label: "Workflow Automation with AI", href: "/courses/ai-agents" },
    { label: "QA Automation", href: "/courses/qa-automation" },
    { label: "Data Analyst", href: "/courses/data-analyst" },
    { label: "Digital Marketing with AI", href: "/courses/digital-marketing-ai" },
  ],
  Company: [
    { label: "About Us", href: "/about" },
    { label: "Placement", href: "/placement" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" },
  ],
  Support: [
    { label: "Talk to Advisor", href: "/contact" },
    { label: "FAQ", href: "/#faq" },
    { label: "Privacy Policy", href: "/" },
    { label: "Terms of Service", href: "/" },
  ],
};

export function Footer() {
  return (
    <footer className="relative z-10 bg-slate-950 text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 font-bold text-xl text-white mb-4">
              <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-indigo-600">
                <Zap className="w-4 h-4 text-white" />
              </span>
              Skills<span className="text-indigo-400">Pro</span>
            </Link>
            <p className="text-sm leading-relaxed mb-6 max-w-xs">
              India&apos;s career-first upskilling platform. We help students, working professionals, and career switchers land jobs in tech, data, and AI with practical, industry-aligned training.
            </p>
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-indigo-400 shrink-0" />
                <span>hello@skillspro.in</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-indigo-400 shrink-0" />
                <span>+91 98765 43210</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-indigo-400 shrink-0" />
                <span>Bengaluru, Karnataka, India</span>
              </div>
            </div>
            <div className="flex items-center gap-3 mt-6">
              <a
                href="#"
                className="w-9 h-9 rounded-full bg-slate-800 flex items-center justify-center hover:bg-indigo-600 transition-colors"
                aria-label="LinkedIn"
              >
                <Link2 className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-full bg-slate-800 flex items-center justify-center hover:bg-indigo-600 transition-colors"
                aria-label="Twitter / X"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-full bg-slate-800 flex items-center justify-center hover:bg-indigo-600 transition-colors"
                aria-label="YouTube"
              >
                <PlayCircle className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([group, links]) => (
            <div key={group}>
              <h4 className="font-semibold text-white mb-4 text-sm tracking-wide uppercase">
                {group}
              </h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm hover:text-indigo-400 transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-500">
            © {new Date().getFullYear()} SkillsPro. All rights reserved.
          </p>
          <p className="text-xs text-slate-600">
            Built with ❤️ for ambitious learners across India
          </p>
        </div>
      </div>
    </footer>
  );
}
