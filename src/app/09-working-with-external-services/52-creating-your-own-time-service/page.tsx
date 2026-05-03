"use client";

import { Solution } from "@/components";
import { Grid, Message } from "semantic-ui-react";

const CreatingYourOwnTimeService = () => (
  <Solution category="Working with External Services" exercise="Creating Your Own Time Service">
    <Grid stackable>
      <Grid.Column width={16}>
        <Message warning>
          <Message.Header>Not implemented as a static page</Message.Header>
          <p>
            This exercise is a meta-exercise: the thing you are asked to build <em>is</em> a JSON
            API server. A static Next.js page is a client — it can consume a service, but it cannot
            be one in the way the exercise intends.
          </p>
        </Message>
      </Grid.Column>
      <Grid.Column width={16}>
        <h3>How this would work</h3>
        <p>
          The server component would be a minimal HTTP server (for example, a few lines of Node.js
          using the built-in <code>http</code> module, or a single-file Express app) that listens
          on a port and responds to any <code>GET</code> request with a JSON body:
        </p>
        <pre style={{ background: "#f5f5f5", padding: "1em", borderRadius: "0.25em" }}>
          {`{ "currentTime": "2050-01-24 15:06:26" }`}
        </pre>
        <p>
          The response <code>Content-Type</code> header would be set to{" "}
          <code>application/json</code>. The timestamp would be generated fresh on each request
          using the server&apos;s system clock, formatted as <code>YYYY-MM-DD HH:mm:ss</code> in UTC.
        </p>
        <p>
          The client component would be a separate program that sends a <code>GET</code> request to
          the server URL, parses the JSON response, and prints the time in a human-readable format:
        </p>
        <pre style={{ background: "#f5f5f5", padding: "1em", borderRadius: "0.25em" }}>
          The current time is 15:06:26 UTC January 24 2050.
        </pre>
        <h3>Why it needs a backend</h3>
        <p>
          Next.js API routes could technically serve the JSON endpoint, but that would mean this
          application <em>is</em> the server — the exercise asks you to build and run two separate
          programs (server and client) to understand the client/server relationship. Collapsing
          them into one Next.js app defeats the purpose of the exercise.
        </p>
      </Grid.Column>
    </Grid>
  </Solution>
);

export default CreatingYourOwnTimeService;
