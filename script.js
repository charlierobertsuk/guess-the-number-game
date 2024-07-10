`use strict`;

// DOM - Document Object Model - connection point between js and other files. so html file with a button that links to js
// DOM - document.queryselector()

/* 
// DOM manipulation - changing values
console.log(document.querySelector(`.message`).textContent); // outputs the text in console
document.querySelector(`.number`).textContent = 13; // changes the ID to whatever i tell it too
document.querySelector(`.guess`).value = 7;
 */

// random number generator
// .random is between 0 and 1, so if timesed by 20 it will be between 0 and 20
//trunc truncates it into an intager. but that means 20 is impossible cos 19.9999999 so just add 1
const maxNumber = 20;
let ranNumber = Math.trunc(Math.random() * maxNumber) + 1;
let score = maxNumber;
let highscore = 0;

document.querySelector(`.score`).textContent = score;
document.querySelector(`.between`).textContent = `(Between 1 and ${maxNumber})`;

//console.log(ranNumber);
//document.querySelector(`.number`).textContent = ranNumber;

// event listener basicly waits for an input via keypress, buttonclick, scroll, mouse movement ect.
// when check button is clicked, print the inputed value

document.querySelector(`.check`).addEventListener(`click`, function () {
  const guess = Number(document.querySelector(`.guess`).value);

  //console.log(` Input: ${document.querySelector(`.guess`).value}`);
  //console.log(`${guess} is a ${typeof guess}`);

  // when there is no input
  if (!guess) {
    document.querySelector(`.message`).textContent = `No Number Input`;

    // when there is a win
  } else if (guess === ranNumber) {
    document.querySelector(`.message`).textContent = `Correct Number!`;
    document.querySelector(`.number`).textContent = ranNumber;

    // manipulate css when there is a win
    document.querySelector(`body`).style.backgroundColor = `#60b347`;
    document.querySelector(`.number`).style.width = `30rem`;

    if (score > highscore) {
      highscore = score;
      document.querySelector(`.highscore`).textContent = highscore;
    }
    // this is dry code - half the size
  } else if (guess !== ranNumber && guess < maxNumber && guess >= 0) {
    if (score > 1) {
      document.querySelector(`.message`).textContent =
        guess > ranNumber ? `Lower` : `higher`; // using the turnary operator
      score--;
      document.querySelector(`.score`).textContent = score;
    } else {
      document.querySelector(`.message`).textContent = `You Lost!`;
    }
  } else {
    document.querySelector(`.message`).textContent = `Invalid`;
  }
});

document.querySelector(`.again`).addEventListener(`click`, function () {
  ranNumber = Math.trunc(Math.random() * maxNumber) + 1;

  document.querySelector(`.message`).textContent = `Start guessing...`;
  document.querySelector(`.score`).textContent = maxNumber;
  document.querySelector(`.number`).textContent = `?`;
  document.querySelector(`.guess`).value = ``;
  document.querySelector(`body`).style.backgroundColor = `#222`;
  document.querySelector(`.number`).style.width = `15rem`;
  document.querySelector(
    `.between`
  ).textContent = `(Between 1 and ${maxNumber})`;
});

// add +1 +5 +10 + 50 buttons with its oppisites
