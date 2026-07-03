import { motion } from "framer-motion";
import IconShell from "../IconShell";

export default function AnimatedCheck(props) {
  return (
    <IconShell {...props} label="Check">
      {() => (
        <motion.path
          d="M20 6L9 17l-5-5"
          variants={{
            inactive: { pathLength: 1, opacity: 1 },
            active: {
              pathLength: [0, 1],
              opacity: [0, 1],
              transition: { duration: 0.55, ease: [0.65, 0, 0.35, 1] },
            },
          }}
        />
      )}
    </IconShell>
  );
}
