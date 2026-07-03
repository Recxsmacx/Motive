import { motion } from "framer-motion";
import IconShell from "../IconShell";

export default function AnimatedPlay(props) {
  return (
    <IconShell {...props} label="Play">
      {() => (
        <motion.polygon
          points="6 3 20 12 6 21 6 3"
          style={{ originX: "12px", originY: "12px" }}
          variants={{
            inactive: { scale: 1, x: 0, fill: "transparent" },
            active: {
              scale: [1, 1.1, 1],
              x: [0, 1.5, 0],
              fill: ["rgba(139,92,246,0)", "rgba(139,92,246,0.35)"],
              transition: { duration: 0.4, ease: [0.34, 1.56, 0.64, 1] },
            },
          }}
        />
      )}
    </IconShell>
  );
}
