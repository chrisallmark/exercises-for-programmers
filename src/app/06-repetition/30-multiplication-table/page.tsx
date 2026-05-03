"use client";

import { Solution } from "@/components";
import { useState } from "react";
import { Grid, Table } from "semantic-ui-react";

const NUMS = Array.from({ length: 13 }, (_, i) => i);

const MultiplicationTable = () => {
  const [highlight, setHighlight] = useState(0);
  return (
    <Solution category="Repetition" exercise="Multiplication Table">
      <Grid stackable>
        <Grid.Column width={8}>
          <div className="ui labeled input">
            <div className="ui label">Highlight row/column</div>
            <select
              value={highlight}
              onChange={(e) => setHighlight(parseInt(e.target.value))}
              style={{ border: "1px solid rgba(34,36,38,.15)", borderLeft: "none", padding: "0 0.5em" }}
            >
              {NUMS.map((n) => (
                <option key={n} value={n}>{n}</option>
              ))}
            </select>
          </div>
        </Grid.Column>
        <Grid.Column width={16} style={{ overflowX: "auto" }}>
          <Table celled compact size="small" textAlign="center">
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>×</Table.HeaderCell>
                {NUMS.map((n) => (
                  <Table.HeaderCell
                    key={n}
                    style={n === highlight ? { background: "#2185d0", color: "#fff" } : undefined}
                  >
                    {n}
                  </Table.HeaderCell>
                ))}
              </Table.Row>
            </Table.Header>
            <Table.Body>
              {NUMS.map((row) => (
                <Table.Row key={row}>
                  <Table.Cell
                    style={row === highlight ? { background: "#2185d0", color: "#fff", fontWeight: "bold" } : { fontWeight: "bold" }}
                  >
                    {row}
                  </Table.Cell>
                  {NUMS.map((col) => {
                    const isHighlighted = row === highlight || col === highlight;
                    return (
                      <Table.Cell
                        key={col}
                        style={isHighlighted ? { background: "#dbeafe" } : undefined}
                      >
                        {row * col}
                      </Table.Cell>
                    );
                  })}
                </Table.Row>
              ))}
            </Table.Body>
          </Table>
        </Grid.Column>
      </Grid>
    </Solution>
  );
};

export default MultiplicationTable;
