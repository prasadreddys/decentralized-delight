import { Zap, Shield, Globe, Layers, Coins, Code2 } from "lucide-react";

const features = [
  { icon: Zap, title: "Lightning Fast", desc: "Sub-second finality with 100,000+ TPS throughput across the network." },
  { icon: Shield, title: "Zero-Knowledge Proofs", desc: "Privacy-preserving transactions secured by cutting-edge zk-SNARKs." },
  { icon: Coins, title: "Zero Gas Fees", desc: "Meta-transactions and gas abstraction for a seamless user experience." },
  { icon: Globe, title: "Cross-Chain Native", desc: "Bridge assets across 30+ chains with trustless interoperability." },
  { icon: Layers, title: "Modular Architecture", desc: "Pluggable execution layers for custom dApps and rollups." },
  { icon: Code2, title: "Developer First", desc: "Solidity-compatible with rich SDKs in TypeScript, Rust, and Go." },
];

export function Features() {
  return (
    <section id="features" className="container mx-auto px-6 py-32">
      <div className="text-center max-w-2xl mx-auto mb-20">
        <p className="text-sm font-mono text-primary uppercase tracking-widest mb-4">// Protocol Features</p>
        <h2 className="text-4xl md:text-6xl font-bold tracking-tight">
          Built for the <span className="text-gradient">on-chain</span> economy
        </h2>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((f) => (
          <div
            key={f.title}
            className="group relative rounded-2xl border border-border bg-gradient-card backdrop-blur p-8 hover:border-primary/50 transition-all duration-300"
          >
            <div className="absolute inset-0 rounded-2xl bg-gradient-hero opacity-0 group-hover:opacity-10 transition-opacity" />
            <div className="relative">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-hero glow mb-6">
                <f.icon className="h-6 w-6 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{f.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{f.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
