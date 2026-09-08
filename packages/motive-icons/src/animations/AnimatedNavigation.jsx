import { motion } from "framer-motion";
import IconShell from "../IconShell";

/**
 * AnimatedNavigation
 * - Personality: Directional
 * - Category: Kinetic / Navigation
 * - Primitives: Heading Rotation + Forward Surge
 * - Signature Moment: Compass heading arrow rotates smoothly towards north with forward surge.
 */
export default function AnimatedNavigation(props) {
  return (
    <IconShell {...props} label="Navigation">
      {() => (
        <motion.polygon
          points="3 11 22 2 13 21 11 13 3 11"
          style={{ originX: "11px", originY: "13px" }}
          variants={{
            inactive: { rotate: 0, x: 0, y: 0, scale: 1 },
            active: {
              rotate: [0, -14, 4, 0],
              x: [0, 1.5, 0],
              y: [0, -2, 0],
              scale: [1, 1.05, 1],
              transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
            },
          }}
        />
      )}
    </IconShell>
  );
}
