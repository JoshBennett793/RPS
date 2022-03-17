/* make a function with the name computerPlay
    have computerPlay return a random either of the 3:
    use console.log to make sure return value is one of
    the three choices */

function computerPlay () {
    const compChoices = ['Rock', 'Paper', 'Scissors']
    let randCompChoice = compChoices[Math.floor(Math.random() * compChoices.length)];
    return randCompChoice
}
console.log(computerPlay())
/* write a function that will take two parameters
    named playerSelection and computerSelection
    have function return a string that declares the winner 
    Make functions playerSelector parameter case-insensitive */

