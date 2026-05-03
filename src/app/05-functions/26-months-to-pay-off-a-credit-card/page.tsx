"use client";

import { Solution } from "@/components";
import { useState } from "react";
import { Button, Grid, Input } from "semantic-ui-react";

const monthsToPayOff = (balance: number, apr: number, payment: number): number => {
  const i = apr / 100 / 12;
  if (payment <= balance * i) return Infinity;
  return Math.ceil(-Math.log(1 - (i * balance) / payment) / Math.log(1 + i));
};

const MonthsToPayOffACreditCard = () => {
  const [input, setInput] = useState({ balance: "", apr: "", payment: "" });
  const [output, setOutput] = useState<string | null>(null);
  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInput({ ...input, [event.target.name]: event.target.value });
  };
  const isDisabled = !input.balance || !input.apr || !input.payment;
  return (
    <Solution category="Functions" exercise="Months to Pay Off a Credit Card">
      <Grid stackable>
        <Grid.Column width={5}>
          <Input
            fluid
            label="Balance ($)"
            min="0"
            name="balance"
            onChange={handleInput}
            placeholder="e.g. 5000"
            step="0.01"
            type="number"
            value={input.balance}
          />
        </Grid.Column>
        <Grid.Column width={5}>
          <Input
            fluid
            label="APR (%)"
            min="0"
            max="100"
            name="apr"
            onChange={handleInput}
            placeholder="e.g. 19.99"
            step="0.01"
            type="number"
            value={input.apr}
          />
        </Grid.Column>
        <Grid.Column width={4}>
          <Input
            fluid
            label="Monthly payment ($)"
            min="0"
            name="payment"
            onChange={handleInput}
            placeholder="e.g. 150"
            step="0.01"
            type="number"
            value={input.payment}
          />
        </Grid.Column>
        <Grid.Column width={2}>
          <Button disabled={isDisabled} fluid onClick={() => {
            const months = monthsToPayOff(
              parseFloat(input.balance),
              parseFloat(input.apr),
              parseFloat(input.payment)
            );
            setOutput(
              !isFinite(months)
                ? "Your payment is too low to ever pay off the balance."
                : `It will take ${months} month${months !== 1 ? "s" : ""} (${Math.floor(months / 12)} year${Math.floor(months / 12) !== 1 ? "s" : ""}, ${months % 12} month${months % 12 !== 1 ? "s" : ""}) to pay off the balance.`
            );
          }}>
            Calculate
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

export default MonthsToPayOffACreditCard;
