import { motion } from "framer-motion";
import IconShell from "../IconShell";

export default function AnimatedVolume(props) {
  return (
    <IconShell {...props} label="Volume">
      {() => (
        <>
          <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
          <motion.path
            d="M15.54 8.46a5 5 0 0 1 0 7.07"
            variants={{
              inactive: { opacity: 1, x: 0 },
              active: {
                opacity: [0, 1, 1],
                x: [-3, 0, 0],
                transition: { duration: 0.6, delay: 0 },
              },
            }}
          />
          <motion.path
            d="M19.07 4.93a10 10 0 0 1 0 14.14"
            variants={{
              inactive: { opacity: 1, x: 0 },
              active: {
                opacity: [0, 1, 1],
                x: [-3, 0, 0],
                transition: { duration: 0.6, delay: 0.15 },
              },
            }}
          />
        </>
      )}
    </IconShell>
  );
}
