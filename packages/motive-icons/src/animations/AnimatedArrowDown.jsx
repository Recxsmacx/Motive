import { motion } from "framer-motion";
import IconShell from "../IconShell";

export default function AnimatedArrowDown(props) {
  return (
    <IconShell {...props} label="Arrow Down">
      {() => (
        <motion.g
          variants={{
            inactive: { y: 0, opacity: 1 },
            active: {
              y: [0, 6, -6, 0],
              opacity: [1, 1, 0, 1],
              transition: { duration: 0.55, times: [0, 0.4, 0.5, 1] },
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
