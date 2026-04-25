const partners = ["Uniswap", "Aave", "Chainlink", "Lido", "MakerDAO", "Compound", "Curve", "Synthetix"];

export function Ecosystem() {
  return (
    <section id="ecosystem" className="container mx-auto px-6 py-32">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <p className="text-sm font-mono text-primary uppercase tracking-widest mb-4">// Ecosystem</p>
        <h2 className="text-4xl md:text-6xl font-bold tracking-tight">
          Powering <span className="text-gradient">500+ protocols</span>
        </h2>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {partners.map((p) => (
          <div
            key={p}
            className="rounded-xl border border-border bg-gradient-card backdrop-blur p-8 text-center font-display text-xl font-semibold hover:border-accent/50 hover:glow-electric transition-all"
          >
            {p}
          </div>
        ))}
      </div>
    </section>
  );
}
