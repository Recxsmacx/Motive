import { motion } from "framer-motion";
import IconShell from "../IconShell";

/**
 * AnimatedFolder
 * - Personality: Organized
 * - Category: Mechanical / Geometric
 * - Primitives: Spatial Lift + Document Reveal
 * - Signature Moment: Smooth folder breathing lift while interior document lines reveal.
 */
export default function AnimatedFolder(props) {
  return (
    <IconShell {...props} label="Folder">
      {() => (
        <motion.g
          style={{ originX: "12px", originY: "20px" }}
          variants={{
            inactive: { y: 0, scale: 1 },
            active: {
              y: [0, -2, 0],
              scale: [1, 1.03, 1],
              transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
            },
          }}
        >
          {/* Authentic Lucide Folder Hull */}
          <path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z" />

          {/* Interior Document Line 1 */}
          <motion.path
            d="M8 12h8"
            variants={{
              inactive: { y: 0, opacity: 0.3 },
              active: {
                y: [0, -2.5, -2],
                opacity: [0.3, 1, 0.9],
                transition: { duration: 0.5, delay: 0.05, ease: [0.22, 1, 0.36, 1] },
              },
            }}
          />

          {/* Interior Document Line 2 */}
          <motion.path
            d="M8 16h5"
            variants={{
              inactive: { y: 0, opacity: 0.3 },
              active: {
                y: [0, -2, -1.5],
                opacity: [0.3, 1, 0.9],
                transition: { duration: 0.55, delay: 0.1, ease: [0.22, 1, 0.36, 1] },
              },
            }}
          />
        </motion.g>
      )}
    </IconShell>
  );
}
