import { motion } from "framer-motion";
import IconShell from "../IconShell";

/**
 * AnimatedTarget
 * - Personality: Precise
 * - Category: Expressive / Ripple
 * - Primitives: Concentric Ring Pulse
 * - Signature Moment: Target rings ripple smoothly in concentric sequence.
 */
export default function AnimatedTarget(props) {
  return (
    <IconShell {...props} label="Target">
      {() => (
        <>
          {/* Outer Ring */}
          <motion.circle
            cx="12"
            cy="12"
            r="10"
            variants={{
              inactive: { scale: 1 },
              active: {
                scale: [1, 1.05, 1],
                transition: { duration: 0.55, delay: 0.1, ease: [0.22, 1, 0.36, 1] },
              },
            }}
          />

          {/* Inner Ring */}
          <motion.circle
            cx="12"
            cy="12"
            r="6"
            variants={{
              inactive: { scale: 1 },
              active: {
                scale: [1, 1.08, 1],
                transition: { duration: 0.55, delay: 0.05, ease: [0.22, 1, 0.36, 1] },
              },
            }}
          />

          {/* Center Bullseye Dot */}
          <motion.circle
            cx="12"
            cy="12"
            r="2"
            variants={{
              inactive: { scale: 1 },
              active: {
                scale: [1, 1.25, 1],
                transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
              },
            }}
          />
        </>
      )}
    </IconShell>
  );
}
