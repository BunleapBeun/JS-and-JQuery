/*

Array properties and methods
- lenght:​ មើលចំនួន array item
- concat(): plus items array
- reverse(): បញ្ច្រាស​ Items order
- unshift(): បន្ថែម Items ខាងដើម
- shift(): ដក Items ខាងដើម
- push(): បន្ថែម item ខាងចុង
- pop(): ដក items ខាងចុង
- splice(index, items): ដក item array និង ប៉ះពាល់ original array

*/

const names = ['a', 'b', 'c', 'd'];
// const newName = ['e', 'f', 'g'];
// const allName = names.concat(newName);

// console.log(names.length); // output: 4
// console.log(allName); // array names plus newName array
// console.log(allName.reverse()); // reverse

// names.unshift();
// names.shift();
// console.log(names);

const newName = names.splice(0, 2);
console.log(newName);
console.log(names);






