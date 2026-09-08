import { ReactNode, CSSProperties } from "react";

export type IconTrigger = "hover" | "click" | "auto" | "focus";

export interface AnimatedIconProps {
  /** Rendered size in pixels. Default: 24. */
  size?: number;
  /** SVG stroke width. Default: 0.8. */
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

// Core suite declarations
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
export declare function AnimatedSun(props: AnimatedIconProps): JSX.Element;
export declare function AnimatedMoon(props: AnimatedIconProps): JSX.Element;
export declare function AnimatedGlobe(props: AnimatedIconProps): JSX.Element;
export declare function AnimatedZap(props: AnimatedIconProps): JSX.Element;
export declare function AnimatedShield(props: AnimatedIconProps): JSX.Element;
export declare function AnimatedSparkles(props: AnimatedIconProps): JSX.Element;
export declare function AnimatedShare(props: AnimatedIconProps): JSX.Element;
export declare function AnimatedFlame(props: AnimatedIconProps): JSX.Element;
export declare function AnimatedSliders(props: AnimatedIconProps): JSX.Element;
export declare function AnimatedCamera(props: AnimatedIconProps): JSX.Element;
export declare function AnimatedFilter(props: AnimatedIconProps): JSX.Element;
export declare function AnimatedCompass(props: AnimatedIconProps): JSX.Element;
export declare function AnimatedLayers(props: AnimatedIconProps): JSX.Element;
export declare function AnimatedTag(props: AnimatedIconProps): JSX.Element;
export declare function AnimatedCode(props: AnimatedIconProps): JSX.Element;
export declare function AnimatedTerminal(props: AnimatedIconProps): JSX.Element;
export declare function AnimatedDatabase(props: AnimatedIconProps): JSX.Element;
export declare function AnimatedCpu(props: AnimatedIconProps): JSX.Element;
export declare function AnimatedMaximize(props: AnimatedIconProps): JSX.Element;
export declare function AnimatedMinimize(props: AnimatedIconProps): JSX.Element;
export declare function AnimatedSmile(props: AnimatedIconProps): JSX.Element;
export declare function AnimatedMessageSquare(props: AnimatedIconProps): JSX.Element;

// 60-Icon Expansion Suite Declarations
export declare function AnimatedFolder(props: AnimatedIconProps): JSX.Element;
export declare function AnimatedFolderOpen(props: AnimatedIconProps): JSX.Element;
export declare function AnimatedFile(props: AnimatedIconProps): JSX.Element;
export declare function AnimatedFilePlus(props: AnimatedIconProps): JSX.Element;
export declare function AnimatedFileCode(props: AnimatedIconProps): JSX.Element;
export declare function AnimatedFolderGit(props: AnimatedIconProps): JSX.Element;
export declare function AnimatedImage(props: AnimatedIconProps): JSX.Element;
export declare function AnimatedVideo(props: AnimatedIconProps): JSX.Element;
export declare function AnimatedMusic(props: AnimatedIconProps): JSX.Element;
export declare function AnimatedMic(props: AnimatedIconProps): JSX.Element;
export declare function AnimatedMicOff(props: AnimatedIconProps): JSX.Element;
export declare function AnimatedPhone(props: AnimatedIconProps): JSX.Element;
export declare function AnimatedPhoneCall(props: AnimatedIconProps): JSX.Element;
export declare function AnimatedBluetooth(props: AnimatedIconProps): JSX.Element;
export declare function AnimatedBattery(props: AnimatedIconProps): JSX.Element;
export declare function AnimatedCloud(props: AnimatedIconProps): JSX.Element;
export declare function AnimatedCloudUpload(props: AnimatedIconProps): JSX.Element;
export declare function AnimatedCloudDownload(props: AnimatedIconProps): JSX.Element;
export declare function AnimatedRocket(props: AnimatedIconProps): JSX.Element;
export declare function AnimatedRobot(props: AnimatedIconProps): JSX.Element;
export declare function AnimatedBrain(props: AnimatedIconProps): JSX.Element;
export declare function AnimatedMagicWand(props: AnimatedIconProps): JSX.Element;
export declare function AnimatedPencil(props: AnimatedIconProps): JSX.Element;
export declare function AnimatedPenTool(props: AnimatedIconProps): JSX.Element;
export declare function AnimatedPaintBucket(props: AnimatedIconProps): JSX.Element;
export declare function AnimatedCrop(props: AnimatedIconProps): JSX.Element;
export declare function AnimatedScissors(props: AnimatedIconProps): JSX.Element;
export declare function AnimatedGrid(props: AnimatedIconProps): JSX.Element;
export declare function AnimatedLayout(props: AnimatedIconProps): JSX.Element;
export declare function AnimatedSidebar(props: AnimatedIconProps): JSX.Element;
export declare function AnimatedPanelLeft(props: AnimatedIconProps): JSX.Element;
export declare function AnimatedPanelRight(props: AnimatedIconProps): JSX.Element;
export declare function AnimatedKanban(props: AnimatedIconProps): JSX.Element;
export declare function AnimatedChartBar(props: AnimatedIconProps): JSX.Element;
export declare function AnimatedChartLine(props: AnimatedIconProps): JSX.Element;
export declare function AnimatedPieChart(props: AnimatedIconProps): JSX.Element;
export declare function AnimatedTrendingUp(props: AnimatedIconProps): JSX.Element;
export declare function AnimatedWallet(props: AnimatedIconProps): JSX.Element;
export declare function AnimatedCreditCard(props: AnimatedIconProps): JSX.Element;
export declare function AnimatedShoppingBag(props: AnimatedIconProps): JSX.Element;
export declare function AnimatedCart(props: AnimatedIconProps): JSX.Element;
export declare function AnimatedGift(props: AnimatedIconProps): JSX.Element;
export declare function AnimatedTrophy(props: AnimatedIconProps): JSX.Element;
export declare function AnimatedMedal(props: AnimatedIconProps): JSX.Element;
export declare function AnimatedCrown(props: AnimatedIconProps): JSX.Element;
export declare function AnimatedTarget(props: AnimatedIconProps): JSX.Element;
export declare function AnimatedFlag(props: AnimatedIconProps): JSX.Element;
export declare function AnimatedMapPin(props: AnimatedIconProps): JSX.Element;
export declare function AnimatedNavigation(props: AnimatedIconProps): JSX.Element;
export declare function AnimatedKey(props: AnimatedIconProps): JSX.Element;
export declare function AnimatedFingerprint(props: AnimatedIconProps): JSX.Element;
export declare function AnimatedQRCode(props: AnimatedIconProps): JSX.Element;
export declare function AnimatedScan(props: AnimatedIconProps): JSX.Element;
export declare function AnimatedArchive(props: AnimatedIconProps): JSX.Element;
export declare function AnimatedInbox(props: AnimatedIconProps): JSX.Element;
export declare function AnimatedOutbox(props: AnimatedIconProps): JSX.Element;
export declare function AnimatedBellRing(props: AnimatedIconProps): JSX.Element;
export declare function AnimatedBellOff(props: AnimatedIconProps): JSX.Element;
export declare function AnimatedBookmarkCheck(props: AnimatedIconProps): JSX.Element;
