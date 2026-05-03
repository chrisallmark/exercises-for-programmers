"use client";

import { Solution } from "@/components";
import { useState } from "react";
import { Button, Grid, Input } from "semantic-ui-react";

const LOWERCASE = "abcdefghijklmnopqrstuvwxyz";
const UPPERCASE = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const DIGITS = "0123456789";
const SPECIALS = "!@#$%^&*()-_=+[]{}|;:,.<>?";

const pick = (chars: string) => chars[Math.floor(Math.random() * chars.length)];

const generatePassword = (minLength: number, numSpecial: number, numDigits: number): string => {
  const required: string[] = [];
  for (let i = 0; i < numSpecial; i++) required.push(pick(SPECIALS));
  for (let i = 0; i < numDigits; i++) required.push(pick(DIGITS));
  const remaining = Math.max(0, minLength - required.length);
  const pool = LOWERCASE + UPPERCASE;
  for (let i = 0; i < remaining; i++) required.push(pick(pool));
  return required.sort(() => Math.random() - 0.5).join("");
};

const PasswordGenerator = () => {
  const [input, setInput] = useState({ length: "8", special: "2", digits: "2" });
  const [password, setPassword] = useState<string | null>(null);
  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInput({ ...input, [event.target.name]: event.target.value });
  };
  const isDisabled = !input.length || !input.special || !input.digits;
  return (
    <Solution category="Data Structures" exercise="Password Generator">
      <Grid stackable>
        <Grid.Column width={5}>
          <Input
            fluid
            label="Minimum length"
            min="1"
            name="length"
            onChange={handleInput}
            placeholder="e.g. 8"
            type="number"
            value={input.length}
          />
        </Grid.Column>
        <Grid.Column width={5}>
          <Input
            fluid
            label="Special characters"
            min="0"
            name="special"
            onChange={handleInput}
            placeholder="e.g. 2"
            type="number"
            value={input.special}
          />
        </Grid.Column>
        <Grid.Column width={4}>
          <Input
            fluid
            label="Digits"
            min="0"
            name="digits"
            onChange={handleInput}
            placeholder="e.g. 2"
            type="number"
            value={input.digits}
          />
        </Grid.Column>
        <Grid.Column width={2}>
          <Button
            disabled={isDisabled}
            fluid
            onClick={() =>
              setPassword(
                generatePassword(
                  parseInt(input.length),
                  parseInt(input.special),
                  parseInt(input.digits)
                )
              )
            }
          >
            Generate
          </Button>
        </Grid.Column>
        {password && (
          <Grid.Column textAlign="center" width={16}>
            <code style={{ fontSize: "1.3em", letterSpacing: "0.1em" }}>{password}</code>
          </Grid.Column>
        )}
      </Grid>
    </Solution>
  );
};

export default PasswordGenerator;
