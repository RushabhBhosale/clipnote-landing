"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import {
  BracesIcon,
  CheckIcon,
  CopyIcon,
  FileKeyIcon,
  GlobeIcon,
  LinkIcon,
  ScissorsIcon,
  SearchIcon,
  SparkIcon,
} from "@/components/icons";

type Action = {
  id: string;
  label: string;
  icon: typeof CopyIcon;
  output: React.ReactNode;
  copyText: string;
};

type Demo = {
  id: "json" | "jwt" | "url";
  tab: string;
  clip: React.ReactNode;
  badge: string;
  from: string;
  actions: Action[];
};

const JSON_COPY = `{
  "user": {
    "id": 42,
    "name": "Rushabh",
    "active": true
  }
}`;

const JWT_COPY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IlJ1c2hhYmgiLCJpYXQiOjE1MTYyMzkwMjJ9.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c";

const URL_COPY =
  "https://example.com/products?id=123&utm_source=test&utm_medium=paid&ref=twitter";

const DEMOS: Demo[] = [
  {
    id: "json",
    tab: "JSON",
    badge: "JSON detected",
    from: "Copied from your API response",
    clip: (
      <pre className="font-mono text-[13px] leading-6 text-zinc-300">
        <code>
          <span className="text-zinc-500">{"{"}</span>
          {"\n"}
          {`  `}
          <span className="text-[#7db4ff]">&quot;user&quot;</span>
          <span className="text-zinc-500">: </span>
          <span className="text-zinc-500">{"{"}</span>
          {"\n"}
          {`    `}
          <span className="text-[#7db4ff]">&quot;id&quot;</span>
          <span className="text-zinc-500">: </span>
          <span className="text-[#f0a35e]">42</span>
          <span className="text-zinc-600">,</span>
          {"\n"}
          {`    `}
          <span className="text-[#7db4ff]">&quot;name&quot;</span>
          <span className="text-zinc-500">: </span>
          <span className="text-[#7ed28b]">&quot;Rushabh&quot;</span>
          <span className="text-zinc-600">,</span>
          {"\n"}
          {`    `}
          <span className="text-[#7db4ff]">&quot;active&quot;</span>
          <span className="text-zinc-500">: </span>
          <span className="text-[#c792ea]">true</span>
          {"\n"}
          {`  `}
          <span className="text-zinc-500">{"}"}</span>
          {"\n"}
          <span className="text-zinc-500">{"}"}</span>
        </code>
      </pre>
    ),
    actions: [
      {
        id: "visualize",
        label: "Visualize",
        icon: SparkIcon,
        copyText: JSON_COPY,
        output: (
          <div className="font-mono text-[13px] leading-7 text-zinc-300">
            <div>
              <span className="text-[#7db4ff]">user</span>
            </div>
            <div className="pl-4 text-zinc-500">├─</div>
            <div className="pl-4">
              <span className="text-zinc-500">├─ </span>
              <span className="text-[#7db4ff]">id</span>
              <span className="text-zinc-500">: </span>
              <span className="text-[#f0a35e]">42</span>
            </div>
            <div className="pl-4">
              <span className="text-zinc-500">├─ </span>
              <span className="text-[#7db4ff]">name</span>
              <span className="text-zinc-500">: </span>
              <span className="text-[#7ed28b]">&quot;Rushabh&quot;</span>
            </div>
            <div className="pl-4">
              <span className="text-zinc-500">└─ </span>
              <span className="text-[#7db4ff]">active</span>
              <span className="text-zinc-500">: </span>
              <span className="text-[#c792ea]">true</span>
            </div>
          </div>
        ),
      },
      {
        id: "format",
        label: "Format",
        icon: BracesIcon,
        copyText: JSON.stringify(JSON.parse(JSON_COPY), null, 2),
        output: (
          <pre className="font-mono text-[13px] leading-6 text-zinc-300">
            <span className="text-zinc-500">{"{"}</span>
            {"\n  "}
            <span className="text-[#7db4ff]">&quot;user&quot;</span>
            <span className="text-zinc-500">: </span>
            <span className="text-zinc-500">{"{"}</span>
            {"\n    "}
            <span className="text-[#7db4ff]">&quot;id&quot;</span>
            <span className="text-zinc-500">: </span>
            <span className="text-[#f0a35e]">42</span>
            <span className="text-zinc-600">,</span>
            {"\n    "}
            <span className="text-[#7db4ff]">&quot;name&quot;</span>
            <span className="text-zinc-500">: </span>
            <span className="text-[#7ed28b]">&quot;Rushabh&quot;</span>
            <span className="text-zinc-600">,</span>
            {"\n    "}
            <span className="text-[#7db4ff]">&quot;active&quot;</span>
            <span className="text-zinc-500">: </span>
            <span className="text-[#c792ea]">true</span>
            {"\n  "}
            <span className="text-zinc-500">{"}"}</span>
            {"\n"}
            <span className="text-zinc-500">{"}"}</span>
          </pre>
        ),
      },
      {
        id: "minify",
        label: "Minify",
        icon: ScissorsIcon,
        copyText: JSON.stringify(JSON.parse(JSON_COPY)),
        output: (
          <div className="whitespace-pre-wrap break-words font-mono text-[13px] leading-6 text-zinc-300">
            <span className="text-zinc-500">{"{"}</span>
            <span className="text-[#7db4ff]">&quot;user&quot;</span>
            <span className="text-zinc-500">:{"{"}</span>
            <span className="text-[#7db4ff]">&quot;id&quot;</span>
            <span className="text-zinc-500">:</span>
            <span className="text-[#f0a35e]">42</span>
            <span className="text-zinc-600">,</span>
            <span className="text-[#7db4ff]">&quot;name&quot;</span>
            <span className="text-zinc-500">:</span>
            <span className="text-[#7ed28b]">&quot;Rushabh&quot;</span>
            <span className="text-zinc-600">,</span>
            <span className="text-[#7db4ff]">&quot;active&quot;</span>
            <span className="text-zinc-500">:</span>
            <span className="text-[#c792ea]">true</span>
            <span className="text-zinc-500">{"}" }{"}"}</span>
          </div>
        ),
      },
      {
        id: "search",
        label: "Search",
        icon: SearchIcon,
        copyText: JSON_COPY,
        output: (
          <div className="font-mono text-[13px] leading-6 text-zinc-300">
            <div className="text-zinc-500">
              1 match for <span className="text-zinc-300">&quot;name&quot;</span>
            </div>
            <div className="mt-1 rounded-md border border-[#f0a35e]/25 bg-[#f0a35e]/[0.07] px-3 py-1.5 text-zinc-300">
              <span className="text-[#7db4ff]">&quot;name&quot;</span>
              <span className="text-zinc-500">: </span>
              <span className="rounded-sm bg-[#f0a35e]/20 px-1 text-[#f0a35e]">
                &quot;Rushabh&quot;
              </span>
            </div>
          </div>
        ),
      },
      {
        id: "copy",
        label: "Copy",
        icon: CopyIcon,
        copyText: JSON_COPY,
        output: (
          <div className="flex items-center gap-3 py-1 font-mono text-[13px] text-[#7ed28b]">
            <CheckIcon className="size-4" />
            JSON copied to clipboard
          </div>
        ),
      },
    ],
  },
  {
    id: "jwt",
    tab: "JWT",
    badge: "JWT detected",
    from: "Copied from your terminal",
    clip: (
      <pre className="whitespace-pre-wrap break-words font-mono text-[12.5px] leading-6 text-zinc-300">
        <span className="text-[#c792ea]">{JWT_COPY.slice(0, 36)}</span>
        <span className="text-zinc-500">.</span>
        <span className="text-[#7ed28b]">{JWT_COPY.slice(36, 90)}</span>
      </pre>
    ),
    actions: [
      {
        id: "decode",
        label: "Decode",
        icon: FileKeyIcon,
        copyText: JSON.stringify(
          {
            header: {
              alg: "HS256",
              typ: "JWT",
            },
            payload: {
              sub: "1234567890",
              name: "Rushabh",
              iat: 1516239022,
            },
          },
          null,
          2
        ),
        output: (
          <div className="font-mono text-[13px] leading-6 text-zinc-300">
            <div className="text-[11px] uppercase tracking-wider text-zinc-500">
              Header
            </div>
            <pre className="mb-3 mt-1 rounded border border-white/5 bg-black/30 px-3 py-2 text-zinc-300">
              <span className="text-zinc-500">{"{"}</span>{" "}
              <span className="text-[#7db4ff]">&quot;alg&quot;</span>{" "}
              <span className="text-zinc-500">:</span>{" "}
              <span className="text-[#7ed28b]">&quot;HS256&quot;</span>{" "}
              <span className="text-zinc-600">,</span>{" "}
              <span className="text-[#7db4ff]">&quot;typ&quot;</span>{" "}
              <span className="text-zinc-500">:</span>{" "}
              <span className="text-[#7ed28b]">&quot;JWT&quot;</span>{" "}
              <span className="text-zinc-500">{"}"}</span>
            </pre>
            <div className="text-[11px] uppercase tracking-wider text-zinc-500">
              Payload
            </div>
            <pre className="mt-1 rounded border border-white/5 bg-black/30 px-3 py-2 text-zinc-300">
              <span className="text-zinc-500">{"{"}</span>{" "}
              <span className="text-[#7db4ff]">&quot;sub&quot;</span>{" "}
              <span className="text-zinc-500">:</span>{" "}
              <span className="text-[#7ed28b]">&quot;1234567890&quot;</span>{" "}
              <span className="text-zinc-600">,</span>{" "}
              <span className="text-[#7db4ff]">&quot;name&quot;</span>{" "}
              <span className="text-zinc-500">:</span>{" "}
              <span className="text-[#7ed28b]">&quot;Rushabh&quot;</span>{" "}
              <span className="text-zinc-600">,</span>{" "}
              <span className="text-[#7db4ff]">&quot;iat&quot;</span>{" "}
              <span className="text-zinc-500">:</span>{" "}
              <span className="text-[#f0a35e]">1516239022</span>{" "}
              <span className="text-zinc-500">{"}"}</span>
            </pre>
          </div>
        ),
      },
      {
        id: "claims",
        label: "Inspect Claims",
        icon: SparkIcon,
        copyText: "sub: users/1234567890\nname: Rushabh\niat: 1516239022",
        output: (
          <div className="divide-y divide-white/[0.06] font-mono text-[13px] text-zinc-300">
            <div className="flex items-center justify-between py-1.5">
              <span className="text-[#7db4ff]">sub</span>
              <span className="text-zinc-500">users/1234567890</span>
            </div>
            <div className="flex items-center justify-between py-1.5">
              <span className="text-[#7db4ff]">name</span>
              <span className="text-zinc-300">&quot;Rushabh&quot;</span>
            </div>
            <div className="flex items-center justify-between py-1.5">
              <span className="text-[#7db4ff]">iat</span>
              <span className="text-zinc-500">Tue, 18 Jan 2018 02:10:22 GMT</span>
            </div>
          </div>
        ),
      },
      {
        id: "copy-jwt",
        label: "Copy",
        icon: CopyIcon,
        copyText: JWT_COPY,
        output: (
          <div className="flex items-center gap-3 py-1 font-mono text-[13px] text-[#7ed28b]">
            <CheckIcon className="size-4" />
            Token copied to clipboard
          </div>
        ),
      },
    ],
  },
  {
    id: "url",
    tab: "URL",
    badge: "URL detected",
    from: "Copied from your browser",
    clip: (
      <pre className="whitespace-pre-wrap break-words font-mono text-[13px] leading-6 text-zinc-300">
        <span className="text-[#7db4ff]">https://</span>
        <span className="text-zinc-300">example.com</span>
        <span className="text-zinc-500">/products</span>
        <span className="text-[#c792ea]">?</span>
        <span className="text-[#f0a35e]">id=123</span>
        <span className="text-zinc-600">&amp;</span>
        <span className="text-[#f0a35e]">utm_source=test</span>
        <span className="text-zinc-600">&amp;</span>
        <span className="text-[#f0a35e]">utm_medium=paid</span>
        <span className="text-zinc-600">&amp;</span>
        <span className="text-[#f0a35e]">ref=twitter</span>
      </pre>
    ),
    actions: [
      {
        id: "params",
        label: "Parse Params",
        icon: LinkIcon,
        copyText: "id: 123\nutm_source: test\nutm_medium: paid\nref: twitter",
        output: (
          <div className="divide-y divide-white/[0.06] font-mono text-[13px] text-zinc-300">
            <div className="flex items-center justify-between py-1.5">
              <span className="text-[#f0a35e]">id</span>
              <span className="text-zinc-300">123</span>
            </div>
            <div className="flex items-center justify-between py-1.5">
              <span className="text-[#f0a35e]">utm_source</span>
              <span className="text-zinc-300">test</span>
            </div>
            <div className="flex items-center justify-between py-1.5">
              <span className="text-[#f0a35e]">utm_medium</span>
              <span className="text-zinc-300">paid</span>
            </div>
            <div className="flex items-center justify-between py-1.5">
              <span className="text-[#f0a35e]">ref</span>
              <span className="text-zinc-300">twitter</span>
            </div>
          </div>
        ),
      },
      {
        id: "clean",
        label: "Remove Tracking",
        icon: ScissorsIcon,
        copyText: "https://example.com/products?id=123",
        output: (
          <div className="whitespace-pre-wrap break-words font-mono text-[13px] leading-6 text-zinc-300">
            <span className="text-[#7db4ff]">https://</span>
            <span className="text-zinc-300">example.com</span>
            <span className="text-zinc-500">/products</span>
            <span className="text-[#c792ea]">?</span>
            <span className="text-[#f0a35e]">id=123</span>
            <span className="ml-2 rounded-sm bg-red-400/10 px-1.5 py-0.5 text-[11px] text-red-300 line-through">
              utm_source·utm_medium·ref
            </span>
          </div>
        ),
      },
      {
        id: "encode",
        label: "Encode",
        icon: GlobeIcon,
        copyText:
          "https%3A%2F%2Fexample.com%2Fproducts%3Fid%3D123%26utm_source%3Dtest",
        output: (
          <div className="whitespace-pre-wrap break-words font-mono text-[13px] leading-6 text-zinc-300">
            <span className="text-[#7db4ff]">
              https%3A%2F%2Fexample.com%2Fproducts%3Fid%3D123
            </span>
            <span className="text-zinc-600">
              %26utm_source%3Dtest%26utm_medium%3Dpaid%26ref%3Dtwitter
            </span>
          </div>
        ),
      },
      {
        id: "decode",
        label: "Decode",
        icon: LinkIcon,
        copyText: URL_COPY,
        output: (
          <div className="whitespace-pre-wrap break-words font-mono text-[13px] leading-6 text-zinc-300">
            <span className="text-[#7db4ff]">https://</span>
            <span className="text-zinc-300">example.com</span>
            <span className="text-zinc-500">/products</span>
            <span className="text-[#c792ea]">?</span>
            <span className="text-[#f0a35e]">id=123</span>
            <span className="text-zinc-600">&amp;</span>
            <span className="text-[#f0a35e]">utm_source=test</span>
          </div>
        ),
      },
    ],
  },
];

export function DemoSection() {
  const [active, setActive] = useState<Demo["id"]>("json");
  const [selected, setSelected] = useState(DEMOS[0].actions[0].id);
  const [flash, setFlash] = useState<string | null>(null);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const demo = DEMOS.find((d) => d.id === active)!;
  const action = demo.actions.find((a) => a.id === selected) ?? demo.actions[0];

  const selectDemo = useCallback((id: Demo["id"]) => {
    setActive(id);
    const d = DEMOS.find((x) => x.id === id)!;
    setSelected(d.actions[0].id);
  }, []);

  const runAction = useCallback((a: Action) => {
    setSelected(a.id);
    setFlash(a.id);
    if (timer.current) clearTimeout(timer.current);
    timer.current = setTimeout(() => setFlash(null), 1300);
    try {
      void navigator.clipboard?.writeText(a.copyText);
    } catch {
      /* clipboard unavailable */
    }
  }, []);

  useEffect(() => {
    return () => {
      if (timer.current) clearTimeout(timer.current);
    };
  }, []);

  const tabs = ["json", "jwt", "url"] as const;

  return (
    <section id="demo" className="border-b border-white/[0.06] py-24">
      <div className="mb-12 text-center">
        <p className="mb-3 font-mono text-[13px] uppercase tracking-widest text-[#8b95ff]">
          Smart clipboard
        </p>
        <h2 className="mx-auto max-w-2xl text-balance text-3xl font-semibold tracking-tight text-zinc-100 sm:text-4xl">
          It knows what you copied.
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-pretty text-base leading-7 text-zinc-400">
          Paste from a terminal, an API response, or your browser — ClipNote
          tells you what it is and puts the right tool one click away.
        </p>
      </div>

    <div className="mx-auto w-full max-w-[1120px] px-6">
      {/* Tabs */}
      <div
        role="tablist"
        aria-label="Smart clipboard detection examples"
        className="mx-auto mb-6 flex w-fit items-center gap-1 rounded-lg border border-white/10 bg-white/[0.03] p-1"
      >
        {tabs.map((id) => (
          <button
            key={id}
            role="tab"
            aria-selected={active === id}
            onClick={() => selectDemo(id)}
            className={`rounded-md px-4 py-1.5 font-mono text-[13px] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#a5b0ff]/60 ${
              active === id
                ? "bg-white/[0.08] text-zinc-100"
                : "text-zinc-500 hover:text-zinc-300"
            }`}
          >
            {id.toUpperCase()}
          </button>
        ))}
      </div>

      {/* Window */}
      <div className="overflow-hidden rounded-xl border border-white/10 bg-[#0e0e12] shadow-[0_24px_80px_-24px_rgba(0,0,0,0.8)]">
        {/* Window chrome */}
        <div className="flex items-center gap-2 border-b border-white/[0.06] bg-white/[0.02] px-4 py-2.5">
          <span className="flex gap-1.5">
            <span className="size-2.5 rounded-full bg-[#ff5f57]" />
            <span className="size-2.5 rounded-full bg-[#febc2e]" />
            <span className="size-2.5 rounded-full bg-[#28c840]" />
          </span>
          <span className="ml-2 font-mono text-[12px] text-zinc-500">
            ClipNote
          </span>
        </div>

        <div className="grid md:grid-cols-2">
          {/* Left: clipboard item */}
          <div className="min-w-0 border-b border-white/[0.06] md:border-b-0 md:border-r">
            <div className="flex items-center justify-between border-b border-white/[0.06] px-4 py-2.5">
              <span className="text-[11px] font-medium uppercase tracking-wider text-zinc-500">
                Clipboard
              </span>
              <span className="font-mono text-[11px] text-zinc-600">just now</span>
            </div>
            <div className="px-5 py-5">
              <div className="mb-3 inline-flex items-center gap-1.5 rounded-full border border-white/[0.07] bg-white/[0.03] px-2 py-0.5 text-[11px] text-zinc-500">
                <ClockDot />
                {demo.from}
              </div>
              <div className="rounded-lg border border-white/[0.06] bg-black/40 p-4">
                {demo.clip}
              </div>
            </div>
          </div>

          {/* Right: detection + actions */}
          <div className="min-w-0">
            <div className="flex items-center justify-between border-b border-white/[0.06] px-4 py-2.5">
              <span className="text-[11px] font-medium uppercase tracking-wider text-zinc-500">
                ClipNote
              </span>
              <Badge label={demo.badge} />
            </div>
            <div className="px-5 py-5">
              <p className="text-sm text-zinc-400">
                Recognized <span className="font-mono text-zinc-200">{demo.tab}</span>.
                Choose an action:
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {demo.actions.map((a) => (
                  <button
                    key={a.id}
                    onClick={() => runAction(a)}
                    aria-pressed={selected === a.id}
                    className={`inline-flex items-center gap-1.5 rounded-md border px-3 py-1.5 text-[13px] font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#a5b0ff]/60 ${
                      selected === a.id
                        ? "border-[#6f7bff]/40 bg-[#6f7bff]/15 text-[#a5b0ff]"
                        : "border-white/10 bg-white/[0.03] text-zinc-300 hover:border-white/20 hover:bg-white/[0.06]"
                    }`}
                  >
                    {flash === a.id ? (
                      <CheckIcon className="size-3.5 text-[#7ed28b]" />
                    ) : (
                      <a.icon className="size-3.5" />
                    )}
                    {a.label}
                  </button>
                ))}
              </div>

              <div className="mt-5">
                <div className="mb-1.5 flex items-center justify-between">
                  <span className="text-[11px] font-medium uppercase tracking-wider text-zinc-500">
                    Result
                  </span>
                  <span className="font-mono text-[11px] text-zinc-600">
                    {flash === action.id ? "copied ✓" : "ready"}
                  </span>
                </div>
                <div className="min-h-[120px] rounded-lg border border-white/[0.06] bg-black/40 p-4">
                  {action.output}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </section>
  );
}

function Badge({ label }: { label: string }) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-400/20 bg-emerald-400/[0.08] px-2.5 py-1 text-[11px] font-medium text-emerald-300">
      <span className="relative flex size-1.5">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
        <span className="relative inline-flex size-1.5 rounded-full bg-emerald-400" />
      </span>
      {label}
    </span>
  );
}

function ClockDot() {
  return (
    <svg
      aria-hidden
      width="12"
      height="12"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    >
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </svg>
  );
}