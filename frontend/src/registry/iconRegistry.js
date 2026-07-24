/**
 * Icon Registry — single source of truth. Powered by the real `rex-motive`
 * npm package built from /app/packages/motive-icons.
 *
 * Adding a new animated icon:
 *   1. Create the component in packages/motive-icons/src/animations/AnimatedXxx.jsx
 *   2. Export it from packages/motive-icons/src/index.js
 *   3. Add one entry below. It automatically appears in gallery, search, filters, playground.
 */
import {
  AnimatedBell,
  AnimatedHeart,
  AnimatedSearch,
  AnimatedSettings,
  AnimatedTrash,
  AnimatedDownload,
  AnimatedUpload,
  AnimatedMenu,
  AnimatedX,
  AnimatedPlus,
  AnimatedCheck,
  AnimatedArrowRight,
  AnimatedArrowLeft,
  AnimatedArrowUp,
  AnimatedArrowDown,
  AnimatedRefresh,
  AnimatedEye,
  AnimatedLock,
  AnimatedMail,
  AnimatedSend,
  AnimatedHome,
  AnimatedUser,
  AnimatedCalendar,
  AnimatedClock,
  AnimatedStar,
  AnimatedBookmark,
  AnimatedCopy,
  AnimatedExternalLink,
  AnimatedPlay,
  AnimatedPause,
  AnimatedVolume,
  AnimatedWifi,
  AnimatedLoader,
  AnimatedSun,
  AnimatedMoon,
  AnimatedGlobe,
  AnimatedZap,
  AnimatedShield,
  AnimatedSparkles,
  AnimatedShare,
  AnimatedFlame,
  AnimatedSliders,
  AnimatedCamera,
  AnimatedFilter,
  AnimatedCompass,
  AnimatedLayers,
  AnimatedTag,
  AnimatedCode,
  AnimatedTerminal,
  AnimatedDatabase,
  AnimatedCpu,
  AnimatedMaximize,
  AnimatedMinimize,
  AnimatedSmile,
  AnimatedMessageSquare,
} from "rex-motive";

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
  { name: "Sun", library: "Lucide", category: "Interface", tags: ["light", "mode", "day"], animation: "Micro-interaction", description: "Expands and rotates slightly.", component: AnimatedSun },
  { name: "Moon", library: "Lucide", category: "Interface", tags: ["dark", "mode", "night"], animation: "Micro-interaction", description: "Rocks back and forth.", component: AnimatedMoon },
  { name: "Globe", library: "Lucide", category: "Navigation", tags: ["world", "earth", "network", "browser", "global"], animation: "Morph", description: "Meridian curves revolve gracefully.", component: AnimatedGlobe, addedAt: "2026-07-23T00:00:00Z" },
  { name: "Zap", library: "Lucide", category: "Actions", tags: ["lightning", "power", "flash", "energy", "fast"], animation: "Micro-interaction", description: "Energetic flash pop with subtle golden fill.", component: AnimatedZap, addedAt: "2026-07-23T00:00:00Z" },
  { name: "Shield", library: "Lucide", category: "Interface", tags: ["security", "protect", "safe", "guard", "defense"], animation: "Draw", description: "Shield snaps firm as checkmark stroke draws.", component: AnimatedShield, addedAt: "2026-07-23T00:00:00Z" },
  { name: "Sparkles", library: "Lucide", category: "Interface", tags: ["ai", "magic", "stars", "sparkle", "clean"], animation: "Micro-interaction", description: "Central star turns as side sparkles twinkle.", component: AnimatedSparkles, addedAt: "2026-07-23T00:00:00Z" },
  { name: "Share", library: "Lucide", category: "Communication", tags: ["social", "send", "connect", "export", "link"], animation: "Directional", description: "Connecting nodes expand smoothly outward.", component: AnimatedShare, addedAt: "2026-07-23T00:00:00Z" },
  { name: "Flame", library: "Phosphor", category: "Social", tags: ["fire", "trending", "hot", "burn", "warm"], animation: "Micro-interaction", description: "Phosphor flame with dancing inner sparks and glow.", component: AnimatedFlame, addedAt: "2026-07-23T00:00:00Z" },
  { name: "Sliders", library: "Lucide", category: "Interface", tags: ["settings", "filter", "controls", "tune", "equalizer"], animation: "Directional", description: "Knobs slide along tracks with spring physics.", component: AnimatedSliders, addedAt: "2026-07-23T00:00:00Z" },
  { name: "Camera", library: "Lucide", category: "Media", tags: ["photo", "picture", "capture", "shot", "snapshot"], animation: "Micro-interaction", description: "Camera recoils as lens expands with shutter flash.", component: AnimatedCamera, addedAt: "2026-07-23T00:00:00Z" },
  { name: "Filter", library: "Lucide", category: "Interface", tags: ["funnel", "sort", "refine", "filter"], animation: "Micro-interaction", description: "Funnel tilts as liquid particles trickle down.", component: AnimatedFilter, addedAt: "2026-07-23T00:00:00Z" },
  { name: "Compass", library: "Lucide", category: "Navigation", tags: ["explore", "direction", "navigate", "location", "north"], animation: "Micro-interaction", description: "Magnetic needle swings and settles toward North.", component: AnimatedCompass, addedAt: "2026-07-23T00:00:00Z" },
  { name: "Layers", library: "Lucide", category: "Interface", tags: ["stack", "planes", "structure", "design"], animation: "Directional", description: "Stacked isometric planes lift apart with spring physics.", component: AnimatedLayers, addedAt: "2026-07-23T00:00:00Z" },
  { name: "Tag", library: "Lucide", category: "Actions", tags: ["price", "label", "category", "badge", "sale"], animation: "Micro-interaction", description: "Hanging tag swings gracefully from its attachment hole.", component: AnimatedTag, addedAt: "2026-07-23T00:00:00Z" },
  { name: "Code", library: "Lucide", category: "Development", tags: ["developer", "brackets", "syntax", "program"], animation: "Directional", description: "Code brackets spread apart dynamically.", component: AnimatedCode, addedAt: "2026-07-23T00:00:00Z" },
  { name: "Terminal", library: "Lucide", category: "Development", tags: ["console", "command", "cli", "shell", "prompt"], animation: "Draw", description: "Command prompt arrow nudges while cursor line blinks.", component: AnimatedTerminal, addedAt: "2026-07-23T00:00:00Z" },
  { name: "Database", library: "Development", category: "Development", tags: ["storage", "sql", "data", "server", "table"], animation: "Micro-interaction", description: "Storage cylinders expand with pulsing data ring transfer.", component: AnimatedDatabase, addedAt: "2026-07-23T00:00:00Z" },
  { name: "Cpu", library: "Lucide", category: "Development", tags: ["processor", "chip", "hardware", "silicon", "ai"], animation: "Micro-interaction", description: "Silicon core glows while circuit pins pulse signal.", component: AnimatedCpu, addedAt: "2026-07-23T00:00:00Z" },
  { name: "Maximize", library: "Lucide", category: "Interface", tags: ["expand", "fullscreen", "grow", "zoom"], animation: "Directional", description: "Corner arrows spring outward into full frame.", component: AnimatedMaximize, addedAt: "2026-07-23T00:00:00Z" },
  { name: "Minimize", library: "Lucide", category: "Interface", tags: ["shrink", "compress", "small", "close"], animation: "Directional", description: "Corner arrows spring inward toward center.", component: AnimatedMinimize, addedAt: "2026-07-23T00:00:00Z" },
  { name: "Smile", library: "Lucide", category: "Social", tags: ["happy", "emoji", "face", "like", "joy"], animation: "Micro-interaction", description: "Eyes blink in unison as smile curve bounces.", component: AnimatedSmile, addedAt: "2026-07-23T00:00:00Z" },
  { name: "MessageSquare", library: "Lucide", category: "Communication", tags: ["chat", "comment", "bubble", "talk", "feedback"], animation: "Micro-interaction", description: "Speech bubble pops with 3 typing indicator dots.", component: AnimatedMessageSquare, addedAt: "2026-07-23T00:00:00Z" },
];

/**
 * Checks if an icon was added within the last 7 days.
 * Automatically evaluates to false once 7 days (7 * 24 * 60 * 60 * 1000 ms) have passed.
 */
export function isIconNew(icon) {
  if (!icon || !icon.addedAt) return false;
  const addedTime = new Date(icon.addedAt).getTime();
  if (isNaN(addedTime)) return false;
  const SEVEN_DAYS_MS = 7 * 24 * 60 * 60 * 1000;
  const diff = Date.now() - addedTime;
  return diff >= 0 && diff < SEVEN_DAYS_MS;
}

export const iconBySlug = Object.fromEntries(
  iconRegistry.map((i) => [i.name.toLowerCase(), i]),
);

