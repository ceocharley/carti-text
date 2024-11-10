// Function to randomly convert a character to uppercase or lowercase
function randomCase(char) {
  return Math.random() > 0.5 ? char.toUpperCase() : char.toLowerCase();
}

// Function to randomly add special characters or numbers
function addRandomFlair(char) {
  const flairs = ['!', '.', '❤️', '>', '?', '0', '1', '2', '3', '@', '#'];
  return Math.random() < 0.2 ? char + flairs[Math.floor(Math.random() * flairs.length)] : char;
}

// Function to convert text into carti style
function cartiStyle(text) {
  let result = '';

  for (let i = 0; i < text.length; i++) {
    if (text[i] === ' ') {
      // Add a chance to repeat spaces or insert special characters
      result += Math.random() < 0.1 ? ' ' + addRandomFlair(' ') : ' ';
    } else {
      // Randomly change the case of characters and add flair
      let char = randomCase(text[i]);
      char = addRandomFlair(char);
      result += char;
    }
  }

  return result;
}

const submit = document.querySelector("#submit");

const before = document.querySelector("#input");
const after = document.querySelector("#output");

submit.addEventListener("click", function() {
    after.textContent = cartiStyle(before.value); // Corrected here
});
