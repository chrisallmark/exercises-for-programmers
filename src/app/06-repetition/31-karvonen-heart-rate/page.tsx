"use client";

import { Solution } from "@/components";
import { useState } from "react";
import { Button, Grid, Input, Table } from "semantic-ui-react";

const INTENSITIES = [55, 60, 65, 70, 75, 80, 85, 90, 95];

const targetHeartRate = (age: number, resting: number, intensity: number) =>
  Math.round(((220 - age - resting) * (intensity / 100)) + resting);

const KarvonenHeartRate = () => {
  const [input, setInput] = useState({ age: "", resting: "" });
  const [rows, setRows] = useState<Array<{ intensity: number; bpm: number }> | null>(null);
  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInput({ ...input, [event.target.name]: event.target.value });
  };
  return (
    <Solution category="Repetition" exercise="Karvonen Heart Rate"
      markdown="/exercises/06-repetition/31-karvonen-heart-rate.md"
    >
      <Grid stackable>
        <Grid.Column width={6}>
          <Input
            fluid
            label="Age (years)"
            max="120"
            min="1"
            name="age"
            onChange={handleInput}
            placeholder="e.g. 30"
            type="number"
            value={input.age}
          />
        </Grid.Column>
        <Grid.Column width={6}>
          <Input
            fluid
            label="Resting heart rate (bpm)"
            max="200"
            min="30"
            name="resting"
            onChange={handleInput}
            placeholder="e.g. 65"
            type="number"
            value={input.resting}
          />
        </Grid.Column>
        <Grid.Column width={4}>
          <Button
            disabled={!input.age || !input.resting}
            fluid
            onClick={() => {
              const age = parseInt(input.age);
              const resting = parseInt(input.resting);
              setRows(INTENSITIES.map((i) => ({ intensity: i, bpm: targetHeartRate(age, resting, i) })));
            }}
          >
            Calculate
          </Button>
        </Grid.Column>
        {rows && (
          <Grid.Column width={16}>
            <Table celled>
              <Table.Header>
                <Table.Row>
                  <Table.HeaderCell>Intensity (%)</Table.HeaderCell>
                  <Table.HeaderCell>Target Heart Rate (bpm)</Table.HeaderCell>
                </Table.Row>
              </Table.Header>
              <Table.Body>
                {rows.map(({ intensity, bpm }) => (
                  <Table.Row key={intensity}>
                    <Table.Cell>{intensity}%</Table.Cell>
                    <Table.Cell>{bpm} bpm</Table.Cell>
                  </Table.Row>
                ))}
              </Table.Body>
            </Table>
          </Grid.Column>
        )}
      </Grid>
    </Solution>
  );
};

export default KarvonenHeartRate;
