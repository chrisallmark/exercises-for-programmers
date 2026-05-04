"use client";

import { Solution } from "@/components";
import { useState } from "react";
import { Button, Grid, Input } from "semantic-ui-react";

const ComparingNumbers = () => {
  const [input, setInput] = useState({ a: "", b: "", c: "" });
  const [output, setOutput] = useState<string | null>(null);
  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInput({ ...input, [event.target.name]: event.target.value });
  };
  const isDisabled = !input.a || !input.b || !input.c;
  return (
    <Solution category="Making Decisions" exercise="Comparing Numbers"
      markdown="/exercises/04-making-decisions/22-comparing-numbers.md"
    >
      <Grid stackable>
        <Grid.Column width={5}>
          <Input
            fluid
            label="First number"
            name="a"
            onChange={handleInput}
            placeholder="e.g. 10"
            type="number"
            value={input.a}
          />
        </Grid.Column>
        <Grid.Column width={5}>
          <Input
            fluid
            label="Second number"
            name="b"
            onChange={handleInput}
            placeholder="e.g. 42"
            type="number"
            value={input.b}
          />
        </Grid.Column>
        <Grid.Column width={4}>
          <Input
            fluid
            label="Third number"
            name="c"
            onChange={handleInput}
            placeholder="e.g. 7"
            type="number"
            value={input.c}
          />
        </Grid.Column>
        <Grid.Column width={2}>
          <Button
            disabled={isDisabled}
            fluid
            onClick={() => {
              const nums = [parseFloat(input.a), parseFloat(input.b), parseFloat(input.c)];
              const unique = new Set(nums);
              if (unique.size !== 3) {
                setOutput("Please enter three different numbers.");
                return;
              }
              let largest = nums[0];
              if (nums[1] > largest) largest = nums[1];
              if (nums[2] > largest) largest = nums[2];
              setOutput(`The largest number is ${largest}.`);
            }}
          >
            Compare
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

export default ComparingNumbers;
