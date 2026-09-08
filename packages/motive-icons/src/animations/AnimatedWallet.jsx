import { motion } from "framer-motion";
import IconShell from "../IconShell";

/**
 * AnimatedWallet
 * - Personality: Premium
 * - Category: Mechanical / Physical
 * - Primitives: Card Reveal + Leather Settle
 * - Signature Moment: Card peeks out of wallet smoothly and settles back.
 */
export default function AnimatedWallet(props) {
  return (
    <IconShell {...props} label="Wallet">
      {() => (
        <>
          {/* Card Peeking Out */}
          <motion.path
            d="M6 8V5a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v3"
            variants={{
              inactive: { y: 0, opacity: 0.5 },
              active: {
                y: [0, -3, 0],
                opacity: [0.5, 1, 0.5],
                transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
              },
            }}
          />

          {/* Wallet Base Leather Body */}
          <rect x="3" y="8" width="18" height="12" rx="2" />

          {/* Clasp Mechanism */}
          <motion.path
            d="M16 12h5v4h-5a2 2 0 0 1 0-4Z"
            variants={{
              inactive: { x: 0 },
              active: {
                x: [0, 1.5, 0],
                transition: { duration: 0.55, ease: "easeOut" },
              },
            }}
          />
          <circle cx="18" cy="14" r="0.75" fill="currentColor" />
        </>
      )}
    </IconShell>
  );
}
