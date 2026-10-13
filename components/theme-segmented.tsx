"use client";

import { useRef } from "react";
import { motion } from "motion/react";
import { Monitor, Moon, Sun } from "lucide-react";
import { useTheme, type Theme } from "@/components/theme-provider";
import { cn } from "@/lib/utils";

const options: { value: Theme; label: string; icon: typeof Sun }[] = [
  { value: "light", label: "Dawn", icon: Sun },
  { value: "system", label: "Auto", icon: Monitor },
  { value: "dark", label: "Dusk", icon: Moon },
];

export function ThemeSegmented() {
  const { theme, mounted, setTheme } = useTheme();
  const buttonRefs = useRef<(HTMLButtonElement | null)[]>([]);

  function select(index: number) {
    const button = buttonRefs.current[index];
    button?.focus();
    setTheme(options[index].value, button);
  }

  function onKeyDown(e: React.KeyboardEvent) {
    const current = options.findIndex((o) => o.value === theme);
    if (e.key === "ArrowRight" || e.key === "ArrowDown") {
      e.preventDefault();
      select((current + 1) % options.length);
    } else if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
      e.preventDefault();
      select((current - 1 + options.length) % options.length);
    }
  }

  return (
    <div
      role="radiogroup"
      aria-label="Theme"
      onKeyDown={onKeyDown}
      className="inline-flex rounded-full border border-border bg-muted p-1"
    >
      {options.map((option, i) => {
        const active = mounted && theme === option.value;
        const Icon = option.icon;
        return (
          <button
            key={option.value}
            ref={(el) => {
              buttonRefs.current[i] = el;
            }}
            type="button"
            role="radio"
            aria-checked={active}
            tabIndex={active || (!mounted && i === 0) ? 0 : -1}
            onClick={() => select(i)}
            className={cn(
              "relative flex items-center gap-1.5 rounded-full px-3 py-1.5 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
              active ? "text-primary-foreground" : "text-muted-foreground hover:text-foreground"
            )}
          >
            {active && (
              <motion.span
                layoutId="segment-pill"
                className="absolute inset-0 rounded-full bg-primary"
                transition={{ type: "spring", stiffness: 450, damping: 35 }}
              />
            )}
            <Icon className="relative size-4" aria-hidden="true" />
            <span className="relative">{option.label}</span>
          </button>
        );
      })}
    </div>
  );
}
