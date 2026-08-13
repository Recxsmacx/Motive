import { motion } from "framer-motion";
import IconShell from "../IconShell";

export default function AnimatedCheck(props) {
  return (
    <IconShell {...props} label="Check">
      {() => (
        <motion.path
          d="M20 6L9 17l-5-5"
          style={{ originX: "12px", originY: "12px" }}
          variants={{
            inactive: { scale: 1, rotate: 0 },
            active: {
              scale: [1, 1.18, 0.96, 1],
              rotate: [0, -6, 4, 0],
              transition: { duration: 0.45, ease: "easeInOut" },
            },
          }}
        />
      )}
    </IconShell>
  );
}
