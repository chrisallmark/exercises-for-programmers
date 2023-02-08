import { PropsWithChildren } from "react";
import { Grid, Header, Segment } from "semantic-ui-react";
import { ExercisesProps } from "./Exercises.types";

const Exercises = ({
  category,
  children,
}: PropsWithChildren<ExercisesProps>) => (
  <Segment>
    <Header>{category}</Header>
    {children && (
      <Grid columns={4} doubling stackable stretched>
        {children}
      </Grid>
    )}
    {!children && <p>No solutions.</p>}
  </Segment>
);

export default Exercises;
