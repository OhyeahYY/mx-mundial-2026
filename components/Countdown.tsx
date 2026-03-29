"use client";

import { useEffect, useState } from "react";

const TARGET = new Date("2026-06-11T00:00:00Z").getTime();

export default function Countdown() {
  const [diff, setDiff] = useState(TARGET - Date.now());

  useEffect(() => {
    const id = setInterval(() => setDiff(TARGET - Date.now()), 1000);
    return () => clearInterval(id);
  }, []);

  if (diff <= 0) return null;

  const days = Math.floor(diff / 86400000);
  const hours = Math.floor((diff % 86400000) / 3600000);
  const minutes = Math.floor((diff % 3600000) / 60000);
  const seconds = Math.floor((diff % 60000) / 1000);

  return (
    <div className="flex gap-3 mt-6">
      {[
        { v: days, l: "DIAS" },
        { v: hours, l: "HRS" },
        { v: minutes, l: "MIN" },
        { v: seconds, l: "SEG" },
      ].map(({ v, l }) => (
        <div
          key={l}
          className="flex flex-col items-center bg-white/5 border border-white/10 rounded-xl px-4 py-2 min-w-[60px]"
        >
          <span className="text-2xl md:text-3xl font-extrabold text-accent-emerald tabular-nums">
            {String(v).padStart(2, "0")}
          </span>
          <span className="text-[10px] text-gray-500 tracking-widest mt-0.5">
            {l}
          </span>
        </div>
      ))}
    </div>
  );
}
