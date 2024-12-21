// create object with new keyword

const obj = new Object(); // create emty object

console.log(obj); // output: emty obj with nothing value or properties

obj.name = "Bunleap";
obj.age = 19;
obj.position = "Coding";
obj.teaching = function () {
    return "I am Blockchain Developer";
}

console.log(obj.name); // output: Bunleap
console.log(obj.teaching()); // output: I am Blockchain Developer
