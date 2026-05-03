"use client";

import { Solution } from "@/components";
import { useState } from "react";
import { Button, Grid, Input, Table } from "semantic-ui-react";

const TAX_RATE = 0.055;

type Item = { name: string; price: string };
type Output = { items: Item[]; subtotal: number; tax: number; total: number };

const SelfCheckout = () => {
  const [items, setItems] = useState<Item[]>([
    { name: "", price: "" },
    { name: "", price: "" },
    { name: "", price: "" },
  ]);
  const [output, setOutput] = useState<Output | null>(null);

  const handleItem = (
    index: number,
    field: keyof Item,
    value: string
  ) => {
    const updated = items.map((item, i) =>
      i === index ? { ...item, [field]: value } : item
    );
    setItems(updated);
  };

  const isDisabled = items.every((item) => !item.name || !item.price);

  return (
    <Solution category="Calculations" exercise="Self Checkout">
      <Grid stackable>
        {items.map((item, i) => (
          <Grid.Row key={i}>
            <Grid.Column width={8}>
              <Input
                fluid
                label={`Item ${i + 1} name`}
                onChange={(e) => handleItem(i, "name", e.target.value.trim())}
                placeholder="e.g. Milk"
                value={item.name}
              />
            </Grid.Column>
            <Grid.Column width={8}>
              <Input
                fluid
                label="Price ($)"
                min="0"
                onChange={(e) => handleItem(i, "price", e.target.value)}
                placeholder="e.g. 3.49"
                step="0.01"
                type="number"
                value={item.price}
              />
            </Grid.Column>
          </Grid.Row>
        ))}
        <Grid.Column width={16}>
          <Button
            disabled={isDisabled}
            onClick={() => {
              const filled = items.filter((item) => item.name && item.price);
              const subtotal = filled.reduce(
                (sum, item) => sum + parseFloat(item.price),
                0
              );
              const tax = subtotal * TAX_RATE;
              setOutput({ items: filled, subtotal, tax, total: subtotal + tax });
            }}
          >
            Calculate Total
          </Button>
        </Grid.Column>
        {output && (
          <Grid.Column width={16}>
            <Table celled>
              <Table.Header>
                <Table.Row>
                  <Table.HeaderCell>Item</Table.HeaderCell>
                  <Table.HeaderCell textAlign="right">Price</Table.HeaderCell>
                </Table.Row>
              </Table.Header>
              <Table.Body>
                {output.items.map((item, i) => (
                  <Table.Row key={i}>
                    <Table.Cell>{item.name}</Table.Cell>
                    <Table.Cell textAlign="right">
                      ${parseFloat(item.price).toFixed(2)}
                    </Table.Cell>
                  </Table.Row>
                ))}
              </Table.Body>
              <Table.Footer>
                <Table.Row>
                  <Table.HeaderCell>Subtotal</Table.HeaderCell>
                  <Table.HeaderCell textAlign="right">
                    ${output.subtotal.toFixed(2)}
                  </Table.HeaderCell>
                </Table.Row>
                <Table.Row>
                  <Table.HeaderCell>Tax (5.5%)</Table.HeaderCell>
                  <Table.HeaderCell textAlign="right">
                    ${output.tax.toFixed(2)}
                  </Table.HeaderCell>
                </Table.Row>
                <Table.Row>
                  <Table.HeaderCell>
                    <strong>Total</strong>
                  </Table.HeaderCell>
                  <Table.HeaderCell textAlign="right">
                    <strong>${output.total.toFixed(2)}</strong>
                  </Table.HeaderCell>
                </Table.Row>
              </Table.Footer>
            </Table>
          </Grid.Column>
        )}
      </Grid>
    </Solution>
  );
};

export default SelfCheckout;
