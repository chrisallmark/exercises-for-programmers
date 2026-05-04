"use client";

import { Solution } from "@/components";
import markdown from "@/exercises/07-data-structures/39-sorting-records.md";
import { Table } from "semantic-ui-react";

type Employee = { first: string; last: string; position: string; separationDate: string };

const EMPLOYEES: Employee[] = [
  { first: "Alice", last: "Johnson", position: "Software Engineer", separationDate: "2023-03-15" },
  { first: "Bob", last: "Smith", position: "Product Manager", separationDate: "2022-11-30" },
  { first: "Charlie", last: "Williams", position: "Designer", separationDate: "2024-01-10" },
  { first: "Dave", last: "Brown", position: "QA Engineer", separationDate: "2023-08-22" },
  { first: "Eve", last: "Davis", position: "DevOps Engineer", separationDate: "2024-02-28" },
  { first: "Frank", last: "Miller", position: "Scrum Master", separationDate: "2021-06-01" },
  { first: "Grace", last: "Wilson", position: "Business Analyst", separationDate: "2023-12-05" },
];

const sorted = [...EMPLOYEES].sort((a, b) => a.last.localeCompare(b.last));

const SortingRecords = () => (
  <Solution category="Data Structures" exercise="Sorting Records"
      markdown={markdown}
    >
    <Table celled>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>Name</Table.HeaderCell>
          <Table.HeaderCell>Position</Table.HeaderCell>
          <Table.HeaderCell>Separation Date</Table.HeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {sorted.map((emp) => (
          <Table.Row key={`${emp.last}-${emp.first}`}>
            <Table.Cell>{emp.last}, {emp.first}</Table.Cell>
            <Table.Cell>{emp.position}</Table.Cell>
            <Table.Cell>{emp.separationDate}</Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
  </Solution>
);

export default SortingRecords;
