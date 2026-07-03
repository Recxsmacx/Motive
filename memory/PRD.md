# Motive — Animated Icon Library

## Original Problem Statement
Build a production-quality, premium open-source website for an animated icon library. The product is a developer-focused library that takes icons from Lucide Icons and Phosphor Icons and provides beautifully crafted, reusable hover, tap, click, focus, and loop animations for them. Must feel like a serious modern developer product (Render.com-inspired), not a generic AI-generated landing page.

## User Choices
- Theme: Render.com backend hosting aesthetic (dark-first, violet #8B5CF6 accent, subtle grid, editorial typography, precise 1px borders)
- Stack: React (CRA) + Tailwind + Framer Motion + Lucide + Phosphor + Router
- Font: Satoshi (primary) + JetBrains Mono (code)

## Architecture
```
frontend/src/
  App.js                        # Router + Theme + Toaster
  index.css                     # Satoshi font, tokens, grid, glow
  context/ThemeContext.jsx      # dark/light toggle (localStorage persisted)
  hooks/useIconTrigger.js       # normalises hover/click/auto/focus
  components/
    icons/IconShell.jsx         # SVG wrapper w/ controlled `active` prop
    icons/animations/*          # 33 hand-crafted icon components
    layout/Navbar.jsx           # sticky header w/ mobile nav
    layout/Footer.jsx
    shared/IconCard.jsx         # gallery cell — hover activates icon
    shared/IconDetailModal.jsx  # premium modal w/ trigger/size/stroke/speed/loop/bg
    shared/CodeBlock.jsx        # syntax-highlight + copy
  registry/iconRegistry.js      # single source-of-truth: [name, library, category, tags, animation, description, component]
  pages/
    Home.jsx                    # hero + composition + value + code + gallery preview + open source
    Icons.jsx                   # search + library/animation/category filters + grid + ⌘K
    Playground.jsx              # split: controls | live preview | generated code
    Docs.jsx                    # install, usage, triggers, contribution guide
    NotFound.jsx
  constants/testIds.js          # data-testid registry for testing agent
```

## Implemented Features (v0.1 — 2026-12-03)
- **Real `motive-icons@0.1.0` npm package** — `/app/packages/motive-icons` built with tsup → ESM (`dist/index.js`) + CJS (`dist/index.cjs`) + TypeScript declarations (`dist/index.d.ts`). 33 icons + `IconShell` + `useIconTrigger` exported by name. Peer deps: `react`, `react-dom`, `framer-motion`. Tarball published at `/motive-icons-0.1.0.tgz` (13 KB) — installable via `yarn add https://icons-in-motion.preview.emergentagent.com/motive-icons-0.1.0.tgz`. **The site itself consumes this package** (`iconRegistry.js` imports from `motive-icons`), proving every documented example works.
- **Sponsors section** (Home > `#sponsors`) — 3 tiers: Buy Me a Coffee (amber), GitHub Sponsors (violet), Feature-Your-Logo (white). 6 "Your logo here" placeholder tiles. Amber Sponsor pill in navbar + footer link.
- **Landing page** — hero, interactive 12×4 icon composition (nearby cursor activates icons), core value section, live code preview with trigger switcher, gallery preview (first 24 icons), open-source CTA, footer.
- **Icons page** — real-time search (⌘K / `/` shortcut), library/animation/category chip filters, animated icon grid (33 icons), empty state, filter reset.
- **Icon detail modal** — big preview w/ grid/dark/light background switch, trigger buttons (Hover/Click/Auto/Focus), size/stroke/speed sliders, loop toggle, live code preview with copy.
- **Playground** — icon picker, trigger picker, size/stroke/duration/delay sliders, replay button, live TSX code with copy.
- **Docs** — install snippet, basic usage, trigger reference, contribution guide code example.
- **33 animated icons** — Bell, Heart, Search, Settings, Trash, Download, Upload, Menu, X, Plus, Check, ArrowRight/Left/Up/Down, Refresh, Eye, Lock, Mail, Send, Home, User, Calendar, Clock, Star, Bookmark, Copy, ExternalLink, Play, Pause, Volume, Wifi, Loader. Each animation reflects the icon's meaning (bell swings, gear rotates, trash lid opens, arrows travel, etc.).
- **Design system** — Satoshi + JetBrains Mono, violet #8B5CF6 accent, dark background #09090b w/ subtle grid + radial violet glow, 1px borders, editorial spacing.
- **Theme toggle** — dark/light w/ localStorage persistence.
- **Accessibility** — semantic HTML, keyboard nav, aria-labels, focus rings, `prefers-reduced-motion` respected.
- **Responsive** — grid breakpoints (2 → 8 cols), mobile nav drawer, adaptive typography.
- **Contributor DX** — add icon = 2 files (`AnimatedX.jsx` + one registry entry) → auto-appears in gallery, search, filters, playground.

## Prioritised Backlog
- **P1** — 3D interactive hero (WebGL) alternative; keyboard-first icon browser (Cmd-K palette).
- **P1** — Real npm package + Storybook + type declarations for TS consumers.
- **P2** — More icons (Phosphor coverage), custom-color prop, animation timeline editor in Playground.
- **P2** — GitHub Actions + preview URL for PRs contributing new icons.
- **P3** — Icon usage stats sponsorship banner (revenue), "featured in" carousel.

## Next Actions
- Testing pass via testing_agent_v3
- Wire real GitHub repo URL once created (currently placeholder `https://github.com/`)
