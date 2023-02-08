## Text Sharing

Create a web application that lets users share a snippet of text, similar to http://pastie.org. The program you write should follow these specifications:

* The user should enter the text into a text area and save the text.
* The text should be stored in a data store.
* The program should generate a URL that can be used to retrieve the saved text.
* When a user follows that URL, the text should be displayed, along with an invitation to edit the text.
* When a user clicks the Edit button, the text should be copied and placed in the same interface used to create
new text snippets.

### Constraint

* Use something other than a primary key for the URL, such as a slug that you generate. Investigate SHA or MD5 hashing.