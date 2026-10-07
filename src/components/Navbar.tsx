"use client";

import { ArrowUpRight, Sun, Moon } from "lucide-react";
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
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    setIsDark(document.documentElement.classList.contains("dark"));
  }, []);

  const toggleTheme = () => {
    const newIsDark = !isDark;
    setIsDark(newIsDark);
    document.documentElement.classList.toggle("dark", newIsDark);
    localStorage.setItem("theme", newIsDark ? "dark" : "light");
  };

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
    <nav className="fixed left-0 right-0 top-0 z-50 border-b border-gray-200/70 bg-white/80 backdrop-blur-md dark:border-white/10 dark:bg-slate-900/80">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 md:px-8">

        {/* Logo */}
        <a
          href="#home"
          className="flex h-10 w-10 items-center justify-center rounded-lg bg-sky-300 text-sm font-bold text-black"
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

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            aria-label="Toggle dark mode"
            className="flex h-10 w-16 items-center justify-center rounded-full border border-gray-200 bg-white text-lg text-gray-900 shadow-sm dark:border-gray-700 dark:bg-gray-800 dark:text-white"
          >
            {isDark ? <Sun size={16} /> : <Moon size={16} />}
          </button>

          {/* Resume */}
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden rounded-full border border-gray-200 bg-white px-6 py-3 text-sm text-gray-900 md:block dark:border-gray-700 dark:bg-gray-800 dark:text-white"
          >
            Resume
          </a>

          {/* Hire */}
          <button className="flex items-center gap-3 rounded-full bg-black px-7 py-4 text-sm font-medium text-white dark:bg-white dark:text-black">
            Hire Me <ArrowUpRight size={16} />
          </button>

        </div>
      </div>
    </nav>
  );
}