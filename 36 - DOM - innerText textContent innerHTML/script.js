// innerText vs textContent: use for input text
// innerHTML

const element = document.querySelector('h1');

// console.log(element.innerText); // get only text and regular space
console.log(element.textContent); // textContent get all with space

// element.innerText = "Hello";

element.innerHTML = "<small>Hellow</small>"; // can get html tag or element