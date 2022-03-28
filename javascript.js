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
    if (playerSelection == 'rock' && computerSelection == 'rock') {
            return 'It\'s a tie.';
        }   else if (playerSelection == 'rock' && computerSelection == 'paper') {
                return 'You lose!';
        }   else if (playerSelection == 'rock' && computerSelection == 'scissors') {
                return 'You win!';
        }   else if (playerSelection == 'paper' && computerSelection == 'rock') {
                return 'You win!';
        }   else if (playerSelection == 'paper' && computerSelection == 'paper') {
                return 'It\'s a tie.';
        }   else if (playerSelection == 'paper' && computerSelection == 'scissors') {
                return 'You lose!';
        }   else if (playerSelection == 'scissors' && computerSelection == 'rock') {
                return 'You lose!';
        }   else if (playerSelection == 'scissors' && computerSelection == 'paper') {
                return 'You win!';
        }   else if (playerSelection == 'scissors' && computerSelection == 'scissors') {
                return 'It\'s a tie!';
        }   else {
                return 'Please enter a valid choice. Rock, paper, or scissors.';
        }
    } // playRound()

// 5 round game function
function game() {
    for (let i = 0; i < 5; i++) {
        computerSelection = computerPlay();
        playerSelection = playerPlay();
            let result = playRound(playerSelection, computerSelection);
            if (result == 'You win!') {
                playerScore++;
                console.log('Player: ' + playerScore)
                console.log('Computer: ' + computerScore)
                console.log('Computer chose: ' + computerSelection)
                console.log('You win this round!')
            }   else if (result == 'You lose!') {
                    computerScore++;
                    console.log('Player: ' + playerScore)
                    console.log('Computer: ' + computerScore)
                    console.log('Computer chose: ' + computerSelection)
                    console.log('You lose this round!')
            }   else {
                    console.log('This round ended in a tie! No points awarded.')
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