
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

      const userMoveDisplay = document.querySelector('.userPick')

      const userMove = document.createElement('p')
      userMove.textContent = userSelection;
      userMove.classList.add('onClickUserDisplay');

      userMoveDisplay.appendChild(userMove);




      });
    });
  // };
}
