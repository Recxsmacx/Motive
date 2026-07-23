import { motion } from "framer-motion";
import IconShell from "../IconShell";

export default function AnimatedGlobe(props) {
  return (
    <IconShell {...props} label="Globe">
      {() => (
        <>
          {/* Outer globe frame */}
          <circle cx="12" cy="12" r="10" />
          {/* Equator line */}
          <line x1="2" y1="12" x2="22" y2="12" />
          {/* Animated Meridians */}
          <motion.g
            style={{ originX: "12px", originY: "12px" }}
            variants={{
              inactive: { scaleX: 1, rotate: 0 },
              active: {
                scaleX: [1, 0.25, 0.9, 0.25, 1],
                transition: { duration: 0.9, ease: "easeInOut" },
              },
            }}
          >
            <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
          </motion.g>
        </>
      )}
    </IconShell>
  );
}
