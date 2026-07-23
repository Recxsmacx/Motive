import { motion } from "framer-motion";
import IconShell from "../IconShell";

export default function AnimatedLayers(props) {
  return (
    <IconShell {...props} label="Layers">
      {() => (
        <>
          {/* Top Layer */}
          <motion.polygon
            points="12 2 2 7 12 12 22 7 12 2"
            variants={{
              inactive: { y: 0 },
              active: {
                y: [0, -3.5, 0],
                transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
              },
            }}
          />
          {/* Middle Layer */}
          <motion.path
            d="M2 12l10 5 10-5"
            variants={{
              inactive: { y: 0 },
              active: {
                y: [0, -1.5, 0],
                transition: { duration: 0.5, delay: 0.06, ease: [0.22, 1, 0.36, 1] },
              },
            }}
          />
          {/* Bottom Layer */}
          <motion.path
            d="M2 17l10 5 10-5"
            variants={{
              inactive: { y: 0 },
              active: {
                y: [0, 0.5, 0],
                transition: { duration: 0.5, delay: 0.12, ease: [0.22, 1, 0.36, 1] },
              },
            }}
          />
        </>
      )}
    </IconShell>
  );
}
