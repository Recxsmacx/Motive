import { motion } from "framer-motion";
import IconShell from "../IconShell";

/**
 * AnimatedVideo
 * - Personality: Dynamic
 * - Category: Optical / Media
 * - Primitives: Camera Pulse + Projector Glide
 * - Signature Moment: Camera frame tilts smoothly as the projector lens cone expands.
 */
export default function AnimatedVideo(props) {
  return (
    <IconShell {...props} label="Video">
      {() => (
        <>
          {/* Main Camera Frame */}
          <motion.rect
            width="14"
            height="12"
            x="2"
            y="6"
            rx="2"
            ry="2"
            style={{ originX: "9px", originY: "12px" }}
            variants={{
              inactive: { scale: 1 },
              active: {
                scale: [1, 1.04, 1],
                transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
              },
            }}
          />

          {/* Projector Lens Cone */}
          <motion.path
            d="m22 8-6 4 6 4V8Z"
            variants={{
              inactive: { x: 0 },
              active: {
                x: [0, 1.5, 0],
                transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
              },
            }}
          />
        </>
      )}
    </IconShell>
  );
}
