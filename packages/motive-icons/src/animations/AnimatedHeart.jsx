import { motion } from "framer-motion";
import IconShell from "../IconShell";

export default function AnimatedHeart(props) {
  return (
    <IconShell {...props} label="Heart">
      {() => (
        <motion.path
          d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.29 1.51 4.04 3 5.5l7 7Z"
          style={{ originX: "12px", originY: "12px" }}
          variants={{
            inactive: { scale: 1, fill: "transparent" },
            active: {
              scale: [1, 1.15, 0.95, 1.08, 1],
              fill: ["rgba(139,92,246,0)", "rgba(139,92,246,0.35)", "rgba(139,92,246,0.25)", "rgba(139,92,246,0.3)", "rgba(139,92,246,0.2)"],
              transition: { duration: 0.9, times: [0, 0.3, 0.5, 0.7, 1] },
            },
          }}
        />
      )}
    </IconShell>
  );
}
