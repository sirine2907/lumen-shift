import { Navbar } from "@/components/navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="top" className="mx-auto max-w-6xl px-4 py-32">
        <h1 className="font-heading text-5xl font-bold">Lumen Shift</h1>
      </main>
    </>
  );
}
