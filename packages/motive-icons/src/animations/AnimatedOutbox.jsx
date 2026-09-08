import { motion } from "framer-motion";
import IconShell from "../IconShell";

/**
 * AnimatedOutbox
 * - Personality: Kinetic
 * - Category: Kinetic / Directional
 * - Primitives: Anticipation + Smooth Ejection
 * - Signature Moment: Envelope arrow glides upward out of the wire tray with calm ascent.
 */
export default function AnimatedOutbox(props) {
  return (
    <IconShell {...props} label="Outbox">
      {() => (
        <>
          {/* Authentic Wire Tray Base */}
          <path d="M22 12h-6l-2 3h-4l-2-3H2" />
          <path d="M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z" />

          {/* Clean Ejecting Arrow Rising Smoothly */}
          <motion.g
            variants={{
              inactive: { y: 0, opacity: 0.9 },
              active: {
                y: [0, 1, -4, 0],
                opacity: [0.9, 1, 0.4, 1],
                transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
              },
            }}
          >
            <path d="M12 9V3" />
            <path d="m15 6-3-3-3 3" />
          </motion.g>
        </>
      )}
    </IconShell>
  );
}
