"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const holds = [
  {
    name: "Jug",
    emoji: "🏆",
    difficulty: "Beginner",
    difficultyColor: "text-green-400 bg-green-400/10 border-green-400/30",
    description:
      "The most beginner-friendly hold. A large, incut hold that you can wrap your whole hand around — like pulling on a bucket handle. You'll find plenty of these on V0–V2 problems.",
    tips: [
      "Relax your grip — jugs are big enough you don't need to death-grip",
      "Use them to rest and shake out your forearms",
      "Great for building confidence on your first routes",
    ],
    color: "from-green-500/20 to-green-500/5",
    border: "border-green-500/30",
  },
  {
    name: "Crimp",
    emoji: "✌️",
    difficulty: "Intermediate",
    difficultyColor: "text-yellow-400 bg-yellow-400/10 border-yellow-400/30",
    description:
      "A small, thin edge where you use just your fingertips. The most common hold in bouldering — and the most demanding on your tendons. There are two styles: open crimp (safer for tendons) and closed crimp (more powerful but higher injury risk).",
    tips: [
      "Train open crimp first to build tendon strength safely",
      "Avoid closed crimping until you've built up strength",
      "Squeeze your fingers together for maximum surface contact",
    ],
    color: "from-yellow-500/20 to-yellow-500/5",
    border: "border-yellow-500/30",
  },
  {
    name: "Sloper",
    emoji: "🫲",
    difficulty: "Intermediate",
    difficultyColor: "text-yellow-400 bg-yellow-400/10 border-yellow-400/30",
    description:
      "A rounded, sloped hold with no clear edge to grab. You rely on friction and body position rather than grip strength. Slopers punish poor technique and reward body awareness.",
    tips: [
      "Keep your shoulders low and arms straight — don't pull with bent arms",
      "Maximize palm contact with the hold",
      "Body position matters more than grip strength here",
    ],
    color: "from-orange-500/20 to-orange-500/5",
    border: "border-orange-500/30",
  },
  {
    name: "Pinch",
    emoji: "🤌",
    difficulty: "Intermediate",
    difficultyColor: "text-yellow-400 bg-yellow-400/10 border-yellow-400/30",
    description:
      "You squeeze this hold between your thumb and fingers like pinching something. Pinch strength is often underdeveloped in new climbers. Can be wide (needs open hand) or narrow.",
    tips: [
      "Actively squeeze your thumb into the hold",
      "Keep your elbow in to engage your lat and generate more pinch power",
      "Train pinch with a squeeze ball or gym pinch blocks",
    ],
    color: "from-amber-500/20 to-amber-500/5",
    border: "border-amber-500/30",
  },
  {
    name: "Pocket",
    emoji: "☝️",
    difficulty: "Advanced",
    difficultyColor: "text-red-400 bg-red-400/10 border-red-400/30",
    description:
      "A hole in the wall where you insert one, two, or three fingers. Mono pockets (one finger) are extremely hard on tendons and only for experienced climbers. Two-finger pockets are more common.",
    tips: [
      "Avoid mono pockets as a beginner — high injury risk",
      "Two-finger pockets: use your middle and ring finger (strongest combination)",
      "Pull straight down rather than at an angle",
    ],
    color: "from-red-500/20 to-red-500/5",
    border: "border-red-500/30",
  },
  {
    name: "Sidepull",
    emoji: "👈",
    difficulty: "Intermediate",
    difficultyColor: "text-yellow-400 bg-yellow-400/10 border-yellow-400/30",
    description:
      "A hold oriented sideways — you pull horizontally rather than downward. Requires counterbalancing your body weight against the direction of pull. Very technique-dependent.",
    tips: [
      "Push your feet hard into the wall in the opposite direction you're pulling",
      "Keep your hips close to the wall",
      "Sidepulls often require precise footwork to generate enough tension",
    ],
    color: "from-blue-500/20 to-blue-500/5",
    border: "border-blue-500/30",
  },
  {
    name: "Undercling",
    emoji: "👆",
    difficulty: "Intermediate",
    difficultyColor: "text-yellow-400 bg-yellow-400/10 border-yellow-400/30",
    description:
      "You grab the underside of a hold with your palm facing up, like lifting from below. Counterintuitive at first but incredibly useful for movement through roofs and overhangs.",
    tips: [
      "Drive your feet high to generate upward body tension",
      "Keep your hips up and close to the wall",
      "Don't let your elbows drop — keep them slightly bent",
    ],
    color: "from-purple-500/20 to-purple-500/5",
    border: "border-purple-500/30",
  },
  {
    name: "Gaston",
    emoji: "🤲",
    difficulty: "Advanced",
    difficultyColor: "text-red-400 bg-red-400/10 border-red-400/30",
    description:
      "Think of it as the opposite of a sidepull — your elbow points outward and you push against the hold rather than pulling. Named after French climber Gaston Rébuffat. Requires significant shoulder strength.",
    tips: [
      "Keep your core tight to stabilize the pushing motion",
      "This move is hard on shoulders — build up gradually",
      "Often used in combination with a foot high on the same side",
    ],
    color: "from-pink-500/20 to-pink-500/5",
    border: "border-pink-500/30",
  },
  {
    name: "Volume",
    emoji: "🔷",
    difficulty: "Beginner",
    difficultyColor: "text-green-400 bg-green-400/10 border-green-400/30",
    description:
      "Large wooden or resin shapes bolted to the wall. Not a hand hold themselves but change the wall angle and can have smaller holds on them. Used for footholds or body positioning.",
    tips: [
      "Treat volumes as part of the wall — smear your feet on them",
      "They change the effective angle of the wall dramatically",
      "Look for small holds set on the face of volumes",
    ],
    color: "from-cyan-500/20 to-cyan-500/5",
    border: "border-cyan-500/30",
  },
];

export default function HoldsPage() {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-16"
      >
        <span className="inline-block bg-orange-500/20 text-orange-400 border border-orange-500/30 text-sm font-semibold px-4 py-1.5 rounded-full mb-4 tracking-wide uppercase">
          Fundamentals
        </span>
        <h1 className="text-5xl md:text-6xl font-black mb-4">Hold Types</h1>
        <p className="text-stone-400 text-xl max-w-2xl mx-auto">
          Before you can read a problem, you need to recognize what you&apos;re grabbing. Click any hold to learn how to use it.
        </p>
      </motion.div>

      {/* Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {holds.map((hold, i) => (
          <motion.div
            key={hold.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.06 }}
            whileHover={{ y: -4 }}
            onClick={() => setSelected(selected === i ? null : i)}
            className="cursor-pointer"
          >
            <div className={`rounded-2xl border ${hold.border} bg-gradient-to-br ${hold.color} p-5 transition-all duration-300 ${selected === i ? "ring-2 ring-orange-400/50" : ""}`}>
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <span className="text-3xl">{hold.emoji}</span>
                  <h3 className="text-lg font-bold">{hold.name}</h3>
                </div>
                <span className={`text-xs font-semibold px-2 py-0.5 rounded-full border ${hold.difficultyColor}`}>
                  {hold.difficulty}
                </span>
              </div>
              <p className="text-stone-400 text-sm leading-relaxed line-clamp-2">{hold.description}</p>

              <AnimatePresence>
                {selected === i && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <p className="text-stone-300 text-sm leading-relaxed mt-3 border-t border-stone-700 pt-3">
                      {hold.description}
                    </p>
                    <div className="mt-4">
                      <p className="text-orange-400 text-xs font-bold uppercase tracking-wider mb-2">Tips</p>
                      <ul className="space-y-1.5">
                        {hold.tips.map((tip, j) => (
                          <li key={j} className="flex gap-2 text-sm text-stone-300">
                            <span className="text-orange-400 mt-0.5 shrink-0">→</span>
                            {tip}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              <div className="mt-3 text-xs text-stone-500 font-medium">
                {selected === i ? "Click to collapse ↑" : "Click to expand ↓"}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Quick reference legend */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="mt-16 p-6 rounded-2xl border border-stone-800 bg-stone-900/50"
      >
        <h2 className="text-xl font-bold mb-4">Difficulty Key</h2>
        <div className="flex flex-wrap gap-4">
          {[
            { label: "Beginner", color: "text-green-400 bg-green-400/10 border-green-400/30", desc: "Safe to try from day 1" },
            { label: "Intermediate", color: "text-yellow-400 bg-yellow-400/10 border-yellow-400/30", desc: "Build up technique first" },
            { label: "Advanced", color: "text-red-400 bg-red-400/10 border-red-400/30", desc: "High injury risk if rushed" },
          ].map((item) => (
            <div key={item.label} className="flex items-center gap-3">
              <span className={`text-xs font-semibold px-2 py-0.5 rounded-full border ${item.color}`}>
                {item.label}
              </span>
              <span className="text-stone-400 text-sm">{item.desc}</span>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
