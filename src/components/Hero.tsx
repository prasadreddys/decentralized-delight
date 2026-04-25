import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import heroImg from "@/assets/hero-web3.jpg";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-40" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/40 to-background" />
      <div className="container relative mx-auto px-6 pt-20 pb-32 text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card/50 backdrop-blur px-4 py-1.5 text-xs text-muted-foreground mb-8">
          <Sparkles className="h-3.5 w-3.5 text-primary" />
          <span>Mainnet v3.0 — Now Live</span>
        </div>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[1.05] max-w-5xl mx-auto">
          The Future of <span className="text-gradient">Decentralized</span> Finance
        </h1>
        <p className="mt-8 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
          Build, trade, and earn on a lightning-fast Layer-2 protocol. Zero gas fees, infinite scale, fully on-chain.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="bg-gradient-hero text-primary-foreground font-semibold text-base h-12 px-8 glow-lg hover:opacity-90">
            Connect Wallet <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          <Button size="lg" variant="outline" className="h-12 px-8 border-border bg-card/40 backdrop-blur text-base">
            Read Whitepaper
          </Button>
        </div>
        <div className="mt-20 relative mx-auto max-w-5xl">
          <div className="absolute -inset-4 bg-gradient-hero opacity-30 blur-3xl rounded-full" />
          <img
            src={heroImg}
            alt="Web3 blockchain visualization"
            width={1536}
            height={1024}
            className="relative rounded-2xl border border-border/60 glow-lg animate-float"
          />
        </div>
      </div>
    </section>
  );
}
