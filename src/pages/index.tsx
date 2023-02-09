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
      <Exercises category="Calculations">
        <Exercise
          name="Area of a Rectangular Room"
          page="/03-calculations/07-area-of-a-rectangular-room"
        />
        <Exercise name="Pizza Party" page="/03-calculations/08-pizza-party" />
        <Exercise
          name="Paint Calculator"
          page="/03-calculations/09-paint-calculator"
        />
        <Exercise
          name="Self Checkout"
          page="/03-calculations/10-self-checkout"
        />
        <Exercise
          name="Currency Conversion"
          page="/03-calculations/11-currency-conversion"
        />
        <Exercise
          name="Computing Simple Interest"
          page="/03-calculations/12-computing-simple-interest"
        />
        <Exercise
          name="Computing Simple Interest"
          page="/03-calculations/13-determining-compound-interest"
        />
      </Exercises>
      <Exercises category="Making Decisions">
        <Exercise
          name="Tax Calculator"
          page="/04-making-decisions/14-tax-calculator"
        />
        <Exercise
          name="Password Validation"
          page="/04-making-decisions/15-password-validation"
        />
        <Exercise
          name="Legal Driving Age"
          page="/04-making-decisions/16-legal-driving-age"
        />
        <Exercise
          name="Blood Alchohol Calculator"
          page="/04-making-decisions/17-blood-alchohol-calculator"
        />
        <Exercise
          name="Temperature Converter"
          page="/04-making-decisions/18-temperature-convertor"
        />
        <Exercise
          name="BMI Calculator"
          page="/04-making-decisions/19-bmi-calculator"
        />
        <Exercise
          name="Multistate Sales Tax Calculator"
          page="/04-making-decisions/20-multistate-sales-tax-calculator"
        />
        <Exercise
          name="Numbers to Names"
          page="/04-making-decisions/21-numbers-to-names"
        />
        <Exercise
          name="Comparing Numbers"
          page="/04-making-decisions/22-troubleshooting-car-issues"
        />
        <Exercise
          name="Troubleshooting Car Issues"
          page="/04-making-decisions/99"
        />
      </Exercises>
      <Exercises category="Functions">
        <Exercise
          name="Anagram Checker"
          page="/05-functions/24-anagram-checker"
        />
        <Exercise
          name="Password Strength Indicator"
          page="/06-repetition/25-password-strength-indicator"
        />
        <Exercise
          name="Months to Pay Off a Credit Card"
          page="/06-repetition/26-months-to-pay-off-a-credit-card"
        />
        <Exercise
          name="Validating Inputs"
          page="/06-repetition/27-validating-inputs"
        />
      </Exercises>
      <Exercises category="Repetition">
        <Exercise
          name="Adding Numbers"
          page="/06-repetition/28-adding-numbers"
        />
        <Exercise
          name="Handling Bad Input"
          page="/06-repetition/29-handling-bad-input"
        />
        <Exercise
          name="Multiplication Table"
          page="/06-repetition/30-multiplication-table"
        />
        <Exercise
          name="Karvonen Heart Rate"
          page="/06-repetition/31-karvonen-heart-rate"
        />
        <Exercise
          name="Guess the Number Game"
          page="/06-repetition/32-guess-the-number-game"
        />
      </Exercises>
      <Exercises category="Data Structures">
        <Exercise
          name="Magic Eight Ball"
          page="/07-data-structures/33-magic-eight-ball"
        />
        <Exercise
          name="Employee List Removal"
          page="/07-data-structures/34-employee-list-removal"
        />
        <Exercise
          name="Picking a Winner"
          page="/07-data-structures/35-picking-a-winner"
        />
        <Exercise
          name="Computing Statistics"
          page="/07-data-structures/36-computing-statistics"
        />
        <Exercise
          name="Password Generator"
          page="/07-data-structures/37-password-generator"
        />
        <Exercise
          name="Filtering Values"
          page="/07-data-structures/38-filtering-values"
        />
        <Exercise
          name="Sorting Records"
          page="/07-data-structures/39-sorting-records"
        />
        <Exercise
          name="Filtering Records"
          page="/07-data-structures/40-filtering-records"
        />
      </Exercises>
      <Exercises category="Working with Files">
        <Exercise
          name="Name Sorter"
          page="/08-working-with-files/42-name-sorter"
        />
        <Exercise
          name="Parsing a Data File"
          page="/08-working-with-files/42-parsing-a-data-file"
        />
        <Exercise
          name="Website Generator"
          page="/08-working-with-files/43-website-generator"
        />
        <Exercise
          name="Product Search"
          page="/08-working-with-files/44-product-search"
        />
        <Exercise
          name="Word Finder"
          page="/08-working-with-files/45-word-finder"
        />
        <Exercise
          name="Word Frequency Finder"
          page="/08-working-with-files/46-word-frequency-finder"
        />
      </Exercises>
      <Exercises category="Working with External Services">
        <Exercise
          name="Who's In Space?"
          page="/09-working-with-external-services/47-whos-in-space"
        />
        <Exercise
          name="Grabbing the Weather"
          page="/09-working-with-external-services/48-grabbing-the-weather"
        />
        <Exercise
          name="Flickr Photo Search"
          page="/09-working-with-external-services/49-flickr-photo-search"
        />
        <Exercise
          name="Movie Recommendations"
          page="/09-working-with-external-services/50-movie-recommendations"
        />
        <Exercise
          name="Pushing Notes to Firebase"
          page="/09-working-with-external-services/51-pushing-notes-to-firebase"
        />
        <Exercise
          name="Creating Your Own Time Service"
          page="/09-working-with-external-services/52-creating-your-own-time-service"
        />
      </Exercises>
      <Exercises category="Full Programs">
        <Exercise name="Todo List" page="/10-full-programs/53-todo-list" />
        <Exercise
          name="URL Shortener"
          page="/10-full-programs/54-url-shortener"
        />
        <Exercise
          name="Text Sharing"
          page="/10-full-programs/55-text-sharing"
        />
        <Exercise
          name="Tracking Inventory"
          page="/10-full-programs/56-tracking-inventory"
        />
        <Exercise name="Trivia App" page="/10-full-programs/57-trivia-app" />
      </Exercises>
    </>
  );
}
