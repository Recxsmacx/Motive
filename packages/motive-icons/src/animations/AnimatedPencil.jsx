import { motion } from "framer-motion";
import IconShell from "../IconShell";

/**
 * AnimatedPencil
 * - Personality: Expressive
 * - Category: Kinetic / Draw
 * - Primitives: Stylus Tilt + Writing Glide
 * - Signature Moment: Pencil tilts gently and writes with a calm, tactile glide.
 */
export default function AnimatedPencil(props) {
  return (
    <IconShell {...props} label="Pencil">
      {() => (
        <motion.g
          style={{ originX: "4px", originY: "20px" }}
          variants={{
            inactive: { rotate: 0, x: 0, y: 0 },
            active: {
              rotate: [0, -10, 3, 0],
              x: [0, 1.5, 0],
              y: [0, -1, 0],
              transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
            },
          }}
        >
          {/* Authentic Lucide Pencil Body */}
          <path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z" />
          <path d="m15 5 4 4" />
        </motion.g>
      )}
    </IconShell>
  );
}
