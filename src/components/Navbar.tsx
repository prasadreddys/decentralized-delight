import { Button } from "@/components/ui/button";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-background/60 border-b border-border/50">
      <nav className="container mx-auto flex items-center justify-between px-6 py-4">
        <a href="/" className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-lg bg-gradient-hero glow animate-pulse-glow" />
          <span className="text-xl font-bold tracking-tight">NEXUS</span>
        </a>
        <div className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
          <a href="#features" className="hover:text-foreground transition">Features</a>
          <a href="#stats" className="hover:text-foreground transition">Network</a>
          <a href="#ecosystem" className="hover:text-foreground transition">Ecosystem</a>
          <a href="#docs" className="hover:text-foreground transition">Docs</a>
        </div>
        <Button className="bg-gradient-hero text-primary-foreground font-semibold hover:opacity-90 glow">
          Launch App
        </Button>
      </nav>
    </header>
  );
}
