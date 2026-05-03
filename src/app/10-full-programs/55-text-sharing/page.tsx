"use client";

import { Solution } from "@/components";
import { useEffect, useState } from "react";
import { Button, Grid, Label, Message } from "semantic-ui-react";

const STORAGE_KEY = "efp-text-sharing";

type Snippet = { slug: string; text: string };

const generateSlug = (text: string): string => {
  let hash = 0;
  for (let i = 0; i < text.length; i++) {
    hash = (Math.imul(31, hash) + text.charCodeAt(i)) | 0;
  }
  return Math.abs(hash).toString(36).padStart(6, "0");
};

const loadSnippets = (): Record<string, string> => {
  const stored = localStorage.getItem(STORAGE_KEY);
  return stored ? JSON.parse(stored) : {};
};

const saveSnippet = (slug: string, text: string) => {
  const snippets = loadSnippets();
  snippets[slug] = text;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(snippets));
};

type View = "compose" | "saved" | "view";

const TextSharing = () => {
  const [view, setView] = useState<View>("compose");
  const [text, setText] = useState("");
  const [savedSlug, setSavedSlug] = useState("");
  const [retrieveSlug, setRetrieveSlug] = useState("");
  const [retrievedText, setRetrievedText] = useState("");
  const [notFound, setNotFound] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => { setMounted(true); }, []);

  const save = () => {
    const slug = generateSlug(text.trim());
    saveSnippet(slug, text.trim());
    setSavedSlug(slug);
    setView("saved");
  };

  const retrieve = () => {
    const snippets = loadSnippets();
    const found = snippets[retrieveSlug.trim()];
    if (found) {
      setRetrievedText(found);
      setNotFound(false);
      setView("view");
    } else {
      setNotFound(true);
    }
  };

  const edit = () => {
    setText(retrievedText);
    setRetrieveSlug("");
    setRetrievedText("");
    setView("compose");
  };

  const reset = () => {
    setText("");
    setSavedSlug("");
    setRetrieveSlug("");
    setRetrievedText("");
    setNotFound(false);
    setView("compose");
  };

  if (!mounted) return null;

  return (
    <Solution category="Full Programs" exercise="Text Sharing">
      <Grid stackable>
        {view === "compose" && (
          <>
            <Grid.Column width={16}>
              <p>Paste or type your text snippet below, then save it to get a shareable slug:</p>
              <textarea
                rows={8}
                style={{ width: "100%", padding: "0.5em", border: "1px solid rgba(34,36,38,.15)", borderRadius: "0.25em" }}
                value={text}
                onChange={(e) => setText(e.target.value)}
              />
            </Grid.Column>
            <Grid.Column width={16}>
              <Button primary disabled={!text.trim()} onClick={save}>
                Save Snippet
              </Button>
            </Grid.Column>
            <Grid.Column width={16}>
              <p style={{ marginTop: "1.5em", marginBottom: "0.5em" }}>
                <strong>Retrieve an existing snippet</strong> — enter its slug:
              </p>
              <div style={{ display: "flex", gap: "0.5em" }}>
                <input
                  style={{ flex: 1, padding: "0.5em", border: "1px solid rgba(34,36,38,.15)", borderRadius: "0.25em" }}
                  placeholder="e.g. 3k7p2a"
                  value={retrieveSlug}
                  onChange={(e) => { setRetrieveSlug(e.target.value); setNotFound(false); }}
                  onKeyDown={(e: React.KeyboardEvent) => { if (e.key === "Enter") retrieve(); }}
                />
                <Button disabled={!retrieveSlug.trim()} onClick={retrieve}>
                  Retrieve
                </Button>
              </div>
              {notFound && (
                <Message warning style={{ marginTop: "0.5em" }}>
                  No snippet found with that slug.
                </Message>
              )}
            </Grid.Column>
          </>
        )}

        {view === "saved" && (
          <>
            <Grid.Column width={16}>
              <Message positive>
                <Message.Header>Snippet saved!</Message.Header>
                <p>
                  Your slug is: <Label>{savedSlug}</Label>
                </p>
                <p>Use this slug to retrieve your snippet later.</p>
              </Message>
            </Grid.Column>
            <Grid.Column width={16}>
              <pre style={{ background: "#f5f5f5", padding: "1em", borderRadius: "0.25em", whiteSpace: "pre-wrap", wordBreak: "break-word" }}>
                {text}
              </pre>
            </Grid.Column>
            <Grid.Column width={16}>
              <Button onClick={reset}>New Snippet</Button>
            </Grid.Column>
          </>
        )}

        {view === "view" && (
          <>
            <Grid.Column width={16}>
              <p>
                Showing snippet for slug: <Label>{retrieveSlug}</Label>
              </p>
              <pre style={{ background: "#f5f5f5", padding: "1em", borderRadius: "0.25em", whiteSpace: "pre-wrap", wordBreak: "break-word" }}>
                {retrievedText}
              </pre>
            </Grid.Column>
            <Grid.Column width={16}>
              <Button primary onClick={edit}>Edit</Button>
              <Button onClick={reset} style={{ marginLeft: "0.5em" }}>New Snippet</Button>
            </Grid.Column>
          </>
        )}
      </Grid>
    </Solution>
  );
};

export default TextSharing;
