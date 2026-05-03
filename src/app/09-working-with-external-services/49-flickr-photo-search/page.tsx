"use client";

import { Solution } from "@/components";
import { useState } from "react";
import { Button, Grid, Input, Message } from "semantic-ui-react";

type FlickrItem = { title: string; link: string; media: { m: string } };
type State = "idle" | "loading" | "done" | "error";

const FlickrPhotoSearch = () => {
  const [query, setQuery] = useState("");
  const [state, setState] = useState<State>("idle");
  const [photos, setPhotos] = useState<FlickrItem[]>([]);
  const [error, setError] = useState("");

  const search = async () => {
    setState("loading");
    setPhotos([]);
    try {
      const res = await fetch(`/api/flickr?tags=${encodeURIComponent(query.trim())}`);
      const json = await res.json();
      if (!res.ok) throw new Error(json.error ?? "Request failed");
      setPhotos(json.items ?? []);
      setState("done");
    } catch (e) {
      setError(e instanceof Error ? e.message : "Unknown error");
      setState("error");
    }
  };

  return (
    <Solution category="Working with External Services" exercise="Flickr Photo Search">
      <Grid stackable>
        <Grid.Column width={12}>
          <Input
            fluid
            label="Search"
            placeholder="e.g. cats, mountains, architecture"
            value={query}
            onChange={(e) => { setQuery(e.target.value); setState("idle"); }}
            onKeyDown={(e: React.KeyboardEvent) => { if (e.key === "Enter" && query.trim()) search(); }}
          />
        </Grid.Column>
        <Grid.Column width={4}>
          <Button primary fluid loading={state === "loading"} disabled={!query.trim()} onClick={search}>
            Search
          </Button>
        </Grid.Column>

        {state === "error" && (
          <Grid.Column width={16}>
            <Message negative>{error}</Message>
          </Grid.Column>
        )}

        {state === "done" && photos.length === 0 && (
          <Grid.Column width={16}>
            <p>No photos found for that search.</p>
          </Grid.Column>
        )}

        {state === "done" && photos.length > 0 && (
          <Grid.Column width={16}>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))", gap: "0.75em" }}>
              {photos.map((photo) => (
                <a key={photo.link} href={photo.link} target="_blank" rel="noopener noreferrer">
                  <img
                    src={photo.media.m}
                    alt={photo.title}
                    title={photo.title}
                    style={{ width: "100%", height: "180px", objectFit: "cover", borderRadius: "4px", display: "block" }}
                  />
                </a>
              ))}
            </div>
          </Grid.Column>
        )}
      </Grid>
    </Solution>
  );
};

export default FlickrPhotoSearch;
