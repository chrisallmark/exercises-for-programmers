"use client";

import { Solution } from "@/components";
import { useState } from "react";
import { Button, Grid } from "semantic-ui-react";

const DEFAULT_TEXT = "badger badger mushroom mushroom snake badger badger badger";

type FreqEntry = { word: string; count: number };

const countFrequency = (text: string): FreqEntry[] => {
  const words = text
    .toLowerCase()
    .replace(/[^a-z0-9\s'-]/g, "")
    .split(/\s+/)
    .filter(Boolean);
  const freq = new Map<string, number>();
  for (const word of words) freq.set(word, (freq.get(word) ?? 0) + 1);
  return [...freq.entries()]
    .map(([word, count]) => ({ word, count }))
    .sort((a, b) => b.count - a.count || a.word.localeCompare(b.word));
};

const WordFrequencyFinder = () => {
  const [input, setInput] = useState(DEFAULT_TEXT);
  const [entries, setEntries] = useState<FreqEntry[] | null>(null);

  const maxCount = entries ? entries[0]?.count ?? 0 : 0;
  const labelWidth = entries ? Math.max(...entries.map((e) => e.word.length)) : 0;

  return (
    <Solution category="Working with Files" exercise="Word Frequency Finder"
      markdown="/exercises/08-working-with-files/46-word-frequency-finder.md"
    >
      <Grid stackable>
        <Grid.Column width={16}>
          <p>Paste text below to count word frequency:</p>
          <textarea
            rows={6}
            style={{ width: "100%", padding: "0.5em", border: "1px solid rgba(34,36,38,.15)", borderRadius: "0.25em" }}
            value={input}
            onChange={(e) => { setInput(e.target.value); setEntries(null); }}
          />
        </Grid.Column>
        <Grid.Column width={16}>
          <Button primary disabled={!input.trim()} onClick={() => setEntries(countFrequency(input))}>
            Count Words
          </Button>
        </Grid.Column>
        {entries && entries.length > 0 && (
          <Grid.Column width={16}>
            <pre style={{ background: "#f5f5f5", padding: "1em", borderRadius: "0.25em", overflowX: "auto" }}>
              {entries.map(({ word, count }) => {
                const label = (word + ":").padEnd(labelWidth + 2);
                const bar = "*".repeat(Math.round((count / maxCount) * 30));
                return `${label} ${bar} (${count})\n`;
              }).join("")}
            </pre>
          </Grid.Column>
        )}
        {entries && entries.length === 0 && (
          <Grid.Column width={16}>
            <p>No words found in the input.</p>
          </Grid.Column>
        )}
      </Grid>
    </Solution>
  );
};

export default WordFrequencyFinder;
