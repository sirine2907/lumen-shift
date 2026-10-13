import { Logo } from "@/components/logo";
import { GithubIcon } from "@/components/github-icon";
import { ThemeToggle } from "@/components/theme-toggle";

const links = [
  { href: "#demo", label: "Demo" },
  { href: "#features", label: "Features" },
  { href: "#code", label: "Code" },
];

export function Navbar() {
  return (
    <header className="fixed inset-x-0 top-4 z-50 flex justify-center px-4">
      <nav className="flex w-full max-w-3xl items-center justify-between gap-4 rounded-full border border-border bg-nav py-2 pr-2 pl-4 shadow-lg shadow-glow/10 backdrop-blur-xl">
        <a href="#top" className="flex items-center gap-2 rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
          <Logo className="size-7" />
          <span className="font-heading text-lg font-bold tracking-tight">Lumen Shift</span>
        </a>

        <ul className="hidden items-center gap-1 text-sm text-muted-foreground sm:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="rounded-full px-3 py-2 transition-colors hover:bg-muted hover:text-foreground"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-1">
          <a
            href="https://github.com/sirine2907/lumen-shift"
            target="_blank"
            rel="noreferrer"
            aria-label="Lumen Shift on GitHub"
            className="inline-flex size-10 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
          >
            <GithubIcon className="size-5" />
          </a>
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}
