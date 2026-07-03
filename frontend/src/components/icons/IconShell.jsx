import { motion } from "framer-motion";
import { useIconTrigger } from "@/hooks/useIconTrigger";

/**
 * IconShell — universal wrapper.
 *
 * Props:
 *   - trigger: "hover" | "click" | "auto" | "focus"
 *   - loop: boolean — keep animation active
 *   - active: boolean | undefined — when provided, OVERRIDES trigger. Parent
 *     component owns the active state (used by IconCard so the whole card
 *     hover triggers the icon, not only hovering the SVG itself).
 *   - size, strokeWidth, color, speed, label, className, ariaLabel
 */
export default function IconShell({
  size = 24,
  strokeWidth = 2,
  color = "currentColor",
  trigger = "hover",
  loop = false,
  active: activeOverride,
  label,
  className = "",
  ariaLabel,
  children,
}) {
  const managed = useIconTrigger({ trigger, loop });
  const isControlled = typeof activeOverride === "boolean";
  const active = isControlled ? activeOverride : managed.active;
  const handlers = isControlled ? {} : managed.handlers;

  const render =
    typeof children === "function"
      ? children({ active, strokeWidth })
      : children;

  const Wrapper = !isControlled && (trigger === "click" || trigger === "focus") ? "button" : "span";

  return (
    <Wrapper
      {...handlers}
      aria-label={ariaLabel || label}
      role={Wrapper === "button" ? undefined : "img"}
      className={`inline-flex items-center justify-center outline-none focus-visible:ring-2 focus-visible:ring-violet-500/60 rounded-md ${className}`}
      style={{
        background: "transparent",
        border: "none",
        padding: 0,
        cursor: !isControlled && trigger === "click" ? "pointer" : undefined,
        color,
      }}
    >
      <motion.svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={false}
        animate={active ? "active" : "inactive"}
        aria-hidden="true"
      >
        {render}
      </motion.svg>
    </Wrapper>
  );
}
