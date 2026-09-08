import { motion } from "framer-motion";
import IconShell from "../IconShell";

/**
 * AnimatedChartLine
 * - Personality: Momentum
 * - Category: Kinetic / Graph
 * - Primitives: Stroke Draw + Peak Vertex
 * - Signature Moment: Line graph traces smoothly from origin to peak with glowing terminal vertex.
 */
export default function AnimatedChartLine(props) {
  return (
    <IconShell {...props} label="Chart Line">
      {() => (
        <>
          {/* Axis Frame */}
          <path d="M3 3v18h18" />

          {/* Dynamic Trend Line */}
          <motion.path
            d="m19 9-5 5-4-4-3 3"
            variants={{
              inactive: { pathLength: 1, opacity: 0.8 },
              active: {
                pathLength: [0, 1],
                opacity: [0.4, 1],
                transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
              },
            }}
          />

          {/* Peak Milestone Vertex Node */}
          <motion.circle
            cx="19"
            cy="9"
            r="1.5"
            variants={{
              inactive: { scale: 1 },
              active: {
                scale: [0.4, 1.25, 1],
                transition: { duration: 0.5, delay: 0.2, ease: [0.22, 1, 0.36, 1] },
              },
            }}
          />
        </>
      )}
    </IconShell>
  );
}
