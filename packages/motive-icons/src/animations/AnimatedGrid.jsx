import { motion } from "framer-motion";
import IconShell from "../IconShell";

/**
 * AnimatedGrid
 * - Personality: Structured
 * - Category: Geometric / Assembly
 * - Primitives: Assembly + Smooth Pulse
 * - Signature Moment: 4 grid quadrants pulse diagonally with calm, staggered spacing.
 */
export default function AnimatedGrid(props) {
  return (
    <IconShell {...props} label="Grid">
      {() => (
        <>
          {/* Top-Left */}
          <motion.rect
            x="3"
            y="3"
            width="7"
            height="7"
            rx="1"
            variants={{
              inactive: { scale: 1 },
              active: {
                scale: [1, 1.08, 1],
                transition: { duration: 0.5, delay: 0, ease: [0.22, 1, 0.36, 1] },
              },
            }}
          />

          {/* Top-Right */}
          <motion.rect
            x="14"
            y="3"
            width="7"
            height="7"
            rx="1"
            variants={{
              inactive: { scale: 1 },
              active: {
                scale: [1, 1.08, 1],
                transition: { duration: 0.5, delay: 0.08, ease: [0.22, 1, 0.36, 1] },
              },
            }}
          />

          {/* Bottom-Left */}
          <motion.rect
            x="3"
            y="14"
            width="7"
            height="7"
            rx="1"
            variants={{
              inactive: { scale: 1 },
              active: {
                scale: [1, 1.08, 1],
                transition: { duration: 0.5, delay: 0.14, ease: [0.22, 1, 0.36, 1] },
              },
            }}
          />

          {/* Bottom-Right */}
          <motion.rect
            x="14"
            y="14"
            width="7"
            height="7"
            rx="1"
            variants={{
              inactive: { scale: 1 },
              active: {
                scale: [1, 1.08, 1],
                transition: { duration: 0.5, delay: 0.2, ease: [0.22, 1, 0.36, 1] },
              },
            }}
          />
        </>
      )}
    </IconShell>
  );
}
