"use client";

import { Solution } from "@/components";
import { useState } from "react";
import { Button, Grid } from "semantic-ui-react";

const DEFAULT_NAMES = `Ling, Mai
Johnson, Jim
Zarnecki, Sabrina
Jones, Chris
Jones, Aaron
Swift, Geoffrey
Xiong, Fong`;

const NameSorter = () => {
  const [input, setInput] = useState(DEFAULT_NAMES);
  const [output, setOutput] = useState<string | null>(null);

  const sort = () => {
    const names = input
      .split("\n")
      .map((n) => n.trim())
      .filter(Boolean)
      .sort((a, b) => a.localeCompare(b));
    const separator = "-".repeat(17);
    setOutput([`Total of ${names.length} names`, separator, ...names].join("\n"));
  };

  return (
    <Solution category="Working with Files" exercise="Name Sorter">
      <Grid stackable>
        <Grid.Column width={16}>
          <p>Enter names (one per line), then sort:</p>
          <textarea
            rows={9}
            style={{ width: "100%", fontFamily: "monospace", padding: "0.5em", border: "1px solid rgba(34,36,38,.15)", borderRadius: "0.25em" }}
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
        </Grid.Column>
        <Grid.Column width={16}>
          <Button primary disabled={!input.trim()} onClick={sort}>
            Sort Names
          </Button>
        </Grid.Column>
        {output && (
          <Grid.Column width={16}>
            <pre style={{ background: "#f5f5f5", padding: "1em", borderRadius: "0.25em" }}>
              {output}
            </pre>
          </Grid.Column>
        )}
      </Grid>
    </Solution>
  );
};

export default NameSorter;
