import { motion } from "framer-motion";
import IconShell from "../IconShell";

/**
 * AnimatedImage
 * - Personality: Cinematic
 * - Category: Optical / Parallax
 * - Primitives: Parallax + Sun Rise
 * - Signature Moment: Sun orb rises smoothly in the sky with subtle mountain depth parallax.
 */
export default function AnimatedImage(props) {
  return (
    <IconShell {...props} label="Image">
      {() => (
        <>
          {/* Main Frame Canvas */}
          <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />

          {/* Floating Sun Orb */}
          <motion.circle
            cx="9"
            cy="9"
            r="2"
            variants={{
              inactive: { y: 0 },
              active: {
                y: [0, -2, 0],
                transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
              },
            }}
          />

          {/* Mountain Ridge */}
          <motion.path
            d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"
            variants={{
              inactive: { y: 0 },
              active: {
                y: [0, 1, 0],
                transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
              },
            }}
          />
        </>
      )}
    </IconShell>
  );
}
