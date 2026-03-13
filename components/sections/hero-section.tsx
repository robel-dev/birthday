"use client"

import { motion } from "framer-motion"
import { ContinueButton } from "@/components/continue-button"

interface HeroSectionProps {
  onContinue: () => void
  name: string
}

export function HeroSection({ onContinue, name }: HeroSectionProps) {
  return (
    <section className="h-screen w-full flex flex-col items-center justify-center px-6 relative z-10">
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="font-serif text-4xl md:text-6xl lg:text-7xl text-center text-foreground tracking-wide text-balance"
      >
        Happy Birthday, {name}
      </motion.h1>
      
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
        className="mt-8 text-muted-foreground font-sans text-lg md:text-xl text-center"
      >
        I made you a little journey.
      </motion.p>
      
      <ContinueButton onClick={onContinue} delay={1.5}>
        Begin
      </ContinueButton>
    </section>
  )
}
