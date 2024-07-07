`use strict`;

// DOM - Document Object Model - connection point between js and other files. so html file with a button that links to js
// DOM - document.queryselector()

/* 
// DOM manipulation - changing values
console.log(document.querySelector(`.message`).textContent); // outputs the text in console
document.querySelector(`.number`).textContent = 13; // changes the ID to whatever i tell it too
document.querySelector(`.guess`).value = 7;
 */

// event listener basicly waits for an input via keypress, buttonclick, scroll, mouse movement ect.
document.querySelector(`.check`).addEventListener(`click`, function () {
  // when check button is clicked, print the inputed value
  console.log(document.querySelector(`.guess`).value);
});
