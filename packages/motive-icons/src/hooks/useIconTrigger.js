/**
 * useIconTrigger — normalizes trigger semantics (hover/click/auto/focus) for animated icons.
 * Returns handlers to attach to a wrapper and an `active` boolean to drive framer-motion.
 */
import { useCallback, useEffect, useRef, useState } from "react";

export function useIconTrigger({ trigger = "hover", loop = false } = {}) {
  const [active, setActive] = useState(false);
  const timeoutRef = useRef(null);

  const activate = useCallback(() => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setActive(true);
  }, []);

  const deactivate = useCallback(() => {
    if (loop) return;
    setActive(false);
  }, [loop]);

  const pulse = useCallback((durationMs = 700) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setActive(true);
    timeoutRef.current = setTimeout(() => setActive(false), durationMs);
  }, []);

  useEffect(() => {
    if (trigger === "auto" || loop) {
      setActive(true);
    }
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [trigger, loop]);

  const handlers = {};
  if (trigger === "hover") {
    handlers.onMouseEnter = activate;
    handlers.onMouseLeave = deactivate;
    handlers.onFocus = activate;
    handlers.onBlur = deactivate;
  } else if (trigger === "click") {
    handlers.onClick = () => pulse(700);
    handlers.onKeyDown = (e) => {
      if (e.key === "Enter" || e.key === " ") pulse(700);
    };
  } else if (trigger === "focus") {
    handlers.onFocus = activate;
    handlers.onBlur = deactivate;
    handlers.tabIndex = 0;
  }

  return { active, handlers, activate, deactivate, pulse };
}
