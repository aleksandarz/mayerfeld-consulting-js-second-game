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
  const playerInput = prompt(
    `Round ${roundNumber} of ${TOTAL_ROUNDS}\n` +
    `Current Score: Player ${playerScore} : Computer ${computerScore}\n\n` +
    `Enter Rock, Paper, or Scissors:`
  );

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
    alert("⛔ Invalid input! Please type Rock, Paper, or Scissors.");
    playRounds(roundNumber, playerScore, computerScore);
    return;
  }

  console.log(`--- Round ${roundNumber} ---`);
  console.log(`Player: ${playerInput.trim()} | Computer: ${computerSelection}`);

  let roundMessage = "";
  if (result === "win") {
    playerScore++;
    roundMessage = `🎉 You Win! ${playerInput.trim()} beats ${computerSelection}`;
  } else if (result === "lose") {
    computerScore++;
    roundMessage = `❌ You Lose! ${computerSelection} beats ${playerInput.trim()}`;
  } else {
    playerScore++;
    computerScore++;
    roundMessage = `🤝 It's a tie! Both chose ${computerSelection}`;
  }

  console.log(`Result: ${roundMessage}`);
  alert(`${roundMessage}\n\nScore: Player ${playerScore} | Computer ${computerScore}`);
  
  playRounds(roundNumber + 1, playerScore, computerScore);
}

function finishGame(playerScore, computerScore) {
  let finalMessage = `Game Finished!\nFinal Score: Player ${playerScore} : Computer ${computerScore}\n\n`;

  if (playerScore > computerScore) {
    finalMessage += "Congratulations! You won the game! 🏆";
  } else if (playerScore < computerScore) {
    finalMessage += "The computer won this time. Better luck next time! 🤖";
  } else {
    finalMessage += "It's a draw! Great match! 🤝";
  }

  console.log("====================");
  console.log(finalMessage);
  alert(finalMessage);
  
  if (confirm("Do you want to play again?")) {
    startGame();
  } else {
    alert("Thanks for playing!");
  }
}

function startGame() {
  const welcome = confirm(
    "Welcome to Rock, Paper, Scissors!\n\n" +
    "👉 TIP: Open your browser console (press F12) to see the game logs.\n\n" +
    "Ready to play 5 rounds?"
  );

  if (welcome) {
    console.clear();
    playRounds(1, 0, 0);
  } else {
    alert("Maybe next time!");
  }
}

startGame();
