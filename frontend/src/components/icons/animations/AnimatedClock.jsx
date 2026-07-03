import { motion } from "framer-motion";
import IconShell from "../IconShell";

export default function AnimatedClock(props) {
  return (
    <IconShell {...props} label="Clock">
      {() => (
        <>
          <circle cx="12" cy="12" r="10" />
          <motion.line
            x1="12" y1="12" x2="12" y2="7"
            style={{ originX: "12px", originY: "12px" }}
            variants={{
              inactive: { rotate: 0 },
              active: {
                rotate: 360,
                transition: { duration: 1.6, ease: "linear" },
              },
            }}
          />
          <motion.line
            x1="12" y1="12" x2="16" y2="12"
            style={{ originX: "12px", originY: "12px" }}
            variants={{
              inactive: { rotate: 0 },
              active: {
                rotate: 720,
                transition: { duration: 1.6, ease: "linear" },
              },
            }}
          />
        </>
      )}
    </IconShell>
  );
}
