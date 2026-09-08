import { motion } from "framer-motion";
import IconShell from "../IconShell";

/**
 * AnimatedFolderGit
 * - Personality: Connected
 * - Category: Magnetic / Development
 * - Primitives: Stroke Draw + Snap + Node Pulse
 * - Signature Moment: Git commit branch line draws dynamically and snaps smoothly into commit node.
 */
export default function AnimatedFolderGit(props) {
  return (
    <IconShell {...props} label="Folder Git">
      {() => (
        <>
          {/* Authentic Lucide FolderGit2 Base */}
          <path d="M9 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v5" />

          {/* Root Commit Node */}
          <circle cx="13" cy="12" r="2" />

          {/* Branch Fork Curve */}
          <motion.path
            d="M18 19c-2.8 0-5-2.2-5-5v8"
            variants={{
              inactive: { pathLength: 1, opacity: 0.7 },
              active: {
                pathLength: [0, 1],
                opacity: [0.3, 1],
                transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
              },
            }}
          />

          {/* Fork Target Node */}
          <motion.circle
            cx="18"
            cy="19"
            r="2"
            variants={{
              inactive: { scale: 1 },
              active: {
                scale: [0.4, 1.25, 1],
                transition: { duration: 0.5, delay: 0.15, ease: [0.22, 1, 0.36, 1] },
              },
            }}
          />
        </>
      )}
    </IconShell>
  );
}
