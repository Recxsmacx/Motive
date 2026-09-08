import { motion } from "framer-motion";
import IconShell from "../IconShell";

/**
 * AnimatedInbox
 * - Personality: Welcoming
 * - Category: Physical / Directional
 * - Primitives: Physics Glide + Damping
 * - Signature Moment: Incoming envelope glides from top-down into tray with calm landing.
 */
export default function AnimatedInbox(props) {
  return (
    <IconShell {...props} label="Inbox">
      {() => (
        <>
          {/* Authentic Lucide Inbox Base Tray */}
          <path d="M22 12h-6l-2 3h-4l-2-3H2" />
          <path d="M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z" />

          {/* Incoming Mail Slip */}
          <motion.path
            d="M9 7h6"
            variants={{
              inactive: { y: 0, opacity: 0.3 },
              active: {
                y: [-5, 1, 0],
                opacity: [0, 1, 0.9],
                transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
              },
            }}
          />
        </>
      )}
    </IconShell>
  );
}
