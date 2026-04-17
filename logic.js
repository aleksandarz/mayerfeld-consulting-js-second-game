
const choices = ["rock", "paper", "scissors"];

const computerPlay = () => {
    return choices[Math.floor(Math.random() * choices.length)];
}

const playRound = (playerSelection, computerSelection) => {
    if (playerSelection === computerSelection) {
        return "It's a tie!";
    }
    else if ((playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "scissors" && computerSelection === "paper")) {
        return "You win!";
    }
    else {
        return "You lose!";
    }
};


let playerScore, computerScore;

function playGame() {
    playerScore = 0;
    computerScore = 0;

    for (let i = 0; i < 5; i++) {
        computerSelection = computerPlay();
        playerSelection = prompt("Rock, Paper, or Scissors?").toLowerCase();
        console.log(playRound(playerSelection, computerSelection));
        if (playRound(playerSelection, computerSelection) === "You win!") {
            console.log( 'The computer chose ' + computerSelection);
            playerScore++;
        } else if (playRound(playerSelection, computerSelection) === "You lose!") {
            console.log( 'The computer chose ' + computerSelection);
            computerScore++;
        }
        else { console.log( 'You both chose ' + computerSelection); }
       
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