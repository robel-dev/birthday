import Link from "next/link"

export default function HomePage() {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-background px-6 py-16">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(212,175,55,0.18),transparent_35%),linear-gradient(180deg,rgba(10,10,26,0.96),rgba(10,10,26,1))]" />
      <div className="relative z-10 mx-auto flex w-full max-w-5xl flex-col items-center gap-10 text-center">
        <div className="space-y-4">
          <p className="font-sans text-sm uppercase tracking-[0.35em] text-primary/80">Choose a route</p>
          <h1 className="font-serif text-4xl text-foreground md:text-6xl">Three versions of the same journey</h1>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Sakura, Starry Night, and the new hybrid story now live on separate routes so each experience has its
            own URL.
          </p>
        </div>
        <div className="grid w-full gap-6 md:grid-cols-3">
          <Link
            href="/starry-night"
            className="group rounded-[2rem] border border-primary/20 bg-white/5 p-8 text-left backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-primary/40 hover:bg-white/8"
          >
            <p className="font-sans text-sm uppercase tracking-[0.3em] text-primary/70">Route One</p>
            <h2 className="mt-4 font-serif text-3xl text-foreground">Starry Night</h2>
            <p className="mt-4 text-base text-muted-foreground">
              The original midnight palette with the star field background.
            </p>
          </Link>
          <Link
            href="/sakura"
            className="group rounded-[2rem] border border-primary/20 bg-white/5 p-8 text-left backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-primary/40 hover:bg-white/8"
          >
            <p className="font-sans text-sm uppercase tracking-[0.3em] text-primary/70">Route Two</p>
            <h2 className="mt-4 font-serif text-3xl text-foreground">Sakura</h2>
            <p className="mt-4 text-base text-muted-foreground">
              The softer blossom palette with the sakura background.
            </p>
          </Link>
          <Link
            href="/hybrid-story"
            className="group rounded-[2rem] border border-primary/20 bg-white/5 p-8 text-left backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-primary/40 hover:bg-white/8"
          >
            <p className="font-sans text-sm uppercase tracking-[0.3em] text-primary/70">Route Three</p>
            <h2 className="mt-4 font-serif text-3xl text-foreground">Hybrid Story</h2>
            <p className="mt-4 text-base text-muted-foreground">
              The new purple route based on the suggested slideshow structure.
            </p>
          </Link>
        </div>
        <Link
          href="/slideshow-options"
          className="inline-flex items-center rounded-full border border-primary/20 bg-white/5 px-6 py-3 text-sm uppercase tracking-[0.25em] text-primary/80 transition duration-300 hover:-translate-y-0.5 hover:border-primary/40 hover:bg-white/8"
        >
          View Slideshow Options
        </Link>
      </div>
    </main>
  )
}
