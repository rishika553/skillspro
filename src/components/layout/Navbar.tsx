"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/courses", label: "Courses" },
  { href: "/placement", label: "Placement" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        "bg-[#06060f]/95 backdrop-blur-xl border-b border-indigo-900/30",
        scrolled
          ? "shadow-lg shadow-indigo-950/40"
          : "shadow-none"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 font-bold text-xl group">
            <div className="relative w-10 h-10 rounded-xl overflow-hidden shadow-lg shadow-violet-700/40 group-hover:shadow-violet-600/60 transition-all duration-300">
              <Image
                src="/logo.png"
                alt="SkillsPro Logo"
                fill
                className="object-cover"
                priority
              />
            </div>
            <span className="text-white">
              Skills<span className="gradient-text-violet font-extrabold">Pro</span>
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-4 py-2 text-sm font-medium text-slate-400 hover:text-violet-300 hover:bg-violet-950/40 rounded-lg transition-all duration-200"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTAs */}
          <div className="hidden md:flex items-center gap-3">
            <Link href="/contact">
              <button className="px-4 py-2 text-sm font-semibold text-violet-300 border border-violet-700/50 rounded-xl hover:border-violet-500 hover:bg-violet-950/40 transition-all duration-200">
                Talk to Advisor
              </button>
            </Link>
            <Link href="/courses">
              <button
                id="nav-enroll-btn"
                className="px-5 py-2 text-sm font-bold text-white rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 shadow-lg shadow-violet-700/30 hover:shadow-violet-600/50 transition-all duration-200 hover:-translate-y-0.5"
              >
                Enroll Now
              </button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800/60 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
            id="mobile-menu-btn"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden border-t border-indigo-900/30 py-4 space-y-1 bg-[#06060f]/95 backdrop-blur-xl">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block px-4 py-2.5 text-sm font-medium text-slate-300 hover:text-violet-300 hover:bg-violet-950/30 rounded-lg transition-all"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-3 px-4 flex flex-col gap-3">
              <Link href="/contact" onClick={() => setIsOpen(false)}>
                <button className="w-full py-2.5 text-sm font-semibold text-violet-300 border border-violet-700/50 rounded-xl hover:border-violet-500 transition-all">
                  Talk to Advisor
                </button>
              </Link>
              <Link href="/courses" onClick={() => setIsOpen(false)}>
                <button className="w-full py-2.5 text-sm font-bold text-white rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600" id="mobile-enroll-btn">
                  Enroll Now
                </button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
