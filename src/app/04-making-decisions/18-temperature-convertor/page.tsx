"use client";

import { Solution } from "@/components";
import { useState } from "react";
import { Button, Grid, Input } from "semantic-ui-react";

const TemperatureConverter = () => {
  const [temp, setTemp] = useState("");
  const [unit, setUnit] = useState<"F" | "C">("F");
  const [output, setOutput] = useState<string | null>(null);
  return (
    <Solution category="Making Decisions" exercise="Temperature Converter">
      <Grid stackable>
        <Grid.Column width={8}>
          <Input
            fluid
            label={`Temperature (°${unit})`}
            name="temp"
            onChange={(e) => setTemp(e.target.value)}
            placeholder="e.g. 32"
            step="0.1"
            type="number"
            value={temp}
          />
        </Grid.Column>
        <Grid.Column width={4}>
          <div className="ui labeled input fluid">
            <div className="ui label">Convert from</div>
            <select
              value={unit}
              onChange={(e) => { setUnit(e.target.value as "F" | "C"); setOutput(null); }}
              style={{ flex: 1, border: "1px solid rgba(34,36,38,.15)", borderLeft: "none", padding: "0 0.5em" }}
            >
              <option value="F">Fahrenheit (°F)</option>
              <option value="C">Celsius (°C)</option>
            </select>
          </div>
        </Grid.Column>
        <Grid.Column width={4}>
          <Button
            disabled={!temp}
            fluid
            onClick={() => {
              const t = parseFloat(temp);
              if (unit === "F") {
                const c = (t - 32) * (5 / 9);
                setOutput(`${t}°F = ${c.toFixed(1)}°C`);
              } else {
                const f = t * (9 / 5) + 32;
                setOutput(`${t}°C = ${f.toFixed(1)}°F`);
              }
            }}
          >
            Convert
          </Button>
        </Grid.Column>
        {output && (
          <Grid.Column textAlign="center" width={16}>
            {output}
          </Grid.Column>
        )}
      </Grid>
    </Solution>
  );
};

export default TemperatureConverter;
