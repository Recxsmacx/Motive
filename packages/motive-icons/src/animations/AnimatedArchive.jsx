import { motion } from "framer-motion";
import IconShell from "../IconShell";

/**
 * AnimatedArchive
 * - Personality: Grounded
 * - Category: Mechanical / Physical
 * - Primitives: Hinged Lift + Snap
 * - Signature Moment: Heavy lid lifts smoothly, settles back firmly.
 */
export default function AnimatedArchive(props) {
  return (
    <IconShell {...props} label="Archive">
      {() => (
        <>
          {/* Main Box Hull */}
          <path d="M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8" />

          {/* Central Handle Slot */}
          <motion.path
            d="M10 12h4"
            variants={{
              inactive: { scaleX: 1 },
              active: {
                scaleX: [1, 1.2, 1],
                transition: { duration: 0.55, delay: 0.08, ease: [0.22, 1, 0.36, 1] },
              },
            }}
          />

          {/* Top Lid with Hinged Snap */}
          <motion.rect
            x="2"
            y="3"
            width="20"
            height="5"
            rx="1"
            style={{ originX: "12px", originY: "3px" }}
            variants={{
              inactive: { y: 0, rotate: 0 },
              active: {
                y: [0, -3, 0],
                rotate: [0, -4, 0],
                transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
              },
            }}
          />
        </>
      )}
    </IconShell>
  );
}
