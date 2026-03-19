"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import {
  ArrowLeft,
  Film,
  Heart,
  ImageIcon,
  MessageCircle,
  Mic,
  Play,
  Rocket,
  Sparkles,
  Ticket,
} from "lucide-react"

type SlideshowOption = {
  id: "cinematic" | "choice" | "chatbook" | "nasa" | "scrapbook"
  eyebrow: string
  title: string
  description: string
  strengths: string[]
  fit: string
}

const slideshowOptions: SlideshowOption[] = [
  {
    id: "cinematic",
    eyebrow: "Best overall direction",
    title: "Cinematic Voiceover",
    description:
      "Full-screen photos, your narration, soft captions, and slow transitions. This feels the most intimate because your voice carries the whole story.",
    strengths: ["Strongest emotional impact", "Simple structure", "Lets photos and voice breathe"],
    fit: "Use this as the backbone of the site.",
  },
  {
    id: "choice",
    eyebrow: "Light interaction",
    title: "Choice-Led Journey",
    description:
      "She taps between a few memory prompts like \"Open a memory\" or \"Make a wish\" and each choice reveals a different slide sequence.",
    strengths: ["Cute and playful", "Feels interactive", "Lets you hide little surprises"],
    fit: "Keep the choices small so it stays romantic, not game-like.",
  },
  {
    id: "chatbook",
    eyebrow: "Relationship texture",
    title: "Chatbook Story",
    description:
      "A slideshow shaped around your conversations, voice notes, timestamps, and photos so the whole thing feels pulled from your real relationship.",
    strengths: ["Very personal", "Great for online-first love story", "Works with screenshots and photos"],
    fit: "Perfect if your chats are a big part of the relationship.",
  },
  {
    id: "nasa",
    eyebrow: "Signature surprise",
    title: "NASA Keepsake Interlude",
    description:
      "Not the whole slideshow, but one gorgeous section in the middle where her name, destination, and birthday are framed like a cosmic ticket.",
    strengths: ["Memorable visual moment", "Fits your current starry theme", "Great mid-story reveal"],
    fit: "Best used as one feature slide, not the main structure.",
  },
  {
    id: "scrapbook",
    eyebrow: "Warm and handmade",
    title: "Scrapbook Polaroids",
    description:
      "Photos feel pinned, taped, and handwritten. It is softer and more handmade than a cinematic deck.",
    strengths: ["Cute and tactile", "Good for many photos", "Feels handmade even on screen"],
    fit: "Great if you want a softer, cozy birthday tone.",
  },
]

const buildSteps = [
  "Intro screen with one clear button: Begin.",
  "A short memory prompt to pull her in.",
  "Voiceover slideshow with your favorite photos and chat snippets.",
  "NASA name ticket as the special midpoint surprise.",
  "A make-a-wish screen or one small interaction before the ending.",
  "Final birthday message with your voice and a direct I love you.",
]

export default function SlideshowOptionsPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#120f1d] text-[#f9f1e8]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(248,180,108,0.20),transparent_30%),radial-gradient(circle_at_80%_20%,rgba(255,143,171,0.18),transparent_25%),linear-gradient(180deg,#120f1d_0%,#191423_45%,#0d0f1f_100%)]" />
      <div className="absolute left-[-8rem] top-24 h-72 w-72 rounded-full bg-amber-300/10 blur-3xl" />
      <div className="absolute right-[-4rem] top-48 h-80 w-80 rounded-full bg-rose-300/10 blur-3xl" />

      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col gap-10 px-6 py-10 md:px-10 md:py-14">
        <header className="flex flex-col gap-6 rounded-[2rem] border border-white/10 bg-white/5 p-6 backdrop-blur-sm md:p-8">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <Link
              href="/"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/10 px-4 py-2 text-sm text-white/80 transition hover:border-white/20 hover:bg-white/10 hover:text-white"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to routes
            </Link>
            <div className="inline-flex items-center gap-2 rounded-full border border-amber-200/20 bg-amber-100/10 px-4 py-2 text-sm text-amber-100/80">
              <Sparkles className="h-4 w-4" />
              Visual option board
            </div>
          </div>

          <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
            <div className="space-y-5">
              <p className="text-sm uppercase tracking-[0.35em] text-amber-100/65">Birthday slideshow directions</p>
              <h1 className="max-w-4xl font-serif text-4xl leading-tight text-white md:text-6xl">
                A page to compare the beautiful ways this birthday story could feel.
              </h1>
              <p className="max-w-3xl text-base leading-7 text-white/70 md:text-lg">
                I turned your ideas into visual concepts: voiceover film, choice-based reveal, chatbook story,
                NASA surprise, and scrapbook mode. The best direction is the one where your voice leads and the
                interactions stay light.
              </p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="rounded-[1.75rem] border border-emerald-200/20 bg-emerald-100/10 p-5 shadow-[0_20px_80px_rgba(0,0,0,0.18)]"
            >
              <p className="text-xs uppercase tracking-[0.3em] text-emerald-100/65">Recommendation</p>
              <h2 className="mt-3 font-serif text-3xl text-white">Hybrid build</h2>
              <p className="mt-3 text-sm leading-6 text-white/72">
                Use the cinematic slideshow as the main body, then fold in one choice moment, a few chat snippets,
                and one NASA reveal so the site feels personal without getting crowded.
              </p>
            </motion.div>
          </div>
        </header>

        <section className="grid gap-6 lg:grid-cols-2">
          {slideshowOptions.map((option, index) => (
            <OptionCard key={option.id} option={option} index={index} />
          ))}
        </section>

        <section className="rounded-[2rem] border border-white/10 bg-white/5 p-6 backdrop-blur-sm md:p-8">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="space-y-4">
              <p className="text-sm uppercase tracking-[0.35em] text-amber-100/60">Suggested structure</p>
              <h2 className="font-serif text-3xl text-white md:text-4xl">If you want one final version, build this.</h2>
              <p className="max-w-xl text-base leading-7 text-white/70">
                This keeps the site focused and gives every idea a job. The slideshow does the emotional work,
                the NASA ticket becomes the highlight, and the interaction stays simple.
              </p>
            </div>

            <div className="grid gap-3">
              {buildSteps.map((step, index) => (
                <div
                  key={step}
                  className="flex items-start gap-4 rounded-2xl border border-white/10 bg-black/10 px-4 py-4"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-amber-200/20 bg-amber-100/10 font-serif text-lg text-amber-100">
                    {index + 1}
                  </div>
                  <p className="pt-1 text-base text-white/78">{step}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}

function OptionCard({ option, index }: { option: SlideshowOption; index: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 32 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.65, delay: index * 0.08, ease: "easeOut" }}
      className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 backdrop-blur-sm"
    >
      <div className="grid gap-0 xl:grid-cols-[0.95fr_1.05fr]">
        <div className="border-b border-white/10 p-5 xl:border-r xl:border-b-0 xl:p-6">
          <Preview optionId={option.id} />
        </div>
        <div className="flex flex-col gap-5 p-5 xl:p-6">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-amber-100/60">{option.eyebrow}</p>
            <h3 className="mt-3 font-serif text-3xl text-white">{option.title}</h3>
            <p className="mt-3 text-sm leading-6 text-white/72">{option.description}</p>
          </div>

          <div className="flex flex-wrap gap-2">
            {option.strengths.map((strength) => (
              <span
                key={strength}
                className="rounded-full border border-white/10 bg-black/10 px-3 py-1.5 text-xs tracking-[0.12em] text-white/75"
              >
                {strength}
              </span>
            ))}
          </div>

          <div className="rounded-2xl border border-amber-200/15 bg-amber-100/8 p-4">
            <p className="text-xs uppercase tracking-[0.28em] text-amber-100/55">Best use</p>
            <p className="mt-2 text-sm leading-6 text-white/76">{option.fit}</p>
          </div>
        </div>
      </div>
    </motion.article>
  )
}

function Preview({ optionId }: { optionId: SlideshowOption["id"] }) {
  switch (optionId) {
    case "cinematic":
      return <CinematicPreview />
    case "choice":
      return <ChoicePreview />
    case "chatbook":
      return <ChatbookPreview />
    case "nasa":
      return <NasaPreview />
    case "scrapbook":
      return <ScrapbookPreview />
    default:
      return null
  }
}

function CinematicPreview() {
  return (
    <div className="relative aspect-[4/3] overflow-hidden rounded-[1.5rem] border border-white/10 bg-black/30">
      <Image
        src="/placeholder-user.jpg"
        alt="Cinematic slideshow preview"
        fill
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
      <div className="absolute left-4 top-4 flex items-center gap-2 rounded-full border border-white/15 bg-black/35 px-3 py-1.5 text-xs uppercase tracking-[0.25em] text-white/80">
        <Film className="h-3.5 w-3.5" />
        Slide 03 / 09
      </div>
      <div className="absolute bottom-4 left-4 right-4 space-y-4">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1.5 text-xs text-white/85 backdrop-blur-sm">
          <Mic className="h-3.5 w-3.5" />
          Your voice plays over this moment
        </div>
        <div>
          <p className="max-w-sm font-serif text-3xl leading-tight text-white">You made my world gentler.</p>
          <p className="mt-2 max-w-sm text-sm leading-6 text-white/72">
            Best for a soft fade, slow zoom, and one short sentence at a time.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <button className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-black">
            <Play className="ml-0.5 h-4 w-4 fill-current" />
          </button>
          <div className="flex-1 space-y-2">
            <div className="h-1.5 rounded-full bg-white/15">
              <div className="h-full w-[42%] rounded-full bg-amber-200" />
            </div>
            <div className="flex gap-1.5">
              {[40, 80, 55, 65, 28, 74, 44, 70, 32, 60].map((height, index) => (
                <span
                  key={index}
                  className="w-1 rounded-full bg-white/65"
                  style={{ height }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function ChoicePreview() {
  const buttons = ["Open a memory", "Hear something sweet", "Make a wish"]

  return (
    <div className="relative aspect-[4/3] overflow-hidden rounded-[1.5rem] border border-white/10 bg-[linear-gradient(180deg,rgba(28,20,40,0.95),rgba(16,12,26,1))] p-4">
      <div className="grid gap-3">
        {buttons.map((button, index) => (
          <button
            key={button}
            className={`rounded-2xl border px-4 py-3 text-left text-sm transition ${
              index === 1
                ? "border-amber-200/30 bg-amber-100/10 text-white shadow-[0_0_30px_rgba(248,180,108,0.15)]"
                : "border-white/10 bg-white/5 text-white/75"
            }`}
          >
            {button}
          </button>
        ))}
      </div>
      <div className="mt-4 grid gap-3 md:grid-cols-2">
        <div className="rounded-[1.25rem] border border-white/10 bg-black/20 p-4">
          <p className="text-xs uppercase tracking-[0.25em] text-rose-100/55">Unlocked</p>
          <p className="mt-3 font-serif text-2xl text-white">A little audio love note</p>
          <p className="mt-2 text-sm leading-6 text-white/70">
            Her tap opens the next mini-sequence instead of sending her down a separate route.
          </p>
        </div>
        <div className="rounded-[1.25rem] border border-white/10 bg-gradient-to-br from-rose-200/10 to-amber-200/10 p-4">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/15 px-3 py-1 text-xs text-white/70">
            <Heart className="h-3.5 w-3.5" />
            Soft branching
          </div>
          <div className="space-y-2">
            <div className="h-2 rounded-full bg-white/10">
              <div className="h-full w-1/3 rounded-full bg-rose-200" />
            </div>
            <div className="h-2 rounded-full bg-white/10">
              <div className="h-full w-2/3 rounded-full bg-amber-200" />
            </div>
            <div className="h-2 rounded-full bg-white/10">
              <div className="h-full w-1/2 rounded-full bg-white/80" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function ChatbookPreview() {
  return (
    <div className="relative aspect-[4/3] overflow-hidden rounded-[1.5rem] border border-white/10 bg-[linear-gradient(180deg,rgba(20,21,35,0.98),rgba(14,15,26,1))] p-4">
      <div className="mx-auto flex h-full max-w-[22rem] flex-col overflow-hidden rounded-[1.75rem] border border-white/10 bg-[#11131e] shadow-[0_20px_60px_rgba(0,0,0,0.35)]">
        <div className="flex items-center justify-between border-b border-white/10 px-4 py-3 text-sm text-white/70">
          <span className="inline-flex items-center gap-2">
            <MessageCircle className="h-4 w-4" />
            The story of us
          </span>
          <span>09:41</span>
        </div>
        <div className="relative h-40">
          <Image
            src="/placeholder.jpg"
            alt="Chatbook slideshow preview"
            fill
            className="object-cover opacity-80"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#11131e] via-transparent to-transparent" />
        </div>
        <div className="flex flex-1 flex-col gap-3 px-4 py-4 text-sm">
          <div className="max-w-[80%] rounded-2xl rounded-bl-md bg-white/7 px-3 py-2 text-white/76">
            I still remember how our first long conversation felt.
          </div>
          <div className="ml-auto max-w-[80%] rounded-2xl rounded-br-md bg-emerald-200/18 px-3 py-2 text-white">
            Like I had known you longer than I actually had.
          </div>
          <div className="max-w-[85%] rounded-2xl rounded-bl-md bg-white/7 px-3 py-2 text-white/76">
            Then the slide changes, your voice comes in, and the next memory fades up.
          </div>
        </div>
      </div>
    </div>
  )
}

function NasaPreview() {
  return (
    <div className="relative aspect-[4/3] overflow-hidden rounded-[1.5rem] border border-white/10 bg-[radial-gradient(circle_at_50%_20%,rgba(74,94,176,0.55),transparent_26%),linear-gradient(180deg,#0d1020_0%,#090b16_100%)] p-5">
      <div className="absolute inset-0 opacity-50">
        {Array.from({ length: 36 }).map((_, index) => (
          <span
            key={index}
            className="absolute h-1 w-1 rounded-full bg-white"
            style={{
              left: `${(index * 19) % 100}%`,
              top: `${(index * 11) % 100}%`,
              opacity: 0.35 + ((index % 5) * 0.1),
            }}
          />
        ))}
      </div>
      <div className="relative flex h-full flex-col justify-between rounded-[1.5rem] border border-amber-100/15 bg-black/20 p-4 backdrop-blur-sm">
        <div className="flex items-center justify-between text-sm text-white/75">
          <span className="inline-flex items-center gap-2">
            <Rocket className="h-4 w-4 text-amber-200" />
            Cosmic interlude
          </span>
          <Ticket className="h-4 w-4 text-amber-200" />
        </div>
        <div className="space-y-4">
          <div className="inline-flex rounded-full border border-white/10 bg-white/6 px-3 py-1 text-xs uppercase tracking-[0.25em] text-white/70">
            Boarding pass
          </div>
          <div className="grid gap-4 rounded-[1.35rem] border border-amber-100/15 bg-[linear-gradient(135deg,rgba(255,255,255,0.06),rgba(255,255,255,0.02))] p-4 md:grid-cols-[1fr_auto]">
            <div className="space-y-3">
              <p className="text-xs uppercase tracking-[0.25em] text-white/55">Passenger</p>
              <p className="font-serif text-3xl text-white">Her Name</p>
              <div className="flex gap-5 text-sm text-white/70">
                <div>
                  <p className="text-white/45">From</p>
                  <p>Earth</p>
                </div>
                <div>
                  <p className="text-white/45">To</p>
                  <p>Mars & Beyond</p>
                </div>
              </div>
            </div>
            <div className="rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-right">
              <p className="text-xs uppercase tracking-[0.25em] text-white/45">Seat</p>
              <p className="font-serif text-2xl text-amber-200">03.23</p>
            </div>
          </div>
        </div>
        <p className="max-w-sm text-sm leading-6 text-white/68">
          This works best as one luminous reveal in the middle of a softer photo story.
        </p>
      </div>
    </div>
  )
}

function ScrapbookPreview() {
  return (
    <div className="relative aspect-[4/3] overflow-hidden rounded-[1.5rem] border border-white/10 bg-[linear-gradient(180deg,#f7ebdf_0%,#f2e2d1_100%)] p-5 text-[#533b32]">
      <div className="absolute left-10 top-6 h-12 w-28 rotate-[-9deg] rounded-sm bg-rose-200/50 blur-md" />
      <div className="absolute right-8 top-10 h-12 w-24 rotate-[6deg] rounded-sm bg-amber-200/45 blur-md" />
      <div className="relative h-full">
        <div className="absolute left-2 top-8 w-[48%] rotate-[-8deg] rounded-[1.25rem] border border-black/8 bg-white p-3 shadow-[0_20px_40px_rgba(83,59,50,0.12)]">
          <div className="relative aspect-[4/5] overflow-hidden rounded-xl bg-stone-200">
            <Image
              src="/placeholder-user.jpg"
              alt="Scrapbook preview portrait"
              fill
              className="object-cover"
            />
          </div>
          <p className="mt-3 font-serif text-xl">my favorite smile</p>
        </div>

        <div className="absolute right-2 top-2 w-[42%] rotate-[7deg] rounded-[1.25rem] border border-black/8 bg-white p-3 shadow-[0_20px_40px_rgba(83,59,50,0.12)]">
          <div className="relative aspect-square overflow-hidden rounded-xl bg-stone-200">
            <Image
              src="/placeholder.jpg"
              alt="Scrapbook preview landscape"
              fill
              className="object-cover"
            />
          </div>
          <p className="mt-3 text-sm italic text-[#6d5244]">the kind of page that feels handmade</p>
        </div>

        <div className="absolute bottom-3 left-[24%] w-[52%] rotate-[-2deg] rounded-[1.25rem] border border-black/8 bg-[#fff8f1] p-4 shadow-[0_20px_40px_rgba(83,59,50,0.12)]">
          <div className="mb-2 inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#8f6f5d]">
            <ImageIcon className="h-3.5 w-3.5" />
            Notes
          </div>
          <p className="font-serif text-2xl">Happy birthday, love.</p>
          <p className="mt-2 text-sm leading-6 text-[#6d5244]">
            Warm colors, handwritten-style captions, taped-photo layouts, and tiny pieces of conversation.
          </p>
        </div>
      </div>
    </div>
  )
}
