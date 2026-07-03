import { motion } from "framer-motion";
import IconShell from "../IconShell";

export default function AnimatedSearch(props) {
  return (
    <IconShell {...props} label="Search">
      {() => (
        <>
          <motion.circle
            cx="11"
            cy="11"
            r="8"
            style={{ originX: "11px", originY: "11px" }}
            variants={{
              inactive: { scale: 1, rotate: 0 },
              active: {
                scale: [1, 1.12, 0.94, 1],
                transition: { duration: 0.6, ease: "easeInOut" },
              },
            }}
          />
          <motion.path
            d="M21 21l-4.35-4.35"
            variants={{
              inactive: { x: 0, y: 0 },
              active: {
                x: [0, 3, -1, 0],
                y: [0, 3, -1, 0],
                transition: { duration: 0.6, ease: "easeInOut" },
              },
            }}
          />
        </>
      )}
    </IconShell>
  );
}
