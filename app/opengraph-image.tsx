import { ImageResponse } from "next/og";

export const alt =
  "Laura Flores Hairstylist, colorimetría y cuidado capilar en Villahermosa";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          alignItems: "stretch",
          background: "#f7f8f6",
          color: "#242323",
          display: "flex",
          height: "100%",
          width: "100%",
        }}
      >
        <div
          style={{
            display: "flex",
            flex: 1,
            flexDirection: "column",
            justifyContent: "space-between",
            padding: "68px 72px",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span style={{ fontFamily: "serif", fontSize: 60 }}>
              Laura Flores
            </span>
            <span
              style={{
                fontSize: 15,
                fontWeight: 700,
                letterSpacing: "0.24em",
                marginTop: 6,
                textTransform: "uppercase",
              }}
            >
              Hair Stylist
            </span>
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span
              style={{
                color: "#713d4a",
                fontSize: 20,
                fontWeight: 700,
                letterSpacing: "0.08em",
                marginBottom: 18,
                textTransform: "uppercase",
              }}
            >
              Villahermosa, Tabasco
            </span>
            <span style={{ fontSize: 58, letterSpacing: "-0.04em" }}>
              Colorimetría y
              <br />
              cuidado capilar
            </span>
          </div>
        </div>
        <div style={{ display: "flex", width: 380 }}>
          <div style={{ background: "#d9d8d3", flex: 1 }} />
          <div style={{ background: "#9d9690", flex: 1 }} />
          <div style={{ background: "#695a55", flex: 1 }} />
          <div style={{ background: "#713d4a", flex: 1 }} />
        </div>
      </div>
    ),
    size,
  );
}
