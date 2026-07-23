import { motion } from "framer-motion";
import IconShell from "../IconShell";

export default function AnimatedSmile(props) {
  return (
    <IconShell {...props} label="Smile">
      {() => (
        <>
          {/* Face Circle */}
          <circle cx="12" cy="12" r="10" />

          {/* Left Eye */}
          <motion.line
            x1="9"
            y1="9"
            x2="9.01"
            y2="9"
            style={{ originX: "9px", originY: "9px" }}
            variants={{
              inactive: { scaleY: 1 },
              active: {
                scaleY: [1, 0.1, 1],
                transition: { duration: 0.25, delay: 0.05 },
              },
            }}
          />

          {/* Right Eye */}
          <motion.line
            x1="15"
            y1="9"
            x2="15.01"
            y2="9"
            style={{ originX: "15px", originY: "9px" }}
            variants={{
              inactive: { scaleY: 1 },
              active: {
                scaleY: [1, 0.1, 1],
                transition: { duration: 0.25, delay: 0.05 },
              },
            }}
          />

          {/* Smiling Mouth */}
          <motion.path
            d="M8 14s1.5 2 4 2 4-2 4-2"
            style={{ originX: "12px", originY: "14px" }}
            variants={{
              inactive: { scale: 1, y: 0 },
              active: {
                scale: [1, 1.18, 1],
                y: [0, 0.8, 0],
                transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
              },
            }}
          />
        </>
      )}
    </IconShell>
  );
}
