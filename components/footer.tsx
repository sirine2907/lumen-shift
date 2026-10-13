import { GithubIcon } from "@/components/github-icon";
import { Logo } from "@/components/logo";

export function Footer() {
  return (
    <footer className="mt-10 border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-4 py-10 sm:flex-row">
        <div className="flex items-center gap-3">
          <Logo className="size-8" />
          <div>
            <p className="font-heading font-bold">Lumen Shift</p>
            <p className="text-sm text-muted-foreground">From dawn to dusk, one click at a time.</p>
          </div>
        </div>

        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          <span>© {new Date().getFullYear()} Sirine Ayadi</span>
          <a
            href="https://github.com/sirine2907/lumen-shift"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 transition-colors hover:text-foreground"
          >
            <GithubIcon className="size-4" />
            Source
          </a>
        </div>
      </div>
    </footer>
  );
}
