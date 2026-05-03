"use client";

import { Solution } from "@/components";
import { useState } from "react";
import { Button, Grid, Input } from "semantic-ui-react";

const isAnagram = (a: string, b: string): boolean => {
  const normalise = (s: string) => s.toLowerCase().replace(/\s/g, "").split("").sort().join("");
  return a.length > 0 && b.length > 0 && normalise(a) === normalise(b);
};

const AnagramChecker = () => {
  const [input, setInput] = useState({ word1: "", word2: "" });
  const [output, setOutput] = useState<string | null>(null);
  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInput({ ...input, [event.target.name]: event.target.value.trim() });
  };
  return (
    <Solution category="Functions" exercise="Anagram Checker">
      <Grid stackable>
        <Grid.Column width={7}>
          <Input
            fluid
            label="First word"
            name="word1"
            onChange={handleInput}
            placeholder="e.g. listen"
            value={input.word1}
          />
        </Grid.Column>
        <Grid.Column width={7}>
          <Input
            fluid
            label="Second word"
            name="word2"
            onChange={handleInput}
            placeholder="e.g. silent"
            value={input.word2}
          />
        </Grid.Column>
        <Grid.Column width={2}>
          <Button
            disabled={!input.word1 || !input.word2}
            fluid
            onClick={() =>
              setOutput(
                isAnagram(input.word1, input.word2)
                  ? `"${input.word1}" and "${input.word2}" are anagrams.`
                  : `"${input.word1}" and "${input.word2}" are not anagrams.`
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

export default AnagramChecker;
