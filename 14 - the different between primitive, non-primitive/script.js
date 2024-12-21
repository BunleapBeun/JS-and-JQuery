/*

the different between Primitive and Non-Primitive

*/


// primitive data type:

// for primitive data type if u assign new value to it it doesn't effect to original value
// const names = 'Bunleap';
// let newName = names;

// newName = 'Alex';

// console.log(names);
// console.log(newName);


// non-primitive data type:
// if you assign new value to variable, so the value it will change to new value

// const person = {names: 'Bunleap'};
// const newPerson = person;
// newPerson.names = 'Alex';

// console.log(person, newPerson);


const arr1 = [10];
const arr2 = arr1;
arr2[0] = 20;

console.log(arr2, arr1);

