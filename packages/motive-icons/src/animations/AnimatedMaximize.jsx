import { motion } from "framer-motion";
import IconShell from "../IconShell";

export default function AnimatedMaximize(props) {
  return (
    <IconShell {...props} label="Maximize">
      {() => (
        <>
          {/* Top Right Corner Arrow */}
          <motion.g
            variants={{
              inactive: { x: 0, y: 0 },
              active: {
                x: [0, 2.5, 0],
                y: [0, -2.5, 0],
                transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
              },
            }}
          >
            <polyline points="15 3 21 3 21 9" />
            <line x1="14" y1="10" x2="21" y2="3" />
          </motion.g>

          {/* Bottom Left Corner Arrow */}
          <motion.g
            variants={{
              inactive: { x: 0, y: 0 },
              active: {
                x: [0, -2.5, 0],
                y: [0, 2.5, 0],
                transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
              },
            }}
          >
            <polyline points="9 21 3 21 3 15" />
            <line x1="10" y1="14" x2="3" y2="21" />
          </motion.g>
        </>
      )}
    </IconShell>
  );
}
