"use client";

import { Solution } from "@/components";
import { useState } from "react";
import { Button, Grid } from "semantic-ui-react";

const DEFAULT_CSV = `Ling,Mai,55900
Johnson,Jim,56500
Jones,Aaron,46000
Jones,Chris,34500
Swift,Geoffrey,14200
Xiong,Fong,65000
Zarnecki,Sabrina,51500`;

type Row = [string, string, string];

const pad = (s: string, width: number) => s + " ".repeat(width - s.length);

const parseAndFormat = (csv: string): string => {
  const rows: Row[] = csv
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean)
    .map((line) => {
      const parts = line.split(",");
      return [parts[0] ?? "", parts[1] ?? "", parts[2] ?? ""] as Row;
    });

  const headers: Row = ["Last", "First", "Salary"];
  const all = [headers, ...rows];
  const widths = [0, 1, 2].map(
    (col) => Math.max(...all.map((r) => r[col].length)) + 1
  );

  const headerLine = headers.map((h, i) => pad(h, widths[i])).join("");
  const separator = "-".repeat(headerLine.length);
  const dataLines = rows.map((r) => r.map((cell, i) => pad(cell, widths[i])).join(""));

  return [headerLine, separator, ...dataLines].join("\n");
};

const ParsingADataFile = () => {
  const [input, setInput] = useState(DEFAULT_CSV);
  const [output, setOutput] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const parse = () => {
    try {
      setOutput(parseAndFormat(input));
      setError(null);
    } catch {
      setError("Could not parse the data. Ensure each line is in Last,First,Salary format.");
    }
  };

  return (
    <Solution category="Working with Files" exercise="Parsing a Data File"
      markdown="/exercises/08-working-with-files/42-parsing-a-data-file.md"
    >
      <Grid stackable>
        <Grid.Column width={16}>
          <p>Paste CSV data in <code>Last,First,Salary</code> format (one record per line):</p>
          <textarea
            rows={9}
            style={{ width: "100%", fontFamily: "monospace", padding: "0.5em", border: "1px solid rgba(34,36,38,.15)", borderRadius: "0.25em" }}
            value={input}
            onChange={(e) => { setInput(e.target.value); setOutput(null); }}
          />
        </Grid.Column>
        <Grid.Column width={16}>
          <Button primary disabled={!input.trim()} onClick={parse}>
            Parse File
          </Button>
        </Grid.Column>
        {error && <Grid.Column width={16}><p style={{ color: "red" }}>{error}</p></Grid.Column>}
        {output && (
          <Grid.Column width={16}>
            <pre style={{ background: "#f5f5f5", padding: "1em", borderRadius: "0.25em", overflowX: "auto" }}>
              {output}
            </pre>
          </Grid.Column>
        )}
      </Grid>
    </Solution>
  );
};

export default ParsingADataFile;
