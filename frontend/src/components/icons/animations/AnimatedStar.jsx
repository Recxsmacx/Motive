import { motion } from "framer-motion";
import IconShell from "../IconShell";

export default function AnimatedStar(props) {
  return (
    <IconShell {...props} label="Star">
      {() => (
        <>
          <motion.polygon
            points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
            style={{ originX: "12px", originY: "12px" }}
            variants={{
              inactive: { scale: 1, rotate: 0, fill: "transparent" },
              active: {
                scale: [1, 1.15, 1],
                rotate: [0, 12, -8, 0],
                fill: ["rgba(139,92,246,0)", "rgba(139,92,246,0.4)", "rgba(139,92,246,0.25)"],
                transition: { duration: 0.7 },
              },
            }}
          />
          {/* sparkles */}
          <motion.circle
            cx="20" cy="4" r="0.6"
            variants={{
              inactive: { opacity: 0, scale: 0 },
              active: {
                opacity: [0, 1, 0],
                scale: [0, 1.5, 0],
                transition: { duration: 0.6, delay: 0.1 },
              },
            }}
          />
          <motion.circle
            cx="4" cy="6" r="0.6"
            variants={{
              inactive: { opacity: 0, scale: 0 },
              active: {
                opacity: [0, 1, 0],
                scale: [0, 1.5, 0],
                transition: { duration: 0.6, delay: 0.2 },
              },
            }}
          />
        </>
      )}
    </IconShell>
  );
}
