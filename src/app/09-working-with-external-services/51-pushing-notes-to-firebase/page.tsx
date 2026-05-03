"use client";

import { Solution } from "@/components";
import { Grid, Message } from "semantic-ui-react";

const PushingNotesToFirebase = () => (
  <Solution category="Working with External Services" exercise="Pushing Notes to Firebase">
    <Grid stackable>
      <Grid.Column width={16}>
        <Message warning>
          <Message.Header>Not implemented as a static page</Message.Header>
          <p>
            This exercise requires a live Firebase project with a real-time database and REST API
            credentials. A static Next.js page has no secure place to store a Firebase service
            account key — embedding it in client-side code would expose it publicly.
          </p>
        </Message>
      </Grid.Column>
      <Grid.Column width={16}>
        <h3>How this would work</h3>
        <p>
          The app would present two actions: <strong>New note</strong> and <strong>Show notes</strong>.
        </p>
        <p>
          When saving a note, the app would send an HTTP <code>POST</code> to the Firebase Realtime
          Database REST endpoint (<code>https://&lt;project&gt;.firebaseio.com/notes.json</code>),
          supplying the note text and the current timestamp as a JSON body. Firebase returns a unique
          key for the new record.
        </p>
        <p>
          When showing notes, the app would send a <code>GET</code> to the same endpoint. Firebase
          returns all stored notes as a JSON object keyed by the IDs it generated. The app would sort
          the entries by date descending and display each one as <code>YYYY-MM-DD — note text</code>.
        </p>
        <p>
          The Firebase project URL and database secret would live in a configuration file (e.g.{" "}
          <code>.env.local</code>) and be consumed only by a server-side Next.js API route, never
          sent to the browser.
        </p>
        <h3>Why it needs a backend</h3>
        <p>
          Firebase database secrets must be kept server-side. A <code>NEXT_PUBLIC_</code> env var
          would bundle the secret into the JavaScript delivered to every visitor. The correct
          architecture is a Next.js API route that holds the secret and proxies all Firebase
          requests — which is effectively a backend, not a static page.
        </p>
      </Grid.Column>
    </Grid>
  </Solution>
);

export default PushingNotesToFirebase;
