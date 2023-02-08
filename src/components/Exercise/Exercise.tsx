import { Grid, Segment } from "semantic-ui-react";
import { ExerciseProps } from "./Exercise.types";

const Exercise = ({ name, page }: ExerciseProps) => (
  <Grid.Column>
    <a href={page}>
      <Segment inverted>{name}</Segment>
    </a>
  </Grid.Column>
);

export default Exercise;
