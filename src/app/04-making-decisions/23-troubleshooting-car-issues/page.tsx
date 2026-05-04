"use client";

import { Solution } from "@/components";
import markdown from "@/exercises/04-making-decisions/23-troubleshooting-car-issues.md";
import { useState } from "react";
import { Button, Grid, Message } from "semantic-ui-react";

type QuestionNode = { type: "question"; text: string; yes: string; no: string };
type AnswerNode = { type: "answer"; text: string };
type Node = QuestionNode | AnswerNode;

const TREE: Record<string, Node> = {
  start: { type: "question", text: "Does the car make any noise when you turn the key?", yes: "q2", no: "q6" },
  q2: { type: "question", text: "Does it sound like it is trying to start (engine cranks)?", yes: "q3", no: "q5" },
  q3: { type: "question", text: "Is the fuel gauge showing empty?", yes: "a1", no: "q4" },
  q4: { type: "question", text: "Is the check engine light on?", yes: "a2", no: "a3" },
  q5: { type: "question", text: "Does it click repeatedly (not just once)?", yes: "a4", no: "a5" },
  q6: { type: "question", text: "Do the interior lights or dashboard work?", yes: "a6", no: "a7" },
  a1: { type: "answer", text: "Your tank is empty. Add fuel and try again." },
  a2: { type: "answer", text: "Have a mechanic read the error codes with a diagnostic tool." },
  a3: { type: "answer", text: "The spark plugs or fuel system may need attention. Have it checked by a mechanic." },
  a4: { type: "answer", text: "Your battery may be weak or the terminals corroded. Try jump-starting the car, or replace the battery." },
  a5: { type: "answer", text: "Your starter may have failed. Have it inspected by a mechanic." },
  a6: { type: "answer", text: "Your starter relay or ignition switch may have failed. Have it inspected." },
  a7: { type: "answer", text: "Your battery is likely dead. Try jump-starting, or charge and replace it." },
};

const TroubleshootingCarIssues = () => {
  const [current, setCurrent] = useState<string | null>(null);
  const [history, setHistory] = useState<Array<{ question: string; answer: string }>>([]);

  const node = current ? TREE[current] : null;

  const answer = (choice: "yes" | "no") => {
    if (!node || node.type !== "question") return;
    setHistory((h) => [...h, { question: node.text, answer: choice === "yes" ? "Yes" : "No" }]);
    setCurrent(choice === "yes" ? node.yes : node.no);
  };

  const reset = () => { setCurrent(null); setHistory([]); };

  return (
    <Solution category="Making Decisions" exercise="Troubleshooting Car Issues"
      markdown={markdown}
    >
      <Grid stackable>
        {!current && (
          <Grid.Column width={16}>
            <Button primary onClick={() => setCurrent("start")}>
              Start Diagnosis
            </Button>
          </Grid.Column>
        )}

        {history.length > 0 && (
          <Grid.Column width={16}>
            {history.map((entry, i) => (
              <p key={i} style={{ color: "#666", marginBottom: "0.25em" }}>
                <strong>Q:</strong> {entry.question} — <strong>{entry.answer}</strong>
              </p>
            ))}
          </Grid.Column>
        )}

        {node?.type === "question" && (
          <Grid.Column width={16}>
            <p style={{ fontSize: "1.1em", marginBottom: "1em" }}>
              <strong>{node.text}</strong>
            </p>
            <Button primary onClick={() => answer("yes")}>Yes</Button>
            <Button onClick={() => answer("no")}>No</Button>
          </Grid.Column>
        )}

        {node?.type === "answer" && (
          <Grid.Column width={16}>
            <Message positive>
              <Message.Header>Diagnosis</Message.Header>
              <p>{node.text}</p>
            </Message>
            <Button onClick={reset}>Start Over</Button>
          </Grid.Column>
        )}
      </Grid>
    </Solution>
  );
};

export default TroubleshootingCarIssues;
