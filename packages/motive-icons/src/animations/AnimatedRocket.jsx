import { motion } from "framer-motion";
import IconShell from "../IconShell";

/**
 * AnimatedRocket
 * - Personality: Energetic
 * - Category: Elastic / Kinetic
 * - Primitives: Launch Thrust + Exhaust Pulse
 * - Signature Moment: Pre-launch nozzle squish with smooth 45° launch thrust and exhaust trail.
 */
export default function AnimatedRocket(props) {
  return (
    <IconShell {...props} label="Rocket">
      {() => (
        <>
          {/* Main Rocket Fuselage & Connected Fins */}
          <motion.g
            style={{ originX: "6px", originY: "18px" }}
            variants={{
              inactive: { x: 0, y: 0, scale: 1 },
              active: {
                x: [0, -1, 3, 0],
                y: [0, 1, -3, 0],
                scale: [1, 0.97, 1.04, 1],
                transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
              },
            }}
          >
            {/* Rocket Tail Exhaust Base */}
            <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
            
            {/* Main Fuselage */}
            <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
            
            {/* Top Left Fin */}
            <path d="M9 12H4s.55-3.03 2-4.5c1.62-1.63 5-2.5 5-2.5" />
            
            {/* Bottom Right Fin (Cleanly Connected to Body at 12,15) */}
            <path d="M12 15v5s3.03-.55 4.5-2c1.63-1.62 2.5-5 2.5-5" />
            
            {/* Porthole Window */}
            <circle cx="15" cy="9" r="1" />
          </motion.g>

          {/* Exhaust Trail */}
          <motion.path
            d="m3 21 3-3"
            variants={{
              inactive: { opacity: 0.4 },
              active: {
                opacity: [0.4, 1, 0.2, 0.8],
                transition: { duration: 0.55, ease: "easeOut" },
              },
            }}
          />
        </>
      )}
    </IconShell>
  );
}
