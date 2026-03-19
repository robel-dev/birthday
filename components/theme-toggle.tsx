"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Star, Flower2 } from "lucide-react"
import type { BirthdayTheme } from "@/components/birthday-journey"

interface ThemeToggleProps {
  theme: BirthdayTheme
}

export function ThemeToggle({ theme }: ThemeToggleProps) {
  const destination = theme === "starry" ? "/sakura" : "/starry-night"

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 1 }}
    >
      <Link
        href={destination}
        className="fixed top-6 right-6 z-50 flex items-center gap-2 rounded-full border border-current/20 px-4 py-2 backdrop-blur-sm transition-all duration-300 hover:scale-105"
        style={{
          backgroundColor:
            theme === "starry" ? "rgba(255, 255, 255, 0.1)" : "rgba(219, 112, 147, 0.15)",
          color: theme === "starry" ? "rgba(255, 248, 230, 0.8)" : "rgba(180, 100, 120, 0.9)",
        }}
        aria-label={`Go to the ${theme === "starry" ? "sakura" : "starry night"} route`}
      >
        <motion.div
          key={theme}
          initial={{ rotate: -180, opacity: 0 }}
          animate={{ rotate: 0, opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          {theme === "starry" ? <Flower2 className="h-4 w-4" /> : <Star className="h-4 w-4" />}
        </motion.div>
        <span className="text-sm font-sans">{theme === "starry" ? "Sakura" : "Starry Night"}</span>
      </Link>
    </motion.div>
  )
}
