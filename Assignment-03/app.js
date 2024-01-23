// Assignment: Chapter#5 Loops:

/*Practice exercise 5.1
In this exercise we will create a number guessing game that takes user input and
replies based on how accurate the user's guess was.
1. Create a variable to be used as the max value for the number guessing game.
2. Generate a random number for the solution using Math.random() and
Math.floor(). You will also need to add 1 so that the value is returned as
1-[whatever the set max value is]. You can log this value to the console for
development to see the value as you create the game, then when the game is
complete you can comment out this console output.
3. Create a variable that will be used for tracking whether the answer is correct
or not and set it to a default Boolean value of false. We can update it to be
true if the user guess is a match.
4. Use a while loop to iterate a prompt that asks the user to enter a number
between 1 and 5, and convert the response into a number in order to match
the data type of the random number.
5. Inside the while loop, check using a condition to see if the prompt value is
equal to the solution number. Apply logic such that if the number is correct,
you set the status to true and break out of the loop. Provide the player with
some feedback as to whether the guess was high or low, and initiate another
prompt until the user guesses correctly. In this way we use the loop to keep
asking until the solution is correct, and at that point we can stop the iteration
of the block of code.*/


// Ans.

// 1. 
// const maxValue = 10;

// // 2. 
// const solution = Math.floor(Math.random() * maxValue) + 1;

// console.log("Random number:", solution);

// // 3.
// let isCorrect = false;

// 4. 
// while (!isCorrect) {
//     // 5. 
//     let userGuess = prompt(`Enter a number between 1 and ${maxValue}:`);
    
//     userGuess = parseInt(userGuess);

   
//     if (userGuess === solution) {
//         isCorrect = true;
//         console.log("Congratulations! You guessed the correct number!");
//     } else {
        
//         if (userGuess > solution) {
//             console.log("Too high! Try again.");
//         } else {
//             console.log("Too low! Try again.");
//         }
//     }
// }

// Game over

/*Practice exercise 5.2
In this exercise, we will create a basic counter that will increase a dynamic variable
by a consistent step value, up to an upper limit.
1. Set the starting counter to 0
2. Create a variable, step, to increase your counter by
3. Add a do while loop, printing the counter to the console and incrementing it
by the step amount each loop
4. Continue to loop until the counter is equal to 100 or more than 100*/

// Ans.1
let counter = 0;

// Ans.2
const step = 10;

// Ans.3 & 4
do{
  console.log("Counter:", counter);
  counter += step; 
} while (counter < 100); 


/*Practice exercise 5.3
In this exercise we will use a for loop to create an array that holds objects. Starting
with creating a blank array, the block of code within the loop will create an object
that gets inserted into the array.
1. Setup a blank array, myWork.
2. Using a for loop, create a list of 10 objects, each of which is a numbered
lesson (e.g. Lesson 1, Lesson 2, Lesson 3….) with an alternating true/false
status for every other item to indicate whether the class will be running this
year. For example:
name: 'Lesson 1', status: true
3. You can specify the status by using a ternary operator that checks whether
the modulo of the given lesson value is equal to zero and by setting up a
Boolean value to alternate the values each iteration.
4. Create a lesson using a temporary object variable, containing the name
(lesson with the numeric value) and predefined status (which we set up in
the previous step).
5. Push the objects to the myWork array.
6. Output the array to the console.*/

// Ans.1
let myWork = [];

// Ans.2
for (let i = 1; i <= 10; i++) {

// Ans.3
  const status = i % 2 === 0 ? true : false;

// Ans.4
  const lesson = {
    name: 'Lesson ' + i,
    status: status
  };

// Ans.5
  myWork.push(lesson);
}

// Ans.6
console.log(myWork);


/*Practice exercise 5.4
In this exercise we will be generating a table of values. We will be using loops to
generate rows and also columns, which will be nested within the rows. Nested arrays
can be used to represent rows in a table. This is a common structure in spreadsheets,
where each row is a nested array within a table and the contents of these rows are
the cells in the table. The columns will align as we are creating an equal number of
cells in each row.
1. To create a table generator, first create an empty array, myTable, to hold your
table data.
2. Set variable values for the number of rows and columns. This will allow us
to dynamically control how many rows and columns we want within the
table. Separating the values from the main code helps make updates to the
dimensions easier.
3. Set up a counter variable with an initial value of 0. The counter will be used
to set the content and count the values of the cells within the table.
4. Create a for loop with conditions to set the number of iterations, and to
construct each row of the table. Within it, set up a new temporary array
(tempTable) to hold each row of data. The columns will be nested within
the rows, generating each cell needed for the column.
5. Nest a second loop within the first to count the columns. Columns are run
within the row loop so that we have a uniform number of columns within
the table.*/


// Ans.1
let myTable = [];

// Ans.2
const numRows = 4; 
const numColumns = 7; 

// Ans.3
let counter1 = 0;

// Ans.4
for (let i = 0; i < numRows; i++) {
  
  let tempTable = [];

  // Ans.5
  for (let j = 0; j < numColumns; j++) {
   
    counter1++;
    tempTable.push(`Cell ${counter1}`);
  }

 
  myTable.push(tempTable);
}


console.table(myTable);


/*Practice exercise 5.5
Explore how to create a table grid that contains nested arrays as rows within a table.
The rows will each contain the number of cells needed for the number of columns set
in the variables. This grid table will dynamically adjust depending on the values for
the variables.
1. Create a grid array variable.
2. Set a value of 64 for the number of cells.
3. Set a counter to 0.
4. Create a global variable to be used for the row array.
5. Create a loop that will iterate up to the number of cells you want in the array,
plus one to include the zero value. In our example, we would use 64+1.
6. Add an outer if statement, which uses modulo to check if the main counter
is divisible by 8 or whatever number of columns you want.
7. Inside the preceding if statement, add another if statement to check if the
row is undefined, indicating whether it is the first run or whether the row
is complete. If the row has been defined, then add the row to the main grid
array.
8. To finish off the outer if statement, if the counter is divisible by 8, clear the
row array—it has already been added to the grid by the inner if statement.
9. At the end of the for loop, increment of the main counter by 1.
10. Set up a temporary variable to hold the value of the counter and push it to
the row array.
11. Within the loop iteration, check if the value of the counter is equal to the total
number of columns you want; if it is, then add the current row to the grid.
12. Please note that the extra cell will not be added to the grid since there aren't
enough cells to make a new row within the condition that adds the rows to
the grid. An alternative solution would be to remove the +1 from the loop
condition and add grid.push(row) after the loop is completed, both of which
will provide the same solution output.
13. Output the grid into the console.*/

// Ans.1
let grid = [];

// Ans.2
const totalCells = 64;

// Ans.3
let counter2 = 0;

// Ans.4
let row = [];

// Ans.4
for (let i = 0; i <= totalCells; i++) {
  // Ans.5
  if (counter2 % 8 === 0) {
  // Ans.6
    if (row !== undefined) {
     // Ans.7
      grid.push(row);
    }

   // Ans.8
    row = [];
  }

  // Ans.9
  counter2++;

  // Ans.10
  let tempValue = counter2;
  row.push(tempValue);

  // Ans.11
  if (counter2 % 8 === 0) {
    // Ans.12    
    grid.push(row);
    
    row = [];
  }
}

// Ans.13
console.log(grid);


/*Practice exercise 5.6
This exercise will construct an array as it loops through the incrementing values of
x. Once the array is done, this exercise also will demonstrate several ways to output
array contents.
1. Create an empty array
2. Run a loop 10 times, adding a new incrementing value to the array
3. Log the array into the console
4. Use the for loop to iterate through the array (adjust the number of iterations
to however many values are in your array) and output into the console
5. Use the for of loop to output the value into the console from the array*/

// Ans.1
let myArray = [];

// Ans.2
for (let i = 0; i < 10; i++) {
    myArray.push(i);
}

// Ans.3
console.log("Array:", myArray);

// Ans.4
console.log("Using for loop:");
for (let i = 0; i < myArray.length; i++) {
    console.log(myArray[i]);
}

// Ans.5
console.log("Using for-of loop:");
for (const value of myArray) {
    console.log(value);
}


/*Practice exercise 5.7
In this exercise, we will experiment with looping over objects and internal arrays.
1. Create a simple object with three items in it.
2. Using the for in loop, get the properties' names and values from the object
and output them into the console.
3. Create an array containing the same three items. Using either the for loop or
the for in loop, output the values from the array into the console.*/

// 1. Create a simple object with three items in it
let myObject = {
  item1: "snacks",
  item2: "noodles",
  item3: "chocklate",
};

// 2. Using the for in loop, get the properties' names and values from the object and output them into the console
console.log("Object properties and values:");
for (const key in myObject) {
  if (myObject.hasOwnProperty(key)) {
      console.log(`${key}: ${myObject[key]}`);
  }
}

// 3. Create an array containing the same three items
let my_Array = ["snacks", "noodles", "chocklate"];

// Using the for loop to output the values from the array into the console
console.log("\nArray values using for loop:");
for (let i = 0; i < my_Array.length; i++) {
  console.log(my_Array[i]);
}

// Alternatively, using the for in loop to output the values from the array into the console
console.log("\nArray values using for-in loop:");
for (const index in my_Array) {
  console.log(my_Array[index]);
}




let i = 1;
while (i < 50) {
if (i % 2 === 0){
continue;
}
console.log(i);
i++;
}
