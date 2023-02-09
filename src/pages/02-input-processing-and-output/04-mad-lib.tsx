import { Solution } from "@/components";
import { SyntheticEvent, useState } from "react";
import { Button, Grid, Input } from "semantic-ui-react";

const MadLib = () => {
  const [input, setInput] = useState({
    noun: "",
    verb: "",
    adjective: "",
    adverb: "",
  });
  const [output, setOutput] = useState("");
  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInput({ ...input, [event.target.name]: event.target.value });
  };
  return (
    <Solution category="Input, Processing & Output" exercise="Mad Lib">
      <Grid stackable>
        <Grid.Column width={7}>
          <Input
            fluid
            label="Enter a noun:"
            name="noun"
            onChange={handleInput}
            placeholder="e.g. dog"
            value={input.noun}
          />
        </Grid.Column>
        <Grid.Column width={7}>
          <Input
            fluid
            label="Enter a verb:"
            name="verb"
            onChange={handleInput}
            placeholder="e.g. walk"
            value={input.verb}
          />
        </Grid.Column>
        <Grid.Column width={7}>
          <Input
            fluid
            label="Enter an adjective:"
            name="adjective"
            onChange={handleInput}
            placeholder="e.g. blue"
            value={input.adjective}
          />
        </Grid.Column>
        <Grid.Column width={7}>
          <Input
            fluid
            label="Enter an adverb:"
            name="adverb"
            onChange={handleInput}
            placeholder="e.g. quickly"
            value={input.adverb}
          />
        </Grid.Column>
        <Grid.Column width={2}>
          <Button
            disabled={
              !input.noun.length ||
              !input.verb.length ||
              !input.adjective.length ||
              !input.adverb.length
            }
            fluid
            onClick={() =>
              setOutput(
                `Do you ${input.verb} your ${input.adjective} ${input.noun} ${input.adverb}? That's hilarious!`
              )
            }
          >
            Mad Lib
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

export default MadLib;
