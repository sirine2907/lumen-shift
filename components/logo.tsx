import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      className={cn("size-8", className)}
      aria-hidden="true"
    >
      <rect x="1" y="1" width="30" height="30" rx="9" className="fill-foreground" />
      <path d="M16 6 L26 16 L16 26 L6 16 Z" className="fill-background" />
      <path d="M16 6 L26 16 L16 26 Z" className="fill-primary" />
      <circle cx="16" cy="16" r="2.2" className="fill-foreground" />
    </svg>
  );
}
