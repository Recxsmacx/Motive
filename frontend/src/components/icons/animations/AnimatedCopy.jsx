import { motion } from "framer-motion";
import IconShell from "../IconShell";

export default function AnimatedCopy(props) {
  return (
    <IconShell {...props} label="Copy">
      {() => (
        <>
          <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
          <motion.path
            d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"
            variants={{
              inactive: { x: 0, y: 0 },
              active: {
                x: [0, -2, 0],
                y: [0, -2, 0],
                transition: { duration: 0.5, ease: "easeInOut" },
              },
            }}
          />
        </>
      )}
    </IconShell>
  );
}
