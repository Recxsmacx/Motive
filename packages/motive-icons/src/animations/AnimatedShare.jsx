import { motion } from "framer-motion";
import IconShell from "../IconShell";

export default function AnimatedShare(props) {
  return (
    <IconShell {...props} label="Share">
      {() => (
        <>
          {/* Connecting Lines */}
          <motion.line
            x1="8.59"
            y1="10.49"
            x2="15.42"
            y2="6.51"
            variants={{
              inactive: { pathLength: 1, opacity: 1 },
              active: {
                pathLength: [0.3, 1],
                opacity: [0.4, 1],
                transition: { duration: 0.45, ease: "easeInOut" },
              },
            }}
          />
          <motion.line
            x1="8.59"
            y1="13.51"
            x2="15.42"
            y2="17.49"
            variants={{
              inactive: { pathLength: 1, opacity: 1 },
              active: {
                pathLength: [0.3, 1],
                opacity: [0.4, 1],
                transition: { duration: 0.45, delay: 0.05, ease: "easeInOut" },
              },
            }}
          />

          {/* Center Source Node */}
          <motion.circle
            cx="6"
            cy="12"
            r="3"
            style={{ originX: "6px", originY: "12px" }}
            variants={{
              inactive: { scale: 1 },
              active: {
                scale: [1, 1.18, 1],
                transition: { duration: 0.4 },
              },
            }}
          />

          {/* Top Destination Node */}
          <motion.circle
            cx="18"
            cy="5"
            r="3"
            style={{ originX: "18px", originY: "5px" }}
            variants={{
              inactive: { x: 0, y: 0, scale: 1 },
              active: {
                x: [0, 2, 0],
                y: [0, -1, 0],
                scale: [1, 1.1, 1],
                transition: { duration: 0.5, delay: 0.08 },
              },
            }}
          />

          {/* Bottom Destination Node */}
          <motion.circle
            cx="18"
            cy="19"
            r="3"
            style={{ originX: "18px", originY: "19px" }}
            variants={{
              inactive: { x: 0, y: 0, scale: 1 },
              active: {
                x: [0, 2, 0],
                y: [0, 1, 0],
                scale: [1, 1.1, 1],
                transition: { duration: 0.5, delay: 0.12 },
              },
            }}
          />
        </>
      )}
    </IconShell>
  );
}
