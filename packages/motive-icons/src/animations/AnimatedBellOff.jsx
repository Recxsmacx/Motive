import { motion } from "framer-motion";
import IconShell from "../IconShell";

/**
 * AnimatedBellOff
 * - Personality: Decisive
 * - Category: Kinetic / Draw
 * - Primitives: Stroke Draw + Follow Through
 * - Signature Moment: Crisp mute line draws smoothly across the bell dome.
 */
export default function AnimatedBellOff(props) {
  return (
    <IconShell {...props} label="Bell Off">
      {() => (
        <>
          {/* Bell Body Outline */}
          <path d="M8.7 3A6 6 0 0 1 18 8a21.3 21.3 0 0 0 .6 5" />
          <path d="M17 17H3s3-2 3-9a4.67 4.67 0 0 1 .3-1.7" />
          <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />

          {/* Mute Strike Slash Draw */}
          <motion.line
            x1="2"
            y1="2"
            x2="22"
            y2="22"
            variants={{
              inactive: { pathLength: 1 },
              active: {
                pathLength: [0, 1],
                transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
              },
            }}
          />
        </>
      )}
    </IconShell>
  );
}
