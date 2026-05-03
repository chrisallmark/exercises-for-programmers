"use client";

import { Solution } from "@/components";
import { useState } from "react";
import { Button, Grid, Input } from "semantic-ui-react";

const PizzaParty = () => {
  const [input, setInput] = useState({ pizzas: "", slices: "", people: "" });
  const [output, setOutput] = useState<{ perPerson: number; leftover: number } | null>(null);
  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInput({ ...input, [event.target.name]: event.target.value });
  };
  return (
    <Solution category="Calculations" exercise="Pizza Party">
      <Grid stackable>
        <Grid.Column width={5}>
          <Input
            fluid
            label="Number of pizzas"
            min="1"
            name="pizzas"
            onChange={handleInput}
            placeholder="e.g. 3"
            type="number"
            value={input.pizzas}
          />
        </Grid.Column>
        <Grid.Column width={5}>
          <Input
            fluid
            label="Slices per pizza"
            min="1"
            name="slices"
            onChange={handleInput}
            placeholder="e.g. 8"
            type="number"
            value={input.slices}
          />
        </Grid.Column>
        <Grid.Column width={4}>
          <Input
            fluid
            label="Number of people"
            min="1"
            name="people"
            onChange={handleInput}
            placeholder="e.g. 7"
            type="number"
            value={input.people}
          />
        </Grid.Column>
        <Grid.Column width={2}>
          <Button
            disabled={!input.pizzas || !input.slices || !input.people}
            fluid
            onClick={() => {
              const total = parseInt(input.pizzas) * parseInt(input.slices);
              const people = parseInt(input.people);
              setOutput({
                perPerson: Math.floor(total / people),
                leftover: total % people,
              });
            }}
          >
            Divide
          </Button>
        </Grid.Column>
        {output && (
          <>
            <Grid.Column textAlign="center" width={8}>
              {output.perPerson} slice{output.perPerson !== 1 ? "s" : ""} per person
            </Grid.Column>
            <Grid.Column textAlign="center" width={8}>
              {output.leftover} slice{output.leftover !== 1 ? "s" : ""} left over
            </Grid.Column>
          </>
        )}
      </Grid>
    </Solution>
  );
};

export default PizzaParty;
