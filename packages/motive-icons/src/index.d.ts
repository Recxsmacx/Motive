import { ReactNode, CSSProperties } from "react";

export type IconTrigger = "hover" | "click" | "auto" | "focus";

export interface AnimatedIconProps {
  /** Rendered size in pixels. Default: 24. */
  size?: number;
  /** SVG stroke width. Default: 2. */
  strokeWidth?: number;
  /** Icon color (any CSS color). Default: "currentColor". */
  color?: string;
  /** When to run the animation. Default: "hover". */
  trigger?: IconTrigger;
  /** Keep the animation looping (only meaningful for continuous animations). */
  loop?: boolean;
  /** Manually control the active state — bypasses `trigger`. */
  active?: boolean;
  /** Accessible label; if omitted, falls back to the icon's default. */
  ariaLabel?: string;
  /** Additional class name applied to the wrapper. */
  className?: string;
}

export interface IconShellProps extends AnimatedIconProps {
  label?: string;
  children?: ReactNode | ((state: { active: boolean; strokeWidth: number }) => ReactNode);
  style?: CSSProperties;
}

export declare function IconShell(props: IconShellProps): JSX.Element;
export declare function useIconTrigger(opts?: {
  trigger?: IconTrigger;
  loop?: boolean;
}): {
  active: boolean;
  handlers: Record<string, unknown>;
  activate: () => void;
  deactivate: () => void;
  pulse: (durationMs?: number) => void;
};

export declare function AnimatedBell(props: AnimatedIconProps): JSX.Element;
export declare function AnimatedHeart(props: AnimatedIconProps): JSX.Element;
export declare function AnimatedSearch(props: AnimatedIconProps): JSX.Element;
export declare function AnimatedSettings(props: AnimatedIconProps): JSX.Element;
export declare function AnimatedTrash(props: AnimatedIconProps): JSX.Element;
export declare function AnimatedDownload(props: AnimatedIconProps): JSX.Element;
export declare function AnimatedUpload(props: AnimatedIconProps): JSX.Element;
export declare function AnimatedMenu(props: AnimatedIconProps): JSX.Element;
export declare function AnimatedX(props: AnimatedIconProps): JSX.Element;
export declare function AnimatedPlus(props: AnimatedIconProps): JSX.Element;
export declare function AnimatedCheck(props: AnimatedIconProps): JSX.Element;
export declare function AnimatedArrowRight(props: AnimatedIconProps): JSX.Element;
export declare function AnimatedArrowLeft(props: AnimatedIconProps): JSX.Element;
export declare function AnimatedArrowUp(props: AnimatedIconProps): JSX.Element;
export declare function AnimatedArrowDown(props: AnimatedIconProps): JSX.Element;
export declare function AnimatedRefresh(props: AnimatedIconProps): JSX.Element;
export declare function AnimatedEye(props: AnimatedIconProps): JSX.Element;
export declare function AnimatedLock(props: AnimatedIconProps): JSX.Element;
export declare function AnimatedMail(props: AnimatedIconProps): JSX.Element;
export declare function AnimatedSend(props: AnimatedIconProps): JSX.Element;
export declare function AnimatedHome(props: AnimatedIconProps): JSX.Element;
export declare function AnimatedUser(props: AnimatedIconProps): JSX.Element;
export declare function AnimatedCalendar(props: AnimatedIconProps): JSX.Element;
export declare function AnimatedClock(props: AnimatedIconProps): JSX.Element;
export declare function AnimatedStar(props: AnimatedIconProps): JSX.Element;
export declare function AnimatedBookmark(props: AnimatedIconProps): JSX.Element;
export declare function AnimatedCopy(props: AnimatedIconProps): JSX.Element;
export declare function AnimatedExternalLink(props: AnimatedIconProps): JSX.Element;
export declare function AnimatedPlay(props: AnimatedIconProps): JSX.Element;
export declare function AnimatedPause(props: AnimatedIconProps): JSX.Element;
export declare function AnimatedVolume(props: AnimatedIconProps): JSX.Element;
export declare function AnimatedWifi(props: AnimatedIconProps): JSX.Element;
export declare function AnimatedLoader(props: AnimatedIconProps): JSX.Element;
