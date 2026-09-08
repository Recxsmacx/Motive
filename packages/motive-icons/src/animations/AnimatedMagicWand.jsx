import { motion } from "framer-motion";
import IconShell from "../IconShell";

/**
 * AnimatedMagicWand
 * - Personality: Enchanting
 * - Category: Expressive / Kinetic
 * - Primitives: Wand Tilt + Star Sparkle Trail
 * - Signature Moment: Wand tilts smoothly with 3 sparkling starlight glints.
 */
export default function AnimatedMagicWand(props) {
  return (
    <IconShell {...props} label="Magic Wand">
      {() => (
        <>
          {/* Wand Shaft */}
          <motion.g
            style={{ originX: "4px", originY: "20px" }}
            variants={{
              inactive: { rotate: 0 },
              active: {
                rotate: [0, -12, 6, 0],
                transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
              },
            }}
          >
            <path d="m3 21 11-11" />
            <path d="m14 10 2-2" />
          </motion.g>

          {/* Sparkle 1 */}
          <motion.path
            d="M19 2v4 M17 4h4"
            variants={{
              inactive: { scale: 0, opacity: 0 },
              active: {
                scale: [0, 1.1, 1],
                opacity: [0, 1, 0.7],
                transition: { duration: 0.45, delay: 0.08, ease: "easeOut" },
              },
            }}
          />

          {/* Sparkle 2 */}
          <motion.path
            d="M21 9v2 M20 10h2"
            variants={{
              inactive: { scale: 0, opacity: 0 },
              active: {
                scale: [0, 1.1, 1],
                opacity: [0, 1, 0.7],
                transition: { duration: 0.45, delay: 0.16, ease: "easeOut" },
              },
            }}
          />

          {/* Sparkle 3 */}
          <motion.path
            d="M10 3v2 M9 4h2"
            variants={{
              inactive: { scale: 0, opacity: 0 },
              active: {
                scale: [0, 1.1, 1],
                opacity: [0, 1, 0.7],
                transition: { duration: 0.45, delay: 0.22, ease: "easeOut" },
              },
            }}
          />
        </>
      )}
    </IconShell>
  );
}
