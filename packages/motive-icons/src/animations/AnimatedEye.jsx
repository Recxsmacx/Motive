import { motion } from "framer-motion";
import IconShell from "../IconShell";

export default function AnimatedEye(props) {
  return (
    <IconShell {...props} label="Eye">
      {() => (
        <>
          <motion.path
            d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"
            variants={{
              inactive: { d: "M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" },
              active: {
                d: [
                  "M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z",
                  "M1 12s4-2 11-2 11 2 11 2-4 2-11 2-11-2-11-2z",
                  "M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z",
                ],
                transition: { duration: 0.7, times: [0, 0.5, 1] },
              },
            }}
          />
          <motion.circle
            cx="12" cy="12" r="3"
            variants={{
              inactive: { scale: 1, opacity: 1 },
              active: {
                scale: [1, 0, 1],
                opacity: [1, 0, 1],
                transition: { duration: 0.7, times: [0, 0.5, 1] },
              },
            }}
            style={{ originX: "12px", originY: "12px" }}
          />
        </>
      )}
    </IconShell>
  );
}
