// components/CounterApresiasi.tsx
"use client";

import { useState } from "react";

export default function CounterApresiasi() {
  const [skor, setSkor] = useState(0);

  return (
    <div className="inline-flex items-center gap-3 bg-white px-4 py-2 rounded-xl border border-slate-200 shadow-sm">
      <span className="text-xs font-semibold text-slate-600">Apresiasi:</span>
      <span className="font-mono font-bold text-blue-600 min-w-[1.5rem] text-center">
        {skor}
      </span>
      <button
        onClick={() => setSkor(skor + 1)}
        className="px-3 py-1 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs rounded-lg transition"
      >
        + Beri Apresiasi
      </button>
    </div>
  );
}