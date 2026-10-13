"use client";

import { useRef } from "react";
import { motion } from "motion/react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/components/theme-provider";

export function ThemeSwitch() {
  const { resolvedTheme, mounted, setTheme } = useTheme();
  const thumbRef = useRef<HTMLSpanElement>(null);
  const isDark = mounted && resolvedTheme === "dark";

  return (
    <button
      type="button"
      role="switch"
      aria-checked={isDark}
      aria-label="Dusk theme"
      onClick={() => setTheme(isDark ? "light" : "dark", thumbRef.current)}
      className="relative inline-flex h-9 w-16 shrink-0 items-center rounded-full border border-border bg-muted p-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
    >
      <motion.span
        ref={thumbRef}
        className="flex size-7 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-md"
        style={{ opacity: mounted ? 1 : 0 }}
        animate={{ x: isDark ? 26 : 0 }}
        transition={
          mounted ? { type: "spring", stiffness: 500, damping: 32 } : { duration: 0 }
        }
      >
        {isDark ? (
          <Moon className="size-4" aria-hidden="true" />
        ) : (
          <Sun className="size-4" aria-hidden="true" />
        )}
      </motion.span>
    </button>
  );
}
