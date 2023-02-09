## Creating Your Own Time Service

Consuming external services is one thing, but it’s important to be able to create and consume your own service that others can use, so you can support other developers who want to use services you’ll provide.

Create a simple web service that returns the current time as JSON data, such as: { "currentTime": "2050-01-24 15:06:26" }. Then create a client application that connects to the web service, parses the response, and displays the time.

### Example Output

```
The current time is 15:06:26 UTC January 4 2050.
```

### Constraints

- In your server application, be sure to set the content type to application/json when you send the response.
- Build the server app with as little code as possible.
