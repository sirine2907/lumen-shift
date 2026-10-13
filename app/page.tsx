import { ThemeToggle } from "@/components/theme-toggle";

export default function Home() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-32">
      <h1 className="font-heading text-5xl font-bold">Lumen Shift</h1>
      <ThemeToggle className="mt-8" />
    </main>
  );
}
