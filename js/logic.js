const choices = ["rock", "paper", "scissors"];

const computerPlay = () => choices[Math.floor(Math.random() * choices.length)];

function playRound(playerSelection, computerSelection) {
  const playerChoice = playerSelection.toLowerCase().trim();
  const computerChoice = computerSelection.toLowerCase();

  if (!choices.includes(playerChoice)) return "invalid";
  if (playerChoice === computerChoice) return "tie";

  const winConditions = {
    rock: "scissors",
    paper: "rock",
    scissors: "paper"
  };

  return winConditions[playerChoice] === computerChoice ? "win" : "lose";
}

function confirmExit() {
  return confirm("Are you sure you want to exit the game?");
}

function playRounds(roundNumber, playerScore, computerScore) {
  const TOTAL_ROUNDS = 5;

  if (roundNumber > TOTAL_ROUNDS) {
    finishGame(playerScore, computerScore);
    return;
  }

  const computerSelection = computerPlay();
  const playerInput = prompt(`Round ${roundNumber} of ${TOTAL_ROUNDS}\nEnter Rock, Paper, or Scissors:`);

  if (playerInput === null) {
    if (confirmExit()) {
      alert("Game exited. See you next time!");
      return;
    } else {
      playRounds(roundNumber, playerScore, computerScore);
      return;
    }
  }

  const result = playRound(playerInput, computerSelection);

  if (result === "invalid") {
    alert("Invalid input! Please type Rock, Paper, or Scissors.");
    playRounds(roundNumber, playerScore, computerScore);
    return;
  }

  let roundMessage = "";
  if (result === "win") {
    playerScore++;
    roundMessage = `You Win! ${playerInput} beats ${computerSelection}`;
  } else if (result === "lose") {
    computerScore++;
    roundMessage = `You Lose! ${computerSelection} beats ${playerInput}`;
  } else if (result === "tie") {
    playerScore++;
    computerScore++;
    roundMessage = `It's a tie! Both chose ${playerInput}`;
  }

  alert(`${roundMessage}\n\nScore: Player ${playerScore} | Computer ${computerScore}`);
  playRounds(roundNumber + 1, playerScore, computerScore);
}

function finishGame(playerScore, computerScore) {
  let finalMessage = `Final Score: Player ${playerScore} : Computer ${computerScore}\n`;

  if (playerScore > computerScore) {
    finalMessage += "Congratulations! You won the game!";
  } else if (playerScore < computerScore) {
    finalMessage += "Sorry, the computer won this time.";
  } else {
    finalMessage += "The game ended in a draw!";
  }

  alert(finalMessage);
  
  if (confirm("Do you want to play again?")) {
    startGame();
  } else {
    alert("Thanks for playing!");
  }
}

function startGame() {
  const welcome = confirm("Welcome to Rock, Paper, Scissors! Best of 5 rounds. Ready?");
  if (welcome) {
    playRounds(1, 0, 0);
  } else {
    alert("Maybe next time!");
  }
}

startGame();
