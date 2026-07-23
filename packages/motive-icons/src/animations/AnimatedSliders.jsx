import { motion } from "framer-motion";
import IconShell from "../IconShell";

export default function AnimatedSliders(props) {
  return (
    <IconShell {...props} label="Sliders">
      {() => (
        <>
          {/* Track 1 */}
          <line x1="4" y1="6" x2="20" y2="6" />
          <motion.line
            x1="14"
            y1="4"
            x2="14"
            y2="8"
            variants={{
              inactive: { x: 0 },
              active: {
                x: [0, -6, 0],
                transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
              },
            }}
          />

          {/* Track 2 */}
          <line x1="4" y1="12" x2="20" y2="12" />
          <motion.line
            x1="8"
            y1="10"
            x2="8"
            y2="14"
            variants={{
              inactive: { x: 0 },
              active: {
                x: [0, 6, 0],
                transition: { duration: 0.5, delay: 0.06, ease: [0.22, 1, 0.36, 1] },
              },
            }}
          />

          {/* Track 3 */}
          <line x1="4" y1="18" x2="20" y2="18" />
          <motion.line
            x1="16"
            y1="16"
            x2="16"
            y2="20"
            variants={{
              inactive: { x: 0 },
              active: {
                x: [0, -7, 0],
                transition: { duration: 0.5, delay: 0.12, ease: [0.22, 1, 0.36, 1] },
              },
            }}
          />
        </>
      )}
    </IconShell>
  );
}
