import { motion } from "framer-motion";
import IconShell from "../IconShell";

export default function AnimatedFilter(props) {
  return (
    <IconShell {...props} label="Filter">
      {() => (
        <>
          {/* Funnel Outline */}
          <motion.path
            d="M22 3H2l8 9.46V19l4 2v-8.54L22 3z"
            style={{ originX: "12px", originY: "10px" }}
            variants={{
              inactive: { rotate: 0, scale: 1 },
              active: {
                rotate: [0, -6, 6, -3, 0],
                scale: [1, 1.03, 0.98, 1],
                transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
              },
            }}
          />

          {/* Liquid Particle Drop 1 */}
          <motion.circle
            cx="12"
            cy="7"
            r="1"
            variants={{
              inactive: { y: 0, opacity: 1, scale: 1 },
              active: {
                y: [0, 5, 10],
                opacity: [0, 1, 0],
                scale: [0.6, 1.1, 0.4],
                transition: { duration: 0.5, delay: 0.1, ease: "easeIn" },
              },
            }}
          />

          {/* Liquid Particle Drop 2 */}
          <motion.circle
            cx="12"
            cy="7"
            r="1"
            variants={{
              inactive: { y: 0, opacity: 0, scale: 1 },
              active: {
                y: [0, 5, 10],
                opacity: [0, 1, 0],
                scale: [0.6, 1.1, 0.4],
                transition: { duration: 0.5, delay: 0.28, ease: "easeIn" },
              },
            }}
          />
        </>
      )}
    </IconShell>
  );
}
