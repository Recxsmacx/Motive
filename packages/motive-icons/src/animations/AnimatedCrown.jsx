import { motion } from "framer-motion";
import IconShell from "../IconShell";

/**
 * AnimatedCrown
 * - Personality: Majestic
 * - Category: Elastic / Physical
 * - Primitives: Royal Elevation + Soft Settle
 * - Signature Moment: Crown elevates with calm majesty and settles gently on baseline.
 */
export default function AnimatedCrown(props) {
  return (
    <IconShell {...props} label="Crown">
      {() => (
        <motion.path
          d="m2 4 3 12h14l3-12-6 7-4-7-4 7-6-7zm3 16h14"
          style={{ originX: "12px", originY: "20px" }}
          variants={{
            inactive: { y: 0, scale: 1 },
            active: {
              y: [0, -3, 0],
              scale: [1, 1.05, 1],
              transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
            },
          }}
        />
      )}
    </IconShell>
  );
}
