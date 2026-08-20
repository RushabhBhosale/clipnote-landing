export const siteConfig = {
  name: "ClipNote",
  tagline: "Your clipboard, built for developers.",

  // Download URLs -----------------------------------------------------------
  // Replace these with your GitHub Release asset URLs when you publish them,
  // e.g. "https://github.com/<you>/clipnote/releases/latest/download/ClipNote_0.1.1_x64-setup.exe".
  // The current values serve the bundles from this site's /downloads folder.
  windowsDownload: "/downloads/ClipNote_0.1.1_x64-setup.exe",
  macDownload: "/downloads/ClipNote_0.1.1_aarch64.dmg",

  // Metadata about the current builds (drives small UI hints).
  // Set to true once you ship signed/notarized builds.
  windowsSigned: false,
  macNotarized: false,

  // External links -----------------------------------------------------------
  github: "",
  feedback: "",
} as const;
