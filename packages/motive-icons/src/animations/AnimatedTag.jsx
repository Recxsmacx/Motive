import { motion } from "framer-motion";
import IconShell from "../IconShell";

export default function AnimatedTag(props) {
  return (
    <IconShell {...props} label="Tag">
      {() => (
        <motion.g
          style={{ originX: "7px", originY: "7px" }}
          variants={{
            inactive: { rotate: 0 },
            active: {
              rotate: [0, -18, 14, -8, 3, 0],
              transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
            },
          }}
        >
          <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" />
          <motion.circle
            cx="7"
            cy="7"
            r="1.25"
            variants={{
              inactive: { scale: 1 },
              active: {
                scale: [1, 1.3, 1],
                transition: { duration: 0.4 },
              },
            }}
          />
        </motion.g>
      )}
    </IconShell>
  );
}
