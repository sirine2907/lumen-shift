"use client";

import { useRef } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/components/theme-provider";
import { cn } from "@/lib/utils";

export function ThemeToggle({ className }: { className?: string }) {
  const { resolvedTheme, mounted, setTheme } = useTheme();
  const buttonRef = useRef<HTMLButtonElement>(null);
  const reduceMotion = useReducedMotion();
  const isDark = resolvedTheme === "dark";

  const iconMotion = reduceMotion
    ? {}
    : {
        initial: { rotate: -120, scale: 0, opacity: 0 },
        animate: { rotate: 0, scale: 1, opacity: 1 },
        exit: { rotate: 120, scale: 0, opacity: 0 },
        transition: { duration: 0.35, ease: [0.34, 1.56, 0.64, 1] as const },
      };

  return (
    <button
      ref={buttonRef}
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark", buttonRef.current)}
      aria-label={isDark ? "Switch to Dawn (light) theme" : "Switch to Dusk (dark) theme"}
      title={isDark ? "Switch to Dawn" : "Switch to Dusk"}
      className={cn(
        "relative inline-flex size-10 items-center justify-center overflow-hidden rounded-full border border-border bg-card text-foreground transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
        className
      )}
    >
      {mounted && (
        <AnimatePresence initial={false}>
          {isDark ? (
            <motion.span key="moon" className="absolute inset-0 flex items-center justify-center" {...iconMotion}>
              <Moon className="size-5 text-primary" aria-hidden="true" />
            </motion.span>
          ) : (
            <motion.span key="sun" className="absolute inset-0 flex items-center justify-center" {...iconMotion}>
              <Sun className="size-5 text-primary" aria-hidden="true" />
            </motion.span>
          )}
        </AnimatePresence>
      )}
    </button>
  );
}
