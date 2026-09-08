import { motion } from "framer-motion";
import IconShell from "../IconShell";

/**
 * AnimatedFilePlus
 * - Personality: Creative
 * - Category: Mechanical / Additive
 * - Primitives: Rotation + Snap + Scaling
 * - Signature Moment: Plus badge spins 90° with calm, elegant spring settling.
 */
export default function AnimatedFilePlus(props) {
  return (
    <IconShell {...props} label="File Plus">
      {() => (
        <>
          {/* Main Document Body */}
          <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
          <path d="M14 2v4a2 2 0 0 0 2 2h4" />

          {/* Plus Cross Mark with Rotation */}
          <motion.g
            style={{ originX: "12px", originY: "15px" }}
            variants={{
              inactive: { rotate: 0, scale: 1 },
              active: {
                rotate: [0, 90],
                scale: [1, 1.15, 1],
                transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
              },
            }}
          >
            <path d="M12 18v-6" />
            <path d="M9 15h6" />
          </motion.g>
        </>
      )}
    </IconShell>
  );
}
