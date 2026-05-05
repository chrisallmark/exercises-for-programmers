"use client";

import { Solution } from "@/components";
import { useState } from "react";
import { Button, Grid, Input } from "semantic-ui-react";

const TAX_RATES: Record<string, number> = {
  WI_EAU_CLAIRE: 0.055 + 0.005,
  WI_DUNN: 0.055 + 0.004,
  WI_OTHER: 0.055,
  IL: 0.08,
  OTHER: 0,
};

const MultistatesalesTaxCalculator = () => {
  const [subtotal, setSubtotal] = useState("");
  const [state, setState] = useState("OTHER");
  const [county, setCounty] = useState("OTHER");
  const [output, setOutput] = useState<{ tax: number; total: number; rate: number } | null>(null);

  const showCounty = state === "WI";

  return (
    <Solution category="Making Decisions" exercise="Multistate Sales Tax Calculator"
      markdown="/exercises/04-making-decisions/20-multistate-sales-tax-calculator.md"
    >
      <Grid stackable>
        <Grid.Column width={4}>
          <div className="ui labeled input fluid">
            <div className="ui label">State</div>
            <select
              value={state}
              onChange={(e) => { setState(e.target.value); setCounty("OTHER"); setOutput(null); }}
              style={{ flex: 1, border: "1px solid rgba(34,36,38,.15)", borderLeft: "none", padding: "0 0.5em" }}
            >
              <option value="WI">Wisconsin (WI)</option>
              <option value="IL">Illinois (IL)</option>
              <option value="OTHER">Other</option>
            </select>
          </div>
        </Grid.Column>
        {showCounty && (
          <Grid.Column width={4}>
            <div className="ui labeled input fluid">
              <div className="ui label">County</div>
              <select
                value={county}
                onChange={(e) => setCounty(e.target.value)}
                style={{ flex: 1, border: "1px solid rgba(34,36,38,.15)", borderLeft: "none", padding: "0 0.5em" }}
              >
                <option value="OTHER">Other WI county</option>
                <option value="EAU_CLAIRE">Eau Claire (+0.5%)</option>
                <option value="DUNN">Dunn (+0.4%)</option>
              </select>
            </div>
          </Grid.Column>
        )}
        <Grid.Column width={showCounty ? 5 : 8}>
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
        <Grid.Column width={3}>
          <Button
            disabled={!subtotal}
            fluid
            onClick={() => {
              const sub = parseFloat(subtotal);
              const rateKey = state === "IL" ? "IL" : state === "WI" ? `WI_${county === "OTHER" ? "OTHER" : county}` : "OTHER";
              const rate = TAX_RATES[rateKey] ?? 0;
              const tax = Math.round(sub * rate * 100) / 100;
              setOutput({ tax, total: Math.round((sub + tax) * 100) / 100, rate });
            }}
          >
            Calculate
          </Button>
        </Grid.Column>
        {output !== null && (
          <>
            {output.rate > 0 ? (
              <>
                <Grid.Column textAlign="center" width={8}>
                  Tax ({(output.rate * 100).toFixed(1)}%): ${output.tax.toFixed(2)}
                </Grid.Column>
                <Grid.Column textAlign="center" width={8}>
                  Total: ${output.total.toFixed(2)}
                </Grid.Column>
              </>
            ) : (
              <Grid.Column textAlign="center" width={16}>
                No tax. Total: ${output.total.toFixed(2)}
              </Grid.Column>
            )}
          </>
        )}
      </Grid>
    </Solution>
  );
};

export default MultistatesalesTaxCalculator;
