import { motion } from "framer-motion";
import IconShell from "../IconShell";

export default function AnimatedBookmark(props) {
  return (
    <IconShell {...props} label="Bookmark">
      {() => (
        <motion.path
          d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"
          style={{ originX: "12px", originY: "3px" }}
          variants={{
            inactive: { y: 0, scaleY: 1, fill: "transparent" },
            active: {
              y: [-4, 0],
              scaleY: [0.6, 1],
              fill: ["rgba(139,92,246,0)", "rgba(139,92,246,0.35)"],
              transition: { duration: 0.5, ease: [0.34, 1.56, 0.64, 1] },
            },
          }}
        />
      )}
    </IconShell>
  );
}
