import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/sections";
import { Logo } from "@/components/logo";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: `Support — ${siteConfig.name}`,
  description:
    "Get help with ClipNote. Reach out by email or phone for bugs, feedback, and feature requests.",
};

const CARDS = [
  {
    title: "Email",
    detail: "The fastest way to reach me for bugs, questions, and feedback.",
    href: `mailto:${siteConfig.supportEmail}`,
    action: siteConfig.supportEmail,
    accent: true,
  },
  {
    title: "Phone",
    detail: "Call or message for urgent issues. Available during day hours.",
    href: `tel:${siteConfig.supportPhone.replace(/\s/g, "")}`,
    action: siteConfig.supportPhone,
    accent: false,
  },
  {
    title: "WhatsApp / SMS",
    detail: "Prefer text? Ping the same number on WhatsApp for quick help.",
    href: `https://wa.me/${siteConfig.supportPhone.replace(/[^0-9]/g, "")}`,
    action: "Message now",
    accent: false,
  },
];

const FAQS = [
  {
    q: "The app is blocked by macOS Gatekeeper / shows as damaged",
    a: "This beta build isn't notarized yet. Right-click the app in Finder and choose Open, or drag it to Applications and open it once from the right-click menu. See the install steps on the homepage for details.",
  },
  {
    q: "Clipboard history isn't being captured",
    a: "Make sure ClipNote is running and that clipboard permissions are granted in System Settings. On macOS you may need to allow accessibility or input monitoring access.",
  },
  {
    q: "Where does my data go?",
    a: "Nowhere. Everything stays on your device. See the privacy policy for the full details.",
  },
  {
    q: "Is there a paid version coming?",
    a: "ClipNote is free during beta. If pricing arrives later, existing users will be grandfathered in.",
  },
];

export default function SupportPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0c] text-zinc-100 antialiased">
      <SiteHeader />
      <main>
        <div className="mx-auto w-full max-w-[1120px] px-6">
          <header className="border-b border-white/[0.06] py-20 sm:py-24">
            <p className="mb-3 font-mono text-[13px] uppercase tracking-widest text-[#8b95ff]">
              Support
            </p>
            <h1 className="text-balance text-4xl font-semibold tracking-tight text-zinc-100 sm:text-5xl">
              We&apos;re here to help.
            </h1>
            <p className="mt-4 max-w-2xl text-pretty text-base leading-7 text-zinc-400">
              Something not working, or have an idea? Send a message and I&apos;ll
              get back to you.
            </p>
          </header>

          <section className="py-16 sm:py-20">
            <div className="grid gap-4 lg:grid-cols-3">
              {CARDS.map((card) => {
                const accent = card.accent
                  ? "border-[#6f7bff]/40 bg-[#6f7bff]/[0.07]"
                  : "border-white/[0.08] bg-[#0d0d11]";
                return (
                  <a
                    key={card.title}
                    href={card.href}
                    className={`group rounded-xl border p-6 transition-colors hover:border-white/[0.14] ${accent}`}
                  >
                    <h2 className="font-semibold text-zinc-100">{card.title}</h2>
                    <p className="mt-1.5 text-sm leading-6 text-zinc-500">
                      {card.detail}
                    </p>
                    <p className="mt-4 font-mono text-[13px] text-[#a5b0ff] group-hover:underline">
                      {card.action}
                    </p>
                  </a>
                );
              })}
            </div>
          </section>

          <section className="pb-16 sm:pb-20">
            <h2 className="text-2xl font-semibold tracking-tight text-zinc-100">
              Common questions
            </h2>
            <div className="mt-8 grid gap-px overflow-hidden rounded-xl border border-white/[0.08] bg-white/[0.06]">
              {FAQS.map((faq) => (
                <div key={faq.q} className="bg-[#0d0d11] p-6 sm:p-8">
                  <h3 className="text-[15px] font-medium text-zinc-100">
                    {faq.q}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-zinc-400">{faq.a}</p>
                </div>
              ))}
            </div>

            <div className="mt-10 flex items-center gap-3 rounded-xl border border-white/[0.08] bg-[#0d0d11] p-6">
              <Logo />
              <p className="text-sm leading-6 text-zinc-500">
                Your clipboard is yours. ClipNote keeps it that way.
              </p>
            </div>
          </section>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}