"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const gearItems = [
  {
    name: "Climbing Shoes",
    emoji: "👟",
    priority: "Essential",
    priorityColor: "text-red-400 bg-red-400/10 border-red-400/30",
    price: "$60–$200",
    buyFirst: true,
    description:
      "The single most important piece of gear. Climbing shoes have sticky rubber soles that grip the wall and precise fit for accurate footwork. Tight-fitting shoes give more sensitivity but can be painful — for beginners, comfortable fit is more important than performance.",
    whatToLook: [
      "Flat/neutral shoes for beginners — not aggressive downturned",
      "Snug but not painful — you'll be wearing these for hours",
      "Laces > velcro for beginners (easier to adjust sizing)",
      "Brands: La Sportiva, Scarpa, Black Diamond, Mad Rock",
    ],
    affiliateNote: "beginner climbing shoes",
  },
  {
    name: "Chalk",
    emoji: "🤍",
    priority: "Essential",
    priorityColor: "text-red-400 bg-red-400/10 border-red-400/30",
    price: "$8–$20",
    buyFirst: true,
    description:
      "Magnesium carbonate (not the same as school chalk). Chalk absorbs sweat on your hands to improve grip. Without chalk, your hands will slip off holds. Most gyms sell or rent chalk bags — having your own is always better.",
    whatToLook: [
      "Loose chalk vs chalk balls — chalk balls are less messy for indoor",
      "Many gyms require chalk balls (no loose chalk)",
      "Liquid chalk for warm-up or sweaty sessions",
      "Store in a chalk bag you can clip to your harness or waistband",
    ],
    affiliateNote: "climbing chalk",
  },
  {
    name: "Chalk Bag",
    emoji: "👜",
    priority: "Essential",
    priorityColor: "text-red-400 bg-red-400/10 border-red-400/30",
    price: "$15–$40",
    buyFirst: true,
    description:
      "The pouch you carry chalk in. For bouldering, you carry it to the base of a problem, dip your hands in between attempts. Has a drawstring closure and a loop/carabiner to hang from your waist or the wall.",
    whatToLook: [
      "Wide enough opening to fit your hand easily",
      "Good closure to avoid spills in your gym bag",
      "Fleece lining helps distribute chalk on your hands",
      "Belt or loop to hang it",
    ],
    affiliateNote: "climbing chalk bag",
  },
  {
    name: "Brush",
    emoji: "🪥",
    priority: "Recommended",
    priorityColor: "text-yellow-400 bg-yellow-400/10 border-yellow-400/30",
    price: "$10–$20",
    buyFirst: false,
    description:
      "A stiff-bristled brush for cleaning chalk buildup and grime from holds. Fresh holds are stickier. Outdoor climbing especially requires brushing before and after you climb — excess chalk buildup actually makes holds slippery.",
    whatToLook: [
      "Boar hair or stiff nylon bristles",
      "Telescoping handle for holds above your reach outdoors",
      "Keep a small pocket brush in your chalk bag",
      "Brands: Metolius, Black Diamond, Evolv",
    ],
    affiliateNote: "climbing hold brush",
  },
  {
    name: "Crashpad",
    emoji: "🛏️",
    priority: "Outdoor Only",
    priorityColor: "text-blue-400 bg-blue-400/10 border-blue-400/30",
    price: "$200–$450",
    buyFirst: false,
    description:
      "Thick foam pads you place below outdoor boulder problems to cushion falls. Gyms have built-in padding — you don't need a crash pad indoors. For outdoor bouldering, having 1–2 pads (ideally from friends to start) is essential for safety.",
    whatToLook: [
      "Hinged vs taco design — hinged is more common and versatile",
      "4–5 inch foam for best protection",
      "Shoulder straps to carry to the crag",
      "Brands: Metolius, Black Diamond, Mad Rock",
    ],
    affiliateNote: "bouldering crashpad",
  },
  {
    name: "Finger Tape",
    emoji: "🩹",
    priority: "Recommended",
    priorityColor: "text-yellow-400 bg-yellow-400/10 border-yellow-400/30",
    price: "$5–$15",
    buyFirst: false,
    description:
      "Athletic/climbing tape for protecting skin on sharp holds, supporting tweaky finger pulleys, or taping split tips. A must-have once you're climbing regularly. Don't tape as a substitute for rest when you're injured.",
    whatToLook: [
      "1/2 inch width for finger joints, 1 inch for general use",
      "Stretchy climbing tape (Metolius, Evolv) vs rigid athletic tape",
      "Never tape over a pulley injury hoping to climb through it",
    ],
    affiliateNote: "climbing finger tape",
  },
  {
    name: "Gym Membership",
    emoji: "🏟️",
    priority: "Essential",
    priorityColor: "text-red-400 bg-red-400/10 border-red-400/30",
    price: "$40–$90/mo",
    buyFirst: true,
    description:
      "Obvious, but worth saying: access to a climbing gym is the foundation. Most gyms offer day passes, monthly memberships, and intro classes. If you're unsure, start with a day pass. Most gyms rent shoes and chalk for your first visit.",
    whatToLook: [
      "Look for gyms with auto-belay and bouldering walls",
      "Intro/beginner classes are worth it — faster learning",
      "Student and military discounts are common",
      "Many gyms have punch cards for casual climbers",
    ],
    affiliateNote: null,
  },
];

const buyOrder = [
  { step: "1", item: "Gym membership or day pass", note: "Rent shoes on your first visit" },
  { step: "2", item: "Your own climbing shoes", note: "Most important upgrade from rental" },
  { step: "3", item: "Chalk + chalk bag", note: "Dramatically improves grip" },
  { step: "4", item: "A brush", note: "Become a good climbing citizen" },
  { step: "5", item: "Finger tape", note: "Once you start training regularly" },
  { step: "6", item: "Crashpad", note: "Only when you go outdoors" },
];

export default function GearPage() {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      {/* Header */}
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
        <span className="inline-block bg-stone-500/20 text-stone-400 border border-stone-500/30 text-sm font-semibold px-4 py-1.5 rounded-full mb-4 tracking-wide uppercase">
          Gear
        </span>
        <h1 className="text-5xl md:text-6xl font-black mb-4">Gear Guide</h1>
        <p className="text-stone-400 text-xl max-w-2xl mx-auto">
          You don&apos;t need much to start bouldering. Here&apos;s what to get, in what order, and why.
        </p>
      </motion.div>

      {/* Buy order */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16 p-6 rounded-2xl border border-orange-500/20 bg-gradient-to-br from-orange-500/10 to-orange-500/5"
      >
        <h2 className="text-2xl font-black mb-6 text-orange-400">What to buy, and in what order</h2>
        <div className="space-y-3">
          {buyOrder.map((item, i) => (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="flex items-center gap-4"
            >
              <div className="w-8 h-8 rounded-full bg-orange-500 text-white text-sm font-black flex items-center justify-center shrink-0">
                {item.step}
              </div>
              <div className="flex-1">
                <span className="font-semibold text-stone-100">{item.item}</span>
                <span className="text-stone-500 text-sm ml-2">— {item.note}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Gear cards */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {gearItems.map((item, i) => (
          <motion.div
            key={item.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            whileHover={{ y: -4 }}
            onClick={() => setSelected(selected === i ? null : i)}
            className="cursor-pointer"
          >
            <div className={`h-full rounded-2xl border bg-stone-900/60 p-5 transition-all duration-300 ${selected === i ? "border-orange-500/50 ring-1 ring-orange-500/30" : "border-stone-700 hover:border-stone-600"}`}>
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-2">
                  <span className="text-3xl">{item.emoji}</span>
                  {item.buyFirst && (
                    <span className="text-xs font-bold text-orange-400 bg-orange-400/10 px-1.5 py-0.5 rounded border border-orange-400/20">
                      Buy First
                    </span>
                  )}
                </div>
                <span className={`text-xs font-semibold px-2 py-0.5 rounded-full border ${item.priorityColor}`}>
                  {item.priority}
                </span>
              </div>

              <h3 className="text-lg font-bold mb-1">{item.name}</h3>
              <div className="text-orange-400 text-sm font-semibold mb-3">{item.price}</div>
              <p className="text-stone-400 text-sm leading-relaxed">
                {selected === i ? item.description : item.description.slice(0, 100) + "..."}
              </p>

              {selected === i && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-4 pt-4 border-t border-stone-700"
                >
                  <p className="text-orange-400 text-xs font-bold uppercase tracking-wider mb-2">What to look for</p>
                  <ul className="space-y-1.5">
                    {item.whatToLook.map((tip, j) => (
                      <li key={j} className="flex gap-2 text-sm text-stone-300">
                        <span className="text-orange-400 shrink-0 mt-0.5">→</span>
                        {tip}
                      </li>
                    ))}
                  </ul>
                  {item.affiliateNote && (
                    <div className="mt-4 p-3 rounded-xl bg-stone-800 border border-stone-700">
                      <p className="text-xs text-stone-500">
                        🛒 Shop for <span className="text-orange-400 font-semibold">{item.affiliateNote}</span>
                        {" "}— affiliate links coming soon
                      </p>
                    </div>
                  )}
                </motion.div>
              )}

              <div className="mt-3 text-xs text-stone-500 font-medium">
                {selected === i ? "Click to collapse ↑" : "Click for details ↓"}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Money saving tip */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="mt-16 p-6 rounded-2xl bg-gradient-to-br from-green-500/10 to-green-500/5 border border-green-500/20"
      >
        <div className="flex gap-4">
          <span className="text-3xl">💰</span>
          <div>
            <h3 className="font-bold text-lg mb-1 text-green-400">Save money as a beginner</h3>
            <p className="text-stone-300 text-sm leading-relaxed">
              Rent shoes for your first 2–3 sessions before buying. Your foot size preference may change (many climbers go down 1–2 sizes from street shoes). Buy shoes from a physical store so you can try them on. Second-hand shoes are fine as long as the rubber isn&apos;t too worn.
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
