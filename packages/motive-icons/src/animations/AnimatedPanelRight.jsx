import { motion } from "framer-motion";
import IconShell from "../IconShell";

/**
 * AnimatedPanelRight
 * - Personality: Direct
 * - Category: Geometric / Spatial
 * - Primitives: Spatial Glide + Expansion
 * - Signature Moment: Right inspector panel glides smoothly with responsive elasticity.
 */
export default function AnimatedPanelRight(props) {
  return (
    <IconShell {...props} label="Panel Right">
      {() => (
        <>
          {/* Main Frame */}
          <rect width="18" height="18" x="3" y="3" rx="2" />

          {/* Sliding Right Inspector Line */}
          <motion.path
            d="M15 3v18"
            variants={{
              inactive: { x: 0 },
              active: {
                x: [0, -2.5, 0],
                transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
              },
            }}
          />
        </>
      )}
    </IconShell>
  );
}
