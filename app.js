const computerChoiceDisplay = document.getElementById('computer-choice');
const userChoiceDisplay = document.getElementById('user-choice');
const resultDisplay = document.getElementById('result');
const possibleChoices = document.querySelectorAll('button');
let userChoice;
let computerChoice;
let result;

// Event listener for the user's choice
possibleChoices.forEach(choice => choice.addEventListener('click', (e) => {
  userChoice = e.target.id;
  userChoiceDisplay.innerHTML = userChoice;
  generateComputerChoice();
  getResult();
}));

// Function to generate a random computer choice
function generateComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 3); // 0, 1, or 2
  if (randomNumber === 0) {
    computerChoice = 'rock';
  } else if (randomNumber === 1) {
    computerChoice = 'paper';
  } else if (randomNumber === 2) {
    computerChoice = 'scissors';
  }
  computerChoiceDisplay.innerHTML = computerChoice;
}

// Function to determine the result
function getResult() {
  if (computerChoice === userChoice) {
    result = "It's a draw!";
  } else if (
    (computerChoice === 'rock' && userChoice === 'paper') ||
    (computerChoice === 'paper' && userChoice === 'scissors') ||
    (computerChoice === 'scissors' && userChoice === 'rock')
  ) {
    result = "You win!";
  } else {
    result = "You lost!";
  }
  resultDisplay.innerHTML = result;
}
