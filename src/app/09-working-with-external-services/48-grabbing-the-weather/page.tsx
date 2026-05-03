"use client";

import { Solution } from "@/components";
import { useState } from "react";
import { Button, Grid, Input, Message } from "semantic-ui-react";

type WeatherData = {
  name: string;
  main: { temp: number; feels_like: number; humidity: number };
  weather: { description: string }[];
};

type State = "idle" | "loading" | "done" | "error";

const toC = (f: number) => ((f - 32) * 5) / 9;

const GrabbingTheWeather = () => {
  const [city, setCity] = useState("");
  const [apiKey, setApiKey] = useState(process.env.NEXT_PUBLIC_OPENWEATHERMAP_API_KEY ?? "");
  const [state, setState] = useState<State>("idle");
  const [data, setData] = useState<WeatherData | null>(null);
  const [error, setError] = useState("");

  const search = async () => {
    setState("loading");
    setData(null);
    try {
      const params = new URLSearchParams({ city: city.trim() });
      if (apiKey.trim()) params.set("key", apiKey.trim());
      const res = await fetch(`/api/weather?${params}`);
      const json = await res.json();
      if (!res.ok) throw new Error(json.error ?? "Request failed");
      setData(json);
      setState("done");
    } catch (e) {
      setError(e instanceof Error ? e.message : "Unknown error");
      setState("error");
    }
  };

  const canSubmit = city.trim().length > 0 && (apiKey.trim().length > 0 || !!process.env.NEXT_PUBLIC_OPENWEATHERMAP_API_KEY);

  return (
    <Solution category="Working with External Services" exercise="Grabbing the Weather">
      <Grid stackable>
        <Grid.Column width={10}>
          <Input
            fluid
            label="City"
            placeholder="e.g. Chicago, IL"
            value={city}
            onChange={(e) => { setCity(e.target.value); setState("idle"); }}
            onKeyDown={(e: React.KeyboardEvent) => { if (e.key === "Enter" && canSubmit) search(); }}
          />
        </Grid.Column>
        <Grid.Column width={16}>
          <Input
            style={{ width: "100%", maxWidth: "420px" }}
            label="OpenWeatherMap API Key"
            placeholder="Paste your API key here"
            type="password"
            value={apiKey}
            onChange={(e) => setApiKey(e.target.value)}
          />
        </Grid.Column>
        <Grid.Column width={16}>
          <Button primary loading={state === "loading"} disabled={!canSubmit} onClick={search}>
            Get Weather
          </Button>
        </Grid.Column>

        {state === "error" && (
          <Grid.Column width={16}>
            <Message negative>{error}</Message>
          </Grid.Column>
        )}

        {state === "done" && data && (
          <Grid.Column width={16}>
            <Message info>
              <Message.Header>{data.name} weather</Message.Header>
              <p>
                <strong>{Math.round(data.main.temp)}°F</strong> ({Math.round(toC(data.main.temp))}°C)
                — {data.weather[0]?.description}
              </p>
              <p>Feels like {Math.round(data.main.feels_like)}°F · Humidity {data.main.humidity}%</p>
            </Message>
          </Grid.Column>
        )}
      </Grid>
    </Solution>
  );
};

export default GrabbingTheWeather;
