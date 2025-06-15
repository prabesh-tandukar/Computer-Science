// Number guessing game

// 1. A number that the user will have to guess
// 2. A way user enter their guess
// 3. A way the system validates the guess
// 4. Compares right or wrong and tracks attempts
// 5. if right display winning msg with the attempts, if wrong loop the guessing game until right
// 6. Track high score, the least attempts means the best score

const readline = require("readline/promises");

function getRandomNumber(max) {
  return Math.floor(Math.random() * max) + 1;
}

const randomNumber = getRandomNumber(10);
console.log(randomNumber);

let attempts = 0;
let score = 10;

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

async function main() {
  for (let i = 0; i < 10; i++) {
    const guess = await rl.question("Guess the number from 1 to 10: ");
    const guessNum = Number(guess);
    if (guessNum === randomNumber) {
      attempts++;
      console.log(`Yes ${guess} is the right number. Score: ${score} `);
      break;
    } else {
      attempts++;
      score--;
      let hint = "";
      if (guessNum < randomNumber) {
        hint = "higher";
      } else {
        hint = "lower";
      }
      console.log(
        `${guess} is not the number. Try ${hint}. Score: ${score}. Attemps: ${attempts}`
      );
    }
  }
  rl.close();
}

main();
