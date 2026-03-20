"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const grades = [
  { v: "VB", font: "3", hueco: "5.5–5.8", color: "bg-gray-500", label: "Absolute beginner", desc: "Large holds, vertical or slightly overhung walls. Just getting your hands and feet on the right holds is the challenge." },
  { v: "V0", font: "4", hueco: "5.9–5.10a", color: "bg-green-600", label: "Beginner", desc: "Still juggy and friendly. You'll start reading sequences and using basic footwork. Most gym intro problems." },
  { v: "V1", font: "5", hueco: "5.10b–5.10d", color: "bg-green-500", label: "Beginner", desc: "Slightly smaller holds. Technique starts to matter. Many beginners plateau here for weeks — that's completely normal." },
  { v: "V2", font: "5+", hueco: "5.11a–5.11b", color: "bg-lime-500", label: "Beginner+", desc: "Holds require more precise placement. Body positioning and balance become important." },
  { v: "V3", font: "6A", hueco: "5.11c–5.11d", color: "bg-yellow-500", label: "Intermediate", desc: "First significant jump. Requires reading sequences, hip rotation, and footwork accuracy. Many consider V3 the real beginner threshold." },
  { v: "V4", font: "6B", hueco: "5.12a", color: "bg-yellow-400", label: "Intermediate", desc: "Moves start requiring body tension and coordination. The transition to 'real' climbing." },
  { v: "V5", font: "6C", hueco: "5.12b–5.12c", color: "bg-orange-400", label: "Intermediate+", desc: "Dynamic moves, technical footwork, and power start to blend. A solid milestone for most gym climbers." },
  { v: "V6", font: "7A", hueco: "5.12d", color: "bg-orange-500", label: "Advanced", desc: "Requires dedicated training. Most climbers spend 1–2 years before breaking into V6+." },
  { v: "V7", font: "7A+", hueco: "5.13a", color: "bg-red-400", label: "Advanced", desc: "Significant finger strength and body tension required. Strong technique mandatory." },
  { v: "V8", font: "7B", hueco: "5.13b", color: "bg-red-500", label: "Advanced", desc: "Elite gym climber level. Very few beginners ever reach this without serious training." },
  { v: "V9", font: "7B+", hueco: "5.13c", color: "bg-red-600", label: "Elite", desc: "Dedicated training, near-perfect technique, and serious finger strength required." },
  { v: "V10+", font: "7C+", hueco: "5.14a+", color: "bg-purple-500", label: "World class", desc: "Professional/near-professional level. Think Alex Megos, Nalle Hukkataival territory." },
];

const systems = [
  {
    name: "Hueco (V-Scale)",
    origin: "🇺🇸 USA",
    range: "VB → V17",
    usage: "Bouldering only",
    common: "North America",
    desc: "The dominant system in North American gyms. Created by John Sherman at Hueco Tanks, Texas. VB (beginner) through V17 (world's hardest). Simple to understand — higher number = harder.",
  },
  {
    name: "Fontainebleau",
    origin: "🇫🇷 France",
    range: "3 → 9A",
    usage: "Bouldering (and sport climbing)",
    common: "Europe, worldwide",
    desc: "Originated in the Fontainebleau forest near Paris, the birthplace of bouldering. Uses numbers + letters (6A, 6A+, 6B, 6B+, etc). The + means the harder end of a grade. More granular than V-scale.",
  },
];

export default function GradesPage() {
  const [hoveredGrade, setHoveredGrade] = useState<number | null>(null);

  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      {/* Header */}
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
        <span className="inline-block bg-yellow-500/20 text-yellow-400 border border-yellow-500/30 text-sm font-semibold px-4 py-1.5 rounded-full mb-4 tracking-wide uppercase">
          Knowledge
        </span>
        <h1 className="text-5xl md:text-6xl font-black mb-4">Grading Systems</h1>
        <p className="text-stone-400 text-xl max-w-2xl mx-auto">
          Numbers on the wall tell you how hard a problem is — but only if you understand the system. Here&apos;s everything you need.
        </p>
      </motion.div>

      {/* Systems comparison */}
      <div className="grid md:grid-cols-2 gap-6 mb-16">
        {systems.map((sys, i) => (
          <motion.div
            key={sys.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="rounded-2xl border border-stone-700 bg-stone-900/60 p-6"
          >
            <div className="flex items-start justify-between mb-3">
              <div>
                <h3 className="text-xl font-bold">{sys.name}</h3>
                <span className="text-stone-400 text-sm">{sys.origin}</span>
              </div>
              <span className="text-xs font-semibold bg-stone-800 text-stone-400 px-2.5 py-1 rounded-full border border-stone-700">
                {sys.usage}
              </span>
            </div>
            <p className="text-stone-300 text-sm leading-relaxed mb-4">{sys.desc}</p>
            <div className="flex gap-4 text-sm">
              <div>
                <span className="text-stone-500">Range</span>
                <div className="font-bold text-yellow-400">{sys.range}</div>
              </div>
              <div>
                <span className="text-stone-500">Most common in</span>
                <div className="font-bold text-yellow-400">{sys.common}</div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Grade table */}
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-8">
        <h2 className="text-3xl font-black mb-2">Grade Comparison Chart</h2>
        <p className="text-stone-400 mb-6">Hover over any grade to highlight it. These are approximate — grades can vary between gyms.</p>
      </motion.div>

      {/* Visual grade bar */}
      <div className="mb-8 flex rounded-xl overflow-hidden h-10">
        {grades.map((g, i) => (
          <motion.div
            key={g.v}
            className={`flex-1 ${g.color} cursor-pointer transition-all duration-200`}
            style={{ opacity: hoveredGrade === null || hoveredGrade === i ? 1 : 0.3 }}
            onMouseEnter={() => setHoveredGrade(i)}
            onMouseLeave={() => setHoveredGrade(null)}
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ delay: i * 0.04 }}
          />
        ))}
      </div>

      {/* Grade cards */}
      <div className="space-y-2">
        {grades.map((grade, i) => (
          <motion.div
            key={grade.v}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
            onMouseEnter={() => setHoveredGrade(i)}
            onMouseLeave={() => setHoveredGrade(null)}
            className={`rounded-xl border transition-all duration-200 cursor-default ${
              hoveredGrade === i
                ? "border-orange-500/50 bg-stone-800/80"
                : "border-stone-800 bg-stone-900/40"
            }`}
          >
            <div className="p-4 flex items-center gap-4">
              <div className={`w-3 h-12 rounded-full shrink-0 ${grade.color}`} />
              <div className="grid grid-cols-3 sm:grid-cols-5 gap-4 flex-1 min-w-0">
                <div>
                  <div className="text-xs text-stone-500 mb-0.5">V-Scale</div>
                  <div className="text-2xl font-black">{grade.v}</div>
                </div>
                <div>
                  <div className="text-xs text-stone-500 mb-0.5">Font</div>
                  <div className="text-2xl font-black text-yellow-400">{grade.font}</div>
                </div>
                <div className="hidden sm:block">
                  <div className="text-xs text-stone-500 mb-0.5">Sport Climbing</div>
                  <div className="text-sm font-semibold text-stone-400">{grade.hueco}</div>
                </div>
                <div className="hidden sm:block">
                  <div className="text-xs text-stone-500 mb-0.5">Level</div>
                  <div className="text-sm font-semibold text-orange-400">{grade.label}</div>
                </div>
                <div className="col-span-3 sm:col-span-1">
                  <p className="text-xs text-stone-400 leading-relaxed">{grade.desc}</p>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Important notes */}
      <div className="mt-16 grid md:grid-cols-3 gap-6">
        {[
          {
            emoji: "⚠️",
            title: "Grades are subjective",
            desc: "Different setters set differently. A V4 at one gym might feel like a V3 or V5 at another. Grades calibrate over time — trust the process.",
          },
          {
            emoji: "📍",
            title: "Indoor ≠ Outdoor",
            desc: "Outdoor grades are often harder and more committing. Many gym climbers find outdoor grades 1–2 V-grades harder than they're used to.",
          },
          {
            emoji: "🧠",
            title: "Grade chasing is a trap",
            desc: "Focus on movement quality, not numbers. Climbers who obsess over grades often get injured or plateau. Climb everything, not just your project grade.",
          },
        ].map((note, i) => (
          <motion.div
            key={note.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="p-5 rounded-2xl border border-stone-700 bg-stone-900/50"
          >
            <div className="text-3xl mb-3">{note.emoji}</div>
            <h3 className="font-bold mb-2">{note.title}</h3>
            <p className="text-stone-400 text-sm leading-relaxed">{note.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
