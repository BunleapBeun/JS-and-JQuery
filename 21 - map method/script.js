// map method
// return new array but not change original
//? the different between forEach and map is map can return value and forEach can not return value

const people = [
    { id: 1, names: 'Bunleap', age: 24 },
    { id: 2, names: 'Alex', age: 34 },
    { id: 3, names: 'John', age: 64 },
    { id: 4, names: 'Vispor', age: 25 }
];

// ! how 1
// const newPeople = people.map(function(p) {
//     return p.age;
// });
// // console.log(newPeople);  

// // ! how 2
// const newPeople = people.map(function(p) {
//     return {
//         name: p.name,
//         age: p.age
//     };
// });
// console.log(newPeople);

// ! display on webpage
const newPeople = people.map(function(p) {
    return `<h2>${p.names}</h2>`
});

document.body.innerHTML = newPeople.join('');

// ? foreach 

const forEachPeople = people.forEach((p) => {
    return p;
});
console.log(forEachPeople); // output: undefined, cuz foreach can not return new value
