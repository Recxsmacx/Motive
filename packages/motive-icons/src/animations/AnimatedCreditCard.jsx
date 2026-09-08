import { motion } from "framer-motion";
import IconShell from "../IconShell";

/**
 * AnimatedCreditCard
 * - Personality: Sleek
 * - Category: Optical / 3D
 * - Primitives: Card Tilt + EMV Glow
 * - Signature Moment: Card tilts gently with subtle transactional elevation.
 */
export default function AnimatedCreditCard(props) {
  return (
    <IconShell {...props} label="Credit Card">
      {() => (
        <motion.g
          style={{ originX: "12px", originY: "12px" }}
          variants={{
            inactive: { rotate: 0, scale: 1 },
            active: {
              rotate: [0, -4, 2, 0],
              scale: [1, 1.04, 1],
              transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
            },
          }}
        >
          {/* Authentic Lucide CreditCard Body */}
          <rect width="20" height="14" x="2" y="5" rx="2" />
          <line x1="2" x2="22" y1="10" y2="10" />
        </motion.g>
      )}
    </IconShell>
  );
}
