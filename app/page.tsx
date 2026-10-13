import { Demo } from "@/components/demo";
import { Hero } from "@/components/hero";
import { Navbar } from "@/components/navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="top">
        <Hero />
        <Demo />
      </main>
    </>
  );
}
