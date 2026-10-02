import { ImageResponse } from "next/og";
import { LOCALES } from "@/i18n";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }));
}

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#030712",
          color: "#22d3ee",
          fontSize: 20,
          fontWeight: 700,
          borderRadius: 6,
        }}
      >
        JC
      </div>
    ),
    { ...size },
  );
}
