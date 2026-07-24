import { memo, useState } from "react";
import { motion } from "framer-motion";
import { TESTIDS } from "@/constants/testIds";
import { isIconNew } from "@/registry/iconRegistry";

function IconCard({ icon, onClick, index = 0 }) {
  const [hover, setHover] = useState(false);
  const Comp = icon.component;
  const isNew = isIconNew(icon);

  return (
    <motion.button
      data-testid={TESTIDS.iconCard}
      data-icon-name={icon.name}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onFocus={() => setHover(true)}
      onBlur={() => setHover(false)}
      onClick={() => onClick(icon)}
      initial={{ opacity: 0, y: 6 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, delay: Math.min(index * 0.012, 0.4) }}
      className="group relative aspect-square flex flex-col items-center justify-center gap-3 bg-background hover:bg-white/[0.03] dark:hover:bg-white/[0.03] outline-none focus-visible:ring-2 focus-visible:ring-violet-500/60 focus-visible:ring-inset transition-colors text-foreground"
      aria-label={`${icon.name} · ${icon.library}`}
    >
      {isNew && (
        <span className="absolute top-2 right-2 px-1.5 py-0.5 text-[9px] font-mono font-semibold uppercase tracking-wider rounded bg-violet-500/15 dark:bg-violet-500/20 text-violet-700 dark:text-violet-300 border border-violet-500/30 backdrop-blur-sm z-10">
          NEW
        </span>
      )}

      <div className="flex-1 flex items-center justify-center pt-3">
        <div className={hover ? "text-violet-500" : "text-foreground"} style={{ transition: "color 200ms" }}>
          <Comp size={34} strokeWidth={1.6} active={hover} />
        </div>
      </div>
      <div className="w-full px-3 pb-3">
        <div className="text-[11px] font-medium text-foreground truncate text-center">
          {icon.name}
        </div>
        <div className="mt-0.5 flex items-center justify-center gap-1.5">
          <span className="text-[9px] font-mono uppercase tracking-widest text-muted-foreground">
            {icon.library}
          </span>
          <span className={`w-1 h-1 rounded-full ${hover ? "bg-violet-500" : "bg-muted-foreground/40"}`} />
        </div>
      </div>
    </motion.button>
  );
}

export default memo(IconCard);
