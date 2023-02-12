import { Exercise, Exercises } from "@/components";

export default function Home() {
  return (
    <>
      <Exercises
        category="Input, Processing & Output"
        color="red"
        folder="02-input-processing-and-output"
      >
        <Exercise name="Saying Hello" page="01-saying-hello" />
        <Exercise
          name="Counting the Number of Characters"
          page="02-counting-the-number-of-characters"
        />
        <Exercise name="Printing Quotes" page="03-printing-quotes" />
        <Exercise name="Mad Lib" page="04-mad-lib" />
        <Exercise name="Simple Math" page="05-simple-math" />
        <Exercise
          name="Retirement Calculator"
          page="06-retirement-calculator"
        />
      </Exercises>
      <Exercises
        category="Calculations"
        color="orange"
        folder="03-calculations"
      >
        <Exercise
          name="Area of a Rectangular Room"
          page="07-area-of-a-rectangular-room"
        />
        <Exercise name="Pizza Party" page="08-pizza-party" />
        <Exercise name="Paint Calculator" page="09-paint-calculator" />
        <Exercise name="Self Checkout" page="10-self-checkout" />
        <Exercise name="Currency Conversion" page="11-currency-conversion" />
        <Exercise
          name="Computing Simple Interest"
          page="12-computing-simple-interest"
        />
        <Exercise
          name="Computing Simple Interest"
          page="13-determining-compound-interest"
        />
      </Exercises>
      <Exercises
        category="Making Decisions"
        color="yellow"
        folder="04-making-decisions"
      >
        <Exercise name="Tax Calculator" page="14-tax-calculator" />
        <Exercise name="Password Validation" page="15-password-validation" />
        <Exercise name="Legal Driving Age" page="16-legal-driving-age" />
        <Exercise
          name="Blood Alchohol Calculator"
          page="17-blood-alchohol-calculator"
        />
        <Exercise
          name="Temperature Converter"
          page="18-temperature-convertor"
        />
        <Exercise name="BMI Calculator" page="19-bmi-calculator" />
        <Exercise
          name="Multistate Sales Tax Calculator"
          page="20-multistate-sales-tax-calculator"
        />
        <Exercise name="Numbers to Names" page="21-numbers-to-names" />
        <Exercise name="Comparing Numbers" page="22-comparing-numbers" />
        <Exercise
          name="Troubleshooting Car Issues"
          page="23-troubleshooting-car-issues"
        />
      </Exercises>
      <Exercises category="Functions" color="green" folder="05-functions">
        <Exercise name="Anagram Checker" page="24-anagram-checker" />
        <Exercise
          name="Password Strength Indicator"
          page="25-password-strength-indicator"
        />
        <Exercise
          name="Months to Pay Off a Credit Card"
          page="26-months-to-pay-off-a-credit-card"
        />
        <Exercise name="Validating Inputs" page="27-validating-inputs" />
      </Exercises>
      <Exercises category="Repetition" color="teal" folder="06-repetition">
        <Exercise name="Adding Numbers" page="28-adding-numbers" />
        <Exercise name="Handling Bad Input" page="29-handling-bad-input" />
        <Exercise name="Multiplication Table" page="30-multiplication-table" />
        <Exercise name="Karvonen Heart Rate" page="31-karvonen-heart-rate" />
        <Exercise
          name="Guess the Number Game"
          page="32-guess-the-number-game"
        />
      </Exercises>
      <Exercises
        category="Data Structures"
        color="blue"
        folder="07-data-structures"
      >
        <Exercise name="Magic Eight Ball" page="33-magic-eight-ball" />
        <Exercise
          name="Employee List Removal"
          page="34-employee-list-removal"
        />
        <Exercise name="Picking a Winner" page="35-picking-a-winner" />
        <Exercise name="Computing Statistics" page="36-computing-statistics" />
        <Exercise name="Password Generator" page="37-password-generator" />
        <Exercise name="Filtering Values" page="38-filtering-values" />
        <Exercise name="Sorting Records" page="39-sorting-records" />
        <Exercise name="Filtering Records" page="40-filtering-records" />
      </Exercises>
      <Exercises
        category="Working with Files"
        color="violet"
        folder="08-working-with-files"
      >
        <Exercise name="Name Sorter" page="41-name-sorter" />
        <Exercise name="Parsing a Data File" page="42-parsing-a-data-file" />
        <Exercise name="Website Generator" page="43-website-generator" />
        <Exercise name="Product Search" page="44-product-search" />
        <Exercise name="Word Finder" page="45-word-finder" />
        <Exercise
          name="Word Frequency Finder"
          page="46-word-frequency-finder"
        />
      </Exercises>
      <Exercises
        category="Working with External Services"
        color="purple"
        folder="09-working-with-external-services"
      >
        <Exercise name="Who's In Space?" page="47-whos-in-space" />
        <Exercise name="Grabbing the Weather" page="48-grabbing-the-weather" />
        <Exercise name="Flickr Photo Search" page="49-flickr-photo-search" />
        <Exercise
          name="Movie Recommendations"
          page="50-movie-recommendations"
        />
        <Exercise
          name="Pushing Notes to Firebase"
          page="51-pushing-notes-to-firebase"
        />
        <Exercise
          name="Creating Your Own Time Service"
          page="52-creating-your-own-time-service"
        />
      </Exercises>
      <Exercises
        category="Full Programs"
        color="pink"
        folder="10-full-programs"
      >
        <Exercise name="Todo List" page="53-todo-list" />
        <Exercise name="URL Shortener" page="54-url-shortener" />
        <Exercise name="Text Sharing" page="55-text-sharing" />
        <Exercise name="Tracking Inventory" page="56-tracking-inventory" />
        <Exercise name="Trivia App" page="57-trivia-app" />
      </Exercises>
    </>
  );
}
