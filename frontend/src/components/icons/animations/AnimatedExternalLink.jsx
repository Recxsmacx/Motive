import { motion } from "framer-motion";
import IconShell from "../IconShell";

export default function AnimatedExternalLink(props) {
  return (
    <IconShell {...props} label="External Link">
      {() => (
        <>
          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
          <motion.g
            variants={{
              inactive: { x: 0, y: 0 },
              active: {
                x: [0, 3, 0],
                y: [0, -3, 0],
                transition: { duration: 0.55, ease: "easeInOut" },
              },
            }}
          >
            <polyline points="15 3 21 3 21 9" />
            <line x1="10" y1="14" x2="21" y2="3" />
          </motion.g>
        </>
      )}
    </IconShell>
  );
}
