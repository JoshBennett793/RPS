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
  if ((playerSelection !== 'rock') && 
				(playerSelection !== 'paper') && 
					(playerSelection !== 'scissors')) {
  	return 'invalid';
} else if (playerSelection ===  computerSelection) {
    return 'tie';
}	else if (playerSelection === 'rock' && 
						computerSelection === 'paper') {
    return 'lose';
} else if (playerSelection === 'rock' && 
						computerSelection === 'scissors') {
    return 'win';
} else if (playerSelection === 'paper' && 
						computerSelection === 'rock') {
    return 'win';
} else if (playerSelection === 'paper' && 
						computerSelection === 'scissors') {
    return 'lose';
} else if (playerSelection === 'scissors' && 
						computerSelection === 'rock') {
    return 'lose';
} else if (playerSelection === 'scissors' && 
						computerSelection === 'paper') {
  	return 'win';
}
} // playRound()

// 5 round game function
function game() {
//for (let i = 0; i < 5; i++) {
  	computerSelection = computerPlay();
  	playerSelection = playerPlay();
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
//} // game()

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

const rockBtn = document.querySelector('#rock');
rockBtn.addEventListener('click', playRound('rock', ));

const paperBtn = document.querySelector('#paper');
paperBtn.addEventListener('click', playRound('paper', ));

const scissorsBtn = document.querySelector('#scissors');
scissorsBtn.addEventListener('click', playRound('scissors', ));





console.log(game());
console.log('Final Score!')
console.log('Player: ' + playerScore);
console.log('Computer: ' + computerScore);
console.log(displayWinner());