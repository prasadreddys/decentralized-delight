export function Footer() {
  return (
    <footer className="border-t border-border bg-card/20 backdrop-blur">
      <div className="container mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="h-7 w-7 rounded-lg bg-gradient-hero glow" />
            <span className="font-bold tracking-tight">NEXUS</span>
          </div>
          <div className="flex gap-8 text-sm text-muted-foreground">
            <a href="#" className="hover:text-foreground transition">Twitter</a>
            <a href="#" className="hover:text-foreground transition">Discord</a>
            <a href="#" className="hover:text-foreground transition">GitHub</a>
            <a href="#" className="hover:text-foreground transition">Mirror</a>
          </div>
          <p className="text-xs text-muted-foreground font-mono">© 2026 Nexus Protocol</p>
        </div>
      </div>
    </footer>
  );
}
