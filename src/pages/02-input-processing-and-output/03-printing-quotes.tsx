import { Solution } from "@/components";
import { useState } from "react";
import { Button, Grid, Input } from "semantic-ui-react";

const PrintingQuotes = () => {
  const [input, setInput] = useState({
    quote: "",
    quoter: "",
  });
  const [output, setOutput] = useState("");
  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInput({ ...input, [event.target.name]: event.target.value });
  };
  return (
    <Solution category="Input, Processing & Output" exercise="Printing Quotes">
      <Grid stackable>
        <Grid.Column width={7}>
          <Input
            fluid
            label="What is the quote?"
            name="quote"
            onChange={handleInput}
            placeholder="e.g. These aren't the droids you're looking for."
            value={input.quote}
          />
        </Grid.Column>
        <Grid.Column width={7}>
          <Input
            fluid
            label="Who said it?"
            name="quoter"
            onChange={handleInput}
            placeholder="e.g. Obi-Wan Kenobi"
            value={input.quoter}
          />
        </Grid.Column>
        <Grid.Column width={2}>
          <Button
            disabled={!input.quote.length || !input.quoter.length}
            fluid
            onClick={() =>
              setOutput(input.quoter + ' says, "' + input.quote + '"')
            }
          >
            Print Quote
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

export default PrintingQuotes;
