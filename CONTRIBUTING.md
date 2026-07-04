# Contributing to Motive

First off — thank you. Every animated icon you add improves the experience for hundreds of developers.

This file is the **short version**. For full setup instructions, project structure, and script references, see [README.md](./README.md).

## The 60-second contribution flow

```bash
# 1. Fork on GitHub, then clone your fork
git clone https://github.com/YOUR_USERNAME/motive.git
cd motive

# 2. Create a branch
git checkout -b feat/animated-rocket

# 3. Set up locally (from repo root)
./scripts/bootstrap.sh

# 4. Start dev server
cd frontend && yarn start
# Site runs at http://localhost:3000
```

Then add your icon following the three-file pattern in [README.md → Adding a new animated icon](./README.md#adding-a-new-animated-icon-contribution-flow).

## What we accept

- **New animated icons** — following the icon design guidelines below.
- **Improvements to existing animations** — smoother motion, better easing, correct transform-origins, bug fixes.
- **Docs improvements** — clarifications, typos, better examples.
- **Accessibility** — better ARIA labels, keyboard support, reduced-motion polish.
- **Performance** — smaller bundle, faster search, fewer rerenders.

## What we're careful about

- **Generic animations** — no blanket scale-1.1-on-hover for every icon. The animation must relate to the icon's meaning (bells swing, arrows travel, gears rotate).
- **Duplicate icons** — check the [Icons page](https://motive-icons.com/icons) first.
- **Adding heavy dependencies** — the package must stay small and depend only on `framer-motion` (peer).
- **Breaking API changes** — we love PRs, but breaking `AnimatedIconProps` needs an issue discussion first.

## Icon animation guidelines

Read this before designing your animation:

1. **Meaningful motion**. If the icon were a real object, what would it do when interacted with? A bell rings. A lock unlocks. An arrow travels. Design *that*.
2. **Fast**. Aim for **150–600ms** total duration for micro-interactions. Long animations feel slow.
3. **Reset cleanly**. Repeated hover must always work — no stuck states, no half-completed animations.
4. **Correct transform origins**. Use `style={{ originX: "12px", originY: "3px" }}` on `motion.g` for anything that rotates around a specific pivot (bells swing from the top, gears rotate from center, etc.).
5. **Respect `prefers-reduced-motion`**. The `IconShell` shell handles this globally via CSS — don't add JS-side overrides that break it.
6. **Keep the source SVG recognizable**. Copy the geometry from Lucide or Phosphor so users see a consistent icon regardless of the animation.

## Code style

- **Tabs vs spaces**: 2 spaces.
- **Named default exports** for icon components.
- **No emojis in code or UI** unless the user explicitly requested it in their prop.
- **Data-testid**: any new interactive element on the website must register a stable ID in `frontend/src/constants/testIds.js`.
- **Conventional commits**: `feat:`, `fix:`, `docs:`, `refactor:`, `chore:`, `test:`.

## PR checklist

Before you open a PR:

- [ ] I built the package (`yarn build` in `packages/motive-icons/`).
- [ ] I copied the fresh tarball into `frontend/public/` and re-installed it in the site.
- [ ] I hovered the icon on `/icons` and it animates correctly.
- [ ] I opened `/playground` and confirmed the code snippet renders with my icon.
- [ ] I added the icon to `frontend/src/registry/iconRegistry.js` with a helpful `description`.
- [ ] I added a type declaration in `packages/motive-icons/src/index.d.ts`.
- [ ] `yarn build` (site) has no compile errors.
- [ ] My PR title uses [Conventional Commits](https://www.conventionalcommits.org/).

## Filing issues

**Bug**? Include:
- What you did
- What you expected
- What actually happened
- Browser + OS
- Screenshot / short screen recording if visual

**Icon request**? Include:
- The Lucide or Phosphor icon name
- A one-sentence description of the animation you have in mind
- (Optional) A link to a similar animation you like

## Code of conduct

Be kind. Be constructive. Assume good intent. Disagreements are fine — personal attacks are not. Maintainers reserve the right to remove any comment, commit, or contributor that breaks this in spirit or in letter.

## License

By contributing you agree that your code is released under the [MIT License](./LICENSE) alongside the rest of the project.

---

Thanks for making Motive better. ♥
