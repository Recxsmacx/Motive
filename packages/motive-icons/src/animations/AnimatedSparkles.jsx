import { motion } from "framer-motion";
import IconShell from "../IconShell";

export default function AnimatedSparkles(props) {
  return (
    <IconShell {...props} label="Sparkles">
      {() => (
        <>
          {/* Main Central Star */}
          <motion.path
            d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"
            style={{ originX: "12px", originY: "12px" }}
            variants={{
              inactive: { scale: 1, rotate: 0 },
              active: {
                scale: [1, 1.1, 0.96, 1],
                rotate: [0, 15, -8, 0],
                transition: { duration: 0.6, ease: "easeOut" },
              },
            }}
          />
          {/* Top-Right Sparkle */}
          <motion.path
            d="M20 3v4M22 5h-4"
            style={{ originX: "20px", originY: "5px" }}
            variants={{
              inactive: { scale: 1, opacity: 1 },
              active: {
                scale: [0.5, 1.3, 1],
                opacity: [0.4, 1, 1],
                transition: { duration: 0.45, delay: 0.1 },
              },
            }}
          />
          {/* Bottom-Left Sparkle */}
          <motion.path
            d="M4 17v2M5 18H3"
            style={{ originX: "4px", originY: "18px" }}
            variants={{
              inactive: { scale: 1, opacity: 1 },
              active: {
                scale: [0.5, 1.3, 1],
                opacity: [0.4, 1, 1],
                transition: { duration: 0.45, delay: 0.2 },
              },
            }}
          />
        </>
      )}
    </IconShell>
  );
}
