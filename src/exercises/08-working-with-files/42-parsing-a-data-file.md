## Parsing a Data File

Sometimes data comes in as a structured format that you have to break down and turn into records so you can process them. CSV, or comma separated values, is a common standard for doing this.

Construct a program that reads in the following data file:

```
Ling,Mai,55900
Johnson,Jim,56500
Jones,Aaron,46000
Jones,Chris,34500
Swift,Geoffrey,14200
Xiong,Fong,65000
Zarnecki,Sabrina,51500
```

Process the records and display the results formatted as a table, evenly spaced, as shown in the example output.

### Example Output

```
Last     First     Salary
-------------------------
Ling     Mai       55900
Johnson  Jim       56500
Jones    Aaron     46000
Jones    Chris     34500
Swift    Geoffrey  14200
Xiong    Fong      65000
Zarnecki Sabrina   51500
```

### Constraints

* Write your own code to parse the data. Don’t use a CSV parser.
* Use spaces to align the columns.
* Make each column one space longer than the longest value in the column.