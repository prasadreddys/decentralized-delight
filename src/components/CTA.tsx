import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function CTA() {
  return (
    <section className="container mx-auto px-6 py-32">
      <div className="relative overflow-hidden rounded-3xl border border-border bg-gradient-card backdrop-blur p-12 md:p-20 text-center">
        <div className="absolute inset-0 bg-gradient-hero opacity-10" />
        <div className="absolute -top-20 left-1/2 -translate-x-1/2 h-60 w-60 bg-primary/30 blur-3xl rounded-full" />
        <div className="relative">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight max-w-3xl mx-auto">
            Start building on the <span className="text-gradient">decentralized web</span>
          </h2>
          <p className="mt-6 text-lg text-muted-foreground max-w-xl mx-auto">
            Join 50,000+ developers shipping the next generation of on-chain applications.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-hero text-primary-foreground font-semibold h-12 px-8 glow-lg">
              Get Started <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" className="h-12 px-8 border-border bg-background/40">
              View on GitHub
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
