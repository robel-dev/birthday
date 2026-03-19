"use client"

import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { ArrowLeft, Mic, Rocket, Sparkles, Ticket } from "lucide-react"
import { ContinueButton } from "@/components/continue-button"

const slideshowMoments = [
  {
    title: "The first feeling",
    line: "This is where your voice can talk about the first time she felt different from everyone else.",
    note: "Pair this with one of your favorite photos or the first screenshot that still matters.",
    image: "/images/IMG-20260129-WA0001.jpg",
    chat: "I did not expect one conversation to stay with me like that.",
  },
  {
    title: "Us in messages",
    line: "Use a real line from your chats here, then let your narration explain why it still matters to you.",
    note: "A screenshot, a soft zoom, and one sentence at a time will feel more intimate than a busy collage.",
    image: "/images/IMG_20260118_111214_759.jpg",
    chat: "Somehow even the smallest messages started feeling important.",
  },
  {
    title: "What I wish for you",
    line: "This is the slide where you shift from memories into your birthday wish and let the next surprise land.",
    note: "It should feel like a breath before the NASA reveal.",
    image: "/images/20250221_175850585.jpg",
    chat: "I wanted to make you feel celebrated, seen, and loved.",
  },
]

const memoryCarouselImages = [
  "/images/IMG-20260204-WA0014.jpg",
  "/images/DSC05305.jpg",
  "/images/20251116_181854.jpg",
  "/images/IMG_20250106_131646_586.jpg",
  "/images/IMG-20260117-WA0019.jpg",
  "/images/IMG-20260311-WA0004.jpg",
]

const wishes = [
  {
    id: "joy",
    label: "More joy",
    message: "I hope this year gives you lightness, laughter, and more days that feel easy on your heart.",
  },
  {
    id: "adventure",
    label: "A big adventure",
    message: "I hope this year brings you beautiful surprises and the kind of memories you want to keep forever.",
  },
  {
    id: "us",
    label: "A little more us",
    message: "I hope we keep finding more ways to close the distance and make something real together.",
  },
]

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
  const [selectedWish, setSelectedWish] = useState<(typeof wishes)[number] | null>(null)

  return (
    <main data-birthday-theme="hybrid" className="relative min-h-screen overflow-hidden bg-[#120c22] text-[#f8efff]">
      <PurpleBackground />

      <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-7xl flex-col px-6 py-8 md:px-10">
        <div className="flex items-center justify-between gap-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/6 px-4 py-2 text-sm text-white/80 backdrop-blur-sm transition hover:border-white/20 hover:bg-white/10 hover:text-white"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to routes
          </Link>

          <div className="inline-flex items-center gap-2 rounded-full border border-fuchsia-200/20 bg-fuchsia-200/10 px-4 py-2 text-xs uppercase tracking-[0.24em] text-fuchsia-100/85">
            <Sparkles className="h-4 w-4" />
            Hybrid story route
          </div>
        </div>

        <div className="flex flex-col gap-16 py-10 md:gap-24 md:py-14">
          <IntroSection />
          <MemoryPromptSection />
          <SlideshowSection />
          <NasaSection />
          <WishSection selectedWish={selectedWish} onSelectWish={setSelectedWish} />
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
        I made this little journey for you yene fiker ❤️.
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
          I wanted this part to drift softly before the main slideshow begins.
        </p>
      </div>

      <div className="w-full overflow-hidden rounded-[2rem] border border-white/10 bg-white/6 py-6 backdrop-blur-sm">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
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

      <ContinueButton onClick={() => scrollToSection("slideshow")} delay={0.4}>
        Continue downward
      </ContinueButton>
    </motion.section>
  )
}

function SlideshowSection() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const currentMoment = slideshowMoments[currentSlide]

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slideshowMoments.length)
    }, 4200)

    return () => window.clearInterval(intervalId)
  }, [])

  return (
    <motion.section
      id="slideshow"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.08 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="flex min-h-screen w-full max-w-5xl flex-col gap-8 self-center scroll-mt-24"
      >
        <div className="space-y-4 text-center">
          <p className="text-sm uppercase tracking-[0.32em] text-fuchsia-100/60">Voiceover slideshow</p>
          <h2 className="font-serif text-4xl text-white md:text-6xl">A little carousel of us.</h2>
          <p className="mx-auto max-w-3xl text-lg leading-8 text-white/72">
            The photos move on their own now, like the story is opening by itself.
          </p>
        </div>

      <motion.article
        initial={{ opacity: 0, y: 36 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.65, ease: "easeOut" }}
        className="overflow-hidden rounded-[2rem] border border-white/12 bg-white/6 shadow-[0_30px_120px_rgba(0,0,0,0.22)] backdrop-blur-sm"
      >
        <div className="relative aspect-[4/3] overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ x: "18%", opacity: 0.7 }}
              animate={{ x: "0%", opacity: 1 }}
              exit={{ x: "-18%", opacity: 0.55 }}
              transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
              className="absolute inset-0"
            >
              <Image
                src={currentMoment.image}
                alt={currentMoment.title}
                fill
                priority={currentSlide === 0}
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#120c22] via-[#120c22]/20 to-transparent" />
            </motion.div>
          </AnimatePresence>

          <div className="absolute left-5 top-5 rounded-full border border-white/12 bg-black/20 px-4 py-2 text-xs uppercase tracking-[0.24em] text-white/75 backdrop-blur-sm">
            Slide {currentSlide + 1} / {slideshowMoments.length}
          </div>

          <div className="absolute bottom-5 left-5 right-5 space-y-4">
            <div className="inline-flex items-center gap-2 rounded-full border border-fuchsia-200/16 bg-fuchsia-200/10 px-4 py-2 text-xs text-fuchsia-50/90 backdrop-blur-sm">
              <Mic className="h-3.5 w-3.5" />
              Voiceover moment
            </div>
            <div>
              <AnimatePresence mode="wait">
                <motion.div
                  key={`copy-${currentSlide}`}
                  initial={{ x: 28, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: -28, opacity: 0 }}
                  transition={{ duration: 0.55, ease: "easeOut" }}
                >
                  <h3 className="max-w-xl font-serif text-4xl leading-tight text-white md:text-5xl">
                    {currentMoment.title}
                  </h3>
                  <p className="mt-3 max-w-xl text-base leading-7 text-white/72">{currentMoment.line}</p>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>

        <div className="grid gap-5 p-6 md:grid-cols-2">
          <div className="rounded-[1.75rem] border border-white/10 bg-black/16 p-5">
            <p className="text-xs uppercase tracking-[0.28em] text-fuchsia-100/55">What this slide does</p>
            <AnimatePresence mode="wait">
              <motion.p
                key={`note-${currentSlide}`}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.45, ease: "easeOut" }}
                className="mt-4 text-lg leading-8 text-white/80"
              >
                {currentMoment.note}
              </motion.p>
            </AnimatePresence>
          </div>
          <div className="rounded-[1.75rem] border border-white/10 bg-black/16 p-5">
            <p className="text-xs uppercase tracking-[0.28em] text-fuchsia-100/55">Chat texture</p>
            <AnimatePresence mode="wait">
              <motion.p
                key={`chat-${currentSlide}`}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.45, ease: "easeOut" }}
                className="mt-4 rounded-[1.25rem] bg-black/18 px-4 py-3 text-base leading-7 text-white/80"
              >
                {currentMoment.chat}
              </motion.p>
            </AnimatePresence>
          </div>
        </div>

        <div className="flex items-center justify-center gap-2 px-6 pb-6">
          {slideshowMoments.map((moment, index) => (
            <span
              key={moment.title}
              className={`h-2.5 rounded-full transition-all duration-500 ${
                index === currentSlide ? "w-10 bg-fuchsia-200" : "w-2.5 bg-white/20"
              }`}
            />
          ))}
        </div>
      </motion.article>

      <div className="flex justify-center">
        <ContinueButton onClick={() => scrollToSection("nasa-reveal")} delay={0.15}>
          Continue to the surprise
        </ContinueButton>
      </div>
    </motion.section>
  )
}

function NasaSection() {
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
        <p className="text-sm uppercase tracking-[0.32em] text-fuchsia-100/60">Midpoint reveal</p>
        <h2 className="font-serif text-4xl text-white md:text-6xl">One glowing surprise in the middle.</h2>
        <p className="mx-auto max-w-3xl text-lg leading-8 text-white/72">
          This should feel like the signature visual moment. It works because the rest of the route is softer
          and more personal, so the ticket stands out instead of competing with everything else.
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
            <Ticket className="h-4 w-4 text-fuchsia-200" />
          </div>

          <div className="mt-8 space-y-6">
            <div>
              <p className="text-xs uppercase tracking-[0.28em] text-white/50">Passenger</p>
              <p className="mt-2 font-serif text-4xl text-white">Her Name</p>
            </div>

            <div className="grid gap-4 rounded-[1.5rem] border border-white/10 bg-white/6 p-4 md:grid-cols-3">
              <div>
                <p className="text-xs uppercase tracking-[0.24em] text-white/45">From</p>
                <p className="mt-2 text-lg text-white/84">Earth</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.24em] text-white/45">To</p>
                <p className="mt-2 text-lg text-white/84">Mars & Beyond</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.24em] text-white/45">Seat</p>
                <p className="mt-2 text-lg text-fuchsia-100">03.23</p>
              </div>
            </div>

            <p className="max-w-md text-sm leading-7 text-white/68">
              Replace the placeholder name with hers and keep the copy extremely short so it lands as a visual gift.
            </p>
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

function WishSection({
  selectedWish,
  onSelectWish,
}: {
  selectedWish: (typeof wishes)[number] | null
  onSelectWish: (wish: (typeof wishes)[number]) => void
}) {
  return (
    <motion.section
      id="wish-section"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="flex min-h-[80vh] w-full max-w-5xl flex-col items-center justify-center gap-8 self-center text-center scroll-mt-24"
    >
      <div className="space-y-4">
        <p className="text-sm uppercase tracking-[0.32em] text-fuchsia-100/60">Small interaction</p>
        <h2 className="font-serif text-4xl text-white md:text-6xl">Choose a wish for her.</h2>
        <p className="mx-auto max-w-2xl text-lg leading-8 text-white/72">
          This keeps the route interactive without breaking the emotion. One tap, one reveal, then the ending.
        </p>
      </div>

      <div className="grid w-full gap-4 md:grid-cols-3">
        {wishes.map((wish) => (
          <button
            key={wish.id}
            type="button"
            onClick={() => onSelectWish(wish)}
            className={`rounded-[1.75rem] border px-5 py-5 text-left transition ${
              selectedWish?.id === wish.id
                ? "border-fuchsia-200/26 bg-fuchsia-200/12 text-white shadow-[0_18px_60px_rgba(162,129,255,0.18)]"
                : "border-white/10 bg-white/6 text-white/78 hover:bg-white/8"
            }`}
          >
            <p className="text-xs uppercase tracking-[0.24em] text-fuchsia-100/58">Wish</p>
            <p className="mt-3 text-xl text-white">{wish.label}</p>
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        {selectedWish ? (
          <motion.div
            key={selectedWish.id}
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            className="max-w-2xl rounded-[2rem] border border-white/10 bg-white/6 px-6 py-6 backdrop-blur-sm"
          >
            <p className="text-lg leading-8 text-white/80">{selectedWish.message}</p>
            <ContinueButton onClick={() => scrollToSection("final-message")} delay={0.15}>
              Open the final message
            </ContinueButton>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </motion.section>
  )
}

function FinalSection() {
  const finalGallery = [
    "/images/IMG_20250106_131646_586.jpg",
    "/images/IMG-20260117-WA0019.jpg",
    "/images/IMG-20260311-WA0004.jpg",
  ]

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
      <h2 className="mt-8 font-serif text-5xl leading-tight text-white md:text-7xl">Happy Birthday.</h2>
      <p className="mt-6 max-w-2xl text-lg leading-8 text-white/72">
        This is where your real closing words should go. Keep it direct, let your voice do most of the work,
        and end with the clearest line in the whole route.
      </p>

      <div className="mt-8 w-full max-w-xl rounded-[2rem] border border-white/10 bg-white/6 p-6 text-left backdrop-blur-sm">
        <div className="flex items-center gap-3 text-sm text-white/68">
          <Mic className="h-4 w-4 text-fuchsia-200" />
          Final voice note placeholder
        </div>
        <div className="mt-5 h-2 rounded-full bg-white/10">
          <div className="h-full w-[46%] rounded-full bg-gradient-to-r from-fuchsia-200 via-violet-200 to-indigo-200" />
        </div>
        <p className="mt-5 text-base leading-7 text-white/78">
          I love you. I hope this year is soft with you, kind to you, and full of things that make you smile.
        </p>
      </div>

      <div className="mt-8 grid w-full max-w-3xl gap-4 md:grid-cols-3">
        {finalGallery.map((image, index) => (
          <div
            key={image}
            className="relative aspect-[4/5] overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/6"
          >
            <Image
              src={image}
              alt={`Final gallery image ${index + 1}`}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#120c22]/70 via-transparent to-transparent" />
          </div>
        ))}
      </div>
    </motion.section>
  )
}
