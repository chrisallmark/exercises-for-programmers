"use client";

import { Solution } from "@/components";
import { useState } from "react";
import { Button, Grid, Message, Table } from "semantic-ui-react";

type Astronaut = { name: string; craft: string };
type ApiResponse = { number: number; people: Astronaut[] };
type State = "idle" | "loading" | "done" | "error";

const WhosInSpace = () => {
  const [state, setState] = useState<State>("idle");
  const [data, setData] = useState<ApiResponse | null>(null);
  const [error, setError] = useState("");

  const fetch_ = async () => {
    setState("loading");
    try {
      const res = await fetch("/api/whos-in-space");
      if (!res.ok) throw new Error("Request failed");
      setData(await res.json());
      setState("done");
    } catch {
      setError("Could not reach the API. Try again later.");
      setState("error");
    }
  };

  return (
    <Solution category="Working with External Services" exercise="Who's in Space?">
      <Grid stackable>
        <Grid.Column width={16}>
          <Button primary loading={state === "loading"} onClick={fetch_}>
            {state === "done" ? "Refresh" : "Who's in Space?"}
          </Button>
        </Grid.Column>

        {state === "error" && (
          <Grid.Column width={16}>
            <Message negative>{error}</Message>
          </Grid.Column>
        )}

        {state === "done" && data && (
          <Grid.Column width={16}>
            <p>
              There {data.number === 1 ? "is" : "are"} <strong>{data.number}</strong>{" "}
              {data.number === 1 ? "person" : "people"} in space right now:
            </p>
            <Table celled>
              <Table.Header>
                <Table.Row>
                  <Table.HeaderCell>Name</Table.HeaderCell>
                  <Table.HeaderCell>Craft</Table.HeaderCell>
                </Table.Row>
              </Table.Header>
              <Table.Body>
                {data.people.map((p) => (
                  <Table.Row key={p.name}>
                    <Table.Cell>{p.name}</Table.Cell>
                    <Table.Cell>{p.craft}</Table.Cell>
                  </Table.Row>
                ))}
              </Table.Body>
            </Table>
          </Grid.Column>
        )}
      </Grid>
    </Solution>
  );
};

export default WhosInSpace;
