"use client";

import { Solution } from "@/components";
import markdown from "@/exercises/04-making-decisions/21-numbers-to-names.md";
import { useState } from "react";
import { Button, Grid, Input } from "semantic-ui-react";

const MONTHS = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];

const NumbersToNames = () => {
  const [number, setNumber] = useState("");
  const [output, setOutput] = useState<string | null>(null);
  return (
    <Solution category="Making Decisions" exercise="Numbers to Names"
      markdown={markdown}
    >
      <Grid stackable>
        <Grid.Column width={14}>
          <Input
            fluid
            label="Month number (1–12)"
            max="12"
            min="1"
            onChange={(e) => setNumber(e.target.value)}
            placeholder="e.g. 3"
            type="number"
            value={number}
          />
        </Grid.Column>
        <Grid.Column width={2}>
          <Button
            disabled={!number}
            fluid
            onClick={() => {
              const n = parseInt(number);
              setOutput(
                n >= 1 && n <= 12 ? MONTHS[n - 1] : "Please enter a number between 1 and 12."
              );
            }}
          >
            Convert
          </Button>
        </Grid.Column>
        {output && (
          <Grid.Column textAlign="center" width={16}>
            {output}
          </Grid.Column>
        )}
      </Grid>
    </Solution>
  );
};

export default NumbersToNames;
