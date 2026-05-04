"use client";

import { Solution } from "@/components";
import markdown from "@/exercises/04-making-decisions/16-legal-driving-age.md";
import { useState } from "react";
import { Button, Grid, Input } from "semantic-ui-react";

const LEGAL_AGE = 16;

const LegalDrivingAge = () => {
  const [age, setAge] = useState("");
  const [output, setOutput] = useState<string | null>(null);
  return (
    <Solution category="Making Decisions" exercise="Legal Driving Age"
      markdown={markdown}
    >
      <Grid stackable>
        <Grid.Column width={14}>
          <Input
            fluid
            label="Your age"
            min="0"
            max="120"
            onChange={(e) => setAge(e.target.value)}
            placeholder="e.g. 18"
            type="number"
            value={age}
          />
        </Grid.Column>
        <Grid.Column width={2}>
          <Button
            disabled={!age}
            fluid
            onClick={() =>
              setOutput(
                parseInt(age) >= LEGAL_AGE
                  ? "You are old enough to legally drive."
                  : "You are not old enough to legally drive."
              )
            }
          >
            Check
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

export default LegalDrivingAge;
