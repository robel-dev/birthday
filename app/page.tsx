"use client"

import { useState, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { StarField } from "@/components/star-field"
import { HeroSection } from "@/components/sections/hero-section"
import { BirthSection } from "@/components/sections/birth-section"
import { StorySection } from "@/components/sections/story-section"
import { SpaceSection } from "@/components/sections/space-section"
import { WishSection } from "@/components/sections/wish-section"
import { FinalSection } from "@/components/sections/final-section"

const sectionVariants = {
  initial: { 
    opacity: 0, 
    y: 60,
    filter: "blur(8px)"
  },
  animate: { 
    opacity: 1, 
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 1.2,
      ease: [0.25, 0.1, 0.25, 1]
    }
  },
  exit: { 
    opacity: 0, 
    y: -40,
    filter: "blur(4px)",
    transition: {
      duration: 0.8,
      ease: [0.25, 0.1, 0.25, 1]
    }
  }
}

export default function BirthdayJourney() {
  const [currentSection, setCurrentSection] = useState(0)

  const goToNextSection = useCallback(() => {
    setCurrentSection(prev => Math.min(prev + 1, 5))
  }, [])

  const sections = [
    <HeroSection 
      key="hero"
      name="My Love" 
      onContinue={goToNextSection} 
    />,
    <BirthSection 
      key="birth"
      onContinue={goToNextSection} 
    />,
    <StorySection 
      key="story"
      onContinue={goToNextSection} 
    />,
    <SpaceSection 
      key="space"
      onContinue={goToNextSection} 
    />,
    <WishSection 
      key="wish"
      onContinue={goToNextSection} 
    />,
    <FinalSection key="final" />
  ]

  return (
    <main className="relative bg-background min-h-screen overflow-hidden">
      <StarField />
      
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSection}
          variants={sectionVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          className="min-h-screen"
        >
          {sections[currentSection]}
        </motion.div>
      </AnimatePresence>
    </main>
  )
}
