import { Roboto } from "@next/font/google";
import type { AppProps } from "next/app";
import Head from "next/head";
import "semantic-ui-css/semantic.min.css";
import { Container, Header } from "semantic-ui-react";

const roboto = Roboto({ subsets: ["latin"], weight: "400" });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Exercises for Programmers</title>
      </Head>
      <main className={roboto.className} style={{ marginTop: "1em" }}>
        <Container>
          <Header as="h1">Exercises for Programmers</Header>

          <Component {...pageProps} />
        </Container>
      </main>
    </>
  );
}
