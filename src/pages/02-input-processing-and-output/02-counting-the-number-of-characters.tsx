import { Solution } from "@/components";
import { useState } from "react";
import { Button, Grid, Input } from "semantic-ui-react";

const CountingTheNumberOfCharacters = () => {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  return (
    <Solution
      category="Input, Processing & Output"
      exercise="Counting the Number of Characters"
    >
      <Grid stackable>
        <Grid.Column width={12}>
          <Input
            fluid
            label="What is the input string?"
            onChange={(event) => setInput(event.target.value)}
            placeholder="e.g. Homer"
            value={input}
          />
        </Grid.Column>
        <Grid.Column width={4}>
          <Button
            disabled={!input.length}
            fluid
            onClick={() =>
              setOutput(
                input.length ? `${input} has ${input.length} characters.` : ""
              )
            }
          >
            Count the Number of Characters
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

export default CountingTheNumberOfCharacters;
