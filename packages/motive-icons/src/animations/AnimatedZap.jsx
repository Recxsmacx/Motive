import { motion } from "framer-motion";
import IconShell from "../IconShell";

export default function AnimatedZap(props) {
  return (
    <IconShell {...props} label="Zap">
      {() => (
        <motion.polygon
          points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"
          style={{ originX: "12px", originY: "12px" }}
          variants={{
            inactive: { scale: 1, rotate: 0, fill: "transparent" },
            active: {
              scale: [1, 1.15, 0.95, 1.05, 1],
              rotate: [0, -6, 6, -3, 0],
              fill: [
                "rgba(234,179,8,0)",
                "rgba(234,179,8,0.4)",
                "rgba(234,179,8,0.25)",
                "rgba(234,179,8,0)",
              ],
              transition: { duration: 0.55, ease: "easeOut" },
            },
          }}
        />
      )}
    </IconShell>
  );
}
