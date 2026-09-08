import { motion } from "framer-motion";
import IconShell from "../IconShell";

/**
 * AnimatedCloudDownload
 * - Personality: Receptive
 * - Category: Physical / Directional
 * - Primitives: Descent + Spring Settle
 * - Signature Moment: Arrow glides smoothly downward through cloud aperture.
 */
export default function AnimatedCloudDownload(props) {
  return (
    <IconShell {...props} label="Cloud Download">
      {() => (
        <>
          {/* Authentic Lucide Open Cloud Base */}
          <path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242" />

          {/* Descending Arrow */}
          <motion.g
            variants={{
              inactive: { y: 0 },
              active: {
                y: [0, -3, 2, 0],
                transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
              },
            }}
          >
            <path d="M12 13v9" />
            <path d="m8 18 4 4 4-4" />
          </motion.g>
        </>
      )}
    </IconShell>
  );
}
