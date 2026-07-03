import { useState } from "react";
import { Copy, Check } from "lucide-react";
import { toast } from "sonner";

/**
 * Minimal syntax-highlighted-looking code block with copy button. Uses simple regex
 * tokenization for JSX/TS keywords — no heavy runtime deps.
 */
function tokenize(code) {
  // Simple highlight: keywords, strings, jsx tags, comments, numbers
  const out = [];
  const regex = /(\/\/[^\n]*|\/\*[\s\S]*?\*\/)|("(?:[^"\\]|\\.)*"|'(?:[^'\\]|\\.)*'|`(?:[^`\\]|\\.)*`)|\b(import|from|export|default|const|let|var|function|return|if|else|true|false|null|undefined|as|type|interface|new)\b|(<\/?[A-Z][A-Za-z0-9]*)|(\{|\})|(\b\d+(?:\.\d+)?\b)/g;
  let last = 0;
  let m;
  while ((m = regex.exec(code)) !== null) {
    if (m.index > last) out.push({ t: "txt", v: code.slice(last, m.index) });
    if (m[1]) out.push({ t: "com", v: m[0] });
    else if (m[2]) out.push({ t: "str", v: m[0] });
    else if (m[3]) out.push({ t: "kw", v: m[0] });
    else if (m[4]) out.push({ t: "tag", v: m[0] });
    else if (m[5]) out.push({ t: "punc", v: m[0] });
    else if (m[6]) out.push({ t: "num", v: m[0] });
    last = m.index + m[0].length;
  }
  if (last < code.length) out.push({ t: "txt", v: code.slice(last) });
  return out;
}

const CLASS_MAP = {
  txt: "text-zinc-300",
  com: "text-zinc-500 italic",
  str: "text-emerald-400",
  kw: "text-violet-400",
  tag: "text-sky-400",
  punc: "text-zinc-400",
  num: "text-orange-300",
};

export default function CodeBlock({ code, language = "tsx", copyLabel = "Copy", testId, className = "" }) {
  const [copied, setCopied] = useState(false);
  const handleCopy = async () => {
    const showSuccess = () => {
      setCopied(true);
      toast.success("Copied to clipboard");
      setTimeout(() => setCopied(false), 1600);
    };
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(code);
        showSuccess();
        return;
      }
      throw new Error("clipboard unavailable");
    } catch {
      // Fallback: hidden textarea + execCommand("copy") — works in iframes/insecure contexts.
      try {
        const ta = document.createElement("textarea");
        ta.value = code;
        ta.setAttribute("readonly", "");
        ta.style.position = "fixed";
        ta.style.top = "0";
        ta.style.left = "0";
        ta.style.opacity = "0";
        document.body.appendChild(ta);
        ta.select();
        const ok = document.execCommand("copy");
        document.body.removeChild(ta);
        if (ok) {
          showSuccess();
        } else {
          toast.error("Copy failed");
        }
      } catch {
        toast.error("Copy failed");
      }
    }
  };

  const tokens = tokenize(code);

  return (
    <div className={`relative group rounded-lg border border-border bg-[#0d0d12] overflow-hidden ${className}`}>
      <div className="flex items-center justify-between px-3 py-2 border-b border-border/60 bg-white/[0.02]">
        <div className="flex items-center gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
          <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
          <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
          <span className="ml-2 text-[10px] font-mono uppercase tracking-widest text-muted-foreground">
            {language}
          </span>
        </div>
        <button
          data-testid={testId}
          onClick={handleCopy}
          className="inline-flex items-center gap-1.5 text-xs px-2 py-1 rounded border border-border text-muted-foreground hover:text-foreground hover:border-white/20 transition-colors"
        >
          {copied ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
          {copied ? "Copied" : copyLabel}
        </button>
      </div>
      <pre className="p-4 text-[13px] leading-relaxed font-mono overflow-x-auto custom-scroll">
        <code>
          {tokens.map((t, i) => (
            <span key={i} className={CLASS_MAP[t.t]}>{t.v}</span>
          ))}
        </code>
      </pre>
    </div>
  );
}
