"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { useRef } from "react";

const sections = [
  {
    href: "/holds",
    emoji: "✊",
    title: "Hold Types",
    desc: "Crimps, jugs, slopers, pinches — learn what your hands are gripping.",
    color: "from-orange-500/20 to-orange-500/5",
    border: "border-orange-500/30",
    tag: "Fundamentals",
  },
  {
    href: "/moves",
    emoji: "🤸",
    title: "Moves & Techniques",
    desc: "Footwork, body positioning, flagging, dynos — the moves that unlock harder problems.",
    color: "from-amber-500/20 to-amber-500/5",
    border: "border-amber-500/30",
    tag: "Technique",
  },
  {
    href: "/grades",
    emoji: "📊",
    title: "Grading Systems",
    desc: "V-scale, Fontainebleau, and how to understand the numbers on the wall.",
    color: "from-yellow-500/20 to-yellow-500/5",
    border: "border-yellow-500/30",
    tag: "Knowledge",
  },
  {
    href: "/gear",
    emoji: "🎒",
    title: "Gear Guide",
    desc: "Shoes, chalk, brushes — everything you need and what to buy first.",
    color: "from-stone-500/20 to-stone-500/5",
    border: "border-stone-500/30",
    tag: "Gear",
  },
  {
    href: "/etiquette",
    emoji: "🤝",
    title: "Etiquette",
    desc: "Gym and outdoor rules that every climber should know on day one.",
    color: "from-green-500/20 to-green-500/5",
    border: "border-green-500/30",
    tag: "Culture",
  },
];

const floatingHolds = ["✊", "🪨", "🧗", "💪", "⛰️", "🤸", "🎯", "🏔️"];

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <div>
      {/* Hero */}
      <section ref={heroRef} className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Animated background grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1c1917_1px,transparent_1px),linear-gradient(to_bottom,#1c1917_1px,transparent_1px)] bg-[size:60px_60px] opacity-40" />

        {/* Floating emojis */}
        {floatingHolds.map((emoji, i) => (
          <motion.div
            key={i}
            className="absolute text-3xl select-none pointer-events-none opacity-10"
            style={{
              left: `${10 + (i * 12) % 85}%`,
              top: `${15 + (i * 17) % 70}%`,
            }}
            animate={{
              y: [0, -20, 0],
              rotate: [0, 10, -10, 0],
              opacity: [0.08, 0.15, 0.08],
            }}
            transition={{
              duration: 4 + i * 0.7,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.5,
            }}
          >
            {emoji}
          </motion.div>
        ))}

        <motion.div style={{ y, opacity }} className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <span className="inline-block bg-orange-500/20 text-orange-400 border border-orange-500/30 text-sm font-semibold px-4 py-1.5 rounded-full mb-6 tracking-wide uppercase">
              For Beginners
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-6xl md:text-8xl font-black tracking-tight mb-6 leading-none"
          >
            Start{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-300">
              Crushing
            </span>{" "}
            It.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-xl md:text-2xl text-stone-400 mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            Everything a new boulderer needs — from holds to moves to grades — condensed into one place so you can spend less time Googling and more time climbing.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              href="/holds"
              className="bg-orange-500 hover:bg-orange-400 text-white font-bold px-8 py-4 rounded-xl text-lg transition-all duration-200 hover:scale-105 active:scale-95 shadow-lg shadow-orange-500/25"
            >
              Start Learning →
            </Link>
            <Link
              href="/grades"
              className="bg-stone-800 hover:bg-stone-700 text-stone-100 font-bold px-8 py-4 rounded-xl text-lg transition-all duration-200 hover:scale-105 active:scale-95 border border-stone-700"
            >
              Check Grade System
            </Link>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-stone-600 rounded-full flex justify-center pt-2">
            <div className="w-1.5 h-3 bg-stone-500 rounded-full" />
          </div>
        </motion.div>
      </section>

      {/* Stats bar */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="border-y border-stone-800 bg-stone-900/50 py-8"
      >
        <div className="max-w-4xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { value: "10+", label: "Hold Types" },
            { value: "20+", label: "Techniques" },
            { value: "2", label: "Grade Systems" },
            { value: "100%", label: "Free to Learn" },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <div className="text-4xl font-black text-orange-400">{stat.value}</div>
              <div className="text-stone-500 text-sm mt-1">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Sections grid */}
      <section className="max-w-6xl mx-auto px-4 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black mb-4">Everything You Need to Know</h2>
          <p className="text-stone-400 text-lg max-w-xl mx-auto">
            Tap any topic to dive deep. No fluff, just the stuff that actually matters on the wall.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sections.map((section, i) => (
            <motion.div
              key={section.href}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
            >
              <Link href={section.href} className="block h-full">
                <div className={`h-full rounded-2xl border ${section.border} bg-gradient-to-br ${section.color} p-6 hover:shadow-xl transition-shadow duration-300 cursor-pointer`}>
                  <div className="flex items-start justify-between mb-4">
                    <span className="text-4xl">{section.emoji}</span>
                    <span className="text-xs font-semibold text-stone-400 bg-stone-800 px-2.5 py-1 rounded-full">
                      {section.tag}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-stone-100">{section.title}</h3>
                  <p className="text-stone-400 text-sm leading-relaxed">{section.desc}</p>
                  <div className="mt-4 text-orange-400 text-sm font-semibold flex items-center gap-1">
                    Explore <span>→</span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="py-24 px-4 text-center"
      >
        <div className="max-w-3xl mx-auto bg-gradient-to-br from-orange-500/10 to-amber-500/5 border border-orange-500/20 rounded-3xl p-12">
          <div className="text-6xl mb-6">🏔️</div>
          <h2 className="text-4xl font-black mb-4">Ready to Send Your First Problem?</h2>
          <p className="text-stone-400 text-lg mb-8">
            Start with the basics. Learn what holds you&apos;ll encounter, master the fundamentals, and you&apos;ll be climbing confidently in no time.
          </p>
          <Link
            href="/holds"
            className="inline-block bg-orange-500 hover:bg-orange-400 text-white font-bold px-10 py-4 rounded-xl text-lg transition-all duration-200 hover:scale-105 active:scale-95 shadow-lg shadow-orange-500/25"
          >
            Start with Hold Types →
          </Link>
        </div>
      </motion.section>
    </div>
  );
}
