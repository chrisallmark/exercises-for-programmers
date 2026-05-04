"use client";

import { Solution } from "@/components";
import markdown from "@/exercises/09-working-with-external-services/50-movie-recommendations.md";
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
  const [state, setState] = useState<State>("idle");
  const [movie, setMovie] = useState<MovieData | null>(null);
  const [error, setError] = useState("");

  const search = async () => {
    setState("loading");
    setMovie(null);
    try {
      const params = new URLSearchParams({ title: title.trim() });
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

  const rec = movie ? recommendation(movie.imdbRating) : null;

  return (
    <Solution
      category="Working with External Services"
      exercise="Movie Recommendations"
      markdown={markdown}
    >
      <Grid stackable>
        <Grid.Column width={10}>
          <Input
            fluid
            label="Movie title"
            placeholder="e.g. Guardians of the Galaxy"
            value={title}
            onChange={(e) => { setTitle(e.target.value); setState("idle"); }}
            onKeyDown={(e: React.KeyboardEvent) => { if (e.key === "Enter" && title.trim()) search(); }}
          />
        </Grid.Column>
        <Grid.Column width={16}>
          <Button primary loading={state === "loading"} disabled={!title.trim()} onClick={search}>
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
