import { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, RotateCcw } from "lucide-react";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import CodeBlock from "@/components/shared/CodeBlock";
import { TESTIDS } from "@/constants/testIds";

const TRIGGERS = ["Hover", "Click", "Auto", "Focus"];
const BGS = [
  { key: "grid", label: "Grid" },
  { key: "dark", label: "Dark" },
  { key: "light", label: "Light" },
];

function buildCode({ name, trigger, size, stroke, loop }) {
  const importLine = `import { Animated${name} } from "rex-motive";`;
  const usage = `<Animated${name}\n  size={${size}}\n  strokeWidth={${stroke}}\n  trigger="${trigger.toLowerCase()}"${loop ? "\n  loop" : ""}\n/>`;
  return `${importLine}\n\nexport default function Demo() {\n  return (\n    ${usage.replace(/\n/g, "\n    ")}\n  );\n}`;
}

export default function IconDetailModal({ icon, open, onOpenChange }) {
  const [trigger, setTrigger] = useState("Hover");
  const [size, setSize] = useState(64);
  const [stroke, setStroke] = useState(1.75);
  const [speed, setSpeed] = useState(1);
  const [loop, setLoop] = useState(false);
  const [bg, setBg] = useState("grid");
  const [replayKey, setReplayKey] = useState(0);

  useEffect(() => {
    if (open) {
      setTrigger("Hover");
      setSize(64);
      setStroke(1.75);
      setSpeed(1);
      setLoop(false);
      setBg("grid");
      setReplayKey((k) => k + 1);
    }
  }, [open, icon]);

  const code = useMemo(
    () => (icon ? buildCode({ name: icon.name, trigger, size, stroke, loop }) : ""),
    [icon, trigger, size, stroke, loop],
  );

  if (!icon) return null;
  const Comp = icon.component;

  const bgClass =
    bg === "dark"
      ? "bg-[#0a0a0f]"
      : bg === "light"
      ? "bg-white text-zinc-900"
      : "bg-background bg-grid bg-grid-fade";

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        data-testid={TESTIDS.iconModal}
        className="max-w-4xl p-0 border-border bg-[#0f0f12] overflow-hidden [&>button]:hidden"
      >
        <DialogTitle className="sr-only">{icon.name} — animated icon details</DialogTitle>
        <DialogDescription className="sr-only">
          {icon.description} Interactive preview with size, stroke width, speed, loop and background controls, plus copy-able code.
        </DialogDescription>
        <div className="grid grid-cols-1 md:grid-cols-[1.1fr_1fr]">
          {/* Preview */}
          <div className="relative border-b md:border-b-0 md:border-r border-border">
            <div className={`relative aspect-square md:aspect-auto md:h-full flex items-center justify-center ${bgClass}`}>
              <div
                data-testid={TESTIDS.modalPreview}
                className={bg === "light" ? "text-violet-600" : "text-violet-400"}
              >
                <Comp
                  key={replayKey}
                  size={size}
                  strokeWidth={stroke}
                  trigger={trigger.toLowerCase()}
                  loop={loop}
                />
              </div>
              <button
                data-testid={TESTIDS.modalReplay}
                onClick={() => setReplayKey((k) => k + 1)}
                className="absolute bottom-3 left-3 h-8 px-2.5 inline-flex items-center gap-1.5 rounded-md border border-border bg-background/70 backdrop-blur text-xs text-muted-foreground hover:text-foreground"
              >
                <RotateCcw className="w-3 h-3" /> Replay
              </button>
              <div data-testid={TESTIDS.modalBgSwitch} className="absolute top-3 right-3 flex items-center gap-1">
                {BGS.map((b) => (
                  <button
                    key={b.key}
                    data-testid={`${TESTIDS.modalBgSwitch}-${b.key}`}
                    onClick={() => setBg(b.key)}
                    className={`h-7 px-2 text-[10px] font-mono uppercase tracking-widest rounded border transition-colors ${
                      bg === b.key
                        ? "bg-violet-500/20 text-violet-300 border-violet-500/40"
                        : "border-border text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {b.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Controls */}
          <div className="p-6 space-y-6 max-h-[80vh] overflow-y-auto custom-scroll">
            <div className="flex items-start justify-between">
              <div>
                <div className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground">
                  {icon.library} · {icon.animation}
                </div>
                <h2 className="mt-1 text-2xl font-semibold tracking-tight">{icon.name}</h2>
                <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed max-w-sm">
                  {icon.description}
                </p>
              </div>
              <button
                data-testid={TESTIDS.modalClose}
                onClick={() => onOpenChange(false)}
                className="w-8 h-8 inline-flex items-center justify-center rounded-md border border-border text-muted-foreground hover:text-foreground"
                aria-label="Close"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Trigger */}
            <div>
              <Label>Trigger</Label>
              <div data-testid={TESTIDS.modalTrigger} className="mt-2 grid grid-cols-4 gap-1.5">
                {TRIGGERS.map((t) => (
                  <button
                    key={t}
                    data-testid={`${TESTIDS.modalTrigger}-${t.toLowerCase()}`}
                    onClick={() => {
                      setTrigger(t);
                      setReplayKey((k) => k + 1);
                    }}
                    className={`h-9 rounded-md border text-xs transition-colors ${
                      trigger === t
                        ? "bg-violet-500/15 border-violet-500/40 text-violet-300"
                        : "border-border text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>

            <ControlRow label="Size" value={`${size}px`}>
              <Slider
                data-testid={TESTIDS.modalSizeSlider}
                min={16}
                max={128}
                step={2}
                value={[size]}
                onValueChange={(v) => setSize(v[0])}
              />
            </ControlRow>

            <ControlRow label="Stroke width" value={stroke.toFixed(2)}>
              <Slider
                data-testid={TESTIDS.modalStrokeSlider}
                min={0.5}
                max={3}
                step={0.05}
                value={[stroke]}
                onValueChange={(v) => setStroke(v[0])}
              />
            </ControlRow>

            <ControlRow label="Speed" value={`${speed.toFixed(2)}x`}>
              <Slider
                data-testid={TESTIDS.modalSpeedSlider}
                min={0.25}
                max={2}
                step={0.05}
                value={[speed]}
                onValueChange={(v) => setSpeed(v[0])}
              />
            </ControlRow>

            <div className="flex items-center justify-between">
              <Label>Loop</Label>
              <Switch
                data-testid={TESTIDS.modalLoopToggle}
                checked={loop}
                onCheckedChange={setLoop}
              />
            </div>

            <CodeBlock
              code={code}
              language="tsx"
              testId={TESTIDS.modalCodeCopy}
              copyLabel="Copy code"
            />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

function Label({ children }) {
  return (
    <div className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground">
      {children}
    </div>
  );
}

function ControlRow({ label, value, children }) {
  return (
    <div>
      <div className="flex items-center justify-between mb-2">
        <Label>{label}</Label>
        <span className="text-[11px] font-mono text-muted-foreground">{value}</span>
      </div>
      {children}
    </div>
  );
}
