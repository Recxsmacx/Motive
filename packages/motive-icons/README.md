# rex-motive

Beautiful, hand-animated Lucide + Phosphor icons for React. Copy and ship.

- 33 icons, every animation designed to reflect what the icon _means_ (Bell swings, gear rotates, arrows travel, Loader spins…).
- Tiny footprint — icons are plain SVGs animated with [Framer Motion](https://motion.dev/).
- Fully typed with TypeScript declarations.
- Works in any React 17+ / 18+ / 19+ app.

## Install

```bash
npm install rex-motive framer-motion
# or
yarn add rex-motive framer-motion
# or
pnpm add rex-motive framer-motion
```

`react`, `react-dom`, and `framer-motion` are peer dependencies.

## Usage

```tsx
import { AnimatedBell, AnimatedHeart } from "rex-motive";

export default function App() {
  return (
    <div className="flex gap-4">
      <AnimatedBell size={24} trigger="hover" />
      <AnimatedHeart size={24} trigger="click" />
    </div>
  );
}
```

## Props

Every animated icon accepts the same props:

| Prop          | Type                                       | Default          | Description                                                       |
| ------------- | ------------------------------------------ | ---------------- | ----------------------------------------------------------------- |
| `size`        | `number`                                   | `24`             | Pixel size of the SVG.                                            |
| `strokeWidth` | `number`                                   | `2`              | SVG stroke width.                                                 |
| `color`       | `string`                                   | `"currentColor"` | Any CSS color.                                                    |
| `trigger`     | `"hover" \| "click" \| "auto" \| "focus"` | `"hover"`        | When to run the animation.                                        |
| `loop`        | `boolean`                                  | `false`          | Loop the animation while active.                                  |
| `active`      | `boolean`                                  | `undefined`      | Manually control the active state (bypasses `trigger`).           |
| `ariaLabel`   | `string`                                   | icon name        | Accessible label.                                                 |
| `className`   | `string`                                   | `""`             | Extra classes on the wrapper element.                             |

## Triggers

- `hover` — animate while the pointer is over the icon (or it is focused).
- `click` — one-shot animation on click / Enter / Space.
- `auto` — animate immediately on mount.
- `focus` — animate on keyboard focus.

## Composing your own animated icon

Motive ships a low-level `IconShell` primitive so you can compose your own:

```tsx
import { IconShell } from "rex-motive";
import { motion } from "framer-motion";

export function AnimatedRocket(props) {
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
```

## License

MIT © Motive contributors
