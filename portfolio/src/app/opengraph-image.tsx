import { ImageResponse } from "next/og";

export const alt = "Juan Campos — Ingeniero en Computación e Informática";
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
          padding: "80px",
          background:
            "radial-gradient(ellipse 80% 60% at 50% -10%, rgba(6,182,212,0.25), #030712)",
          color: "#f3f4f6",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            fontSize: 26,
            letterSpacing: 6,
            textTransform: "uppercase",
            color: "#22d3ee",
          }}
        >
          Ingeniero en Computación e Informática
        </div>
        <div style={{ display: "flex", marginTop: 24, fontSize: 92, fontWeight: 800 }}>
          Juan Benjamín
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 92,
            fontWeight: 800,
            color: "#22d3ee",
            lineHeight: 1,
          }}
        >
          Campos Castro
        </div>
        <div style={{ marginTop: 36, fontSize: 30, color: "#9ca3af" }}>
          Full-Stack · IoT · Machine Learning
        </div>
      </div>
    ),
    { ...size },
  );
}
