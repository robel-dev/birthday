"use client"

import Image from "next/image"
import { useEffect, useRef, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { Mic, Rocket } from "lucide-react"
import { ContinueButton } from "@/components/continue-button"

const memoryCarouselImages = [
  "/images/IMG-20260204-WA0014.jpg",
  "/images/DSC05305.jpg",
  "/images/20251116_181854.jpg",
  "/images/IMG_20250106_131646_586.jpg",
  "/images/IMG-20260311-WA0004.jpg",
  "/images/IMG-20260128-WA0028.jpg",
  // "/images/IMG_20260118_111214_759.jpg",
  "/images/IMG-20260129-WA0001.jpg",
  "/images/20250221_175850585.jpg",
  "/images/baby.jpeg",
  "/images/icog.png",
  "/images/linkedin.png",
  "/images/IMG-20260203-WA0036.jpg",
  "/images/IMG_20250106_131601_611.jpg",
]

const timelineMilestones = [
  {
    date: "March 23, 2002",
    title: "Yene konjo you came into the world",
    line: "The day a beautiful life began, full of quiet strength, brilliance, and heart.",
    image: "/images/baby.jpeg",
  },
  {
    date: "May 2024",
    title: "Your first internship at iCog AGI Engineer journey jemere",
    line: "One of the first big steps in the future you are building with your own hands babye",
    image: "/images/IMG-20260311-WA0004.jpg",
  },
  {
    date: "September 2024",
    title: "Machine Learning Engineer at iCog",
    line: "A moment that reflected your discipline, talent, and how far you had already come. Betam yene fiker!",
    image: "/images/icog.png",
  },
  {
    date: "February 22, 2025",
    title: "Graduation",
    line: "A proud chapter, 3.97 yene konjo wow yene amazing you earned it through patience, hard work, and so much perseverance.",
    image: "/images/IMG-20260128-WA0028.jpg",
  },
  {
    date: "June 2025",
    title: "Kifiya Youth Advisory Group member",
    line: "Another sign that your voice belonged in rooms where real change begins.",
    image: "/images/IMG_20260118_111214_759.jpg",
  },
  {
    date: "July 2025",
    title: "International Service Director at Rotaract Club of Ra'ey",
    line: "Yene international director.",
    image: "/images/IMG_20250106_131646_586.jpg",
  },
  {
    date: "September 2025",
    title: "Mastercard Foundation Youth Advisory Communications Ambassador",
    line: "Yene MC Yene HOST Yene Eskista instructor lol .",
    image: "/images/DSC05305.jpg",
  },
  {
    date: "December 13, 2025",
    title: "We first met on LinkedIn",
    line: "The day your story quietly crossed into mine babye.",
    image: "/images/linkedin.png",
  },
  {
    date: "February 24, 2026",
    title: "Babye said yes to dating",
    line: "One gentle yes, and suddenly my days began to feel different.",
    image: "/images/IMG-20260129-WA0001.jpg",
  },
  {
    date: "March 03, 2026",
    title: "Yene fiker said yes to being my girlfriend",
    line: "One of the sweetest answers I have ever heard, and one I will always be grateful for.",
    image: "/images/20250221_175850585.jpg",
  },
]

const nasaVoiceNoteSrc = "/audio/space-explain"
const finalMessageVoiceNoteSrc = "/audio/message.mp3"

function scrollToSection(id: string) {
  const element = document.getElementById(id)
  if (!element) return

  const startY = window.scrollY
  const targetY = element.getBoundingClientRect().top + window.scrollY - 24
  const distance = targetY - startY
  const duration = 1800
  let startTime: number | null = null

  const easeInOutCubic = (progress: number) =>
    progress < 0.5 ? 4 * progress * progress * progress : 1 - Math.pow(-2 * progress + 2, 3) / 2

  const step = (timestamp: number) => {
    if (startTime === null) {
      startTime = timestamp
    }

    const elapsed = timestamp - startTime
    const progress = Math.min(elapsed / duration, 1)
    const easedProgress = easeInOutCubic(progress)

    window.scrollTo(0, startY + distance * easedProgress)

    if (progress < 1) {
      window.requestAnimationFrame(step)
    }
  }

  window.requestAnimationFrame(step)
}

export function HybridStoryRoute() {
  return (
    <main data-birthday-theme="hybrid" className="relative min-h-screen overflow-x-hidden bg-[#120c22] text-[#f8efff]">
      <PurpleBackground />

      <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-7xl flex-col px-6 py-8 md:px-10">
        <div className="flex flex-col gap-16 py-10 md:gap-24 md:py-14">
          <IntroSection />
          <MemoryPromptSection />
          <TimelineSection />
          <NasaSection />
          <WishSection />
          <FinalSection />
        </div>
      </div>
    </main>
  )
}

function PurpleBackground() {
  return (
    <>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(181,138,255,0.28),transparent_28%),radial-gradient(circle_at_20%_18%,rgba(244,114,182,0.14),transparent_20%),radial-gradient(circle_at_80%_12%,rgba(129,140,248,0.16),transparent_22%),linear-gradient(180deg,#120c22_0%,#171029_45%,#0e1020_100%)]" />
      <div className="absolute left-[-10rem] top-24 h-80 w-80 rounded-full bg-fuchsia-300/10 blur-3xl" />
      <div className="absolute right-[-6rem] top-16 h-96 w-96 rounded-full bg-violet-300/10 blur-3xl" />
      <div className="absolute bottom-[-10rem] left-1/2 h-[26rem] w-[26rem] -translate-x-1/2 rounded-full bg-indigo-300/10 blur-3xl" />
      <div className="absolute inset-0 opacity-45">
        {Array.from({ length: 56 }).map((_, index) => (
          <span
            key={index}
            className="absolute h-1 w-1 rounded-full bg-white"
            style={{
              left: `${(index * 17) % 100}%`,
              top: `${(index * 29) % 100}%`,
              opacity: 0.22 + (index % 4) * 0.12,
            }}
          />
        ))}
      </div>
    </>
  )
}

function IntroSection() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="flex min-h-[70vh] w-full max-w-4xl flex-col items-center justify-center self-center text-center"
    >
      <h1 className="mt-8 max-w-3xl font-serif text-5xl leading-tight text-white md:text-7xl">
        Happy Birthday,
        <br />
        Sweetheart <span aria-hidden="true">❤️</span>
      </h1>
      <p className="mt-6 max-w-2xl text-lg leading-8 text-white/72">
        I made this little thing for you yene fiker ❤️.
      </p>
      <ContinueButton onClick={() => scrollToSection("memory-prompt")} delay={0.35}>
        Start
      </ContinueButton>
    </motion.section>
  )
}

function MemoryPromptSection() {
  const marqueeImages = [...memoryCarouselImages, ...memoryCarouselImages]

  return (
    <motion.section
      id="memory-prompt"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="flex min-h-[80vh] w-full max-w-5xl flex-col items-center justify-center gap-8 self-center scroll-mt-24"
    >
      <div className="space-y-4 text-center">
        <p className="text-sm uppercase tracking-[0.32em] text-fuchsia-100/60">A little preview</p>
        <h2 className="font-serif text-4xl text-white md:text-6xl">A carousel of my favorite views of you.</h2>
        <p className="mx-auto max-w-2xl text-lg leading-8 text-white/72">
          A million little moments,
A thousand different smiles.
In every frame, a new surprise,
In every glance, the world stands still.
No lens could ever truly capture
The way my soul looks at you,
But I’ll spend forever enjoying the view. Oh what a view babye! what a view 😍
        </p>
      </div>

      <div className="w-full overflow-hidden rounded-[2rem] border border-white/10 bg-white/6 py-6 backdrop-blur-sm">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 75, repeat: Infinity, ease: "linear" }}
          className="flex w-max gap-4 px-4"
        >
          {marqueeImages.map((image, index) => (
            <div
              key={`${image}-${index}`}
              className="group relative w-[18rem] shrink-0 overflow-hidden rounded-[1.75rem] border border-white/10 bg-black/20 shadow-[0_18px_60px_rgba(0,0,0,0.18)]"
            >
              <div className="relative aspect-[4/5]">
                <Image
                  src={image}
                  alt={`Memory carousel image ${index + 1}`}
                  fill
                  priority={index < 3}
                  className="object-cover transition duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#120c22]/70 via-transparent to-transparent" />
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      <ContinueButton onClick={() => scrollToSection("timeline")} delay={0.4}>
        Continue downward
      </ContinueButton>
    </motion.section>
  )
}

function TimelineSection() {
  const [activeIndex, setActiveIndex] = useState(0)
  const activeMilestone = timelineMilestones[activeIndex]

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % timelineMilestones.length)
    }, 5600)

    return () => window.clearInterval(intervalId)
  }, [])

  return (
    <motion.section
      id="timeline"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="flex min-h-[85vh] w-full max-w-6xl flex-col items-center justify-center gap-8 self-center scroll-mt-24"
    >
      <div className="mx-auto flex w-full items-center justify-center px-4 md:px-0">
        <div className="flex w-full flex-col gap-8 rounded-[2rem] border border-white/10 bg-white/6 px-6 py-8 backdrop-blur-sm md:px-8">
          <div className="space-y-4 text-center">
            <p className="text-sm uppercase tracking-[0.32em] text-fuchsia-100/60">Timeline</p>
            <h2 className="font-serif text-4xl text-white md:text-6xl">The landmarks that shaped your story so far babye ❤️.</h2>
            <p className="mx-auto max-w-3xl text-lg leading-8 text-white/72">
              
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-[0.92fr_1.08fr] md:items-center">
            <div className="relative hidden h-[44rem] md:block">
              <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-white/10" />
              <motion.div
                className="absolute left-1/2 top-0 w-px -translate-x-1/2 bg-gradient-to-b from-fuchsia-200 via-violet-200 to-indigo-200"
                style={{ height: `${((activeIndex + 1) / timelineMilestones.length) * 100}%` }}
                transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
              />

              <div className="relative flex h-full flex-col justify-between py-4">
                {timelineMilestones.map((milestone, index) => (
                  <div key={milestone.title} className="relative flex items-center gap-4">
                    <div className="flex w-[calc(50%-1rem)] justify-end pr-6 text-right">
                      <span
                        className={`text-xs uppercase tracking-[0.22em] transition duration-500 ${
                          index <= activeIndex ? "text-fuchsia-100/80" : "text-white/28"
                        }`}
                      >
                        {milestone.date}
                      </span>
                    </div>
                    <div
                      className={`relative z-10 h-3.5 w-3.5 shrink-0 rounded-full border transition duration-500 ${
                        index === activeIndex
                          ? "border-fuchsia-100 bg-fuchsia-200 shadow-[0_0_20px_rgba(244,114,182,0.45)]"
                          : index < activeIndex
                            ? "border-fuchsia-100/60 bg-fuchsia-100/70"
                            : "border-white/20 bg-[#120c22]"
                      }`}
                    />
                    <div className="w-[calc(50%-1rem)] pl-6">
                      <span
                        className={`font-serif text-lg transition duration-500 ${
                          index === activeIndex ? "text-white" : "text-white/34"
                        }`}
                      >
                        {milestone.title}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex items-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeMilestone.title}
                  initial={{ opacity: 0, y: 18, scale: 0.985 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12, scale: 0.992 }}
                  transition={{ duration: 0.95, ease: [0.22, 1, 0.36, 1] }}
                  className="relative w-full rounded-[1.75rem] border border-white/10 bg-black/16 p-6 md:p-8"
                >
                  <div className="absolute right-5 top-5 h-16 w-16 overflow-hidden rounded-2xl border border-white/10 bg-white/6 shadow-[0_12px_32px_rgba(0,0,0,0.18)] md:h-20 md:w-20">
                    <Image
                      src={activeMilestone.image}
                      alt={activeMilestone.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <p className="text-xs uppercase tracking-[0.28em] text-fuchsia-100/60">
                    {activeMilestone.date}
                  </p>
                  <h3 className="mt-4 max-w-[calc(100%-5rem)] font-serif text-4xl leading-tight text-white md:max-w-[calc(100%-6rem)] md:text-5xl">
                    {activeMilestone.title}
                  </h3>
                  <p className="mt-5 max-w-xl text-lg leading-8 text-white/76">
                    {activeMilestone.line}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          <div className="md:hidden">
            <div className="grid gap-3">
              {timelineMilestones.map((milestone, index) => (
                <div
                  key={`${milestone.title}-mobile`}
                  className={`rounded-[1.25rem] border px-4 py-3 transition duration-500 ${
                    index === activeIndex ? "border-fuchsia-200/30 bg-fuchsia-200/10" : "border-white/10 bg-black/12"
                  }`}
                >
                  <p className="text-xs uppercase tracking-[0.22em] text-fuchsia-100/60">{milestone.date}</p>
                  <p className={`mt-2 font-serif ${index === activeIndex ? "text-white" : "text-white/45"}`}>
                    {milestone.title}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center">
        <ContinueButton onClick={() => scrollToSection("nasa-reveal")} delay={0.15}>
          Continue to the surprise
        </ContinueButton>
      </div>
    </motion.section>
  )
}

function NasaSection() {
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const [isVoicePlaying, setIsVoicePlaying] = useState(false)
  const [isTicketOpen, setIsTicketOpen] = useState(false)
  const [showQuestionPulse, setShowQuestionPulse] = useState(true)

  useEffect(() => {
    const timeoutId = window.setTimeout(() => {
      setShowQuestionPulse(false)
    }, 2600)

    return () => window.clearTimeout(timeoutId)
  }, [])

  const handleBoardingPassQuestionClick = async () => {
    const audio = audioRef.current
    if (!audio) return

    try {
      audio.currentTime = 0
      await audio.play()
      setIsVoicePlaying(true)
    } catch {
      setIsVoicePlaying(false)
    }
  }

  const handleOpenTicket = () => {
    setIsTicketOpen(true)
  }

  return (
    <motion.section
      id="nasa-reveal"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="flex min-h-[80vh] w-full max-w-5xl flex-col justify-center gap-6 self-center scroll-mt-24"
    >
      <div className="space-y-5 text-center">
        <p className="text-sm uppercase tracking-[0.32em] text-fuchsia-100/60"></p>
        <h2 className="font-serif text-4xl text-white md:text-6xl">One glowing surprise in the middle.</h2>
        <p className="mx-auto max-w-3xl text-lg leading-8 text-white/72">
          I sent your name among the stars, where even the Moon will learn your light,
              So when I look up at the night sky, I’ll know a part of you is shining back at me.
        </p>
      </div>

      <div className="relative overflow-hidden rounded-[2rem] border border-white/12 bg-[radial-gradient(circle_at_50%_18%,rgba(130,119,255,0.28),transparent_24%),linear-gradient(180deg,#161028_0%,#0f1022_100%)] p-5 shadow-[0_30px_120px_rgba(0,0,0,0.28)]">
        <div className="absolute inset-0 opacity-55">
          {Array.from({ length: 28 }).map((_, index) => (
            <span
              key={index}
              className="absolute h-1 w-1 rounded-full bg-white"
              style={{
                left: `${(index * 23) % 100}%`,
                top: `${(index * 13) % 100}%`,
                opacity: 0.25 + (index % 4) * 0.14,
              }}
            />
          ))}
        </div>

        <div className="relative rounded-[1.75rem] border border-fuchsia-100/10 bg-black/18 p-6 backdrop-blur-sm">
          <div className="flex items-center justify-between text-sm text-white/72">
            <span className="inline-flex items-center gap-2">
              <Rocket className="h-4 w-4 text-fuchsia-200" />
              Birthday mission
            </span>
            <motion.button
              type="button"
              onClick={handleBoardingPassQuestionClick}
              aria-label="Play the boarding pass voice note"
              animate={
                showQuestionPulse
                  ? {
                      scale: [1, 1.14, 0.97, 1.12, 1],
                      boxShadow: [
                        "0 0 0 rgba(244,114,182,0.00)",
                        "0 0 28px rgba(244,114,182,0.28)",
                        "0 0 0 rgba(244,114,182,0.00)",
                        "0 0 22px rgba(244,114,182,0.22)",
                        "0 0 0 rgba(244,114,182,0.00)",
                      ],
                    }
                  : {
                      scale: 1,
                      boxShadow: isVoicePlaying
                        ? "0 0 22px rgba(244,114,182,0.24)"
                        : "0 0 0 rgba(244,114,182,0.00)",
                    }
              }
              transition={{
                duration: showQuestionPulse ? 2.4 : 0.25,
                ease: "easeInOut",
              }}
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-fuchsia-200/18 bg-fuchsia-200/10 text-lg font-serif leading-none text-fuchsia-50 transition hover:border-fuchsia-100/30 hover:bg-fuchsia-200/14"
            >
              ?
            </motion.button>
          </div>

          <audio
            ref={audioRef}
            src={nasaVoiceNoteSrc}
            preload="none"
            onPlay={() => setIsVoicePlaying(true)}
            onPause={() => setIsVoicePlaying(false)}
            onEnded={() => setIsVoicePlaying(false)}
            onError={() => setIsVoicePlaying(false)}
          />

          <div className="mt-8 overflow-hidden rounded-[1.5rem] border border-white/10 bg-white/6 p-3 md:p-4">
            <div className="relative overflow-hidden rounded-[1.2rem] border border-white/10 bg-[radial-gradient(circle_at_top,rgba(244,114,182,0.12),transparent_32%),linear-gradient(180deg,rgba(24,18,44,0.96),rgba(13,15,30,0.94))] shadow-[0_18px_50px_rgba(0,0,0,0.22)] [perspective:1800px]">
              <motion.div
                initial={false}
                animate={{
                  scale: isTicketOpen ? 1 : 0.965,
                  filter: isTicketOpen ? "blur(0px)" : "blur(3px)",
                  opacity: isTicketOpen ? 1 : 0.52,
                  y: isTicketOpen ? 0 : 18,
                }}
                transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                className="relative rounded-[1rem] border border-white/10 bg-[#120c22]/40"
              >
                <Image
                  src="/boarding-pass.jpg"
                  alt="Birthday boarding pass"
                  width={1600}
                  height={900}
                  priority
                  className="h-auto w-full object-contain"
                />
              </motion.div>

              <motion.button
                type="button"
                onClick={handleOpenTicket}
                disabled={isTicketOpen}
                initial={false}
                animate={{
                  rotateX: isTicketOpen ? -94 : 0,
                  y: isTicketOpen ? -92 : 0,
                  opacity: isTicketOpen ? 0.1 : 1,
                }}
                transition={{ duration: 1.05, ease: [0.32, 0.72, 0, 1] }}
                style={{ transformOrigin: "top center" }}
                className="absolute inset-0 z-10 flex flex-col items-center justify-center rounded-[1rem] border border-white/14 bg-[linear-gradient(180deg,rgba(43,31,79,0.88),rgba(22,18,40,0.82))] px-6 text-center shadow-[0_16px_40px_rgba(0,0,0,0.24)] backdrop-blur-md disabled:pointer-events-none"
              >
                <div className="absolute inset-x-0 top-0 h-16 bg-[linear-gradient(180deg,rgba(255,255,255,0.14),transparent)]" />
                <div className="absolute inset-x-10 bottom-8 h-px bg-white/10" />
                <p className="relative text-[0.65rem] uppercase tracking-[0.38em] text-fuchsia-100/58">
                  
                </p>
                <div className="relative mt-5 inline-flex items-center rounded-full border border-fuchsia-200/24 bg-fuchsia-200/10 px-7 py-3 text-sm uppercase tracking-[0.32em] text-fuchsia-50 shadow-[0_12px_30px_rgba(0,0,0,0.18)]">
                  Open
                </div>
                <p className="relative mt-5 max-w-xs text-sm leading-6 text-white/62">
                  Yene fiker click on the '?' to hear explanation mn endehone
                </p>
              </motion.button>

              <AnimatePresence>
                {!isTicketOpen ? (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.35, ease: "easeOut" }}
                    className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.14),transparent_26%),linear-gradient(180deg,rgba(255,255,255,0.06),transparent_34%,rgba(9,10,20,0.10))]"
                  />
                ) : null}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center">
        <ContinueButton onClick={() => scrollToSection("wish-section")} delay={0.15}>
          Keep going
        </ContinueButton>
      </div>
    </motion.section>
  )
}

function WishSection() {
  return (
    <motion.section
      id="wish-section"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="flex min-h-[80vh] w-full max-w-5xl flex-col items-center justify-center gap-6 self-center text-center scroll-mt-24"
    >
      <div className="space-y-5 text-center">
        <p className="text-sm uppercase tracking-[0.32em] text-fuchsia-100/60">Section five</p>
        <h2 className="font-serif text-4xl text-white md:text-6xl">Another little moment for you.</h2>
        <p className="mx-auto max-w-3xl text-lg leading-8 text-white/72">
          Yene fiker Imagine we are next to each other babye, and I am whispering in your ear how much I love you, how proud I am of you, and how excited I am for everything that is coming next in your story.
        </p>
      </div>

      <div className="relative w-full overflow-hidden rounded-[2rem] border border-white/12 bg-[radial-gradient(circle_at_50%_18%,rgba(130,119,255,0.28),transparent_24%),linear-gradient(180deg,#161028_0%,#0f1022_100%)] p-5 shadow-[0_30px_120px_rgba(0,0,0,0.28)]">
        <div className="relative overflow-hidden rounded-[1.75rem] border border-fuchsia-100/10 bg-black/18 backdrop-blur-sm">
          <div className="relative aspect-[1380/752] w-full">
            <Image
              src="/hiyab-birthda.png"
              alt="Birthday section five artwork"
              fill
              priority
              className="object-cover"
            />
          </div>
        </div>
      </div>

      <div className="flex justify-center">
        <ContinueButton onClick={() => scrollToSection("final-message")} delay={0.15}>
          Open the final message
        </ContinueButton>
      </div>
    </motion.section>
  )
}

function FinalSection() {
  const waveformBars = [
    0.42, 0.78, 0.56, 0.92, 0.48, 0.74, 0.38, 0.86, 0.52, 0.68, 0.44, 0.8, 0.5, 0.72, 0.4, 0.9, 0.46, 0.76,
    0.58, 0.84, 0.43, 0.7, 0.49, 0.88,
  ]
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const [isFinalVoicePlaying, setIsFinalVoicePlaying] = useState(false)

  const handleFinalVoiceClick = async () => {
    const audio = audioRef.current
    if (!audio) return

    try {
      audio.currentTime = 0
      await audio.play()
      setIsFinalVoicePlaying(true)
    } catch {
      setIsFinalVoicePlaying(false)
    }
  }

  return (
    <motion.section
      id="final-message"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="flex min-h-[90vh] w-full max-w-4xl flex-col items-center justify-center self-center text-center scroll-mt-24"
    >
      <div className="rounded-full border border-fuchsia-200/16 bg-fuchsia-200/10 px-4 py-2 text-sm text-fuchsia-50/90">
        Final message
      </div>
      <h2 className="mt-8 font-serif text-5xl leading-tight text-white md:text-7xl">እንኳዕ ተወለድኪ</h2>
      <p className="mt-6 max-w-2xl text-lg leading-8 text-white/72">
         ርሑስ ዕለተ ልደት ጽብቅቲ ህያብዬ ናተይ ናይበይነይ 🎂 🎉 🎁
      </p>

      <button
        type="button"
        onClick={handleFinalVoiceClick}
        className="mt-8 w-full max-w-xl rounded-[2rem] border border-white/10 bg-white/6 p-6 text-left backdrop-blur-sm transition hover:border-fuchsia-200/24 hover:bg-white/8"
      >
        <audio
          ref={audioRef}
          src={finalMessageVoiceNoteSrc}
          preload="none"
          onPlay={() => setIsFinalVoicePlaying(true)}
          onPause={() => setIsFinalVoicePlaying(false)}
          onEnded={() => setIsFinalVoicePlaying(false)}
          onError={() => setIsFinalVoicePlaying(false)}
        />
        <div className="flex items-center gap-3 text-sm text-white/68">
          <motion.span
            animate={{
              scale: isFinalVoicePlaying ? [1, 1.08, 1] : 1,
              opacity: isFinalVoicePlaying ? [0.8, 1, 0.8] : 1,
            }}
            transition={{
              duration: 1.1,
              repeat: isFinalVoicePlaying ? Infinity : 0,
              ease: "easeInOut",
            }}
            className="inline-flex"
          >
            <Mic className="h-4 w-4 text-fuchsia-200" />
          </motion.span>
          
        </div>
        <div className="mt-5 flex h-14 items-center gap-1.5 overflow-hidden rounded-[1.25rem] border border-white/8 bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0.02))] px-3">
          {waveformBars.map((height, index) => (
            <div key={index} className="flex h-full flex-1 items-center justify-center">
              <motion.span
                animate={{
                  height: isFinalVoicePlaying
                    ? [`${Math.max(18, height * 30)}%`, `${Math.min(100, height * 112)}%`, `${Math.max(26, height * 54)}%`]
                    : `${Math.max(18, height * 42)}%`,
                  opacity: isFinalVoicePlaying ? [0.5, 1, 0.62] : 0.55,
                }}
                transition={{
                  duration: 0.9 + (index % 4) * 0.18,
                  repeat: isFinalVoicePlaying ? Infinity : 0,
                  ease: "easeInOut",
                  delay: index * 0.04,
                }}
                className="block w-full max-w-3 rounded-full bg-gradient-to-t from-fuchsia-200/85 via-violet-200/90 to-indigo-200/75 shadow-[0_0_18px_rgba(168,85,247,0.18)]"
              />
            </div>
          ))}
        </div>
        <p className="mt-5 text-base leading-7 text-white/78">
          I love you. I hope this year is soft with you, kind to you, and full of things that make you smile.
        </p>
      </button>

      <div className="mt-8 w-full max-w-[36rem]">
        <div className="relative aspect-[4/5] overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/6">
          <Image
            src="/images/20250221_175850585.jpg"
            alt="Final section image"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#120c22]/70 via-transparent to-transparent" />
        </div>
      </div>

      <p className="mt-10 text-center font-serif text-2xl text-fuchsia-50/88 md:text-3xl">Your ሀበን</p>
    </motion.section>
  )
}
