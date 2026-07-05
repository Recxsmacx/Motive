import { motion } from "framer-motion";
import IconShell from "../IconShell";

export default function AnimatedMoon(props) {
  return (
    <IconShell {...props} label="Moon">
      {() => (
        <motion.path
          d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"
          variants={{
            inactive: { rotate: 0 },
            active: { rotate: -15, transition: { type: "spring", stiffness: 300, damping: 10 } }
          }}
          style={{ originX: "12px", originY: "12px" }}
        />
      )}
    </IconShell>
  );
}
