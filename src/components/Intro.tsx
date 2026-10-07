"use client";

import { useEffect, useState } from "react";

export default function Intro() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShow(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  if (!show) return null;

  return (
    <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-gradient-to-br from-blue-100 via-white to-blue-100 transition-opacity duration-700 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      <div className="mb-8 flex h-16 w-20 animate-bounce items-center justify-center rounded-2xl bg-sky-300 text-lg font-bold text-black dark:bg-sky-300">
        Mellatyy
      </div>

      <div className="mb-4 flex items-center gap-3">
        <div className="h-px w-8 bg-sky-300" />
        <p className="text-xs font-bold tracking-widest text-black dark:text-white">
          WELCOME
        </p>
        <div className="h-px w-8 bg-sky-300" />
      </div>

      <h1 className="animate-pulse text-5xl font-black tracking-tight text-black dark:text-white">
        Mell<span className="text-sky-300"></span>
      </h1>

      <p className="mt-4 text-sm font-medium tracking-widest text-black dark:text-white">
        ZAZA MELL
      </p>
    </div>
  );
}