import { motion } from "framer-motion";
import IconShell from "../IconShell";

export default function AnimatedShield(props) {
  return (
    <IconShell {...props} label="Shield">
      {() => (
        <>
          {/* Outer Shield Frame */}
          <motion.path
            d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"
            style={{ originX: "12px", originY: "12px" }}
            variants={{
              inactive: { scale: 1 },
              active: {
                scale: [1, 0.94, 1.03, 1],
                transition: { duration: 0.45, ease: "easeOut" },
              },
            }}
          />
          {/* Inner Security Checkmark */}
          <motion.path
            d="M9 12l2 2 4-4"
            variants={{
              inactive: { pathLength: 1, opacity: 1 },
              active: {
                pathLength: [0, 1],
                opacity: [0, 1],
                transition: { duration: 0.4, delay: 0.1, ease: "easeInOut" },
              },
            }}
          />
        </>
      )}
    </IconShell>
  );
}
