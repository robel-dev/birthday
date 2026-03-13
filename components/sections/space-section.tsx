"use client"

import { motion } from "framer-motion"
import { ContinueButton } from "@/components/continue-button"
import { Sparkles } from "lucide-react"

interface SpaceSectionProps {
  onContinue: () => void
}

export function SpaceSection({ onContinue }: SpaceSectionProps) {
  return (
    <section className="h-screen w-full flex flex-col items-center justify-center px-6 relative z-10">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="font-serif text-3xl md:text-5xl lg:text-6xl text-center text-primary tracking-wide mb-12"
      >
        A Small Mission
      </motion.h2>
      
      <motion.p
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
        className="font-sans text-lg md:text-xl text-center text-foreground/90 max-w-md leading-relaxed mb-12"
      >
        I wanted to send your name
        <br />
        somewhere farther than words.
      </motion.p>
      
      {/* NASA Boarding Pass Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9, rotateX: 15 }}
        animate={{ opacity: 1, scale: 1, rotateX: 0 }}
        transition={{ duration: 1.2, delay: 1, ease: "easeOut" }}
        className="relative w-72 md:w-96 h-44 md:h-52 rounded-xl border border-primary/30 bg-gradient-to-br from-card via-card/80 to-card/60 backdrop-blur-sm p-6 shadow-[0_0_40px_rgba(212,175,55,0.1)]"
      >
        {/* Sparkle effects */}
        <motion.div
          animate={{ 
            opacity: [0.3, 0.8, 0.3],
            scale: [1, 1.2, 1]
          }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-2 -right-2"
        >
          <Sparkles className="w-5 h-5 text-primary" />
        </motion.div>
        <motion.div
          animate={{ 
            opacity: [0.3, 0.8, 0.3],
            scale: [1, 1.2, 1]
          }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.7 }}
          className="absolute -bottom-2 -left-2"
        >
          <Sparkles className="w-4 h-4 text-primary" />
        </motion.div>
        
        <div className="h-full flex flex-col justify-between">
          <div>
            <p className="text-xs text-muted-foreground uppercase tracking-widest">NASA</p>
            <p className="text-sm text-primary mt-1">Boarding Pass</p>
          </div>
          <div>
            <p className="text-xs text-muted-foreground uppercase tracking-wider">Passenger</p>
            <p className="font-serif text-xl md:text-2xl text-foreground mt-1">Her Name</p>
          </div>
          <div className="flex justify-between items-end">
            <div>
              <p className="text-xs text-muted-foreground">Destination</p>
              <p className="text-sm text-foreground">Mars & Beyond</p>
            </div>
            <div className="text-right">
              <p className="text-xs text-muted-foreground">Flight</p>
              <p className="text-sm text-primary">2026</p>
            </div>
          </div>
        </div>
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 2 }}
      >
        <ContinueButton onClick={onContinue} delay={0}>
          Continue
        </ContinueButton>
      </motion.div>
    </section>
  )
}
