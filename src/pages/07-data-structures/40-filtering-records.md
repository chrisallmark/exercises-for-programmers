## Filtering Records

Sorting records is helpful, but sometimes you need to filter down the results to find or display only what you’re looking for.

Given the following data set

![Filtering Records](filtering-records.png)

create a program that lets a user locate all records that match the search string by comparing the search string to the first or last name field.

### Example Output

```
Enter a search string:  Jac
Results:
Name                | Position          | Separation Date
--------------------|-------------------|----------------
Jacquelyn Jackson   | DBA               |
Jake Jacobson       | Programmer        |
```

### Constraint

* Implement the data using an array of maps or an associative array.