import { motion } from "framer-motion";
import IconShell from "../IconShell";

/**
 * AnimatedRobot
 * - Personality: Playful
 * - Category: Mechanical / Expressive
 * - Primitives: Pendulum Sway + Eye Blink
 * - Signature Moment: Antenna bulb sways gently with smooth pendulum wobble while eyes blink.
 */
export default function AnimatedRobot(props) {
  return (
    <IconShell {...props} label="Robot">
      {() => (
        <>
          {/* Head Base Box & Ears */}
          <motion.g
            style={{ originX: "12px", originY: "18px" }}
            variants={{
              inactive: { y: 0 },
              active: {
                y: [0, -1.5, 0],
                transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
              },
            }}
          >
            {/* Robot Head Frame */}
            <rect x="4" y="8" width="16" height="12" rx="2" />
            {/* Ear Bolts */}
            <path d="M2 13h2 M20 13h2" />
            {/* Mouth */}
            <path d="M9 16h6" />
          </motion.g>

          {/* Wobbly Antenna */}
          <motion.g
            style={{ originX: "12px", originY: "8px" }}
            variants={{
              inactive: { rotate: 0 },
              active: {
                rotate: [0, -14, 10, -4, 0],
                transition: { duration: 0.6, ease: "easeInOut" },
              },
            }}
          >
            <path d="M12 8V4" />
            <circle cx="12" cy="3" r="1" />
          </motion.g>

          {/* Blinking Eyes */}
          <motion.g
            style={{ originX: "12px", originY: "12px" }}
            variants={{
              inactive: { scaleY: 1 },
              active: {
                scaleY: [1, 0.1, 1],
                transition: { duration: 0.35, delay: 0.1, ease: "easeInOut" },
              },
            }}
          >
            <circle cx="9" cy="12" r="1.25" fill="currentColor" />
            <circle cx="15" cy="12" r="1.25" fill="currentColor" />
          </motion.g>
        </>
      )}
    </IconShell>
  );
}
