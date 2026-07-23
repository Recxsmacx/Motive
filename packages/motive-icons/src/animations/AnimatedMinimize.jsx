import { motion } from "framer-motion";
import IconShell from "../IconShell";

export default function AnimatedMinimize(props) {
  return (
    <IconShell {...props} label="Minimize">
      {() => (
        <>
          {/* Top Right Retracting Corner */}
          <motion.g
            variants={{
              inactive: { x: 0, y: 0 },
              active: {
                x: [0, -2.5, 0],
                y: [0, -2.5, 0],
                transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
              },
            }}
          >
            <polyline points="20 10 14 10 14 4" />
            <line x1="21" y1="3" x2="14" y2="10" />
          </motion.g>

          {/* Bottom Left Retracting Corner */}
          <motion.g
            variants={{
              inactive: { x: 0, y: 0 },
              active: {
                x: [0, 2.5, 0],
                y: [0, 2.5, 0],
                transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
              },
            }}
          >
            <polyline points="4 14 10 14 10 20" />
            <line x1="3" y1="21" x2="10" y2="14" />
          </motion.g>
        </>
      )}
    </IconShell>
  );
}
