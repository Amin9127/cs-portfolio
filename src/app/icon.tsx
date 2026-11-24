import { ImageResponse } from "next/og";

export const size = {
  width: 32,
  height: 32,
};

export const contentType = "image/png";

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
          background: "#090a0f",
          border: "2px solid #3b82f6",
          borderRadius: "8px",
          color: "#f1f5f9",
          fontSize: 15,
          fontWeight: 800,
          letterSpacing: "-0.04em",
        }}
      >
        AA
      </div>
    ),
    { ...size }
  );
}
