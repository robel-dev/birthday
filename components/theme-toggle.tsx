"use client"

import { motion } from "framer-motion"
import { useBirthdayTheme } from "./birthday-theme-provider"
import { Star, Flower2 } from "lucide-react"

export function ThemeToggle() {
  const { theme, toggleTheme } = useBirthdayTheme()

  return (
    <motion.button
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 1 }}
      onClick={toggleTheme}
      className="fixed top-6 right-6 z-50 flex items-center gap-2 px-4 py-2 rounded-full border border-current/20 backdrop-blur-sm transition-all duration-300 hover:scale-105"
      style={{
        backgroundColor: theme === "starry" 
          ? "rgba(255, 255, 255, 0.1)" 
          : "rgba(219, 112, 147, 0.15)",
        color: theme === "starry" 
          ? "rgba(255, 248, 230, 0.8)" 
          : "rgba(180, 100, 120, 0.9)",
      }}
      aria-label={`Switch to ${theme === "starry" ? "sakura" : "starry night"} theme`}
    >
      <motion.div
        key={theme}
        initial={{ rotate: -180, opacity: 0 }}
        animate={{ rotate: 0, opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        {theme === "starry" ? (
          <Flower2 className="w-4 h-4" />
        ) : (
          <Star className="w-4 h-4" />
        )}
      </motion.div>
      <span className="text-sm font-sans">
        {theme === "starry" ? "Sakura" : "Starry Night"}
      </span>
    </motion.button>
  )
}
