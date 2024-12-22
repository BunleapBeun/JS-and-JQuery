// filter method


const people = [
    { id: 1, names: 'Bunleap', age: 24 },
    { id: 2, names: 'Alex', age: 14 },
    { id: 3, names: 'John', age: 18 },
    { id: 4, names: 'Vispor', age: 25 }
];

// ! filter
const newPeople = people.filter(function (p) {
    // return p.age <= 20;
    return p.names === 'Bunleap'
});

console.log(newPeople);

// ! map method
// const newPeople = people.map(function (p) {
//     return p.age < 20;
// });

// console.log(newPeople); // output: false, cuz map method can not do that

