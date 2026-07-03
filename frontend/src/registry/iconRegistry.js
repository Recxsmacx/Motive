/**
 * Icon Registry — single source of truth. Adding a new animated icon:
 *   1. Create the animated component in components/icons/animations/AnimatedXxx.jsx
 *   2. Import it here and add an entry to the array below.
 *   3. It automatically appears in gallery, search, filters, and playground.
 */
import AnimatedBell from "@/components/icons/animations/AnimatedBell";
import AnimatedHeart from "@/components/icons/animations/AnimatedHeart";
import AnimatedSearch from "@/components/icons/animations/AnimatedSearch";
import AnimatedSettings from "@/components/icons/animations/AnimatedSettings";
import AnimatedTrash from "@/components/icons/animations/AnimatedTrash";
import AnimatedDownload from "@/components/icons/animations/AnimatedDownload";
import AnimatedUpload from "@/components/icons/animations/AnimatedUpload";
import AnimatedMenu from "@/components/icons/animations/AnimatedMenu";
import AnimatedX from "@/components/icons/animations/AnimatedX";
import AnimatedPlus from "@/components/icons/animations/AnimatedPlus";
import AnimatedCheck from "@/components/icons/animations/AnimatedCheck";
import AnimatedArrowRight from "@/components/icons/animations/AnimatedArrowRight";
import AnimatedArrowLeft from "@/components/icons/animations/AnimatedArrowLeft";
import AnimatedArrowUp from "@/components/icons/animations/AnimatedArrowUp";
import AnimatedArrowDown from "@/components/icons/animations/AnimatedArrowDown";
import AnimatedRefresh from "@/components/icons/animations/AnimatedRefresh";
import AnimatedEye from "@/components/icons/animations/AnimatedEye";
import AnimatedLock from "@/components/icons/animations/AnimatedLock";
import AnimatedMail from "@/components/icons/animations/AnimatedMail";
import AnimatedSend from "@/components/icons/animations/AnimatedSend";
import AnimatedHome from "@/components/icons/animations/AnimatedHome";
import AnimatedUser from "@/components/icons/animations/AnimatedUser";
import AnimatedCalendar from "@/components/icons/animations/AnimatedCalendar";
import AnimatedClock from "@/components/icons/animations/AnimatedClock";
import AnimatedStar from "@/components/icons/animations/AnimatedStar";
import AnimatedBookmark from "@/components/icons/animations/AnimatedBookmark";
import AnimatedCopy from "@/components/icons/animations/AnimatedCopy";
import AnimatedExternalLink from "@/components/icons/animations/AnimatedExternalLink";
import AnimatedPlay from "@/components/icons/animations/AnimatedPlay";
import AnimatedPause from "@/components/icons/animations/AnimatedPause";
import AnimatedVolume from "@/components/icons/animations/AnimatedVolume";
import AnimatedWifi from "@/components/icons/animations/AnimatedWifi";
import AnimatedLoader from "@/components/icons/animations/AnimatedLoader";

export const CATEGORIES = [
  "Navigation",
  "Actions",
  "Communication",
  "Media",
  "Files",
  "Interface",
  "Social",
  "Commerce",
  "Development",
];

export const ANIMATION_TYPES = [
  "Hover",
  "Click",
  "Loop",
  "Draw",
  "Morph",
  "Directional",
  "Micro-interaction",
];

export const LIBRARIES = ["Lucide", "Phosphor"];

export const iconRegistry = [
  { name: "Bell", library: "Lucide", category: "Interface", tags: ["notification", "alert", "ring"], animation: "Micro-interaction", description: "Gently swings like a real bell.", component: AnimatedBell },
  { name: "Heart", library: "Lucide", category: "Social", tags: ["like", "love", "favorite"], animation: "Micro-interaction", description: "Pulses with a soft violet fill.", component: AnimatedHeart },
  { name: "Search", library: "Lucide", category: "Actions", tags: ["find", "lookup", "magnify"], animation: "Micro-interaction", description: "Lens expands and shifts subtly.", component: AnimatedSearch },
  { name: "Settings", library: "Lucide", category: "Interface", tags: ["gear", "config", "preferences"], animation: "Loop", description: "Gear rotates a full turn.", component: AnimatedSettings },
  { name: "Trash", library: "Lucide", category: "Actions", tags: ["delete", "remove", "bin"], animation: "Micro-interaction", description: "Lid tilts open then closes.", component: AnimatedTrash },
  { name: "Download", library: "Lucide", category: "Files", tags: ["save", "arrow", "get"], animation: "Directional", description: "Arrow drops down and returns.", component: AnimatedDownload },
  { name: "Upload", library: "Lucide", category: "Files", tags: ["send", "arrow", "share"], animation: "Directional", description: "Arrow rises up and returns.", component: AnimatedUpload },
  { name: "Menu", library: "Lucide", category: "Navigation", tags: ["hamburger", "list", "lines"], animation: "Morph", description: "Lines shift with staggered motion.", component: AnimatedMenu },
  { name: "X", library: "Lucide", category: "Actions", tags: ["close", "dismiss", "cancel"], animation: "Morph", description: "Rotates into place with 90° twist.", component: AnimatedX },
  { name: "Plus", library: "Lucide", category: "Actions", tags: ["add", "create", "new"], animation: "Micro-interaction", description: "Spins with a subtle overshoot.", component: AnimatedPlus },
  { name: "Check", library: "Lucide", category: "Actions", tags: ["done", "complete", "confirm"], animation: "Draw", description: "Draws itself stroke by stroke.", component: AnimatedCheck },
  { name: "ArrowRight", library: "Lucide", category: "Navigation", tags: ["next", "forward", "right"], animation: "Directional", description: "Slides right and re-enters.", component: AnimatedArrowRight },
  { name: "ArrowLeft", library: "Lucide", category: "Navigation", tags: ["back", "previous", "left"], animation: "Directional", description: "Slides left and re-enters.", component: AnimatedArrowLeft },
  { name: "ArrowUp", library: "Lucide", category: "Navigation", tags: ["top", "up", "rise"], animation: "Directional", description: "Moves up and returns.", component: AnimatedArrowUp },
  { name: "ArrowDown", library: "Lucide", category: "Navigation", tags: ["bottom", "down", "drop"], animation: "Directional", description: "Drops down and returns.", component: AnimatedArrowDown },
  { name: "Refresh", library: "Lucide", category: "Actions", tags: ["reload", "sync", "rotate"], animation: "Loop", description: "Full clockwise spin.", component: AnimatedRefresh },
  { name: "Eye", library: "Lucide", category: "Interface", tags: ["view", "visible", "look"], animation: "Morph", description: "Blinks with a quick lid close.", component: AnimatedEye },
  { name: "Lock", library: "Lucide", category: "Interface", tags: ["secure", "private", "password"], animation: "Micro-interaction", description: "Shackle tilts open and clicks shut.", component: AnimatedLock },
  { name: "Mail", library: "Lucide", category: "Communication", tags: ["email", "message", "inbox"], animation: "Micro-interaction", description: "Flap lifts subtly.", component: AnimatedMail },
  { name: "Send", library: "Lucide", category: "Communication", tags: ["paper plane", "share", "submit"], animation: "Directional", description: "Flies forward and re-emerges.", component: AnimatedSend },
  { name: "Home", library: "Lucide", category: "Navigation", tags: ["house", "main", "start"], animation: "Micro-interaction", description: "Subtle bounce with spring physics.", component: AnimatedHome },
  { name: "User", library: "Lucide", category: "Social", tags: ["person", "profile", "avatar"], animation: "Micro-interaction", description: "Head bobs slightly.", component: AnimatedUser },
  { name: "Calendar", library: "Lucide", category: "Interface", tags: ["date", "schedule", "day"], animation: "Morph", description: "Top strip flips like a page.", component: AnimatedCalendar },
  { name: "Clock", library: "Lucide", category: "Interface", tags: ["time", "hour", "watch"], animation: "Loop", description: "Hands sweep in real time.", component: AnimatedClock },
  { name: "Star", library: "Lucide", category: "Social", tags: ["favorite", "rating", "shine"], animation: "Micro-interaction", description: "Twists, fills, and sparkles.", component: AnimatedStar },
  { name: "Bookmark", library: "Lucide", category: "Actions", tags: ["save", "read later", "mark"], animation: "Micro-interaction", description: "Drops into place and fills.", component: AnimatedBookmark },
  { name: "Copy", library: "Lucide", category: "Actions", tags: ["duplicate", "clipboard"], animation: "Micro-interaction", description: "Ghost layer shifts behind.", component: AnimatedCopy },
  { name: "ExternalLink", library: "Lucide", category: "Navigation", tags: ["open", "outside", "link"], animation: "Directional", description: "Arrow exits the frame.", component: AnimatedExternalLink },
  { name: "Play", library: "Lucide", category: "Media", tags: ["start", "media", "video"], animation: "Micro-interaction", description: "Nudges forward with a fill.", component: AnimatedPlay },
  { name: "Pause", library: "Lucide", category: "Media", tags: ["stop", "media", "hold"], animation: "Micro-interaction", description: "Bars compress momentarily.", component: AnimatedPause },
  { name: "Volume", library: "Lucide", category: "Media", tags: ["sound", "audio", "waves"], animation: "Draw", description: "Waves appear in sequence.", component: AnimatedVolume },
  { name: "Wifi", library: "Phosphor", category: "Communication", tags: ["signal", "wireless", "network"], animation: "Draw", description: "Signals appear sequentially.", component: AnimatedWifi },
  { name: "Loader", library: "Phosphor", category: "Interface", tags: ["loading", "spinner", "wait"], animation: "Loop", description: "Smooth continuous rotation.", component: AnimatedLoader },
];

export const iconBySlug = Object.fromEntries(
  iconRegistry.map((i) => [i.name.toLowerCase(), i]),
);
