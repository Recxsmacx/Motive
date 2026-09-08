import { motion } from "framer-motion";
import IconShell from "../IconShell";

/**
 * AnimatedFileCode
 * - Personality: Technical
 * - Category: Geometric / Development
 * - Primitives: Symmetrical Spread + Expansion
 * - Signature Moment: Angle brackets spread apart smoothly with elegant spacing.
 */
export default function AnimatedFileCode(props) {
  return (
    <IconShell {...props} label="File Code">
      {() => (
        <>
          {/* Main Document Body */}
          <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
          <path d="M14 2v4a2 2 0 0 0 2 2h4" />

          {/* Left Code Bracket */}
          <motion.path
            d="m10 13-2 2 2 2"
            variants={{
              inactive: { x: 0 },
              active: {
                x: [0, -1.5, 0],
                transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
              },
            }}
          />

          {/* Right Code Bracket */}
          <motion.path
            d="m14 17 2-2-2-2"
            variants={{
              inactive: { x: 0 },
              active: {
                x: [0, 1.5, 0],
                transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
              },
            }}
          />
        </>
      )}
    </IconShell>
  );
}
