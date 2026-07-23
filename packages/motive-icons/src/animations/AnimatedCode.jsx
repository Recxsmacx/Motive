import { motion } from "framer-motion";
import IconShell from "../IconShell";

export default function AnimatedCode(props) {
  return (
    <IconShell {...props} label="Code">
      {() => (
        <>
          {/* Left Bracket */}
          <motion.polyline
            points="8 6 2 12 8 18"
            variants={{
              inactive: { x: 0 },
              active: {
                x: [0, -3, 0],
                transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
              },
            }}
          />
          {/* Right Bracket */}
          <motion.polyline
            points="16 18 22 12 16 6"
            variants={{
              inactive: { x: 0 },
              active: {
                x: [0, 3, 0],
                transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
              },
            }}
          />
        </>
      )}
    </IconShell>
  );
}
