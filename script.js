// Computer random choice function
function computerPlay () {
    const choices = ['rock', 'paper', 'scissors'];
    let computerSelection = choices[Math.floor(Math.random() * choices.length)];
    return computerSelection;
}

// Player choice function
function playerPlay() {
    let playerSelection = prompt('Rock, Paper, or Scissors?','');
    return playerSelection.toLowerCase();
}

let playerScore = 0;
let computerScore = 0;

//single round function
function playRound(playerSelection, computerSelection) {
    if ((playerSelection !== 'rock') && (playerSelection !== 'paper') && (playerSelection !== 'scissors')) {
        return 'invalid';
        }    else if (playerSelection ===  computerSelection) {
                return 'tie';
        }   else if (playerSelection === 'rock' && computerSelection === 'paper') {
                return 'lose';
        }   else if (playerSelection === 'rock' && computerSelection === 'scissors') {
                return 'win';
        }   else if (playerSelection === 'paper' && computerSelection === 'rock') {
                return 'win';
        }   else if (playerSelection === 'paper' && computerSelection === 'scissors') {
                return 'lose';
        }   else if (playerSelection === 'scissors' && computerSelection === 'rock') {
                return 'lose';
        }   else if (playerSelection === 'scissors' && computerSelection === 'paper') {
                return 'win';
        }
    } // playRound()

// 5 round game function
function game() {
    for (let i = 0; i < 5; i++) {
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
            }   else if (result == 'tie') {
                    console.log('This round ended in a tie! No points awarded.')
            }	else if {
					console.log('Invalid choice. Please choose either rock, paper, or scissors.')
					i--;
			}
        } // for loop
    } // game()

// Winner announcement function
function displayWinner() {
    if (playerScore > computerScore) {
        return 'You beat the computer!';
    }   else if (computerScore > playerScore) 
          return 'You lost to the computer!'
}

console.log(game());
console.log('Final Score!')
console.log('Player: ' + playerScore);
console.log('Computer: ' + computerScore);
console.log(displayWinner());