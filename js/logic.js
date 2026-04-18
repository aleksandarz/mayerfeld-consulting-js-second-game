const choices = ["rock", "paper", "scissors"];

const computerPlay = () => {
  return choices[Math.floor(Math.random() * choices.length)];
};

function playRound(playerSelection, computerSelection) {
  if (!playerSelection || typeof playerSelection !== "string") {
    return "Invalid input, round void!";
  }
  
  let playerChoice = playerSelection.toLowerCase().trim();
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

  for (let i = 0; i < 5; ) {
    const computerSelection = computerPlay();
    const playerInput = prompt("Rock, Paper, or Scissors?");
    const result = playRound(playerInput, computerSelection);
    console.log(result);

    if (result.includes("win")) {
      alert(result);
      playerScore++;
      i++;
      if (i < 5) {
        alert("This is round " + (i+1) + " of 5!" + "\nCurrent Score: Player " + playerScore + " : Computer " + computerScore);
      }
    } else if (result.includes("lose")) {
      alert(result);
      computerScore++;
      i++;
      if (i < 5) {
        alert("This is round " + (i+1) + " of 5!" + "\nCurrent Score: Player " + playerScore + " : Computer " + computerScore);
      } 
    } else if (result.includes("tie")) {
      alert(result);
      computerScore++;
      playerScore++;
      i++;
     if (i < 5) {
        alert("This is round " + (i+1) + " of 5!" + "\nCurrent Score: Player " + playerScore + " : Computer " + computerScore);
      }
    } else {
      alert("Invalid input or cancelled. Please try again to complete the 5 rounds!");
    }
  }

  console.log(`Final Score: Player ${playerScore} : Computer ${computerScore}`);

  if (playerScore > computerScore) {
    console.log("Congratulations! You won the game!");
    alert("Congratulations! You won the game!" + "\nFinal Score: Player " + playerScore + " : Computer " + computerScore);
  } else if (playerScore < computerScore) {
    console.log("Sorry, you lost the game!");
    alert("Sorry, you lost the game!" + "\nFinal Score: Player " + playerScore + " : Computer " + computerScore);
  } else {
    console.log("The game is a tie!");
    alert("The game is a tie!" + "\nFinal Score: Player " + playerScore + " : Computer " + computerScore);
  }

  playAgain();
}

function playAgain() {
  const wantToPlayAgain = confirm("Do you want to play again?");
  if (wantToPlayAgain) {
    playGame();
  } else {
    console.log("Thanks for playing!");
  }
}

function startGame() {
  confirm("Welcome to Rock, Paper, Scissors! Do you want to play?") ? (alert("Let's play for 5 rounds!"), playGame()) : (console.log("Maybe next time!"), alert("Maybe next time!"));
}
startGame();