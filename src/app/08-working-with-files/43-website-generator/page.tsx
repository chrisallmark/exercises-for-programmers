"use client";

import { Solution } from "@/components";
import markdown from "@/exercises/08-working-with-files/43-website-generator.md";
import { useState } from "react";
import { Button, Checkbox, Grid, Input } from "semantic-ui-react";

const generateHtml = (site: string, author: string, hasJs: boolean, hasCss: boolean) => `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="author" content="${author}">
  <title>${site}</title>${hasCss ? `\n  <link rel="stylesheet" href="css/style.css">` : ""}
</head>
<body>
  <h1>${site}</h1>${hasJs ? `\n  <script src="js/app.js"><\/script>` : ""}
</body>
</html>`;

const WebsiteGenerator = () => {
  const [site, setSite] = useState("");
  const [author, setAuthor] = useState("");
  const [hasJs, setHasJs] = useState(false);
  const [hasCss, setHasCss] = useState(false);
  const [generated, setGenerated] = useState<{ html: string; log: string[] } | null>(null);

  const generate = () => {
    const log = [
      `Created ./${site}/`,
      `Created ./${site}/index.html`,
      ...(hasJs ? [`Created ./${site}/js/`] : []),
      ...(hasCss ? [`Created ./${site}/css/`] : []),
    ];
    setGenerated({ html: generateHtml(site.trim(), author.trim(), hasJs, hasCss), log });
  };

  const download = () => {
    if (!generated) return;
    const blob = new Blob([generated.html], { type: "text/html" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "index.html";
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <Solution category="Working with Files" exercise="Website Generator"
      markdown={markdown}
    >
      <Grid stackable>
        <Grid.Column width={8}>
          <Input
            fluid
            label="Site name"
            onChange={(e) => setSite(e.target.value.trim())}
            placeholder="e.g. awesomeco"
            value={site}
          />
        </Grid.Column>
        <Grid.Column width={8}>
          <Input
            fluid
            label="Author"
            onChange={(e) => setAuthor(e.target.value.trim())}
            placeholder="e.g. Max Power"
            value={author}
          />
        </Grid.Column>
        <Grid.Column width={8}>
          <Checkbox
            checked={hasJs}
            label="Include a folder for JavaScript files"
            onChange={(_, { checked }) => setHasJs(!!checked)}
          />
        </Grid.Column>
        <Grid.Column width={8}>
          <Checkbox
            checked={hasCss}
            label="Include a folder for CSS files"
            onChange={(_, { checked }) => setHasCss(!!checked)}
          />
        </Grid.Column>
        <Grid.Column width={16}>
          <Button primary disabled={!site.trim() || !author.trim()} onClick={generate}>
            Generate Site
          </Button>
        </Grid.Column>
        {generated && (
          <>
            <Grid.Column width={16}>
              <pre style={{ background: "#f5f5f5", padding: "1em", borderRadius: "0.25em" }}>
                {generated.log.join("\n")}
              </pre>
            </Grid.Column>
            <Grid.Column width={16}>
              <p><strong>Generated index.html:</strong></p>
              <pre style={{ background: "#1e1e1e", color: "#d4d4d4", padding: "1em", borderRadius: "0.25em", overflowX: "auto" }}>
                {generated.html}
              </pre>
            </Grid.Column>
            <Grid.Column width={16}>
              <Button onClick={download}>Download index.html</Button>
            </Grid.Column>
          </>
        )}
      </Grid>
    </Solution>
  );
};

export default WebsiteGenerator;
