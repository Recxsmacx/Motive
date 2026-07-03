import { motion } from "framer-motion";
import IconShell from "../IconShell";

export default function AnimatedMail(props) {
  return (
    <IconShell {...props} label="Mail">
      {() => (
        <>
          <rect x="2" y="4" width="20" height="16" rx="2" />
          <motion.polyline
            points="2,7 12,13 22,7"
            variants={{
              inactive: { y: 0, opacity: 1 },
              active: {
                y: [0, -3, 0],
                opacity: [1, 1, 1],
                transition: { duration: 0.7, ease: "easeInOut" },
              },
            }}
          />
        </>
      )}
    </IconShell>
  );
}
