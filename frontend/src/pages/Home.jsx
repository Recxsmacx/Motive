import { useEffect, useMemo, useRef, useState } from "react";
import { Helmet } from "react-helmet-async";
import { useNavigate, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Github, Search as SearchIcon, Terminal } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CodeBlock from "@/components/shared/CodeBlock";
import IconCard from "@/components/shared/IconCard";
import IconDetailModal from "@/components/shared/IconDetailModal";
import Sponsors from "@/components/shared/Sponsors";
import { iconRegistry } from "@/registry/iconRegistry";
import { TESTIDS } from "@/constants/testIds";

const SHOWCASE_ORDER = [
  "Bell", "Heart", "Search", "Settings", "Trash",
  "Download", "Upload", "Menu", "X", "Plus",
  "Check", "ArrowRight", "Refresh", "Eye", "Lock",
  "Mail", "Send", "Home", "User", "Calendar",
  "Clock", "Star", "Bookmark", "Copy", "Play",
  "Volume", "Wifi", "Loader",
];

const showcaseIcons = SHOWCASE_ORDER
  .map((name) => iconRegistry.find((i) => i.name === name))
  .filter(Boolean);

export default function Home() {
  const navigate = useNavigate();
  const [selected, setSelected] = useState(null);
  const [codeTrigger, setCodeTrigger] = useState("hover");

  // Hero interactive composition
  const heroRef = useRef(null);
  const [pointer, setPointer] = useState({ x: 0.5, y: 0.5, active: false });

  useEffect(() => {
    const el = heroRef.current;
    if (!el) return;
    const onMove = (e) => {
      const rect = el.getBoundingClientRect();
      setPointer({
        x: (e.clientX - rect.left) / rect.width,
        y: (e.clientY - rect.top) / rect.height,
        active: true,
      });
    };
    const onLeave = () => setPointer((p) => ({ ...p, active: false }));
    el.addEventListener("mousemove", onMove);
    el.addEventListener("mouseleave", onLeave);
    return () => {
      el.removeEventListener("mousemove", onMove);
      el.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  const codeSample = useMemo(() => {
    return `import { AnimatedBell } from "rex-motive";

export default function Notifications() {
  return (
    <AnimatedBell
      size={24}
      strokeWidth={1.75}
      trigger="${codeTrigger}"
    />
  );
}`;
  }, [codeTrigger]);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Helmet>
        <title>Motive | Open-Source Animated Icons for React</title>
        <meta name="description" content="Enhance your React applications with Motive—a free, open-source library of highly customizable, animated Lucide and Phosphor icons powered by Framer Motion." />
      </Helmet>
      <Navbar onSearchClick={() => navigate("/icons")} />

      {/* HERO */}
      <section className="relative pt-32 pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-grid bg-grid-fade pointer-events-none" />
        <div className="absolute inset-0 violet-glow pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
          <div className="max-w-3xl">
            <motion.div
              data-testid={TESTIDS.heroBadge}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 rounded-full border border-border bg-white/[0.03] dark:bg-white/[0.03] px-3 py-1 text-[11px] font-mono uppercase tracking-widest text-muted-foreground"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-violet-500 animate-pulse" />
              Open source · v0.1
            </motion.div>

            <motion.h1
              data-testid={TESTIDS.heroTitle}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.05 }}
              className="mt-6 font-display font-semibold text-[44px] sm:text-[64px] lg:text-[80px] leading-[0.98] tracking-tightest"
            >
              Open-Source Animated
              <br />
              <span className="text-muted-foreground">Icons for </span>
              <span className="relative inline-block">
                <span className="text-violet-500">React.</span>
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
              className="mt-6 max-w-xl text-base sm:text-lg text-muted-foreground leading-relaxed"
            >
              Enhance your React applications with Motive—a free, open-source library of highly customizable, animated Lucide and Phosphor icons powered by Framer Motion.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25 }}
              className="mt-9 flex flex-wrap items-center gap-3"
            >
              <Link
                to="/icons"
                data-testid={TESTIDS.heroExploreBtn}
                className="group inline-flex items-center gap-2 h-11 px-5 rounded-md bg-violet-600 hover:bg-violet-500 text-white text-sm font-medium shadow-[0_0_30px_rgba(139,92,246,0.35)] hover:shadow-[0_0_40px_rgba(139,92,246,0.55)] transition-all"
              >
                Explore icons
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </Link>
              <a
                data-testid={TESTIDS.heroGithubBtn}
                href="https://github.com/Recxsmacx/Motive"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 h-11 px-5 rounded-md border border-border hover:border-white/20 text-sm font-medium transition-colors"
              >
                <Github className="w-4 h-4" />
                View on GitHub
              </a>
              <div className="hidden sm:inline-flex items-center gap-2 pl-2 ml-1 text-xs font-mono text-muted-foreground">
                <Terminal className="w-3.5 h-3.5" />
                npm i rex-motive
              </div>
            </motion.div>
          </div>

          {/* Hero interactive composition */}
          <motion.div
            ref={heroRef}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="mt-16 relative rounded-2xl border border-border bg-[#0d0d12] dark:bg-[#0d0d12] overflow-hidden"
            data-testid={TESTIDS.heroShowcase}
            id="showcase"
          >
            <div data-testid={TESTIDS.showcaseSection} className="contents">
            <div className="absolute inset-0 bg-grid opacity-40 pointer-events-none" />
            <HeroGrid pointer={pointer} onSelect={setSelected} />
            <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#0d0d12] to-transparent pointer-events-none" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* CORE VALUE */}
      <section data-testid={TESTIDS.valueSection} className="py-24 border-t border-border">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
          <div className="flex items-end justify-between gap-8 mb-14">
            <div>
              <div className="text-[10px] font-mono uppercase tracking-[0.18em] text-muted-foreground">
                / Why Motive
              </div>
              <h2 className="mt-3 text-3xl sm:text-4xl font-semibold tracking-tight max-w-xl">
                Beautiful icons. Meaningful motion.
              </h2>
            </div>
            <div className="hidden md:block text-sm text-muted-foreground max-w-xs">
              Every icon in the library ships with a hand-crafted animation
              that reflects its meaning, not a blanket scale-and-rotate.
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border rounded-xl overflow-hidden border border-border">
            <ValueCard
              index={1}
              title="Meaningful motion"
              body="Bells swing. Trash lids open. Arrows travel. Every animation reflects the icon's purpose."
            />
            <ValueCard
              index={2}
              title="Copy and ship"
              body="Grab the component, paste it into your app, and customize with typed props. No config, no build step."
            />
            <ValueCard
              index={3}
              title="Open by default"
              body="MIT licensed, contributor friendly. Add a new animated icon in three files, ship it in one PR."
            />
          </div>
        </div>
      </section>

      {/* CODE PREVIEW */}
      <section data-testid={TESTIDS.codeSection} className="py-24 border-t border-border">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            <div>
              <div className="text-[10px] font-mono uppercase tracking-[0.18em] text-muted-foreground">
                / Developer experience
              </div>
              <h2 className="mt-3 text-3xl sm:text-4xl font-semibold tracking-tight">
                One import. One prop. Ship it.
              </h2>
              <p className="mt-4 text-muted-foreground leading-relaxed max-w-md">
                Every icon is a strongly-typed React component. Choose your
                trigger, adjust the props, and the animation just works.
              </p>

              <div data-testid={TESTIDS.triggerSelector} className="mt-8 flex items-center gap-1.5">
                <span className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground mr-2">
                  Trigger
                </span>
                {["hover", "click", "auto"].map((t) => (
                  <button
                    key={t}
                    data-testid={`${TESTIDS.triggerSelector}-${t}`}
                    onClick={() => setCodeTrigger(t)}
                    className={`h-8 px-3 rounded-md text-xs transition-colors border ${
                      codeTrigger === t
                        ? "bg-violet-500/15 border-violet-500/40 text-violet-300"
                        : "border-border text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {t}
                  </button>
                ))}
              </div>

              <div className="mt-8 rounded-lg border border-border bg-[#0d0d12] p-8 flex items-center justify-center">
                <div className="text-violet-400">
                  <LivePreviewBell trigger={codeTrigger} />
                </div>
              </div>
            </div>

            <CodeBlock
              code={codeSample}
              language="tsx"
              testId={TESTIDS.copyCodeBtn}
              copyLabel="Copy"
            />
          </div>
        </div>
      </section>

      {/* GALLERY PREVIEW */}
      <section data-testid={TESTIDS.galleryPreviewSection} className="py-24 border-t border-border">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
          <div className="flex items-end justify-between gap-8 mb-10">
            <div>
              <div className="text-[10px] font-mono uppercase tracking-[0.18em] text-muted-foreground">
                / The library
              </div>
              <h2 className="mt-3 text-3xl sm:text-4xl font-semibold tracking-tight">
                {iconRegistry.length} icons, all animated.
              </h2>
            </div>
            <Link
              to="/icons"
              data-testid={TESTIDS.browseAllBtn}
              className="hidden sm:inline-flex items-center gap-2 h-10 px-4 text-sm rounded-md border border-border hover:border-white/20 transition-colors"
            >
              Browse all icons <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-px bg-border rounded-xl overflow-hidden border border-border">
            {iconRegistry.slice(0, 24).map((icon, i) => (
              <IconCard key={icon.name} icon={icon} index={i} onClick={setSelected} />
            ))}
          </div>
        </div>
      </section>

      {/* SPONSORS */}
      <Sponsors />

      {/* OPEN SOURCE */}
      <section data-testid={TESTIDS.openSourceSection} className="py-24 border-t border-border">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
          <div className="rounded-2xl border border-border bg-[#0d0d12] p-8 sm:p-14 relative overflow-hidden">
            <div className="absolute inset-0 bg-grid opacity-30 pointer-events-none" />
            <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-violet-600/20 blur-3xl pointer-events-none" />
            <div className="relative max-w-2xl">
              <div className="text-[10px] font-mono uppercase tracking-[0.18em] text-violet-400">
                / Open source
              </div>
              <h2 className="mt-3 text-3xl sm:text-4xl font-semibold tracking-tight">
                Built in public. Made to be extended.
              </h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                Motive is designed so contributors can add a new animated icon
                in a single PR — one component, one registry entry. Everything
                else (search, filters, playground) picks it up automatically.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  data-testid={TESTIDS.osViewGithubBtn}
                  href="https://github.com/Recxsmacx/Motive"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 h-11 px-5 rounded-md bg-white text-zinc-900 text-sm font-medium hover:bg-zinc-100 transition-colors"
                >
                  <Github className="w-4 h-4" /> View on GitHub
                </a>
                <a
                  data-testid={TESTIDS.osContribBtn}
                  href="https://github.com/Recxsmacx/Motive"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 h-11 px-5 rounded-md border border-border hover:border-white/20 text-sm font-medium transition-colors"
                >
                  Contribution guide <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />

      <IconDetailModal
        icon={selected}
        open={!!selected}
        onOpenChange={(o) => !o && setSelected(null)}
      />
    </div>
  );
}

function ValueCard({ index, title, body }) {
  return (
    <div className="bg-background p-8 relative group">
      <div className="text-[10px] font-mono text-violet-500">0{index}</div>
      <div className="mt-4 text-lg font-semibold tracking-tight">{title}</div>
      <div className="mt-2 text-sm text-muted-foreground leading-relaxed">{body}</div>
    </div>
  );
}

function LivePreviewBell({ trigger }) {
  const Comp = iconRegistry.find((i) => i.name === "Bell").component;
  return <Comp size={72} strokeWidth={1.5} trigger={trigger} key={trigger} />;
}

function HeroGrid({ pointer, onSelect }) {
  // Determine cell size based on 12x4 grid
  const cols = 12;
  const rows = 4;
  return (
    <div
      className="grid gap-px bg-border/40"
      style={{ gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))` }}
    >
      {Array.from({ length: cols * rows }).map((_, idx) => {
        const col = idx % cols;
        const row = Math.floor(idx / cols);
        const icon = showcaseIcons[idx % showcaseIcons.length];
        // Determine proximity to pointer for activation
        const px = pointer.x * cols;
        const py = pointer.y * rows;
        const dist = Math.hypot(col + 0.5 - px, row + 0.5 - py);
        const active = pointer.active && dist < 1.6;

        return (
          <HeroCell key={idx} icon={icon} active={active} onSelect={onSelect} />
        );
      })}
    </div>
  );
}

function HeroCell({ icon, active, onSelect }) {
  const Comp = icon.component;
  return (
    <button
      onClick={() => onSelect(icon)}
      className="aspect-square flex items-center justify-center bg-[#0d0d12] hover:bg-white/[0.04] transition-colors group"
      aria-label={icon.name}
    >
      <div className={active ? "text-violet-400" : "text-zinc-500"} style={{ transition: "color 220ms" }}>
        <Comp size={24} strokeWidth={1.6} active={active} />
      </div>
    </button>
  );
}
