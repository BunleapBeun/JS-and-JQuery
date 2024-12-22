// children vs parentElement
// firstElementChild, lastElementChild
// previousElementSibling, nextElementSibling


// ? children element
// const element = document.querySelector('.list').children;
// console.log(element);

// const element = document.querySelector('.list');
// console.log(element.children);


// ? parent element

// const element = document.querySelector('li');
// // console.log(element.parentElement); // to ul
// console.log(element.parentElement.parentElement); // to body

// first child element

const element = document.querySelector('.list');
console.log(element.firstChild);
