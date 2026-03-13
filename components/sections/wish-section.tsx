"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ContinueButton } from "@/components/continue-button"

interface WishSectionProps {
  onContinue: () => void
}

function Confetti() {
  const [particles, setParticles] = useState<Array<{ id: number; x: number; delay: number; color: string }>>([])

  useEffect(() => {
    const colors = ["#d4af37", "#ffd700", "#fff8e6", "#e6c35c"]
    const newParticles = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      delay: Math.random() * 0.5,
      color: colors[Math.floor(Math.random() * colors.length)],
    }))
    setParticles(newParticles)
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          initial={{ y: -20, x: `${particle.x}vw`, opacity: 1, rotate: 0 }}
          animate={{ y: "100vh", opacity: 0, rotate: 360 }}
          transition={{ duration: 3, delay: particle.delay, ease: "easeOut" }}
          className="absolute w-2 h-2 rounded-full"
          style={{ backgroundColor: particle.color }}
        />
      ))}
    </div>
  )
}

function BirthdayCake({ onWishMade }: { onWishMade: () => void }) {
  const [candlesLit, setCandlesLit] = useState([true, true, true])
  const [allExtinguished, setAllExtinguished] = useState(false)

  const extinguishCandle = (index: number) => {
    const newCandles = [...candlesLit]
    newCandles[index] = false
    setCandlesLit(newCandles)
    
    if (newCandles.every(c => !c)) {
      setAllExtinguished(true)
      setTimeout(onWishMade, 500)
    }
  }

  // Candle positions relative to cake top (x offset from center, in pixels)
  const candlePositions = [-40, 0, 40]

  return (
    <div className="flex flex-col items-center">
      <div className="relative">
        {/* Candles positioned above the cake */}
        <div className="absolute -top-16 left-1/2 flex items-end z-10">
          {candlesLit.map((lit, index) => (
            <button
              key={index}
              onClick={() => lit && extinguishCandle(index)}
              style={{ transform: `translateX(${candlePositions[index] - 4}px)` }}
              className={`absolute flex flex-col items-center transition-transform ${lit ? "cursor-pointer hover:scale-110" : "cursor-default"}`}
              aria-label={lit ? `Blow out candle ${index + 1}` : `Candle ${index + 1} extinguished`}
            >
              {/* Flame */}
              <AnimatePresence>
                {lit && (
                  <motion.div
                    initial={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0, y: -10 }}
                    animate={{ 
                      scale: [1, 1.1, 1],
                      y: [0, -2, 0]
                    }}
                    transition={{ 
                      scale: { duration: 0.5, repeat: Infinity },
                      y: { duration: 0.3, repeat: Infinity }
                    }}
                    className="w-4 h-6 bg-gradient-to-t from-orange-400 via-yellow-300 to-yellow-100 rounded-full mb-1 shadow-[0_0_12px_rgba(255,200,0,0.9)]"
                  />
                )}
              </AnimatePresence>
              {!lit && <div className="w-4 h-6 mb-1" />}
              {/* Candle stick */}
              <div className="w-2.5 h-10 bg-gradient-to-b from-pink-100 to-pink-200 rounded-sm shadow-sm" />
            </button>
          ))}
        </div>
        
        {/* Cake Image */}
        <img 
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/cake-wgmuSJku5oZCZn9tqcyploE039tqjm.png"
          alt="Birthday cake decorated with cherry blossoms"
          className="w-64 h-auto md:w-80 object-contain drop-shadow-xl"
        />
      </div>
      
      {!allExtinguished && (
        <p className="mt-4 text-sm text-muted-foreground font-sans">Tap the candles to blow them out</p>
      )}
    </div>
  )
}

export function WishSection({ onContinue }: WishSectionProps) {
  const [showText, setShowText] = useState(true)
  const [wishMade, setWishMade] = useState(false)
  const [showConfetti, setShowConfetti] = useState(false)

  const handleWishMade = () => {
    setWishMade(true)
    setShowConfetti(true)
    setTimeout(() => setShowConfetti(false), 3000)
  }

  return (
    <section className="h-screen w-full flex flex-col items-center justify-center px-6 relative z-10">
      {showConfetti && <Confetti />}
      
      <AnimatePresence mode="wait">
        {showText && !wishMade ? (
          <motion.div
            key="text"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="flex flex-col items-center"
          >
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="font-sans text-lg md:text-xl text-center text-foreground/90 mb-8"
            >
              Before the final message…
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="font-serif text-2xl md:text-3xl text-center text-primary mb-12"
            >
              Make a wish.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 2 }}
            >
              <BirthdayCake onWishMade={handleWishMade} />
            </motion.div>
          </motion.div>
        ) : wishMade ? (
          <motion.div
            key="wish-complete"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="flex flex-col items-center"
          >
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="font-serif text-2xl md:text-4xl text-center text-primary mb-4"
            >
              May your wish come true.
            </motion.p>
            
            <ContinueButton onClick={onContinue} delay={1.5}>
              Open the final message
            </ContinueButton>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </section>
  )
}
