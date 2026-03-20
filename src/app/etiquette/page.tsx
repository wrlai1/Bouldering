"use client";

import { motion } from "framer-motion";

const gymRules = [
  {
    emoji: "🔄",
    title: "Don't hog a problem",
    desc: "If someone is working a problem (attempting repeatedly), ask before jumping on it or offer to take turns. The unwritten rule: if someone is setting up, wait until they've had their attempt.",
  },
  {
    emoji: "🚫",
    title: "No beta unless asked",
    desc: "Beta = the solution to a problem. Don't shout out instructions to someone you don't know while they're climbing. Many climbers want to figure it out themselves — that's half the fun. Always ask first: 'Want beta?'",
  },
  {
    emoji: "🧹",
    title: "Brush your chalk",
    desc: "Excessive chalk buildup on holds makes them slippery — the opposite of helpful. Brush holds after your session, especially in gyms where it's expected. Carry a brush. It's a sign of a serious climber.",
  },
  {
    emoji: "📱",
    title: "Don't record people without asking",
    desc: "Recording a friend? Fine. Recording a stranger mid-climb without consent? Not OK. Many gyms have policies against filming others. Always ask before pointing your camera at anyone.",
  },
  {
    emoji: "👟",
    title: "Wear your shoes to the wall, not around the gym",
    desc: "Climbing shoes are for the wall, not for walking around. The rubber picks up grit and loses grip quickly. Put them on at the base of a problem, take them off when you step off the mats.",
  },
  {
    emoji: "💬",
    title: "Communicate about sequences",
    desc: "If you're projecting the same problem as someone else, coordinate. Ask if they want to go in a certain order. Be aware of others — don't step into someone's fall zone while they're climbing.",
  },
  {
    emoji: "🔊",
    title: "Mind your volume",
    desc: "Gyms are social — talking is great. But screaming beta across the room, playing music through speakers (not headphones), or being excessively loud disrupts others' focus. Read the room.",
  },
  {
    emoji: "👐",
    title: "Clean up your chalk",
    desc: "Don't leave chalk pools on the floor from your bag, chalk clouds from excessive clapping, or dirty chalk holds behind. Some gyms have chalk-free zones. Respect the rules.",
  },
];

const outdoorRules = [
  {
    emoji: "🌿",
    title: "Leave No Trace",
    desc: "Pack out everything you pack in. Food wrappers, tape scraps, chalk bags, everything. Some crags ban chalk entirely — check before you go.",
  },
  {
    emoji: "🦅",
    title: "Respect wildlife and closures",
    desc: "Many outdoor crags close seasonally for nesting birds of prey (raptors). Climbing during closures can permanently get a crag shut down. Check the Access Fund or local climbing coalition before visiting.",
  },
  {
    emoji: "🪵",
    title: "Don't break vegetation",
    desc: "Don't snap branches, pull up plants, or clear vegetation around problems. The crag needs to stay natural to remain accessible and avoid closure.",
  },
  {
    emoji: "🤫",
    title: "Be quiet and respectful",
    desc: "Many crags are on private land or near residential areas. Noise complaints are a real reason areas get closed. Keep volume down and treat the land like it belongs to someone — because it often does.",
  },
  {
    emoji: "🧹",
    title: "Tick marks and tick mark removal",
    desc: "Small chalk dots (tick marks) help you find footholds. Always brush them off when done. Permanent marker ticks are vandalism. Leave the rock the way you found it.",
  },
  {
    emoji: "🅿️",
    title: "Park responsibly",
    desc: "Don't block private driveways, park on grass, or cram too many cars in small pulloffs. One bad parking day can cause access issues for everyone. Carpool when possible.",
  },
  {
    emoji: "👋",
    title: "Talk to locals",
    desc: "Local climbers know the ethics, access situation, and unwritten rules for a specific area. Be humble, ask questions, and respect what they tell you — even if it differs from what you know.",
  },
];

const quickDos = [
  "Spot your friends (help them land safely)",
  "Cheer people on when they send",
  "Share holds on busy days",
  "Return borrowed gear immediately",
  "Learn from more experienced climbers",
  "Ask before giving advice",
];

const dontDos = [
  "Solo dynamic moves over other climbers",
  "Monopolize popular problems for hours",
  "Give unsolicited beta",
  "Walk under someone who's climbing",
  "Climb above another person's crash zone",
  "Spray chalk all over the wall",
];

export default function EtiquettePage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      {/* Header */}
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
        <span className="inline-block bg-green-500/20 text-green-400 border border-green-500/30 text-sm font-semibold px-4 py-1.5 rounded-full mb-4 tracking-wide uppercase">
          Culture
        </span>
        <h1 className="text-5xl md:text-6xl font-black mb-4">Etiquette</h1>
        <p className="text-stone-400 text-xl max-w-2xl mx-auto">
          The bouldering community is uniquely welcoming — these are the unwritten rules that keep it that way. Learn them early.
        </p>
      </motion.div>

      {/* Quick dos and don'ts */}
      <div className="grid md:grid-cols-2 gap-6 mb-16">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1 }}
          className="rounded-2xl border border-green-500/30 bg-gradient-to-br from-green-500/10 to-green-500/5 p-6"
        >
          <h2 className="text-xl font-bold text-green-400 mb-4 flex items-center gap-2">
            <span>✅</span> Do
          </h2>
          <ul className="space-y-2">
            {quickDos.map((item, i) => (
              <motion.li
                key={item}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 + i * 0.05 }}
                className="flex gap-2 text-stone-300 text-sm"
              >
                <span className="text-green-400 shrink-0">✓</span>
                {item}
              </motion.li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1 }}
          className="rounded-2xl border border-red-500/30 bg-gradient-to-br from-red-500/10 to-red-500/5 p-6"
        >
          <h2 className="text-xl font-bold text-red-400 mb-4 flex items-center gap-2">
            <span>❌</span> Don&apos;t
          </h2>
          <ul className="space-y-2">
            {dontDos.map((item, i) => (
              <motion.li
                key={item}
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 + i * 0.05 }}
                className="flex gap-2 text-stone-300 text-sm"
              >
                <span className="text-red-400 shrink-0">✗</span>
                {item}
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>

      {/* Gym rules */}
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-8">
        <h2 className="text-3xl font-black mb-2">🏟️ Gym Etiquette</h2>
        <p className="text-stone-400">For indoor bouldering — most of this applies from day one.</p>
      </motion.div>

      <div className="grid sm:grid-cols-2 gap-4 mb-16">
        {gymRules.map((rule, i) => (
          <motion.div
            key={rule.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.06 }}
            whileHover={{ y: -2 }}
            className="rounded-xl border border-stone-700 bg-stone-900/60 p-5 hover:border-stone-600 transition-all duration-200"
          >
            <div className="flex items-start gap-3">
              <span className="text-2xl shrink-0 mt-0.5">{rule.emoji}</span>
              <div>
                <h3 className="font-bold mb-1">{rule.title}</h3>
                <p className="text-stone-400 text-sm leading-relaxed">{rule.desc}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Outdoor rules */}
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-8">
        <h2 className="text-3xl font-black mb-2">⛰️ Outdoor Etiquette</h2>
        <p className="text-stone-400">When you take your climbing outside, the stakes are higher — access to areas can be lost permanently.</p>
      </motion.div>

      <div className="grid sm:grid-cols-2 gap-4 mb-16">
        {outdoorRules.map((rule, i) => (
          <motion.div
            key={rule.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.06 }}
            whileHover={{ y: -2 }}
            className="rounded-xl border border-stone-700 bg-stone-900/60 p-5 hover:border-stone-600 transition-all duration-200"
          >
            <div className="flex items-start gap-3">
              <span className="text-2xl shrink-0 mt-0.5">{rule.emoji}</span>
              <div>
                <h3 className="font-bold mb-1">{rule.title}</h3>
                <p className="text-stone-400 text-sm leading-relaxed">{rule.desc}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Culture note */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="p-6 rounded-2xl bg-gradient-to-br from-orange-500/10 to-amber-500/5 border border-orange-500/20"
      >
        <div className="flex gap-4">
          <span className="text-3xl">🤝</span>
          <div>
            <h3 className="font-bold text-lg mb-1 text-orange-400">Why this matters</h3>
            <p className="text-stone-300 text-sm leading-relaxed">
              The bouldering community has a reputation for being the most welcoming in all of climbing. Strangers cheer each other on, share beta freely, and celebrate each other&apos;s sends. That culture comes from everyone doing their part. As a beginner, you have the opportunity to be a positive part of that from day one.
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
