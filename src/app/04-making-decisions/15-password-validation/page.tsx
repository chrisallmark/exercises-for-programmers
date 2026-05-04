"use client";

import { Solution } from "@/components";
import markdown from "@/exercises/04-making-decisions/15-password-validation.md";
import { useState } from "react";
import { Button, Grid, Input } from "semantic-ui-react";

const KNOWN_PASSWORD = "abc$123";

const PasswordValidation = () => {
  const [password, setPassword] = useState("");
  const [output, setOutput] = useState<string | null>(null);
  return (
    <Solution category="Making Decisions" exercise="Password Validation"
      markdown={markdown}
    >
      <Grid stackable>
        <Grid.Column width={14}>
          <Input
            fluid
            label="Password"
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            type="password"
            value={password}
          />
        </Grid.Column>
        <Grid.Column width={2}>
          <Button
            disabled={!password.length}
            fluid
            onClick={() =>
              setOutput(password === KNOWN_PASSWORD ? "Welcome!" : "I don't know you.")
            }
          >
            Log In
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

export default PasswordValidation;
