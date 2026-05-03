"use client";

import { Solution } from "@/components";
import { useState } from "react";
import { Button, Grid, List } from "semantic-ui-react";

const INITIAL_EMPLOYEES = ["Alice", "Bob", "Charlie", "Dave", "Eve"];

const EmployeeListRemoval = () => {
  const [employees, setEmployees] = useState(INITIAL_EMPLOYEES);
  const [selected, setSelected] = useState(INITIAL_EMPLOYEES[0]);
  const [removed, setRemoved] = useState<string | null>(null);

  const remove = () => {
    setRemoved(selected);
    const remaining = employees.filter((e) => e !== selected);
    setEmployees(remaining);
    setSelected(remaining[0] ?? "");
  };

  return (
    <Solution category="Data Structures" exercise="Employee List Removal">
      <Grid stackable>
        <Grid.Column width={16}>
          <p><strong>Current employees:</strong></p>
          <List bulleted>
            {employees.map((e) => <List.Item key={e}>{e}</List.Item>)}
          </List>
        </Grid.Column>
        {employees.length > 0 ? (
          <>
            <Grid.Column width={8}>
              <div className="ui labeled input fluid">
                <div className="ui label">Remove employee</div>
                <select
                  value={selected}
                  onChange={(e) => setSelected(e.target.value)}
                  style={{ flex: 1, border: "1px solid rgba(34,36,38,.15)", borderLeft: "none", padding: "0 0.5em" }}
                >
                  {employees.map((e) => <option key={e} value={e}>{e}</option>)}
                </select>
              </div>
            </Grid.Column>
            <Grid.Column width={8}>
              <Button negative onClick={remove}>Remove</Button>
            </Grid.Column>
          </>
        ) : (
          <Grid.Column width={16}>
            <p>No employees remaining.</p>
            <Button onClick={() => { setEmployees(INITIAL_EMPLOYEES); setSelected(INITIAL_EMPLOYEES[0]); setRemoved(null); }}>
              Reset
            </Button>
          </Grid.Column>
        )}
        {removed && employees.length > 0 && (
          <Grid.Column width={16}>
            <p>{removed} has been removed.</p>
          </Grid.Column>
        )}
      </Grid>
    </Solution>
  );
};

export default EmployeeListRemoval;
