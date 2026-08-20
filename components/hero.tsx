import { DownloadButtons } from "@/components/download-buttons";
import { BracesIcon, CopyIcon, SearchIcon, ScissorsIcon } from "@/components/icons";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 mx-auto h-[420px] max-w-[1000px] bg-[radial-gradient(ellipse_60%_60%_at_50%_0%,rgba(111,123,255,0.16),transparent)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,transparent_70%,#0a0a0c)]"
      />

      <div className="relative mx-auto flex w-full max-w-[1120px] flex-col items-center px-6 pb-10 pt-16 text-center sm:pt-24">
        <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-[12.5px] font-medium text-zinc-300">
          <span className="relative flex size-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
            <span className="relative inline-flex size-1.5 rounded-full bg-emerald-400" />
          </span>
          Free Beta
        </span>

        <h1 className="mt-6 max-w-3xl text-balance text-4xl font-semibold leading-[1.08] tracking-tight text-zinc-100 sm:text-6xl">
          Your clipboard,{" "}
          <span className="bg-gradient-to-b from-zinc-100 to-zinc-500 bg-clip-text text-transparent">
            built for developers.
          </span>
        </h1>

        <p className="mt-5 max-w-xl text-pretty text-base leading-7 text-zinc-400 sm:text-lg">
          Format JSON, decode JWTs, parse URLs, transform text, save notes, and
          search your clipboard history — without sending your data to the
          cloud.
        </p>

        <div className="mt-8">
          <DownloadButtons size="lg" align="center" />
        </div>

        <p className="mt-5 text-[13px] text-zinc-500">
          Free Beta{" "}
          <span className="mx-2 text-zinc-700">·</span> Local-first{" "}
          <span className="mx-2 text-zinc-700">·</span> No account required
        </p>

        <HeroWindow />
      </div>
    </section>
  );
}

function HeroWindow() {
  const history = [
    { icon: BracesIcon, label: "JSON", time: "just now", active: true },
    { icon: CopyIcon, label: "JWT", time: "2 min ago", active: false },
    { icon: CopyIcon, label: "URL", time: "3 min ago", active: false },
    { icon: ScissorsIcon, label: "Base64", time: "5 min ago", active: false },
    { icon: SearchIcon, label: "Timestamp", time: "8 min ago", active: false },
  ];

  const actions = ["Visualize", "Format", "Minify", "Search", "Copy"];

  return (
    <div className="mt-16 w-full max-w-[720px] text-left">
      <div className="overflow-hidden rounded-xl border border-white/10 bg-[#0e0e12] shadow-[0_32px_80px_-32px_rgba(0,0,0,0.9)]">
        <div className="flex items-center gap-2 border-b border-white/[0.06] bg-white/[0.02] px-4 py-2.5">
          <span className="flex gap-1.5">
            <span className="size-2.5 rounded-full bg-[#ff5f57]" />
            <span className="size-2.5 rounded-full bg-[#febc2e]" />
            <span className="size-2.5 rounded-full bg-[#28c840]" />
          </span>
          <span className="ml-2 font-mono text-[12px] text-zinc-500">
            ClipNote
          </span>
          <span className="ml-auto rounded border border-white/[0.07] bg-white/[0.03] px-2 py-0.5 font-mono text-[11px] text-zinc-500">
            ⌘ ⇧ V
          </span>
        </div>

        <div className="grid sm:grid-cols-[220px_1fr]">
          <div className="border-b border-white/[0.06] sm:border-b-0 sm:border-r">
            <div className="flex items-center justify-between border-b border-white/[0.06] px-4 py-2.5">
              <span className="text-[11px] font-medium uppercase tracking-wider text-zinc-500">
                History
              </span>
              <span className="rounded bg-white/[0.05] px-1.5 py-0.5 font-mono text-[10px] text-zinc-500">
                5
              </span>
            </div>
            <ul>
              {history.map((h) => {
                const Icon = h.icon;
                return (
                  <li
                    key={h.label}
                    className={`flex items-center gap-2.5 border-b border-white/[0.04] px-4 py-2.5 text-[13px] ${
                      h.active
                        ? "bg-[#6f7bff]/[0.08]"
                        : "text-zinc-500"
                    }`}
                  >
                    <Icon
                      className={`size-4 ${h.active ? "text-[#a5b0ff]" : "text-zinc-600"}`}
                    />
                    <span
                      className={`font-mono ${h.active ? "text-zinc-100" : ""}`}
                    >
                      {h.label}
                    </span>
                    <span className="ml-auto font-mono text-[11px] text-zinc-600">
                      {h.time}
                    </span>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="px-5 py-5">
            <div className="flex items-center justify-between gap-3">
              <span className="font-mono text-[12px] text-zinc-500">
                just now
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-400/20 bg-emerald-400/[0.08] px-2.5 py-1 text-[11px] font-medium text-emerald-300">
                <span className="size-1.5 rounded-full bg-emerald-400" />
                JSON detected
              </span>
            </div>

            <pre className="mt-3 overflow-hidden rounded-lg border border-white/[0.06] bg-black/40 p-4 font-mono text-[12.5px] leading-6 text-zinc-300">
              <span className="text-zinc-500">{"{ "}</span>
              <span className="text-[#7db4ff]">&quot;user&quot;</span>
              <span className="text-zinc-500">: {"{ "}</span>
              <span className="text-[#7db4ff]">&quot;id&quot;</span>
              <span className="text-zinc-500">: </span>
              <span className="text-[#f0a35e]">42</span>
              <span className="text-zinc-600">, </span>
              <span className="text-[#7db4ff]">&quot;name&quot;</span>
              <span className="text-zinc-500">: </span>
              <span className="text-[#7ed28b]">&quot;Rushabh&quot;</span>
              <span className="text-zinc-600">, </span>
              <span className="text-[#7db4ff]">&quot;active&quot;</span>
              <span className="text-zinc-500">: </span>
              <span className="text-[#c792ea]">true</span>
              <span className="text-zinc-500">{" } }"}</span>
            </pre>

            <div className="mt-4 flex flex-wrap gap-2">
              {actions.map((a) => (
                <span
                  key={a}
                  className="inline-flex items-center rounded-md border border-white/10 bg-white/[0.03] px-3 py-1.5 font-mono text-[12.5px] text-zinc-300"
                >
                  {a}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}