// create function or declare
// invoke function or call for use function
// params, or paramate(when add var to function call param) and excument(when add value to param we call arguments)

// function sum() {
//     console.log("This is my first function.");
// }

// we create function for return something
// function sum() {
//     // in the block of function we call login
//     // console.log("this is my function.");

//     const num1 = 20;
//     const num2 = 20;

//     return num1 * num2; // output: 400
//     // return 10 + 10; // output: 20, and in function for return can use return only bottom of function for return value, can not use on top the block of function
// }



// arrow function of ES6

// var sum = () => {
// Logic
//     return 20 + 20;
// }

// use only one line with arrow func we can write like this

// var sum = () => 30 + 20;


// function ex 2 with param and argument

function sum(num1, num2) {
    return num1 + num2;
}

const n1 = 30;
const n2 = 50;

// add value to var or we call assign value to fun or give argument
// console.log(sum(10, 20)); // output: 30

console.log(sum(n1, n2)); // output: 80, cuz it get value from new var, but i will get cal method from function that we assign to it



const yearArray = [1999];

                   // paramaters
function guessYear(cy, by) {
    return cy - by + " years old.";
}

const currentYear = 2024;
const birthYear = yearArray[0];
                      // argument
console.log(guessYear(currentYear, birthYear)); // output: 25 years old.


