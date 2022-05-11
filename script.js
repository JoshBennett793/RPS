function createDivElement(className, text) {
  const div = document.createElement("div");
  div.appendChild(document.createTextNode(text));
  div.className = className;
  return div;
}

function referToGithub() {
  window.open("https://github.com/JoshBennett793/RPS");
}

function wantToPlay() {
  // UI for start window
  const containerWantToPlay = createDivElement("start-popup", "");
  containerWantToPlay.appendChild(
    createDivElement("", "Want to play Rock, Paper, Scissors?"));

  const containerButtons = createDivElement("container-buttons", "");
  containerButtons.appendChild(createDivElement("button btn-green", "Yes"));
  containerButtons.appendChild(createDivElement("button btn-red", "No"));
  containerWantToPlay.appendChild(containerButtons);

  document.body.appendChild(containerWantToPlay);

  const btnGreen = document.querySelector(".btn-green");
  btnGreen.addEventListener("click", () => {
    document.body.removeChild(containerWantToPlay);
    showRules();
  });

  const btnRed = document.querySelector(".btn-red");
  btnRed.addEventListener("click", () => {
    referToGithub();
  });
} // wantToPlay()

function showRules() {
  // UI for rules window
  const containerShowRules = createDivElement("rules-popup", "");
  containerShowRules.appendChild(
    createDivElement("", "Select Rock, Paper, or Scissors."));
	containerShowRules.appendChild(
    createDivElement("", "First one to 5 wins the game."));
  containerShowRules.appendChild(createDivElement("", "Rock > Scissors"));
  containerShowRules.appendChild(createDivElement("", "Paper > Rock"));
  containerShowRules.appendChild(createDivElement("", "Scissors > Paper"));

  const buttonContainer = createDivElement("container-buttons", "");
  buttonContainer.appendChild(createDivElement("button btn-green", "Play"));
  containerShowRules.appendChild(buttonContainer);

  document.body.appendChild(containerShowRules);

  const btnPlay = document.querySelector(".btn-green");
  btnPlay.addEventListener("click", () => {
    document.body.removeChild(containerShowRules);

    startGame();
  });
} // showRules()

let playerScore;
let computerScore;
let roundCount;
let playerSelection;
let computerSelection;
let element;
let button;

// outside named function that allows the event handler to be removed
function clickHandler(element, button) {
  containerGame = document.querySelector(".game-container");
  playerSelection = button;

  document.querySelector(element).classList.toggle("selected"); // turn selected player weapon green
  document.querySelector(element).classList.toggle("button");
  playRound(playerSelection);
  if (playerScore === 5 || computerScore === 5) {
    return; // ends script if game has ended
  }
  displayComputerChoice(computerSelection); // turn selected computer weapon red
  const resetButton = createDivElement("reset-button", "Next Round");
  document.body.insertBefore(resetButton, containerGame.nextSibling);
  resetButton.addEventListener("click", () => {
    document.body.removeChild(resetButton);
    resetRound(button);
    activateListener(".btn-rock");
    activateListener(".btn-paper");
    activateListener(".btn-scissors");
  });
} // clickHandler()

function activateListener(element) {
  if (element === ".btn-rock") {
    document.querySelector(element).addEventListener("click", myRockListener);
  } else if (element === ".btn-paper") {
    document.querySelector(element).addEventListener("click", myPaperListener);
  } else if (element === ".btn-scissors") {
    document
      .querySelector(element)
      .addEventListener("click", myScissorsListener);
  }
}

function disableListener(element) {
  if (element === ".btn-rock") {
    document
      .querySelector(element)
      .removeEventListener("click", myRockListener);
  } else if (element === ".btn-paper") {
    document
      .querySelector(element)
      .removeEventListener("click", myPaperListener);
  } else if (element === ".btn-scissors") {
    document
      .querySelector(element)
      .removeEventListener("click", myScissorsListener);
  }
}

function startGame() {
  // UI for game play

  playerScore = 0;
  computerScore = 0;
  roundCount = 1;

  const containerGame = createDivElement("game-container", "");

  const playerIcon = createDivElement("player-icon", "PLAYER");
  const computerIcon = createDivElement("computer-icon", "COMPUTER");

  const containerRoundDisplay = createDivElement("round-container", "");
  containerRoundDisplay.appendChild(
    createDivElement("current-round", "Round: 1"));

  const containerPlayerScore = createDivElement("player", "Player");
  containerPlayerScore.appendChild(createDivElement("play-score", "0"));

  const containerComputerScore = createDivElement("computer", "Computer");
  containerComputerScore.appendChild(createDivElement("comp-score", "0"));

  const containerScore = createDivElement("score-container", "");
  containerScore.appendChild(containerPlayerScore);
  containerScore.appendChild(containerComputerScore);

  const containerWeapons = createDivElement("weapons-container", "");
  containerWeapons.appendChild(createDivElement("button btn-rock", "Rock"));
  containerWeapons.appendChild(createDivElement("button btn-paper", "Paper"));
  containerWeapons.appendChild(
    createDivElement("button btn-scissors", "Scissors"));

  const messageDisplay = createDivElement("message-bar", "");
  messageDisplay.appendChild(createDivElement("message", ""));

  const computerWeaponChoice = createDivElement(
    "computer-weapons-container", "");
  computerWeaponChoice.appendChild(
    createDivElement("comp-button comp-btn-rock", "Rock"));
  
	computerWeaponChoice.appendChild(
    createDivElement("comp-button comp-btn-paper", "Paper"));
  
	computerWeaponChoice.appendChild(
    createDivElement("comp-button comp-btn-scissors", "Scissors"));

  containerGame.appendChild(computerIcon);
  containerGame.appendChild(computerWeaponChoice);
  containerGame.appendChild(containerScore);
  containerGame.appendChild(messageDisplay);
  containerGame.appendChild(containerWeapons);
  containerGame.appendChild(playerIcon);
  document.body.appendChild(containerRoundDisplay);
  document.body.appendChild(containerGame);

  const rockBtn = document.querySelector(".btn-rock");
  const paperBtn = document.querySelector(".btn-paper");
  const scissorsBtn = document.querySelector(".btn-scissors");

  rockBtn.addEventListener("click", myRockListener);

  paperBtn.addEventListener("click", myPaperListener);

  scissorsBtn.addEventListener("click", myScissorsListener);
} // startGame()

function myRockListener() {
  element = ".btn-rock";
  button = "rock";

  clickHandler(element, button);
  disableListener(element);
  disableListener(".btn-paper");
  disableListener(".btn-scissors");
}

function myPaperListener() {
  element = ".btn-paper";
  button = "paper";

  clickHandler(element, button);
  disableListener(element);
  disableListener(".btn-rock");
  disableListener(".btn-scissors");
}

function myScissorsListener() {
  element = ".btn-scissors";
  button = "scissors";

  clickHandler(element, button);
  disableListener(element);
  disableListener(".btn-rock");
  disableListener(".btn-paper");
}

function updateComputerScore() {
  const compScore = document.querySelector(".comp-score");
  compScore.textContent = `${computerScore}`;
}

function updatePlayerScore() {
  const playScore = document.querySelector(".play-score");
  playScore.textContent = `${playerScore}`;
}

function displayComputerChoice(computerSelection) {
  // function for changing styling of selected computer weapon
  if (computerSelection === "rock") {
    const computerButton = document.querySelector(".comp-btn-rock");
    computerButton.classList.toggle("comp-selected");
    computerButton.classList.toggle("comp-button");
  } else if (computerSelection === "paper") {
    	const computerButton = document.querySelector(".comp-btn-paper");
    	computerButton.classList.toggle("comp-selected");
    	computerButton.classList.toggle("comp-button");
  } else if (computerSelection === "scissors") {
    	const computerButton = document.querySelector(".comp-btn-scissors");
    	computerButton.classList.toggle("comp-selected");
    	computerButton.classList.toggle("comp-button");
  }
} // displayComputerChoice()

function updateRoundCount() {
  const currentRound = document.querySelector(".current-round");
  currentRound.textContent = `Round: ${roundCount}`;
}

function updateMessageBar(result) {
  // displays string containing result of round

  const message = document.querySelector(".message");

  if (result === "win") {
    message.textContent = "You won this round. Keep it up!";
  } else if (result === "lose") {
    	message.textContent = "You lost this round. Try again!";
  } else if (result === "tie") {
    	message.textContent = "This round ended in a tie!";
  }
} //updateMessageBar()

function toggleWeaponButton(contestant) {
  // reverts buttons back to original styling

  const rockBtn = document.querySelector(".btn-rock");
  const paperBtn = document.querySelector(".btn-paper");
  const scissorsBtn = document.querySelector(".btn-scissors");
  const compRockBtn = document.querySelector(".comp-btn-rock");
  const compPaperBtn = document.querySelector(".comp-btn-paper");
  const compScissorsBtn = document.querySelector(".comp-btn-scissors");

  if (contestant === "player") {
    if (playerSelection === "rock") {
      rockBtn.classList.toggle("selected");
      rockBtn.classList.toggle("button");
    } else if (playerSelection === "paper") {
      	paperBtn.classList.toggle("selected");
      	paperBtn.classList.toggle("button");
    } else if (playerSelection === "scissors") {
      	scissorsBtn.classList.toggle("selected");
      	scissorsBtn.classList.toggle("button");
    }
  } else if (contestant === "computer") {
    if (computerSelection === "rock") {
      compRockBtn.classList.toggle("comp-selected");
      compRockBtn.classList.toggle("comp-button");
    } else if (computerSelection === "paper") {
      	compPaperBtn.classList.toggle("comp-selected");
      	compPaperBtn.classList.toggle("comp-button");
    } else if (computerSelection === "scissors") {
      	compScissorsBtn.classList.toggle("comp-selected");
      	compScissorsBtn.classList.toggle("comp-button");
    }
  }
} // toggleWeaponButton()

function resetRound(selection) {
  // effectively updates and resets the game board for next round

  const message = document.querySelector(".message");

  if (selection === "rock") {
    toggleWeaponButton("player");
    toggleWeaponButton("computer");
    roundCount++;
    updateRoundCount();
    message.textContent = "";
  } else if (selection === "paper") {
			toggleWeaponButton("player");
			toggleWeaponButton("computer");
			roundCount++;
			updateRoundCount();
			message.textContent = "";
  } else if (selection === "scissors") {
			toggleWeaponButton("player");
			toggleWeaponButton("computer");
			roundCount++;
			updateRoundCount();
			message.textContent = "";
  }
} // resetRound()

function displayWinner(winner) {
  // Winner announcement and new game prompt

  document.body.textContent = "";

  const containerNewGame = createDivElement("start-popup", "");
  containerNewGame.appendChild(
    createDivElement("prompt", "Want to play again?")
  );

  const containerButtons = createDivElement("container-buttons", "");
  containerButtons.appendChild(createDivElement("button btn-green", "Yes"));
  containerButtons.appendChild(createDivElement("button btn-red", "No"));
  containerNewGame.appendChild(containerButtons);

  document.body.appendChild(containerNewGame);

  const btnGreen = document.querySelector(".btn-green");
  btnGreen.addEventListener("click", () => {
    document.body.removeChild(containerNewGame);
    showRules();
  });

  const btnRed = document.querySelector(".btn-red");
  btnRed.addEventListener("click", () => {
    referToGithub();
  });

  if (winner === "player") {
    const winnerDisplay = createDivElement(
      "winner-display", "You beat the computer!");

    const prompt = document.querySelector(".prompt");
    containerNewGame.insertBefore(winnerDisplay, prompt);

  } else if (winner === "computer") {
			const winnerDisplay = createDivElement(
				"winner-display", "You got beat by the computer?!");

			const prompt = document.querySelector(".prompt");
			containerNewGame.insertBefore(winnerDisplay, prompt);
  }
} // displayWinner()

//GAME LOGIC

function computerPlay() {
  // Computer random choice function
  const choices = ["rock", "paper", "scissors"];
  computerSelection = choices[Math.floor(Math.random() * choices.length)];
  return computerSelection;
}

function playRound(playerSelection, computerSelection) {
  // Single round function

  computerSelection = computerPlay();
  let result = "";

  if (playerSelection === computerSelection) {
    result = "tie";
  } else if (playerSelection === "rock" && computerSelection === "paper") {
    	result = "lose";
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    	result = "win";
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    	result = "win";
  } else if (playerSelection === "paper" && computerSelection === "scissors") {
    	result = "lose";
  } else if (playerSelection === "scissors" && computerSelection === "rock") {
    	result = "lose";
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    	result = "win";
  }
  gameLoop(result); // run result through function that updates player or computer score
} // playRound()

// test for winner and prompt new game
function testForWinner(contestant, score) {
  if (contestant === "player") {
    if (score === 5) {
      displayWinner("player");
    } else {
      	return;
    }
  } else if (contestant === "computer") {
			if (score === 5) {
				displayWinner("computer");
			} else {
					return;
			}
	}
} // testForWinner()

function gameLoop(result) {
  // loop that updates score and tests for winner
  gameLoop: while (playerScore < 5 && computerScore < 5) {
    if (result === "win") {
      playerScore++;
      updatePlayerScore();
      testForWinner("player", playerScore);
      if (playerScore === 5) {
        break gameLoop;
      }
      updateMessageBar("win");
      break; // if no winner, breaks out of loop and continues clickHandler
    } else if (result === "lose") {
				computerScore++;
				updateComputerScore();
				testForWinner("computer", computerScore);
				if (computerScore === 5) {
					break gameLoop;
				}
				updateMessageBar("lose");
				break; // if no winner, breaks out of loop and continues clickHandler
    } else if (result === "tie") {
				updateMessageBar("tie");
				break;
    }
  }
} // gameLoop()

wantToPlay();
