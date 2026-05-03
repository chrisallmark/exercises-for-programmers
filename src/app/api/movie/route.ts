import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const { searchParams } = req.nextUrl;
  const title = searchParams.get("title");
  const key = searchParams.get("key") || process.env.OMDB_API_KEY;

  if (!title) return NextResponse.json({ error: "title is required" }, { status: 400 });
  if (!key) return NextResponse.json({ error: "API key is required" }, { status: 400 });

  const url = `https://www.omdbapi.com/?t=${encodeURIComponent(title)}&apikey=${key}`;
  const res = await fetch(url, { next: { revalidate: 3600 } });
  const data = await res.json();

  if (!res.ok || data.Response === "False") {
    return NextResponse.json({ error: data.Error ?? "Movie not found" }, { status: 404 });
  }
  return NextResponse.json(data);
}
