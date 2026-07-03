import { useMemo, useState } from "react";
import { RotateCcw } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CodeBlock from "@/components/shared/CodeBlock";
import { Slider } from "@/components/ui/slider";
import { iconRegistry } from "@/registry/iconRegistry";
import { TESTIDS } from "@/constants/testIds";

const TRIGGERS = ["hover", "click", "auto", "focus"];

export default function Playground() {
  const [iconName, setIconName] = useState("Bell");
  const [trigger, setTrigger] = useState("hover");
  const [size, setSize] = useState(96);
  const [stroke, setStroke] = useState(1.75);
  const [duration, setDuration] = useState(1);
  const [delay, setDelay] = useState(0);
  const [key, setKey] = useState(0);

  const icon = useMemo(
    () => iconRegistry.find((i) => i.name === iconName) || iconRegistry[0],
    [iconName],
  );
  const Comp = icon.component;

  const code = useMemo(() => {
    return `import { Animated${icon.name} } from "motive-icons";

export default function Demo() {
  return (
    <Animated${icon.name}
      size={${size}}
      strokeWidth={${stroke.toFixed(2)}}
      trigger="${trigger}"
      style={{
        animationDuration: "${duration.toFixed(2)}s",
        animationDelay: "${delay.toFixed(2)}s",
      }}
    />
  );
}`;
  }, [icon, size, stroke, trigger, duration, delay]);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar onSearchClick={() => {}} />

      <section className="pt-32 pb-8 border-b border-border">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
          <div className="text-[10px] font-mono uppercase tracking-[0.18em] text-muted-foreground">
            / Playground
          </div>
          <h1 className="mt-3 text-4xl sm:text-5xl font-semibold tracking-tightest">
            Prototype in real time.
          </h1>
          <p className="mt-3 text-muted-foreground max-w-xl">
            Pick an icon. Adjust the props. Copy the code. Ship it.
          </p>
        </div>
      </section>

      <section className="py-10">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-[320px_1fr] gap-8">
            {/* Controls */}
            <aside className="space-y-6 lg:sticky lg:top-24 self-start">
              <div>
                <Label>Icon</Label>
                <div
                  data-testid={TESTIDS.pgIconSelect}
                  className="mt-2 max-h-64 overflow-y-auto custom-scroll rounded-lg border border-border bg-[#0d0d12] p-1"
                >
                  <div className="grid grid-cols-2 gap-1">
                    {iconRegistry.map((i) => (
                      <button
                        key={i.name}
                        data-testid={`pg-icon-${i.name}`}
                        onClick={() => {
                          setIconName(i.name);
                          setKey((k) => k + 1);
                        }}
                        className={`text-left px-2.5 py-1.5 rounded text-xs transition-colors ${
                          i.name === iconName
                            ? "bg-violet-500/20 text-violet-200"
                            : "text-muted-foreground hover:text-foreground hover:bg-white/[0.04]"
                        }`}
                      >
                        {i.name}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <div>
                <Label>Trigger</Label>
                <div
                  data-testid={TESTIDS.pgTriggerSelect}
                  className="mt-2 grid grid-cols-4 gap-1.5"
                >
                  {TRIGGERS.map((t) => (
                    <button
                      key={t}
                      data-testid={`pg-trigger-${t}`}
                      onClick={() => {
                        setTrigger(t);
                        setKey((k) => k + 1);
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
                  data-testid={TESTIDS.pgSize}
                  min={16}
                  max={200}
                  step={2}
                  value={[size]}
                  onValueChange={(v) => setSize(v[0])}
                />
              </ControlRow>

              <ControlRow label="Stroke width" value={stroke.toFixed(2)}>
                <Slider
                  data-testid={TESTIDS.pgStroke}
                  min={0.5}
                  max={3}
                  step={0.05}
                  value={[stroke]}
                  onValueChange={(v) => setStroke(v[0])}
                />
              </ControlRow>

              <ControlRow label="Duration" value={`${duration.toFixed(2)}s`}>
                <Slider
                  data-testid={TESTIDS.pgDuration}
                  min={0.1}
                  max={3}
                  step={0.05}
                  value={[duration]}
                  onValueChange={(v) => setDuration(v[0])}
                />
              </ControlRow>

              <ControlRow label="Delay" value={`${delay.toFixed(2)}s`}>
                <Slider
                  data-testid={TESTIDS.pgDelay}
                  min={0}
                  max={2}
                  step={0.05}
                  value={[delay]}
                  onValueChange={(v) => setDelay(v[0])}
                />
              </ControlRow>

              <button
                data-testid={TESTIDS.pgReplay}
                onClick={() => setKey((k) => k + 1)}
                className="inline-flex items-center gap-2 h-10 px-4 rounded-md border border-border hover:border-white/20 text-sm w-full justify-center"
              >
                <RotateCcw className="w-3.5 h-3.5" /> Replay animation
              </button>
            </aside>

            {/* Preview + code */}
            <div className="space-y-6">
              <div
                data-testid={TESTIDS.pgPreview}
                className="rounded-xl border border-border bg-[#0d0d12] relative overflow-hidden aspect-[16/10] md:aspect-[16/8] flex items-center justify-center"
              >
                <div className="absolute inset-0 bg-grid bg-grid-fade opacity-60 pointer-events-none" />
                <div className="text-violet-400">
                  <Comp
                    key={key}
                    size={size}
                    strokeWidth={stroke}
                    trigger={trigger}
                  />
                </div>
                <div className="absolute top-4 left-4 text-[10px] font-mono uppercase tracking-widest text-muted-foreground">
                  {icon.library} · {icon.animation}
                </div>
                <div className="absolute top-4 right-4 text-sm font-semibold">
                  {icon.name}
                </div>
              </div>

              <div data-testid={TESTIDS.pgCode}>
                <CodeBlock
                  code={code}
                  language="tsx"
                  testId={TESTIDS.pgCopy}
                  copyLabel="Copy code"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
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
