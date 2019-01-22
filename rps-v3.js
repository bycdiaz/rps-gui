// define variables

const buttons = document.querySelectorAll('button');
const display = document.querySelector('#display');

// these two were originally const, not let
let userScore;
let cpuScore;

initializeGame();

function initializeGame() {

userScore = 0;
cpuScore = 0;

buttons.forEach(button => {
  button.addEventListener('click', selections)
});
}

function selections(event) {
  let userSelection = event.target.id;
  let cpuSelection = computerPlay();
  let roundResult = playRound(userSelection,cpuSelection);
  console.log("Player selected: " + userSelection);
  console.log("CPU selected: " + cpuSelection);
  console.log("The winner of this round is: " + roundResult);

}

function computerPlay() {

    // Generate random number
    let randomNumber = Math.floor((Math.random() * 3) + 1);

    if (randomNumber === 1)  {
        return 'rock';
    } else if (randomNumber === 2) {
        return 'paper';
    } else {
        return 'scissors';
    }
}

function playRound(userSelection,cpuSelection) {


    // round outcomes
    if (userSelection === "rock") {
        if (cpuSelection === "paper") {
            cpuScore++;
            return "Paper beats rock. You lose!";
        } else if (cpuSelection === "scissors") {
            userScore++;
            return "Rock beats scissors. You win!";
        } else if (userSelection === cpuSelection) {
            return "Rock can't beat rock. This is a draw.";
        }

    } else if (userSelection === "paper") {
        if (cpuSelection === "rock") {
            userScore++;
            return "Paper beats rock. You win!"
        } else if (cpuSelection === "scissors") {
            cpuScore++;
            return "Scissors beats paper. You lose!"
        } else if (userSelection === cpuSelection) {
            return "Paper can't beat paper. This is a draw."
        }

    } else if (userSelection === "scissors") {
        if (cpuSelection === "rock") {
            cpuScore++;
            return "Rock beats scissors. You lose!"
        } else if (cpuSelection === "paper") {
            userScore++;
            return "Scissors beats paper. You win!"
        } else if (userSelection === cpuSelection) {
            return "Scissors can't beat scissors. This is a draw."
        }
    }
};
