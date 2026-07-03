import { motion } from "framer-motion";
import IconShell from "../IconShell";

export default function AnimatedCalendar(props) {
  return (
    <IconShell {...props} label="Calendar">
      {() => (
        <>
          <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
          <motion.g
            style={{ originX: "3px", originY: "4px" }}
            variants={{
              inactive: { rotateY: 0 },
              active: {
                rotateY: [0, -75, 0],
                transition: { duration: 0.8, ease: "easeInOut" },
              },
            }}
          >
            <line x1="3" y1="10" x2="21" y2="10" />
          </motion.g>
          <line x1="16" y1="2" x2="16" y2="6" />
          <line x1="8" y1="2" x2="8" y2="6" />
        </>
      )}
    </IconShell>
  );
}
