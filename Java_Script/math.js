/*
Active learning: sizing a canvas box
note - you will manipulate some numbers and operators to change the size of a box. 
The rectangle is 50px wide and 50px high.

Let's try the following:
*/

let x = 50; let y = 50;

x = 50;
y = 50;
ctx.fillStyle = 'green';
ctx.fillRect(10, 10, x, y);

// Using arithmetic operator.
// Change the line that calculates x so the box is still 50px wide, but the 50 is calculated using the numbers 43 and 7 and an arithmetic operator.
x = 43 + 7;

// Change the line that calculates y so the box is 75px high, but the 75 is calculated using the numbers 25 and 3 and an arithmetic operator.
y = 25 * 3;

// Change the line that calculates x so the box is 250px wide, but the 250 is calculated using two numbers and the remainder (modulo) operator.
x = 500 / 2;

// Change the line that calculates y so the box is 150px high, but the 150 is calculated using three numbers and the subtraction and division operators.
y = (850 - 550) / 2;

//Change the line that calculates x so the box is 200px wide, but the 200 is calculated using the number 4 and an assignment operator.
x -= 4;

// Change the line that calculates y so the box is 200px high, but the 200 is calculated using the numbers 50 and 3, the multiplication operator, and the addition assignment operator.
y = 50;
y *= 3;
y += 50;


// -----------------------------------------------


// Test your skills: Math

// Math 1
// You will create four numeric values, add two together, subtract one from another, then multiply the results. Finally, we need to write a check that proves that this value is an even number.
// STEPS

let finalResult;
let evenOddResult;

// 1. Create four variables that contain numbers.
let num1 = 7;
let num2 = 5;
let num3 = 28;
let num4 = 32;

// 2. Add the first two variables together and store the result in another variable.
let sum_variable_1_2 = num1 + num2; // 12

// 3. Subtract the fourth variable from the third and store the result in another variable.
let subtraction_variable_4_3 = num4 - num3; // 4

// 4. Multiply the results from steps 2 and 3 and store the result in a variable called finalResult.
finalResult = sum_variable_1_2 * subtraction_variable_4_3; // 

// 5. Check if finalResult is an even number using one of the arithmetic operators. Store the result (0 for even, 1 for odd) in a variable called evenOddResult.
evenOddResult = finalResult % 8; // 0



// Math 2
// You are provided with two calculations with the results stored in the variables result and result2. You need to take the calculations, multiply them, and format the result to two decimal places.
// STEPS

let result = 7 + 13 / 9 + 7;
let result2 = 100 / 2 * 6;

// 1. Multiply result and result2 and assign the result back to result (use assignment shorthand).
result *= result2 // 4633.333333333333

// 2. Format result so that it has two decimal places and store it in a variable called finalResult.
let finalResultt = result.toFixed(2); //'4633.33'

// typeof finalResult
// 'string'

// Check the data type of finalResult using typeof. If it's a string, convert it to a number type and store the result in a variable called finalNumber.
let finalNumber = Number(finalResultt);

// typeof finalNumber
// 'number'

// finalNumber
// 4633.33.



// Math 3
// There are three groups, each consisting of a statement and two variables. For each one, write a test that proves or disproves the statement made.
// Statement 1: The elephant weighs less than the mouse
const eleWeight = 1000;
const mouseWeight = 2;

let weightComparison = eleWeight < mouseWeight;


// Statement 2: The Ostrich is taller than the duck
const ostrichHeight = 2;
const duckHeight = 0.3;

let heightComparison = ostrichHeight > duckHeight


// Statement 3: The two passwords match
const pwd1 = 'stromboli';
const pwd2 = 'stROmBoLi';

let pwdMatch = pwd1.toLowerCase() === pwd2.toLowerCase();