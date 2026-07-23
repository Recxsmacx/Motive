import { motion } from "framer-motion";
import IconShell from "../IconShell";

export default function AnimatedDatabase(props) {
  return (
    <IconShell {...props} label="Database">
      {() => (
        <>
          {/* Top Ellipse */}
          <motion.ellipse
            cx="12"
            cy="5"
            rx="9"
            ry="3"
            style={{ originX: "12px", originY: "5px" }}
            variants={{
              inactive: { scale: 1 },
              active: {
                scale: [1, 1.06, 1],
                transition: { duration: 0.4 },
              },
            }}
          />
          {/* Middle Disk Division */}
          <motion.path
            d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"
            variants={{
              inactive: { y: 0, opacity: 1 },
              active: {
                y: [0, 1.5, 0],
                opacity: [0.6, 1, 0.6],
                transition: { duration: 0.5, delay: 0.08 },
              },
            }}
          />
          {/* Main Body */}
          <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
        </>
      )}
    </IconShell>
  );
}
