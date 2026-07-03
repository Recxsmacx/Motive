import { motion } from "framer-motion";
import IconShell from "../IconShell";

export default function AnimatedSettings(props) {
  return (
    <IconShell {...props} label="Settings">
      {() => (
        <>
          <motion.path
            d="M19.14 12.94a7.99 7.99 0 0 0 .05-1.88l2.03-1.58a.5.5 0 0 0 .12-.64l-1.92-3.32a.5.5 0 0 0-.6-.22l-2.39.96a7.94 7.94 0 0 0-1.63-.94l-.36-2.54A.5.5 0 0 0 13.94 2h-3.84a.5.5 0 0 0-.5.42l-.36 2.54a7.94 7.94 0 0 0-1.63.94l-2.39-.96a.5.5 0 0 0-.6.22L2.7 8.48a.5.5 0 0 0 .12.64L4.85 10.7a7.99 7.99 0 0 0 0 2.6L2.82 14.88a.5.5 0 0 0-.12.64l1.92 3.32a.5.5 0 0 0 .6.22l2.39-.96c.5.38 1.05.7 1.63.94l.36 2.54a.5.5 0 0 0 .5.42h3.84a.5.5 0 0 0 .5-.42l.36-2.54a7.94 7.94 0 0 0 1.63-.94l2.39.96a.5.5 0 0 0 .6-.22l1.92-3.32a.5.5 0 0 0-.12-.64l-2.03-1.58Z"
            style={{ originX: "12px", originY: "12px" }}
            variants={{
              inactive: { rotate: 0 },
              active: {
                rotate: 360,
                transition: { duration: 1.6, ease: "linear", repeat: 0 },
              },
            }}
          />
          <circle cx="12" cy="12" r="3" />
        </>
      )}
    </IconShell>
  );
}
