import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/sections";
import { Logo } from "@/components/logo";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: `Privacy Policy — ${siteConfig.name}`,
  description:
    "How ClipNote handles your data. Your clipboard history, notes, and credentials stay on your device. No account, no cloud, no tracking.",
};

const SECTIONS = [
  {
    title: "The short version",
    body: [
      "ClipNote is a local-first desktop app. Everything you copy, save, or decode lives on your device. There is no account, no sign-up, no profile, and no account back-end. Your clipboard history, notes, snippets, and credentials never leave your machine.",
    ],
  },
  {
    title: "What ClipNote stores locally",
    body: [
      "The app stores the following on your device: your clipboard history, notes and snippets you create, and credentials you choose to save. This data is kept in local storage managed by the app and remains on your machine until you remove it or uninstall ClipNote.",
    ],
  },
  {
    title: "What ClipNote does not collect",
    body: [
      "The app itself does not collect or transmit any personal data. It has no analytics, no telemetry, no crash reporting, and no advertising. It does not track your activity, your browsing, or your keystrokes.",
      "ClipNote does not require an internet connection to work. All of its tools — JSON formatting, JWT decoding, Base64 conversion, text transformation, and clipboard search — run entirely on your device.",
    ],
  },
  {
    title: "Website and downloads",
    body: [
      "This website is served by a standard hosting provider, which may keep routine server logs (such as request times and IP addresses) in line with its own policies. We do not use cookies, analytics trackers, or third-party advertising on this site.",
      "When you download a build, the download is served directly from this site or a configured release host. Your clipboard data is not involved in any download.",
    ],
  },
  {
    title: "Data you save deliberately",
    body: [
      "If you save credentials or snippets for convenience, they are stored in local storage on your device and are never synced or uploaded. Treat them with the same care you would any locally stored password material. You can delete them at any time from within the app.",
    ],
  },
  {
    title: "Third-party services",
    body: [
      "ClipNote does not integrate with third-party services that receive your clipboard or note data. If an update changes this, it will be reflected in this policy before release.",
    ],
  },
  {
    title: "Security",
    body: [
      "Because your data stays on your device, it is protected by your operating system's own security. No internet-facing service holds your history, notes, or credentials, so there is no remote data store to compromise. Use the security features of your operating system (such as disk encryption and a locked account) to protect local data.",
    ],
  },
  {
    title: "Children's privacy",
    body: [
      "ClipNote is a developer utility and is not directed at children. We do not knowingly collect any personal information from anyone, including children.",
    ],
  },
  {
    title: "Changes to this policy",
    body: [
      "This policy may be updated as ClipNote evolves. Any material changes will be communicated through the app or this website. Your continued use after changes means you accept the updated policy.",
    ],
  },
  {
    title: "Contact",
    body: [
      "If you have questions about this policy or how your data is handled, you can reach out through the feedback channel listed on the site.",
    ],
  },
];

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0c] text-zinc-100 antialiased">
      <SiteHeader />
      <main>
        <div className="mx-auto w-full max-w-[1120px] px-6">
          <header className="border-b border-white/[0.06] py-20 sm:py-24">
            <p className="mb-3 font-mono text-[13px] uppercase tracking-widest text-[#8b95ff]">
              Legal
            </p>
            <h1 className="text-balance text-4xl font-semibold tracking-tight text-zinc-100 sm:text-5xl">
              Privacy Policy
            </h1>
            <p className="mt-4 max-w-2xl text-pretty text-base leading-7 text-zinc-400">
              Last updated: August 2026
            </p>
          </header>

          <div className="py-16 sm:py-20">
            <div className="mx-auto grid gap-12 lg:grid-cols-[minmax(0,220px)_1fr]">
              <nav
                aria-label="On this page"
                className="hidden lg:block lg:sticky lg:top-24 lg:self-start"
              >
                <p className="mb-3 font-mono text-[11px] uppercase tracking-widest text-zinc-600">
                  Contents
                </p>
                <ul className="space-y-1 border-l border-white/[0.08]">
                  {SECTIONS.map((section) => (
                    <li key={section.title}>
                      <a
                        href={`#${section.title.toLowerCase().replace(/\s+/g, "-")}`}
                        className="-ml-px block border-l border-transparent py-1 pl-4 text-sm text-zinc-500 transition-colors hover:border-[#6f7bff]/50 hover:text-zinc-300"
                      >
                        {section.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>

              <div className="max-w-2xl">
                <div className="grid gap-px overflow-hidden rounded-xl border border-white/[0.08] bg-white/[0.06]">
                  {SECTIONS.map((section) => {
                    const id = section.title.toLowerCase().replace(/\s+/g, "-");
                    return (
                      <section
                        key={id}
                        id={id}
                        className="bg-[#0d0d11] p-6 sm:p-8"
                      >
                        <h2 className="text-lg font-semibold text-zinc-100">
                          {section.title}
                        </h2>
                        <div className="mt-3 space-y-3">
                          {section.body.map((paragraph) => (
                            <p
                              key={paragraph.slice(0, 32)}
                              className="text-sm leading-6 text-zinc-400"
                            >
                              {paragraph}
                            </p>
                          ))}
                        </div>
                      </section>
                    );
                  })}
                </div>
                <div className="mt-10 flex items-center gap-3 rounded-xl border border-white/[0.08] bg-[#0d0d11] p-6">
                  <Logo />
                  <p className="text-sm leading-6 text-zinc-500">
                    Your clipboard is yours. ClipNote keeps it that way.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}