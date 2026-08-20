"use client";

import { useState } from "react";
import { DownloadButtons } from "@/components/download-buttons";
import { GitHubIcon, MenuIcon, XIcon } from "@/components/icons";
import { Logo } from "@/components/logo";
import { siteConfig } from "@/lib/site-config";

const NAV = [
  { href: "/#features", label: "Features" },
  { href: "/privacy", label: "Privacy" },
  { href: "/support", label: "Support" },
  { href: "/#download", label: "Download" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/[0.06] bg-[#0a0a0c]/80 backdrop-blur-md">
      <div className="mx-auto flex h-14 w-full max-w-[1120px] items-center justify-between px-6">
        <a
          href="#top"
          className="rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#a5b0ff]/60"
          aria-label="ClipNote home"
          onClick={() => setOpen(false)}
        >
          <Logo />
        </a>

        <nav aria-label="Primary" className="hidden items-center gap-1 md:flex">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-md px-3 py-1.5 text-sm text-zinc-400 transition-colors hover:text-zinc-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#a5b0ff]/60"
            >
              {item.label}
            </a>
          ))}
          {siteConfig.github && (
            <a
              href={siteConfig.github}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-1 inline-flex items-center gap-1.5 rounded-md px-3 py-1.5 text-sm text-zinc-400 transition-colors hover:text-zinc-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#a5b0ff]/60"
            >
              <GitHubIcon className="size-4" />
              GitHub
            </a>
          )}
        </nav>

        <div className="hidden md:block">
          <DownloadButtons size="md" />
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          className="grid size-9 place-items-center rounded-md text-zinc-300 transition-colors hover:bg-white/[0.06] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#a5b0ff]/60 md:hidden"
        >
          {open ? <XIcon className="size-5" /> : <MenuIcon className="size-5" />}
        </button>
      </div>

      {open && (
        <nav
          id="mobile-nav"
          aria-label="Mobile"
          className="border-t border-white/[0.06] bg-[#0a0a0c] px-6 py-4 md:hidden"
        >
          <div className="flex flex-col gap-1">
            {NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-2 py-2.5 text-[15px] text-zinc-300 hover:bg-white/[0.05] hover:text-zinc-100"
              >
                {item.label}
              </a>
            ))}
            {siteConfig.github && (
              <a
                href={siteConfig.github}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className="flex items-center gap-2 rounded-md px-2 py-2.5 text-[15px] text-zinc-300 hover:bg-white/[0.05] hover:text-zinc-100"
              >
                <GitHubIcon className="size-4" />
                GitHub
              </a>
            )}
          </div>
          <div className="mt-3 border-t border-white/[0.06] pt-4">
            <DownloadButtons size="lg" align="center" />
          </div>
        </nav>
      )}
    </header>
  );
}