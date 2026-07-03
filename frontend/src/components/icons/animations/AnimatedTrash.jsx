import { motion } from "framer-motion";
import IconShell from "../IconShell";

export default function AnimatedTrash(props) {
  return (
    <IconShell {...props} label="Trash">
      {() => (
        <>
          {/* Lid */}
          <motion.g
            style={{ originX: "12px", originY: "6px" }}
            variants={{
              inactive: { rotate: 0, y: 0 },
              active: {
                rotate: [0, -22, -22, 0],
                y: [0, -1, -1, 0],
                transition: { duration: 0.9, times: [0, 0.35, 0.7, 1] },
              },
            }}
          >
            <path d="M3 6h18" />
            <path d="M9 6V4a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2" />
          </motion.g>
          {/* Bin */}
          <path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6" />
          <motion.path
            d="M10 11v6"
            variants={{
              inactive: { pathLength: 1, opacity: 1 },
              active: {
                opacity: [1, 0.4, 1],
                transition: { duration: 0.9 },
              },
            }}
          />
          <motion.path
            d="M14 11v6"
            variants={{
              inactive: { pathLength: 1, opacity: 1 },
              active: {
                opacity: [1, 0.4, 1],
                transition: { duration: 0.9, delay: 0.05 },
              },
            }}
          />
        </>
      )}
    </IconShell>
  );
}
