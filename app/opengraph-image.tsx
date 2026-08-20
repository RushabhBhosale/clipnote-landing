import { ImageResponse } from "next/og";

export const runtime = "nodejs";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export const alt = "ClipNote — Your clipboard, built for developers.";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#0a0a0c",
          padding: "64px",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            border: "1px solid rgba(255,255,255,0.15)",
            borderRadius: "999px",
            padding: "12px 24px",
            color: "#aed4a8",
            fontSize: "28px",
          }}
        >
          Free Beta · Local-first
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginTop: "40px",
            color: "#e8e8ec",
            fontSize: "72px",
            fontWeight: 700,
            textAlign: "center",
            lineHeight: 1.1,
            letterSpacing: "-0.02em",
          }}
        >
          Your clipboard,
          <span style={{ color: "#8b95ff" }}>built for developers.</span>
        </div>
        <div
          style={{
            marginTop: "36px",
            color: "#9a9aa5",
            fontSize: "32px",
            textAlign: "center",
          }}
        >
          Format JSON · Decode JWTs · Parse URLs · Transform text
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}