"use client";

import { Solution } from "@/components";
import markdown from "@/exercises/07-data-structures/38-filtering-values.md";
import { useState } from "react";
import { Button, Grid, Input } from "semantic-ui-react";

const filterEvenNumbers = (numbers: number[]): number[] =>
  numbers.filter((n) => n % 2 === 0);

const FilteringValues = () => {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState<number[] | null>(null);
  const [error, setError] = useState<string | null>(null);
  return (
    <Solution category="Data Structures" exercise="Filtering Values"
      markdown={markdown}
    >
      <Grid stackable>
        <Grid.Column width={12}>
          <Input
            fluid
            label="Numbers (space-separated)"
            onChange={(e) => { setInput(e.target.value); setError(null); }}
            placeholder="e.g. 1 2 3 4 5 6"
            value={input}
          />
        </Grid.Column>
        <Grid.Column width={4}>
          <Button
            disabled={!input.trim()}
            fluid
            onClick={() => {
              const parts = input.trim().split(/\s+/).map(Number);
              if (parts.some(isNaN)) { setError("Please enter valid numbers separated by spaces."); setOutput(null); return; }
              setError(null);
              setOutput(filterEvenNumbers(parts));
            }}
          >
            Filter Even
          </Button>
        </Grid.Column>
        {error && <Grid.Column width={16}><p style={{ color: "red" }}>{error}</p></Grid.Column>}
        {output !== null && (
          <Grid.Column textAlign="center" width={16}>
            {output.length > 0
              ? `Even numbers: ${output.join(", ")}`
              : "No even numbers found."}
          </Grid.Column>
        )}
      </Grid>
    </Solution>
  );
};

export default FilteringValues;
