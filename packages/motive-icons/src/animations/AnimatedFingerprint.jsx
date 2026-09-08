import { motion } from "framer-motion";
import IconShell from "../IconShell";

/**
 * AnimatedFingerprint
 * - Personality: Biometric
 * - Category: Optical / Draw
 * - Primitives: Stroke Pulse + Luminous Trace
 * - Signature Moment: Fingerprint ridges pulse in calm sequence from the core outward.
 */
export default function AnimatedFingerprint(props) {
  return (
    <IconShell {...props} label="Fingerprint">
      {() => (
        <motion.g
          variants={{
            inactive: { opacity: 0.8 },
            active: {
              opacity: [0.8, 1, 0.85],
              transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
            },
          }}
        >
          {/* Authentic Lucide Fingerprint Ridges */}
          <path d="M12 10a2 2 0 0 0-2 2c0 1.02-.1 2.51-.26 4" />
          <path d="M14 13.12c0 2.38 0 6.38-1 8.88" />
          <path d="M17.29 21.02c.12-.6.43-2.3.5-3.02" />
          <path d="M2 12a10 10 0 0 1 18-6" />
          <path d="M2 16h.01" />
          <path d="M21.8 16c.2-2 .131-5.354 0-6" />
          <path d="M5 19.5C5.5 18 6 15 6 12a6 6 0 0 1 .34-2" />
          <path d="M8.65 22c.21-.66.45-1.32.57-2" />
          <path d="M9 6.8a6 6 0 0 1 9 5.2v2" />
        </motion.g>
      )}
    </IconShell>
  );
}
