import { motion } from "framer-motion";
import IconShell from "../IconShell";

export default function AnimatedRefresh(props) {
  return (
    <IconShell {...props} label="Refresh">
      {() => (
        <motion.g
          style={{ originX: "12px", originY: "12px" }}
          variants={{
            inactive: { rotate: 0 },
            active: {
              rotate: 360,
              transition: { duration: 0.9, ease: "easeInOut" },
            },
          }}
        >
          <polyline points="23 4 23 10 17 10" />
          <polyline points="1 20 1 14 7 14" />
          <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10" />
          <path d="M20.49 15A9 9 0 0 1 5.64 18.36L1 14" />
        </motion.g>
      )}
    </IconShell>
  );
}
