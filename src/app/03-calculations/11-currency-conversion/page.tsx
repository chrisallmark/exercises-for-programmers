"use client";

import { Solution } from "@/components";
import { useState } from "react";
import { Button, Grid, Input } from "semantic-ui-react";

const CurrencyConversion = () => {
  const [input, setInput] = useState({ amount: "", rate: "" });
  const [output, setOutput] = useState<number | null>(null);
  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInput({ ...input, [event.target.name]: event.target.value });
  };
  return (
    <Solution category="Calculations" exercise="Currency Conversion">
      <Grid stackable>
        <Grid.Column width={6}>
          <Input
            fluid
            label="Amount (EUR €)"
            min="0"
            name="amount"
            onChange={handleInput}
            placeholder="e.g. 100"
            step="0.01"
            type="number"
            value={input.amount}
          />
        </Grid.Column>
        <Grid.Column width={6}>
          <Input
            fluid
            label="Exchange rate (USD per EUR)"
            min="0"
            name="rate"
            onChange={handleInput}
            placeholder="e.g. 1.08"
            step="0.0001"
            type="number"
            value={input.rate}
          />
        </Grid.Column>
        <Grid.Column width={4}>
          <Button
            disabled={!input.amount || !input.rate}
            fluid
            onClick={() => {
              const usd = parseFloat(input.amount) * parseFloat(input.rate);
              setOutput(Math.ceil(usd * 100) / 100);
            }}
          >
            Convert
          </Button>
        </Grid.Column>
        {output !== null && (
          <Grid.Column textAlign="center" width={16}>
            €{parseFloat(input.amount).toFixed(2)} EUR = ${output!.toFixed(2)} USD
          </Grid.Column>
        )}
      </Grid>
    </Solution>
  );
};

export default CurrencyConversion;
