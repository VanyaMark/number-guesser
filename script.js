let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

const generateTarget = () => {
  return Math.floor(Math.random() * 10);
};

const compareGuesses = (humanGuess, computerGuess, targetToGuess) => {
  if (
    Math.abs(targetToGuess - humanGuess) ===
    Math.abs(targetToGuess - computerGuess)
  ) {
    return true;
  } else if (
    Math.abs(targetToGuess - humanGuess) <
    Math.abs(targetToGuess - computerGuess)
  ) {
    return true;
  } else if (
    Math.abs(targetToGuess - humanGuess) >
    Math.abs(targetToGuess - computerGuess)
  ) {
    return false;
  }
};
