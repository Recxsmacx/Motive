import { motion } from "framer-motion";
import IconShell from "../IconShell";

/**
 * AnimatedTrophy
 * - Personality: Celebratory
 * - Category: Expressive / Elevation
 * - Primitives: Victory Elevation + Soft Settle
 * - Signature Moment: Trophy lifts smoothly with celebratory pride and gentle spring return.
 */
export default function AnimatedTrophy(props) {
  return (
    <IconShell {...props} label="Trophy">
      {() => (
        <motion.g
          style={{ originX: "12px", originY: "20px" }}
          variants={{
            inactive: { y: 0, scale: 1 },
            active: {
              y: [0, -3, 0],
              scale: [1, 1.06, 1],
              transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
            },
          }}
        >
          {/* Authentic Lucide Trophy Geometry */}
          <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
          <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
          <path d="M4 22h16" />
          <path d="M10 14.66V17c0 .55-.45.99-1 .99H7c-.55 0-1 .45-1 1v1c0 .55.45 1 1 1h10c.55 0 1-.45 1-1v-1c0-.55-.45-1-1-1h-2c-.55 0-1-.44-1-.99v-2.34" />
          <path d="M18 4H6v4a6 6 0 0 0 12 0V4Z" />
        </motion.g>
      )}
    </IconShell>
  );
}
