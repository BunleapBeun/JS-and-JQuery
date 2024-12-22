// array forEach method
// interate in array or looping it

const people = [
    {id: 1, names: 'Bunleap'},
    {id: 2, names: 'Alex'},
    {id: 3, names: 'John'},
    {id: 4, names: 'Vispor'}
]

// console.log(people[0].names);
// console.log(people[1].names);
// console.log(people[2].names);
// console.log(people[3].names);

// ! how 1
// function showPerson(p) {
//     console.log(p.names);
// }
//                 // not invoke just reference
// people.forEach(showPerson);

// ! how 2
// people.forEach(function (p) {
//     console.log(p);
// })

// ! how 3
// arrow func ES6
people.forEach((person) => {
    console.log(person.names);
})