"use client";

import { Solution } from "@/components";
import { useState } from "react";
import { Button, Grid, Input, Table } from "semantic-ui-react";

const validators: Record<string, (v: string) => boolean> = {
  firstName: (v) => v.trim().length > 0,
  lastName: (v) => v.trim().length > 0,
  employeeId: (v) => /^[A-Z]{2}-\d{4}$/.test(v.trim()),
  zip: (v) => /^\d{5}(-\d{4})?$/.test(v.trim()),
};

const LABELS: Record<string, string> = {
  firstName: "First name",
  lastName: "Last name",
  employeeId: "Employee ID (e.g. AB-1234)",
  zip: "ZIP code",
};

const ValidatingInputs = () => {
  const [input, setInput] = useState({ firstName: "", lastName: "", employeeId: "", zip: "" });
  const [results, setResults] = useState<Record<string, boolean> | null>(null);
  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInput({ ...input, [event.target.name]: event.target.value });
  };
  const isDisabled = !input.firstName && !input.lastName && !input.employeeId && !input.zip;
  return (
    <Solution category="Functions" exercise="Validating Inputs">
      <Grid stackable>
        {(Object.keys(validators) as Array<keyof typeof validators>).map((field) => (
          <Grid.Column key={field} width={8}>
            <Input
              fluid
              label={LABELS[field]}
              name={field}
              onChange={handleInput}
              placeholder={field === "employeeId" ? "e.g. AB-1234" : field === "zip" ? "e.g. 54701" : ""}
              value={input[field as keyof typeof input]}
            />
          </Grid.Column>
        ))}
        <Grid.Column width={16}>
          <Button
            disabled={isDisabled}
            onClick={() => {
              setResults(
                Object.fromEntries(
                  Object.entries(validators).map(([k, fn]) => [k, fn(input[k as keyof typeof input])])
                )
              );
            }}
          >
            Validate
          </Button>
        </Grid.Column>
        {results && (
          <Grid.Column width={16}>
            <Table celled>
              <Table.Header>
                <Table.Row>
                  <Table.HeaderCell>Field</Table.HeaderCell>
                  <Table.HeaderCell>Value</Table.HeaderCell>
                  <Table.HeaderCell>Valid?</Table.HeaderCell>
                </Table.Row>
              </Table.Header>
              <Table.Body>
                {Object.keys(validators).map((field) => (
                  <Table.Row key={field} positive={results[field]} negative={!results[field]}>
                    <Table.Cell>{LABELS[field]}</Table.Cell>
                    <Table.Cell>{input[field as keyof typeof input] || "(empty)"}</Table.Cell>
                    <Table.Cell>{results[field] ? "✓ Valid" : "✗ Invalid"}</Table.Cell>
                  </Table.Row>
                ))}
              </Table.Body>
            </Table>
          </Grid.Column>
        )}
      </Grid>
    </Solution>
  );
};

export default ValidatingInputs;
