"use client"

import { motion } from "framer-motion"

const finalLines = [
  "Right now we are in two different places.",
  "Finland.",
  "Ethiopia.",
  "But somehow…",
  "I still found you.",
]

export function FinalSection() {
  return (
    <section className="min-h-screen w-full flex flex-col items-center justify-center px-6 py-20 relative z-10">
      <div className="flex flex-col items-center gap-8 max-w-lg">
        {finalLines.map((line, index) => (
          <motion.p
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ 
              duration: 1, 
              delay: 0.5 + index * 0.8, 
              ease: "easeOut" 
            }}
            className={`font-sans text-lg md:text-xl text-center ${
              index === 1 || index === 2 
                ? "text-primary font-medium" 
                : "text-foreground/90"
            }`}
          >
            {line}
          </motion.p>
        ))}
      </div>
      
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, delay: 5, ease: "easeOut" }}
        className="mt-20"
      >
        <h2 className="font-serif text-4xl md:text-6xl lg:text-7xl text-center text-primary tracking-wide">
          Happy Birthday.
        </h2>
      </motion.div>
      
      {/* Video placeholder */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 6.5, ease: "easeOut" }}
        className="mt-16 w-full max-w-sm aspect-video rounded-xl border border-primary/20 bg-card/30 backdrop-blur-sm flex items-center justify-center"
      >
        <p className="text-muted-foreground/50 text-sm font-sans">A personal message</p>
      </motion.div>
      
      {/* Fade ending with heart */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 2, delay: 7.5, ease: "easeOut" }}
        className="mt-20 mb-10 text-primary/60"
      >
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 24 24" 
          fill="currentColor"
          className="w-8 h-8"
          aria-hidden="true"
        >
          <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
        </svg>
      </motion.div>
    </section>
  )
}
