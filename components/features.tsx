import { Accessibility, Diamond, HardDrive, Zap } from "lucide-react";

const features = [
  {
    icon: Diamond,
    title: "Diamond reveal",
    text: "A clip-path polygon grows from the button until it covers the screen. 650ms with a custom ease-in-out curve.",
  },
  {
    icon: Zap,
    title: "No flash on load",
    text: "A tiny inline script sets the theme class before the first paint, so refreshing on Dusk stays on Dusk.",
  },
  {
    icon: Accessibility,
    title: "Plays nice",
    text: "Labelled buttons, full keyboard support, and an instant switch when reduced motion is turned on.",
  },
  {
    icon: HardDrive,
    title: "Remembers you",
    text: "Your pick goes to localStorage. First time here? It just follows your system setting.",
  },
];

export function Features() {
  return (
    <section id="features" className="mx-auto max-w-6xl scroll-mt-28 px-4 py-20 sm:py-28">
      <div className="max-w-2xl">
        <p className="text-sm font-semibold tracking-widest text-primary uppercase">Features</p>
        <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight sm:text-4xl">
          Small toggle, lots of details
        </h2>
      </div>

      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {features.map((feature) => (
          <div key={feature.title} className="animated-border rounded-2xl p-px">
            <div className="h-full rounded-[calc(1rem-1px)] bg-card p-6 text-card-foreground">
              <div className="flex size-11 items-center justify-center rounded-xl bg-accent-soft text-primary">
                <feature.icon className="size-5" aria-hidden="true" />
              </div>
              <h3 className="mt-5 font-heading text-lg font-semibold">{feature.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{feature.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
