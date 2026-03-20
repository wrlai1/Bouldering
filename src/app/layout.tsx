import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "BoulderUp — Learn to Climb",
  description: "Everything a newbie climber needs to know about bouldering — holds, moves, grades, gear, and more.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geist.variable} h-full`}>
      <body className="min-h-full flex flex-col bg-stone-950 text-stone-100 antialiased">
        <Navbar />
        <main className="flex-1">{children}</main>
        <footer className="border-t border-stone-800 py-8 text-center text-stone-500 text-sm">
          <p>BoulderUp © 2025 — Made for climbers, by climbers 🧗</p>
        </footer>
      </body>
    </html>
  );
}
