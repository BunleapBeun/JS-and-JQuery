// ! select element from javascript
// ! return HTMLcollection the same as array
// ! getElementByTagName, getElementByClassName

// const element = document.getElementsByTagName('p');

// console.log(element[0]);

// ! ex 1

// console.log(element.length);

// const newElement = [...element];

// newElement.forEach(function (item) {
//     console.log(item);
    
// })

// for (let i = 0; i < element.length; i++) {
//     console.log(console.log(element[i]));
//     element[i].style.color = 'red';
// }

// ! ex 2

const element = document.getElementsByClassName('text');

console.log(element);

for (i = 0; i < element.length; i++) {
    console.log(console.log(element[i]));
    element[i].style.color = 'red';
}




