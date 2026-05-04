"use client";

import { Solution } from "@/components";
import markdown from "@/exercises/04-making-decisions/19-bmi-calculator.md";
import { useState } from "react";
import { Button, Grid, Input } from "semantic-ui-react";

const BmiCalculator = () => {
  const [input, setInput] = useState({ weight: "", height: "" });
  const [output, setOutput] = useState<{ bmi: number; category: string } | null>(null);
  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInput({ ...input, [event.target.name]: event.target.value });
  };
  return (
    <Solution category="Making Decisions" exercise="BMI Calculator"
      markdown={markdown}
    >
      <Grid stackable>
        <Grid.Column width={6}>
          <Input
            fluid
            label="Weight (lbs)"
            min="0"
            name="weight"
            onChange={handleInput}
            placeholder="e.g. 160"
            type="number"
            value={input.weight}
          />
        </Grid.Column>
        <Grid.Column width={6}>
          <Input
            fluid
            label="Height (inches)"
            min="0"
            name="height"
            onChange={handleInput}
            placeholder="e.g. 68"
            type="number"
            value={input.height}
          />
        </Grid.Column>
        <Grid.Column width={4}>
          <Button
            disabled={!input.weight || !input.height}
            fluid
            onClick={() => {
              const h = parseFloat(input.height);
              const bmi = (parseFloat(input.weight) / (h * h)) * 703;
              const category =
                bmi < 18.5 ? "Underweight" : bmi <= 25 ? "Normal" : "Overweight";
              setOutput({ bmi: Math.round(bmi * 10) / 10, category });
            }}
          >
            Calculate BMI
          </Button>
        </Grid.Column>
        {output && (
          <>
            <Grid.Column textAlign="center" width={8}>
              BMI: {output.bmi}
            </Grid.Column>
            <Grid.Column textAlign="center" width={8}>
              {output.category}
            </Grid.Column>
          </>
        )}
      </Grid>
    </Solution>
  );
};

export default BmiCalculator;
