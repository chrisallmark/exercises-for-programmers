import { NextResponse } from "next/server";

export async function GET() {
  const res = await fetch("http://api.open-notify.org/astros.json", {
    next: { revalidate: 60 },
  });
  if (!res.ok) {
    return NextResponse.json({ error: "Failed to fetch data" }, { status: 502 });
  }
  const data = await res.json();
  return NextResponse.json(data);
}
