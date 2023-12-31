let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

const generateTarget = () => {
  return Math.floor(Math.random() * 10);
};

const getAbsoluteDistance = (num1, num2) => {
  return Math.abs(num1 - num2);
};

const checkHumanGuess = (humanGuess) => {
  if (humanGuess < 0 || humanGuess > 9) {
    alert("Please enter a number between 0 and 9.");
    return false;
  } else {
    return true;
  }
};

const compareGuesses = (humanGuess, computerGuess, targetToGuess) => {
  if (checkHumanGuess(humanGuess) === true) {
    if (
      getAbsoluteDistance(targetToGuess, humanGuess) ===
      getAbsoluteDistance(targetToGuess, computerGuess)
    ) {
      return true;
    } else if (
      getAbsoluteDistance(targetToGuess, humanGuess) <
      getAbsoluteDistance(targetToGuess, computerGuess)
    ) {
      return true;
    } else if (
      getAbsoluteDistance(targetToGuess, humanGuess) >
      getAbsoluteDistance(targetToGuess, computerGuess)
    ) {
      return false;
    }
  } 
};

const updateScore = (winner) => {
  if (winner === "human") {
    humanScore += 1;
  } else if (winner === "computer") {
    computerScore += 1;
  }
};

const advanceRound = () => {
  return (currentRoundNumber += 1);
};
