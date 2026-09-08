import { motion } from "framer-motion";
import IconShell from "../IconShell";

/**
 * AnimatedKanban
 * - Personality: Agile
 * - Category: Mechanical / Organizational
 * - Primitives: Card Lift + Lane Transfer
 * - Signature Moment: Middle task card glides horizontally between lanes with smooth elevation.
 */
export default function AnimatedKanban(props) {
  return (
    <IconShell {...props} label="Kanban">
      {() => (
        <>
          {/* Lane 1 Background Card */}
          <path d="M6 5v11" />
          <path d="M6 16a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2" />

          {/* Lane 3 Background Card */}
          <path d="M18 5v14" />
          <path d="M18 19a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2" />

          {/* Lane 2 Floating Task Card with Horizontal Glide */}
          <motion.g
            variants={{
              inactive: { x: 0, y: 0 },
              active: {
                x: [0, 2, -2, 0],
                y: [0, -1.5, 0],
                transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
              },
            }}
          >
            <rect width="6" height="9" x="9" y="5" rx="1.5" />
          </motion.g>
        </>
      )}
    </IconShell>
  );
}
