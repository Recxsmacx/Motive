import { motion } from "framer-motion";
import IconShell from "../IconShell";

/**
 * AnimatedBluetooth
 * - Personality: Precise
 * - Category: Magnetic / Signal
 * - Primitives: Magnetic Pulse + Stroke Signal
 * - Signature Moment: Bluetooth rune pulses gently with a subtle magnetic ripple emission.
 */
export default function AnimatedBluetooth(props) {
  return (
    <IconShell {...props} label="Bluetooth">
      {() => (
        <>
          {/* Main Bluetooth Rune Path */}
          <motion.path
            d="m7 7 10 10-5 5V2l5 5L7 17"
            style={{ originX: "12px", originY: "12px" }}
            variants={{
              inactive: { scale: 1 },
              active: {
                scale: [1, 1.06, 0.98, 1],
                transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
              },
            }}
          />

          {/* Magnetic Signal Wing */}
          <motion.path
            d="M18 9a4 4 0 0 1 0 6"
            variants={{
              inactive: { opacity: 0, x: -2 },
              active: {
                opacity: [0, 0.9, 0],
                x: [-2, 2, 0],
                transition: { duration: 0.5, delay: 0.1, ease: "easeOut" },
              },
            }}
          />
        </>
      )}
    </IconShell>
  );
}
