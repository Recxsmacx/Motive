import { motion } from "framer-motion";
import IconShell from "../IconShell";

export default function AnimatedArrowLeft(props) {
  return (
    <IconShell {...props} label="Arrow Left">
      {() => (
        <motion.g
          variants={{
            inactive: { x: 0, opacity: 1 },
            active: {
              x: [0, -6, 6, 0],
              opacity: [1, 1, 0, 1],
              transition: { duration: 0.55, times: [0, 0.4, 0.5, 1] },
            },
          }}
        >
          <line x1="19" y1="12" x2="5" y2="12" />
          <polyline points="12 19 5 12 12 5" />
        </motion.g>
      )}
    </IconShell>
  );
}
