import { motion } from "framer-motion";
import IconShell from "../IconShell";

export default function AnimatedPlus(props) {
  return (
    <IconShell {...props} label="Plus">
      {() => (
        <motion.g
          style={{ originX: "12px", originY: "12px" }}
          variants={{
            inactive: { rotate: 0, scale: 1 },
            active: {
              rotate: [0, 180],
              scale: [1, 1.15, 1],
              transition: { duration: 0.5, ease: [0.34, 1.56, 0.64, 1] },
            },
          }}
        >
          <line x1="12" y1="5" x2="12" y2="19" />
          <line x1="5" y1="12" x2="19" y2="12" />
        </motion.g>
      )}
    </IconShell>
  );
}
