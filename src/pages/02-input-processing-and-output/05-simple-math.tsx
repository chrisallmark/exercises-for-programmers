import { Solution } from "@/components";
import { useState } from "react";
import { Button, Grid, Input } from "semantic-ui-react";

const SimpleMath = () => {
  const [input, setInput] = useState({
    first: "",
    second: "",
  });
  const [output, setOutput] = useState(new Array<string>());
  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInput({ ...input, [event.target.name]: event.target.value });
  };
  return (
    <Solution category="Input, Processing & Output" exercise="Simple Math">
      <Grid stackable>
        <Grid.Column width={6}>
          <Input
            fluid
            label="What is the first number?"
            name="first"
            onChange={handleInput}
            placeholder="e.g. 10"
            type="number"
            value={input.first}
          />
        </Grid.Column>
        <Grid.Column width={6}>
          <Input
            fluid
            label="What is the second number?"
            name="second"
            onChange={handleInput}
            placeholder="e.g. 5"
            type="number"
            value={input.second}
          />
        </Grid.Column>
        <Grid.Column width={4}>
          <Button
            disabled={!input.first || !input.second}
            fluid
            onClick={() => {
              const first = Number.parseFloat(input.first);
              const second = Number.parseFloat(input.second);
              setOutput([
                `${input.first} + ${input.second} = ${first + second}`,
                `${input.first} - ${input.second} = ${first - second}`,
                `${input.first} * ${input.second} = ${first * second}`,
                `${input.first} / ${input.second} = ${first / second}`,
              ]);
            }}
          >
            Simple Math
          </Button>
        </Grid.Column>
        {output &&
          output.map((line) => (
            <Grid.Column key={line} textAlign="center" width={4}>
              {line}
            </Grid.Column>
          ))}
      </Grid>
    </Solution>
  );
};

export default SimpleMath;
