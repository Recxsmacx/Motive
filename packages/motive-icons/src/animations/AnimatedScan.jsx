import { motion } from "framer-motion";
import IconShell from "../IconShell";

/**
 * AnimatedScan
 * - Personality: High-Tech / Precise
 * - Category: Optical / Laser
 * - Primitives: Laser Sweep + Bracket Settle
 * - Signature Moment: Laser sweep line tracks down from top brackets to bottom with calm, steady velocity.
 */
export default function AnimatedScan(props) {
  return (
    <IconShell {...props} label="Scan">
      {() => (
        <>
          {/* Top-Left Bracket */}
          <path d="M3 7V5a2 2 0 0 1 2-2h2" />
          {/* Top-Right Bracket */}
          <path d="M17 3h2a2 2 0 0 1 2 2v2" />
          {/* Bottom-Left Bracket */}
          <path d="M3 17v2a2 2 0 0 0 2 2h2" />
          {/* Bottom-Right Bracket */}
          <path d="M17 21h2a2 2 0 0 0 2-2v-2" />

          {/* Laser Sweep Ray */}
          <motion.path
            d="M5 12h14"
            variants={{
              inactive: { y: 0, opacity: 0.5 },
              active: {
                y: [-5, 5, 0],
                opacity: [0.4, 1, 0.9, 0.6],
                transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
              },
            }}
          />
        </>
      )}
    </IconShell>
  );
}
