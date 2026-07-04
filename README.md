<div align="center">

# Motive

**Beautiful icons. Meaningful motion. Copy and ship.**

A production-quality, open-source library of hand-animated Lucide + Phosphor icons for React, plus the marketing/gallery/playground website that showcases it.

[Live site](https://motive-icons.com) · [Documentation](https://motive-icons.com/docs) · [Playground](https://motive-icons.com/playground) · [Download tarball](https://motive-icons.com/motive-icons-0.1.0.tgz)

</div>

---

## What's in this repo

This is a **monorepo** with two things:

```
/app
├── packages/motive-icons/     # The publishable npm package (33 animated icons)
│   ├── src/
│   │   ├── IconShell.jsx      # Universal wrapper w/ controlled active state
│   │   ├── hooks/             # useIconTrigger — hover/click/auto/focus
│   │   ├── animations/        # 33 hand-crafted <AnimatedXxx /> components
│   │   ├── index.js           # Barrel exports
│   │   └── index.d.ts         # TypeScript declarations
│   ├── dist/                  # Built output (ESM + CJS + .d.ts)
│   ├── package.json
│   └── tsup.config.js         # Build configuration
│
├── frontend/                  # The website (React + CRA + Tailwind)
│   ├── src/
│   │   ├── pages/             # Home · Icons · Playground · Docs · NotFound
│   │   ├── components/
│   │   │   ├── layout/        # Navbar, Footer
│   │   │   ├── shared/        # IconCard, IconDetailModal, CodeBlock, Sponsors
│   │   │   └── ui/            # shadcn/ui primitives (Dialog, Slider, Switch…)
│   │   ├── registry/          # Central iconRegistry — drives search/filters/gallery
│   │   ├── context/           # ThemeContext (dark/light)
│   │   ├── constants/testIds.js
│   │   └── App.js
│   ├── public/
│   │   └── motive-icons-0.1.0.tgz   # Latest built tarball, served for install
│   └── package.json
│
├── backend/                   # FastAPI (unused for now — placeholder)
├── memory/                    # Product docs (PRD.md)
└── README.md                  # ← you are here
```

The website **imports icons from the `motive-icons` package** — so every animation you see on the site is the exact same code a consumer would get after `yarn add motive-icons`.

---

## Prerequisites

| Tool     | Version    | Why                             |
| -------- | ---------- | ------------------------------- |
| Node     | ≥ 18.x     | Website + package build         |
| Yarn     | 1.22.x     | Package manager (do NOT use npm) |
| Python   | ≥ 3.10     | Optional — backend placeholder  |
| MongoDB  | ≥ 6.0      | Optional — backend placeholder  |

Check:

```bash
node --version   # v18+ ideally v20+
yarn --version   # 1.22.x
```

> Yarn Classic is required. `npm` is not supported and will produce a different lockfile.

---

## Quick start — one command

The website consumes the built `motive-icons` package tarball, so **the package must be built before the website is installed**. The bootstrap script handles the whole chain:

```bash
# 1. Clone
git clone https://github.com/YOUR_ORG/motive.git
cd motive

# 2. Bootstrap everything (builds the package + installs the website)
./scripts/bootstrap.sh

# 3. Start the dev server
cd frontend
yarn start
```

The site is available at **http://localhost:3000**. Hot-reload is enabled — edits under `frontend/src/` refresh automatically.

### What bootstrap does

```
[1/5] Installs motive-icons build tooling      (packages/motive-icons/)
[2/5] Builds the package                        → dist/index.{js,cjs,d.ts}
[3/5] Packs a fresh tarball                     → motive-icons-<v>.tgz
[4/5] Copies the tarball into frontend/public/  (so it's downloadable)
[5/5] Installs website dependencies             (frontend/ — creates .env from .env.example if missing)
```

### Manual install (if you don't want to use the script)

```bash
# 1. Build the package
cd packages/motive-icons
yarn install
yarn build
npm pack                                    # → motive-icons-0.1.0.tgz

# 2. Publish the tarball for the site
cp motive-icons-0.1.0.tgz ../../frontend/public/

# 3. Install the website
cd ../../frontend
cp .env.example .env                         # only if you don't have one
yarn install
yarn start                                   # http://localhost:3000
```

> **Yarn Classic only** — `frontend/package.json` references the local package with the relative `file:../packages/motive-icons/motive-icons-0.1.0.tgz` protocol. npm's semantics for `file:` differ; use yarn.

---

## Working on the `motive-icons` package

The website consumes the built tarball at `frontend/public/motive-icons-<v>.tgz`. When you edit any icon animation or the `IconShell`, rebuild the package and re-install it into the site:

```bash
# From repo root — one command handles everything
./scripts/bootstrap.sh
```

Or do it manually:

```bash
# 1. Rebuild the package
cd packages/motive-icons
yarn build
npm pack                                     # → motive-icons-<v>.tgz

# 2. Copy the fresh tarball into the site (so downloads + install stay in sync)
cp motive-icons-*.tgz ../../frontend/public/

# 3. Force-reinstall in the website (yarn caches by content hash, so bump/pack again if unchanged)
cd ../../frontend
rm -rf node_modules/motive-icons
yarn add file:../packages/motive-icons/motive-icons-0.1.0.tgz --force
```

Reload the dev server and your changes are live.

> Tip: for tighter iteration you can `yarn link` the package (`cd packages/motive-icons && yarn link`, then `cd frontend && yarn link motive-icons`). Undo with `yarn unlink`.

---

## Adding a new animated icon (contribution flow)

Adding an icon is **three edits**:

### 1. Create the animated component

```bash
touch packages/motive-icons/src/animations/AnimatedRocket.jsx
```

```jsx
// packages/motive-icons/src/animations/AnimatedRocket.jsx
import { motion } from "framer-motion";
import IconShell from "../IconShell";

export default function AnimatedRocket(props) {
  return (
    <IconShell {...props} label="Rocket">
      {() => (
        <motion.g
          style={{ originX: "12px", originY: "22px" }}
          variants={{
            inactive: { y: 0 },
            active: {
              y: [0, -4, 0],
              transition: { duration: 0.5, ease: [0.34, 1.56, 0.64, 1] },
            },
          }}
        >
          {/* Replace with your SVG paths — must fit a 24×24 viewBox */}
          <path d="M12 2l4 8h-8l4-8z" />
          <path d="M8 10v8l4 4 4-4v-8" />
        </motion.g>
      )}
    </IconShell>
  );
}
```

### 2. Export it from the package barrel

```js
// packages/motive-icons/src/index.js
export { default as AnimatedRocket } from "./animations/AnimatedRocket";
```

Also add a type entry:

```ts
// packages/motive-icons/src/index.d.ts
export declare function AnimatedRocket(props: AnimatedIconProps): JSX.Element;
```

### 3. Register it on the website

```js
// frontend/src/registry/iconRegistry.js
import { AnimatedRocket } from "motive-icons";

// …add to iconRegistry array:
{
  name: "Rocket",
  library: "Lucide",
  category: "Interface",
  tags: ["launch", "start"],
  animation: "Directional",
  description: "Rocket lifts off with a subtle bounce.",
  component: AnimatedRocket,
},
```

Rebuild the package (see the previous section) and the icon **automatically appears** in the gallery, search, filters, and playground — no other changes needed.

### Animation guidelines

- Every animation should reflect the meaning of the icon (bell swings, arrows travel, trash lids open). Avoid generic scale/rotate on everything.
- Duration: **150 – 600 ms** for most micro-interactions.
- Reset cleanly — repeat hover must always work.
- Respect `prefers-reduced-motion` (the shell already does this globally).
- Keep the SVG geometry recognizable — copy the Lucide/Phosphor path where possible so users get consistent visuals.

---

## Contributing

We ❤️ contributions. The full workflow:

1. **Fork** the repo on GitHub.
2. **Create a branch** off `main`:  
   `git checkout -b feat/animated-rocket`
3. **Add your icon** following the three-step flow above.
4. **Test locally** — hover it on `/icons`, tweak in `/playground`.
5. **Commit** with a conventional-commit message:  
   `git commit -m "feat(icons): add AnimatedRocket"`
6. **Push** and open a **pull request** describing the animation intent.
7. A maintainer will review the animation quality, code style, and register it for the next release.

### Style rules

- **Icons**: default stroke width `2`, 24×24 viewBox, `stroke="currentColor"`, `strokeLinecap="round"`, `strokeLinejoin="round"`.
- **Components**: named default export per file, prop destructure at the top.
- **CSS**: Tailwind utility classes; avoid inline styles unless dynamic. No emojis in the UI.
- **Testing IDs**: any interactive element on the website must expose a `data-testid` registered in `frontend/src/constants/testIds.js`.
- **Commits**: [Conventional Commits](https://www.conventionalcommits.org/) — `feat:`, `fix:`, `docs:`, `refactor:`, `chore:`.

### Reporting bugs / requesting icons

Open an issue with:
- A short title (e.g. “Bell animation stutters on second hover”).
- Steps to reproduce OR the Lucide/Phosphor icon name you want animated.
- Screenshots or a short screen recording if it’s visual.

---

## Scripts reference

### Website (`/frontend`)

```bash
yarn start          # dev server (http://localhost:3000)
yarn build          # production build → build/
yarn test           # run tests (Jest via CRA)
```

### Package (`/packages/motive-icons`)

```bash
yarn build          # build ESM + CJS + copy .d.ts → dist/
npm pack            # create motive-icons-<version>.tgz
npm publish --access public   # publish to npmjs.org (requires auth)
```

---

## Deploying the website

Any static hosting works — the site is a plain CRA build.

```bash
cd frontend
yarn build          # outputs to build/
# Deploy the build/ folder to Vercel, Netlify, Cloudflare Pages, S3+CloudFront, etc.
```

The tarball at `public/motive-icons-0.1.0.tgz` is copied as-is into the build, so `yarn add https://your-domain/motive-icons-0.1.0.tgz` will keep working post-deploy.

---

## Publishing a new package version

1. Bump the version in `packages/motive-icons/package.json`.
2. `cd packages/motive-icons && yarn build && npm pack`.
3. Copy the tarball into `frontend/public/`.
4. Update the version string in `frontend/src/pages/Docs.jsx` (`PACKAGE_VERSION` + `TARBALL_URL`).
5. `npm publish --access public` (once npm credentials are configured).
6. Tag the release: `git tag v0.1.1 && git push --tags`.

---

## Tech stack

- **Package**: React 18, framer-motion, built with **tsup** (esbuild)
- **Website**: React 18, React Router, Tailwind CSS, Framer Motion, shadcn/ui, Sonner
- **Icons library**: Lucide React + Phosphor Icons (for reference geometry)
- **Font**: Satoshi (via Fontshare) + JetBrains Mono for code
- **Design accent**: `#8B5CF6` (violet), inspired by Render.com

---

## License

[MIT](./LICENSE) © Motive contributors — free to use, modify, and distribute.

## Support the project

If Motive helps you ship, consider [sponsoring on GitHub](https://github.com/sponsors/motive-icons) or featuring your company logo on the site → see the [Sponsors section](https://motive-icons.com/#sponsors).

---

<div align="center">

Made with ♥ for the community. Built in public.

</div>
