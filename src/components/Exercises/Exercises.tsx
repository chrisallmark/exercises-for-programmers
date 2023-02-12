import { createContext } from "react";
import { PropsWithChildren } from "react";
import { Grid, Header, Segment } from "semantic-ui-react";
import { ExercisesProps } from "./Exercises.types";
import { SemanticCOLORS } from "semantic-ui-react";

export const ExercisesContext = createContext({
  color: "black" as SemanticCOLORS,
  folder: "",
});

const Exercises = ({
  category,
  children,
  color,
  folder,
}: PropsWithChildren<ExercisesProps>) => {
  return (
    <ExercisesContext.Provider value={{ color, folder }}>
      <Segment>
        <Header>{category}</Header>
        {children && (
          <Grid columns={4} doubling stackable>
            {children}
          </Grid>
        )}
        {!children && <p>No solutions.</p>}
      </Segment>
    </ExercisesContext.Provider>
  );
};

export default Exercises;
