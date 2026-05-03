"use client";

import { Solution } from "@/components";
import { useState } from "react";
import { Button, Grid, Input, Message } from "semantic-ui-react";

type MovieData = {
  Title: string;
  Year: string;
  Rated: string;
  Runtime: string;
  Plot: string;
  imdbRating: string;
};

type State = "idle" | "loading" | "done" | "error";

const recommendation = (rating: string): string | null => {
  const score = parseFloat(rating);
  if (isNaN(score)) return null;
  if (score >= 8.0) return "You should watch this movie right now!";
  if (score < 5.0) return "You should avoid this movie at all costs.";
  return null;
};

const MovieRecommendations = () => {
  const [title, setTitle] = useState("");
  const [apiKey, setApiKey] = useState(process.env.NEXT_PUBLIC_OMDB_API_KEY ?? "");
  const [state, setState] = useState<State>("idle");
  const [movie, setMovie] = useState<MovieData | null>(null);
  const [error, setError] = useState("");

  const search = async () => {
    setState("loading");
    setMovie(null);
    try {
      const params = new URLSearchParams({ title: title.trim() });
      if (apiKey.trim()) params.set("key", apiKey.trim());
      const res = await fetch(`/api/movie?${params}`);
      const json = await res.json();
      if (!res.ok) throw new Error(json.error ?? "Request failed");
      setMovie(json);
      setState("done");
    } catch (e) {
      setError(e instanceof Error ? e.message : "Unknown error");
      setState("error");
    }
  };

  const canSubmit = title.trim().length > 0 && (apiKey.trim().length > 0 || !!process.env.NEXT_PUBLIC_OMDB_API_KEY);
  const rec = movie ? recommendation(movie.imdbRating) : null;

  return (
    <Solution category="Working with External Services" exercise="Movie Recommendations">
      <Grid stackable>
        <Grid.Column width={10}>
          <Input
            fluid
            label="Movie title"
            placeholder="e.g. Guardians of the Galaxy"
            value={title}
            onChange={(e) => { setTitle(e.target.value); setState("idle"); }}
            onKeyDown={(e: React.KeyboardEvent) => { if (e.key === "Enter" && canSubmit) search(); }}
          />
        </Grid.Column>
        <Grid.Column width={16}>
          <Input
            style={{ width: "100%", maxWidth: "420px" }}
            label="OMDB API Key"
            placeholder="Paste your API key here"
            type="password"
            value={apiKey}
            onChange={(e) => setApiKey(e.target.value)}
          />
        </Grid.Column>
        <Grid.Column width={16}>
          <Button primary loading={state === "loading"} disabled={!canSubmit} onClick={search}>
            Find Movie
          </Button>
        </Grid.Column>

        {state === "error" && (
          <Grid.Column width={16}>
            <Message negative>{error}</Message>
          </Grid.Column>
        )}

        {state === "done" && movie && (
          <Grid.Column width={16}>
            <Message info>
              <Message.Header>{movie.Title} ({movie.Year})</Message.Header>
              <p><strong>Rating:</strong> {movie.Rated} · <strong>Runtime:</strong> {movie.Runtime}</p>
              <p><strong>IMDB:</strong> {movie.imdbRating}/10</p>
              {movie.Plot && movie.Plot !== "N/A" && <p>{movie.Plot}</p>}
            </Message>
            {rec && (
              <Message positive={parseFloat(movie.imdbRating) >= 8} negative={parseFloat(movie.imdbRating) < 5}>
                {rec}
              </Message>
            )}
          </Grid.Column>
        )}
      </Grid>
    </Solution>
  );
};

export default MovieRecommendations;
