"use client";

import { Solution } from "@/components";
import { useState } from "react";
import { Button, Grid, Input, Table } from "semantic-ui-react";

const ComputingStatistics = () => {
  const [entry, setEntry] = useState("");
  const [numbers, setNumbers] = useState<number[]>([]);
  const [stats, setStats] = useState<{ mean: number; min: number; max: number; stddev: number } | null>(null);

  const addNumber = () => {
    const n = parseFloat(entry);
    if (isNaN(n)) return;
    setNumbers([...numbers, n]);
    setEntry("");
    setStats(null);
  };

  const calculate = () => {
    if (numbers.length === 0) return;
    const mean = numbers.reduce((a, b) => a + b, 0) / numbers.length;
    const min = numbers.reduce((a, b) => (b < a ? b : a));
    const max = numbers.reduce((a, b) => (b > a ? b : a));
    const variance = numbers.reduce((sum, n) => sum + (n - mean) ** 2, 0) / numbers.length;
    setStats({ mean: Math.round(mean * 100) / 100, min, max, stddev: Math.round(Math.sqrt(variance) * 100) / 100 });
  };

  return (
    <Solution category="Data Structures" exercise="Computing Statistics">
      <Grid stackable>
        <Grid.Column width={12}>
          <Input
            fluid
            label="Add a number"
            onChange={(e) => setEntry(e.target.value)}
            onKeyDown={(e: React.KeyboardEvent) => { if (e.key === "Enter") addNumber(); }}
            placeholder="e.g. 42"
            type="number"
            value={entry}
          />
        </Grid.Column>
        <Grid.Column width={4}>
          <Button disabled={!entry} fluid onClick={addNumber}>Add</Button>
        </Grid.Column>
        {numbers.length > 0 && (
          <>
            <Grid.Column width={16}>
              <p><strong>Numbers ({numbers.length}):</strong> {numbers.join(", ")}</p>
            </Grid.Column>
            <Grid.Column width={16}>
              <Button primary onClick={calculate}>Calculate Statistics</Button>
              <Button onClick={() => { setNumbers([]); setStats(null); }}>Clear</Button>
            </Grid.Column>
          </>
        )}
        {stats && (
          <Grid.Column width={16}>
            <Table celled>
              <Table.Body>
                <Table.Row><Table.Cell><strong>Mean</strong></Table.Cell><Table.Cell>{stats.mean}</Table.Cell></Table.Row>
                <Table.Row><Table.Cell><strong>Minimum</strong></Table.Cell><Table.Cell>{stats.min}</Table.Cell></Table.Row>
                <Table.Row><Table.Cell><strong>Maximum</strong></Table.Cell><Table.Cell>{stats.max}</Table.Cell></Table.Row>
                <Table.Row><Table.Cell><strong>Std Deviation</strong></Table.Cell><Table.Cell>{stats.stddev}</Table.Cell></Table.Row>
              </Table.Body>
            </Table>
          </Grid.Column>
        )}
      </Grid>
    </Solution>
  );
};

export default ComputingStatistics;
