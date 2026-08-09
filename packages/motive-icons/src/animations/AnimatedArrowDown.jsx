import { motion } from "framer-motion";
import IconShell from "../IconShell";

export default function AnimatedArrowDown(props) {
  return (
    <IconShell {...props} label="Arrow Down">
      {() => (
        <motion.g
          variants={{
            inactive: { y: 0 },
            active: {
              y: [0, 4, 0],
              transition: { duration: 0.45, ease: "easeInOut" },
            },
          }}
        >
          <line x1="12" y1="5" x2="12" y2="19" />
          <polyline points="19 12 12 19 5 12" />
        </motion.g>
      )}
    </IconShell>
  );
}
