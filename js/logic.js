const choices = ["rock", "paper", "scissors"];

const computerPlay = () => {
  return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(playerSelection, computerSelection) {
  if (!playerSelection || typeof playerSelection !== "string") {
    return "Invalid input, round void!";
  }

  let playerChoice = playerSelection.toLowerCase();
  let computerChoice = computerSelection.toLowerCase();

  if (playerChoice !== "rock" && playerChoice !== "paper" && playerChoice !== "scissors") {
    return "Invalid input, round void!";
  }

  if (playerChoice === computerChoice) {
    return "It's a tie!";
  }

  if (playerChoice === "rock") {
    if (computerChoice === "scissors") {
      return "You win! Rock beats scissors";
    } else {
      return "You lose! Paper beats rock";
    }
  }

  if (playerChoice === "paper") {
    if (computerChoice === "rock") {
      return "You win! Paper beats rock";
    } else {
      return "You lose! Scissors beats paper";
    }
  }

  if (playerChoice === "scissors") {
    if (computerChoice === "paper") {
      return "You win! Scissors beats paper";
    } else {
      return "You lose! Rock beats scissors";
    }
  }
}


let playerScore, computerScore;

function playGame() {
  playerScore = 0;
  computerScore = 0;

  for (let i = 0; i < 5;) {
    const computerSelection = computerPlay();
    const playerSelection = prompt("Rock, Paper, or Scissors?").toLowerCase();
    const result = playRound(playerSelection, computerSelection);
    console.log(result);
    if (result.includes("win")) {
      playerScore++;
      i++;
    } else if (result.includes("lose")) {
      computerScore++;
      i++;
    }

  }
  console.log(`Final Score: Player ${playerScore} :  Computer ${computerScore}`);
  if (playerScore > computerScore) {
    console.log("Congratulations! You won the game!");
  }
  else if (playerScore < computerScore) {
    console.log("Sorry, you lost the game!");
  }
  else {
    console.log("The game is a tie!");
  }

  playAgain();
}

function playAgain() {
  const playAgain = confirm("Do you want to play again?");
  if (playAgain) {
    playGame();
  }
  else {
    console.log("Thanks for playing!");
  }
}

playGame();