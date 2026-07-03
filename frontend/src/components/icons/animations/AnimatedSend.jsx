import { motion } from "framer-motion";
import IconShell from "../IconShell";

export default function AnimatedSend(props) {
  return (
    <IconShell {...props} label="Send">
      {() => (
        <motion.g
          variants={{
            inactive: { x: 0, y: 0, opacity: 1 },
            active: {
              x: [0, 6, -20, 0],
              y: [0, -6, 20, 0],
              opacity: [1, 1, 0, 1],
              transition: { duration: 0.75, times: [0, 0.4, 0.55, 1] },
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
