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
	
	const containerRoundDisplay = createDivElement('round-display', '');
	containerRoundDisplay.appendChild(createDivElement('', 'Round: 1'));


	const containerComputerScore = createDivElement('computer', 'Computer');
	containerComputerScore.appendChild(createDivElement('comp-score', '0'));

	const containerPlayerScore = createDivElement('player', 'Player');
	containerPlayerScore.appendChild(createDivElement('play-score', '0'));
	
	const containerWeapons = createDivElement('weapons-buttons', '');
	containerWeapons.appendChild(createDivElement('button btn-rock', 'Rock'));
	containerWeapons.appendChild(createDivElement('button btn-paper' , 'Paper'));
	containerWeapons.appendChild(createDivElement('button btn-scissors', 'Scissors'));

	const messageDisplay = createDivElement('message-bar', '')
	messageDisplay.appendChild(createDivElement('message', ));

	containerGame.appendChild(containerRoundDisplay);
	containerGame.appendChild(containerComputerScore);
	containerGame.appendChild(containerPlayerScore);
	containerGame.appendChild(containerWeapons);
	document.body.appendChild(containerGame);

	const rockBtn = document.querySelector('.btn-rock');
	rockBtn.addEventListener('click', () => {
		containerGame.removeChild(containerWeapons);
		containerGame.appendChild(createDivElement('chosen-weapon', 'Rock'));
		playRound('rock', );
	});

	const paperBtn = document.querySelector('.btn-paper');
	paperBtn.addEventListener('click', () => {
		containerGame.removeChild(containerWeapons);
		containerGame.appendChild(createDivElement('chosen-weapon', 'Paper'));
		playRound('paper', );
	});

	const scissorsBtn = document.querySelector('.btn-scissors');
	scissorsBtn.addEventListener('click', () => {
		containerGame.removeChild(containerWeapons);
		containerGame.appendChild(createDivElement('chosen-weapon', 'Scissors'));
		playRound('scissors', );
	});
} // startGame()

function updateComputerScore(computerScore) {
	
	document.getElementsByClassName('.comp-score').replaceWith(createDivElement('comp-score', `${computerScore}`));
}

function updatePlayerScore(playerScore) {
	document.getElementsByClassName('.play-score').replaceWith(createDivElement('play-score', `${playerScore}`));
}

// resets weapon selection buttons and starts a new round
function startNewRound() {
}

//displays computer's choice in similar button design
function displayComputerChoice(computerSelection) {
	document.containerGame.createDivElement('computer-choice-display', `${computerSelection}`);
}

//GAME LOGIC

// Computer random choice function
function computerPlay() {
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


wantToPlay();