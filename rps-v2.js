
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

      const cpuMove = document.createElement('p')
      cpuMove.textContent = computerPlay();
      cpuMove.classList.add('onClickcpuDisplay');

      cpuMoveDisplay.appendChild(cpuMove);
      console.log("CPU selected: " + computerPlay() + ".");

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
    const cpuSelection = computerPlay();

}
