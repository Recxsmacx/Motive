import { motion } from "framer-motion";
import IconShell from "../IconShell";

export default function AnimatedPause(props) {
  return (
    <IconShell {...props} label="Pause">
      {() => (
        <>
          <motion.rect
            x="6" y="4" width="4" height="16" rx="1"
            style={{ originX: "8px", originY: "12px" }}
            variants={{
              inactive: { scaleY: 1 },
              active: {
                scaleY: [1, 0.85, 1],
                transition: { duration: 0.4, delay: 0 },
              },
            }}
          />
          <motion.rect
            x="14" y="4" width="4" height="16" rx="1"
            style={{ originX: "16px", originY: "12px" }}
            variants={{
              inactive: { scaleY: 1 },
              active: {
                scaleY: [1, 0.85, 1],
                transition: { duration: 0.4, delay: 0.08 },
              },
            }}
          />
        </>
      )}
    </IconShell>
  );
}
