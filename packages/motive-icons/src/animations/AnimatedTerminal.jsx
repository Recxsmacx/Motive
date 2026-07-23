import { motion } from "framer-motion";
import IconShell from "../IconShell";

export default function AnimatedTerminal(props) {
  return (
    <IconShell {...props} label="Terminal">
      {() => (
        <>
          {/* Prompt Arrow */}
          <motion.polyline
            points="4 17 10 11 4 5"
            variants={{
              inactive: { x: 0 },
              active: {
                x: [0, 2, 0],
                transition: { duration: 0.4 },
              },
            }}
          />
          {/* Blinking Cursor Line */}
          <motion.line
            x1="12"
            y1="19"
            x2="20"
            y2="19"
            variants={{
              inactive: { opacity: 1, pathLength: 1 },
              active: {
                opacity: [1, 0, 1, 0, 1],
                pathLength: [0.3, 1],
                transition: { duration: 0.7, ease: "easeInOut" },
              },
            }}
          />
        </>
      )}
    </IconShell>
  );
}
