"use client"

import { motion } from "framer-motion"
import { ContinueButton } from "@/components/continue-button"

interface StorySectionProps {
  onContinue: () => void
}

export function StorySection({ onContinue }: StorySectionProps) {
  return (
    <section className="h-screen w-full flex flex-col items-center justify-center px-6 relative z-10">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="font-serif text-3xl md:text-5xl lg:text-6xl text-center text-primary tracking-wide mb-12"
      >
        Seven Days
      </motion.h2>
      
      <motion.p
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
        className="font-sans text-lg md:text-xl text-center text-foreground/90 max-w-md leading-relaxed"
      >
        It only took seven days
        <br />
        for something beautiful to begin.
      </motion.p>
      
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 1.2, ease: "easeOut" }}
        className="mt-12 w-64 h-40 md:w-80 md:h-48 rounded-lg border border-primary/20 bg-card/30 backdrop-blur-sm flex items-center justify-center"
      >
        <p className="text-muted-foreground/50 text-sm font-sans">A memory preserved</p>
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.8 }}
      >
        <ContinueButton onClick={onContinue} delay={0}>
          Continue
        </ContinueButton>
      </motion.div>
    </section>
  )
}
