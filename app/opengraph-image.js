import { ImageResponse } from "next/og";
import { profile } from "@/data/profile";

export const alt = `${profile.fullName}, ${profile.roles.join(", ")}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: 80,
          background: "radial-gradient(60% 70% at 50% 45%, rgba(16,185,129,0.35), #000 75%)",
          color: "#f5f5f4",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ fontSize: 24, letterSpacing: 8, color: "#1fc98a", textTransform: "uppercase" }}>
          {profile.roles.join(" · ")}
        </div>
        <div style={{ marginTop: 28, fontSize: 92, fontWeight: 900, lineHeight: 1 }}>{profile.fullName}</div>
        <div style={{ marginTop: 32, fontSize: 32, color: "#a3a3a3", maxWidth: 950, lineHeight: 1.35 }}>
          {profile.positioning}
        </div>
      </div>
    ),
    size,
  );
}
