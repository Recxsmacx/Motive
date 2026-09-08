import { motion } from "framer-motion";
import IconShell from "../IconShell";

/**
 * AnimatedShoppingBag
 * - Personality: Delightful
 * - Category: Elastic / Commerce
 * - Primitives: Bag Bounce + Handle Sway
 * - Signature Moment: Bag handles drop slightly as the bag body expands with a satisfying retail bounce.
 */
export default function AnimatedShoppingBag(props) {
  return (
    <IconShell {...props} label="Shopping Bag">
      {() => (
        <>
          {/* Main Paper Bag Body */}
          <motion.path
            d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"
            style={{ originX: "12px", originY: "22px" }}
            variants={{
              inactive: { scale: 1 },
              active: {
                scale: [1, 1.05, 0.98, 1],
                transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
              },
            }}
          />
          <path d="M3 6h18" />

          {/* Hanging Rope Handles */}
          <motion.path
            d="M16 10a4 4 0 0 1-8 0"
            style={{ originX: "12px", originY: "6px" }}
            variants={{
              inactive: { y: 0 },
              active: {
                y: [0, 1.5, 0],
                transition: { duration: 0.5, delay: 0.05, ease: "easeOut" },
              },
            }}
          />
        </>
      )}
    </IconShell>
  );
}
