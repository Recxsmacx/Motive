import { motion } from "framer-motion";
import IconShell from "../IconShell";

export default function AnimatedUpload(props) {
  return (
    <IconShell {...props} label="Upload">
      {() => (
        <>
          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
          <motion.g
            variants={{
              inactive: { y: 0, opacity: 1 },
              active: {
                y: [0, -6, 8, 0],
                opacity: [1, 1, 0, 1],
                transition: { duration: 0.7, times: [0, 0.4, 0.55, 1] },
              },
            }}
          >
            <path d="M17 8l-5-5-5 5" />
            <path d="M12 3v12" />
          </motion.g>
        </>
      )}
    </IconShell>
  );
}
