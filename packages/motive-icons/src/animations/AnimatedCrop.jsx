import { motion } from "framer-motion";
import IconShell from "../IconShell";

/**
 * AnimatedCrop
 * - Personality: Precise
 * - Category: Geometric / Mechanical
 * - Primitives: Framing Compression + Settle
 * - Signature Moment: Crop corner arms compress inward smoothly and spring taut.
 */
export default function AnimatedCrop(props) {
  return (
    <IconShell {...props} label="Crop">
      {() => (
        <>
          {/* Top-Right Cropping Arm */}
          <motion.path
            d="M6 2v14a2 2 0 0 0 2 2h14"
            variants={{
              inactive: { x: 0, y: 0 },
              active: {
                x: [0, 1.5, 0],
                y: [0, -1.5, 0],
                transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
              },
            }}
          />

          {/* Bottom-Left Cropping Arm */}
          <motion.path
            d="M18 22V8a2 2 0 0 0-2-2H2"
            variants={{
              inactive: { x: 0, y: 0 },
              active: {
                x: [0, -1.5, 0],
                y: [0, 1.5, 0],
                transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
              },
            }}
          />
        </>
      )}
    </IconShell>
  );
}
