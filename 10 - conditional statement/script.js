// ! Conditional statement
// ! >, <, >=, <=, ==, ===, !, !=, !==
// ! if, else if, else

// ! for the condition statement, its work only with true condition

// ! use with boolean
// if (false) {
//     console.log("Hello World.");
// } else if (true) {
//     console.log('This is: else if');
// } else {
//     console.log('This is else.');

// }

// const num1 = 10;
// const num2 = '10';

// if (num1 == num2) {
//     console.log("Hello World.");
// }

// if (num1 === num2) {
//     console.log("Hello World.");
// } else {
//     console.log('It\'s not eqaul');

// }

// if (num1 >= num2) {
//     console.log("Hello World.");
// } else {
//     console.log('It\'s not eqaul');

// }

// if (num1 <= num2) {
//     console.log("Hello World.");
// } else {
//     console.log('It\'s not eqaul');

// }

// if (num1 < num2) {
//     console.log("Hello World.");
// } else {
//     console.log('It\'s not eqaul');

// }

// if (num1 > num2) {
//     console.log("Hello World.");
// } else {
//     console.log('It\'s not eqaul');

// }

// if (!(num1 == num2)) {
//     console.log("Hello World.");
// } else {
//     console.log('It\'s not eqaul');
// }

// if (num1 != num2) {
//     console.log("Hello World.");
// } else {
//     console.log('It\'s not eqaul');
// }

// if (num1 !== num2) {
//     console.log("Hello World.");
// } else {
//     console.log('It\'s not eqaul');
// }


// ? for == it compare with value, but only with string number it will true, but with string text it will false
// console.log(num1 == num2);

// ? for === or (!==) it compare with type if it different type but the same value it still flase
// console.log(num1 === num2);



// ! or ||, and &&

// const names = "Bunleap";
// const age = 199;

// // for || (or), need only true one, it will be true
// if (names === "Bunleap" || age === 19) {
//     console.log('This is true.');
// } else {
//     console.log('This is not true.');

// }

// // for && (and), need to true both, it will true
// if (names === "Bunleap" && age === 19) {
//     console.log('This is true.');
// } else {
//     console.log('This is not true.');

// }



// ! switch

// * if you use if statement

var student = 2;

// if (student === 1) {
//     console.log('One student');;
// }
// if (student === 2) {
//     console.log('Two students');
// }
// if (student === 3) {
//     console.log('Three students');
// }
// if (student === 4) {
//     console.log('Four students');
// }

// ! if use switch

// var student = 2; // output: Two students

// switch (student) {
//     case 0:
//         console.log('There are no student.');
//         break;
//     case 1:
//         console.log('One student.');
//         break;
//     case 2:
//         console.log('Two students.');
//         break;
//     case 3:
//         console.log('Three students.');
//         break;
//     case 4:
//         console.log('Four students.');
//         break;
//     default:
//         console.log('There are many students.');
// }



// ! while loop

// ? code work again and again untill false condition

// ? take care about infinite loop

// let num = 10;

// while (num > 0) {
//     console.log('Hello World.');
//     // num--;
//     // num - 1;
//     num -= 1;
// }


// ! do while loop
// block code first then condition

// let dollar = 20;
// do {
//     console.log('This is dollar.');
//     dollar--;
// } while (dollar > 0);


// ! for loop

// let n;

// for (n = 0; n > 10; i++) {
//     console.log('rean code.');
// }

// for (let j = 10; j > 0; --j) {
//     console.log('rean code.');
// }

const arr = [1, 2, 3, 4];

// console.log(arr.length); // output: 4, length use for check num index in array

for (i = 0; i < arr.length; i++) {
    console.log(arr.length);
}

