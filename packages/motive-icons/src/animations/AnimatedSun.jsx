import { motion } from "framer-motion";
import IconShell from "../IconShell";

export default function AnimatedSun(props) {
  return (
    <IconShell {...props} label="Sun">
      {() => (
        <>
          <motion.circle
            cx="12"
            cy="12"
            r="4"
            variants={{
              inactive: { scale: 1 },
              active: { scale: 1.2, transition: { type: "spring", stiffness: 400, damping: 10 } }
            }}
            style={{ originX: "12px", originY: "12px" }}
          />
          <motion.g
            variants={{
              inactive: { rotate: 0 },
              active: { rotate: 45, transition: { type: "spring", stiffness: 300, damping: 15 } }
            }}
            style={{ originX: "12px", originY: "12px" }}
          >
            <path d="M12 2v2" />
            <path d="M12 20v2" />
            <path d="m4.93 4.93 1.41 1.41" />
            <path d="m17.66 17.66 1.41 1.41" />
            <path d="M2 12h2" />
            <path d="M20 12h2" />
            <path d="m6.34 17.66-1.41 1.41" />
            <path d="m19.07 4.93-1.41 1.41" />
          </motion.g>
        </>
      )}
    </IconShell>
  );
}
