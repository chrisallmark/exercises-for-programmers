"use client";

import Link from "next/link";
import { useContext } from "react";
import { Grid, Segment } from "semantic-ui-react";
import { ExercisesContext } from "../Exercises/Exercises";
import { ExerciseProps } from "./Exercise.types";

const Exercise = ({ name, page }: ExerciseProps) => {
  const { color, folder } = useContext(ExercisesContext);
  return (
    <Grid.Column>
      <Link href={`/${folder}/${page}`} style={{ display: "block" }}>
        <Segment color={color} inverted textAlign="center">
          {name}
        </Segment>
      </Link>
    </Grid.Column>
  );
};

export default Exercise;
