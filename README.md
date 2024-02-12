# Joke Robot
Joke Robot makes use of a couple of APIs: [JokeAPI](https://sv443.net/jokeapi/v2/) (a REST API that serves uniformly formatted jokes) and [Text-to-Speech API](https://rapidapi.com/voicerss/api/text-to-speech-1), which takes the jokes and plays them back in audio format.

(Because "How do you find Will Smith in the snow? You look for the *Fresh Prints*!" just sounds better out loud than it looks in written text!)

## Sample
Here's my favourite programming joke from the JokeAPI:

*A SQL statement walks into a bar and sees two tables.*
*It approaches, and asks "may I join you?"*

~ ba dum tss ~ 🥁

## Configuration

1. Set up an account with [Text-to-Speech API](https://rapidapi.com/voicerss/api/text-to-speech-1).
2. Copy `config.example.js` to `config.js`.
3. Replace the placeholder value in `config.js` with your own API key.
4. Save the changes and run the application using a local development server such as [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer).