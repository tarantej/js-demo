/*--------------------------------------------------------------------------------------------------- */

//  JavaScript Fundamentals

/*--------------------------------------------------------------------------------------------------- */


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

// html = '<ul><li>Name: ' + Name + '</li></li>Age: ' + age +
//     ' </li><li>Job: ' +
//     Job + '</li> <li>City: ' +
//     City + ' </li><li>Country: ' +
//     Country + '</li> </ul>';

//  Arranging string in proper lines

// html = '<ul>' +
//     '<li>Name: ' + Name + '</li></li>Age: ' + age +
//     ' </li>' +
//     '<li>Job: ' +
//     Job + '</li>' +
//     '<li>City: ' +
//     City + ' </li>' +
//     '<li>Country: ' +
//     Country + '</li>' +
//     '</ul>';


//  Output HTML via DOM (Document Object Method)

// document.body.innerHTML = html;


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

// document.body.innerHTML = html;

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


/*--------------------------------------------------------------------------------------------------- */

//  Switches


/* 


*/

//  Changing colors using switch

const col = 'red'

switch (col) {
    case 'red':
        {
            console.log(`Color is ${col}`);
            break;
        }
    case 'blue':
        {
            console.log(`Color is ${col}`);
            break;
        }
    default:
        {
            console.log('Color is niether red nor blue');
            break;
        }
}

//  Trying age example with switch

//  Not working as expected

const humanName = 'Jackson';
const humanAge = 15;

switch (humanAge) {

    case (humanAge > 0 && humanAge < 12):
        {
            console.log(`${humanName} is a child`);
            break;
        }

    case (humanAge >= 13 && humanAge <= 19):
        {
            console.log(`${humanName} is a teenager`);
            break;
        }
    case (humanAge >= 0 && humanAge <= 35):
        {
            console.log(`${humanName} is a young adult`);
            break;
        }
    default:
        {
            console.log(`${humanName} is an adult`);
            break;
        }
} /*--------------------------------------------------------------------------------------------------- */

//  Function declaration and expressions

/* 

 - Blocks of code that an be defined and then called at a later time
 - Different types of functions
 - Function Declaration
 - Function Expression
 - IIFE (Immediately invokable function expression)
 - Property Methods

 - Can take in Parameters / Arguments



*/

//  Function Declaration


function grrr() {
    //  Anything inside this is the function scope

    //console.log('Hello');

    return 'Hello';
}

//  Function output

console.log(grrr());

//  Adding Parameters / Arguments

function unihuman(FirstName, LastName) {

    return 'Hello ' + FirstName + ' ' + LastName;
}

//  If you output the method without the parameters, you get undefined unless you mention default values in the method

console.log(unihuman()); // Hello undefined undefined (Without parameters and undefined default values)

function defhuman(FirstName = 'Jackson', LastName = 'Briggs'
    /*Adding default values*/
) {

    return 'Hello ' + FirstName + ' ' + LastName;
}

//  If you define the parameters in the method and then output the method without the parameters, you get output of default values from the method

console.log(defhuman()); // Hello Jackson Brigs (Without parameters and defined default values)

function human(FirstName, LastName) {

    return 'Hello ' + FirstName + ' ' + LastName;
}

//  If you output the method with the parameters, you get output of values defined in the variable

console.log(human(FirstName, LastName)); // Hello William Jhonson

//  Function Expression 

/*

- Putting a function as a variable assignment
- Can be named (function square
(){}) or Anonymous(function(){})

- Using a declaration or expression does not make much difference unless we are using advanced features such as hoisting, closures etc. 

 */

const square = function(x) {
    return x * x
};

console.log(square(8)); //  Output is 64

//  Adding default value

const square3 = function(x = 3) {
    return x * x
};

console.log(square3()); //  Output is 9

// Immediately Invokeable Function Expressions (IIFE)

/*

- Functions that you can declare and run at the same time
- Useful in certain design patterns such as module patterns

 */

//  Syntax

// (function() {
//     console.log('IIFE Ran...');
// })();

//  Parameters

(function(humanName) {
    console.log('Hi ' + humanName);
})(humanName);

//  Property Methods

/*

- When a function is put inside a object, it is called a method

 */

const tasklist = {
    add: function() {
        console.log('Add Task');
    },
    edit: function(id) {
        console.log(`Edit Task ${id}`);
    }
}

tasklist.add();
tasklist.edit(22);

// Defining property methods outside of the function

tasklist.delete = function(id) {
    console.log(`Delete Task ${id}`);
}


tasklist.delete(30);


/*--------------------------------------------------------------------------------------------------- */

//  Loops and Iterattions


/* 

- Loop is a specific instruction that keeps repeating untial a condition is reached
- General loops(For, While, Do...While)
- Array specific iterations(Foreach, Map)
- Object iteration for key value pairs(For, Which)
- You cannot use a const inside a loop as it keeps changing

*/

//  For Loop - When you know how many interations you are going to have

for (let i = 0; i < 10; i++) {
    //console.log(i);
    //Conditional statement
    if (i === 2) {
        console.log('My Favortite Number is ' + i);

        //  In case of more than one loop, the continue stateent will break the current ieration and continue to the next iteration

        continue;
    }

    if (i === 5) {
        //   Break statement stops the loop
        break;
    }
    console.log(i);
}

//  While loop - When you dont know how many interations you are going to have

let j = 0;
while (j < 10) {
    console.log(j);
    j++;
}

//  Do...While loop - Always going to run atleast once

let k = 100;
do {
    console.log(k);
    k++
}
while (k < 10);

//  Loop through Arrays

const sportcars = ['Mustang', 'Ferrari', 'McLaren', 'Lamborghini', 'Porsche', 'Koensigg'];

for (let c = 0; c < sportcars.length; c++) {
    //console.log(c);
    //  Display car names
    // console.log(sportcars[c]);
}

//  Foreach - takes in a callback function

// sportcars.forEach(function(sc) {
//     console.log(sc);
// });

//  Foreach index

sportcars.forEach(function(index, sc, array) {
    // console.log(`${index}:${sc}`);

    console.log(array);
});

//  Map - Used to return a different array

const taskList = [

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
const tasks = taskList.map(function(tsk) {
    return tsk.id, tsk.task;
});

console.log(tasks); //

//  For In loop - For object key value pairs

const user = {
    fname: 'John',
    lname: 'Doe',
    age: 40
}

for (let x in user) {
    // console.log(x) //x only gives the key names
    console.log(`${x}:${user[x]}`) //   Gives key value pair
}


/*--------------------------------------------------------------------------------------------------- */

//  Window Object


/* 

- The window is the global object in the client side javascript
- Both Google chrome and JavaScript use the same V8 browser engine
- Window Methods
- Window Objects
- Window properties 

*/


//  Window Methods

//  Alert

// alert('Hello');

//  Prompt

// const input = prompt();

// alert(input);

//  Confirm

// if (confirm('Are you sure')) {
//     console.log('yes');
//  }else{
//  console.log('no');
//  }
// }

//  Window Properties



//  Outer window width and height

let OHW;

OHW = window.outerHeight;
OHW = window.outerWidth;

console.log(OHW);


//  Inner window width and height

let IHW;

IHW = window.innerHeight;
IHW = window.innerWidth;

console.log(IHW);

//  Scroll points

let SCP;

SCP = window.scrollY;
SCP = window.scrollX;

console.log(SCP);

//  Location object

let loc;

// loc = window.location;
// loc = window.location.hostname;

//  Redirect

// loc = window.location.href;

//  Reload

// loc = window.location.reload();


// console.log(loc); // Outputs the current web address location properties

//  History object - Navigates forward / backward to the websites we have visited

let his;
// his = window.history.go();

//  History length

// his = window.history.length();

// console.log(his);

//  Navigator Object - Deals with the browser



/*--------------------------------------------------------------------------------------------------- */

//  Block Scope with let and const


/* 

- var is a global scope variable
- var can have a different value on the  same variable name that does not affect the output in the function scope
- value of var gets changed in the block level scope while let and const are unaffected
- using var is a severe security risk
- 
- let and const are method scope variable

*/

//  Global scope


var a = 1;
let b = 2;
const c = 3;

//  Function Scope

// function test() {
//     var a = 4;
//     let b = 5;
//     const c = 6;

//     console.log('Function Scope: ', a, b, c);
// }

// test();



//  Block Level scope

// if (true) {
//     var a = 4;
//     let b = 5;
//     const c = 6;
//     console.log('Block level scope', a, b, c);
// }

//  Testing with loop

for (let a = 0; a <= 10; a++) {
    console.log(a);
}

console.log('Global Scope: ', a, b, c);

/*--------------------------------------------------------------------------------------------------- */

//  DOM Manupilation & Events

/*--------------------------------------------------------------------------------------------------- */

/*--------------------------------------------------------------------------------------------------- */

//  What is the DOM ?


/* 

- DOM stands for Document Object Model
- Tree of Nodes / Elements created by the browser
- JavaScript can be used to read/write/manupilate to the DOM
- Object Oriented Representation 

*/


/*--------------------------------------------------------------------------------------------------- */

//  Examining the Document Object


/* 

- Look at the properties of the Document Object
- Document is a property of the Window object
- JQuery no longer needed with the advancements of JavaScript
- DOM can give us different type of structures, such as HTML collection 

*/

//Initialize variable for calling document properties

let doc;


//  Entire document - Starting from <!DOCTYPE html> tag to the ending </html> tag including all tags in between

doc = document;

//  HTML Collection - Formatted like an array but you cannot use array methods on it such as Foreach loop

//  Node List - Array collection that can be used with Foreach loop

//  Fetch entire HTML collection

doc = document.all;

//  Accessing HTML Collection Indexes;  They are zero based just like an array

doc = document.all[0];

//  Number of elements in the DOM

doc = document.all.length;

//  Accessing only the head property

doc = document.head;

//  Accessing only the body property

doc = document.body;

//  Accessing only the !DOCTYPE property

doc = document.doctype;

//  Accessing the domain

doc = document.domain;

//  Accessing URL

doc = document.URL;

//  Accessing Character Set

doc = document.characterSet;

//  Accessing Content Type

doc = document.contentType;

//  Accessing Document properties without selectors (NOT RECOMMENDED)

//  Accessing all the forms

doc = document.forms;

//  Accessing single form

doc = document.forms[0];

//  Accessing form properties

doc = document.forms[0].id; //  Form ID

doc = document.forms[0].method; //  Form Method

doc = document.forms[0].action; //  Form Action

//  Accessing document links

doc = document.links;

//  Accessing single link properties

doc = document.links[0]; // All properties

doc = document.links[0].id //  Link ID

doc = document.links[0].className //    Link classes

doc = document.links[0].classList //    Collection of Link classes

//  Accessing document images

doc = document.images;

//  Accessing document scripts

doc = document.scripts;

//  Accessing document script attriutes

doc = document.scripts[2].getAttribute('src');

//  Accessing forEach without converting to Array

let scri = document.scripts;

// scri.forEach(function(sci) {
//     console.log(sci); //  Uncaught TypeError: scri.forEach is not a function
// });

//  Convert HTML Collection to Array

let scriArr = Array.from(scri);

scriArr.forEach(function(sci) {
    console.log(sci);

    //  getAttribute

    console.log(sci.getAttribute('src'));
});




console.log(doc);

/*--------------------------------------------------------------------------------------------------- */

//  DOM Selectors for Single Elements


/* 

- Document Object Methods that allow to pull objects and manupilate them in the DOM
- Jquery was initially used for this purpose but JS has become more powerful and able to perform tasks that Jquery used to do
- Jquery seems unecessry as it adds unwanted bloat to the code
- Jquery is still good for integrating plugins for quick simple actions that do some specific task
- Two types of DOM selectors
    -   Single Element Selector
        Allows you to grab one elementby its ID or class name

    -   Multiple Element Selector
        Will grab all the elements using that class and return an HTML Collection


*/

//  Single Element Selector

//  document.getelementbyID

console.log(document.getElementById('task-title'));

//  Get various properties from the element

//  ID

console.log(document.getElementById('task-title').id);

//  Class

console.log(document.getElementById('task-title').className);

//  Change Style

console.log(document.getElementById('task-title').style.color = 'Green');

//  Change Content

//  Text

console.log(document.getElementById('task-title').textContent = 'Task List');

console.log(document.getElementById('task-title').innerText = 'My Text');

//  HTML

console.log(document.getElementById('task-title').innerHTML = '<h1>Task List</h1>');

//  It is recommended to use variables when changing content via JavaScript

const taskTitle = document.getElementById('task-title');

console.log(taskTitle.textContent = 'Task Title Variable');


// //  document.QuerySelector();

//  ID

console.log(document.querySelector('#task-title'));

//  Class

console.log(document.querySelector('.card-title'));

//  Get Element Directly

console.log(document.querySelector('h5')); //Only gets the first element from multiple same elements

//  List

console.log(document.querySelector('li').style.color = 'red');

//  Nested Classes

console.log(document.querySelector('ul li').style.color = 'blue');

//  Using CSS Psuedo Classes

console.log(document.querySelector('li:last-child').style.color = 'yellow');

//  Changing 3rd Item in the list

console.log(document.querySelector('li:nth-child(3)').style.color = 'brown');

// //  Changing Text Content

// console.log(document.querySelector('li:nth-child(4)').textContent = '4th Item');

//  Odd / Even

// console.log(document.querySelector('li:nth-child(odd)').style.color = 'purple');
// console.log(document.querySelector('li:nth-child(even)').style.color = 'pink');


/*--------------------------------------------------------------------------------------------------- */

//  DOM Selectors for Multiple Elements


/* 

 - Return HTML Collection or Node list which are similar to arrays except with certain limitations
 - Can be converted to arrays


*/

//  docuemnt.getElementsByClassName

const items = document.getElementsByClassName('collection-item'); //    Each item has a class of 'collection-item'

console.log(items);

//  To get a single item

console.log(items[0]);

//  Change color

console.log(items[0].style.color = 'red');

// //  Change content

// console.log(items[3].textContent = '3rd Item');

//  document.getElementsByClassName do not need to be used on aglobal scope

//  Via Query Selector

const listItems = document.querySelector('ul').getElementsByClassName('collection-item');

console.log(listItems); //   Added a DIV with class of collection-item. The Output shows the DIV as thepart of the collection / node list. Can be attached to single elements

// //  document.getElementsByTagName

let tagitems = document.getElementsByTagName('li');

console.log(tagitems);

//  To get a single item

console.log(tagitems[0]);

//  Change color

console.log(tagitems[0].style.color = 'red');

// //  Change content

// console.log(tagitems[3].textContent = '3rd Item');

//  Convert HTMLCollection to Array

tagitems = Array.from(tagitems);

//  Array Reverse method

rev = tagitems.reverse();
console.log(rev);

//  forEach

tagitems.forEach(function(li, index) {
    console.log(li);

    //  Output class names

    console.log(li.className);

    //     //  Change Text Content

    //     console.log(li.textContent = 'Hello');

    //     //  Passing index and Template iterals

    //     console.log(li.textContent = `${index}:Hello`);

})

//  document.querySelectorAll

/*
    
- Similar to previous collection except that outputs are generated to a nodelist
- Enables use of array methods such as reverse() and forEach without needing to convert the collection to an array before doing operations on them
    
*/

const qsaitems = document.querySelectorAll('ul.collection li.collection-item');

// console.log(qsaitems);

// //  forEach

qsaitems.forEach(function(li, index) {
    //     console.log(li);

    //     //  Output class names

    //     console.log(li.className);

    //     //  Change Text Content

    //     console.log(li.textContent = 'Hello');

    //     //  Passing index and Template iterals

    //     console.log(li.textContent = `${index}:Hello`);

    //  Odd / Even

    const liOdd = document.querySelectorAll('li:nth-child(odd)');
    const liEven = document.querySelectorAll('li:nth-child(even)');

    liOdd.forEach(function(li, index) {
        li.style.background = '#ccc';
    });

    liEven.forEach(function(li, index) {
        li.style.background = 'aqua';
    });

    // console.log(document.querySelectorAll('li:nth-child(odd)').style.background = '#ccc');
    // console.log(document.querySelectorAll('li:nth-child(even)').style.background = '#fff');

})



/*--------------------------------------------------------------------------------------------------- */

//  Traversing the DOM


/* 

- Navigate throughout the DOM
- Look at properties attached to the DOM nodes
- Aim to get children and parents of nodes

*/

let trav;

const travlist = document.querySelector('ul.collection');
const travListItem = document.querySelector('li.collection-item');

trav = travlist;
trav = travListItem;

//  Get child nodes of the UL

trav = travlist.childNodes; //  Output is a Node list of all the child nodes in the collection. There are also line breaks which are counted as text in the node list

//  Get Children Element Nodes

trav = travlist.children; // Outputs an HTML collection of the li children in the list. No line break nodes

//  Single node

// trav = travlist.childNodes[0]; //  Outputs selected Node

//  Node name

// trav = travlist.childNodes[0].nodeName; //  Outputs node name of the selected node

//  Node Type

// trav = travlist.childNodes[0].nodeType; //  Outputs Node Type. Each Number represents a Node Type

/*

    1 - Element
    2 - Attribute (Deprecated)
    3 - Text Node
    8 - Comment
    9 - Document itself
    10 - Doctype

- childNodes give us all types of nodes and not just elements. children give us only elements

 */

//  Get Specific Children Element Nodes

trav = travlist.children[2];

//  Change Text

// travlist.children[2].textContent = '2nd Child Element';

//  Children of Children

trav = travlist.children[2].children;

//  firstChild

trav = travlist.firstChild; //  Gives the first node

//  firsElementChild

trav = travlist.firstElementChild; //    Gives the first element node

//  lastChild

trav = travlist.lastChild; //  Gives the last node

//  lastElementChild

trav = travlist.lastElementChild; //    Gives the lasrt element node

//  firstChild

trav = travlist.firstChild; //  Gives the first node

//  childElementCount

trav = travlist.childElementCount; //    Counts the number of child elements



//  Parent Nodes

//  Get parent nodes of the UL

trav = travListItem.parentNode; //  Output is a Node list of all the parent nodes in the collection. There are also line breaks which are counted as text in the node list

//  Get Parent Element Nodes

trav = travListItem.parentElement; // Same as Parent Node

//  Parents of Parent

trav = travListItem.parentElement.parentElement; //  Outputs <div class="card-action"> since the div comes before the selected UL parent node

//  Siblings

//  Get next sibling node

trav = travListItem.nextSibling;

//  Get next sibling element

trav = travListItem.nextElementSibling;

//  Get 3rd sibling element

trav = travListItem.nextElementSibling.nextElementSibling;

//  Get previous sibling node

trav = travListItem.previousSibling;

//  Get next sibling element

trav = travListItem.previousElementSibling;



console.log(trav);


/*--------------------------------------------------------------------------------------------------- */

//  Creating the Elements


/* 



*/


//  Add a new list item element

const ele = document.createElement('li');

//  Add class

ele.className = 'collection-item';

//  Add ID

ele.id = 'new-id';

//  Add Attribute

ele.setAttribute('title', 'New Item');

//  Create and append Text Node

ele.appendChild(document.createTextNode('New List item')); // appendChild lets you add content inside the element

//  Append newly created item to the existing list

document.querySelector('ul.collection').appendChild(ele);

//  Create new link element

const elelink = document.createElement('a');

//  Add Link Class
elelink.className = 'delete-item secondary-content';

//  Add icon

elelink.innerHTML = '<i class="fa fa-remove"></i>';

//  Append link to New li

ele.appendChild(elelink);

console.log(ele);

/*--------------------------------------------------------------------------------------------------- */

//  Removing and Replacing Elements


/* 

- How to replace elements in the DOM
- How to remove elements
- How to work with classes
- How to manupilate classes and attributes


*/

//  Replacing Elements

//  Create new element

const newHeading = document.createElement('h2');

//  Add ID

newHeading.id = 'task-title';

//  New Text node

newHeading.appendChild(document.createTextNode('New Task List'));

//  Get the old heading

const oldHeading = document.getElementById('task-title');

//  replaceChild method requires having a parent element. In this case the parent element is the div with class "class-action"

const cardAction = document.querySelector('.card-action');

//  Replace heading

cardAction.replaceChild(newHeading, oldHeading);

//  Remove Elements

const remlis = document.querySelectorAll('li');
const newList = document.querySelector('ul');

//  Remove list items

remlis[5].remove(); //  Removed the last list item which was newly created last time

//Remove Child element

newList.removeChild(remlis[4]);

//  Classes and Attributes

const firstli = document.querySelector('li:last-child');

const firstlink = firstli.children[0];

let vlink;

//  Class names list

vlink = firstlink.className;

//  Class names list in DOM tokenlist which displays like an array

vlink = firstlink.classList;

//  Access single item in DOM Token List

vlink = firstlink.classList[0];

//  Add a class using classList

vlink = firstlink.classList.add('new-class');

//  Remove a class using classList

vlink = firstlink.classList.remove('new-class');

vlink = firstlink;

console.log(vlink);

//  Attributes

//  Get Attributes

vlink = firstlink.getAttribute('href');

//  Set Attributes

vlink = firstlink.setAttribute('href', 'https://www.google.com');

//  Check for Attributes

vlink = firstlink.hasAttribute('href');

//  Remove Attributes

vlink = firstlink.removeAttribute('href');


/*--------------------------------------------------------------------------------------------------- */

//  Event Listeners and the Event Object


/* 

 -   Takes in two inputs: an event type (for example click) and a function which shows the desired output for the event

 -  Some events have default behavious(mouse click to select, link redirects etc.) 
 -  To stop the event listner from performing its default behaviour we add a parameter to the addEventListener function


*/

//  Select the clear tasks button

document.querySelector('.clear-tasks').addEventListener('click', function(e) {
    console.log('Clicked')
        //  Prevent Default behaviour

    e.preventDefault();
});

//  Named function

// document.querySelector('.clear-tasks').addEventListener('click', onClick);

// function onClick(e) {
//     console.log('Clicked in a named function');
//     e.preventDefault();
// }

//  Event Objects




document.querySelector('.clear-tasks').addEventListener('click', onClick);

function onClick(e) {
    let eo;
    eo = e;

    //  Event Target element

    eo = e.target;

    //  Event target element attributes

    // eo = e.target.id;
    // eo = e.className;
    // eo = e.classList;

    // //  Event Type

    // eo = e.type

    // //  Timestamp

    // eo = e.timeStamp;

    // //  Event coordinates relative to the window

    // eo = e.clientX;
    // eo = e.clientY;

    // //  Event coordinates relative to the element

    // eo = e.offSetX;
    // eo = e.offSetY;


    console.log(eo);
    e.preventDefault();
}

/*--------------------------------------------------------------------------------------------------- */

//  Mouse Events


/* 

 


*/

//  Set Event on clear tasks button

const clearBtn = document.querySelector('.clear-tasks');
const card = document.querySelector('.card');
const heading = document.querySelector('h5');


//  Create an Event Handler

function runEvent(e) {
    console.log(`Event Type: ${e.type}`);

    //  Display Mouse Move Coordinates

    heading.textContent = `MouseX: ${e.offsetX} MouseY: ${e.offsetY}`;

    //  Change background color

    document.body.style.backgroundColor = `rgb(${e.offsetX}, ${e.offsetY}, 60)`;
}

// //  Click

// clearBtn.addEventListener('click', runEvent);

// //  Double Click

// clearBtn.addEventListener('dblclick', runEvent);

// //  Mouse Down - Click and hold mouse button

// clearBtn.addEventListener('mousedown', runEvent);

// //  Mouse Up - Click and hold, then let go mouse button

// clearBtn.addEventListener('mouseup', runEvent);

// //  Mouse Enter on card list

// card.addEventListener('mouseenter', runEvent);

// //  Mouse Leave on card list

// card.addEventListener('mouseleave', runEvent);

// //  Mouse Over

// clearBtn.addEventListener('mouseover', runEvent);

// //  Mouse Out

// clearBtn.addEventListener('mouseout', runEvent);

// //  Mouse over and Mouse out only fire when you are going over another elementin the specified element

// //  Mouse Move - Movement inside the element

// card.addEventListener('mousemove', runEvent);

/*--------------------------------------------------------------------------------------------------- */

//  Keyboard and Input Events


/* 

    //  Capture submit event

// form.addEventListener('submit', formEvent);

//  Clear the input value

taskInput.value = "";

//  Events on the input instead of the form

//  Keydown - When key is pressed

//  Target - the element on which the event happens

// taskInput.addEventListener('keydown', formEvent);
 
 //  Keyup - Key released after press

// taskInput.addEventListener('keyup', formEvent);

//  Keypress - Key pressed

// taskInput.addEventListener('keypress', formEvent);

//  Focus - click inside input and set focus on element

// taskInput.addEventListener('focus', formEvent);

//  Blurr - Clicked outside of input

// taskInput.addEventListener('blur', formEvent);

//  Cut - cut input

// taskInput.addEventListener('cut', formEvent);

//  Paste - paste content from clipboard

// taskInput.addEventListener('paste', formEvent);

//  Input - Any input event

// taskInput.addEventListener('input', formEvent);

//  Change - Works on select input (In case of materialize, jquery needs to be added in order to see the select input. Disable Materialize temporarily to see it work)

// select.addEventListener('select', formEvent);


*/

const form = document.querySelector('form');
const taskInput = document.getElementById('task');
const select = document.querySelector('select');

//  Capture submit event

// form.addEventListener('submit', formEvent);

//  Clear the input value

taskInput.value = "";

//  Events on the input instead of the form

//  Keydown - When key is pressed

//  Target - the element on which the event happens

// taskInput.addEventListener('keydown', formEvent);

// function formEvent(e) {

//     //  Get input value

//     // console.log(taskInput.value);

//     console.log(`Event Type: ${e.type}`);

//     //  Get Target input value on keydown

//     // console.log(e.target.value);

//     //  Change inner Text in another element via input value

//     // heading.innerText = e.target.value;

//     // e.preventDefault();

// }


//  Keyup - Key released after press

// taskInput.addEventListener('keyup', formEvent);

//  Keypress - Key pressed

// taskInput.addEventListener('keypress', formEvent);

//  Focus - click inside input and set focus on element

// taskInput.addEventListener('focus', formEvent);

//  Blurr - Clicked outside of input

// taskInput.addEventListener('blur', formEvent);

//  Cut - cut input

// taskInput.addEventListener('cut', formEvent);

//  Paste - paste content from clipboard

// taskInput.addEventListener('paste', formEvent);

// function formEvent(e) {

//     //  Get input value

//     // console.log(taskInput.value);

//     console.log(`Event Type: ${e.type}`);

//     //  Get Target input value on keyup

//     console.log(e.target.value);

//     //  Change inner Text in another element via input value

//     // heading.innerText = e.target.value;

//     // e.preventDefault();

// }


/*--------------------------------------------------------------------------------------------------- */

//  Event Bubbling and Delegation


/* 

  - Event bubbling is the bubbling up of events through the DOM
  - When a particular event occurs on an element it will ubble up to its parent
  - Event delegation is opposite of Event bubbling
  - We put a listener in one of the parent elements and use logic n the target element we want to work on


*/

//  Event Bubbling


//  Col (Ancestor)

// document.querySelector('.col').addEventListener('click', function() {
//     console.log('col');
// });


// //  Card (Grand Parent)

// document.querySelector('.card').addEventListener('click', function() {
//     console.log('card');
// });


// //  Card Content (Parent)

// document.querySelector('.card-content').addEventListener('click', function() {
//     console.log('card content');
// });


// //  Card Title (Child)

// document.querySelector('.card-title').addEventListener('click', function() {
//     console.log('card title');
// });

//  Even if you only interact with the child element (clicking on card title class element), the event still fires andall the parent elements of the child show their output

//  Event Delegation - Putting event listner on parent and showing output till the child element
//  Also used when data is dynamically inserted via javaScript


//  Without Event Delegation

// const del = document.querySelector('.delete-item');

// del.addEventListener('click', delItem);

// function delItem() {
//     console.log('delete item'); //   Only the first delete-item element works, but not the rest
// }


//  With Event Delegation

document.body.addEventListener('click', delItem);

function delItem(e) {
    // console.log(e.target);

    //   Need to do conditional statements in order to get the correct output

    //  Targeting the icon class

    // if (e.target.className === 'fa fa-remove') {
    //     console.log('delete item'); //   outputs when we click on the icon
    // }

    //  Targetting the parent element

    // if (e.target.parentElement.className === 'delete-item secondary-content')

    //    Just adding delete item will not work since className takes the input of the classes n the whole string. However, this method becomes problematic if we add a new class to the list item as the className pattern will not be recongnized

    //   A better option is to use a class list instead to check if the specific class is part of that list

    // if (e.target.parentElement.classList.contains('delete-item')) {
    //     console.log('delete item'); //   outputs when we click on the icon
    // }

    //  Targetting the parent of a tag in order to delete the item

    if (e.target.parentElement.classList.contains('delete-item')) {
        console.log('delete item'); //   outputs when we click on the icon
        e.target.parentElement.parentElement.remove(); //   removes the item till the page is reloaded
    }

}

/*--------------------------------------------------------------------------------------------------- */

//  Local and Session Storage


/* 

- Local Storage API is part of window object
- Setting key value pairs
- Set value must be a string
- Objects of other types can be set as well but they must be converted to string via JSON.stringify() and output as JSON via JSON.parse()

- Difference between local and session storage

- Local storage must be cleared out manually when deleting cookies; Session storage stays untill the browser is closed

- Firefox: Developer Tools > Storage

*/

//  Set local storage item

localStorage.setItem('name', 'John');

//  Set session storage

sessionStorage.setItem('name', 'Beth');

//  If we comment both the set items,the local storage item stays even when thebrowser has been closed while the session storage item disappears once we close the browser

//  Remove from local storage

// localStorage.removeItem('name');

//  Get local storage item

const locname = localStorage.getItem('name');

console.log(locname);

//  Remove all local storage items

// localStorage.clear(); //    Sets the value to null

//  Create submit event

document.querySelector('form').addEventListener('submit', function(e) {
    const task = document.getElementById('task').value;

    //  Set item to local storage

    // localStorage.setItem('Task', task);

    //  New task overwrites the previous task

    //  Create an array of tasks and store as string

    let taskarr;

    //  Check if a task exists n the local storage. If yes, then add to the array. If no, then create an empty array

    if (localStorage.getItem('taskarr') === null) {

        //  Create a new empty array

        taskarr = [];


    } else {
        //  Get existing task item and convert to JSON String

        taskarr = JSON.parse(localStorage.getItem('taskarr'));

    }

    //  add task item to the array

    taskarr.push(task);

    //  Set item to localStorage in JSON string

    localStorage.setItem('tasks', JSON.stringify(taskarr));

    //  String Values are formatted as an array and stored in localStorage

    // console.log(taskarr);

    e.preventDefault();
});

const tsklist = JSON.parse(localStorage.getItem('taskarr'));

tsklist.forEach(function(task) {
    console.log(task) // Outputs all the tasks from he Task Array (taskarr) previously created
});

/*--------------------------------------------------------------------------------------------------- */

//  DOM Projects

/*--------------------------------------------------------------------------------------------------- */

/*--------------------------------------------------------------------------------------------------- */

//  Project 1 : Task List

/*--------------------------------------------------------------------------------------------------- */

/* 

Part 1: Add UI and Task Items - Made a mistake. Did not realize the submit button was outside of the form and that is why it was not submitting. The submit button should always be inside the form

Part 2: Delete and Filter Tasks - Watch out for where the event listeners are being called from. Calling the event listener from the wrong element will give no results

Part 3: Tasks not being loaded from localstorage, need to check

- Turns out the new array values were replacing the existing data. So needed to ensure that the new values were appended to the existing array values instead of replacing them

- This helped in creating an array collection of values (tasks), which was otherwise not being created following the tutorial

- With the successful creation of array list, the persistance of local storage was evident and paved the way for the next operation(removing items from local storage)

//  Deleting Individual items from local storage not working


*/


/*--------------------------------------------------------------------------------------------------- */

//  Project 3 : Number Guesser

/*--------------------------------------------------------------------------------------------------- */


/*





 */


/*--------------------------------------------------------------------------------------------------- */

//  Object Oriented JavaScript - ES5 & ES2015

/*--------------------------------------------------------------------------------------------------- */

//  Constructor and "this"keyword


/* 

 - Object Literals are fine for one time declaration but not for multiple instances
 - For multiple instances, constructors are used
 - Constructor names always start with capital
 - We can create as many constructor objects as we want
 - This refers to the current instance of the object
 - A Method is a function inside of an object
 - Date bject is one of the in built constructors ready for use



 */

// Object Literal example

const any = {
    name: 'Taran',
    age: 30,

}



console.log(any);


//  Constructor

function Person(name, dob) {

    //  Instantiate Person object 
    this.name = name; //    Dynamically allocate value to "name" key

    //  Instantiate object by passing date of birth

    this.birthday = new Date(dob);

    //  Calculate age

    this.calcAge = function() {
        const diff = Date.now() - this.birthday.getTime();

        //  New age from the calculated difference

        const ageDate = new Date(diff);

        //  Return age as an absolute number

        return Math.abs(ageDate.getUTCFullYear() - 1990);
    }

    const taran = new Person('Taran', '08/08/1990');
    // const tej = new Person('Tej');

    // Using "this" in a global scope (not inside a function) gives a window object

    console.log(taran.calcAge());

    // console.log(this);
}

/*--------------------------------------------------------------------------------------------------- */

//  Built in Constructor

/* 

 - Other than date, there are more types of constructors available in Javascript, but the are not recommended to be used
 - Primitive data types can be used as constructors, but it creates more problems than solutions. 
 - Unecessary, confusing, increases code block size, issues with comparision operators

 */

// Strings

const strName = 'Taran'; // Set primitive value to the variable

//  String as an object

const strName2 = new String('Taran');

//  Object properties

strName2foo = 'barr'; // Added a property/key called foo with value barr

//console.log(strName2);

//  Type comparison

// console.log(typeof strName); //  String

// console.log(typeof strName2); //  Object

if (strName === 'Taran') {
    console.log('String');
} else {
    console.log('Object');
}

//  Value and Type match as String


if (strName2 === 'Taran') {
    console.log('String');
} else {
    console.log('Object');
}

//  Value matched but not the data type


//  Numbers

const primNum1 = 5; //  Primitive Number
const objNum2 = new Number(6); // Number object

console.log(typeof primNum1);

console.log(typeof objNum2);

//  Boolean

const bool1 = true; //   Primitive Boolean
const bool2 = new Boolean(true); //  Boolean object type

console.log(bool1);

console.log(bool2);

//  Functions

//  Primitive function

const getSum1 = function(x, y) {
    return x + y;
}

//  Function object

//  The last argument is the output you would like to show

const getSum2 = new Function('x', 'y', 'return 1+1');

console.log(getSum1(1, 1));

console.log(getSum2());

//  Objects

const constantine = { name: 'John' };

console.log(constantine);

const johnW = new Object({ name: 'J Constantine' });

console.log(johnW);

//  Arrays

const Arr1 = [1, 2, 3, 4, 5];

const Arr2 = new Array([6, 7, 8, 9, 0]);

console.log(Arr1);

console.log(Arr2);

//  Regular expressions

const regEx1 = /\w+/; //Regular expression that searches for a word more than once

const regEx2 = new RegExp('\\w+');

console.log(regEx1); //  Prints the expression as expected
console.log(regEx2); // Forward slash (/) missing if not escaped



/*--------------------------------------------------------------------------------------------------- */

//  Project 2 : Loan Calculator

/*--------------------------------------------------------------------------------------------------- */



/*





 */



/*--------------------------------------------------------------------------------------------------- */

//  Prototypes


/* 



 */



/*--------------------------------------------------------------------------------------------------- */