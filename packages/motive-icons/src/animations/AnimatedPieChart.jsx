import { motion } from "framer-motion";
import IconShell from "../IconShell";

/**
 * AnimatedPieChart
 * - Personality: Analytical
 * - Category: Geometric / Slice
 * - Primitives: Slice Separation + Soft Return
 * - Signature Moment: 90° pie quadrant pulls diagonally outward and returns cleanly to circular base.
 */
export default function AnimatedPieChart(props) {
  return (
    <IconShell {...props} label="Pie Chart">
      {() => (
        <>
          {/* Main Pie Body */}
          <path d="M21.21 15.89A10 10 0 1 1 8 2.83" />

          {/* Separating 90° Wedge */}
          <motion.path
            d="M22 12A10 10 0 0 0 12 2v10z"
            variants={{
              inactive: { x: 0, y: 0 },
              active: {
                x: [0, 2, 0],
                y: [0, -2, 0],
                transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
              },
            }}
          />
        </>
      )}
    </IconShell>
  );
}
