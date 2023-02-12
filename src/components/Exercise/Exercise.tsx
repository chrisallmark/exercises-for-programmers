import { useContext } from "react";
import { Grid, Segment } from "semantic-ui-react";
import { ExercisesContext } from "../Exercises/Exercises";
import { ExerciseProps } from "./Exercise.types";

const Exercise = ({ name, page }: ExerciseProps) => {
  const { color, folder } = useContext(ExercisesContext);
  return (
    <Grid.Column as="a" href={`/${folder}/${page}`}>
      <Segment color={color} inverted textAlign="center">
        {name}
      </Segment>
    </Grid.Column>
  );
};

export default Exercise;
