import config from './config.js';

const button = document.getElementById('button');
const audioElement = document.getElementById('audio');

// Disable/enable joke button
function toggleButton() {
  button.disabled = !button.disabled;
}

// Pass the joke to VoiceRSS API:
function tellMe(joke) {
  VoiceRSS.speech({
    key: `${config.ttsApiKey}`,
    src: joke,
    hl: 'en-au', // our robot is an Aussie 🇦🇺 🦘
    v: 'Linda',
    r: 0, 
    c: 'mp3',
    f: '44khz_16bit_stereo',
    ssml: false
  });
}

async function getJokes() {
  let joke = '';
  const apiUrl = 'https://v2.jokeapi.dev/joke/Programming?blacklistFlags=nsfw,religious,political,racist,sexist,explicit';
  
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    // If the return data includes a setup, this means we're getting a two-part
    // joke. We are separating the setup and punchline with ellipses here:
    if (data.setup) {
      joke = `${data.setup} ... ${data.delivery}`;
    } else {
    // Single jokes (no setup) do not require formatting and can be directly assigned:
      joke = data.joke;
    }

    // Text-to-speech:
    tellMe(joke);

    // Disable button:
    toggleButton();

  } catch (error) {
    console.log('Yikes!', error)
  }
}

// Event listeners
button.addEventListener('click', getJokes);
audioElement.addEventListener('ended', toggleButton);