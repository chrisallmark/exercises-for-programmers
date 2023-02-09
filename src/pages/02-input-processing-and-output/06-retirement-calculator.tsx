import { Solution } from "@/components";
import { useState } from "react";
import { Button, Grid, Input } from "semantic-ui-react";

const RetirementCalculator = () => {
  const [input, setInput] = useState({
    current: "",
    retirement: "",
  });
  const [output, setOutput] = useState("");
  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInput({ ...input, [event.target.name]: event.target.value });
  };
  return (
    <Solution
      category="Input, Processing & Output"
      exercise="Retirement Calculator"
    >
      <Grid stackable>
        <Grid.Column width={6}>
          <Input
            fluid
            label="What is your current age?"
            name="current"
            onChange={handleInput}
            placeholder="e.g. 25"
            type="number"
            value={input.current}
          />
        </Grid.Column>
        <Grid.Column width={6}>
          <Input
            fluid
            label="At what age would you like to retire? "
            name="retirement"
            onChange={handleInput}
            placeholder="e.g. 65"
            type="number"
            value={input.retirement}
          />
        </Grid.Column>
        <Grid.Column width={4}>
          <Button
            disabled={!input.current || !input.retirement}
            fluid
            onClick={() => {
              const year = new Date().getFullYear();
              const years =
                Number.parseInt(input.retirement) -
                Number.parseInt(input.current);
              setOutput(
                `You have ${years} years left until you can retire. It's ${year}, so you can retire in ${
                  year + years
                }.`
              );
            }}
          >
            Calculate Retirement
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

export default RetirementCalculator;
