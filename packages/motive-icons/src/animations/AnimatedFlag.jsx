import { motion } from "framer-motion";
import IconShell from "../IconShell";

/**
 * AnimatedFlag
 * - Personality: Proud
 * - Category: Organic / Wave
 * - Primitives: Flag Wave + Cloth Flutter
 * - Signature Moment: Flag fabric flutters smoothly in a gentle breeze while mast stays firm.
 */
export default function AnimatedFlag(props) {
  return (
    <IconShell {...props} label="Flag">
      {() => (
        <>
          {/* Rigid Mast Pole */}
          <path d="M4 22v-7" />

          {/* Waving Fabric */}
          <motion.path
            d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"
            style={{ originX: "4px", originY: "9px" }}
            variants={{
              inactive: { skewY: 0 },
              active: {
                skewY: [0, -6, 5, -2, 0],
                transition: { duration: 0.6, ease: "easeInOut" },
              },
            }}
          />
        </>
      )}
    </IconShell>
  );
}
