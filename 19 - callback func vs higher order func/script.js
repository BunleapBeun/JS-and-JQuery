// Callback Function vs Higher Order Function

function hello(name) {
    return `Hello ${name} remember me?`;
}

function greeting(func) {
    const myName = "Bunleap";
    return `${func('Lisa')} My name is ${myName}, How are you doing?`;
}

console.log(greeting(hello));

