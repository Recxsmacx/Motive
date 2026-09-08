import { motion } from "framer-motion";
import IconShell from "../IconShell";

/**
 * AnimatedBrain
 * - Personality: Organic
 * - Category: Organic / Synaptic
 * - Primitives: Neural Pulse + Gentle Ripple
 * - Signature Moment: Synaptic bridge sparks with calm staggered neural glow.
 */
export default function AnimatedBrain(props) {
  return (
    <IconShell {...props} label="Brain">
      {() => (
        <>
          {/* Left Hemisphere */}
          <motion.path
            d="M9.5 4a3.5 3.5 0 0 0-3.5 3.5c0 .34.05.67.14.98A4 4 0 0 0 4 12a4 4 0 0 0 1.5 3.16A3.5 3.5 0 0 0 9.5 19h.5V4h-.5Z"
            style={{ originX: "10px", originY: "12px" }}
            variants={{
              inactive: { scale: 1 },
              active: {
                scale: [1, 1.05, 0.98, 1],
                transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
              },
            }}
          />

          {/* Right Hemisphere */}
          <motion.path
            d="M14.5 4a3.5 3.5 0 0 1 3.5 3.5c0 .34-.05.67-.14.98A4 4 0 0 1 20 12a4 4 0 0 1-1.5 3.16A3.5 3.5 0 0 1 14.5 19h-.5V4h.5Z"
            style={{ originX: "14px", originY: "12px" }}
            variants={{
              inactive: { scale: 1 },
              active: {
                scale: [1, 1.05, 0.98, 1],
                transition: { duration: 0.55, delay: 0.08, ease: [0.22, 1, 0.36, 1] },
              },
            }}
          />

          {/* Synaptic Bridges */}
          <motion.path
            d="M10 8h4 M10 12h4 M10 16h4"
            variants={{
              inactive: { opacity: 0.4 },
              active: {
                opacity: [0.4, 1, 0.5],
                transition: { duration: 0.5, delay: 0.06, ease: "easeOut" },
              },
            }}
          />
        </>
      )}
    </IconShell>
  );
}
