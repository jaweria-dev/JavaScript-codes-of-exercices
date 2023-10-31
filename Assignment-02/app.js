// =============Assignment Chapter03: JavaScript Multiple Values=========


// =========================Exercise 3.1============================
/*Practice exercise 3.1
1. Create an array to use as your shopping list with 3 items: "Milk," "Bread," and
"Apples."
2. Check your list length in the console.
3. Update "Bread" to "Bananas."
4. Output your entire list to the console.*/

let items = ["Milk", "Bread", "Apples"];
console.log("Length of items: " + items.length);
items[1] = "Bananas";
console.log("List of items: " + items)

// =============================End===============================


// =========================Exercise 3.2============================

/*Practice exercise 3.2
1. Create an empty array to use as a shopping list.
2. Add Milk, Bread, and Apples to your list.
3. Update "Bread" with Bananas and Eggs.
4. Remove the last item from the array and output it into the console.
5. Sort the list alphabetically.
6. Find and output the index value of Milk.
7. After Bananas, add Carrots and Lettuce.
8. Create a new list containing Juice and Pop.
9. Combine both lists, adding the new list twice to the end of the first list.
10. Get the last index value of Pop and output it to the console.
11. Your final list should look like this:*/


// Ans1.
let shoppingList = [];

// Ans2.
shoppingList.push("Milk", "Bread", "Apples");
console.log(shoppingList);

// Ans3.
let addItems = shoppingList.splice(1, 1, "Bananas" ,"Eggs")
console.log("Add item:" + shoppingList);

// Ans4.
shoppingList.pop();
console.log("Remove last item: " +shoppingList)

// Ans5.
shoppingList.sort();
console.log(shoppingList);

// Ans6.
let findIndex = shoppingList.indexOf("Milk");
console.log(findIndex)

// Ans7.
let addValue = shoppingList.splice(1,0, "Carrots", "Lettuce")
console.log(shoppingList);

// Ans8.
let newList = ["juice", "pop"];

// Ans9.

const combinedList = shoppingList.concat(newList).concat(newList);
shoppingList = combinedList;
console.log(combinedList);

// Ans10.
let lastIndex = shoppingList.lastIndexOf("pop");
console.log(lastIndex)

// Ans11.
console.log(shoppingList)

// =============================End===============================


// =========================Exercise 3.3============================

/*Practice exercise 3.3
1. Create an array containing three values: 1, 2, and 3.
2. Nest the original array into a new array three times.
3. Output the value 2 from one of the arrays into the console*/


const Array = [1, 2, 3];

const nestedArray = [[1, 2, 3], [1, 2, 3], [1, 2, 3]];

console.log(nestedArray[0][1]); 

// =============================End===============================

// =========================Exercise 3.4============================


/*Practice exercise 3.4
1. Create a new myCar object for a car. Add some properties, including, but not
limited to, make and model, and values for a typical car or your car. Feel free
to use booleans, strings, or numbers.
JavaScript Multiple Values[ 64 ]
2. Create a variable that can hold the string value color. This variable
containing a string value color can now be used to reference the property
name within myCar. Then, use the variable within the square bracket notation
to assign a new value to the color property in myCar.
3. Use that same variable and assign a new property string value to it, such as
forSale. Use the bracket notation once again to assign a new value to the
forSale property to indicate whether the car is available for purchase.
4. Output make and model into the console.
5. Output the value of forSale into the console*/

// Ans1
let myCar = {
    brand: "Toyota",
    model: "corolla altis",
    year: 2022,
    price : 7799000,
    color: "Grey",
    isAutomatic: true,
    carNo : 56721
  };

  // Ans2

  let changeProperty = "color";
myCar[changeProperty] = "black";
  console.log(myCar)

  // Ans3

  changeProperty = "forSale";
myCar[changeProperty] = true;
console.log(myCar)

// Ans4

console.log("Brand: " + myCar.brand);
console.log("Model: " + myCar.model);

// Ans5

console.log("For Sale: " + myCar.forSale);


// =============================End===============================

// =========================Exercise 3.5============================

/*Practice exercise 3.5
1. Create an object named people that contains an empty array that is called
friends.
2. Create three variables, each containing an object, that contain one of your
friend's first names, last names, and an ID value.
3. Add the three friends to the friend array.
4. Output it to the console.*/

// Ans1
var people = {
    friends: []
  };
  
// Ans2
  var friend1 = {
    firstName: "Jaweria",
    lastName: "Ahmed",
    id: 1243
  };
  
  var friend2 = {
    firstName: "Areeba",
    lastName: "zohaib",
    id: 2121
  };
  
  var friend3 = {
    firstName: "Rameeza",
    lastName: "Siraj",
    id: 3100
  };
  
// Ans3
  people.friends.push(friend1, friend2, friend3);
  
// Ans4
  console.log(people);

// =============================End===============================


// =========================Project==============================

/*Take the following array:
const theList = ['Laurence', 'Svekis', true, 35, null, undefined,
{test: 'one', score: 55}, ['one', 'two']];
Manipulate your array using various methods, such as pop(), push(), shift(), and
unshift(), and transform it into the following:
["FIRST", "Svekis", "MIDDLE", "hello World", "LAST"]
You can take the following steps, or adopt your own approach:
• Remove the first item and the last item.
• Add FIRST to the start of the array.
• Assign hello World to the fourth item value.
• Assign MIDDLE to the third index value.
• Add LAST to the last position in the array.
• Output it to the console.*/

  const theList = ['Laurence', 'Svekis', true, 35, null, undefined, { test: 'one', score: 55 }, ['one', 'two']];

// Ans1
theList.shift();  
theList.pop();   

// Ans2
theList.unshift('FIRST');

// Ans3
theList[3] = 'hello World';
console.log(theList);

// Ans4
theList[2] = 'MIDDLE';
console.log(theList);

// Ans5
theList.push('LAST');

// An6
console.log(theList);

// =============================End===============================

// =========================Project===============================

/*Company product catalog
In this project, you will implement a data structure for a product catalog and create
queries to retrieve data.
1. Create an array to hold an inventory of store items.
2. Create three items, each having the properties of name, model, cost, and
quantity.
3. Add all three objects to the main array using an array method, and then log
the inventory array to the console.
4. Access the quantity element of your third item, and log it to the console.
Experiment by adding and accessing more elements within your data
structure.*/


// Ans1
const inventory = [];

// Ans2
const item1 = {
  name: "Product 1",
  model: "Model A",
  cost: 399,
  quantity: 100,
};

const item2 = {
  name: "Product 2",
  model: "Model B",
  cost: 150,
  quantity: 50,
};

const item3 = {
  name: "Product 3",
  model: "Model C",
  cost: 99,
  quantity: 75,
};

// Ans3
inventory.push(item1, item2, item3);

console.log("Inventory Array:");
console.log(inventory);

// Ans4
const item4 = {
    name: "Product 4",
    model: "Model D",
    cost: 650,
    quantity: 60,
  };
  
  const item5 = {
    name: "Product 5",
    model: "Model E",
    cost: 40,
    quantity: 45,
  };
  
  
  inventory.push(item4, item5);
  
 
  console.log("Updated Inventory Array:");
  console.log(inventory);

  // =============================End===============================