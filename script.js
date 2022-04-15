function createDivElement(className, text, id = '') {
	const div = document.createElement('div');
	div.appendChild(document.createTextNode(text));
	div.className = className;
	div.id = id;
	return div;
}

function referToGithub() {
	window.open('https://github.com/JoshBennett793/RPS')
}

function wantToPlay() {
	//build the UI for the game
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
	containerShowRules.appendChild(createDivElement('', 'Select Rock, Paper, or Scissors.'));
	containerShowRules.appendChild(createDivElement('', 'Best 2 out of 3 rounds wins the game.'));
	containerShowRules.appendChild(createDivElement('', 'Rock > Scissors'));
	containerShowRules.appendChild(createDivElement('', 'Paper > Rock'));
	containerShowRules.appendChild(createDivElement('', 'Scissors > Paper'));

	const buttonContainer = createDivElement('container-buttons', '');
	buttonContainer.appendChild(createDivElement('button btn-green', 'Play'));
	containerShowRules.appendChild(buttonContainer);

	document.body.appendChild(containerShowRules);

	const btnPlay = document.querySelector('.btn-green');
	btnPlay.addEventListener('click', () => {
		document.body.removeChild(containerShowRules);
		startGame();
	});
}

function startGame() {
	
	const containerGame = createDivElement('game-container', '');
	
	const playerIcon = createDivElement('player-icon', 'PLAYER');
	const computerIcon = createDivElement('computer-icon', 'COMPUTER');

	const containerRoundDisplay = createDivElement('round-container', '');
	containerRoundDisplay.appendChild(createDivElement('current-round', 'Round: 1'));

	const containerPlayerScore = createDivElement('player', 'Player');
	containerPlayerScore.appendChild(createDivElement('play-score', '0'));
	
	const containerComputerScore = createDivElement('computer', 'Computer');
	containerComputerScore.appendChild(createDivElement('comp-score', '0'));
	
	const containerScore = createDivElement('score-container', '');
	containerScore.appendChild(containerPlayerScore);
	containerScore.appendChild(containerComputerScore);
	
	const containerWeapons = createDivElement('weapons-container', '');
	containerWeapons.appendChild(createDivElement('button btn-rock', 'Rock'));
	containerWeapons.appendChild(createDivElement('button btn-paper' , 'Paper'));
	containerWeapons.appendChild(createDivElement('button btn-scissors', 'Scissors'));

	const messageDisplay = createDivElement('message-bar', '');
	messageDisplay.appendChild(createDivElement('message', ''));

	const computerWeaponChoice = createDivElement('computer-weapons-container', '');
	computerWeaponChoice.appendChild(createDivElement('comp-button comp-btn-rock', 'Rock'));
	computerWeaponChoice.appendChild(createDivElement('comp-button comp-btn-paper' , 'Paper'));
	computerWeaponChoice.appendChild(createDivElement('comp-button comp-btn-scissors', 'Scissors'));

	containerGame.appendChild(computerIcon);
	containerGame.appendChild(computerWeaponChoice);
	containerGame.appendChild(containerScore);
	containerGame.appendChild(messageDisplay);
	containerGame.appendChild(containerWeapons);
	containerGame.appendChild(playerIcon)
	document.body.appendChild(containerRoundDisplay);
	document.body.appendChild(containerGame);

	const rockBtn = document.querySelector('.btn-rock');
	const paperBtn = document.querySelector('.btn-paper');
	const scissorsBtn = document.querySelector('.btn-scissors');

	rockBtn.addEventListener('click', () => {
		//change name of class to one with 'highlight' styling
		//will need to have a function that tests for the id name of selected
		//and removes it if so. maybe use toggle?
		rockBtn.classList.toggle('selected');
		rockBtn.classList.toggle('button');
		playRound('rock', );
		const resetButton = createDivElement('reset-button', 'RESET');
		document.body.insertBefore(resetButton, containerGame.nextSibling);
	});

	paperBtn.addEventListener('click', () => {
		paperBtn.classList.toggle('selected');
		playRound('paper', );
		const resetButton = createDivElement('reset-button', 'RESET');
		document.body.insertBefore(resetButton, containerGame.nextSibling);
	});

	scissorsBtn.addEventListener('click', () => {
		scissorsBtn.classList.toggle('selected');
		playRound('scissors', );
		const resetButton = createDivElement('reset-button', 'RESET');
		document.body.insertBefore(resetButton, containerGame.nextSibling);
	});
} // startGame()

function updateComputerScore(computerScore) {
	
	document.getElementsByClassName('.comp-score').replaceWith(createDivElement('comp-score', `${computerScore}`));
}

function updatePlayerScore(playerScore) {

	document.getElementsByClassName('.play-score').replaceWith(createDivElement('play-score', `${playerScore}`));
}

// highlights computer selection
function displayComputerChoice(computerSelection) {
/* change class name of selected button and change the styling for
new class name */

}

// resets weapon selection buttons and starts a new round
function startNewRound() {
}
/* from event listener onclick, it removes other buttons, plays a round
with corresponding weapon choice, then creates a new div that say 'reset'
and assigned a class. That class name then has an event listener added in 
startNewRound() to update the round and score count then perform the reset 
of weapons choices back on the screen, deletion of computer choice, and 
reinitiates a new round. */
//GAME LOGIC

// Computer random choice function
function computerPlay() {
  const choices = ['rock', 'paper', 'scissors'];
  let computerSelection = choices[Math.floor(Math.random() * choices.length)];
  return computerSelection;
}

let playerScore = 0;
let computerScore = 0;
let roundCount = 1;

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
function game() {
		for (let i = 1; i <= 3; i++) {
  	computerSelection = computerPlay();
	  let result = playRound(playerSelection, computerSelection);
  	  if (result == 'win') {
	  	  playerScore++;
	}   else if (result == 'lose') {
  	    computerScore++;
				updateComputerScore(computerScore)
	} 	else if (result == 'tie') {
	}		else {
				('Invalid choice. Please choose either rock, paper, or scissors.')
					i--;
	}
} // for loop
} // game()

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


wantToPlay();