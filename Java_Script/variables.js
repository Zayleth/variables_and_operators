// A variable is a "named storage" for data. We can use variables to store data from our code.
// Each variable has a label with a unique name
// To create a variable in JavaScript; 
// let = 'keyword'; is a modern variable declaration.
// var = 'variable_declaration'; is an old-school variable declaration. Normally we don’t use it at all. it has its differences with let
// const = 'value that does not change or constant value'

// Variables can have any name assigned to them, except reserved names specified by Java Script. These are

    //let
    //class
    //return
    //functions


// NOTE - Variables should be named in a way that allows us to easily understand what’s inside them

// TASKS

// Working with variables
// 1. Declare two variables: admin and name.
// 2. Assign the value "John" to name.
// 3. Copy the value from name to admin.
// 4. Show the value of admin using alert (must output “John”).

let name = "John";
let admin = 'name';

alert( admin ); // "John"




// Giving the right name
// 1. Create a variable with the name of our planet. How would you name such a variable?
// Create a variable to store the name of a current visitor to a website. How would you name that variable?

let eart_planet = '';
let current_visitor_name = '';




// Uppercase const?
// 1. Examine the following code:

// const birthday = '18.04.1982';
// const age = someCode(birthday);

/*
Here we have a constant birthday for the date, and also the age constant.
Would it be right to use upper case for birthday? For age? Or even for both?

const BIRTHDAY = '18.04.1982'; // make birthday uppercase?
const AGE = someCode(BIRTHDAY); // make age uppercase?
*/

const BIRTHDAY = '18.04.1982'; // constant value that does not change over time