"use client";

import { Solution } from "@/components";
import markdown from "@/exercises/06-repetition/28-adding-numbers.md";
import { useState } from "react";
import { Button, Grid, Input } from "semantic-ui-react";

const AddingNumbers = () => {
  const [inputs, setInputs] = useState(["", "", "", "", ""]);
  const [output, setOutput] = useState<number | null>(null);

  const handleInput = (index: number, value: string) => {
    setInputs(inputs.map((v, i) => (i === index ? value : v)));
  };

  const hasAny = inputs.some((v) => v !== "");

  return (
    <Solution category="Repetition" exercise="Adding Numbers"
      markdown={markdown}
    >
      <Grid stackable>
        {inputs.map((val, i) => (
          <Grid.Column key={i} width={3}>
            <Input
              fluid
              label={`Number ${i + 1}`}
              onChange={(e) => handleInput(i, e.target.value)}
              placeholder="e.g. 10"
              type="number"
              value={val}
            />
          </Grid.Column>
        ))}
        <Grid.Column width={1}>
          <Button
            disabled={!hasAny}
            fluid
            onClick={() =>
              setOutput(inputs.reduce((sum, v) => sum + (v ? parseFloat(v) : 0), 0))
            }
          >
            Add
          </Button>
        </Grid.Column>
        {output !== null && (
          <Grid.Column textAlign="center" width={16}>
            Total: {output}
          </Grid.Column>
        )}
      </Grid>
    </Solution>
  );
};

export default AddingNumbers;
