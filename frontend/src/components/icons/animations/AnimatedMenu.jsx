import { motion } from "framer-motion";
import IconShell from "../IconShell";

export default function AnimatedMenu(props) {
  return (
    <IconShell {...props} label="Menu">
      {() => (
        <>
          <motion.line
            x1="3" y1="6" x2="21" y2="6"
            variants={{
              inactive: { x1: 3, x2: 21 },
              active: {
                x1: [3, 8, 3],
                x2: [21, 18, 21],
                transition: { duration: 0.5 },
              },
            }}
          />
          <motion.line
            x1="3" y1="12" x2="21" y2="12"
            variants={{
              inactive: { x1: 3, x2: 21 },
              active: {
                x1: [3, 5, 3],
                x2: [21, 21, 21],
                transition: { duration: 0.5, delay: 0.05 },
              },
            }}
          />
          <motion.line
            x1="3" y1="18" x2="21" y2="18"
            variants={{
              inactive: { x1: 3, x2: 21 },
              active: {
                x1: [3, 10, 3],
                x2: [21, 16, 21],
                transition: { duration: 0.5, delay: 0.1 },
              },
            }}
          />
        </>
      )}
    </IconShell>
  );
}
