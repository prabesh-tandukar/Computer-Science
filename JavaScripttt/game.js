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
  let session_highscore = 0;
  let gameOn = true;

  while (gameOn) {
    const play = await rl.question("Ready for a guess ? ( Y or N ): ");
    if (play === "y" || play === "Y") {
      gameOn = true;
      session_highscore = game(session_highscore);
      console.log(session_highscore);
    } else if (play === "n" || play === "N") {
      gameOn = false;
      break;
    } else {
      gameOn = true;
      console.log("--- Please enter Y for Yes or N for No ---");
      continue;
    }
  }

  rl.close();
}

main();

async function game(sess_score) {
  let highscore = 0;
  for (let i = 0; i < 10; i++) {
    const guess = await rl.question("Guess the number from 1 to 10: ");
    const guessNum = Number(guess);
    if (guessNum === randomNumber) {
      attempts++;
      console.log(`Yes ${guess} is the right number. Score: ${score} `);
      if (score > sess_score) {
        highscore = score;
        console.log(`You made the highscore: ${highscore}`);
      }
      // main();
      attempts = 0;
      score = 10;

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
  return highscore;
  // rl.close();
}

//Notes: made some progress like two loops one game loop and one main loop
//but having problem passing highscore from one game to another
//having problem rerunning the game loop logic fresh once played
//
