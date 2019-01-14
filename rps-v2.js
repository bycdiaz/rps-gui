
window.onload = function() {
  // function userPlay() {
    // Selecting all nodes with an image tag.
    const button = document.querySelectorAll('button');

    // .forEach loops through each button
    button.forEach((button) => {

      // adds event listener to each button
      button.addEventListener('click', (e) => {
      let userSelection = button.id;
      console.log(userSelection);

      const userMoveDisplay = document.querySelector('#userPick')

      const userMove = document.createElement('p')
      userMove.textContent = userSelection;
      userMove.classList.add('onClickUserDisplay');

      userMoveDisplay.appendChild(userMove);

      });
    });
  // };


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
      console.log("CPU selected: " + cpuSelection);

  }

  const cpuSelects = document.querySelectorAll('button');
    cpuSelects.forEach((cpuSelect) => {
      cpuSelect.addEventListener('click', computerPlay);

      const cpuMoveDisplay = document.querySelector('#cpuPick')

      const cpuMove = document.createElement('p')
      cpuMove.textContent = computerPlay();
      cpuMove.classList.add('onClickcpuDisplay');

      cpuMoveDisplay.appendChild(cpuMove);

      });



}
