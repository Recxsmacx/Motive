import { Github, Coffee, Heart, Building2, ArrowRight, Check } from "lucide-react";
import { motion } from "framer-motion";
import AnimatedHeart from "@/components/icons/animations/AnimatedHeart";

/**
 * Sponsors — three-tier support system:
 *   1. Buy Me a Coffee (one-off tips)
 *   2. GitHub Sponsors (recurring, individuals)
 *   3. Feature your logo (companies — paid tier with logo placement)
 *
 * URLs are placeholders — swap them once the accounts exist.
 */

const TIERS = [
  {
    id: "coffee",
    icon: Coffee,
    title: "Buy me a coffee",
    subtitle: "One-off",
    body: "Say thanks with a small tip. Fuels late-night icon animations.",
    cta: "Buy a coffee",
    href: "https://www.buymeacoffee.com/motive-icons",
    accent: "amber",
    perks: ["A warm thank-you note", "Contributor shout-out (optional)"],
    testId: "sponsor-coffee-btn",
  },
  {
    id: "github",
    icon: Github,
    title: "GitHub Sponsors",
    subtitle: "Recurring",
    body: "Monthly support keeps the library maintained and helps ship new icons regularly.",
    cta: "Sponsor on GitHub",
    href: "https://github.com/sponsors/motive-icons",
    accent: "violet",
    perks: ["Sponsor badge on your GitHub", "Priority on icon requests", "Access to sponsors-only updates"],
    testId: "sponsor-github-btn",
  },
  {
    id: "logo",
    icon: Building2,
    title: "Feature your logo",
    subtitle: "For teams",
    body: "Companies shipping with Motive can back the project and get a logo placement in the footer and README.",
    cta: "Feature your logo",
    href: "mailto:sponsors@motive-icons.dev?subject=Motive%20-%20Logo%20sponsorship",
    accent: "white",
    perks: ["Logo on site footer + README", "Link back to your homepage", "Priority feature requests"],
    testId: "sponsor-logo-btn",
  },
];

const FEATURED_SLOTS = [0, 1, 2, 3, 4, 5];

export default function Sponsors() {
  return (
    <section
      data-testid="sponsors-section"
      id="sponsors"
      className="py-24 border-t border-border"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        <div className="flex items-end justify-between gap-8 mb-14 flex-wrap">
          <div>
            <div className="text-[10px] font-mono uppercase tracking-[0.18em] text-muted-foreground">
              / Support the project
            </div>
            <h2 className="mt-3 text-3xl sm:text-4xl font-semibold tracking-tight max-w-xl">
              Sponsor Motive. Keep icons moving.
            </h2>
          </div>
          <div className="text-sm text-muted-foreground max-w-sm inline-flex items-center gap-2">
            <span>Every contribution keeps the library</span>
            <AnimatedHeart size={14} trigger="auto" loop />
            <span>free, open, and growing.</span>
          </div>
        </div>

        {/* Tier cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border rounded-xl overflow-hidden border border-border">
          {TIERS.map((tier, idx) => (
            <TierCard key={tier.id} tier={tier} index={idx} />
          ))}
        </div>

        {/* Featured sponsors */}
        <div className="mt-14">
          <div className="flex items-end justify-between gap-4 mb-6">
            <div>
              <div className="text-[10px] font-mono uppercase tracking-[0.18em] text-muted-foreground">
                / Featured sponsors
              </div>
              <h3 className="mt-2 text-xl font-semibold tracking-tight">
                The teams making this possible
              </h3>
            </div>
            <a
              data-testid="sponsors-become-btn"
              href="mailto:sponsors@motive-icons.dev?subject=Motive%20-%20Sponsor%20us"
              className="hidden sm:inline-flex items-center gap-2 h-9 px-3 text-xs rounded-md border border-border text-muted-foreground hover:text-foreground hover:border-white/20 transition-colors"
            >
              Become a sponsor <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-px bg-border rounded-xl overflow-hidden border border-border">
            {FEATURED_SLOTS.map((i) => (
              <FeaturedSlot key={i} index={i} />
            ))}
          </div>
        </div>

        {/* Small tip strip */}
        <div className="mt-10 rounded-xl border border-border bg-[#0d0d12] p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-start gap-3">
            <div className="w-9 h-9 rounded-md bg-amber-400/10 border border-amber-400/30 flex items-center justify-center text-amber-300">
              <Coffee className="w-4 h-4" />
            </div>
            <div>
              <div className="text-sm font-medium">Just want to say thanks?</div>
              <div className="text-xs text-muted-foreground mt-0.5">
                A quick coffee helps more than you think.
              </div>
            </div>
          </div>
          <a
            data-testid="sponsor-tip-btn"
            href="https://www.buymeacoffee.com/motive-icons"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 h-10 px-4 rounded-md bg-amber-400 hover:bg-amber-300 text-zinc-900 text-sm font-semibold transition-colors"
          >
            <Coffee className="w-4 h-4" />
            Buy me a coffee
          </a>
        </div>
      </div>
    </section>
  );
}

function TierCard({ tier, index }) {
  const Icon = tier.icon;
  const accents = {
    amber: {
      chip: "bg-amber-400/10 border-amber-400/30 text-amber-300",
      cta: "bg-amber-400 hover:bg-amber-300 text-zinc-900",
      dot: "bg-amber-300",
    },
    violet: {
      chip: "bg-violet-500/15 border-violet-500/40 text-violet-300",
      cta: "bg-violet-600 hover:bg-violet-500 text-white shadow-[0_0_25px_rgba(139,92,246,0.35)]",
      dot: "bg-violet-400",
    },
    white: {
      chip: "bg-white/[0.06] border-white/15 text-foreground",
      cta: "bg-white hover:bg-zinc-100 text-zinc-900",
      dot: "bg-foreground",
    },
  }[tier.accent];

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ delay: index * 0.08, duration: 0.35 }}
      className="bg-background p-8 relative flex flex-col"
    >
      <div className="flex items-center justify-between">
        <div className={`inline-flex items-center gap-2 h-7 px-2.5 rounded-md border text-[10px] font-mono uppercase tracking-widest ${accents.chip}`}>
          <Icon className="w-3 h-3" />
          {tier.subtitle}
        </div>
        <div className="text-[10px] font-mono text-muted-foreground">0{index + 1}</div>
      </div>

      <div className="mt-6 text-xl font-semibold tracking-tight">{tier.title}</div>
      <div className="mt-2 text-sm text-muted-foreground leading-relaxed">{tier.body}</div>

      <ul className="mt-6 space-y-2 flex-1">
        {tier.perks.map((perk) => (
          <li key={perk} className="flex items-start gap-2 text-sm">
            <span className={`w-1.5 h-1.5 rounded-full mt-1.5 shrink-0 ${accents.dot}`} />
            <span className="text-muted-foreground">{perk}</span>
          </li>
        ))}
      </ul>

      <a
        data-testid={tier.testId}
        href={tier.href}
        target={tier.href.startsWith("mailto:") ? undefined : "_blank"}
        rel="noreferrer"
        className={`mt-7 inline-flex items-center justify-center gap-2 h-10 px-4 rounded-md text-sm font-medium transition-all ${accents.cta}`}
      >
        {tier.cta}
        <ArrowRight className="w-4 h-4" />
      </a>
    </motion.div>
  );
}

function FeaturedSlot({ index }) {
  return (
    <a
      data-testid={`sponsor-slot-${index}`}
      href="mailto:sponsors@motive-icons.dev?subject=Motive%20-%20Feature%20our%20logo"
      className="group aspect-[2/1] bg-background flex flex-col items-center justify-center gap-1.5 hover:bg-white/[0.03] transition-colors"
    >
      <div className="w-8 h-8 rounded-md border border-dashed border-border flex items-center justify-center text-muted-foreground/60 group-hover:border-violet-500/40 group-hover:text-violet-400 transition-colors">
        <Building2 className="w-3.5 h-3.5" />
      </div>
      <div className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground/60 group-hover:text-muted-foreground transition-colors">
        Your logo here
      </div>
    </a>
  );
}
