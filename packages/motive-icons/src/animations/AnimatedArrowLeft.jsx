import { motion } from "framer-motion";
import IconShell from "../IconShell";

export default function AnimatedArrowLeft(props) {
  return (
    <IconShell {...props} label="Arrow Left">
      {() => (
        <motion.g
          variants={{
            inactive: { x: 0 },
            active: {
              x: [0, -4, 0],
              transition: { duration: 0.45, ease: "easeInOut" },
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
