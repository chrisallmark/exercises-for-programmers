"use client";

import { Solution } from "@/components";
import markdown from "@/exercises/04-making-decisions/17-blood-alchohol-calculator.md";
import { useState } from "react";
import { Button, Grid, Input } from "semantic-ui-react";

const LEGAL_LIMIT = 0.08;

const BloodAlcoholCalculator = () => {
  const [input, setInput] = useState({
    weight: "",
    drinks: "",
    abv: "",
    hours: "",
  });
  const [gender, setGender] = useState<"M" | "F">("M");
  const [output, setOutput] = useState<{ bac: number; legal: boolean } | null>(null);
  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInput({ ...input, [event.target.name]: event.target.value });
  };
  const isDisabled = !input.weight || !input.drinks || !input.abv || !input.hours;
  return (
    <Solution category="Making Decisions" exercise="Blood Alcohol Calculator"
      markdown={markdown}
    >
      <Grid stackable>
        <Grid.Column width={4}>
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
        <Grid.Column width={4}>
          <div className="ui labeled input fluid">
            <div className="ui label">Gender</div>
            <select
              value={gender}
              onChange={(e) => setGender(e.target.value as "M" | "F")}
              style={{ flex: 1, border: "1px solid rgba(34,36,38,.15)", borderLeft: "none", padding: "0 0.5em" }}
            >
              <option value="M">Male</option>
              <option value="F">Female</option>
            </select>
          </div>
        </Grid.Column>
        <Grid.Column width={4}>
          <Input
            fluid
            label="Drinks consumed"
            min="0"
            name="drinks"
            onChange={handleInput}
            placeholder="e.g. 3"
            type="number"
            value={input.drinks}
          />
        </Grid.Column>
        <Grid.Column width={4}>
          <Input
            fluid
            label="ABV (%)"
            min="0"
            max="100"
            name="abv"
            onChange={handleInput}
            placeholder="e.g. 5"
            step="0.1"
            type="number"
            value={input.abv}
          />
        </Grid.Column>
        <Grid.Column width={12}>
          <Input
            fluid
            label="Hours since last drink"
            min="0"
            name="hours"
            onChange={handleInput}
            placeholder="e.g. 1"
            step="0.5"
            type="number"
            value={input.hours}
          />
        </Grid.Column>
        <Grid.Column width={4}>
          <Button
            disabled={isDisabled}
            fluid
            onClick={() => {
              const r = gender === "M" ? 0.73 : 0.66;
              const a = parseFloat(input.drinks) * (parseFloat(input.abv) / 100) * 14;
              const w = parseFloat(input.weight);
              const h = parseFloat(input.hours);
              const bac = Math.max(0, (a * 5.14) / (w * r) - 0.015 * h);
              setOutput({ bac: Math.round(bac * 1000) / 1000, legal: bac < LEGAL_LIMIT });
            }}
          >
            Calculate BAC
          </Button>
        </Grid.Column>
        {output && (
          <>
            <Grid.Column textAlign="center" width={8}>
              BAC: {output.bac.toFixed(3)}
            </Grid.Column>
            <Grid.Column textAlign="center" width={8}>
              {output.legal
                ? "You are under the legal limit (0.08)."
                : "You are OVER the legal limit (0.08). Do not drive."}
            </Grid.Column>
          </>
        )}
      </Grid>
    </Solution>
  );
};

export default BloodAlcoholCalculator;
