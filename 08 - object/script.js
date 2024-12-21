// create object (key/value pairs)
// access object properties and method

// curly brack {} for object, square bracket [] for array

const obj = {
    //key,  value | key and value = we call it properties
    names: "Bunleap",
    age: 24,
    position: "Web dev",

    //function but in func in obj we call method
    walking: function walk() {
        console.log("Yeah, I can walk");
    }
}


// access obj by key name
// console.log(obj.names); // result: Bunleap

// access obj to method or func

obj.walking(); // result: Yeah, I can walk


// obj with array
const person = {
    names: "Alex",
    age: 19,
    single: true,
    learning: function () {
        return "Learning coding.";
    },
    array: [10, 5, null]
}
console.log(person.array[1]);



// array with obj
const arr = [
    { id: 1, names: "Bunleap", age: 19 },
    { id: 2, names: "Bunleap", age: 19 },
    { id: 3, names: "Bunleap", age: 19 },
    { id: 4, names: "Bunleap", age: 19 }
]

// access obj in array

console.log(arr[3].names);
