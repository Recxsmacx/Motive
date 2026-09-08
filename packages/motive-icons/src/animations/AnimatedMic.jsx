import { motion } from "framer-motion";
import IconShell from "../IconShell";

/**
 * AnimatedMic
 * - Personality: Resonant
 * - Category: Organic / Voice
 * - Primitives: Capsule Resonance + Acoustic Lift
 * - Signature Moment: Microphone capsule pulses gently with subtle acoustic elevation.
 */
export default function AnimatedMic(props) {
  return (
    <IconShell {...props} label="Mic">
      {() => (
        <>
          {/* Main Microphone Capsule */}
          <motion.path
            d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"
            style={{ originX: "12px", originY: "10px" }}
            variants={{
              inactive: { scale: 1 },
              active: {
                scale: [1, 1.08, 0.98, 1],
                transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
              },
            }}
          />

          {/* Acoustic Cradle & Stand */}
          <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
          <line x1="12" x2="12" y1="19" y2="22" />
        </>
      )}
    </IconShell>
  );
}
