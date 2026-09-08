import { motion } from "framer-motion";
import IconShell from "../IconShell";

/**
 * AnimatedMedal
 * - Personality: Prestigious
 * - Category: Organic / Pendulum
 * - Primitives: Pendulum Sway + Settle
 * - Signature Moment: Medallion pendant swings in smooth, calm arc.
 */
export default function AnimatedMedal(props) {
  return (
    <IconShell {...props} label="Medal">
      {() => (
        <>
          {/* Top Hanging Ribbon */}
          <path d="M7.21 15 2.66 7.14a2 2 0 0 1 .13-2.2L4.4 2.8A2 2 0 0 1 6 2h12a2 2 0 0 1 1.6.8l1.6 2.14a2 2 0 0 1 .14 2.2L16.79 15" />
          <path d="M11 12 5.12 2.2" />
          <path d="m13 12 5.88-9.8" />

          {/* Swinging Medal Coin */}
          <motion.g
            style={{ originX: "12px", originY: "14px" }}
            variants={{
              inactive: { rotate: 0 },
              active: {
                rotate: [0, -8, 6, -3, 0],
                transition: { duration: 0.6, ease: "easeInOut" },
              },
            }}
          >
            <circle cx="12" cy="17" r="5" />
            <circle cx="12" cy="17" r="2" />
          </motion.g>
        </>
      )}
    </IconShell>
  );
}
