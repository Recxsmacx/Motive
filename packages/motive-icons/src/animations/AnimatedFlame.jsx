import { motion } from "framer-motion";
import IconShell from "../IconShell";

export default function AnimatedFlame(props) {
  return (
    <IconShell {...props} label="Flame">
      {() => (
        <>
          {/* Outer Fire Body */}
          <motion.path
            d="M12 2c0 0-6.5 5.5-6.5 11a6.5 6.5 0 0 0 13 0C18.5 7.5 12 2 12 2z"
            style={{ originX: "12px", originY: "18px" }}
            variants={{
              inactive: { scale: 1, rotate: 0, fill: "transparent" },
              active: {
                scale: [1, 1.06, 0.97, 1.03, 1],
                rotate: [0, -5, 6, -3, 0],
                fill: [
                  "rgba(249,115,22,0)",
                  "rgba(249,115,22,0.35)",
                  "rgba(249,115,22,0.2)",
                ],
                transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] },
              },
            }}
          />

          {/* Inner Flame Core */}
          <motion.path
            d="M12 9c0 0-3 2.5-3 5a3 3 0 0 0 6 0c0-2.5-3-5-3-5z"
            style={{ originX: "12px", originY: "16px" }}
            variants={{
              inactive: { y: 0, scale: 1, fill: "transparent" },
              active: {
                y: [0, -2.2, 0],
                scale: [1, 1.16, 0.95, 1],
                fill: [
                  "rgba(234,179,8,0)",
                  "rgba(234,179,8,0.55)",
                  "rgba(234,179,8,0.3)",
                ],
                transition: { duration: 0.6, delay: 0.08, ease: "easeOut" },
              },
            }}
          />

          {/* Floating Fire Embers */}
          <motion.circle
            cx="9.5"
            cy="10"
            r="0.75"
            variants={{
              inactive: { opacity: 0, y: 0, scale: 0 },
              active: {
                opacity: [0, 1, 0],
                y: [0, -3, -6],
                scale: [0.4, 1.2, 0],
                transition: { duration: 0.55, delay: 0.15 },
              },
            }}
          />
          <motion.circle
            cx="14.5"
            cy="12"
            r="0.75"
            variants={{
              inactive: { opacity: 0, y: 0, scale: 0 },
              active: {
                opacity: [0, 1, 0],
                y: [0, -3, -6],
                scale: [0.4, 1.2, 0],
                transition: { duration: 0.55, delay: 0.28 },
              },
            }}
          />
        </>
      )}
    </IconShell>
  );
}
