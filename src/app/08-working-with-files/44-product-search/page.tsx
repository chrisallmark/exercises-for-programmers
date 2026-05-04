"use client";

import { Solution } from "@/components";
import markdown from "@/exercises/08-working-with-files/44-product-search.md";
import { useState } from "react";
import { Button, Grid, Input, Message, Table } from "semantic-ui-react";

type Product = { name: string; price: number; quantity: number };

const PRODUCTS: Product[] = [
  { name: "Widget", price: 25.00, quantity: 5 },
  { name: "Thing", price: 15.00, quantity: 5 },
  { name: "Doodad", price: 5.00, quantity: 10 },
  { name: "Gadget", price: 49.99, quantity: 3 },
  { name: "Gizmo", price: 99.99, quantity: 1 },
  { name: "Doohickey", price: 8.50, quantity: 20 },
];

type SearchState = "idle" | "found" | "notfound";

const ProductSearch = () => {
  const [query, setQuery] = useState("");
  const [state, setState] = useState<SearchState>("idle");
  const [result, setResult] = useState<Product | null>(null);

  const search = () => {
    const match = PRODUCTS.find(
      (p) => p.name.toLowerCase() === query.trim().toLowerCase()
    );
    if (match) {
      setResult(match);
      setState("found");
    } else {
      setResult(null);
      setState("notfound");
    }
  };

  const reset = () => {
    setQuery("");
    setState("idle");
    setResult(null);
  };

  return (
    <Solution category="Working with Files" exercise="Product Search"
      markdown={markdown}
    >
      <Grid stackable>
        <Grid.Column width={16}>
          <p style={{ color: "#666", fontSize: "0.9em" }}>
            Available products: {PRODUCTS.map((p) => p.name).join(", ")}
          </p>
        </Grid.Column>
        <Grid.Column width={12}>
          <Input
            fluid
            label="Product name"
            onChange={(e) => { setQuery(e.target.value); setState("idle"); }}
            onKeyDown={(e: React.KeyboardEvent) => { if (e.key === "Enter") search(); }}
            placeholder="e.g. Widget"
            value={query}
          />
        </Grid.Column>
        <Grid.Column width={4}>
          <Button primary disabled={!query.trim()} fluid onClick={search}>
            Search
          </Button>
        </Grid.Column>

        {state === "notfound" && (
          <Grid.Column width={16}>
            <Message warning>
              <p>Sorry, that product was not found in our inventory.</p>
            </Message>
            <Button onClick={reset}>Search Again</Button>
          </Grid.Column>
        )}

        {state === "found" && result && (
          <>
            <Grid.Column width={16}>
              <Table celled>
                <Table.Body>
                  <Table.Row>
                    <Table.Cell><strong>Name</strong></Table.Cell>
                    <Table.Cell>{result.name}</Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell><strong>Price</strong></Table.Cell>
                    <Table.Cell>${result.price.toFixed(2)}</Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell><strong>Quantity on hand</strong></Table.Cell>
                    <Table.Cell>{result.quantity}</Table.Cell>
                  </Table.Row>
                </Table.Body>
              </Table>
            </Grid.Column>
            <Grid.Column width={16}>
              <Button onClick={reset}>Search Again</Button>
            </Grid.Column>
          </>
        )}
      </Grid>
    </Solution>
  );
};

export default ProductSearch;
