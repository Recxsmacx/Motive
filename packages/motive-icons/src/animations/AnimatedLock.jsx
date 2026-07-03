import { motion } from "framer-motion";
import IconShell from "../IconShell";

export default function AnimatedLock(props) {
  return (
    <IconShell {...props} label="Lock">
      {() => (
        <>
          <motion.path
            d="M7 11V7a5 5 0 0 1 10 0v4"
            style={{ originX: "12px", originY: "11px" }}
            variants={{
              inactive: { rotate: 0, y: 0, x: 0 },
              active: {
                rotate: [0, -30, -30, 0],
                x: [0, -3, -3, 0],
                y: [0, -1, -1, 0],
                transition: { duration: 0.9, times: [0, 0.35, 0.7, 1] },
              },
            }}
          />
          <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
        </>
      )}
    </IconShell>
  );
}
