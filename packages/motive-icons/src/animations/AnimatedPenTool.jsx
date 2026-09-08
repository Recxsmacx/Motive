import { motion } from "framer-motion";
import IconShell from "../IconShell";

/**
 * AnimatedPenTool
 * - Personality: Precise
 * - Category: Geometric / Vector
 * - Primitives: Vector Precision + Node Tap
 * - Signature Moment: Pen nib taps gently at anchor point with calm spring return.
 */
export default function AnimatedPenTool(props) {
  return (
    <IconShell {...props} label="Pen Tool">
      {() => (
        <motion.g
          style={{ originX: "18px", originY: "6px" }}
          variants={{
            inactive: { rotate: 0, scale: 1 },
            active: {
              rotate: [0, -8, 3, 0],
              scale: [1, 1.04, 1],
              transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
            },
          }}
        >
          {/* Authentic Lucide PenTool Paths */}
          <path d="M15.707 21.293a1 1 0 0 1-1.414 0l-1.586-1.586a1 1 0 0 1 0-1.414l5.586-5.586a1 1 0 0 1 1.414 0l1.586 1.586a1 1 0 0 1 0 1.414z" />
          <path d="m18 13-1.375-6.874a1 1 0 0 0-.746-.776L3.235 2.038a1 1 0 0 0-1.197 1.197L5.35 15.879a1 1 0 0 0 .776.746L13 18" />
          <circle cx="11" cy="11" r="2" />
        </motion.g>
      )}
    </IconShell>
  );
}
