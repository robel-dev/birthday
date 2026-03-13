"use client"

import { useRef, useCallback } from "react"
import { StarField } from "@/components/star-field"
import { HeroSection } from "@/components/sections/hero-section"
import { BirthSection } from "@/components/sections/birth-section"
import { StorySection } from "@/components/sections/story-section"
import { SpaceSection } from "@/components/sections/space-section"
import { WishSection } from "@/components/sections/wish-section"
import { FinalSection } from "@/components/sections/final-section"

export default function BirthdayJourney() {
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([])

  const scrollToSection = useCallback((index: number) => {
    const section = sectionRefs.current[index]
    if (section) {
      section.scrollIntoView({ 
        behavior: "smooth",
        block: "start"
      })
    }
  }, [])

  const setRef = (index: number) => (el: HTMLDivElement | null) => {
    sectionRefs.current[index] = el
  }

  return (
    <main className="relative bg-background">
      <StarField />
      
      <div ref={setRef(0)}>
        <HeroSection 
          name="My Love" 
          onContinue={() => scrollToSection(1)} 
        />
      </div>
      
      <div ref={setRef(1)}>
        <BirthSection onContinue={() => scrollToSection(2)} />
      </div>
      
      <div ref={setRef(2)}>
        <StorySection onContinue={() => scrollToSection(3)} />
      </div>
      
      <div ref={setRef(3)}>
        <SpaceSection onContinue={() => scrollToSection(4)} />
      </div>
      
      <div ref={setRef(4)}>
        <WishSection onContinue={() => scrollToSection(5)} />
      </div>
      
      <div ref={setRef(5)}>
        <FinalSection />
      </div>
    </main>
  )
}
