"use client";

import { Solution } from "@/components";
import markdown from "@/exercises/03-calculations/12-computing-simple-interest.md";
import { useState } from "react";
import { Button, Grid, Input } from "semantic-ui-react";

const ComputingSimpleInterest = () => {
  const [input, setInput] = useState({ principal: "", rate: "", years: "" });
  const [output, setOutput] = useState<{ amount: number; interest: number } | null>(null);
  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInput({ ...input, [event.target.name]: event.target.value });
  };
  return (
    <Solution category="Calculations" exercise="Computing Simple Interest"
      markdown={markdown}
    >
      <Grid stackable>
        <Grid.Column width={5}>
          <Input
            fluid
            label="Principal ($)"
            min="0"
            name="principal"
            onChange={handleInput}
            placeholder="e.g. 1500"
            step="0.01"
            type="number"
            value={input.principal}
          />
        </Grid.Column>
        <Grid.Column width={5}>
          <Input
            fluid
            label="Annual rate (%)"
            min="0"
            name="rate"
            onChange={handleInput}
            placeholder="e.g. 4.5"
            step="0.01"
            type="number"
            value={input.rate}
          />
        </Grid.Column>
        <Grid.Column width={4}>
          <Input
            fluid
            label="Years"
            min="0"
            name="years"
            onChange={handleInput}
            placeholder="e.g. 10"
            type="number"
            value={input.years}
          />
        </Grid.Column>
        <Grid.Column width={2}>
          <Button
            disabled={!input.principal || !input.rate || !input.years}
            fluid
            onClick={() => {
              const p = parseFloat(input.principal);
              const r = parseFloat(input.rate) / 100;
              const t = parseFloat(input.years);
              const amount = Math.ceil(p * (1 + r * t) * 100) / 100;
              setOutput({ amount, interest: Math.ceil((amount - p) * 100) / 100 });
            }}
          >
            Calculate
          </Button>
        </Grid.Column>
        {output && (
          <>
            <Grid.Column textAlign="center" width={8}>
              Final amount: ${output.amount.toFixed(2)}
            </Grid.Column>
            <Grid.Column textAlign="center" width={8}>
              Interest earned: ${output.interest.toFixed(2)}
            </Grid.Column>
          </>
        )}
      </Grid>
    </Solution>
  );
};

export default ComputingSimpleInterest;
