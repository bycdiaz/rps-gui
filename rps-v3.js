// define variables

const buttons = document.querySelectorAll('button');
const display = document.querySelector('#display');

// these two were originally const, not let
let userScore;
let cpuScore;
let draw;

initializeGame();

function initializeGame() {

userScore = 0;
cpuScore = 0;
draw = 0;

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
  console.log("Round Result: " + roundResult);
  displayScores();

  if (userScore === 5 || cpuScore === 5) {
    // do what you just did right here
    console.log("Game OVER");
    declareWinner();
  } else {
    console.log(roundResult);
  }
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
    if (userSelection === "rock") {
        if (cpuSelection === "paper") {
            cpuScore++;
            return "CPU Wins!";
        } else if (cpuSelection === "scissors") {
            userScore++;
            return "You win!";
        } else if (userSelection === cpuSelection) {
            draw++
            return "Draw.";
        }

    } else if (userSelection === "paper") {
        if (cpuSelection === "rock") {
            userScore++;
            return "You win!"
        } else if (cpuSelection === "scissors") {
            cpuScore++;
            return "CPU Wins!"
        } else if (userSelection === cpuSelection) {
            draw++
            return "Draw."
        }

    } else if (userSelection === "scissors") {
        if (cpuSelection === "rock") {
            cpuScore++;
            return "CPU Wins!"
        } else if (cpuSelection === "paper") {
            userScore++;
            return "You win!"
        } else if (userSelection === cpuSelection) {
            draw++
            return "Draw."
        }
    }
};

function displayScores() {
  display.innerHTML = '';
  const allScores = document.createElement('p');
  allScores.innerText = `Player Score: ${userScore} Computer Score: ${cpuScore} # of Draws: ${draw}`;

  display.appendChild(allScores);

}

function declareWinner() {

  let displayWinner = document.createElement('h4')

  if (userScore >= 5) {
    displayWinner.innerText = "You win!"
    buttons.forEach(button => {
      button.removeEventListener('click', selections)
    });
  } else if (cpuScore >= 5) {
    displayWinner.innerText = "Sucks to be you. The computer wins!"
    buttons.forEach(button => {
      button.removeEventListener('click', selections)
    });
  } else {
    displayWinner.innerText = "This game is a draw!"
    buttons.forEach(button => {
      button.removeEventListener('click', selections)
    });
  }

  display.appendChild(displayWinner);
}
