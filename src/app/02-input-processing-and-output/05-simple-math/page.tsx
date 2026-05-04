"use client";

import { Solution } from "@/components";
import { useState } from "react";
import { Button, Grid, Input } from "semantic-ui-react";

const SimpleMath = () => {
  const [input, setInput] = useState({
    first: "",
    second: "",
  });
  const [output, setOutput] = useState<string[]>([]);
  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInput({ ...input, [event.target.name]: event.target.value });
  };
  return (
    <Solution category="Input, Processing & Output" exercise="Simple Math"
      markdown="/exercises/02-input-processing-and-output/05-simple-math.md"
    >
      <Grid stackable>
        <Grid.Column width={6}>
          <Input
            fluid
            label="What is the first number?"
            name="first"
            onChange={handleInput}
            placeholder="e.g. 10"
            type="number"
            value={input.first}
          />
        </Grid.Column>
        <Grid.Column width={6}>
          <Input
            fluid
            label="What is the second number?"
            name="second"
            onChange={handleInput}
            placeholder="e.g. 5"
            type="number"
            value={input.second}
          />
        </Grid.Column>
        <Grid.Column width={4}>
          <Button
            disabled={!input.first || !input.second}
            fluid
            onClick={() => {
              const first = Number.parseFloat(input.first);
              const second = Number.parseFloat(input.second);
              if (isNaN(first) || isNaN(second)) return;
              setOutput([
                `${input.first} + ${input.second} = ${first + second}`,
                `${input.first} - ${input.second} = ${first - second}`,
                `${input.first} * ${input.second} = ${first * second}`,
                `${input.first} / ${input.second} = ${second !== 0 ? first / second : "undefined"}`,
              ]);
            }}
          >
            Simple Math
          </Button>
        </Grid.Column>
        {output.length > 0 && (
          <Grid.Column width={16}>
            {output.map((line, index) => (
              <div key={index}>{line}</div>
            ))}
          </Grid.Column>
        )}
      </Grid>
    </Solution>
  );
};

export default SimpleMath;
