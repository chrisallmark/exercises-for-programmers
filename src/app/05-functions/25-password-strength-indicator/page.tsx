"use client";

import { Solution } from "@/components";
import { useState } from "react";
import { Button, Grid, Input, Label } from "semantic-ui-react";

type Strength = "Very Weak" | "Weak" | "Strong" | "Very Strong";

const passwordStrength = (password: string): Strength => {
  const hasUpper = /[A-Z]/.test(password);
  const hasLower = /[a-z]/.test(password);
  const hasDigit = /\d/.test(password);
  const hasSpecial = /[^A-Za-z0-9]/.test(password);
  const score = [hasUpper, hasLower, hasDigit, hasSpecial].filter(Boolean).length;

  if (password.length >= 8 && score === 4) return "Very Strong";
  if (password.length >= 6 && score >= 3) return "Strong";
  if (password.length >= 4 && score >= 2) return "Weak";
  return "Very Weak";
};

const STRENGTH_COLORS: Record<Strength, "red" | "orange" | "yellow" | "green"> = {
  "Very Weak": "red",
  "Weak": "orange",
  "Strong": "yellow",
  "Very Strong": "green",
};

const PasswordStrengthIndicator = () => {
  const [password, setPassword] = useState("");
  const [output, setOutput] = useState<Strength | null>(null);
  return (
    <Solution category="Functions" exercise="Password Strength Indicator">
      <Grid stackable>
        <Grid.Column width={12}>
          <Input
            fluid
            label="Password"
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter a password"
            type="text"
            value={password}
          />
        </Grid.Column>
        <Grid.Column width={4}>
          <Button
            disabled={!password.length}
            fluid
            onClick={() => setOutput(passwordStrength(password))}
          >
            Check Strength
          </Button>
        </Grid.Column>
        {output && (
          <Grid.Column textAlign="center" width={16}>
            <Label color={STRENGTH_COLORS[output]} size="large">
              {output}
            </Label>
          </Grid.Column>
        )}
      </Grid>
    </Solution>
  );
};

export default PasswordStrengthIndicator;
