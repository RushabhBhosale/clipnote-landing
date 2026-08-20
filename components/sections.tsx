import { PlatformButton } from "@/components/download-buttons";
import {
  ArrowDownIcon,
  BracesIcon,
  CheckIcon,
  ClipboardIcon,
  FileTextIcon,
  HardDriveIcon,
  KeyRoundIcon,
  ScissorsIcon,
  SparkIcon,
  TerminalIcon,
  UserXIcon,
  WifiOffIcon,
  ZapIcon,
} from "@/components/icons";
import { Logo } from "@/components/logo";
import { siteConfig } from "@/lib/site-config";

function SectionHeading({
  eyebrow,
  title,
  sub,
  center = true,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  sub?: React.ReactNode;
  center?: boolean;
}) {
  return (
    <div className={`max-w-2xl ${center ? "mx-auto text-center" : ""}`}>
      {eyebrow && (
        <p className="mb-3 font-mono text-[13px] uppercase tracking-widest text-[#8b95ff]">
          {eyebrow}
        </p>
      )}
      <h2 className="text-balance text-3xl font-semibold tracking-tight text-zinc-100 sm:text-4xl">
        {title}
      </h2>
      {sub && <p className="mt-4 text-pretty text-base leading-7 text-zinc-400">{sub}</p>}
    </div>
  );
}

/* ---------------- Workflow ---------------- */

const STEPS = [
  { n: "01", title: "Copy", desc: "Anything — from a terminal, an API response, or the browser." },
  { n: "02", title: "ClipNote detects it", desc: "JSON, JWT, URL, Base64, timestamp — recognized instantly." },
  { n: "03", title: "Choose an action", desc: "Format, decode, transform, search — one click away." },
  { n: "04", title: "Copy the result", desc: "The output is on your clipboard before you blink." },
];

export function WorkflowSection() {
  return (
    <section id="workflow" className="border-b border-white/[0.06] py-24">
      <div className="mx-auto w-full max-w-[1120px] px-6">
        <SectionHeading
          eyebrow="Workflow"
          title="Stop opening random browser tools."
          sub={
            <>
              JSON formatter. JWT decoder. Base64 converter. Timestamp converter.
              URL parser. They shouldn&apos;t each require a separate website.
            </>
          }
        />

        <ol className="mt-14 grid gap-px overflow-hidden rounded-xl border border-white/[0.08] bg-white/[0.06] sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((step, i) => (
            <li key={step.n} className="relative bg-[#0d0d11] p-6">
              <span className="font-mono text-[12px] text-zinc-600">{step.n}</span>
              <div className="mt-8 flex items-center gap-2">
                <span className="size-6 rounded-md border border-[#6f7bff]/30 bg-[#6f7bff]/10 grid place-items-center">
                  {i === 0 ? (
                    <TerminalIcon className="size-3.5 text-[#a5b0ff]" />
                  ) : i === 1 ? (
                    <SparkIcon className="size-3.5 text-[#a5b0ff]" />
                  ) : i === 2 ? (
                    <BracesIcon className="size-3.5 text-[#a5b0ff]" />
                  ) : (
                    <ClipboardIcon className="size-3.5 text-[#a5b0ff]" />
                  )}
                </span>
                <h3 className="font-medium text-zinc-100">{step.title}</h3>
              </div>
              <p className="mt-3 text-sm leading-6 text-zinc-500">{step.desc}</p>
              {i < STEPS.length - 1 && (
                <ArrowDownIcon className="absolute -bottom-3 left-1/2 z-10 size-5 -translate-x-1/2 rounded-full border border-white/10 bg-[#141419] text-zinc-500 sm:hidden" />
              )}
              {i < STEPS.length - 1 && (
                <span className="absolute right-[-10px] top-1/2 z-10 hidden size-5 -translate-y-1/2 place-items-center rounded-full border border-white/10 bg-[#141419] text-zinc-500 sm:grid lg:hidden" />
              )}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

/* ---------------- Privacy ---------------- */

const PRIVACY_ITEMS = [
  {
    icon: HardDriveIcon,
    title: "Clipboard history stored locally",
    desc: "Scroll back through everything you copied — it never leaves your device.",
  },
  {
    icon: FileTextIcon,
    title: "Notes stored locally",
    desc: "Your notes and snippets live in a local database on your machine.",
  },
  {
    icon: KeyRoundIcon,
    title: "Credentials remain local",
    desc: "Developers&apos; secrets stay in local storage — never synced anywhere.",
  },
  {
    icon: UserXIcon,
    title: "No account required",
    desc: "There is no login, no profile, and nothing to sign up for.",
  },
  {
    icon: WifiOffIcon,
    title: "No cloud sync required",
    desc: "ClipNote doesn&apos;t need your clipboard history sitting on someone else&apos;s server.",
  },
  {
    icon: ZapIcon,
    title: "Works offline",
    desc: "Every tool runs locally, so it works even without an internet connection.",
  },
];

export function PrivacySection() {
  return (
    <section id="privacy" className="border-b border-white/[0.06] py-24">
      <div className="mx-auto grid w-full max-w-[1120px] gap-12 px-6 lg:grid-cols-[minmax(0,340px)_1fr] lg:gap-20">
        <div className="lg:sticky lg:top-24 lg:self-start">
          <SectionHeading
            center={false}
            eyebrow="Privacy"
            title="Your clipboard should stay yours."
            sub={
              <>
                ClipNote is designed around local storage. Everything you copy —
                history, notes, snippets, credentials — stays on your device.
              </>
            }
          />
          <p className="mt-6 border-l-2 border-[#6f7bff]/50 pl-4 text-sm leading-6 text-zinc-400">
            No account. No cloud. No clipboard history on someone else&apos;s
            server.
          </p>
        </div>

        <div className="grid gap-px overflow-hidden rounded-xl border border-white/[0.08] bg-white/[0.06] sm:grid-cols-2">
          {PRIVACY_ITEMS.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.title} className="bg-[#0d0d11] p-6">
                <div className="grid size-9 place-items-center rounded-lg border border-white/[0.08] bg-white/[0.03] text-[#a5b0ff]">
                  <Icon className="size-4.5" />
                </div>
                <h3 className="mt-4 text-[15px] font-medium text-zinc-100">
                  {item.title}
                </h3>
                <p className="mt-1.5 text-sm leading-6 text-zinc-500">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Features ---------------- */

type Feature = string;

const FEATURES: {
  icon: typeof ClipboardIcon;
  title: string;
  tag: string;
  blurb: string;
  items: Feature[];
  span: string;
  mono?: boolean;
}[] = [
  {
    icon: ClipboardIcon,
    title: "Clipboard",
    tag: "history",
    blurb: "A searchable history of everything you copied, with smart detection built in.",
    items: ["History", "Search", "Pin", "Quick copy", "Smart detection"],
    span: "lg:col-span-2",
  },
  {
    icon: BracesIcon,
    title: "Developer Tools",
    tag: "for devs",
    blurb: "Decode, inspect, and transform the data types developers copy all day.",
    items: [
      "JSON formatter",
      "JSON tree view",
      "JSON search",
      "JSON minify",
      "JSON validation",
      "JWT decoder",
      "URL parser",
      "URL encode/decode",
      "Base64 encode/decode",
      "Timestamp converter",
      "Regex tester",
      "UUID generator",
      "Hash generator",
    ],
    span: "lg:col-span-2",
    mono: true,
  },
  {
    icon: ScissorsIcon,
    title: "Text Tools",
    tag: "clean",
    blurb: "Fix up messy text pasted from anywhere.",
    items: [
      "Clean text",
      "Transform case",
      "Sort lines",
      "Remove duplicate lines",
      "Trim whitespace",
    ],
    span: "lg:col-span-1",
  },
  {
    icon: FileTextIcon,
    title: "Notes & Snippets",
    tag: "save",
    blurb: "Keep frequently used content one keystroke away.",
    items: ["Quick notes", "Saved snippets", "Paste on demand"],
    span: "lg:col-span-1",
  },
  {
    icon: KeyRoundIcon,
    title: "Credentials Shortcut",
    tag: "local only",
    blurb:
      "Access credentials you save the same way you&apos;d use a password manager — stored only on your machine.",
    items: ["Local credential storage", "Quick shortcut access"],
    span: "lg:col-span-1",
    mono: true,
  },
];

export function FeaturesSection() {
  return (
    <section id="features" className="border-b border-white/[0.06] py-24">
      <div className="mx-auto w-full max-w-[1120px] px-6">
        <SectionHeading
          eyebrow="Features"
          title="Everything you keep re-copying, in one place."
          sub="One shortcut away instead of a dozen browser tabs you open and forget."
        />

        <div className="mt-14 grid gap-4 lg:grid-cols-3">
          {FEATURES.map((f) => {
            const Icon = f.icon;
            return (
              <div
                key={f.title}
                className={`group rounded-xl border border-white/[0.08] bg-[#0d0d11] p-6 transition-colors hover:border-white/[0.14] ${f.span}`}
              >
                <div className="flex items-center gap-3">
                  <div className="grid size-9 place-items-center rounded-lg border border-white/[0.08] bg-white/[0.03] text-[#a5b0ff]">
                    <Icon className="size-4.5" />
                  </div>
                  <div>
                    <h3 className="font-medium text-zinc-100">{f.title}</h3>
                    <p className="font-mono text-[11px] uppercase tracking-wider text-zinc-600">
                      {f.tag}
                    </p>
                  </div>
                </div>
                <p className="mt-4 text-sm leading-6 text-zinc-500">{f.blurb}</p>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {f.items.map((item) => (
                    <li
                      key={item}
                      className={`inline-flex items-center gap-1.5 rounded-md border border-white/[0.07] bg-white/[0.02] px-2.5 py-1 text-[12.5px] ${
                        f.mono ? "font-mono text-zinc-400" : "text-zinc-300"
                      }`}
                    >
                      {!f.mono && (
                        <CheckIcon className="size-3 text-[#7ed28b]" />
                      )}
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Install ---------------- */

function InstallCard({
  platform,
  title,
  icon,
  steps,
  note,
}: {
  platform: "mac" | "windows";
  title: string;
  icon: React.ReactNode;
  steps: { label: string; detail?: string }[];
  note: string;
}) {
  return (
    <div className="flex flex-col rounded-xl border border-white/[0.08] bg-[#0d0d11] p-6 sm:p-8">
      <div className="flex items-center gap-3">
        <div className="grid size-10 place-items-center rounded-lg border border-white/[0.08] bg-white/[0.03] text-zinc-200">
          {icon}
        </div>
        <div>
          <h3 className="font-semibold text-zinc-100">{title}</h3>
          <p className="font-mono text-[11px] uppercase tracking-wider text-zinc-600">
            Install
          </p>
        </div>
      </div>

      <PlatformButton platform={platform} size="lg" />

      <ol className="mt-6 space-y-3">
        {steps.map((step, i) => (
          <li key={step.label} className="flex gap-3 text-sm leading-6">
            <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full border border-[#6f7bff]/30 bg-[#6f7bff]/10 font-mono text-[11px] text-[#a5b0ff]">
              {i + 1}
            </span>
            <span className="text-zinc-300">
              {step.label}
              {step.detail && (
                <span className="block text-zinc-500">{step.detail}</span>
              )}
            </span>
          </li>
        ))}
      </ol>

      <p className="mt-6 rounded-lg border border-amber-400/15 bg-amber-400/[0.05] px-3.5 py-2.5 text-[13px] leading-5 text-amber-200/90">
        {note}
      </p>
    </div>
  );
}

export function InstallSection() {
  return (
    <section id="download" className="border-b border-white/[0.06] py-24">
      <div className="mx-auto w-full max-w-[1120px] px-6">
        <SectionHeading
          eyebrow="Download"
          title="Get ClipNote"
          sub="Free during beta. Works on Windows and macOS. Nothing to sign up for."
        />

        <div className="mt-14 grid gap-4 lg:grid-cols-2">
          <InstallCard
            platform="windows"
            title="Windows"
            icon={
              <svg viewBox="0 0 24 24" fill="currentColor" className="size-5" aria-hidden>
                <path d="M3 5.7 10.3 4.6v6.6H3V5.7Zm0 12.6 7.3 1.1V12.7H3v5.6Zm8.4 1.36L21 20.9V12.7h-9.6v7.02ZM11.4 4.08 21 3.1V11.7h-9.6V4.08Z" />
              </svg>
            }
            steps={[
              { label: "Download the installer" },
              { label: "Open it and run the setup" },
              ...(siteConfig.windowsSigned
                ? []
                : [
                    {
                      label: "If SmartScreen appears, choose “More info → Run anyway”",
                      detail: "This is expected for an unsigned beta build.",
                    },
                  ]),
              { label: "Install ClipNote" },
            ]}
            note={
              siteConfig.windowsSigned
                ? "The installer is signed."
                : "This beta is unsigned, so Windows SmartScreen may show a warning. That’s expected — just allow the install."
            }
          />

          <InstallCard
            platform="mac"
            title="macOS"
            icon={
              <svg viewBox="0 0 24 24" fill="currentColor" className="size-5" aria-hidden>
                <path d="M16.4 12.7c0-2.3 1.9-3.4 2-3.5-1.1-1.6-2.8-1.8-3.4-1.9-1.5-.1-2.9.9-3.6.9-.7 0-1.8-.9-3-.9-1.5 0-2.9.9-3.7 2.3-1.6 2.8-.4 6.9 1.2 9.1.8 1.1 1.7 2.4 2.9 2.3 1.2 0 1.6-.7 3.1-.7s1.8.7 3.1.7c1.3 0 2.1-1.1 2.9-2.3.9-1.3 1.3-2.6 1.3-2.7-.1 0-2.6-1-2.6-3.9ZM14.2 5.6c.6-.8 1-1.9.9-3-.9 0-2 .6-2.6 1.4-.6.6-1.1 1.7-.9 2.7 1 .1 2-.4 2.6-1.1Z" />
              </svg>
            }
            steps={[
              { label: "Download the .dmg" },
              { label: "Open it" },
              { label: "Drag ClipNote into Applications" },
              ...(siteConfig.macNotarized
                ? []
                : [
                    {
                      label: "First launch: right-click the app → Open",
                      detail: "Gatekeeper may block an unsigned app the first time.",
                    },
                  ]),
            ]}
            note={
              siteConfig.macNotarized
                ? "This build is notarized for macOS."
                : "This beta build isn’t notarized yet. On first launch, right-click the app and choose “Open” if Gatekeeper blocks it."
            }
          />
        </div>
      </div>
    </section>
  );
}

/* ---------------- Beta ---------------- */

export function BetaSection() {
  const href = siteConfig.feedback || "/support";

  return (
    <section className="border-b border-white/[0.06] py-24">
      <div className="mx-auto w-full max-w-[1120px] px-6">
        <div className="mx-auto max-w-2xl text-center">
          <div className="mx-auto mb-6 grid size-12 place-items-center rounded-xl border border-white/[0.08] bg-white/[0.03] text-[#a5b0ff]">
            <SparkIcon className="size-5" />
          </div>
          <h2 className="text-balance text-3xl font-semibold tracking-tight text-zinc-100 sm:text-4xl">
            ClipNote is free during beta.
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-pretty text-base leading-7 text-zinc-400">
            I&apos;m focused on making ClipNote genuinely useful before worrying
            about pricing. If it saves you time every day, that&apos;s the goal.
          </p>
          <div className="mt-8">
            <a
              href={href}
              className="inline-flex h-11 items-center gap-2 rounded-lg border border-white/10 bg-white/[0.04] px-5 text-sm font-medium text-zinc-100 transition-colors hover:border-white/20 hover:bg-white/[0.07] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#a5b0ff]/60"
            >
              Send Feedback
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Footer ---------------- */

export function SiteFooter() {
  return (
    <footer className="py-10">
      <div className="mx-auto flex w-full max-w-[1120px] flex-col items-center gap-6 px-6 md:flex-row md:justify-between">
        <Logo />
        <nav
          aria-label="Footer"
          className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-zinc-500"
        >
          <span className="font-medium text-zinc-400">Free Beta</span>
          {siteConfig.github && (
            <a
              href={siteConfig.github}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-zinc-200"
            >
              GitHub
            </a>
          )}
          <a href="/privacy" className="transition-colors hover:text-zinc-200">
            Privacy Policy
          </a>
          <a href="/support" className="transition-colors hover:text-zinc-200">
            Support
          </a>
          {siteConfig.feedback && (
            <a
              href={siteConfig.feedback}
              className="transition-colors hover:text-zinc-200"
            >
              Feedback
            </a>
          )}
        </nav>
        <p className="text-[13px] text-zinc-600">
          © {new Date().getFullYear()} {siteConfig.name}
        </p>
      </div>
    </footer>
  );
}