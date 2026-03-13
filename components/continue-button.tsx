"use client"

import { motion } from "framer-motion"

interface ContinueButtonProps {
  onClick: () => void
  children: React.ReactNode
  delay?: number
}

export function ContinueButton({ onClick, children, delay = 0 }: ContinueButtonProps) {
  return (
    <motion.button
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay, ease: "easeOut" }}
      onClick={onClick}
      className="mt-12 px-8 py-3 border border-primary/30 rounded-full text-primary font-sans text-sm tracking-widest uppercase transition-all duration-500 hover:bg-primary/10 hover:border-primary/60 hover:shadow-[0_0_20px_rgba(212,175,55,0.2)] focus:outline-none focus:ring-2 focus:ring-primary/50"
    >
      {children}
    </motion.button>
  )
}
