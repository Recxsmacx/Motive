import { motion } from "framer-motion";
import IconShell from "../IconShell";

export default function AnimatedSend(props) {
  return (
    <IconShell {...props} label="Send">
      {() => (
        <motion.g
          style={{ originX: "12px", originY: "12px" }}
          variants={{
            inactive: { x: 0, y: 0, rotate: 0, scale: 1 },
            active: {
              x: [0, 4, 0],
              y: [0, -4, 0],
              rotate: [0, -8, 0],
              scale: [1, 1.06, 1],
              transition: { duration: 0.55, ease: "easeInOut" },
            },
          }}
        >
          <line x1="22" y1="2" x2="11" y2="13" />
          <polygon points="22 2 15 22 11 13 2 9 22 2" />
        </motion.g>
      )}
    </IconShell>
  );
}
