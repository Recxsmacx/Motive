import { motion } from "framer-motion";
import IconShell from "../IconShell";

/**
 * AnimatedCart
 * - Personality: Kinetic
 * - Category: Elastic / Kinetic
 * - Primitives: Rolling Motion + Basket Tilt
 * - Signature Moment: Cart rolls smoothly forward on rotating wheel hubs with gentle braking.
 */
export default function AnimatedCart(props) {
  return (
    <IconShell {...props} label="Cart">
      {() => (
        <motion.g
          variants={{
            inactive: { x: 0 },
            active: {
              x: [0, 2, 0],
              transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
            },
          }}
        >
          {/* Authentic Lucide ShoppingCart Geometry */}
          <circle cx="8" cy="21" r="1" />
          <circle cx="19" cy="21" r="1" />
          <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
        </motion.g>
      )}
    </IconShell>
  );
}
