import { motion } from "framer-motion";
import IconShell from "../IconShell";

export default function AnimatedCpu(props) {
  return (
    <IconShell {...props} label="Cpu">
      {() => (
        <>
          {/* Main Chip Frame */}
          <rect x="4" y="4" width="16" height="16" rx="2" ry="2" />
          {/* Central Silicon Core */}
          <motion.rect
            x="9"
            y="9"
            width="6"
            height="6"
            style={{ originX: "12px", originY: "12px" }}
            variants={{
              inactive: { scale: 1, fill: "transparent" },
              active: {
                scale: [1, 1.2, 1],
                fill: [
                  "rgba(139,92,246,0)",
                  "rgba(139,92,246,0.5)",
                  "rgba(139,92,246,0.2)",
                ],
                transition: { duration: 0.5, ease: "easeOut" },
              },
            }}
          />
          {/* Circuit Pins */}
          <motion.path
            d="M15 2v2M9 2v2M15 20v2M9 20v2"
            variants={{
              inactive: { opacity: 1 },
              active: {
                opacity: [0.4, 1, 0.4],
                transition: { duration: 0.4, delay: 0.05 },
              },
            }}
          />
          <motion.path
            d="M2 15h2M2 9h2M20 15h2M20 9h2"
            variants={{
              inactive: { opacity: 1 },
              active: {
                opacity: [0.4, 1, 0.4],
                transition: { duration: 0.4, delay: 0.15 },
              },
            }}
          />
        </>
      )}
    </IconShell>
  );
}
