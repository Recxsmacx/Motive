import { motion } from "framer-motion";
import IconShell from "../IconShell";

/**
 * AnimatedMicOff
 * - Personality: Decisive
 * - Category: Kinetic / Draw
 * - Primitives: Stroke Draw + Mute Slash
 * - Signature Moment: Diagonal slash draws across mic with calm precision.
 */
export default function AnimatedMicOff(props) {
  return (
    <IconShell {...props} label="Mic Off">
      {() => (
        <>
          {/* Muted Mic Body Components */}
          <path d="M18.89 13.23A7.12 7.12 0 0 0 19 12v-2" />
          <path d="M5 10v2a7 7 0 0 0 12 5" />
          <path d="M15 9.34V5a3 3 0 0 0-5.68-1.33" />
          <path d="M9 9v3a3 3 0 0 0 5.12 2.12" />
          <line x1="12" x2="12" y1="19" y2="22" />

          {/* Dynamic Single Strike-Through Slash */}
          <motion.line
            x1="2"
            y1="2"
            x2="22"
            y2="22"
            variants={{
              inactive: { pathLength: 1 },
              active: {
                pathLength: [0, 1],
                transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
              },
            }}
          />
        </>
      )}
    </IconShell>
  );
}
