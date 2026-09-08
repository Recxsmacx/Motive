import { motion } from "framer-motion";
import IconShell from "../IconShell";

/**
 * AnimatedKey
 * - Personality: Secure
 * - Category: Mechanical / Rotation
 * - Primitives: Rotation + Lock Turn
 * - Signature Moment: Key turns smoothly in the lock barrel with calm mechanical return.
 */
export default function AnimatedKey(props) {
  return (
    <IconShell {...props} label="Key">
      {() => (
        <motion.g
          style={{ originX: "6px", originY: "6px" }}
          variants={{
            inactive: { rotate: 0, scale: 1 },
            active: {
              rotate: [0, -22, 5, 0],
              scale: [1, 1.05, 1],
              transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
            },
          }}
        >
          {/* Authentic Lucide Key Geometry */}
          <circle cx="7.5" cy="15.5" r="5.5" />
          <path d="m21 2-9.6 9.6" />
          <path d="m15.5 7.5 3 3L22 7l-3-3" />
        </motion.g>
      )}
    </IconShell>
  );
}
