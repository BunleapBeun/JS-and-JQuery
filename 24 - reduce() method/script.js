// reduce method
// param 1 (acc) total of calculation
// param 2m (curr) corrent value

// const people = [
//     { id: 1, names: 'Bunleap', age: 24 },
//     { id: 2, names: 'Alex', age: 14 },
//     { id: 3, names: 'John', age: 18 },
//     { id: 4, names: 'Vispor', age: 25 }
// ];

const salary = [100, 200, 150, 300];

const total = salary.reduce(function (p, c) {
    // console.log(`Total: ${p}`);
    // console.log(`Current value: ${c}`);

    // ! for reduce must return
    return p + c;
}, 0);

// console.log(`Sum Total: ${total}`);


// sum of salary with reduce method

const people = [
    {
        id: 1,
        names: 'Bunleap',
        age: 19,
        salary: 100000
    },
    {
        id: 2,
        names: 'John',
        age: 19,
        salary: 2000
    },
    {
        id: 3,
        names: 'Jack',
        age: 19,
        salary: 40000
    },
    {
        id: 4,
        names: 'Joseph',
        age: 19,
        salary: 10000
    }
];

const totalSalary = people.reduce(function (p, c) {
    console.log(`Previos salary: ${p}`);
    console.log(`Current salary: ${c.salary}`);
    const salary = c.salary;
    const total = p + salary;

    return total; // must return, if dun undefined
}, 0)

console.log(`Total Salary is: ${totalSalary}`);
