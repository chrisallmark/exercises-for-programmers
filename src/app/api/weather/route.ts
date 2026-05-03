import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const { searchParams } = req.nextUrl;
  const city = searchParams.get("city");
  const key = searchParams.get("key") || process.env.OPENWEATHERMAP_API_KEY;

  if (!city) return NextResponse.json({ error: "city is required" }, { status: 400 });
  if (!key) return NextResponse.json({ error: "API key is required" }, { status: 400 });

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&appid=${key}&units=imperial`;
  const res = await fetch(url, { next: { revalidate: 300 } });
  const data = await res.json();

  if (!res.ok) {
    return NextResponse.json({ error: data.message ?? "Request failed" }, { status: res.status });
  }
  return NextResponse.json(data);
}
