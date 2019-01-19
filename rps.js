

/* dude from TOP discord shared this approach.

while (userScore < 5) {
    if (cpuScore == 5) break;
    oneRound();
    console.log(userScore);
}
*/

window.onload = function() {
  userPlay();
  computerPlay();
  playRound();
};


loop to run game until user or cpu reach 5
while (userScore < 5 && cpuScore < 5) {
    playRound();
}

let userScore = 0;
let cpuScore = 0;

// USER SELECTION
function userPlay() {
  // buttons is a node list. It looks and acts much like an array.
  const buttons = document.querySelectorAll('img');

  // we use the .forEach method to iterate through each button
  buttons.forEach((img) => {

    // and for each one we add a 'click' listener
    img.addEventListener('click', (e) => {
      let userSelection = img.id;
      console.log(userSelection);
      return userSelection;
    });
  });

  const userMoveDisplay = document.querySelector('#userscore');

  const userMove = document.createElement('h3')
  userMove.textContent = userSelection;
}

// CPU SELECTION
function computerPlay() {

    // define random numbers and their assignments
    //console.log("1 = rock \n2 = paper \n3 = scissors");

    // Generate random number
    let randomNumber = Math.floor((Math.random() * 3) + 1);
    //console.log("This round's random number is: " + randomNumber + ".");
    // Assign rock, paper, or scissors based on random number
    if (randomNumber === 1)  {
        return 'rock';
    } else if (randomNumber === 2) {
        return 'paper';
    } else {
        return 'scissors';
    }

    const cpuSelection = computerPlay();

}
//console.log("The computer has played: " + computerPlay() + ".");


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

    // const userSelection = prompt("Enter: Rock, Paper, or Scissors.").toLowerCase();
    // console.log("The human has selected: " + userSelection + ".");\

    if (userScore === 5) {
        return "The human wins!";
    } else {
        return "The computer wins!";
    }
