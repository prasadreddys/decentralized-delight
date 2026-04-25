const stats = [
  { value: "$8.4B", label: "Total Value Locked" },
  { value: "12.7M", label: "Active Wallets" },
  { value: "240M+", label: "Transactions" },
  { value: "99.99%", label: "Uptime" },
];

export function Stats() {
  return (
    <section id="stats" className="relative py-24 border-y border-border bg-card/20 backdrop-blur">
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div className="container relative mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-4xl md:text-6xl font-bold text-gradient mb-2">{s.value}</div>
              <div className="text-sm text-muted-foreground uppercase tracking-wider font-mono">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
