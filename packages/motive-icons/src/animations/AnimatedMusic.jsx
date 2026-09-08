import { motion } from "framer-motion";
import IconShell from "../IconShell";

/**
 * AnimatedMusic
 * - Personality: Melodic
 * - Category: Organic / Audio
 * - Primitives: Metronome Sway + Note Bounce
 * - Signature Moment: Dual musical notes sway in smooth rhythm.
 */
export default function AnimatedMusic(props) {
  return (
    <IconShell {...props} label="Music">
      {() => (
        <motion.g
          style={{ originX: "12px", originY: "18px" }}
          variants={{
            inactive: { rotate: 0, y: 0 },
            active: {
              rotate: [0, -6, 6, 0],
              y: [0, -1.5, 0],
              transition: { duration: 0.6, ease: "easeInOut" },
            },
          }}
        >
          {/* Authentic Lucide Music Paths */}
          <path d="M9 18V5l12-2v13" />
          <circle cx="6" cy="18" r="3" />
          <circle cx="18" cy="16" r="3" />
        </motion.g>
      )}
    </IconShell>
  );
}
