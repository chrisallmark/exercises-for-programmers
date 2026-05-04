"use client";

import { Solution } from "@/components";
import markdown from "@/exercises/04-making-decisions/14-tax-calculator.md";
import { useState } from "react";
import { Button, Grid, Input } from "semantic-ui-react";

const TAX_RATE = 0.055;

const TaxCalculator = () => {
  const [subtotal, setSubtotal] = useState("");
  const [state, setState] = useState("WI");
  const [output, setOutput] = useState<{ subtotal: number; tax: number; total: number } | null>(null);
  return (
    <Solution category="Making Decisions" exercise="Tax Calculator"
      markdown={markdown}
    >
      <Grid stackable>
        <Grid.Column width={6}>
          <div className="ui labeled input fluid">
            <div className="ui label">State</div>
            <select
              value={state}
              onChange={(e) => setState(e.target.value)}
              style={{ flex: 1, border: "1px solid rgba(34,36,38,.15)", borderLeft: "none", padding: "0 0.5em" }}
            >
              <option value="WI">Wisconsin (WI)</option>
              <option value="other">Other</option>
            </select>
          </div>
        </Grid.Column>
        <Grid.Column width={6}>
          <Input
            fluid
            label="Subtotal ($)"
            min="0"
            onChange={(e) => setSubtotal(e.target.value)}
            placeholder="e.g. 50.00"
            step="0.01"
            type="number"
            value={subtotal}
          />
        </Grid.Column>
        <Grid.Column width={4}>
          <Button
            disabled={!subtotal}
            fluid
            onClick={() => {
              const sub = parseFloat(subtotal);
              const tax = state === "WI" ? sub * TAX_RATE : 0;
              setOutput({ subtotal: sub, tax: Math.round(tax * 100) / 100, total: Math.round((sub + tax) * 100) / 100 });
            }}
          >
            Calculate
          </Button>
        </Grid.Column>
        {output && (
          <>
            {output.tax > 0 && (
              <>
                <Grid.Column textAlign="center" width={8}>
                  Subtotal: ${output.subtotal.toFixed(2)}
                </Grid.Column>
                <Grid.Column textAlign="center" width={8}>
                  Tax (5.5%): ${output.tax.toFixed(2)}
                </Grid.Column>
              </>
            )}
            <Grid.Column textAlign="center" width={16}>
              Total: ${output.total.toFixed(2)}
            </Grid.Column>
          </>
        )}
      </Grid>
    </Solution>
  );
};

export default TaxCalculator;
