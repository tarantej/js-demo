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


//  document.QuerySelector();

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

//  Changing Text Content

console.log(document.querySelector('li:nth-child(4)').textContent = '4th Item');

//  Odd / Even

console.log(document.querySelector('li:nth-child(odd)').style.color = 'purple');
console.log(document.querySelector('li:nth-child(even)').style.color = 'pink');


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

//  Change content

console.log(items[3].textContent = '3rd Item');

//  document.getElementsByClassName do not need to be used on aglobal scope

//  Via Query Selector

const listItems = document.querySelector('ul').getElementsByClassName('collection-item');

console.log(listItems); //   Added a DIV with class of collection-item. The Output shows the DIV as thepart of the collection / node list. Can be attached to single elements

//  document.getElementsByTagName

let tagitems = document.getElementsByTagName('li');

console.log(tagitems);

//  To get a single item

console.log(tagitems[0]);

//  Change color

console.log(tagitems[0].style.color = 'red');

//  Change content

console.log(tagitems[3].textContent = '3rd Item');

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

    //  Change Text Content

    console.log(li.textContent = 'Hello');

    //  Passing index and Template iterals

    console.log(li.textContent = `${index}:Hello`);

})

//  document.querySelectorAll

/*
    
- Similar to previous collection except that outputs are generated to a nodelist
- Enables use of array methods such as reverse() and forEach without needing to convert the collection to an array before doing operations on them
    
*/

const qsaitems = document.querySelectorAll('ul.collection li.collection-item');

console.log(qsaitems);

//  forEach

qsaitems.forEach(function(li, index) {
    console.log(li);

    //  Output class names

    console.log(li.className);

    //  Change Text Content

    console.log(li.textContent = 'Hello');

    //  Passing index and Template iterals

    console.log(li.textContent = `${index}:Hello`);

    //  Odd / Even

    const liOdd = document.querySelectorAll('li:nth-child(odd)');
    const liEven = document.querySelectorAll('li:nth-child(even)');

    liOdd.forEach(function(li, index) {
        li.style.background = '#ccc';
    });

    // console.log(document.querySelectorAll('li:nth-child(odd)').style.background = '#ccc');
    // console.log(document.querySelectorAll('li:nth-child(even)').style.background = 'aqua');

})

/*--------------------------------------------------------------------------------------------------- */

//  Traversing the DOM


/* 



*/