import { motion } from "framer-motion";
import IconShell from "../IconShell";

export default function AnimatedCamera(props) {
  return (
    <IconShell {...props} label="Camera">
      {() => (
        <>
          {/* Camera Body */}
          <motion.path
            d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"
            style={{ originX: "12px", originY: "13px" }}
            variants={{
              inactive: { scale: 1 },
              active: {
                scale: [1, 0.94, 1.03, 1],
                transition: { duration: 0.4, ease: "easeOut" },
              },
            }}
          />

          {/* Shutter Ring Flash */}
          <motion.circle
            cx="12"
            cy="13"
            r="5"
            style={{ originX: "12px", originY: "13px" }}
            variants={{
              inactive: { opacity: 0, scale: 0.7 },
              active: {
                opacity: [0, 0.7, 0],
                scale: [0.7, 1.15, 0.7],
                transition: { duration: 0.45, delay: 0.05 },
              },
            }}
          />

          {/* Lens Center */}
          <motion.circle
            cx="12"
            cy="13"
            r="3"
            style={{ originX: "12px", originY: "13px" }}
            variants={{
              inactive: { scale: 1 },
              active: {
                scale: [1, 1.25, 1],
                transition: { duration: 0.35, delay: 0.02 },
              },
            }}
          />
        </>
      )}
    </IconShell>
  );
}
