"use client";

import { Solution } from "@/components";
import markdown from "@/exercises/02-input-processing-and-output/06-retirement-calculator.md";
import { useState } from "react";
import { Button, Grid, Input } from "semantic-ui-react";

const RetirementCalculator = () => {
  const [input, setInput] = useState({
    current: "",
    retirement: "",
  });
  const [output, setOutput] = useState("");
  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInput({ ...input, [event.target.name]: event.target.value });
  };
  return (
    <Solution
      category="Input, Processing & Output"
      exercise="Retirement Calculator"
    
      markdown={markdown}
    >
      <Grid stackable>
        <Grid.Column width={6}>
          <Input
            fluid
            label="What is your current age?"
            min="0"
            max="120"
            name="current"
            onChange={handleInput}
            placeholder="e.g. 25"
            type="number"
            value={input.current}
          />
        </Grid.Column>
        <Grid.Column width={6}>
          <Input
            fluid
            label="At what age would you like to retire?"
            min="0"
            max="120"
            name="retirement"
            onChange={handleInput}
            placeholder="e.g. 65"
            type="number"
            value={input.retirement}
          />
        </Grid.Column>
        <Grid.Column width={4}>
          <Button
            disabled={!input.current || !input.retirement}
            fluid
            onClick={() => {
              const current = Number.parseInt(input.current);
              const retirement = Number.parseInt(input.retirement);
              if (isNaN(current) || isNaN(retirement)) return;
              if (retirement <= current) {
                setOutput("Your retirement age must be greater than your current age.");
                return;
              }
              const year = new Date().getFullYear();
              const years = retirement - current;
              setOutput(
                `You have ${years} years left until you can retire. It's ${year}, so you can retire in ${year + years}.`
              );
            }}
          >
            Calculate Retirement
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

export default RetirementCalculator;
