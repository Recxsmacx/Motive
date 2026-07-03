import { useEffect, useMemo, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search as SearchIcon, X } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import IconCard from "@/components/shared/IconCard";
import IconDetailModal from "@/components/shared/IconDetailModal";
import {
  iconRegistry,
  LIBRARIES,
  ANIMATION_TYPES,
  CATEGORIES,
} from "@/registry/iconRegistry";
import { TESTIDS } from "@/constants/testIds";

const ALL = "All";

export default function Icons() {
  const [query, setQuery] = useState("");
  const [library, setLibrary] = useState(ALL);
  const [category, setCategory] = useState(ALL);
  const [animation, setAnimation] = useState(ALL);
  const [selected, setSelected] = useState(null);
  const inputRef = useRef(null);

  // ⌘K / Ctrl+K to focus search
  useEffect(() => {
    const handler = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        inputRef.current?.focus();
      } else if (e.key === "/" && document.activeElement?.tagName !== "INPUT") {
        e.preventDefault();
        inputRef.current?.focus();
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return iconRegistry.filter((icon) => {
      if (library !== ALL && icon.library !== library) return false;
      if (category !== ALL && icon.category !== category) return false;
      if (animation !== ALL && icon.animation !== animation) return false;
      if (!q) return true;
      const hay = [icon.name, icon.library, icon.category, icon.animation, ...(icon.tags || [])]
        .join(" ")
        .toLowerCase();
      return hay.includes(q);
    });
  }, [query, library, category, animation]);

  const anyFilter = query || library !== ALL || category !== ALL || animation !== ALL;

  return (
    <div data-testid={TESTIDS.iconsPageRoot} className="min-h-screen bg-background text-foreground">
      <Navbar onSearchClick={() => inputRef.current?.focus()} />

      {/* Header */}
      <section className="pt-32 pb-10 border-b border-border relative overflow-hidden">
        <div className="absolute inset-0 bg-grid bg-grid-fade pointer-events-none opacity-70" />
        <div className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
          <div className="text-[10px] font-mono uppercase tracking-[0.18em] text-muted-foreground">
            / Library
          </div>
          <h1 className="mt-3 text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tightest">
            The icon library
          </h1>
          <p className="mt-4 max-w-xl text-muted-foreground leading-relaxed">
            <span data-testid={TESTIDS.iconsCount} className="text-foreground font-medium">
              {iconRegistry.length}
            </span>{" "}
            hand-animated icons across Lucide & Phosphor. Hover any icon to preview its motion.
          </p>

          {/* Search */}
          <div className="mt-9 flex flex-col md:flex-row md:items-center gap-3">
            <div className="relative flex-1 max-w-xl">
              <SearchIcon className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <input
                ref={inputRef}
                data-testid={TESTIDS.iconsSearch}
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search icons by name or tag…"
                className="w-full h-11 rounded-md bg-white/[0.03] dark:bg-white/[0.03] border border-border pl-10 pr-14 text-sm placeholder:text-muted-foreground/70 outline-none focus:border-violet-500/50 transition-colors"
              />
              <span className="absolute right-3 top-1/2 -translate-y-1/2 text-[10px] font-mono px-1.5 py-0.5 rounded border border-border text-muted-foreground">
                ⌘K
              </span>
            </div>

            {anyFilter && (
              <button
                data-testid={TESTIDS.filterReset}
                onClick={() => {
                  setQuery("");
                  setLibrary(ALL);
                  setCategory(ALL);
                  setAnimation(ALL);
                }}
                className="inline-flex items-center gap-1.5 h-11 px-3 text-sm rounded-md border border-border text-muted-foreground hover:text-foreground"
              >
                <X className="w-3.5 h-3.5" /> Reset filters
              </button>
            )}
          </div>

          {/* Filter chips */}
          <div className="mt-6 space-y-3">
            <FilterRow
              label="Library"
              options={[ALL, ...LIBRARIES]}
              value={library}
              onChange={setLibrary}
              testId={TESTIDS.filterLibrary}
            />
            <FilterRow
              label="Animation"
              options={[ALL, ...ANIMATION_TYPES]}
              value={animation}
              onChange={setAnimation}
              testId={TESTIDS.filterAnimation}
            />
            <FilterRow
              label="Category"
              options={[ALL, ...CATEGORIES]}
              value={category}
              onChange={setCategory}
              testId={TESTIDS.filterCategory}
            />
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="py-10">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
          {filtered.length === 0 ? (
            <div
              data-testid={TESTIDS.emptyState}
              className="rounded-xl border border-dashed border-border py-24 flex flex-col items-center justify-center text-center"
            >
              <div className="w-12 h-12 rounded-full bg-white/[0.04] flex items-center justify-center mb-4">
                <SearchIcon className="w-5 h-5 text-muted-foreground" />
              </div>
              <div className="text-lg font-medium">No icons found</div>
              <div className="mt-1 text-sm text-muted-foreground">
                Try a different search or reset your filters.
              </div>
            </div>
          ) : (
            <div
              data-testid={TESTIDS.iconsGrid}
              className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-px bg-border rounded-xl overflow-hidden border border-border"
            >
              <AnimatePresence mode="popLayout">
                {filtered.map((icon, i) => (
                  <IconCard key={icon.name} icon={icon} index={i} onClick={setSelected} />
                ))}
              </AnimatePresence>
            </div>
          )}
          <div className="mt-6 text-xs text-muted-foreground">
            Showing <span className="text-foreground font-medium">{filtered.length}</span> of{" "}
            {iconRegistry.length}
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

function FilterRow({ label, options, value, onChange, testId }) {
  return (
    <div className="flex items-center gap-3">
      <div className="w-20 text-[10px] font-mono uppercase tracking-widest text-muted-foreground shrink-0">
        {label}
      </div>
      <div data-testid={testId} className="flex items-center gap-1.5 overflow-x-auto no-scrollbar pb-1">
        {options.map((opt) => (
          <button
            key={opt}
            data-testid={`${testId}-${opt.toLowerCase()}`}
            onClick={() => onChange(opt)}
            className={`shrink-0 h-8 px-3 rounded-full text-xs border transition-colors ${
              value === opt
                ? "bg-violet-500/15 border-violet-500/40 text-violet-300"
                : "border-border text-muted-foreground hover:text-foreground hover:border-white/20"
            }`}
          >
            {opt}
          </button>
        ))}
      </div>
    </div>
  );
}
