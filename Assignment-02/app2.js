// =============Assignment Chapter04: Logic Statements=============


// =========================Exercise 4.1============================

/*Practice exercise 4.1
1. Create a variable with a Boolean value.
2. Output the value of the variable to the console.
3. Check whether the variable is true and if so, output a message to the console,
using the following syntax:
4. Add another if statement with an ! in front of the variable to check whether
the condition is not true, and create a message that will be printed to the
console in that instance. You should have two if statements, one with an
! and the other without. You could also use an if and an else statement
instead—experiment!
5. Change the variable to the opposite to see how the result changes*/

// Ans1
let booleanValue = true;

// Ans2
console.log("The value is of variable is " + booleanValue);

// Ans3

if (booleanValue) {
    console.log("The variable is true.");
  }

// Ans4

if (booleanValue !== true) {
    console.log("The variable is not true.");
  } else {
    console.log("The variable is true.");
  }

//Ans5
const opposedValue = !booleanValue;

if (opposedValue) {
  console.log("The variable is now false.");
} else {
  console.log("The variable is not false when using an else statement.");
}

// =============================End===============================


// =========================Exercise 4.2============================
/*Practice exercise 4.2
1. Create a prompt to ask the user's age
2. Convert the response from the prompt to a number
3. Declare a message variable that you will use to hold the console message for
the user
4. If the input age is equal to or greater than 21, set the message variable to
confirm entry to a venue and the ability to purchase alcohol
5. If the input age is equal to or greater than 19, set the message variable to
confirm entry to the venue but deny the purchase of alcohol
6. Provide a default else statement to set the message variable to deny entry if
none are true
7. Output the response message variable to the console*/

// Ans1 . Ans2
let userAge = parseInt(prompt("Enter your age"));

// Ans3
let message;

// Ans4
if (userAge >= 21) {
    message = "You are allowed entry to the venue and can purchase alcohol.";
}

// Ans5
else if (userAge >= 19) {
    message = "You are allowed entry to the venue but cannot purchase alcohol.";
}

// Ans6
else {
    message = "Sorry, you are denied entry to the venue.";
}

// Ans7
console.log(message);

// =============================End===============================


// =========================Exercise 4.3============================

/*Practice exercise 4.3
1. Create a Boolean value for an ID variable
2. Using a ternary operator, create a message variable that will check whether
their ID is valid and either allow a person into a venue or not
3. Output the response to the console*/


// Ana1.
const yourID = true; 

// Ans2.
const message2 = yourID ? "You are allowed into the venue." : "You are not allowed into the venue.";

// Ans3.
console.log(message2);

// =============================End===============================


// =========================Exercise 4.4============================

/*In this exercise, we'll create a Magic 8-Ball random answer generator:
1. Start by setting a variable that gets a random value assigned to it. The value
is assigned by generating a random number 0-5, for 6 possible results. You
can increase this number as you add more results.
2. Create a prompt that can get a string value input from a user that you can
repeat back in the final output.
3. Create 6 responses using the switch statement, each assigned to a different
value from the random number generator.
4. Create a variable to hold the end response, which should be a sentence
printed for the user. You can assign different string values for each case,
assigning new values depending on the results from the random value.
5. Output the user's original question, plus the randomly selected case
response, to the console after the user enters their question*/

// Ans1.
const randomNo = Math.floor(Math.random() * 6);

// Ans2.
const userQuestion = prompt("Please enter yes-or-no question:");

// Step 3: Create 6 responses using a switch statement.
let response;
switch (randomNo) {
  case 0:
    response = "You chose response 0.";
    break;
  case 1:
    response = "You chose response 1.";
    break;
  case 2:
    response = "You chose response 2.";
    break;
  case 3:
    response = "You chose response 3.";
    break;
  case 4:
    response = "You chose response 4.";
    break;
  case 5:
    response = "You chose response 5.";
    break;
  default:
    response = "Invalid response.";
}
// Ans4
const finalResponse = `You asked: "${userQuestion}"\nThe Magic 8-Ball says: ${response}`;

// Ans5.
console.log(finalResponse);

// =============================End===============================


// =========================Exercise 4.5============================

/*Practice exercise 4.5
1. Create a variable called prize and use a prompt to ask the user to set the
value by selecting a number between 0 and 10
2. Convert the prompt response to a number data type
3. Create a variable to use for the output message containing the value "My
Selection: "
4. Using the switch statement (and creativity), provide a response back
regarding a prize that is awarded depending on what number is selected
5. Use the switch break to add combined results for prizes
6. Output the message back to the user by concatenating your prize variable
strings and the output message string*/


// Ans1.
let prize = prompt("Select a number between 0 and 10");

// Ans2.
prize = parseInt(prize);

// Ans3.
let outputMessage = "My Selection: ";

// Ans4.
switch (prize) {
  case 0:
    outputMessage += "You win a trip to pakistan tour";
    break;
  case 1:
    outputMessage += "You get a Sofa set!";
    break;
  case 2:
    outputMessage += "You've won a brand new samsung smartphone!";
    break;
  case 3:
    outputMessage += "You've won a earpods!";
    break;
  case 4:
    outputMessage += "Congratulations, you get a new car!";
    break;
  case 5:
    outputMessage += "Enjoy a gourmet dinner for two on us!"
    break;
  case 6:
    outputMessage += "You've won a gift card ";
    break;
  case 7:
    outputMessage += "Congratulations, you get a gaming console!";
    break;
  case 8:
    outputMessage += "You win a smartwatch of your choice!";
    break;
  case 9:
    outputMessage += "You get a coffee maker!";
    break;
  case 10:
    outputMessage += "You win a weekend getaway to a spa!";
    break;
  default:
    outputMessage += "Sorry, you didn't win a prize this time.";
}

// Ans5.
console.log(outputMessage);


// =============================End===============================


// =========================Chapter Project============================

/*Chapter projects
Evaluating a number game
Ask the user to enter a number and check whether it's greater than, equal to, or less
than a dynamic number value in your code. Output the result to the user*/

const userNumber = Number(prompt("Enter a number:"));

const dynamicNumber = 20; 

if (userNumber > dynamicNumber) {
  console.log(`${userNumber} is greater than ${dynamicNumber}`);
} else if (userNumber < dynamicNumber) {
  console.log(`${userNumber} is less than ${dynamicNumber}`);
} else {
  console.log(`${userNumber} is equal to ${dynamicNumber}`);
}

/*Friend checker game
Ask the user to enter a name, using the switch statement to return a confirmation
that the user is a friend if the name selected is known in the case statements. You
can add a default response that you don't know the person if it's an unknown name.
Output the result into the console.*/


const userName = prompt("Enter a name:").toLowerCase();

switch (userName) {
  case "asma":
    console.log("Asma is your friend!");
    break;
  case "areeba":
    console.log("Areeba is your friend!");
    break;
  case "rameeza":
    console.log("Rameeza is your friend!");
    break;
  default:
    console.log("Sorry, I don't know this person.");
}

/*Rock Paper Scissors game
1. Create an array that contains the variables Rock, Paper, and Scissors.
2. Set up a variable that generates a random number 0-2 for the player and then
do the same for the computer's selection. The number represents the index
values in the array of the 3 items.
3. Create a variable to hold a response message to the user. This can show the
random results for the player and then also the result for the computer of the
matching item from the array.
4. Create a condition to handle the player and computer selections. If both are
the same, this results in a tie.
5. Use conditions to apply the game logic and return the correct results.
There are several ways to do this with the condition statements, but you
could check which player's index value is bigger and assign the victory
accordingly, with the exception of Rock beating Scissors.
6. Add a new output message that shows the player */


// Ans1.
const game = ["Rock", "Paper", "Scissors"];

// Ans2.
const player = Math.floor(Math.random() * 3); // 0 for Rock, 1 for Paper, 2 for Scissors
const computer = Math.floor(Math.random() * 3);

// Ans3.
const playerChoice = game[player];
const computerChoice = game[computer];
let gameMessage = `You chose ${playerChoice}. The computer chose ${computerChoice}. `;

// Ans4.
if (player === computer) {
  gameMessage += "It's a tie!";
} else if (
  (player === 0 && computer === 2) ||
  (player === 1 && computer === 0) ||
  (player === 2 && computer === 1)
) {
  gameMessage += "You win!";
} else {
  gameMessage += "Computer wins!";
}

// Ans5.
console.log(gameMessage);

// =============================End===============================
