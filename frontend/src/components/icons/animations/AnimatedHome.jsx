import { motion } from "framer-motion";
import IconShell from "../IconShell";

export default function AnimatedHome(props) {
  return (
    <IconShell {...props} label="Home">
      {() => (
        <motion.g
          style={{ originX: "12px", originY: "22px" }}
          variants={{
            inactive: { y: 0, scale: 1 },
            active: {
              y: [0, -2, 0],
              scale: [1, 1.06, 1],
              transition: { duration: 0.5, ease: [0.34, 1.56, 0.64, 1] },
            },
          }}
        >
          <path d="M3 12L12 3l9 9" />
          <path d="M5 10v10a1 1 0 0 0 1 1h4v-6h4v6h4a1 1 0 0 0 1-1V10" />
        </motion.g>
      )}
    </IconShell>
  );
}
