import { motion } from "framer-motion";
import IconShell from "../IconShell";

/**
 * AnimatedFile
 * - Personality: Tactile
 * - Category: Physical / Kinetic
 * - Primitives: Corner Curl + Spring + Settle
 * - Signature Moment: Top-right corner fold peels down with calm elastic peel tension.
 */
export default function AnimatedFile(props) {
  return (
    <IconShell {...props} label="File">
      {() => (
        <>
          {/* Main Sheet Outline */}
          <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />

          {/* Dynamic Corner Dog-Ear Fold */}
          <motion.path
            d="M14 2v4a2 2 0 0 0 2 2h4"
            style={{ originX: "14px", originY: "2px" }}
            variants={{
              inactive: { rotate: 0, scale: 1 },
              active: {
                rotate: [0, 10, -3, 0],
                scale: [1, 1.15, 0.98, 1],
                transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
              },
            }}
          />
        </>
      )}
    </IconShell>
  );
}
