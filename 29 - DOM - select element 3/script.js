// select element from javascript
// return nodelist similar to array
// getElementByName, querySelectorAll

// ! nodelist can use with forEach

// ? for get by name
// const element = document.getElementsByName('color');
// console.log(element);


// ? seletor all

const element = document.querySelectorAll('li');

element.forEach(function (i) {
    console.log(i);
})

