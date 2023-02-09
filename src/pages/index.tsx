import { Exercise, Exercises } from "@/components";

export default function Home() {
  return (
    <>
      <Exercises category="Input, Processing & Output">
        <Exercise
          name="Saying Hello"
          page="/02-input-processing-and-output/01-saying-hello"
        />
        <Exercise
          name="Counting the Number of Characters"
          page="/02-input-processing-and-output/02-counting-the-number-of-characters"
        />
        <Exercise
          name="Printing Quotes"
          page="/02-input-processing-and-output/03-printing-quotes"
        />
        <Exercise
          name="Mad Lib"
          page="/02-input-processing-and-output/04-mad-lib"
        />
        <Exercise
          name="Simple Math"
          page="/02-input-processing-and-output/05-simple-math"
        />
        <Exercise
          name="Retirement Calculator"
          page="/02-input-processing-and-output/06-retirement-calculator"
        />
      </Exercises>
      <Exercises category="Calculations" />
      <Exercises category="Making Decisions" />
      <Exercises category="Functions" />
      <Exercises category="Repetition" />
      <Exercises category="Data Structures" />
      <Exercises category="Working with Files" />
      <Exercises category="Working with External Services" />
      <Exercises category="Full Programs" />
    </>
  );
}
