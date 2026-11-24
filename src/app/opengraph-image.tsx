import { ImageResponse } from "next/og";

export const alt = "Amin Ali | Computer Science & Software Engineering Portfolio";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "64px",
          background: "linear-gradient(135deg, #090a0f 0%, #0f1526 55%, #11131a 100%)",
          color: "#f8fafc",
          border: "1px solid rgba(255,255,255,0.1)",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "14px",
            fontSize: 20,
            color: "#93c5fd",
          }}
        >
          <div
            style={{
              width: 14,
              height: 14,
              borderRadius: 999,
              background: "#10b981",
            }}
          />
          <span>amin-cs.vercel.app</span>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
          <div style={{ fontSize: 64, fontWeight: 800, letterSpacing: "-0.03em", lineHeight: 1.08 }}>
            Amin Ali
          </div>
          <div style={{ fontSize: 32, fontWeight: 600, color: "#60a5fa", lineHeight: 1.25 }}>
            MSci Computer Science &amp; Software Engineering Portfolio
          </div>
          <div style={{ fontSize: 24, color: "#cbd5e1", maxWidth: "960px", lineHeight: 1.4 }}>
            Python, Java, PyTorch Computer Vision, Unreal Engine 5 &amp; Optical Web Systems
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            fontSize: 18,
            color: "#94a3b8",
            borderTop: "1px solid rgba(255,255,255,0.12)",
            paddingTop: "24px",
          }}
        >
          <span>City St George&apos;s, University of London</span>
          <span>•</span>
          <span>Outlier AI Evaluator</span>
          <span>•</span>
          <span>London, UK</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
