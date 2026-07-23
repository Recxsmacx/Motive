import { motion } from "framer-motion";
import IconShell from "../IconShell";

export default function AnimatedMessageSquare(props) {
  return (
    <IconShell {...props} label="MessageSquare">
      {() => (
        <>
          {/* Chat Bubble Body */}
          <motion.path
            d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"
            style={{ originX: "12px", originY: "11px" }}
            variants={{
              inactive: { scale: 1 },
              active: {
                scale: [1, 1.04, 0.98, 1],
                transition: { duration: 0.5, ease: "easeOut" },
              },
            }}
          />

          {/* Typing Indicator Dot 1 */}
          <motion.circle
            cx="8"
            cy="10"
            r="1"
            variants={{
              inactive: { y: 0, opacity: 1 },
              active: {
                y: [0, -2, 0],
                opacity: [0.4, 1, 0.4],
                transition: { duration: 0.4, delay: 0.05 },
              },
            }}
          />

          {/* Typing Indicator Dot 2 */}
          <motion.circle
            cx="12"
            cy="10"
            r="1"
            variants={{
              inactive: { y: 0, opacity: 1 },
              active: {
                y: [0, -2, 0],
                opacity: [0.4, 1, 0.4],
                transition: { duration: 0.4, delay: 0.15 },
              },
            }}
          />

          {/* Typing Indicator Dot 3 */}
          <motion.circle
            cx="16"
            cy="10"
            r="1"
            variants={{
              inactive: { y: 0, opacity: 1 },
              active: {
                y: [0, -2, 0],
                opacity: [0.4, 1, 0.4],
                transition: { duration: 0.4, delay: 0.25 },
              },
            }}
          />
        </>
      )}
    </IconShell>
  );
}
