import { motion } from "framer-motion";
import IconShell from "../IconShell";

/**
 * AnimatedCloud
 * - Personality: Serene
 * - Category: Organic / Floating
 * - Primitives: Buoyancy + Horizontal Drift
 * - Signature Moment: Cloud breathes with gentle vertical float and smooth return.
 */
export default function AnimatedCloud(props) {
  return (
    <IconShell {...props} label="Cloud">
      {() => (
        <motion.path
          d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"
          variants={{
            inactive: { y: 0, scale: 1 },
            active: {
              y: [0, -3, 0],
              scale: [1, 1.03, 1],
              transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
            },
          }}
        />
      )}
    </IconShell>
  );
}
