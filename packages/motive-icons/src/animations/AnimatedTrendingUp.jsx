import { motion } from "framer-motion";
import IconShell from "../IconShell";

/**
 * AnimatedTrendingUp
 * - Personality: Forward
 * - Category: Kinetic / Vector
 * - Primitives: Pathway Draw + Arrowhead Lift
 * - Signature Moment: Zigzag trendline draws smoothly upward, launching the final arrowhead with calm momentum.
 */
export default function AnimatedTrendingUp(props) {
  return (
    <IconShell {...props} label="Trending Up">
      {() => (
        <>
          {/* Zigzag Pathway */}
          <motion.polyline
            points="22 7 13.5 15.5 8.5 10.5 2 17"
            variants={{
              inactive: { pathLength: 1, opacity: 0.8 },
              active: {
                pathLength: [0, 1],
                opacity: [0.4, 1],
                transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
              },
            }}
          />

          {/* Heading Arrowhead */}
          <motion.polyline
            points="16 7 22 7 22 13"
            variants={{
              inactive: { x: 0, y: 0 },
              active: {
                x: [0, 1.5, 0],
                y: [0, -1.5, 0],
                transition: { duration: 0.55, delay: 0.15, ease: [0.22, 1, 0.36, 1] },
              },
            }}
          />
        </>
      )}
    </IconShell>
  );
}
