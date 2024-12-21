// ! var let const
// ! var function-scope or globle-scope
// ! let const block-scop


// // globle

// if () {
//     // block code
// }

// function sum() {
//     // logic
//     // let x = 10;
//     // const x = 10;
//     // var x = 10;
//     console.log(x + 10);
// }
// console.log(x); // can not show value of x, cuz x is not globle var, its declare in the block can use only in that block or logic 

if (true) {
    // const x = 10;
    // let x = 10;
    var x = 10;
    console.log(x);
}

console.log(x); // var can access, but can not access only with function 

// for const, let is block-scope can use only inside blcok
// ! but if you want all const let var as globle, you need to declare it outside of block code like outside condition or function, or like the top of code line