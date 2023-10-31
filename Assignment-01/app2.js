// JavaScript Chapter:02 Assginment

// ============================== Exercise 2.1 =================================

/*What are the types of these variables listed below? Verify this with typeof and
output the result to the console:*/
let str1 = 'Laurence';
console.log(typeof str1);
let str2 = "Svekis";
console.log(typeof str2)
let val1 = undefined;
console.log(typeof val1)
let val2 = null;
console.log(typeof val2)
let myNum = 1000;
console.log(typeof myNum)

// ============================ End of exercise 2.1 =============================


// ============================== Exercise 2.2 ==================================

/*Create a variable for your name, another one for your age, and another one for
whether you can code JavaScript or not.
Log to the console the following sentence, where name, age and true/false are
variables:*/

const myName = "jawerira";
const age = 20;
const codeJs = true;

console.log(`Hello, my name is ${myName}, I am ${age} years old and Yes I can code JavaScript: it's ${codeJs}.`)

// ============================ End of exercise 2.2 =============================


// ============================== Exercise 2.3 =================================

/*Write some code to calculate the hypotenuse of a triangle using the Pythagorean
theorem when given the values of the other two sides. The theorem specifies that the
relation between the sides of a right-angled triangle is a2
+ b2

You can use prompt() to get the value for a and b. Write code to get the value from
the user for a and b. Then square the values of both a and b before adding them
together and finding the square root. Print your answer to the console.*/

let valueOfa = Number(prompt("Enter value of a"));
let valueOfb = Number(prompt("Enter value of b"));

let pythagorusTheorem = (valueOfa**2 + valueOfb**2);
let result = Math.sqrt(pythagorusTheorem)
console.log(result);

// ============================ End of exercise 2.3 =============================


// ============================== Exercise 2.4 =================================

/*Create variables for three numbers: a, b, and c. Update these variables with the
following actions using the assignment operators:
• Add b to a
• Divide a by c
• Replace the value of c with the modulus of c and b
• Print all three numbers to the console*/


let a = 2;
let b = 5;
let c = 8;

a+= b;
a/= c;
c%= b

console.log("Updated values:");
console.log("a:", a);
console.log("b:", b);
console.log("c:", c);

// ============================ End of exercise 2.4 =============================


// ==============================Miles project================================= 

/*Miles-to-kilometers converter
Create a variable that contains a value in miles, convert it to kilometers, and log the
value in kilometers in the following format*/


let mile = prompt("Enter the value in mile");

let kiloMeter = mile * 1.60934;

document.write(`Converted the value in miles to km is ${kiloMeter}`)

// ============================ End  =============================


// ================== BMI calaculator project====================

/*BMI calculator
Set values for height in inches and weight in pounds, then convert the values to
centimeters and kilos, outputting the results to the console:
• 1 inch is equal to 2.54 cm
• 2.2046 pounds is equal to 1 kilo*/


heightInches = 70
weighPounds = 154

// # ConversioN
inchToCm = 2.54
poundToKilo = 2.2046

// # Convert height and weight to centimeters and kilograms
height_cm = heightInches * inchToCm
weight_kg = weighPounds / poundToKilo

// # Calculate BMI
height_meters = height_cm / 100  
bmi = weight_kg / (height_meters ** 2)

console.log(`Height: ${heightInches} inches is approximately ${height_cm} cm.`);
console.log(`Weight: ${weighPounds} pounds is approximately ${weight_kg} kg.`);
console.log(`BMI: ${bmi.toFixed(2)}`);


// ============================ End  =============================