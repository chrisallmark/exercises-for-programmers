"use client";

import { Solution } from "@/components";
import { useState } from "react";
import { Button, Grid, Input, Message } from "semantic-ui-react";

const HandlingBadInput = () => {
  const [rate, setRate] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [output, setOutput] = useState<number | null>(null);

  const calculate = () => {
    const r = parseFloat(rate);
    if (isNaN(r)) { setError("Please enter a numeric value."); setOutput(null); return; }
    if (r === 0) { setError("The rate cannot be zero."); setOutput(null); return; }
    if (r < 0) { setError("The rate must be a positive number."); setOutput(null); return; }
    setError(null);
    setOutput(72 / r);
  };

  return (
    <Solution category="Repetition" exercise="Handling Bad Input">
      <Grid stackable>
        <Grid.Column width={12}>
          <Input
            fluid
            label="Annual interest rate (%)"
            min="0"
            onChange={(e) => { setRate(e.target.value); setError(null); }}
            placeholder="e.g. 6"
            step="0.1"
            type="number"
            value={rate}
          />
        </Grid.Column>
        <Grid.Column width={4}>
          <Button disabled={!rate} fluid onClick={calculate}>
            Calculate
          </Button>
        </Grid.Column>
        {error && (
          <Grid.Column width={16}>
            <Message negative><p>{error}</p></Message>
          </Grid.Column>
        )}
        {output !== null && !error && (
          <Grid.Column textAlign="center" width={16}>
            At {rate}% interest, your investment will double in approximately{" "}
            {output.toFixed(1)} years (Rule of 72).
          </Grid.Column>
        )}
      </Grid>
    </Solution>
  );
};

export default HandlingBadInput;
