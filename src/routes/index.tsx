import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { Stats } from "@/components/Stats";
import { Ecosystem } from "@/components/Ecosystem";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Features />
        <Ecosystem />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
