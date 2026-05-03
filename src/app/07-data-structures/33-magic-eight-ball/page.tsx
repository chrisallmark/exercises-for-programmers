"use client";

import { Solution } from "@/components";
import { useState } from "react";
import { Button, Grid } from "semantic-ui-react";

const RESPONSES = [
  "It is certain.",
  "It is decidedly so.",
  "Without a doubt.",
  "Yes, definitely.",
  "You may rely on it.",
  "As I see it, yes.",
  "Most likely.",
  "Outlook good.",
  "Yes.",
  "Signs point to yes.",
  "Reply hazy, try again.",
  "Ask again later.",
  "Better not tell you now.",
  "Cannot predict now.",
  "Concentrate and ask again.",
  "Don't count on it.",
  "My reply is no.",
  "My sources say no.",
  "Outlook not so good.",
  "Very doubtful.",
];

const MagicEightBall = () => {
  const [response, setResponse] = useState<string | null>(null);
  return (
    <Solution category="Data Structures" exercise="Magic Eight Ball">
      <Grid stackable>
        <Grid.Column width={16} textAlign="center">
          <Button
            primary
            size="large"
            onClick={() => setResponse(RESPONSES[Math.floor(Math.random() * RESPONSES.length)])}
          >
            🎱 Ask the Magic Eight Ball
          </Button>
        </Grid.Column>
        {response && (
          <Grid.Column textAlign="center" width={16}>
            <p style={{ fontSize: "1.4em", fontStyle: "italic" }}>{response}</p>
          </Grid.Column>
        )}
      </Grid>
    </Solution>
  );
};

export default MagicEightBall;
