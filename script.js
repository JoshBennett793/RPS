function createDivElement (className, text, id = '') {
	const div = document.createElement('div');
	div.appendChild(document.createTextNode(text));
	div.className = className;
	div.id = id;
	return div;
}

function referToGithub() {
	window.open('https://github.com/JoshBennett793/RPS')
}

function wantToPlay () {

	const containerWantToPlay = createDivElement('start-popup', '')
	containerWantToPlay.appendChild(createDivElement('', 'Want to play Rock, Paper, Scissors?'));

	const containerButtons = createDivElement('container-buttons', '');
	containerButtons.appendChild(createDivElement('button btn-green', 'Yes'));
	containerButtons.appendChild(createDivElement('button btn-red', 'No'));
	containerWantToPlay.appendChild(containerButtons);

	document.body.appendChild(containerWantToPlay);

	const btnGreen = document.querySelector('.btn-green');
	btnGreen.addEventListener('click', () => {
		document.body.removeChild(containerWantToPlay);
		return showRules();
	});
	const btnRed = document.querySelector('.btn-red');
	btnRed.addEventListener('click', () => {
		return referToGithub();
	});
	
}

function showRules() {

	const containerShowRules = createDivElement('rules-popup', '');
	containerShowRules.appendChild(createDivElement('', 'Select Rock, Paper, or Scissors. Best 2 out of 3 rounds wins. '));

	const buttonContainer = createDivElement('container-buttons', '');
	buttonContainer.appendChild(createDivElement('button btn-green', 'Play'));
	containerShowRules.appendChild(buttonContainer);

	document.body.appendChild(containerShowRules);

	const btnPlay = document.querySelector('.btn-green');
	btnPlay.addEventListener('click', () => {
		document.body.removeChild(containerShowRules);
	});
}

// Computer random choice function
function computerPlay () {
  const choices = ['rock', 'paper', 'scissors'];
  let computerSelection = choices[Math.floor(Math.random() * choices.length)];
  return computerSelection;
}

let playerScore = 0;
let computerScore = 0;

//single round function
function playRound(playerSelection, computerSelection) {
	computerSelection = computerPlay();
  if (playerSelection ===  computerSelection) {
    console.log('tie');
}	else if (playerSelection === 'rock' && 
						computerSelection === 'paper') {
    console.log('lose');
} else if (playerSelection === 'rock' && 
						computerSelection === 'scissors') {
    console.log('win');
} else if (playerSelection === 'paper' && 
						computerSelection === 'rock') {
    console.log('win');
} else if (playerSelection === 'paper' && 
						computerSelection === 'scissors') {
    console.log('lose');
} else if (playerSelection === 'scissors' && 
						computerSelection === 'rock') {
    console.log('lose');
} else if (playerSelection === 'scissors' && 
						computerSelection === 'paper') {
  	console.log('win');
}
} // playRound()

// 5 round game function
/*function game() {
//for (let i = 0; i < 5; i++) {
  	computerSelection = computerPlay();
	  let result = playRound(playerSelection, computerSelection);
  	  if (result == 'win') {
	  	  playerScore++;
  	  	console.log('Player: ' + playerScore)
	    	console.log('Computer: ' + computerScore)
  	  	console.log('Computer chose: ' + computerSelection)
    		console.log('You win this round!')
	}   else if (result == 'lose') {
  	    computerScore++;
    	  console.log('Player: ' + playerScore)
      	console.log('Computer: ' + computerScore)
	      console.log('Computer chose: ' + computerSelection)
  	    console.log('You lose this round!')
	} 	else if (result == 'tie') {
      	console.log('This round ended in a tie! No points awarded.')
	}		else {
				console.log('Invalid choice. Please choose either rock, paper, or scissors.')
					i--;
	}
} // for loop
//} // game()*/

// Winner announcement function
function displayWinner() {
  if (playerScore > computerScore) {
	  return 'You beat the computer!';
} else if (computerScore > playerScore) {
  	return 'You lost to the computer!';
} else if (playerScore === computerScore) {
    return 'It\'s a tie!'
    }
}

/*const rockBtn = document.querySelector('.rock');
rockBtn.addEventListener('click', () {
	playRound('rock', );
});

const paperBtn = document.querySelector('.paper');
paperBtn.addEventListener('click', () {
	playRound('paper', );
});

const scissorsBtn = document.querySelector('.scissors');
scissorsBtn.addEventListener('click', () {
	playRound('scissors', );
});*/


wantToPlay();