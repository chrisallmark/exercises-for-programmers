## Pushing Notes to Firebase

Some external services allow you to update data, not just read it. [Firebase](https://firebase.google.com/) is a service that lets you create your own database so you can save data for web, mobile, and desktop applications. And you can use it with any programming language, thanks to its JSON-based API.

Create a simple command-line application that lets you save and show notes, using Firebase to save the notes. The application should support the following commands:

* ```mynotes new Learn how to invert binary trees``` should save the note.
* Use ```mynotes show``` to display all of the existing notes. 

### Example Output

```
$ mynotes new Learn how to invert binary trees
Your note was saved.

$ mynotes show
2050-12-31 - Learn how to invert binary trees
2050-12-30 - Notetaking on the command line is cool.
```

### Constraints

* Create a configuration file that stores the API key.
* Use the REST documentation at https://firebase.google.com/docs/reference/rest/database instead of a premade client library.