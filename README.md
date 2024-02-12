# Joke Robot
Joke Robot makes use of a couple of APIs: [JokeAPI](https://sv443.net/jokeapi/v2/) (a REST API that serves uniformly formatted jokes) and [Text-to-Speech API](https://rapidapi.com/voicerss/api/text-to-speech-1), which takes the jokes and plays them back in audio format.

(Because "How do you find Will Smith in the snow? You look for the *Fresh Prints*!" just sounds better out loud than it looks in written text!)

## Configuration

1. Set up an account with [JokeAPI](https://sv443.net/jokeapi/v2/).
2. Set up an account with [Text-to-Speech API](https://rapidapi.com/voicerss/api/text-to-speech-1).
3. Copy `config.example.js` to `config.js`.
4. Replace the placeholder values in `config.js` with your own API keys.
5. Save the changes and run the application using a local development server such as [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer).