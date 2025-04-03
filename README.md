# Guess My Number Game

Welcome to my **Guess My Number** game repository! This is an interactive number-guessing game I created as part of my learning journey through the **Udemy course: "The Complete JavaScript Course"** by Jonas Schmedtmann. You can find the course here: [The Complete JavaScript Course](https://www.udemy.com/course/the-complete-javascript-course/). This project showcases my skills in JavaScript, CSS, and HTML, focusing on DOM manipulation, event handling, and game logic.

## About This Project

"Guess My Number" is a single-player game where you try to guess a secret number between 1 and 20. With each guess, you receive feedback to guide you, and your score decreases with every incorrect attempt. The goal is to guess the number correctly before your score runs out, aiming to beat your highscore!

### Skills Applied
This project applies the following concepts from the Udemy course:
- **DOM Manipulation**: Updating text content, styles, and input values dynamically.
- **Event Listeners**: Handling button clicks for checking guesses and resetting the game.
- **Functions**: Reusable code for displaying messages and managing game state.
- **Conditionals**: Logic for win/lose conditions and input validation.
- **CSS Styling**: Retro design with the "Press Start 2P" font and dynamic background changes.

## Features
- **Random Number**: A secret number between 1 and 20 is generated each game.
- **Guess Input**: Enter a number and click "Check!" to submit your guess.
- **Feedback System**: Messages like "Lower," "Higher," or "Correct Number!" guide your guesses.
- **Score Tracking**: Starts at 20 and decreases with each wrong guess; tracks highscore.
- **Win State**: Background turns green, and the number box widens upon a correct guess.
- **Reset Option**: "Again!" button restarts the game with a new number.
- **Visual Design**: Pixel-art style with a clean, centered layout.

## Files Included
- `index.html`: HTML structure with game elements and a credit to Jonas Schmedtmann.
- `style.css`: Retro styling using the "Press Start 2P" font from Google Fonts.
- `script.js`: JavaScript logic for game mechanics, random number generation, and UI updates.

## How to Play
1. **Clone the Repository**:
   ```bash
   git clone https://github.com/charlierobertsuk/guess-my-number.git
   ```
2. **Open the Game**:
   - Navigate to the project folder.
   - Open `index.html` in a web browser (e.g., Chrome, Firefox).
3. **Game Rules**:
   - Enter a number between 1 and 20 in the input field and click "Check!".
   - If your guess is too high or too low, you’ll get a hint, and your score decreases.
   - Guess correctly to win and update your highscore if it’s higher than before.
   - If your score reaches 0, you lose.
   - Click "Again!" to start a new game.

## Setup
- No additional dependencies are required—just a modern web browser.
- The game uses an external font from Google Fonts, loaded via the CSS import.

## Acknowledgments
- A massive thank you to **Jonas Schmedtmann** for his excellent course, which provided the foundation for this project.
- This game is based on the "Guess My Number" project from [The Complete JavaScript Course](https://www.udemy.com/course/the-complete-javascript-course/), implemented with my own understanding and tweaks.
