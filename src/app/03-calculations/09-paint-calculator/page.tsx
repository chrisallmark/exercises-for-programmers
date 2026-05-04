"use client";

import { Solution } from "@/components";
import { useState } from "react";
import { Button, Grid, Input } from "semantic-ui-react";

const SQFT_PER_GALLON = 350;

const PaintCalculator = () => {
  const [input, setInput] = useState({ length: "", width: "", height: "" });
  const [output, setOutput] = useState<number | null>(null);
  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInput({ ...input, [event.target.name]: event.target.value });
  };
  return (
    <Solution category="Calculations" exercise="Paint Calculator"
      markdown="/exercises/03-calculations/09-paint-calculator.md"
    >
      <Grid stackable>
        <Grid.Column width={5}>
          <Input
            fluid
            label="Room length (feet)"
            min="0"
            name="length"
            onChange={handleInput}
            placeholder="e.g. 15"
            type="number"
            value={input.length}
          />
        </Grid.Column>
        <Grid.Column width={5}>
          <Input
            fluid
            label="Room width (feet)"
            min="0"
            name="width"
            onChange={handleInput}
            placeholder="e.g. 12"
            type="number"
            value={input.width}
          />
        </Grid.Column>
        <Grid.Column width={4}>
          <Input
            fluid
            label="Wall height (feet)"
            min="0"
            name="height"
            onChange={handleInput}
            placeholder="e.g. 8"
            type="number"
            value={input.height}
          />
        </Grid.Column>
        <Grid.Column width={2}>
          <Button
            disabled={!input.length || !input.width || !input.height}
            fluid
            onClick={() => {
              const wallArea =
                2 * (parseFloat(input.length) + parseFloat(input.width)) *
                parseFloat(input.height);
              setOutput(Math.ceil(wallArea / SQFT_PER_GALLON));
            }}
          >
            Calculate
          </Button>
        </Grid.Column>
        {output !== null && (
          <Grid.Column textAlign="center" width={16}>
            You will need {output} gallon{output !== 1 ? "s" : ""} of paint.
          </Grid.Column>
        )}
      </Grid>
    </Solution>
  );
};

export default PaintCalculator;
