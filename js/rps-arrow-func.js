// Reload page
const reloadPage = () => document.location.reload();

// Settings
let humanScore = 0;
let computerScore = 0;
let draw = 0;

const CHOICES = ["rock", "paper", "scissors"];
const MESS_WON = [
  "You're good. You won",
  "You're god damn genius! You won",
  "You won :D",
  "You triumphed",
  "The prophecy has been fulfilled. You won",
];
const MESS_LOSE = [
  "You kinda suck at this... You lost",
  "Fatality! You lost",
  "You suck",
];
const MESS_DRAW = ["It's a draw", "No one won", "It's a tie"];

// Select randomly from an array
const randomPick = (arr) => arr[Math.floor(Math.random() * arr.length)];

// Get user input
const getHumanChoice = () => {
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
};

// Round settings
const playRound = (humanChoice, computerChoice) => {
  if (humanChoice === computerChoice) {
    console.log("It's a draw!");
    draw++;
  } else {
    if (
      (humanChoice === "rock" && computerChoice === "paper") ||
      (humanChoice === "paper" && computerChoice === "scissors") ||
      (humanChoice === "scissors" && computerChoice === "rock")
    ) {
      console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
      computerScore++;
    } else {
      console.log(`You win! ${humanChoice} beats ${computerChoice}`);
      humanScore++;
    }
  }
};

// Game engine
const playGame = () => {
  // Clear the browser console
  console.clear();

  // Play 5 rounds
  for (let i = 0; i != 5; i++) {
    playRound(getHumanChoice(), randomPick(CHOICES));
  }

  // Display the score
  console.log(
    `\nScore: You ${humanScore} - AI ${computerScore} - Draws ${draw}`
  );

  // Say who won through a friendly message
  if (humanScore == computerScore) {
    console.log(randomPick(MESS_DRAW));
  } else {
    if (humanScore > computerScore) {
      console.log(randomPick(MESS_WON));
    } else {
      console.log(randomPick(MESS_LOSE));
    }
  }
};

// Start game
playGame();
