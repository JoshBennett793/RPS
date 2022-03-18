// random choice function
function computerPlay () {
    const compChoices = ['rock', 'paper', 'scissors'];
    let randCompChoice = compChoices[Math.floor(Math.random() * compChoices.length)];
    randCompChoice = randCompChoice.charAt(0).toUpperCase() + randCompChoice.slice(1);
    return randCompChoice;
}

//single round function
function playRound (playerSelection, computerSelection) {

    if (playerSelection == 'rock' && computerSelection == 'Paper') {
        return 'Oh no, you lost! Paper covers rock!';
    }   else if (playerSelection == 'rock' && computerSelection == 'Rock') {
        return 'It\'s a tie. Go again!';
    }   else if (playerSelection == 'rock' && computerSelection == 'Scissors') { 
        return 'You win! Rock crushes scissors!';
    }   else {
        return 'Enter a choice!';
    }
}

const playerSelection = prompt('What will you choose?','').toLowerCase();
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));
