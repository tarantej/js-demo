//Single line comments

/* Multi 
line 
comments */

//  TypeScript - Supeset of JavaScript with added features


//JavaScript Output methods

console.log('Hello World!');
console.error('Errrrr');
console.warn('Warning');
console.log({ a: 1, b: 2 });
console.table({ a: 1, b: 2 });

var greets = 'Hello World';

console.log(greets);

// Console Time - show how much time an action took

console.time();
console.log('Hello World!');
console.error('Errrrr');
console.warn('Warning');
console.log({ a: 1, b: 2 });
console.table({ a: 1, b: 2 });
console.timeEnd();

//JavaScript Variables

// var, let, const

/*

 - var is a globally scoped variable and thus should not be used anymore
 - Globally scoped means we can use this variable in the entire project
 - let and const were added in ES6 (ECMAScript) 2016 which gave Javascript a lot of new functionality

 - let lets you reassign value of a variable
 - const does not let you change the assigned value
 - const cannot be initiated without a value

*/

let age = 30;

age = 40;

const age2 = 45

console.log(age);
console.log(age2);

//  Const values can be changed in arrays and object literals but cannot be reassigned

const peeps = {
    name: 'John',
    age: 30
}

//  Changing value of const variable

peeps.name = 'Andrea';

console.log(peeps);

//   Changing value of array in const variable

const num = [1, 2, 3, 4, 5];

//  Adding new value to array

num.push(6);

console.log(num);

//  You can change values in the array defined with const but you cannot create a new array with the same const variable name  - makes your code more robust and secure


//  Init variable

let greet;

console.log(greet);

//  What a variable can include in its name - letters, numbers, underscores (_) and dollar($)
//  Variable names cannot start with a number

let $name; //  Mostly used in Jquery
let _name; //   Mostly used in privately scoped variables 

//  Multi word variables

let ftName = 'Jack'; //  Camel Case
let f_name = 'Andrea' // Underscore method
let FName = 'Scott' //  Pascal case

/*

JavaScript is a dynanamically typed language

 - Types are associated with values and not the variables
 - The same variable can hold multiple values
 - We do not need to sepcify data types
 - Most of the other languages are statically typed (C#,Java, C++ etc.)
 - There are supersets of JS and addons that allow static typing (TypeScript, Flow)

*/

/*--------------------------------------------------------------------------------------------------- */


//  Data Types

//  Two types of Data Types - Primitive Data Types and Reference Data Types



//  Primitive Data Types

/*  

 - Stored directly in the location the variable accesses 
 - Stored in the stack 
 - Data is accessed by its actual value


Strings
Numbers
Boolean
Null
Undefined
Symbol

*/

const name = 'John'; // String
const newage = 30; //   Number
const rating = 4.5; //  Decimal is still a Number Data Type in JS, there is no Float Data Type
const isCool = true; // Boolean
const x = null; // Empty value
const y = undefined; // Can be defined or initialized
let z; //  undefined
let sym = Symbol();


console.log(typeof name); //  Shows variable datatype

/*

    When running console output of typeof null, the console returns the output as object. This is actually a bug / mistake since the inception of JavaScript.

    In the first implementation of JavaScript, JavaScript values were represented as a type tag and a value. The type tag for objects was 0. null was represented as the NULL pointer (0x00 in most platforms). Consequently, null had 0 as type tag, hence the "object" typeof return value.

*/


//  Reference Data types

/*

 - Accessed by reference
 - Data objects are stored on the heap
 - A pointer to the location in the memory
 - All output return as objects


Arrays
Object Literals
Functions
Dates
Object wrappers for strings and numbers
Anything else

*/

/*--------------------------------------------------------------------------------------------------- */

//  Data Type Conversion

/*
 
 - Taking the variable and changing its data type

*/

let val; // Initialize variable

//  Number to String

val = String(5);

val = String(4 + 4);

//  Boolean to String

val = String(true);

//  Date to String

val = String(new Date());

//  Array to String

val = String([1, 2, 3, 4]);

//  toString()

val = (5).toString();

console.log(val);
console.log(typeof val);
console.log(val.length);

//  Strings to Numbers

val = Number('5');

//  Boolean to Number

val = Number(true); //  Output is 1
val = Number(false); // Output is 0
val = Number(null) //  Output is 0
val = Number('hello'); // Output is NaN (Not a Number)
val = Number([1, 2, 3, 4]);

//  parseInt() - Convert to number

val = parseInt('100');

//  parseFloat() - Convert to decimal

val = parseFloat('102.8 ');

console.log(val);
console.log(typeof val);

//  toFixed() - Converts numbers to decimals, works only on numbers

console.log(val.toFixed(2));


//  Type Cohersion - Automatic type conversion by JavaScript

const val1 = String(5);
const val2 = 6;
let sum = val1 + val2;

//  Convert output of sum to number

sum = Number(val1 + val2);

//  or sum = parseInt(val1+val2)

console.log(sum);
console.log(typeof sum);

/*--------------------------------------------------------------------------------------------------- */

// Numbers and Math object

const num1 = 100;
const num2 = 50;

let output;

//  Basic Math Operations

output = num1 + num2 //  Addition
output = num1 - num2 //  Subtraction
output = num1 * num2 //  Multiplication
output = num1 / num2 //  Division
output = num1 % num2 //  Modulus

//  Math Object - has properties and functions inside the object method

output = Math.PI; //  Value of PI - 3.14
output = Math.round(2.8) // Rounding numbers
output = Math.ceil(2.4) //  Rounding numbers upwards
output = Math.floor(2.8) //  Rounding numbers down
output = Math.sqrt(64) // Square root
output = Math.abs(-3) // Absolute number
output = Math.pow(8, 2) // Power of the number
output = Math.min(1, 2, 3, 4, 5) //  Minimum number
output = Math.max(6, 7, 8, 9, 10) // Maximum number
output = Math.random() // Random decimal number
output = Math.floor(Math.random * 20 + 1) //  Random whole number between 1 to 20



console.log(output);

/*--------------------------------------------------------------------------------------------------- */


//  String Methods

/* 



*/

let FirstName = 'William';
let LastName = 'Jhonson';

let personName;

personName = FirstName + ' ' + LastName;

//  Concatenation

console.log(personName);

//  Append - Add on to the existing variable

let PersonN;

PersonN = 'Taran ';
PersonN += 'Singh';

console.log(PersonN);

//  Concatenation in sentences  - Traditional Way

console.log('My name is ' + FirstName + ' and my age is ' + age)

//  New way - Template Strings / Template Literal

console.log(`My name is ${FirstName} and my age is ${age}`)

//  Assign Template Tag / Template Literal to a variable

const whatevs = `My name is ${FirstName} and my age is ${age}`;

console.log(whatevs);

//  Escaping

//output = "That's awesome! I can't wait"; // Method 1
output = 'That\'s awesome!, I can\'t wait'; // Method 2

console.log(output);

// String properties and methods

const s = 'technology, computers, IT, Code';

//  Length

console.log(s.length);

//  Concat - Similar concatenation with a method

personName = FirstName.concat(' ', LastName);

console.log(personName);

//  Change to upper case

console.log(s.toUpperCase());

//  Change to lower case

console.log(s.toLowerCase());

//  Output specific character from an array

output = FirstName[2];

console.log(output);

//  indexof finds the index location from the start of the value

output = FirstName.indexOf('l');

console.log(output);

//  lastIndexof finds the index location from the end of the value

output = FirstName.lastIndexOf('l');

console.log(output);

//  charAt - opposite of Index

output = FirstName.charAt(2);

console.log(output);

//  Get last character

output = FirstName.charAt(FirstName.length - 1);

// Substring out of a string

console.log(s.substring(0, 5));

//  Slice - pull out of array

output = FirstName.slice(0, 4);

//  negative number starts the slice from reverse

output = FirstName.slice(0, -3);

console.log(output);

//  Split string to array

console.log(s.split(', '));

//  Replace

console.log(s.replace('computers', 'Web development'));

//  Includes - outputs tru or false value based on the term is included in the string

console.log(s.includes('IT'));

/*--------------------------------------------------------------------------------------------------- */

// Template Literals

/* 
 - Part of ECMASCRIPT / ES2016
 - Modern browsers can handle the functionality
 - No need to compile, unless working on compatibility with older versions of Internet Explorer

*/

const Name = 'Joe';
const Job = 'Web Developer';
const City = 'Auckland';
const Country = 'New Zealand';

let html;

//  Inserting data in JavaScript without template strings

html = '<ul><li>Name: ' + Name + '</li></li>Age: ' + age +
    ' </li><li>Job: ' +
    Job + '</li> <li>City: ' +
    City + ' </li><li>Country: ' +
    Country + '</li> </ul>';

//  Arranging string in proper lines

html = '<ul>' +
    '<li>Name: ' + Name + '</li></li>Age: ' + age +
    ' </li>' +
    '<li>Job: ' +
    Job + '</li>' +
    '<li>City: ' +
    City + ' </li>' +
    '<li>Country: ' +
    Country + '</li>' +
    '</ul>';


//  Output HTML via DOM (Document Object Method)

document.body.innerHTML = html;


//  Concatenation using Template Literals / Template Strings

/* 
 - Uses backticks(`) to denote a template string
 - Enables displaying HTML output in a better way
 - Also enables calling of expressions, functions/ methods and conditional statments


*/

function hello() {
    return 'hello';
}

html = `<ul>
<li>Name: ${Name}</li>
</li>Age: ${age} </li>
<li>Job: ${Job}</li> 
<li>City: ${City} </li>
<li>Country: ${Country}</li>
<li>${2+2}</li>
<li>${hello()}</li>
<li>${age > 30 ? 'Over 30': 'Under 30'}</li>

</ul>`;

document.body.innerHTML = html;

/*--------------------------------------------------------------------------------------------------- */

//  Arrays and Array Methods

/*
 - Variables that hold multiple values
 - Can be mutated and iterated
 - Can be used for various complex algorthms


*/

// Creating arrays with the Array constructor

const numbers = new Array(1, 2, 3, 4, 5);

let arrayout;

console.log(numbers);

//  Arrays in square brackets []

const fruits = ['Apples', 'Mangoes', 'Strawberries', 'Kiwi', 'Dragonfruit'];

console.log(fruits);

//  Arrays can have multiple data types

const mdt = [1, 2, 3, 4, 5, 'Apples', 'Mangoes', 'Strawberries', 'Kiwi', 'Dragonfruit', true];

console.log(mdt);

//  Array Length

console.log(fruits.length);

//  Check if the list is an Array

console.log(Array.isArray(fruits));

//  Get index of value in Array

console.log(fruits.indexOf('Dragonfruit'));

//  Accessing single item in arrays

console.log(fruits[2]); //  Since arrays are zero based, their first value starts from 0 and not 1. That is why fruits[2] shows the value 'Strawberries' as the values are listed as follows
/*
    [0] = Apples
    [1] = Mangoes
    [2] = Strawberries
    [3] = Kiwi
    [4] = Dragonfruit
*/

//  Adding a new value to the array at a certain position

fruits[5] = 'Grapes';

console.log(fruits);

//  When you cannot specify the position of the item to be added in the array,we can use the push method which will add the new value at the end of the array

fruits.push('Oranges');

console.log(fruits);

//  Add array items to the start of the array

fruits.unshift('Papaya');

console.log(fruits);

//  Delete last array item

fruits.pop();

console.log(fruits);

//  Delete first item of the array

fruits.shift();
console.log(fruits);

//  Splice (remove from certain position) values in Array

fruits.splice(3, 1); // First number indicates where do you want to start, second number indicates how many number of items you want to pop / delete from the array moving from first item to last

console.log(fruits);

//  Reverse splice

fruits.reverse(3, 1) // Removes the item by counting from the end of the array to the beginning

console.log(fruits);

//  Concatenate Arrays

let arrconc = fruits.concat(numbers);

console.log(arrconc);

//  Sorting Arrays

console.log(fruits.sort());

//  Use compare function for sorting numbers

// console.log(numbers.sort(function(x, y) {
//     return x - y;
// }))

// //  Reverse Sort

// console.log(numbers.sort(function(x, y) {
//     return y - x;
// }))

//  Find first item in the array based on the conditions of a function

function under50(num) {
    return num < 50;
}

console.log(numbers.find(under50));

/*--------------------------------------------------------------------------------------------------- */

//  Object Literals - Key Value Pairs

const person = {
    firstName: 'Taran',
    lastName: 'Singh',
    age: 40,
    hobbies: ['sketching', 'photoshop', 'blogging', 'poetry'],

    //  Embedded Object
    address: {
        unit: 'W24',
        street: '1510 Great North Road',
        suburb: 'Waterview',
        city: 'Auckland',
        country: 'New Zealand'


    },

    //  Functions

    getBirthyear: function() {
        //return 1990;

        //calculate the person's current age using 'this' keyword

        return 2020 - this.age;
    },
}

console.log(person);

//  Accessing single value

console.log(person.firstName);

console.log(person['firstName']); //  Alternative method
//  You can seperate the object literal values with the use of comma (,)

console.log(person.firstName, person.lastName);

//  Accessing objects from an array

console.log(person.hobbies[1]);

//  Accessing objects from embedded objects

console.log(person.address.city);
console.log(person.address['city']); // Alternatie method

//  Accessing function

console.log(person.getBirthyear());

//  Destructuring objects - pulling objects out of a variable

const { firstName, lastName } = person;

console.log(firstName);

//  Pulling objects out of embedded objects

const { address: { city } } = person;
console.log(city);

//  Directly adding properties

person.email = 'taransingh@gmail.com'

console.log(person.email);

//  Output objects as table

console.table(person);

//  console.table(person.firstName, person.lastName, person.age, person.address, person.email, person.hobbies);


//  Arrays of Objects

const todos = [

    {
        id: 1,
        task: 'Learn Javascript',
        isCompleted: true,
    },

    {
        id: 2,
        task: 'Learn React',
        isCompleted: false,
    },

    {
        id: 3,
        task: 'Create Portfolio',
        isCompleted: false,
    }

]

//  Output of particular array object + object property

console.log(todos[1].task);

/*--------------------------------------------------------------------------------------------------- */

//  JSON - JavaScript Object Notation. Common output format for development, especially when using API

//   Converting script objects to JSON

const todoJSON = JSON.stringify(todos);

console.log(todoJSON);

/*--------------------------------------------------------------------------------------------------- */

//  Date and Time

const today = new Date(); //  By default it will be the current date

let birthday = new Date('9 - 10 - 1981');

console.log(today);

birthday.setDate(12);
birthday.setMonth(2)
birthday.setFullYear(1981)

console.log(birthday);

//  Convert to String

console.log(today.toString());

//   get current month

console.log(today.getMonth()); //   Month is zero based, like array

//  Get current date

console.log(today.getDate());

//  get current day

console.log(today.getDay()); // Day of the week starts from Sunday

//  get current year

console.log(today.getFullYear());

/*--------------------------------------------------------------------------------------------------- */


//  Conditional logic (If, If-Else and Comparison operators)

/*

 - Equals sign(=) -> Assigning value to varialbe
 - Double Equal sign(==) -> Comparing the values of the variables
 - Triple Equal sign(===) -> Comaparing the value and data type of the variable
 - Exclaimation with equal (!=,!==) -> NOT Operator
 - Double ampersand(&&) -> AND operator
 - Double Pipe(||) -> OR Operator
 - Question mark(?) -> Ternary Operator for if conditions
 - Color(:) -> Ternary operator for else condition
 - NOTE: Curly braces ({}) are optional in JavaScript, but still recommended syntax-wise

*/

//  If statement

const id = '100';

//  Equals to(==)

if (id == 100) {
    console.log('correct');
} else {
    console.log('incorrect');
}

//  Not Equals to(!=)

if (id != 101) {
    console.log('correct');
} else {
    console.log('incorrect');
}

//   Equals to values and data type (===)

if (id === 100) {
    console.log('correct');
} else {
    console.log('incorrect');
}


//   Not equals to values and data type (!==)

if (id !== 100) {
    console.log('correct');
} else {
    console.log('incorrect');
}

//  Typeof operator

if (typeof id !== 'string') {
    console.log(`ID: ${id}`);
} else {
    console.log('No ID defined');
}

//  Greater or Less than (>,<)

if (id >= 200) {
    console.log('correct');
} else {
    console.log('incorrect');
}

if (id <= 200) {
    console.log('correct');
} else {
    console.log('incorrect');
}

//  If-Else statement

const color = 'yellow';

if (color === 'red') {
    console.log(`Color is ${color}`)
} else if (color === 'blue') {
    console.log(`Color is ${color}`)
} else {
    console.log('Color is niether red nor blue');
}

//  Logical operators

//  AND operator (&&)

const Pname = 'Steve';
const Page = 20;

if (Page > 0 && Page < 12) {
    console.log(`${Pname} is a child`);
} else if (Page >= 13 && Page <= 19) {
    console.log(`${Pname} is a teenager`);
} else if (Page >= 20 && Page <= 35) {
    console.log(`${Pname} is a young adult`)
} else {
    console.log(`${Pname} is an adult`)
}

// OR operator (||)

if (Page >= 16 || Page <= 65) {
    console.log(`${Pname} cannot run in race`);
} else {
    console.log(`${Pname} can run in race`);
}

//  Ternary operators (?,:)

console.log(id === 100 ? 'correct' : 'incorrect');