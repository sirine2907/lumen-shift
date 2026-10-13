"use client";

import { ThemeSegmented } from "@/components/theme-segmented";
import { ThemeSwitch } from "@/components/theme-switch";
import { ThemeToggle } from "@/components/theme-toggle";
import { useTheme } from "@/components/theme-provider";

const variants = [
  {
    title: "Icon button",
    text: "The classic. Sun and moon spin into each other while the page wipes over.",
    control: <ThemeToggle className="size-14" />,
  },
  {
    title: "Switch",
    text: "A real role=\"switch\", so screen readers announce it as on or off.",
    control: <ThemeSwitch />,
  },
  {
    title: "Segmented control",
    text: "Dawn, Dusk or Auto. Auto follows your OS and updates live when it changes.",
    control: <ThemeSegmented />,
  },
];

export function Demo() {
  const { theme, resolvedTheme, mounted } = useTheme();

  return (
    <section id="demo" className="mx-auto max-w-6xl scroll-mt-28 px-4 py-20 sm:py-28">
      <div className="max-w-2xl">
        <p className="text-sm font-semibold tracking-widest text-primary uppercase">Demo</p>
        <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight sm:text-4xl">
          Three ways to flip the lights
        </h2>
        <p className="mt-4 text-muted-foreground">
          Every control uses the same transition. Watch where the diamond starts
          — it always grows out of the thing you clicked.
        </p>
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {variants.map((variant) => (
          <div
            key={variant.title}
            className="flex flex-col rounded-2xl border border-border bg-card p-4 text-card-foreground"
          >
            <div className="flex h-44 items-center justify-center rounded-xl bg-accent-soft">
              {variant.control}
            </div>
            <div className="p-2 pt-5">
              <h3 className="font-heading text-lg font-semibold">{variant.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{variant.text}</p>
            </div>
          </div>
        ))}
      </div>

      <p className="mt-6 text-sm text-muted-foreground" aria-live="polite">
        {mounted
          ? `Current theme: ${resolvedTheme === "dark" ? "Dusk" : "Dawn"}${theme === "system" ? " (from your system)" : " (saved)"}`
          : " "}
      </p>
    </section>
  );
}
