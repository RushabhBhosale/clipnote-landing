"use client";

import { useSyncExternalStore } from "react";
import { AppleIcon, WindowsIcon } from "@/components/icons";
import { siteConfig } from "@/lib/site-config";

export type Platform = "mac" | "windows";

function detectPlatform(): Platform | "other" {
  if (typeof navigator === "undefined") return "other";
  const ua = `${navigator.userAgent} ${navigator.platform ?? ""}`;
  if (/mac|iphone|ipad|ipod/i.test(ua)) return "mac";
  if (/win/i.test(ua)) return "windows";
  return "other";
}

type Size = "md" | "lg";

const sizeClasses: Record<Size, string> = {
  md: "h-10 px-4 text-sm gap-2",
  lg: "h-12 px-6 text-[15px] gap-2.5",
};

type PlatformConfig = {
  label: string;
  icon: typeof WindowsIcon;
  href: string;
  note: string;
};

function platformConfig(platform: "mac" | "windows"): PlatformConfig {
  switch (platform) {
    case "mac":
      return {
        label: "Download for macOS",
        icon: AppleIcon,
        href: siteConfig.macDownload,
        note: ".dmg · Apple Silicon",
      };
    case "windows":
      return {
        label: "Download for Windows",
        icon: WindowsIcon,
        href: siteConfig.windowsDownload,
        note: ".exe · x64",
      };
  }
}

export function PlatformButton({
  platform,
  emphasized = true,
  size = "lg",
}: {
  platform: "mac" | "windows";
  emphasized?: boolean;
  size?: Size;
}) {
  return (
    <DownloadButton platform={platformConfig(platform)} emphasis={emphasized} size={size} />
  );
}

function DownloadButton({
  platform,
  emphasis,
  size,
}: {
  platform: PlatformConfig;
  emphasis: boolean;
  size: Size;
}) {
  const Icon = platform.icon;
  const available = platform.href.length > 0;

  const common = [
    "inline-flex items-center justify-center rounded-lg font-medium transition-colors outline-none focus-visible:ring-2 focus-visible:ring-[#a5b0ff]/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0a0c]",
    sizeClasses[size],
  ].join(" ");

  if (!available) {
    return (
      <span
        aria-disabled="true"
        title="Download not published yet — check back soon"
        className={`${common} cursor-not-allowed border border-white/10 bg-white/[0.03] text-zinc-500 ${
          emphasis ? "opacity-100" : "opacity-70"
        }`}
      >
        <Icon className="size-[17px]" />
        {platform.label}
      </span>
    );
  }

  const emphasisClasses = emphasis
    ? "bg-[#6f7bff] text-white shadow-[0_1px_0_rgba(255,255,255,0.15)_inset,0_8px_24px_-8px_rgba(111,123,255,0.55)] hover:bg-[#7d88ff] active:translate-y-px"
    : "border border-white/10 bg-white/[0.04] text-zinc-200 hover:border-white/20 hover:bg-white/[0.08] active:translate-y-px";

  return (
    <a href={platform.href} className={`${common} ${emphasisClasses}`}>
      <Icon className="size-[17px]" />
      {platform.label}
    </a>
  );
}

export function DownloadButtons({
  size = "lg",
  align = "start",
}: {
  size?: Size;
  align?: "start" | "center";
}) {
  const platform =
    useSyncExternalStore(subscribe, getClientSnapshot, getServerSnapshot);

  const preferred: "mac" | "windows" =
    platform === "mac" ? "mac" : "windows";

  return (
    <div
      className={`flex flex-col gap-3 sm:flex-row sm:items-center ${
        align === "center" ? "sm:justify-center" : ""
      }`}
    >
      <DownloadButton
        platform={platformConfig(preferred)}
        emphasis
        size={size}
      />
      <DownloadButton
        platform={platformConfig(preferred === "mac" ? "windows" : "mac")}
        emphasis={false}
        size={size}
      />
    </div>
  );
}

const subscribe = () => {
  return () => {};
};

let cachedSnapshot: "mac" | "windows" | "other" | null = null;

function getClientSnapshot(): "mac" | "windows" | "other" {
  if (cachedSnapshot) return cachedSnapshot;
  cachedSnapshot = detectPlatform();
  return cachedSnapshot;
}

function getServerSnapshot(): "mac" | "windows" | "other" {
  return "other";
}