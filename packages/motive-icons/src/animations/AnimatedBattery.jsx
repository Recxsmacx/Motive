import { motion } from "framer-motion";
import IconShell from "../IconShell";

/**
 * AnimatedBattery
 * - Personality: Kinetic
 * - Category: Kinetic / Energy
 * - Primitives: Charge Flow + Sequential Light
 * - Signature Moment: Charge bar level fills sequentially in smooth thirds.
 */
export default function AnimatedBattery(props) {
  return (
    <IconShell {...props} label="Battery">
      {() => (
        <>
          {/* Outer Battery Shell */}
          <rect x="2" y="7" width="16" height="10" rx="2" ry="2" />
          {/* Terminal */}
          <path d="M22 11v2" />

          {/* Cell Segment 1 */}
          <motion.path
            d="M6 11v2"
            variants={{
              inactive: { opacity: 0.3 },
              active: {
                opacity: [0.3, 1, 0.9],
                transition: { duration: 0.4, delay: 0.05, ease: "easeOut" },
              },
            }}
          />

          {/* Cell Segment 2 */}
          <motion.path
            d="M10 11v2"
            variants={{
              inactive: { opacity: 0.3 },
              active: {
                opacity: [0.3, 1, 0.9],
                transition: { duration: 0.4, delay: 0.15, ease: "easeOut" },
              },
            }}
          />

          {/* Cell Segment 3 */}
          <motion.path
            d="M14 11v2"
            variants={{
              inactive: { opacity: 0.3 },
              active: {
                opacity: [0.3, 1, 0.9],
                transition: { duration: 0.4, delay: 0.25, ease: "easeOut" },
              },
            }}
          />
        </>
      )}
    </IconShell>
  );
}
