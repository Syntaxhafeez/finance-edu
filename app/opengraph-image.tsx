import { ImageResponse } from "next/og";

export const size = {
  width: 1200,
  height: 630
};

export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#071816",
          color: "white",
          padding: "72px",
          fontFamily: "Inter, Arial, sans-serif"
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
          <div
            style={{
              width: 88,
              height: 88,
              borderRadius: 24,
              background: "#34d399",
              color: "#06231f",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 42,
              fontWeight: 800
            }}
          >
            L
          </div>
          <div style={{ fontSize: 48, fontWeight: 750 }}>LedgerWise</div>
        </div>
        <div>
          <div style={{ fontSize: 76, lineHeight: 1.02, fontWeight: 780, maxWidth: 920 }}>
            Clear finance education for better money decisions
          </div>
          <div style={{ marginTop: 28, color: "#a7f3d0", fontSize: 28 }}>
            Guides • Calculators • Cards • Loans • Investing • Insurance
          </div>
        </div>
      </div>
    ),
    size
  );
}
