"use client"

import { motion } from "framer-motion"
import { ContinueButton } from "@/components/continue-button"

interface BirthSectionProps {
  onContinue: () => void
}

const lines = [
  "The world kept turning.",
  "Cities were busy.",
  "But somewhere in Ethiopia…",
  "You arrived.",
]

export function BirthSection({ onContinue }: BirthSectionProps) {
  return (
    <section className="h-screen w-full flex flex-col items-center justify-center px-6 relative z-10">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="font-serif text-3xl md:text-5xl lg:text-6xl text-center text-primary tracking-wide mb-16"
      >
        March 23, 2002
      </motion.h2>
      
      <div className="flex flex-col items-center gap-6">
        {lines.map((line, index) => (
          <motion.p
            key={index}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.8, 
              delay: 0.5 + index * 0.6, 
              ease: "easeOut" 
            }}
            className="font-sans text-lg md:text-xl text-center text-foreground/90"
          >
            {line}
          </motion.p>
        ))}
      </div>
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 3.2 }}
      >
        <ContinueButton onClick={onContinue} delay={0}>
          Continue
        </ContinueButton>
      </motion.div>
    </section>
  )
}
