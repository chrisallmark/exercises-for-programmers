"use client";

import { Solution } from "@/components";
import { useState } from "react";
import { Button, Grid } from "semantic-ui-react";

const DEFAULT_TEXT = `One should never utilize the word "utilize" in writing. Use "use" instead.`;

const replaceUtilize = (text: string): string =>
  text.replace(/\butilize\b/gi, (match) => {
    if (match === match.toUpperCase()) return "USE";
    if (match[0] === match[0].toUpperCase()) return "Use";
    return "use";
  });

const WordFinder = () => {
  const [input, setInput] = useState(DEFAULT_TEXT);
  const [output, setOutput] = useState<string | null>(null);

  const count = (text: string) =>
    (text.match(/\butilize\b/gi) ?? []).length;

  return (
    <Solution category="Working with Files" exercise="Word Finder">
      <Grid stackable>
        <Grid.Column width={16}>
          <p>Paste your text below. All occurrences of <em>utilize</em> will be replaced with <em>use</em>:</p>
          <textarea
            rows={6}
            style={{ width: "100%", padding: "0.5em", border: "1px solid rgba(34,36,38,.15)", borderRadius: "0.25em" }}
            value={input}
            onChange={(e) => { setInput(e.target.value); setOutput(null); }}
          />
        </Grid.Column>
        <Grid.Column width={16}>
          <Button
            primary
            disabled={!input.trim()}
            onClick={() => setOutput(replaceUtilize(input))}
          >
            Replace &quot;utilize&quot; → &quot;use&quot;
          </Button>
        </Grid.Column>
        {output !== null && (
          <>
            <Grid.Column width={16}>
              <p>
                Found and replaced <strong>{count(input)}</strong> occurrence{count(input) !== 1 ? "s" : ""}.
              </p>
              <p><strong>Modified text:</strong></p>
              <div style={{ background: "#f5f5f5", padding: "1em", borderRadius: "0.25em", whiteSpace: "pre-wrap", wordBreak: "break-word" }}>
                {output}
              </div>
            </Grid.Column>
          </>
        )}
      </Grid>
    </Solution>
  );
};

export default WordFinder;
