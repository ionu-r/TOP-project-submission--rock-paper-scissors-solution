// Settings
const CHOICES = ["rock", "paper", "scissors"];
let humanScore = 0;
let computerScore = 0;

// Get AI choice
function getComputerChoice() {
  const randomPick = Math.floor(Math.random() * CHOICES.length);
  return CHOICES[randomPick];
}

// Get user input
function getHumanChoice() {
  while (true) {
    let choice = prompt("Enter your choice");
    choice = choice.trim().toLocaleLowerCase();
    // Check if the value entered is a validated one
    if (!CHOICES.includes(choice)) {
      console.log(`Invalid data - ${choice}`);
    } else {
      return choice;
    }
  }
}

// Round settings
function playRound(humanChoice, computerChoice) {
  if (
    (humanChoice === "rock" && computerChoice === "paper") ||
    (humanChoice === "paper" && computerChoice === "scissors") ||
    (humanChoice === "scissors" && computerChoice === "rock")
  ) {
    computerScore++;
    console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
  } else if (humanChoice === computerChoice) {
    console.log("It's a draw!");
  } else {
    humanScore++;
    console.log(`You win! ${humanChoice} beats ${computerChoice}`);
  }
}

// Game engine
function playGame() {
  // Play 5 rounds
  for (let i = 0; i != 5; i++) {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
  }

  // Say who won through a friendly message
  if (humanScore > computerScore) {
    console.log("\nYou're god damn rock-paper-scissors genius! You won");
  } else if (humanScore < computerScore) {
    console.log("\nFatality! You lost");
  } else if (humanScore === computerScore) {
    console.log("\nNo one won");
  }
}

// Start game
playGame();
