import { motion } from "framer-motion";
import IconShell from "../IconShell";

/**
 * AnimatedBookmarkCheck
 * - Personality: Verified
 * - Category: Mechanical / Affirmative
 * - Primitives: Stroke Draw + Follow Through
 * - Signature Moment: Ribbon glides down as checkmark traces dynamically.
 */
export default function AnimatedBookmarkCheck(props) {
  return (
    <IconShell {...props} label="Bookmark Check">
      {() => (
        <>
          {/* Main Bookmark Ribbon */}
          <motion.path
            d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2Z"
            variants={{
              inactive: { y: 0 },
              active: {
                y: [0, -1.5, 0],
                transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
              },
            }}
          />

          {/* Dynamic Checkmark */}
          <motion.path
            d="m9 10 2 2 4-4"
            variants={{
              inactive: { pathLength: 1, opacity: 0.9 },
              active: {
                pathLength: [0, 1],
                opacity: [0.3, 1],
                transition: { duration: 0.5, delay: 0.1, ease: [0.22, 1, 0.36, 1] },
              },
            }}
          />
        </>
      )}
    </IconShell>
  );
}
