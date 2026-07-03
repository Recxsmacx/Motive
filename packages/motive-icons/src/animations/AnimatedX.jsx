import { motion } from "framer-motion";
import IconShell from "../IconShell";

export default function AnimatedX(props) {
  return (
    <IconShell {...props} label="Close">
      {() => (
        <motion.g
          style={{ originX: "12px", originY: "12px" }}
          variants={{
            inactive: { rotate: 0 },
            active: {
              rotate: [0, 90],
              transition: { duration: 0.4, ease: "easeInOut" },
            },
          }}
        >
          <line x1="18" y1="6" x2="6" y2="18" />
          <line x1="6" y1="6" x2="18" y2="18" />
        </motion.g>
      )}
    </IconShell>
  );
}
