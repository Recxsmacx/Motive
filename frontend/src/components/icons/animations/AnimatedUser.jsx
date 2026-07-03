import { motion } from "framer-motion";
import IconShell from "../IconShell";

export default function AnimatedUser(props) {
  return (
    <IconShell {...props} label="User">
      {() => (
        <>
          <motion.circle
            cx="12" cy="8" r="4"
            style={{ originX: "12px", originY: "8px" }}
            variants={{
              inactive: { y: 0 },
              active: {
                y: [0, -1.5, 0],
                transition: { duration: 0.6, ease: "easeInOut" },
              },
            }}
          />
          <motion.path
            d="M4 21c0-4.4 3.6-8 8-8s8 3.6 8 8"
            variants={{
              inactive: { pathLength: 1 },
              active: {
                pathLength: [0.7, 1],
                transition: { duration: 0.6 },
              },
            }}
          />
        </>
      )}
    </IconShell>
  );
}
