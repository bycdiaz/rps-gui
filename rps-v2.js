
window.onload = function() {
  // function userPlay() {
    // Selecting all nodes with an image tag.
    const button = document.querySelectorAll('button');

    // .forEach loops through each button
    button.forEach((button) => {

      // adds event listener to each button
      button.addEventListener('click', (e) => {
      let userSelection = button.id;

      // appends user move to HTML
      const userMoveDisplay = document.querySelector('#userPick')

      const userMove = document.createElement('p')
      userMove.textContent = userSelection;
      userMove.classList.add('onClickUserDisplay');

      userMoveDisplay.appendChild(userMove);
      console.log("User selected: " + userSelection + ".");

      // appends CPU move to HTML
      const cpuMoveDisplay = document.querySelector('#cpuPick')

      const cpuMove = document.createElement('p');
      const cpuSelection = computerPlay();
      cpuMove.textContent = cpuSelection;
      cpuMove.classList.add('onClickcpuDisplay');

      cpuMoveDisplay.appendChild(cpuMove);
      console.log("CPU selected: " + computerPlay() + ".");

      // appends comparison to HTML
      const comparisonDisplay = document.querySelector("#roundOutcome")
      const compareMoves = playRound(userSelection,cpuSelection);

      const movesCompared = document.createElement('p');
      movesCompared.textContent = compareMoves;

      comparisonDisplay.appendChild(movesCompared);

      // appends scores

      // user score
      const displayUserScore = document.querySelector("#userscore");

      const userScoreDisplay = document.createElement('p');
      userScoreDisplay.textContent = userScore;

      displayUserScore.appendChild(userScoreDisplay);

      // cpu score
      const displayCPUScore = document.querySelector("#cpuscore");

      const cpuScoreDisplay = document.createElement('p');
      cpuScoreDisplay.textContent = cpuScore;

      displayCPUScore.appendChild(cpuScoreDisplay);


      });
    });
  // };

}

// CPU SELECTION
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

// comparing user selection with cpu selection
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

}

// score counters
let userScore = 0;
let cpuScore = 0;
