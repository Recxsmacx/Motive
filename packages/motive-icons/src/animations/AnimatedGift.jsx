import { motion } from "framer-motion";
import IconShell from "../IconShell";

/**
 * AnimatedGift
 * - Personality: Festive
 * - Category: Expressive / Reveal
 * - Primitives: Lid Lift + Ribbon Settle
 * - Signature Moment: Gift box lid lifts smoothly with gentle unboxing delight.
 */
export default function AnimatedGift(props) {
  return (
    <IconShell {...props} label="Gift">
      {() => (
        <>
          {/* Lower Box Body */}
          <rect x="3" y="8" width="18" height="13" rx="1" />
          <path d="M12 8v13" />

          {/* Lifting Gift Lid & Ribbon Bow */}
          <motion.g
            style={{ originX: "12px", originY: "5px" }}
            variants={{
              inactive: { y: 0 },
              active: {
                y: [0, -3, 0],
                transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
              },
            }}
          >
            {/* Box Lid Strip */}
            <rect x="2" y="7" width="20" height="3" rx="0.5" />
            {/* Ribbon Bow Loops */}
            <path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z" />
            <path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z" />
          </motion.g>
        </>
      )}
    </IconShell>
  );
}
