import { motion } from "framer-motion";
import IconShell from "../IconShell";

/**
 * AnimatedBellRing
 * - Personality: Expressive
 * - Category: Expressive / Oscillation
 * - Primitives: Pendulum Sway + Sound Waves
 * - Signature Moment: Bell swings in smooth rhythm while sound bracket arcs radiate.
 */
export default function AnimatedBellRing(props) {
  return (
    <IconShell {...props} label="Bell Ring">
      {() => (
        <>
          {/* Swinging Bell Dome & Clapper */}
          <motion.g
            style={{ originX: "12px", originY: "3px" }}
            variants={{
              inactive: { rotate: 0 },
              active: {
                rotate: [0, -10, 8, -4, 0],
                transition: { duration: 0.6, ease: "easeInOut" },
              },
            }}
          >
            <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
            <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
          </motion.g>

          {/* Left Sound Bracket */}
          <motion.path
            d="M4 2C2.8 3.7 2 5.7 2 8"
            variants={{
              inactive: { opacity: 0, x: 2 },
              active: {
                opacity: [0, 1, 0],
                x: [2, -1, 0],
                transition: { duration: 0.5, delay: 0.08, ease: "easeOut" },
              },
            }}
          />

          {/* Right Sound Bracket */}
          <motion.path
            d="M22 8c0-2.3-.8-4.3-2-6"
            variants={{
              inactive: { opacity: 0, x: -2 },
              active: {
                opacity: [0, 1, 0],
                x: [-2, 1, 0],
                transition: { duration: 0.5, delay: 0.14, ease: "easeOut" },
              },
            }}
          />
        </>
      )}
    </IconShell>
  );
}
