import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Github, Sun, Moon, Search as SearchIcon, Menu as MenuIcon, X as XIcon, Coffee } from "lucide-react";
import { useTheme } from "@/context/ThemeContext";
import { TESTIDS } from "@/constants/testIds";
import AnimatedLoader from "@/components/icons/animations/AnimatedLoader";

const NAV_ITEMS = [
  { to: "/icons", label: "Icons", tid: TESTIDS.navLinkIcons },
  { to: "/docs", label: "Documentation", tid: TESTIDS.navLinkDocs },
  { to: "/playground", label: "Playground", tid: TESTIDS.navLinkPlayground },
];

export default function Navbar({ onSearchClick }) {
  const { theme, toggle } = useTheme();
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header
      data-testid={TESTIDS.navRoot}
      className="fixed top-0 inset-x-0 z-50 border-b border-white/[0.06] dark:border-white/[0.06] bg-background/70 backdrop-blur-xl"
      style={{ WebkitBackdropFilter: "blur(20px)" }}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        <div className="flex h-16 items-center justify-between gap-6">
          {/* Logo */}
          <Link to="/" data-testid={TESTIDS.navLogo} className="flex items-center gap-2.5 group">
            <div className="w-7 h-7 rounded-md bg-gradient-to-br from-violet-500 to-violet-700 flex items-center justify-center shadow-[0_0_18px_rgba(139,92,246,0.35)]">
              <div className="w-3 h-3 rounded-sm bg-background/90 rotate-45" />
            </div>
            <span className="font-semibold tracking-tight text-[15px]">Motive</span>
            <span className="hidden sm:inline text-[10px] font-mono text-muted-foreground border border-border rounded px-1.5 py-0.5 ml-1">
              v0.1
            </span>
          </Link>

          {/* Center nav */}
          <nav className="hidden md:flex items-center gap-1">
            {NAV_ITEMS.map((item) => {
              const active = location.pathname === item.to;
              return (
                <Link
                  key={item.to}
                  to={item.to}
                  data-testid={item.tid}
                  className={`relative px-3 py-2 text-sm rounded-md transition-colors ${
                    active ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {item.label}
                  {active && (
                    <motion.span
                      layoutId="nav-active"
                      className="absolute inset-0 rounded-md bg-white/[0.05] dark:bg-white/[0.05] -z-10"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right actions */}
          <div className="flex items-center gap-1.5">
            <button
              data-testid={TESTIDS.navSearchBtn}
              onClick={onSearchClick}
              aria-label="Search icons"
              className="hidden sm:inline-flex items-center gap-2 h-9 px-3 rounded-md border border-border text-xs text-muted-foreground hover:text-foreground hover:border-border/80 transition-colors"
            >
              <SearchIcon className="w-3.5 h-3.5" />
              <span>Search…</span>
              <span className="font-mono text-[10px] px-1.5 py-0.5 rounded bg-white/[0.06] dark:bg-white/[0.06] border border-white/[0.06]">
                ⌘K
              </span>
            </button>

            <button
              data-testid={TESTIDS.navThemeToggle}
              onClick={toggle}
              aria-label="Toggle theme"
              className="w-9 h-9 inline-flex items-center justify-center rounded-md border border-border text-muted-foreground hover:text-foreground transition-colors"
            >
              {theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>

            <a
              data-testid="nav-sponsor-btn"
              href="/#sponsors"
              className="hidden lg:inline-flex items-center gap-1.5 h-9 px-3 rounded-md border border-amber-400/30 bg-amber-400/10 hover:bg-amber-400/20 text-amber-300 text-xs font-medium transition-colors"
              aria-label="Sponsor the project"
            >
              <Coffee className="w-3.5 h-3.5" />
              Sponsor
            </a>

            <a
              data-testid={TESTIDS.navGithubBtn}
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
              className="hidden sm:inline-flex items-center gap-2 h-9 px-3 rounded-md bg-white/[0.06] dark:bg-white/[0.06] hover:bg-white/[0.1] border border-border text-sm text-foreground transition-colors"
            >
              <Github className="w-4 h-4" />
              <span>GitHub</span>
              <span className="font-mono text-[10px] text-muted-foreground">★</span>
            </a>

            <button
              data-testid={TESTIDS.navMobileToggle}
              onClick={() => setMobileOpen((v) => !v)}
              className="md:hidden w-9 h-9 inline-flex items-center justify-center rounded-md border border-border"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <XIcon className="w-4 h-4" /> : <MenuIcon className="w-4 h-4" />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden overflow-hidden border-t border-border"
          >
            <div className="px-5 py-4 flex flex-col gap-1">
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  onClick={() => setMobileOpen(false)}
                  className="px-3 py-2.5 rounded-md text-sm text-muted-foreground hover:text-foreground hover:bg-white/[0.04]"
                >
                  {item.label}
                </Link>
              ))}
              <a
                href="https://github.com/"
                target="_blank"
                rel="noreferrer"
                className="px-3 py-2.5 rounded-md text-sm flex items-center gap-2"
              >
                <Github className="w-4 h-4" /> GitHub
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
