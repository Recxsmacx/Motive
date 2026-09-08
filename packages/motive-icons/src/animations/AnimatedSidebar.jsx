import { motion } from "framer-motion";
import IconShell from "../IconShell";

/**
 * AnimatedSidebar
 * - Personality: Structured
 * - Category: Geometric / Spatial
 * - Primitives: Width Expansion + Soft Settle
 * - Signature Moment: Sidebar column expands width smoothly.
 */
export default function AnimatedSidebar(props) {
  return (
    <IconShell {...props} label="Sidebar">
      {() => (
        <>
          {/* Main App Frame */}
          <rect width="18" height="18" x="3" y="3" rx="2" />

          {/* Dividing Column Seam */}
          <motion.path
            d="M9 3v18"
            variants={{
              inactive: { x: 0 },
              active: {
                x: [0, 2, 0],
                transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
              },
            }}
          />

          {/* Sidebar Nav Indicator Dots */}
          <motion.g
            variants={{
              inactive: { opacity: 0.4 },
              active: {
                opacity: [0.4, 1, 0.7],
                transition: { duration: 0.5, delay: 0.08, ease: "easeOut" },
              },
            }}
          >
            <path d="M6 7h.01" strokeWidth="2" strokeLinecap="round" />
            <path d="M6 11h.01" strokeWidth="2" strokeLinecap="round" />
            <path d="M6 15h.01" strokeWidth="2" strokeLinecap="round" />
          </motion.g>
        </>
      )}
    </IconShell>
  );
}
