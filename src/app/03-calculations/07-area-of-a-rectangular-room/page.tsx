"use client";

import { Solution } from "@/components";
import { useState } from "react";
import { Button, Grid, Input } from "semantic-ui-react";

const SQ_FEET_TO_METRES = 0.09290304;

const AreaOfARectangularRoom = () => {
  const [input, setInput] = useState({ length: "", width: "" });
  const [output, setOutput] = useState<{ sqft: number; sqm: number } | null>(null);
  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInput({ ...input, [event.target.name]: event.target.value });
  };
  return (
    <Solution category="Calculations" exercise="Area of a Rectangular Room">
      <Grid stackable>
        <Grid.Column width={6}>
          <Input
            fluid
            label="Length (feet)"
            min="0"
            name="length"
            onChange={handleInput}
            placeholder="e.g. 15"
            type="number"
            value={input.length}
          />
        </Grid.Column>
        <Grid.Column width={6}>
          <Input
            fluid
            label="Width (feet)"
            min="0"
            name="width"
            onChange={handleInput}
            placeholder="e.g. 20"
            type="number"
            value={input.width}
          />
        </Grid.Column>
        <Grid.Column width={4}>
          <Button
            disabled={!input.length || !input.width}
            fluid
            onClick={() => {
              const sqft = parseFloat(input.length) * parseFloat(input.width);
              setOutput({ sqft, sqm: sqft * SQ_FEET_TO_METRES });
            }}
          >
            Calculate
          </Button>
        </Grid.Column>
        {output && (
          <>
            <Grid.Column textAlign="center" width={8}>
              {output.sqft.toFixed(2)} square feet
            </Grid.Column>
            <Grid.Column textAlign="center" width={8}>
              {output.sqm.toFixed(2)} square metres
            </Grid.Column>
          </>
        )}
      </Grid>
    </Solution>
  );
};

export default AreaOfARectangularRoom;
