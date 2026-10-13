import { flushSync } from "react-dom";

const DURATION = 650;
const EASING = "cubic-bezier(0.76, 0, 0.24, 1)";

function diamond(x: number, y: number, r: number) {
  return `polygon(${x}px ${y - r}px, ${x + r}px ${y}px, ${x}px ${y + r}px, ${x - r}px ${y}px)`;
}

export function runThemeTransition(
  origin: HTMLElement | null | undefined,
  update: () => void
) {
  const reduceMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  if (
    !origin ||
    reduceMotion ||
    typeof document.startViewTransition !== "function"
  ) {
    update();
    return;
  }

  const rect = origin.getBoundingClientRect();
  const x = rect.left + rect.width / 2;
  const y = rect.top + rect.height / 2;
  const w = window.innerWidth;
  const h = window.innerHeight;

  // a diamond covers a point when |dx| + |dy| <= r, so grow until the farthest corner fits
  const r = Math.max(x + y, w - x + y, x + h - y, w - x + h - y);

  const transition = document.startViewTransition(() => {
    flushSync(update);
  });

  transition.ready
    .then(() => {
      document.documentElement.animate(
        { clipPath: [diamond(x, y, 0), diamond(x, y, r)] },
        {
          duration: DURATION,
          easing: EASING,
          pseudoElement: "::view-transition-new(root)",
        }
      );
    })
    .catch(() => {});
}
