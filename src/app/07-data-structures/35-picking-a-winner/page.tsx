"use client";

import { Solution } from "@/components";
import { useState } from "react";
import { Button, Grid, Input, List, Message } from "semantic-ui-react";

const PickingAWinner = () => {
  const [name, setName] = useState("");
  const [contestants, setContestants] = useState<string[]>([]);
  const [winner, setWinner] = useState<string | null>(null);

  const addContestant = () => {
    if (!name.trim()) return;
    setContestants([...contestants, name.trim()]);
    setName("");
    setWinner(null);
  };

  const pickWinner = () => {
    if (contestants.length === 0) return;
    setWinner(contestants[Math.floor(Math.random() * contestants.length)]);
  };

  return (
    <Solution category="Data Structures" exercise="Picking a Winner">
      <Grid stackable>
        <Grid.Column width={12}>
          <Input
            fluid
            label="Contestant name"
            onChange={(e) => setName(e.target.value)}
            onKeyDown={(e: React.KeyboardEvent) => { if (e.key === "Enter") addContestant(); }}
            placeholder="e.g. Alice"
            value={name}
          />
        </Grid.Column>
        <Grid.Column width={4}>
          <Button disabled={!name.trim()} fluid onClick={addContestant}>Add</Button>
        </Grid.Column>
        {contestants.length > 0 && (
          <Grid.Column width={16}>
            <p><strong>Contestants ({contestants.length}):</strong></p>
            <List bulleted>
              {contestants.map((c, i) => <List.Item key={i}>{c}</List.Item>)}
            </List>
            <Button primary onClick={pickWinner}>Pick a Winner!</Button>
          </Grid.Column>
        )}
        {winner && (
          <Grid.Column width={16}>
            <Message positive>
              <Message.Header>🏆 Winner!</Message.Header>
              <p>{winner}</p>
            </Message>
          </Grid.Column>
        )}
      </Grid>
    </Solution>
  );
};

export default PickingAWinner;
