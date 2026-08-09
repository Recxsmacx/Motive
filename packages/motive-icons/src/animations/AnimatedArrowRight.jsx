import { motion } from "framer-motion";
import IconShell from "../IconShell";

export default function AnimatedArrowRight(props) {
  return (
    <IconShell {...props} label="Arrow Right">
      {() => (
        <motion.g
          variants={{
            inactive: { x: 0 },
            active: {
              x: [0, 4, 0],
              transition: { duration: 0.45, ease: "easeInOut" },
            },
          }}
        >
          <line x1="5" y1="12" x2="19" y2="12" />
          <polyline points="12 5 19 12 12 19" />
        </motion.g>
      )}
    </IconShell>
  );
}
