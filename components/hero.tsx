import { ArrowDown, Sparkles } from "lucide-react";

export function Hero() {
  return (
    <section className="relative flex min-h-[90svh] flex-col items-center justify-center px-4 pt-32 pb-16 text-center">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/3 left-1/2 -z-10 size-72 -translate-x-1/2 rotate-45 rounded-[3rem] bg-glow blur-3xl sm:size-[28rem]"
      />

      <span className="inline-flex items-center gap-2 rounded-full border border-border bg-accent-soft px-3 py-1 text-xs font-medium text-accent-foreground sm:text-sm">
        <Sparkles className="size-4" aria-hidden="true" />
        Dawn to Dusk in 650ms
      </span>

      <h1 className="mt-6 max-w-4xl font-heading text-5xl leading-[1.05] font-bold tracking-tight text-balance sm:text-6xl lg:text-7xl">
        Shift from dawn to <span className="text-primary">dusk</span> in one
        click.
      </h1>

      <p className="mt-6 max-w-xl text-base text-muted-foreground sm:text-lg">
        Lumen Shift is a small theme switcher for Next.js. The new theme grows
        out of the button as a diamond, your choice is saved, and the page
        never flashes the wrong colors on load.
      </p>

      <div className="mt-10 flex flex-col items-center gap-3 sm:flex-row">
        <a
          href="#demo"
          className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 font-medium text-primary-foreground shadow-lg shadow-glow transition-transform hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        >
          Try the toggle
          <ArrowDown className="size-4" aria-hidden="true" />
        </a>
        <a
          href="#code"
          className="inline-flex items-center rounded-full border border-border bg-card px-6 py-3 font-medium transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        >
          See the code
        </a>
      </div>
    </section>
  );
}
