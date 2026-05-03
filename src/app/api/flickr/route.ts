import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const tags = req.nextUrl.searchParams.get("tags") ?? "";
  const url = `https://www.flickr.com/services/feeds/photos_public.gne?tags=${encodeURIComponent(tags)}&format=json&nojsoncallback=1`;
  const res = await fetch(url, { next: { revalidate: 60 } });
  if (!res.ok) {
    return NextResponse.json({ error: "Failed to fetch Flickr feed" }, { status: 502 });
  }
  const data = await res.json();
  return NextResponse.json(data);
}
