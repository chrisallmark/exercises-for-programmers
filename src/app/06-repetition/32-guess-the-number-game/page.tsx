"use client";

import { Solution } from "@/components";
import markdown from "@/exercises/06-repetition/32-guess-the-number-game.md";
import { useState } from "react";
import { Button, Grid, Input, Message } from "semantic-ui-react";

const DIFFICULTIES = { Easy: 10, Medium: 100, Hard: 1000 };
type Difficulty = keyof typeof DIFFICULTIES;

const GuessTheNumberGame = () => {
  const [difficulty, setDifficulty] = useState<Difficulty>("Easy");
  const [secret, setSecret] = useState<number | null>(null);
  const [guess, setGuess] = useState("");
  const [guesses, setGuesses] = useState(0);
  const [hint, setHint] = useState<string | null>(null);
  const [won, setWon] = useState(false);

  const max = DIFFICULTIES[difficulty];

  const startGame = () => {
    setSecret(Math.floor(Math.random() * max) + 1);
    setGuess("");
    setGuesses(0);
    setHint(null);
    setWon(false);
  };

  const submitGuess = () => {
    if (secret === null) return;
    const n = parseInt(guess);
    const nextGuesses = guesses + 1;
    setGuesses(nextGuesses);
    setGuess("");
    if (isNaN(n)) { setHint("That's not a valid number — counted as a wrong guess."); return; }
    if (n === secret) { setWon(true); setHint(null); return; }
    setHint(n < secret ? `Too low! Try higher.` : `Too high! Try lower.`);
  };

  const reset = () => { setSecret(null); setGuess(""); setGuesses(0); setHint(null); setWon(false); };

  return (
    <Solution category="Repetition" exercise="Guess the Number Game"
      markdown={markdown}
    >
      <Grid stackable>
        {secret === null ? (
          <>
            <Grid.Column width={8}>
              <div className="ui labeled input fluid">
                <div className="ui label">Difficulty</div>
                <select
                  value={difficulty}
                  onChange={(e) => setDifficulty(e.target.value as Difficulty)}
                  style={{ flex: 1, border: "1px solid rgba(34,36,38,.15)", borderLeft: "none", padding: "0 0.5em" }}
                >
                  {(Object.keys(DIFFICULTIES) as Difficulty[]).map((d) => (
                    <option key={d} value={d}>{d} (1–{DIFFICULTIES[d]})</option>
                  ))}
                </select>
              </div>
            </Grid.Column>
            <Grid.Column width={8}>
              <Button primary onClick={startGame}>Start Game</Button>
            </Grid.Column>
          </>
        ) : won ? (
          <Grid.Column width={16}>
            <Message positive>
              <Message.Header>You got it!</Message.Header>
              <p>The number was {secret}. You guessed it in {guesses} attempt{guesses !== 1 ? "s" : ""}.</p>
            </Message>
            <Button onClick={reset}>Play Again</Button>
          </Grid.Column>
        ) : (
          <>
            <Grid.Column width={16}>
              <p>Guess a number between 1 and {max}. Guesses so far: {guesses}</p>
            </Grid.Column>
            {hint && (
              <Grid.Column width={16}>
                <Message info><p>{hint}</p></Message>
              </Grid.Column>
            )}
            <Grid.Column width={12}>
              <Input
                fluid
                label="Your guess"
                max={max}
                min="1"
                onChange={(e) => setGuess(e.target.value)}
                onKeyDown={(e: React.KeyboardEvent) => { if (e.key === "Enter") submitGuess(); }}
                placeholder={`1–${max}`}
                type="number"
                value={guess}
              />
            </Grid.Column>
            <Grid.Column width={2}>
              <Button disabled={!guess} fluid primary onClick={submitGuess}>Guess</Button>
            </Grid.Column>
            <Grid.Column width={2}>
              <Button fluid onClick={reset}>Quit</Button>
            </Grid.Column>
          </>
        )}
      </Grid>
    </Solution>
  );
};

export default GuessTheNumberGame;
