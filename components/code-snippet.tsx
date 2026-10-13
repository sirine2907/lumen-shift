"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";

const lines = [
  "function switchTheme(button: HTMLElement, update: () => void) {",
  "  if (!document.startViewTransition) return update();",
  "",
  "  const { left, top, width, height } = button.getBoundingClientRect();",
  "  const x = left + width / 2;",
  "  const y = top + height / 2;",
  "",
  "  // grow until the diamond reaches the farthest corner",
  "  const w = innerWidth, h = innerHeight;",
  "  const r = Math.max(x + y, w - x + y, x + h - y, w - x + h - y);",
  "",
  "  const diamond = (s: number) =>",
  "    `polygon(${x}px ${y - s}px, ${x + s}px ${y}px, ${x}px ${y + s}px, ${x - s}px ${y}px)`;",
  "",
  "  document.startViewTransition(update).ready.then(() => {",
  "    document.documentElement.animate(",
  "      { clipPath: [diamond(0), diamond(r)] },",
  "      {",
  "        duration: 650,",
  '        easing: "cubic-bezier(0.76, 0, 0.24, 1)",',
  '        pseudoElement: "::view-transition-new(root)",',
  "      }",
  "    );",
  "  });",
  "}",
];

const code = lines.join("\n");

export function CodeSnippet() {
  const [copied, setCopied] = useState(false);

  async function copy() {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  }

  return (
    <section id="code" className="mx-auto max-w-6xl scroll-mt-28 px-4 py-20 sm:py-28">
      <div className="grid items-start gap-10 lg:grid-cols-[1fr_1.6fr]">
        <div>
          <p className="text-sm font-semibold tracking-widest text-primary uppercase">Code</p>
          <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight sm:text-4xl">
            The whole trick fits on one screen
          </h2>
          <p className="mt-4 text-muted-foreground">
            The browser takes a screenshot of the old page, you swap the theme,
            and then the new page gets clipped to a growing diamond. No canvas,
            no overlays.
          </p>
          <p className="mt-4 text-sm text-muted-foreground">
            Also turn off the default fade in your CSS:
          </p>
          <pre className="mt-2 overflow-x-auto rounded-xl bg-muted p-3 font-mono text-xs">
            {"::view-transition-old(root),\n::view-transition-new(root) {\n  animation: none;\n}"}
          </pre>
        </div>

        <div className="min-w-0 overflow-hidden rounded-2xl border border-border bg-code-bg text-code-text shadow-xl shadow-glow/20">
          <div className="flex items-center justify-between border-b border-code-muted/30 px-4 py-2">
            <span className="font-mono text-xs text-code-muted">theme-transition.ts</span>
            <button
              type="button"
              onClick={copy}
              aria-label={copied ? "Copied" : "Copy code"}
              className="inline-flex items-center gap-1.5 rounded-lg px-2.5 py-1.5 text-xs text-code-muted transition-colors hover:bg-code-muted/20 hover:text-code-text focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              {copied ? (
                <Check className="size-4 text-code-keyword" aria-hidden="true" />
              ) : (
                <Copy className="size-4" aria-hidden="true" />
              )}
              <span aria-live="polite">{copied ? "Copied!" : "Copy"}</span>
            </button>
          </div>
          <pre className="overflow-x-auto p-4 font-mono text-xs leading-relaxed sm:p-5 sm:text-sm">
            <code>
              {lines.map((line, i) => (
                <span
                  key={i}
                  className={
                    line.trim().startsWith("//")
                      ? "block text-code-muted italic"
                      : line.includes('"')
                        ? "block text-code-string"
                        : "block"
                  }
                >
                  {line || " "}
                </span>
              ))}
            </code>
          </pre>
        </div>
      </div>
    </section>
  );
}
