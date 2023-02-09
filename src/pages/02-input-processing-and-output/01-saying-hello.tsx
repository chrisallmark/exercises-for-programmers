import { Solution } from "@/components";
import { useState } from "react";
import { Button, Grid, Input } from "semantic-ui-react";

const SayingHello = () => {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  return (
    <Solution category="Input, Processing & Output" exercise="Saying Hello">
      <Grid stackable>
        <Grid.Column width={14}>
          <Input
            fluid
            label="What is your name?"
            onChange={(event) => setInput(event.target.value)}
            placeholder="e.g. Brian"
            value={input}
          />
        </Grid.Column>
        <Grid.Column width={2}>
          <Button
            disabled={!input.length}
            fluid
            onClick={() =>
              setOutput(
                input.length ? `Hello, ${input}, nice to meet you!` : ""
              )
            }
          >
            Say Hello
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

export default SayingHello;
