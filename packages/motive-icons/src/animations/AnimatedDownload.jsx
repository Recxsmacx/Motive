import { motion } from "framer-motion";
import IconShell from "../IconShell";

export default function AnimatedDownload(props) {
  return (
    <IconShell {...props} label="Download">
      {() => (
        <>
          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
          <motion.g
            variants={{
              inactive: { y: 0, opacity: 1 },
              active: {
                y: [0, 4, -8, 0],
                opacity: [1, 1, 0, 1],
                transition: { duration: 0.7, times: [0, 0.4, 0.55, 1] },
              },
            }}
          >
            <path d="M7 10l5 5 5-5" />
            <path d="M12 15V3" />
          </motion.g>
        </>
      )}
    </IconShell>
  );
}
