"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

const links = [
  { href: "/", label: "Home" },
  { href: "/holds", label: "Holds" },
  { href: "/moves", label: "Moves" },
  { href: "/grades", label: "Grades" },
  { href: "/gear", label: "Gear" },
  { href: "/etiquette", label: "Etiquette" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="sticky top-0 z-50 bg-stone-950/80 backdrop-blur-md border-b border-stone-800">
      <div className="max-w-6xl mx-auto px-4 flex items-center justify-between h-16">
        <Link href="/" className="text-xl font-bold text-orange-400 tracking-tight flex items-center gap-2">
          <span className="text-2xl">🧗</span> BoulderUp
        </Link>
        <div className="flex items-center gap-1">
          {links.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className="relative px-3 py-1.5 text-sm font-medium rounded-md transition-colors duration-200 text-stone-400 hover:text-orange-400"
              >
                {active && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 bg-orange-500/15 rounded-md"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
                <span className={`relative z-10 ${active ? "text-orange-400" : ""}`}>{link.label}</span>
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
