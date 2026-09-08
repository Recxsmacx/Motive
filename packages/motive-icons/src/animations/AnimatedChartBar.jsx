import { motion } from "framer-motion";
import IconShell from "../IconShell";

/**
 * AnimatedChartBar
 * - Personality: Analytical
 * - Category: Kinetic / Bars
 * - Primitives: Bar Elevation + Stagger
 * - Signature Moment: 3 vertical metric bars rise sequentially from the baseline.
 */
export default function AnimatedChartBar(props) {
  return (
    <IconShell {...props} label="Chart Bar">
      {() => (
        <>
          {/* Baseline Grid Floor */}
          <path d="M3 3v18h18" />

          {/* Bar 1 */}
          <motion.path
            d="M7 16v-4"
            style={{ originY: "16px" }}
            variants={{
              inactive: { scaleY: 1 },
              active: {
                scaleY: [0.5, 1.15, 1],
                transition: { duration: 0.55, delay: 0, ease: [0.22, 1, 0.36, 1] },
              },
            }}
          />

          {/* Bar 2 */}
          <motion.path
            d="M12 16V9"
            style={{ originY: "16px" }}
            variants={{
              inactive: { scaleY: 1 },
              active: {
                scaleY: [0.5, 1.15, 1],
                transition: { duration: 0.55, delay: 0.08, ease: [0.22, 1, 0.36, 1] },
              },
            }}
          />

          {/* Bar 3 */}
          <motion.path
            d="M17 16V5"
            style={{ originY: "16px" }}
            variants={{
              inactive: { scaleY: 1 },
              active: {
                scaleY: [0.5, 1.15, 1],
                transition: { duration: 0.55, delay: 0.16, ease: [0.22, 1, 0.36, 1] },
              },
            }}
          />
        </>
      )}
    </IconShell>
  );
}
