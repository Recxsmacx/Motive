import { motion } from "framer-motion";
import IconShell from "../IconShell";

/**
 * AnimatedScissors
 * - Personality: Mechanical
 * - Category: Mechanical / Snip
 * - Primitives: Cross Pivot + Snip
 * - Signature Moment: Both cutting blades pivot around central rivet in a crisp cross-cut.
 */
export default function AnimatedScissors(props) {
  return (
    <IconShell {...props} label="Scissors">
      {() => (
        <>
          {/* Upper Handle & Lower Blade */}
          <motion.g
            style={{ originX: "12px", originY: "12px" }}
            variants={{
              inactive: { rotate: 0 },
              active: {
                rotate: [0, 12, 0],
                transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
              },
            }}
          >
            <circle cx="6" cy="6" r="3" />
            <path d="M8.12 8.12 12 12" />
            <path d="M20 4 8.12 15.88" />
          </motion.g>

          {/* Lower Handle & Upper Blade */}
          <motion.g
            style={{ originX: "12px", originY: "12px" }}
            variants={{
              inactive: { rotate: 0 },
              active: {
                rotate: [0, -12, 0],
                transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
              },
            }}
          >
            <circle cx="6" cy="18" r="3" />
            <path d="M14.8 14.8 20 20" />
            <path d="M8.12 8.12 12 12" />
          </motion.g>

          {/* Center Pivot Point */}
          <circle cx="12" cy="12" r="1" fill="currentColor" />
        </>
      )}
    </IconShell>
  );
}
