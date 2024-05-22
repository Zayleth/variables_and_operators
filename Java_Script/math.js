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

// using arithmetic operator.
//Change the line that calculates x so the box is still 50px wide, but the 50 is calculated using the numbers 43 and 7 and an arithmetic operator.
x = 43 + 7;

//Change the line that calculates y so the box is 75px high, but the 75 is calculated using the numbers 25 and 3 and an arithmetic operator.
y = 25 * 3;

//Change the line that calculates x so the box is 250px wide, but the 250 is calculated using two numbers and the remainder (modulo) operator.
x = 500 / 2;

//Change the line that calculates y so the box is 150px high, but the 150 is calculated using three numbers and the subtraction and division operators.
y = (850 - 550) / 2;

//Change the line that calculates x so the box is 200px wide, but the 200 is calculated using the number 4 and an assignment operator.
x -= 4;

//Change the line that calculates y so the box is 200px high, but the 200 is calculated using the numbers 50 and 3, the multiplication operator, and the addition assignment operator.
y = 50;
y *= 3;
y += 50;






// Test your skills: Math
// You will create four numeric values, add two together, subtract one from another, then multiply the results. Finally, we need to write a check that proves that this value is an even number.
// STEPS

// 1. Create four variables that contain numbers.
let num1 = 7
let num2 = 5
let num3 = 28
let num4 = 32

// 2. Add the first two variables together and store the result in another variable.
let sum_variable_1_2 = num1 + num2 // 12

// 3. Subtract the fourth variable from the third and store the result in another variable.
let subtraction_variable_4_3 = num4 - num3 // 4

// 4. Multiply the results from steps 2 and 3 and store the result in a variable called finalResult.
let finalResult = sum_variable_1_2 * subtraction_variable_4_3 // 

// 5. Check if finalResult is an even number using one of the arithmetic operators. Store the result (0 for even, 1 for odd) in a variable called evenOddResult.
let evenOddResult = finalResult % 4 // 0