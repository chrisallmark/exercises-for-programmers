"use client";

import { Solution } from "@/components";
import markdown from "@/exercises/10-full-programs/57-trivia-app.md";
import { useState } from "react";
import { Button, Grid, Message } from "semantic-ui-react";

type Question = { question: string; correct: string; distractors: string[] };

const QUESTIONS: Question[] = [
  { question: "What is the capital of France?", correct: "Paris", distractors: ["London", "Berlin", "Madrid"] },
  { question: "Which planet is closest to the Sun?", correct: "Mercury", distractors: ["Venus", "Earth", "Mars"] },
  { question: "How many sides does a hexagon have?", correct: "6", distractors: ["5", "7", "8"] },
  { question: "Who wrote Romeo and Juliet?", correct: "William Shakespeare", distractors: ["Charles Dickens", "Jane Austen", "Mark Twain"] },
  { question: "What is the chemical symbol for water?", correct: "H₂O", distractors: ["CO₂", "O₂", "NaCl"] },
  { question: "What is 12 × 12?", correct: "144", distractors: ["122", "132", "148"] },
  { question: "Which ocean is the largest?", correct: "Pacific", distractors: ["Atlantic", "Indian", "Arctic"] },
  { question: "What year did World War II end?", correct: "1945", distractors: ["1939", "1942", "1918"] },
  { question: "How many bones are in the adult human body?", correct: "206", distractors: ["196", "216", "186"] },
  { question: "What is the speed of light (approx)?", correct: "300,000 km/s", distractors: ["150,000 km/s", "450,000 km/s", "30,000 km/s"] },
];

const shuffle = <T,>(arr: T[]): T[] => [...arr].sort(() => Math.random() - 0.5);

const buildQuestion = (q: Question) => ({
  ...q,
  options: shuffle([q.correct, ...q.distractors]),
});

type GameState = "idle" | "playing" | "wrong" | "won";

const TriviaApp = () => {
  const [state, setState] = useState<GameState>("idle");
  const [queue, setQueue] = useState<ReturnType<typeof buildQuestion>[]>([]);
  const [current, setCurrent] = useState<ReturnType<typeof buildQuestion> | null>(null);
  const [score, setScore] = useState(0);

  const start = () => {
    const shuffled = shuffle(QUESTIONS).map(buildQuestion);
    setCurrent(shuffled[0]);
    setQueue(shuffled.slice(1));
    setScore(0);
    setState("playing");
  };

  const answer = (choice: string) => {
    if (!current) return;
    if (choice !== current.correct) { setState("wrong"); return; }
    const nextScore = score + 1;
    setScore(nextScore);
    if (queue.length === 0) { setState("won"); return; }
    setCurrent(queue[0]);
    setQueue(queue.slice(1));
  };

  return (
    <Solution category="Full Programs" exercise="Trivia App"
      markdown={markdown}
    >
      <Grid stackable>
        {state === "idle" && (
          <Grid.Column width={16}>
            <p>{QUESTIONS.length} questions. Answer incorrectly and the game ends.</p>
            <Button primary onClick={start}>Start Game</Button>
          </Grid.Column>
        )}

        {state === "playing" && current && (
          <>
            <Grid.Column width={16}>
              <p style={{ color: "#666" }}>Score: {score} | Remaining: {queue.length + 1}</p>
              <p style={{ fontSize: "1.2em", fontWeight: "bold" }}>{current.question}</p>
            </Grid.Column>
            {current.options.map((opt) => (
              <Grid.Column key={opt} width={8}>
                <Button fluid onClick={() => answer(opt)}>{opt}</Button>
              </Grid.Column>
            ))}
          </>
        )}

        {state === "wrong" && current && (
          <Grid.Column width={16}>
            <Message negative>
              <Message.Header>Wrong!</Message.Header>
              <p>
                The correct answer was <strong>{current.correct}</strong>.
                You scored {score} out of {QUESTIONS.length}.
              </p>
            </Message>
            <Button primary onClick={start}>Play Again</Button>
          </Grid.Column>
        )}

        {state === "won" && (
          <Grid.Column width={16}>
            <Message positive>
              <Message.Header>You won! 🎉</Message.Header>
              <p>You answered all {QUESTIONS.length} questions correctly!</p>
            </Message>
            <Button primary onClick={start}>Play Again</Button>
          </Grid.Column>
        )}
      </Grid>
    </Solution>
  );
};

export default TriviaApp;
