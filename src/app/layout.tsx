import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./semantic.css";
import { Container, Header } from "semantic-ui-react";

const roboto = Roboto({ subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
  title: "Exercises for Programmers",
  description: "Solutions to 'Exercises for Programmers' by Brian P. Hogan",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={roboto.className} style={{ marginTop: "1em" }}>
        <Container>
          <Header as="h1">Exercises for Programmers</Header>
          {children}
        </Container>
      </body>
    </html>
  );
}
