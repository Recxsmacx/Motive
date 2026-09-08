import { motion } from "framer-motion";
import IconShell from "../IconShell";

/**
 * AnimatedPhone
 * - Personality: Attentive
 * - Category: Physical / Communication
 * - Primitives: Cradle Rock + Soft Settle
 * - Signature Moment: Telephone handset rocks gently on cradle with smooth deceleration.
 */
export default function AnimatedPhone(props) {
  return (
    <IconShell {...props} label="Phone">
      {() => (
        <motion.path
          d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
          style={{ originX: "12px", originY: "12px" }}
          variants={{
            inactive: { rotate: 0, scale: 1 },
            active: {
              rotate: [0, -8, 6, -3, 0],
              scale: [1, 1.05, 1],
              transition: { duration: 0.6, ease: "easeInOut" },
            },
          }}
        />
      )}
    </IconShell>
  );
}
