"use client"

import { useEffect, useRef } from "react"

interface Petal {
  x: number
  y: number
  size: number
  rotation: number
  rotationSpeed: number
  fallSpeed: number
  swaySpeed: number
  swayOffset: number
  opacity: number
}

export function SakuraBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const petalsRef = useRef<Petal[]>([])
  const animationRef = useRef<number>(0)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      initPetals()
    }

    const initPetals = () => {
      const petalCount = Math.floor((canvas.width * canvas.height) / 20000)
      petalsRef.current = Array.from({ length: petalCount }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height - canvas.height,
        size: Math.random() * 8 + 4,
        rotation: Math.random() * Math.PI * 2,
        rotationSpeed: (Math.random() - 0.5) * 0.02,
        fallSpeed: Math.random() * 0.5 + 0.3,
        swaySpeed: Math.random() * 0.02 + 0.01,
        swayOffset: Math.random() * Math.PI * 2,
        opacity: Math.random() * 0.4 + 0.3,
      }))
    }

    const drawPetal = (petal: Petal) => {
      ctx.save()
      ctx.translate(petal.x, petal.y)
      ctx.rotate(petal.rotation)
      ctx.globalAlpha = petal.opacity

      // Draw a simple petal shape
      ctx.beginPath()
      ctx.moveTo(0, -petal.size / 2)
      ctx.bezierCurveTo(
        petal.size / 2, -petal.size / 3,
        petal.size / 2, petal.size / 3,
        0, petal.size / 2
      )
      ctx.bezierCurveTo(
        -petal.size / 2, petal.size / 3,
        -petal.size / 2, -petal.size / 3,
        0, -petal.size / 2
      )
      ctx.fillStyle = "rgba(219, 112, 147, 0.6)"
      ctx.fill()

      // Add a subtle highlight
      ctx.beginPath()
      ctx.moveTo(0, -petal.size / 3)
      ctx.bezierCurveTo(
        petal.size / 4, -petal.size / 4,
        petal.size / 4, petal.size / 4,
        0, petal.size / 3
      )
      ctx.fillStyle = "rgba(255, 182, 193, 0.4)"
      ctx.fill()

      ctx.restore()
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      petalsRef.current.forEach((petal) => {
        // Update petal position
        petal.y += petal.fallSpeed
        petal.x += Math.sin(Date.now() * petal.swaySpeed + petal.swayOffset) * 0.5
        petal.rotation += petal.rotationSpeed

        // Reset petal if it goes off screen
        if (petal.y > canvas.height + petal.size) {
          petal.y = -petal.size
          petal.x = Math.random() * canvas.width
        }
        if (petal.x > canvas.width + petal.size) {
          petal.x = -petal.size
        }
        if (petal.x < -petal.size) {
          petal.x = canvas.width + petal.size
        }

        drawPetal(petal)
      })

      animationRef.current = requestAnimationFrame(animate)
    }

    resizeCanvas()
    animate()

    window.addEventListener("resize", resizeCanvas)

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      cancelAnimationFrame(animationRef.current)
    }
  }, [])

  return (
    <>
      {/* Static background image */}
      <div 
        className="fixed inset-0 z-0"
        style={{
          background: "linear-gradient(to bottom, #fef6f0 0%, #fce8e4 50%, #f8e0db 100%)"
        }}
      />
      
      {/* Cherry blossom decorative corners */}
      <div className="fixed top-0 left-0 w-64 h-64 opacity-40 pointer-events-none z-0">
        <svg viewBox="0 0 200 200" className="w-full h-full">
          <defs>
            <linearGradient id="branch1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#c9a0a0" />
              <stop offset="100%" stopColor="#a87575" />
            </linearGradient>
          </defs>
          <path d="M-20,0 Q50,30 80,80 Q100,120 90,160" stroke="url(#branch1)" strokeWidth="3" fill="none" />
          <path d="M0,-10 Q30,40 60,60 Q90,80 100,120" stroke="url(#branch1)" strokeWidth="2" fill="none" />
          <circle cx="50" cy="40" r="8" fill="rgba(219, 112, 147, 0.5)" />
          <circle cx="70" cy="60" r="6" fill="rgba(255, 182, 193, 0.6)" />
          <circle cx="40" cy="70" r="7" fill="rgba(219, 112, 147, 0.4)" />
          <circle cx="80" cy="90" r="5" fill="rgba(255, 182, 193, 0.5)" />
          <circle cx="55" cy="85" r="6" fill="rgba(219, 112, 147, 0.5)" />
        </svg>
      </div>
      
      <div className="fixed top-0 right-0 w-64 h-64 opacity-40 pointer-events-none z-0 scale-x-[-1]">
        <svg viewBox="0 0 200 200" className="w-full h-full">
          <defs>
            <linearGradient id="branch2" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#c9a0a0" />
              <stop offset="100%" stopColor="#a87575" />
            </linearGradient>
          </defs>
          <path d="M-20,0 Q50,30 80,80 Q100,120 90,160" stroke="url(#branch2)" strokeWidth="3" fill="none" />
          <path d="M0,-10 Q30,40 60,60 Q90,80 100,120" stroke="url(#branch2)" strokeWidth="2" fill="none" />
          <circle cx="50" cy="40" r="8" fill="rgba(219, 112, 147, 0.5)" />
          <circle cx="70" cy="60" r="6" fill="rgba(255, 182, 193, 0.6)" />
          <circle cx="40" cy="70" r="7" fill="rgba(219, 112, 147, 0.4)" />
          <circle cx="80" cy="90" r="5" fill="rgba(255, 182, 193, 0.5)" />
        </svg>
      </div>
      
      {/* Torii gate silhouette at bottom */}
      <div className="fixed bottom-0 left-1/2 -translate-x-1/2 w-48 h-32 opacity-30 pointer-events-none z-0">
        <svg viewBox="0 0 120 80" className="w-full h-full">
          <rect x="15" y="20" width="6" height="60" fill="#c9a0a0" />
          <rect x="99" y="20" width="6" height="60" fill="#c9a0a0" />
          <rect x="0" y="10" width="120" height="8" rx="2" fill="#c9a0a0" />
          <rect x="5" y="25" width="110" height="5" fill="#c9a0a0" />
        </svg>
      </div>
      
      {/* Mountains in background */}
      <div className="fixed bottom-0 left-0 right-0 h-48 opacity-20 pointer-events-none z-0">
        <svg viewBox="0 0 400 100" preserveAspectRatio="none" className="w-full h-full">
          <path d="M0,100 L0,60 Q50,30 100,50 Q150,70 200,40 Q250,10 300,45 Q350,80 400,50 L400,100 Z" fill="#c9a0a0" />
          <path d="M0,100 L0,70 Q80,50 150,65 Q220,80 300,55 Q360,35 400,60 L400,100 Z" fill="#d4b3b3" opacity="0.7" />
        </svg>
      </div>
      
      {/* Falling petals canvas */}
      <canvas
        ref={canvasRef}
        className="fixed inset-0 pointer-events-none z-[1]"
        aria-hidden="true"
      />
    </>
  )
}
