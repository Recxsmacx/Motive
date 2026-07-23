import { motion } from "framer-motion";
import IconShell from "../IconShell";

export default function AnimatedCompass(props) {
  return (
    <IconShell {...props} label="Compass">
      {() => (
        <>
          {/* Compass Dial Outer Frame */}
          <motion.circle
            cx="12"
            cy="12"
            r="10"
            style={{ originX: "12px", originY: "12px" }}
            variants={{
              inactive: { scale: 1 },
              active: {
                scale: [1, 1.04, 1],
                transition: { duration: 0.5, ease: "easeOut" },
              },
            }}
          />

          {/* Magnetic Diamond Needle */}
          <motion.polygon
            points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"
            style={{ originX: "12px", originY: "12px" }}
            variants={{
              inactive: { rotate: 0 },
              active: {
                rotate: [0, 50, -18, 10, -4, 0],
                transition: { duration: 0.85, ease: [0.22, 1, 0.36, 1] },
              },
            }}
          />
        </>
      )}
    </IconShell>
  );
}
