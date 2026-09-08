import { motion } from "framer-motion";
import IconShell from "../IconShell";

/**
 * AnimatedPaintBucket
 * - Personality: Tactile
 * - Category: Liquid / Physical
 * - Primitives: Bucket Tilt + Paint Drop
 * - Signature Moment: Paint bucket tilts smoothly and releases a paint droplet.
 */
export default function AnimatedPaintBucket(props) {
  return (
    <IconShell {...props} label="Paint Bucket">
      {() => (
        <>
          {/* Authentic Lucide Tilted Bucket Body */}
          <motion.g
            style={{ originX: "6px", originY: "18px" }}
            variants={{
              inactive: { rotate: 0 },
              active: {
                rotate: [0, -18, 4, 0],
                transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
              },
            }}
          >
            <path d="m19 11-8-8-8.6 8.6a2 2 0 0 0 0 2.8l5.2 5.2c.8.8 2 .8 2.8 0L19 11Z" />
            <path d="m5 2 5 5" />
            <path d="M2 13h15" />
          </motion.g>

          {/* Authentic Lucide Droplet Falling */}
          <motion.path
            d="M22 20a2 2 0 1 1-4 0c0-1.6 1.7-2.4 2-4 .3 1.6 2 2.4 2 4Z"
            variants={{
              inactive: { y: -4, opacity: 0 },
              active: {
                y: [-4, 0],
                opacity: [0, 1, 0.9],
                transition: { duration: 0.5, delay: 0.12, ease: [0.22, 1, 0.36, 1] },
              },
            }}
          />
        </>
      )}
    </IconShell>
  );
}
