import { motion } from "framer-motion";
import IconShell from "../IconShell";

/**
 * AnimatedQRCode
 * - Personality: Precise
 * - Category: Magnetic / Assembly
 * - Primitives: Target Pulse + Data Matrix Fade
 * - Signature Moment: Positioning anchor squares pulse smoothly in sequence.
 */
export default function AnimatedQRCode(props) {
  return (
    <IconShell {...props} label="QR Code">
      {() => (
        <>
          {/* Top-Left Target Anchor */}
          <motion.rect
            width="5"
            height="5"
            x="3"
            y="3"
            rx="1"
            style={{ originX: "5.5px", originY: "5.5px" }}
            variants={{
              inactive: { scale: 1 },
              active: {
                scale: [1, 1.15, 1],
                transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
              },
            }}
          />

          {/* Top-Right Target Anchor */}
          <motion.rect
            width="5"
            height="5"
            x="16"
            y="3"
            rx="1"
            style={{ originX: "18.5px", originY: "5.5px" }}
            variants={{
              inactive: { scale: 1 },
              active: {
                scale: [1, 1.15, 1],
                transition: { duration: 0.5, delay: 0.08, ease: [0.22, 1, 0.36, 1] },
              },
            }}
          />

          {/* Bottom-Left Target Anchor */}
          <motion.rect
            width="5"
            height="5"
            x="3"
            y="16"
            rx="1"
            style={{ originX: "5.5px", originY: "18.5px" }}
            variants={{
              inactive: { scale: 1 },
              active: {
                scale: [1, 1.15, 1],
                transition: { duration: 0.5, delay: 0.16, ease: [0.22, 1, 0.36, 1] },
              },
            }}
          />

          {/* Authentic Lucide QR Data Matrix Tracks */}
          <motion.g
            variants={{
              inactive: { opacity: 0.6 },
              active: {
                opacity: [0.6, 1, 0.7],
                transition: { duration: 0.55, delay: 0.1, ease: "easeOut" },
              },
            }}
          >
            <path d="M21 16h-3a2 2 0 0 0-2 2v3" />
            <path d="M21 21v.01" />
            <path d="M12 7v3a2 2 0 0 1-2 2H7" />
            <path d="M3 12h.01" />
            <path d="M12 3h.01" />
            <path d="M12 16v.01" />
            <path d="M16 12h1" />
            <path d="M21 12v.01" />
            <path d="M12 21v-1" />
          </motion.g>
        </>
      )}
    </IconShell>
  );
}
