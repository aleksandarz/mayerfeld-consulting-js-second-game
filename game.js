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