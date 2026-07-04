import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Download, ExternalLink, Package, CheckCircle2, Terminal } from "lucide-react";
import { AnimatedBell, AnimatedHeart, AnimatedLoader } from "rex-motive";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CodeBlock from "@/components/shared/CodeBlock";

const PACKAGE_VERSION = "0.1.0";
const install = `# Install the package
yarn add rex-motive
# or with npm
npm install rex-motive

# You'll also need framer-motion as a peer dep
yarn add framer-motion`;

const usage = `import { AnimatedBell, AnimatedHeart } from "rex-motive";

export default function App() {
  return (
    <div style={{ display: "flex", gap: 16 }}>
      <AnimatedBell size={24} trigger="hover" />
      <AnimatedHeart size={24} trigger="click" />
    </div>
  );
}`;

const propsSample = `<AnimatedBell
  size={32}
  strokeWidth={1.75}
  color="#8b5cf6"
  trigger="hover"     // "hover" | "click" | "auto" | "focus"
  loop={false}
  ariaLabel="New notification"
  className="my-icon"
/>`;

const controlledSample = `// Bypass the built-in trigger — parent owns the state.
function Card({ item }) {
  const [hover, setHover] = useState(false);
  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <AnimatedHeart active={hover} />
    </div>
  );
}`;

const contribution = `// packages/motive-icons/src/animations/AnimatedRocket.jsx
import { motion } from "framer-motion";
import IconShell from "../IconShell";

export default function AnimatedRocket(props) {
  return (
    <IconShell {...props} label="Rocket">
      {() => (
        <motion.g
          variants={{
            inactive: { y: 0 },
            active: {
              y: [0, -3, 0],
              transition: { duration: 0.5 },
            },
          }}
        >
          {/* your SVG paths */}
        </motion.g>
      )}
    </IconShell>
  );
}

// packages/motive-icons/src/index.js — add:
export { default as AnimatedRocket } from "./animations/AnimatedRocket";

// src/registry/iconRegistry.js — add:
import { AnimatedRocket } from "rex-motive";
iconRegistry.push({
  name: "Rocket",
  library: "Lucide",
  category: "Interface",
  tags: ["launch", "start"],
  animation: "Directional",
  description: "Rocket lifts off with a subtle bounce.",
  component: AnimatedRocket,
});`;

const TRIGGER_EXAMPLES = [
  { trigger: "hover", body: "Animate while the pointer is over the icon or it is focused." },
  { trigger: "click", body: "Fire a one-shot animation on click / Enter / Space." },
  { trigger: "auto", body: "Animate immediately on mount — great for illustrations." },
  { trigger: "focus", body: "Trigger animation on keyboard focus for a11y flows." },
];

export default function Docs() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar onSearchClick={() => {}} />

      {/* HERO */}
      <section className="pt-32 pb-12 border-b border-border relative overflow-hidden">
        <div className="absolute inset-0 bg-grid bg-grid-fade opacity-70 pointer-events-none" />
        <div className="relative max-w-4xl mx-auto px-5 sm:px-8 lg:px-10">
          <div className="flex items-center gap-2 text-[10px] font-mono uppercase tracking-[0.18em] text-muted-foreground">
            <span>/ Documentation</span>
            <span className="text-border">·</span>
            <span className="text-violet-400">rex-motive@{PACKAGE_VERSION}</span>
          </div>
          <h1 className="mt-3 text-4xl sm:text-5xl font-semibold tracking-tightest">
            Getting started
          </h1>
          <p className="mt-3 text-muted-foreground max-w-xl">
            Everything you need to install Motive, use icons in your app, and
            contribute new animations.
          </p>

          <VerifiedBanner />
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-5 sm:px-8 lg:px-10 py-14 space-y-14">
        {/* 01 Install */}
        <section id="install">
          <SectionHeading eyebrow="01" title="Install" />
          <p className="mt-3 text-muted-foreground">
            <code className="font-mono text-xs px-1.5 py-0.5 rounded bg-white/[0.06] border border-border">rex-motive</code>{" "}
            is a React library. It ships as ESM + CJS with hand-written
            TypeScript declarations and no runtime deps other than{" "}
            <code className="font-mono text-xs px-1.5 py-0.5 rounded bg-white/[0.06] border border-border">framer-motion</code>{" "}
            (peer).
          </p>
          <div className="mt-5">
            <CodeBlock code={install} language="bash" />
          </div>

        </section>

        {/* 02 Basic usage */}
        <section id="usage">
          <SectionHeading eyebrow="02" title="Basic usage" />
          <p className="mt-3 text-muted-foreground">
            Import any animated icon and drop it into your JSX. Every icon
            accepts{" "}
            <PropChip>size</PropChip>, <PropChip>strokeWidth</PropChip>,{" "}
            <PropChip>color</PropChip>, <PropChip>trigger</PropChip>,{" "}
            <PropChip>loop</PropChip>, and <PropChip>active</PropChip>.
          </p>
          <div className="mt-5">
            <CodeBlock code={usage} language="tsx" />
          </div>

          {/* Live matching preview */}
          <div className="mt-4 rounded-lg border border-border bg-[#0d0d12] p-6 flex items-center justify-center gap-8">
            <div className="text-center">
              <div className="text-violet-400 flex justify-center">
                <AnimatedBell size={40} trigger="hover" strokeWidth={1.75} />
              </div>
              <div className="mt-3 text-[10px] font-mono uppercase tracking-widest text-muted-foreground">
                Bell · hover
              </div>
            </div>
            <div className="text-center">
              <div className="text-violet-400 flex justify-center">
                <AnimatedHeart size={40} trigger="click" strokeWidth={1.75} />
              </div>
              <div className="mt-3 text-[10px] font-mono uppercase tracking-widest text-muted-foreground">
                Heart · click me
              </div>
            </div>
            <div className="text-center">
              <div className="text-violet-400 flex justify-center">
                <AnimatedLoader size={40} strokeWidth={1.75} />
              </div>
              <div className="mt-3 text-[10px] font-mono uppercase tracking-widest text-muted-foreground">
                Loader · auto
              </div>
            </div>
          </div>
        </section>

        {/* 03 API */}
        <section id="api">
          <SectionHeading eyebrow="03" title="Props reference" />
          <div className="mt-5 overflow-x-auto rounded-lg border border-border">
            <table className="w-full text-sm font-mono">
              <thead>
                <tr className="bg-white/[0.03] border-b border-border">
                  <th className="text-left px-4 py-3 font-medium text-muted-foreground text-xs uppercase tracking-widest">Prop</th>
                  <th className="text-left px-4 py-3 font-medium text-muted-foreground text-xs uppercase tracking-widest">Type</th>
                  <th className="text-left px-4 py-3 font-medium text-muted-foreground text-xs uppercase tracking-widest">Default</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border/60">
                {[
                  ["size", "number", "24"],
                  ["strokeWidth", "number", "2"],
                  ["color", "string", '"currentColor"'],
                  ["trigger", '"hover" | "click" | "auto" | "focus"', '"hover"'],
                  ["loop", "boolean", "false"],
                  ["active", "boolean | undefined", "undefined"],
                  ["ariaLabel", "string", "icon name"],
                  ["className", "string", '""'],
                ].map(([prop, type, def]) => (
                  <tr key={prop}>
                    <td className="px-4 py-2.5 text-violet-300">{prop}</td>
                    <td className="px-4 py-2.5 text-emerald-400">{type}</td>
                    <td className="px-4 py-2.5 text-muted-foreground">{def}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-5">
            <CodeBlock code={propsSample} language="tsx" />
          </div>
        </section>

        {/* 04 Triggers */}
        <section id="triggers">
          <SectionHeading eyebrow="04" title="Triggers" />
          <div className="mt-4 grid sm:grid-cols-2 gap-3">
            {TRIGGER_EXAMPLES.map((t) => (
              <div key={t.trigger} className="rounded-lg border border-border bg-white/[0.02] p-4">
                <div className="text-sm font-mono text-violet-400">
                  trigger=&quot;{t.trigger}&quot;
                </div>
                <div className="mt-1 text-sm text-muted-foreground">{t.body}</div>
              </div>
            ))}
          </div>
        </section>

        {/* 05 Controlled active */}
        <section id="controlled">
          <SectionHeading eyebrow="05" title="Controlled mode (advanced)" />
          <p className="mt-3 text-muted-foreground">
            Pass <PropChip>active</PropChip> yourself when the parent should own
            the trigger — e.g. an entire card should activate the icon on
            hover, not just the icon itself.
          </p>
          <div className="mt-5">
            <CodeBlock code={controlledSample} language="tsx" />
          </div>
        </section>

        {/* 06 Available exports */}
        <section id="exports">
          <SectionHeading eyebrow="06" title="Available exports" />
          <p className="mt-3 text-muted-foreground">
            All 33 icons are exported by name from the package root.
          </p>
          <div className="mt-5 rounded-lg border border-border bg-white/[0.02] p-4">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 font-mono text-xs">
              {[
                "AnimatedBell", "AnimatedHeart", "AnimatedSearch", "AnimatedSettings",
                "AnimatedTrash", "AnimatedDownload", "AnimatedUpload", "AnimatedMenu",
                "AnimatedX", "AnimatedPlus", "AnimatedCheck", "AnimatedArrowRight",
                "AnimatedArrowLeft", "AnimatedArrowUp", "AnimatedArrowDown", "AnimatedRefresh",
                "AnimatedEye", "AnimatedLock", "AnimatedMail", "AnimatedSend",
                "AnimatedHome", "AnimatedUser", "AnimatedCalendar", "AnimatedClock",
                "AnimatedStar", "AnimatedBookmark", "AnimatedCopy", "AnimatedExternalLink",
                "AnimatedPlay", "AnimatedPause", "AnimatedVolume", "AnimatedWifi",
                "AnimatedLoader", "IconShell", "useIconTrigger",
              ].map((name) => (
                <div key={name} className="text-muted-foreground">
                  {name}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 07 Contribute */}
        <section id="contribute">
          <SectionHeading eyebrow="07" title="Add a new animated icon" />
          <p className="mt-3 text-muted-foreground">
            Every icon lives in one component file plus one registry entry.
            Search, filters, and the playground pick it up automatically.
          </p>
          <div className="mt-5">
            <CodeBlock code={contribution} language="tsx" />
          </div>
        </section>

        {/* CTA */}
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

function PropChip({ children }) {
  return (
    <code className="font-mono text-xs px-1.5 py-0.5 rounded bg-violet-500/10 border border-violet-500/30 text-violet-300">
      {children}
    </code>
  );
}

function VerifiedBanner() {
  const [copied, setCopied] = useState(false);
  const cmd = `yarn add rex-motive framer-motion`;
  return (
    <div className="mt-8 flex items-center gap-3 rounded-md border border-emerald-500/25 bg-emerald-500/[0.06] px-3 py-2.5">
      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
      <div className="flex-1 text-xs">
        <span className="text-emerald-300 font-medium">This site consumes the real package.</span>{" "}
        <span className="text-muted-foreground">
          Every icon you see is rendered from{" "}
          <code className="font-mono px-1 py-0.5 rounded bg-white/[0.06] border border-border">
            rex-motive@{PACKAGE_VERSION}
          </code>
          .
        </span>
      </div>
      <button
        onClick={() => {
          navigator.clipboard?.writeText(cmd).then(
            () => {
              setCopied(true);
              setTimeout(() => setCopied(false), 1600);
            },
            () => {},
          );
        }}
        className="inline-flex items-center gap-1.5 h-7 px-2 rounded border border-border text-[10px] font-mono text-muted-foreground hover:text-foreground shrink-0"
      >
        <Terminal className="w-3 h-3" />
        {copied ? "Copied" : "Copy install cmd"}
      </button>
    </div>
  );
}
