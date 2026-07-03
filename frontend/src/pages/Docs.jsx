import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CodeBlock from "@/components/shared/CodeBlock";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const install = `# Install with your package manager of choice
npm install motive-icons
# or
yarn add motive-icons
# or
pnpm add motive-icons`;

const usage = `import { AnimatedBell, AnimatedHeart } from "motive-icons";

export default function App() {
  return (
    <div className="flex gap-4">
      <AnimatedBell size={24} trigger="hover" />
      <AnimatedHeart size={24} trigger="click" />
    </div>
  );
}`;

const contribution = `// 1. Create your animated icon
// components/icons/animations/AnimatedRocket.jsx
import { motion } from "framer-motion";
import IconShell from "../IconShell";

export default function AnimatedRocket(props) {
  return (
    <IconShell {...props} label="Rocket">
      {() => (
        <motion.g
          variants={{
            inactive: { y: 0 },
            active: { y: [0, -3, 0], transition: { duration: 0.5 } },
          }}
        >
          {/* your SVG paths */}
        </motion.g>
      )}
    </IconShell>
  );
}

// 2. Register it
// src/registry/iconRegistry.js
import AnimatedRocket from "../components/icons/animations/AnimatedRocket";

iconRegistry.push({
  name: "Rocket",
  library: "Lucide",
  category: "Interface",
  tags: ["launch", "start"],
  animation: "Directional",
  description: "Rocket lifts off with a subtle bounce.",
  component: AnimatedRocket,
});`;

export default function Docs() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar onSearchClick={() => {}} />

      <section className="pt-32 pb-12 border-b border-border relative overflow-hidden">
        <div className="absolute inset-0 bg-grid bg-grid-fade opacity-70 pointer-events-none" />
        <div className="relative max-w-4xl mx-auto px-5 sm:px-8 lg:px-10">
          <div className="text-[10px] font-mono uppercase tracking-[0.18em] text-muted-foreground">
            / Documentation
          </div>
          <h1 className="mt-3 text-4xl sm:text-5xl font-semibold tracking-tightest">
            Getting started
          </h1>
          <p className="mt-3 text-muted-foreground max-w-xl">
            Everything you need to install Motive, use icons in your app, and
            contribute new animations.
          </p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-5 sm:px-8 lg:px-10 py-14 space-y-14">
        <section>
          <SectionHeading eyebrow="01" title="Install" />
          <p className="mt-3 text-muted-foreground">
            Motive is a lightweight React library. It ships as an ESM module with
            zero runtime dependencies beyond <code className="font-mono text-xs px-1.5 py-0.5 rounded bg-white/[0.06] border border-border">framer-motion</code>.
          </p>
          <div className="mt-5">
            <CodeBlock code={install} language="bash" />
          </div>
        </section>

        <section>
          <SectionHeading eyebrow="02" title="Basic usage" />
          <p className="mt-3 text-muted-foreground">
            Import any animated icon and drop it into your JSX. Every icon
            accepts <code className="font-mono text-xs px-1.5 py-0.5 rounded bg-white/[0.06] border border-border">size</code>,{" "}
            <code className="font-mono text-xs px-1.5 py-0.5 rounded bg-white/[0.06] border border-border">strokeWidth</code>,{" "}
            <code className="font-mono text-xs px-1.5 py-0.5 rounded bg-white/[0.06] border border-border">trigger</code>, and{" "}
            <code className="font-mono text-xs px-1.5 py-0.5 rounded bg-white/[0.06] border border-border">loop</code>.
          </p>
          <div className="mt-5">
            <CodeBlock code={usage} language="tsx" />
          </div>
        </section>

        <section>
          <SectionHeading eyebrow="03" title="Triggers" />
          <div className="mt-4 grid sm:grid-cols-2 gap-3">
            {[
              { name: "hover", body: "Animate while the pointer is over the icon or it is focused." },
              { name: "click", body: "Fire a one-shot animation on click / Enter / Space." },
              { name: "auto", body: "Animate immediately on mount — great for illustrations." },
              { name: "focus", body: "Trigger animation on keyboard focus for a11y flows." },
            ].map((t) => (
              <div key={t.name} className="rounded-lg border border-border bg-white/[0.02] p-4">
                <div className="text-sm font-mono text-violet-400">trigger=&quot;{t.name}&quot;</div>
                <div className="mt-1 text-sm text-muted-foreground">{t.body}</div>
              </div>
            ))}
          </div>
        </section>

        <section>
          <SectionHeading eyebrow="04" title="Add a new animated icon" />
          <p className="mt-3 text-muted-foreground">
            Every icon lives in one component file plus one registry entry.
            Search, filters, and the playground pick it up automatically.
          </p>
          <div className="mt-5">
            <CodeBlock code={contribution} language="tsx" />
          </div>
        </section>

        <section className="rounded-xl border border-border bg-[#0d0d12] p-6 sm:p-10 relative overflow-hidden">
          <div className="absolute -top-16 -right-16 w-64 h-64 rounded-full bg-violet-600/20 blur-3xl pointer-events-none" />
          <div className="relative flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl font-semibold tracking-tight">Ready to try it?</h3>
              <p className="mt-1.5 text-sm text-muted-foreground">
                Prototype your first animation in the playground.
              </p>
            </div>
            <Link
              to="/playground"
              className="inline-flex items-center gap-2 h-11 px-5 rounded-md bg-violet-600 hover:bg-violet-500 text-white text-sm font-medium"
            >
              Open playground <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
}

function SectionHeading({ eyebrow, title }) {
  return (
    <div className="flex items-baseline gap-4">
      <span className="text-[10px] font-mono uppercase tracking-[0.18em] text-violet-500">
        {eyebrow}
      </span>
      <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">{title}</h2>
    </div>
  );
}
