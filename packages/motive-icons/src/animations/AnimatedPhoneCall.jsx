import { motion } from "framer-motion";
import IconShell from "../IconShell";

/**
 * AnimatedPhoneCall
 * - Personality: Connected
 * - Category: Expressive / Signal
 * - Primitives: Signal Emanation + Handset Vibrate
 * - Signature Moment: Handset vibrates softly as call soundwave arcs expand outward.
 */
export default function AnimatedPhoneCall(props) {
  return (
    <IconShell {...props} label="Phone Call">
      {() => (
        <>
          {/* Handset */}
          <motion.path
            d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
            style={{ originX: "8px", originY: "16px" }}
            variants={{
              inactive: { rotate: 0 },
              active: {
                rotate: [0, -5, 5, -3, 0],
                transition: { duration: 0.55, ease: "easeInOut" },
              },
            }}
          />

          {/* Soundwave 1 */}
          <motion.path
            d="M14.05 2a9 9 0 0 1 8 7.94"
            variants={{
              inactive: { opacity: 0.4 },
              active: {
                opacity: [0.4, 1, 0.5],
                transition: { duration: 0.5, delay: 0.06, ease: "easeOut" },
              },
            }}
          />

          {/* Soundwave 2 */}
          <motion.path
            d="M14.05 6A5 5 0 0 1 18 10"
            variants={{
              inactive: { opacity: 0.4 },
              active: {
                opacity: [0.4, 1, 0.5],
                transition: { duration: 0.5, delay: 0.15, ease: "easeOut" },
              },
            }}
          />
        </>
      )}
    </IconShell>
  );
}
