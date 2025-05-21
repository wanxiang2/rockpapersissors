let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let randomNumber = Math.random();

    if (randomNumber >= 0 && randomNumber < (1/3)) {
        return "rock";
    } else if (randomNumber >= (1/3) && randomNumber < (2/3)) {
        return "paper";
    } else {
        return "scissors";
    }
}

function getHumanChoice() {
    let humanInput = prompt("Choose rock, paper, or scissors: ");
    return humanInput;
}

function playRound(humanChoice, computerChoice) {
    let myHumanChoice = humanChoice.toLowerCase();

    if (computerChoice === "rock" && humanChoice === "paper") {
        console.log("You win! Paper beats rock.");
        humanScore++;
    } else if (computerChoice === "scissors" && humanChoice === "rock") {
        console.log("You win! Rock beats scissors.");
        humanScore++;
    } else if (computerChoice === "paper" && humanChoice === "scissors") {
        console.log("You win! Scissors beats paper.");
        humanScore++;
    } else if (computerChoice === "paper" && humanChoice === "rock") {
        console.log("You lose! Paper beats rock.");
        computerScore++;
    } else if (computerChoice === "rock" && humanChoice === "scissors") {
        console.log("You lose! Rock beats scissors.");
        computerScore++;
    } else if (computerChoice === "scissors" && humanChoice === "paper") {
        console.log("You lose! Scissors beats paper.")
        computerScore++;
    } else {
        console.log("Tied!")
    }
}

function playGame() {
    for (let i = 0; i < 5; i++) {
        let computerPick = getComputerChoice();
        let humanPick = getHumanChoice();
        playRound(humanPick, computerPick);
    }

    if (humanScore > computerScore) {
        console.log("You are the winner!");
    } else if (humanScore < computerScore) {
        console.log("The computer is the winner!");
    } else {
        console.log("You tied with the computer.");
    }
}

playGame();