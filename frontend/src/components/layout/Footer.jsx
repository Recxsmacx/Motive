import { Link } from "react-router-dom";
import { Github, Coffee } from "lucide-react";
import AnimatedHeart from "@/components/icons/animations/AnimatedHeart";
import { TESTIDS } from "@/constants/testIds";

export default function Footer() {
  return (
    <footer data-testid={TESTIDS.footerRoot} className="border-t border-border mt-24">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 py-14">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          <div className="col-span-2">
            <div className="flex items-center gap-2.5">
              <div className="w-7 h-7 rounded-md bg-gradient-to-br from-violet-500 to-violet-700 flex items-center justify-center">
                <div className="w-3 h-3 rounded-sm bg-background rotate-45" />
              </div>
              <span className="font-semibold tracking-tight">Motive</span>
            </div>
            <p className="mt-4 text-sm text-muted-foreground max-w-sm leading-relaxed">
              A collection of beautifully animated Lucide and Phosphor icons.
              Open source, customizable, and built for modern interfaces.
            </p>
            <div className="mt-5 inline-flex items-center gap-2 text-xs text-muted-foreground font-mono">
              <span>Made with</span>
              <AnimatedHeart size={16} trigger="auto" loop />
              <span>for the community</span>
            </div>
          </div>

          <div>
            <div className="text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground mb-4">
              Product
            </div>
            <ul className="space-y-2.5 text-sm">
              <li><Link to="/icons" className="text-muted-foreground hover:text-foreground transition-colors">Icons</Link></li>
              <li><Link to="/playground" className="text-muted-foreground hover:text-foreground transition-colors">Playground</Link></li>
              <li><Link to="/docs" className="text-muted-foreground hover:text-foreground transition-colors">Documentation</Link></li>
            </ul>
          </div>

          <div>
            <div className="text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground mb-4">
              Open source
            </div>
            <ul className="space-y-2.5 text-sm">
              <li><a href="https://github.com/" className="text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-1.5"><Github className="w-3.5 h-3.5" /> GitHub</a></li>
              <li><a href="https://github.com/" className="text-muted-foreground hover:text-foreground transition-colors">Contributing</a></li>
              <li><a href="/#sponsors" className="text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-1.5"><Coffee className="w-3.5 h-3.5" /> Sponsor</a></li>
              <li><a href="https://github.com/" className="text-muted-foreground hover:text-foreground transition-colors">MIT License</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-6 border-t border-border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-muted-foreground">
          <span>© {new Date().getFullYear()} Motive · Open source under the MIT license</span>
          <span className="font-mono">v0.1.0</span>
        </div>
      </div>
    </footer>
  );
}
