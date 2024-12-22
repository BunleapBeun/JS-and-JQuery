// ! find method
// ? return first item that match condition
// ? dun return as new array

const people = [
    { id: 1, names: 'Bunleap', age: 24 },
    { id: 2, names: 'Alex', age: 14 },
    { id: 3, names: 'John', age: 18 },
    { id: 4, names: 'Vispor', age: 25 }
];

const newPerson = people.find(function (p) {
    return p.id == 1;
});

console.log(newPerson);