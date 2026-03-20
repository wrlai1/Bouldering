"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const categories = ["All", "Footwork", "Body Position", "Movement", "Advanced"];

const moves = [
  {
    name: "Smearing",
    category: "Footwork",
    emoji: "👟",
    difficulty: "Beginner",
    difficultyColor: "text-green-400 bg-green-400/10 border-green-400/30",
    summary: "Using friction between your shoe and the wall when there are no footholds.",
    detail:
      "Smearing is one of the most fundamental footwork skills. When there are no footholds, you press the rubber of your climbing shoe against the wall and rely on friction. The more surface area you use, the better the smear. Keep your heel low to maximize rubber contact.",
    cues: ["Heel low, toes high", "Trust the rubber — commit to the smear", "Keep weight over your foot"],
  },
  {
    name: "Edging",
    category: "Footwork",
    emoji: "👣",
    difficulty: "Beginner",
    difficultyColor: "text-green-400 bg-green-400/10 border-green-400/30",
    summary: "Placing the inside or outside edge of your shoe precisely on small footholds.",
    detail:
      "Edging is using the stiff edge of your shoe (usually the inside edge near the big toe) to stand precisely on small holds. Inside edging is most common. Outside edging (the pinky toe side) is used for specific body positions. Precise footwork saves enormous energy.",
    cues: ["Look at your feet when placing them", "Place your foot — don't stomp", "The big toe area is your strongest edge"],
  },
  {
    name: "Heel Hook",
    category: "Footwork",
    emoji: "🦵",
    difficulty: "Intermediate",
    difficultyColor: "text-yellow-400 bg-yellow-400/10 border-yellow-400/30",
    summary: "Hooking your heel over a hold to create upward pulling force.",
    detail:
      "A heel hook uses the back of your heel on a hold to pull your body up or stabilize it on overhangs. It offloads arm strength and lets your leg do work. Engage your hamstring to pull down on the hook — don't just rest your heel there.",
    cues: ["Flex your hamstring to generate force", "Keep your core tight", "Great for moving through roofs and caves"],
  },
  {
    name: "Toe Hook",
    category: "Footwork",
    emoji: "🦶",
    difficulty: "Intermediate",
    difficultyColor: "text-yellow-400 bg-yellow-400/10 border-yellow-400/30",
    summary: "Hooking the top of your toes/shoe over a hold for stability on overhangs.",
    detail:
      "A toe hook uses the rubber on the top of your shoe to hook against a hold. It creates tension that keeps you close to the wall on overhangs and roofs. Engage your hip flexors and pull with the top of your foot.",
    cues: ["Pull inward with your hip flexor", "Pair with an opposing hand movement", "Keeps your hips high on steep terrain"],
  },
  {
    name: "Drop Knee",
    category: "Body Position",
    emoji: "🏋️",
    difficulty: "Intermediate",
    difficultyColor: "text-yellow-400 bg-yellow-400/10 border-yellow-400/30",
    summary: "Rotating your knee inward and downward to get your hip closer to the wall.",
    detail:
      "A drop knee (also called an Egyptian) involves turning your foot outward on a foothold and dropping the same-side knee inward. This twists your hip closer to the wall, dramatically increasing your reach. It's a core technique for overhangs and off-balance moves.",
    cues: ["Rotate your hip into the wall", "Keep your knee pointed down, not out", "Use with a sidepull or undercling for max reach"],
  },
  {
    name: "Flagging",
    category: "Body Position",
    emoji: "🚩",
    difficulty: "Beginner",
    difficultyColor: "text-green-400 bg-green-400/10 border-green-400/30",
    summary: "Extending a leg out to counterbalance your body and prevent barn-dooring.",
    detail:
      "Flagging is a technique to maintain balance when your body wants to swing away from the wall (barn-door). You extend one leg out to the side or behind you as a counterweight. There's inside flag (across your body), outside flag (same side), and back flag.",
    cues: ["Flag before you swing, not after", "Light touch — barely touch the wall", "Think of your body like a scale that needs balancing"],
  },
  {
    name: "Hip Rotation",
    category: "Body Position",
    emoji: "🔄",
    difficulty: "Beginner",
    difficultyColor: "text-green-400 bg-green-400/10 border-green-400/30",
    summary: "Turning your hips sideways to the wall to increase reach and reduce arm strain.",
    detail:
      "Climbing straight on (square hips to the wall) is much harder than turning sideways. By rotating your hip toward the wall, you get your body closer, increase reach, and use bigger muscle groups. Most moves on intermediate and above require hip rotation.",
    cues: ["Turn your hip into the wall on each move", "Think 'hip, then hand'", "Avoid the 'sewing machine' leg — keep feet stable"],
  },
  {
    name: "Dyno",
    category: "Movement",
    emoji: "🚀",
    difficulty: "Advanced",
    difficultyColor: "text-red-400 bg-red-400/10 border-red-400/30",
    summary: "A dynamic jump move where you leave the wall completely to catch a hold.",
    detail:
      "A dyno is a full dynamic movement where both hands (and often feet) leave the wall simultaneously. You generate momentum from your legs and core, launch upward, and catch the target hold. Timing and commitment are everything — hesitating mid-dyno causes falls.",
    cues: ["Coil low and explode upward", "Reach for the hold at the peak of the jump", "Commit fully — half-hearted dynos cause injury"],
  },
  {
    name: "Deadpoint",
    category: "Movement",
    emoji: "🎯",
    difficulty: "Intermediate",
    difficultyColor: "text-yellow-400 bg-yellow-400/10 border-yellow-400/30",
    summary: "A controlled dynamic move catching a hold at the peak (dead point) of your arc.",
    detail:
      "A deadpoint is a controlled dynamic move where you catch the target hold at the exact moment your upward momentum stops — the 'dead point' when you briefly become weightless. Less explosive than a dyno, more precise. Great for catching slopers on dynamic moves.",
    cues: ["Time the catch at the top of your movement", "Pull with your lower hand to extend upward", "Practice on juggy moves before attempting slopers"],
  },
  {
    name: "Mantle",
    category: "Movement",
    emoji: "⬆️",
    difficulty: "Intermediate",
    difficultyColor: "text-yellow-400 bg-yellow-400/10 border-yellow-400/30",
    summary: "Pushing down on a hold (like getting out of a pool) to top out a boulder.",
    detail:
      "A mantle is used to top out a boulder problem. Instead of pulling, you push down on the edge with straight arms, then rock your foot up and stand. The transition from pulling to pushing is the tricky part. Common on outdoor boulders.",
    cues: ["Lock off at the top and push down to straighten your arms", "Get your foot up to the ledge quickly", "Commit — wavering at the top makes it harder"],
  },
  {
    name: "Gaston Move",
    category: "Advanced",
    emoji: "💪",
    difficulty: "Advanced",
    difficultyColor: "text-red-400 bg-red-400/10 border-red-400/30",
    summary: "Pushing outward with your elbow to use a hold against the direction of pull.",
    detail:
      "Named after French climber Gaston Rébuffat, this involves positioning your hand with the elbow pointing outward and pushing outward rather than pulling. Requires significant shoulder and chest strength. Often appears in crack climbing and specific boulder problems.",
    cues: ["Keep core braced to handle the pushing force", "Often paired with a high foot on the same side", "Build shoulder strength before attempting regularly"],
  },
  {
    name: "Stemming",
    category: "Body Position",
    emoji: "🦅",
    difficulty: "Beginner",
    difficultyColor: "text-green-400 bg-green-400/10 border-green-400/30",
    summary: "Pushing out with both feet against opposite walls or features in a corner.",
    detail:
      "Stemming (also called bridging) is used in corners or dihedrals — you push your feet outward against opposing walls to create stability. Your legs do all the work and your arms barely need to hold on. A great rest position when available.",
    cues: ["Push your feet outward, not just place them", "Keep your hips low for stability", "Look for stemming opportunities to rest your arms"],
  },
];

export default function MovesPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [expanded, setExpanded] = useState<number | null>(null);

  const filtered = moves.filter(
    (m) => activeCategory === "All" || m.category === activeCategory
  );

  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      {/* Header */}
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
        <span className="inline-block bg-amber-500/20 text-amber-400 border border-amber-500/30 text-sm font-semibold px-4 py-1.5 rounded-full mb-4 tracking-wide uppercase">
          Technique
        </span>
        <h1 className="text-5xl md:text-6xl font-black mb-4">Moves & Techniques</h1>
        <p className="text-stone-400 text-xl max-w-2xl mx-auto">
          Strength gets you started. Technique gets you far. Learn the moves that separate climbers from wallers.
        </p>
      </motion.div>

      {/* Category filter */}
      <div className="flex flex-wrap gap-2 justify-center mb-10">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => { setActiveCategory(cat); setExpanded(null); }}
            className={`px-4 py-2 rounded-full text-sm font-semibold border transition-all duration-200 ${
              activeCategory === cat
                ? "bg-orange-500 border-orange-500 text-white"
                : "border-stone-700 text-stone-400 hover:border-orange-500/50 hover:text-orange-400"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Moves list */}
      <motion.div layout className="space-y-3">
        <AnimatePresence mode="popLayout">
          {filtered.map((move, i) => {
            const idx = moves.indexOf(move);
            const isExpanded = expanded === idx;

            return (
              <motion.div
                key={move.name}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ delay: i * 0.05 }}
              >
                <div
                  className={`rounded-2xl border border-stone-700 bg-stone-900/60 overflow-hidden cursor-pointer transition-all duration-200 hover:border-orange-500/40 ${isExpanded ? "border-orange-500/50" : ""}`}
                  onClick={() => setExpanded(isExpanded ? null : idx)}
                >
                  <div className="p-5 flex items-center gap-4">
                    <span className="text-3xl shrink-0">{move.emoji}</span>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-3 mb-1">
                        <h3 className="text-lg font-bold">{move.name}</h3>
                        <span className={`text-xs font-semibold px-2 py-0.5 rounded-full border hidden sm:inline ${move.difficultyColor}`}>
                          {move.difficulty}
                        </span>
                        <span className="text-xs text-stone-500 bg-stone-800 px-2 py-0.5 rounded-full hidden sm:inline">
                          {move.category}
                        </span>
                      </div>
                      <p className="text-stone-400 text-sm">{move.summary}</p>
                    </div>
                    <motion.span
                      animate={{ rotate: isExpanded ? 180 : 0 }}
                      className="text-stone-500 shrink-0"
                    >
                      ↓
                    </motion.span>
                  </div>

                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="px-5 pb-5 border-t border-stone-700 pt-4">
                          <p className="text-stone-300 text-sm leading-relaxed mb-4">{move.detail}</p>
                          <div>
                            <p className="text-orange-400 text-xs font-bold uppercase tracking-wider mb-2">Key Cues</p>
                            <ul className="space-y-2">
                              {move.cues.map((cue, j) => (
                                <li key={j} className="flex gap-2 text-sm text-stone-300">
                                  <span className="text-orange-400 shrink-0">→</span>
                                  {cue}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </motion.div>

      {/* Pro tip */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="mt-16 p-6 rounded-2xl bg-gradient-to-br from-amber-500/10 to-orange-500/5 border border-amber-500/20"
      >
        <div className="flex gap-4">
          <span className="text-3xl">💡</span>
          <div>
            <h3 className="font-bold text-lg mb-1 text-amber-400">The #1 beginner mistake</h3>
            <p className="text-stone-300 text-sm leading-relaxed">
              Most beginners climb with their hips square to the wall, hanging off their arms. The single biggest improvement you can make is to turn sideways and get your hips close to the wall. This alone will make moves feel two grades easier.
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
