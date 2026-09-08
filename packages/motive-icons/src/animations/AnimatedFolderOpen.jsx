import { motion } from "framer-motion";
import IconShell from "../IconShell";

/**
 * AnimatedFolderOpen
 * - Personality: Organized
 * - Category: Geometric / Spatial
 * - Primitives: Fold + Expansion + Follow Through
 * - Signature Moment: Papers inside lift upward with staggered calm delay as folder expands.
 */
export default function AnimatedFolderOpen(props) {
  return (
    <IconShell {...props} label="Folder Open">
      {() => (
        <>
          {/* Authentic Lucide FolderOpen Base */}
          <path d="m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2" />

          {/* Internal Document Sheets Rising */}
          <motion.g
            variants={{
              inactive: { y: 0, opacity: 0.3 },
              active: {
                y: [0, -3.5, -2],
                opacity: [0.3, 1, 0.9],
                transition: { duration: 0.55, delay: 0.06, ease: [0.22, 1, 0.36, 1] },
              },
            }}
          >
            <path d="M8 9h8" />
            <path d="M8 6h4" />
          </motion.g>
        </>
      )}
    </IconShell>
  );
}
