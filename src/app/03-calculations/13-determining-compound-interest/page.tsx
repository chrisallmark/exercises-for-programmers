"use client";

import { Solution } from "@/components";
import { useState } from "react";
import { Button, Grid, Input } from "semantic-ui-react";

const DeterminingCompoundInterest = () => {
  const [input, setInput] = useState({
    principal: "",
    rate: "",
    years: "",
    periods: "",
  });
  const [output, setOutput] = useState<{ amount: number; interest: number } | null>(null);
  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInput({ ...input, [event.target.name]: event.target.value });
  };
  const isDisabled = !input.principal || !input.rate || !input.years || !input.periods;
  return (
    <Solution category="Calculations" exercise="Determining Compound Interest"
      markdown="/exercises/03-calculations/13-determining-compound-interest.md"
    >
      <Grid stackable>
        <Grid.Column width={4}>
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
        <Grid.Column width={4}>
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
        <Grid.Column width={4}>
          <Input
            fluid
            label="Periods per year"
            min="1"
            name="periods"
            onChange={handleInput}
            placeholder="e.g. 12"
            type="number"
            value={input.periods}
          />
        </Grid.Column>
        <Grid.Column width={16}>
          <Button
            disabled={isDisabled}
            onClick={() => {
              const p = parseFloat(input.principal);
              const r = parseFloat(input.rate) / 100;
              const t = parseFloat(input.years);
              const n = parseFloat(input.periods);
              const amount = Math.round(p * Math.pow(1 + r / n, n * t) * 100) / 100;
              setOutput({ amount, interest: Math.round((amount - p) * 100) / 100 });
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

export default DeterminingCompoundInterest;
