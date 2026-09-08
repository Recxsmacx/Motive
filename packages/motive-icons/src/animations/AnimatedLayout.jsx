import { motion } from "framer-motion";
import IconShell from "../IconShell";

/**
 * AnimatedLayout
 * - Personality: Responsive
 * - Category: Geometric / Spatial
 * - Primitives: Spatial Realignment + Settle
 * - Signature Moment: Top header and sidebar partition rearrange with fluid flex transition.
 */
export default function AnimatedLayout(props) {
  return (
    <IconShell {...props} label="Layout">
      {() => (
        <>
          {/* Main Enclosing Frame */}
          <rect x="3" y="3" width="18" height="18" rx="2" />

          {/* Top Header Bar */}
          <motion.path
            d="M3 9h18"
            variants={{
              inactive: { y: 0 },
              active: {
                y: [0, -1, 0],
                transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
              },
            }}
          />

          {/* Vertical Partition */}
          <motion.path
            d="M9 9v12"
            variants={{
              inactive: { x: 0 },
              active: {
                x: [0, 2, 0],
                transition: { duration: 0.55, delay: 0.05, ease: [0.22, 1, 0.36, 1] },
              },
            }}
          />
        </>
      )}
    </IconShell>
  );
}
