# Rock Paper Scissors

  This Rock Paper Scissors project, as part of The Odin Project (TOP) curriculum, will showcase
what I have learned of JavaScript so far. It will start without a graphical interface and will
be played from the console and a graphical interface will be added as a later step in the TOP
curriculum.

  I went into this project thinking it would be fairly easy, but was quickly humbled. I 
recieved help from members of the TOP discord community, learned a great deal, and that really 
helped cement some of the concepts of Javascript taught so far. 

  For the game logic, I utilized a for loop to implement a 5 round function that iterates through 
a single round function. I implemented multiple functions and conditional statements to allow for 
the prompting of the user to input a choice of rock, paper, or scissors. I ensured that if the user
does not choose a valid option, it will decrement the iteration to allow the user to play all 5 rounds
successfully. I also implemented a function that displays the winner at the end of the 5th round based
on who's score is higher and if the scores match each other, it will display the result of the game as
a tie. The score of each round, computer's choice, and round result are displayed in the console after
each round.

  For the user interface, I implemented a number of DOM manipulation methods. I used DOM manipulation to
populate each window that pops up as well as to update each variable and display it on the viewport
(i.e. round count, player score, computer score). I attached an event listener to each weapon button
to execute an eventHandler that plays a round with the selected weapon button's value. The eventHandler
then calls a function to disable the event handler, allowing only the next round button event handler
to be active, preventing the user from continuing the game without resetting the board. A test function
was added to test for a winner based on the current player or computer score and display a winner message
and prompt the user to start a new game once either player or computer reaches a score of 5. The round count
and player and computer score are then reset to their default value upon selecting start and the game starts again.
