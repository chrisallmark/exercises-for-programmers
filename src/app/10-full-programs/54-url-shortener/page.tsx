"use client";

import { Solution } from "@/components";
import { Grid, Message } from "semantic-ui-react";

const UrlShortener = () => (
  <Solution category="Full Programs" exercise="URL Shortener">
    <Grid stackable>
      <Grid.Column width={16}>
        <Message warning>
          <Message.Header>Not implemented as a static page</Message.Header>
          <p>
            A URL shortener requires server-side route handling and a persistent shared datastore —
            two things a static client-rendered Next.js page cannot provide on its own.
          </p>
        </Message>
      </Grid.Column>
      <Grid.Column width={16}>
        <h3>How this would work</h3>
        <p>
          Users submit a long URL via a form. The server generates a short code (e.g.{" "}
          <code>abc1234</code>) and stores the mapping — short code → long URL, plus a visit
          counter — in a persistent database such as PostgreSQL or Redis.
        </p>
        <p>
          When someone visits <code>/abc1234</code>, the server looks up the code, increments the
          visit counter, and issues an HTTP <code>301</code> or <code>302</code> redirect to the
          original long URL. A stats page at <code>/abc1234/stats</code> would query the same
          record and display the short URL, the long URL, and the total visit count.
        </p>
        <p>
          Input validation would reject anything that isn&apos;t a well-formed URL before a code is
          generated.
        </p>
        <h3>Why it needs a backend</h3>
        <p>
          The redirect from <code>/abc1234</code> to the original URL must be handled by a server
          that can issue an HTTP redirect response. A browser-only page cannot intercept an
          arbitrary URL path and redirect the visitor — that requires a running server or a
          serverless function wired up to every short-code route. Additionally, the datastore must
          be shared across all visitors, so <code>localStorage</code> (which is per-browser) is not
          a viable substitute.
        </p>
      </Grid.Column>
    </Grid>
  </Solution>
);

export default UrlShortener;
