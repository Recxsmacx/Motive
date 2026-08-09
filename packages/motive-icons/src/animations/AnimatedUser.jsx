import { motion } from "framer-motion";
import IconShell from "../IconShell";

export default function AnimatedUser(props) {
  return (
    <IconShell {...props} label="User">
      {() => (
        <motion.g
          style={{ originX: "12px", originY: "14px" }}
          variants={{
            inactive: { y: 0, scale: 1 },
            active: {
              y: [0, -2, 0],
              scale: [1, 1.05, 1],
              transition: { duration: 0.5, ease: "easeInOut" },
            },
          }}
        >
          <circle cx="12" cy="8" r="4" />
          <path d="M4 21c0-4.4 3.6-8 8-8s8 3.6 8 8" />
        </motion.g>
      )}
    </IconShell>
  );
}
