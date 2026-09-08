import { motion } from "framer-motion";
import IconShell from "../IconShell";

/**
 * AnimatedMapPin
 * - Personality: Friendly
 * - Category: Physical / Drop
 * - Primitives: Pin Elevation + Soft Touchdown
 * - Signature Moment: Map pin lifts smoothly and touches down on its anchor target.
 */
export default function AnimatedMapPin(props) {
  return (
    <IconShell {...props} label="Map Pin">
      {() => (
        <motion.g
          style={{ originX: "12px", originY: "21px" }}
          variants={{
            inactive: { y: 0, scale: 1 },
            active: {
              y: [0, -3.5, 0],
              scale: [1, 1.05, 1],
              transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
            },
          }}
        >
          {/* Authentic Lucide MapPin Paths */}
          <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
          <circle cx="12" cy="10" r="3" />
        </motion.g>
      )}
    </IconShell>
  );
}
