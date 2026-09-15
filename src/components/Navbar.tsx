"use client";

import { ArrowUpRight } from "lucide-react";
import { useState, useEffect } from "react";

const NAV_ITEMS = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const sections = NAV_ITEMS.map((item) =>
      document.getElementById(item.id)
    ).filter(Boolean) as HTMLElement[];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-50% 0px -50% 0px",
        threshold: 0,
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <nav className="fixed left-0 right-0 top-0 z-50 border-b border-gray-200/70 bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 md:px-8">

        {/* Logo */}
        <a
          href="#home"
          className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#18181b] text-sm font-bold text-white"
        >
          Mell
        </a>

        {/* Navigation */}
        <div className="hidden items-center gap-10 md:flex">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`nav-link ${
                activeSection === item.id ? "active" : ""
              }`}
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Right */}
        <div className="flex items-center gap-2 md:gap-3">

          {/* Resume */}
          <button className="hidden rounded-full border border-gray-200 bg-white px-6 py-3 text-sm md:block">
            Resume
          </button>

          {/* Hire */}
          <button className="flex items-center gap-3 rounded-full bg-black px-7 py-4 text-sm font-medium text-white">
            Hire Me <ArrowUpRight size={16} />
          </button>

        </div>
      </div>
    </nav>
  );
}