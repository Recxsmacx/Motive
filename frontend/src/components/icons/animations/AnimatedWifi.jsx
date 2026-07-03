import { motion } from "framer-motion";
import IconShell from "../IconShell";

export default function AnimatedWifi(props) {
  return (
    <IconShell {...props} label="Wifi">
      {() => (
        <>
          <motion.path
            d="M5 12.55a11 11 0 0 1 14.08 0"
            variants={{
              inactive: { opacity: 1, scale: 1 },
              active: {
                opacity: [0, 1],
                scale: [0.8, 1],
                transition: { duration: 0.3, delay: 0.2 },
              },
            }}
            style={{ originX: "12px", originY: "12.55px" }}
          />
          <motion.path
            d="M1.42 9a16 16 0 0 1 21.16 0"
            variants={{
              inactive: { opacity: 1, scale: 1 },
              active: {
                opacity: [0, 1],
                scale: [0.8, 1],
                transition: { duration: 0.3, delay: 0.35 },
              },
            }}
            style={{ originX: "12px", originY: "9px" }}
          />
          <motion.path
            d="M8.53 16.11a6 6 0 0 1 6.95 0"
            variants={{
              inactive: { opacity: 1, scale: 1 },
              active: {
                opacity: [0, 1],
                scale: [0.8, 1],
                transition: { duration: 0.3, delay: 0.05 },
              },
            }}
            style={{ originX: "12px", originY: "16.11px" }}
          />
          <motion.circle
            cx="12" cy="20" r="1"
            variants={{
              inactive: { opacity: 1, scale: 1 },
              active: {
                opacity: [0, 1],
                scale: [0, 1],
                transition: { duration: 0.25 },
              },
            }}
            style={{ originX: "12px", originY: "20px" }}
          />
        </>
      )}
    </IconShell>
  );
}
