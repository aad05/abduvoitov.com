import { ImageResponse } from "@vercel/og";
import { NextRequest } from "next/server";

export const runtime = "edge";

export async function GET(request: NextRequest) {
  const text =
    String(request.nextUrl.searchParams.get("text")).replaceAll("'", "") ??
    "Something went wrong!";
  const width = Number(request.nextUrl.searchParams.get("width") ?? 1200);
  const height = Number(request.nextUrl.searchParams.get("height") ?? 630);

  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 50,
          color: "black",
          background: "white",
          width: "100%",
          height: "100%",
          padding: "50px 200px",
          textAlign: "center",
          justifyContent: "center",
          alignItems: "center",
          fontWeight: 900,
        }}
      >
        {text}
      </div>
    ),
    {
      width,
      height,
    }
  );
}
